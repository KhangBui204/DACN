// 1. Hàm phân tích triệu chứng Sốt xuất huyết
function evaluateSymptoms() {
    const checkboxes = document.querySelectorAll('.symptom-check');
    const resultDiv = document.getElementById('checkResult');
    
    let selectedSymptoms = [];
    checkboxes.forEach(item => {
        if (item.checked) {
            selectedSymptoms.push(item.value);
        }
    });

    resultDiv.style.display = "block";

    // Xử lý các kịch bản dựa trên số triệu chứng được tích chọn
    if (selectedSymptoms.length === 0) {
        resultDiv.style.background = "#f8fafc";
        resultDiv.style.color = "#475569";
        resultDiv.style.border = "1px solid #e2e8f0";
        resultDiv.innerHTML = "✅ Bạn chưa chọn triệu chứng nào. Nếu có dấu hiệu mệt mỏi thất thường, hãy tiếp tục theo dõi sát sao.";
    } 
    else if (selectedSymptoms.includes('warning') || selectedSymptoms.length >= 3) {
        // Trường hợp nguy cấp (Có dấu hiệu xuất huyết nặng hoặc quá nhiều triệu chứng)
        resultDiv.style.background = "#fef2f2";
        resultDiv.style.color = "#991b1b";
        resultDiv.style.border = "1px solid #fee2e2";
        resultDiv.innerHTML = "🚨 <strong>CẢNH BÁO NGUY CƠ CAO:</strong> Bạn có các dấu hiệu cảnh báo nguy hiểm của bệnh Sốt xuất huyết. Vui lòng di chuyển đến Trạm y tế Phường hoặc bệnh viện gần nhất ngay lập tức để làm xét nghiệm máu. Không tự ý uống thuốc hạ sốt Ibuprofen.";
    } 
    else {
        // Trường hợp nguy cơ vừa (Sốt nhẹ hoặc mới chớm đau cơ)
        resultDiv.style.background = "#fffbeb";
        resultDiv.style.color = "#92400e";
        resultDiv.style.border = "1px solid #fef3c7";
        resultDiv.innerHTML = "⚠️ <strong>NGUY CƠ TRUNG BÌNH:</strong> Các triệu chứng gợi ý khả năng cao mắc bệnh siêu vi hoặc giai đoạn đầu Sốt xuất huyết. Hãy nghỉ ngơi, uống nhiều nước (Oresol), hạ sốt bằng Paracetamol đúng liều và đến Trạm y tế kiểm tra nếu sốt không hạ sau 48h.";
    }
}

// 2. Hàm xử lý nộp Form phản ánh dịch bệnh
function handleReport(event) {
    event.preventDefault(); // Ngăn tải lại trang

    // Thu thập thông tin từ form báo cáo dịch bệnh
    const reporterName = document.getElementById('reporter').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const disease = document.getElementById('diseaseType').value;
    const count = document.getElementById('patientCount').value;

    // Hiển thị thông báo (Phục vụ báo cáo tính năng Đồ án Front-end)
    alert(
        ` GỬI BÁO CÁO DỊCH BỆNH THÀNH CÔNG!\n\n` +
        `• Người báo cáo: ${reporterName} (${phone})\n` +
        `• Địa điểm nghi nhiễm: ${address}\n` +
        `• Loại dịch bệnh nghi ngờ: ${disease}\n` +
        `• Số ca nghi mắc: ${count} người\n\n` +
        `Thông tin đã chuyển thẳng đến Đội ngũ Y tế Dự phòng của Trạm y tế Phường để xử lý và xuống địa bàn xác minh.`
    );

    // Reset sạch form
    document.getElementById('reportForm').reset();
}