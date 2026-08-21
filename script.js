<script>
(function () {
    function initLaundryCalculator() {
        const layanan = document.getElementById('pilihanLayanan');
        const jumlah = document.getElementById('inputBerat');
        const label = document.getElementById('labelInput');
        const hasil = document.getElementById('hasilHitung');

        if (!layanan || !jumlah || !label || !hasil) {
            console.error('Kalkulator laundry: elemen tidak lengkap.');
            return;
        }

        function rupiah(nilai) {
            return 'Rp ' + Math.round(nilai).toLocaleString('id-ID');
        }

        function hitung() {
            const option = layanan.options[layanan.selectedIndex];
            const harga = parseFloat(option.value) || 0;
            const tipe = option.getAttribute('data-type') || 'unit';
            let nilai = parseFloat(jumlah.value);

            if (!Number.isFinite(nilai) || nilai < 0) nilai = 0;

            if (tipe === 'kilo') {
                label.textContent = 'Perkiraan Berat (kg)';
                jumlah.step = '0.1';
                jumlah.min = '0.1';
            } else {
                label.textContent = 'Jumlah Barang (pcs/set)';
                jumlah.step = '1';
                jumlah.min = '1';
                if (nilai > 0) nilai = Math.floor(nilai);
            }

            hasil.textContent = rupiah(harga * nilai);
        }

        layanan.addEventListener('change', hitung);
        jumlah.addEventListener('input', hitung);
        jumlah.addEventListener('change', hitung);
        hitung();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLaundryCalculator);
    } else {
        initLaundryCalculator();
    }
})();
</script>

</body>
</html>
