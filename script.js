document.addEventListener('DOMContentLoaded', () => {
    const pilihanLayanan = document.getElementById('pilihanLayanan');
    const inputBerat = document.getElementById('inputBerat');
    const labelInput = document.getElementById('labelInput');
    const hasilHitung = document.getElementById('hasilHitung');

    function kalkulasi() {
        const selectedOption = pilihanLayanan.options[pilihanLayanan.selectedIndex];
        const harga = parseInt(selectedOption.value) || 0;
        const tipe = selectedOption.getAttribute('data-type');
        const jumlah = parseInt(inputBerat.value) || 0;

        // Ubah teks label berdasarkan tipe layanan
        labelInput.innerText = tipe === 'kilo' ? 'Perkiraan Berat (kg)' : 'Jumlah Barang (pcs/set)';
        
        // Hitung total
        const total = harga * jumlah;
        hasilHitung.innerText = 'Rp ' + total.toLocaleString('id-ID');
    }

    // Event Listener untuk memicu kalkulasi
    pilihanLayanan.addEventListener('change', kalkulasi);
    inputBerat.addEventListener('input', kalkulasi);

    // Jalankan sekali saat halaman dimuat
    kalkulasi();
});
