const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");
admin.initializeApp();

exports.chatAI = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "Vui lòng đăng nhập để sử dụng trợ lý AI."
    );
  }

  const {messages} = data;

  if (!messages || !Array.isArray(messages)) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Dữ liệu không hợp lệ."
    );
  }

  const trimmed = messages.slice(-10);

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": functions.config().anthropic.key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: `Bạn là trợ lý y tế AI của một trạm y tế phường.
Nhiệm vụ: hỗ trợ người dùng về đặt lịch khám, tư vấn triệu chứng cơ bản,
giải thích các dịch vụ y tế, nhắc nhở lịch tiêm chủng.
Trả lời ngắn gọn, thân thiện, bằng tiếng Việt.
Không chẩn đoán bệnh cụ thể — khuyến khích đến khám trực tiếp nếu cần.`,
        messages: trimmed,
      }),
    });

    const result = await response.json();
    const reply = result.content?.[0]?.text || "Xin lỗi, tôi không thể trả lời lúc này.";
    return {reply};

  } catch (err) {
    throw new functions.https.HttpsError("internal", "Lỗi kết nối AI.");
  }
});