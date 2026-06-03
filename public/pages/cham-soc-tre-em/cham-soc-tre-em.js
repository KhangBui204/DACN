const vaccineSchedule = [
	{ min: 0, max: 1, text: "Sơ sinh: Viêm gan B mũi 1, lao (BCG)." },
	{ min: 2, max: 3, text: "2-3 tháng: 6 trong 1, bại liệt, phế cầu theo tư vấn." },
	{ min: 4, max: 6, text: "4-6 tháng: Hoàn thiện mũi cơ bản, cân nhắc cúm mùa." },
	{ min: 7, max: 12, text: "7-12 tháng: Sởi hoặc MMR mũi đầu theo lịch." },
	{ min: 13, max: 24, text: "13-24 tháng: Nhắc lại DPT, viêm não Nhật Bản theo chỉ định." },
	{ min: 25, max: 144, text: "Trên 2 tuổi: Nhắc mũi cúm hàng năm và mũi bổ sung theo hồ sơ tiêm." }
];

function searchVaccineByAge() {
	const ageInput = document.getElementById("babyAge");
	const result = document.getElementById("lookupResult");
	const age = Number(ageInput.value);

	if (Number.isNaN(age) || age < 0) {
		result.textContent = "Vui lòng nhập số tháng tuổi hợp lệ.";
		return;
	}

	const item = vaccineSchedule.find((v) => age >= v.min && age <= v.max);
	result.textContent = item
		? `Gợi ý lịch tiêm cho bé ${age} tháng: ${item.text}`
		: "Chưa có lịch gợi ý cho độ tuổi này, vui lòng liên hệ trạm để được tư vấn chi tiết.";
}

function handleBmiCalculation() {
	const weightInput = document.getElementById("childWeight");
	const heightInput = document.getElementById("childHeight");
	const result = document.getElementById("bmiResult");
	const weight = Number(weightInput.value);
	const heightCm = Number(heightInput.value);

	if (!weight || weight <= 0 || !heightCm || heightCm <= 0) {
		result.textContent = "Vui lòng nhập đầy đủ cân nặng và chiều cao hợp lệ.";
		result.style.color = "#c64545";
		return;
	}

	const heightM = heightCm / 100;
	const bmi = weight / (heightM * heightM);
	result.textContent = `BMI tham khảo của bé là ${bmi.toFixed(1)}. Chỉ số này nên được bác sĩ nhi khoa đối chiếu theo tuổi và giới tính.`;
	result.style.color = "#196a43";
}

document.addEventListener("DOMContentLoaded", () => {
	const searchButton = document.getElementById("lookupBtn");
	const bmiButton = document.getElementById("bmiBtn");

	if (searchButton) {
		searchButton.addEventListener("click", searchVaccineByAge);
	}

	if (bmiButton) {
		bmiButton.addEventListener("click", handleBmiCalculation);
	}
});
