// Util format rupiah
export const formatRupiah = (angka) => {
  const n = Math.max(0, Math.round(Number(angka) || 0))
  return 'Rp ' + n.toLocaleString('id-ID')
}
