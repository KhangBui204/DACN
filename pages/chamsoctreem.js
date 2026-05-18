// Data mẫu dùng để tra cứu lịch tiêm chủng (Y tế dự phòng)
const vaccineRepo = {
    0: "Vắc-xin BCG (Phòng Lao); Vắc-xin Engerix B/Euvax B (Phòng Viêm gan B sơ sinh) - Tiêm tốt nhất 24h đầu sau sinh.",
    2: "Mũi 1 của: Vắc-xin 5 trong 1 hoặc 6 trong 1 (Bạch hầu, ho gà, uốn ván, viêm gan B, Hib, bại liệt); Vắc-xin uống phòng Rota virus.",
    3: "Mũi 2 của: Vắc-xin 5 trong 1 hoặc 6 trong 1; Vắc-xin uống phòng Rota virus.",
    4: "Mũi 3 của: Vắc-xin 5 trong 1 hoặc 6 trong 1; Vắc-xin uống phòng Rota virus.",
    9: "Mũi 1 vắc-xin Sởi đơn phòng bệnh Sởi; Vắc-xin phòng bệnh Viêm não Nhật Bản.",
    12: "Vắc-xin Thủy đậu; Mũi 1 vắc-xin 3 trong 1 MMR (Sởi - Quai bị - Rubella); Vắc-xin Viêm gan A."
};

// 1. Hàm xử lý chức năng tìm kiếm lịch tiêm chủng
function searchVaccine() {
    const ageInput = document.getElementById('babyAge').value;
    const resultDiv = document.getElementById('searchResult');
    
    // Kiểm tra dữ liệu rỗng
    if (!ageInput) {
        resultDiv.style.display = "block";
        resultDiv.style.background = "#fef2f2";
        resultDiv.style.color = "#991b1b";
        resultDiv.style.border = "1px solid #fee2e2";
        resultDiv.innerHTML = "⚠️ Vui lòng nhập số tháng tuổi của bé để hệ thống kiểm tra.";
        return;
    }

    const age = parseInt(ageInput);
    resultDiv.style.display = "block";

    // Khớp dữ liệu mốc thời gian tiêm chủng
    if (vaccineRepo[age]) {
        resultDiv.style.background = "#f0fdf4";
        resultDiv.style.color = "#166534";
        resultDiv.style.border = "1px solid #dcfce7";
        resultDiv.innerHTML = `<strong>Mốc ${age} tháng tuổi yêu cầu:</strong><br>${vaccineRepo[age]}`;
    } else {
        resultDiv.style.background = "#f8fafc";
        resultDiv.style.color = "#475569";
        resultDiv.style.border = "1px solid #e2e8f0";
        resultDiv.innerHTML = `Mốc <strong>${age} tháng tuổi</strong> không nằm trong danh mục tiêm chủng bắt buộc dồn dập. Tuy nhiên cha mẹ vẫn cần theo dõi các chỉ số thể chất chung của bé.`;
    }
}

// 2. Hàm xử lý sự kiện nộp Form đăng ký khám 
function submitForm(event) {
    event.preventDefault(); // Chặn hành vi tải lại trang mặc định của form

    // Thu thập dữ liệu từ các thẻ input
    const parentName = document.getElementById('parent').value;
    const babyName = document.getElementById('baby').value;
    const serviceName = document.getElementById('service').value;
    const dateSelected = document.getElementById('appointmentDate').value;

    // Xuất thông báo mô phỏng thành công cho Front-end đồ án
    alert(
        ` Đăng Ký Lịch Khám Thành Công!\n\n` +
        `• Phụ huynh: ${parentName}\n` +
        `• Tên bệnh nhi: ${babyName}\n` +
        `• Dịch vụ đăng ký: ${serviceName}\n` +
        `• Ngày hẹn: ${dateSelected}\n\n` +
        `Hệ thống Trạm y tế Phường đã ghi nhận dữ liệu phiếu khám của bé!`
    );

    // Làm sạch lại form sau khi nộp thành công
    document.getElementById('medicalForm').reset();
}