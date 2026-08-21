document.addEventListener('DOMContentLoaded', function () {
    const pilihanLayanan = document.getElementById('pilihanLayanan');
    const inputBerat = document.getElementById('inputBerat');
    const labelInput = document.getElementById('labelInput');
    const hasilHitung = document.getElementById('hasilHitung');

    function kalkulasi() {
        const selectedOption = pilihanLayanan.options[pilihanLayanan.selectedIndex];
        const harga = parseInt(selectedOption.value) || 0;
        const tipe = selectedOption.getAttribute('data-type');
        const jumlah = parseInt(inputBerat.value) || 0;

        if (tipe === 'kilo') {
            labelInput.innerText = 'Perkiraan Berat (kg)';
        } else {
            labelInput.innerText = 'Jumlah Barang (pcs/set/meter)';
        }

        const total = harga * jumlah;
        hasilHitung.innerText = 'Rp ' + total.toLocaleString('id-ID');
    }

    // Jalankan kalkulasi saat ada perubahan pada pilihan atau input angka
    pilihanLayanan.addEventListener('change', kalkulasi);
    inputBerat.addEventListener('input', kalkulasi);

    // Jalankan sekali di awal agar nilai default langsung terhitung
    kalkulasi();
});
