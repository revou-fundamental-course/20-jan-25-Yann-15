// Mengambil elemen-elemen dari DOM
const form = document.getElementById('bmi-form');
const resultSection = document.getElementById('result-section');
const resultBMI = document.getElementById('result-bmi');

// Fungsi untuk menghitung BMI
function calculateBMI(weight, height) {
    if (height <= 0 || weight <= 0) {
        return 'Invalid input';
    }
    
    // Menghitung BMI: BMI = berat (kg) / (tinggi (m) * tinggi (m))
    let heightInMeters = height / 100; // Mengubah tinggi menjadi meter
    let bmi = weight / (heightInMeters * heightInMeters);
    
    return bmi.toFixed(2); // Membatasi angka desimal menjadi 2
}

// Event listener untuk submit form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman reload saat submit form
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    // Menghitung dan menampilkan BMI
    const bmiResult = calculateBMI(weight, height);
    
    // Menampilkan hasil BMI
    resultBMI.textContent = bmiResult;
    resultSection.style.display = 'block'; // Menampilkan bagian hasil
    
    // Memberikan warna yang sesuai dengan BMI
    if (bmiResult < 18.5) {
        resultBMI.style.color = 'blue'; // Underweight
    } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
        resultBMI.style.color = 'green'; // Normal weight
    } else if (bmiResult >= 25 && bmiResult <= 29.9) {
        resultBMI.style.color = 'orange'; // Overweight
    } else {
        resultBMI.style.color = 'red'; // Obese
    }
});

// Event listener untuk reset form
form.addEventListener('reset', function() {
    resultSection.style.display = 'none'; // Menyembunyikan hasil saat reset
});
