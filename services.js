// Data layanan untuk dropdown kalkulator
// value = harga satuan, type = "kilo" (per kg) atau "unit" (per pcs/set/meter)
export const LAYANAN = [
  { value: 7000, type: 'kilo', label: 'Cuci Kiloan Reguler (Rp 7.000/kg)', unit: 'kg' },
  { value: 20000, type: 'kilo', label: 'Cuci Kiloan Kilat (Rp 20.000/kg)', unit: 'kg' },
  { value: 25000, type: 'unit', label: 'Cuci Karpet Kecil (Rp 25.000/Meter)', unit: 'meter' },
  { value: 50000, type: 'unit', label: 'Cuci Karpet Besar (Rp 50.000/Meter)', unit: 'meter' },
  { value: 10000, type: 'unit', label: 'Cuci Selimut Kecil (Rp 10.000/Satuan)', unit: 'satuan' },
  { value: 20000, type: 'unit', label: 'Cuci Selimut Besar (Rp 20.000/Satuan)', unit: 'satuan' },
  { value: 35000, type: 'unit', label: 'Cuci Tas (Rp 35.000/Satuan)', unit: 'satuan' },
  { value: 30000, type: 'unit', label: 'Cuci Sepatu (Rp 30.000/Set)', unit: 'set' },
  { value: 25000, type: 'unit', label: 'Cuci Bed Cover Kecil (Rp 25.000/Satuan)', unit: 'satuan' },
  { value: 40000, type: 'unit', label: 'Cuci Bed Cover Besar (Rp 40.000/Satuan)', unit: 'satuan' },
  { value: 25000, type: 'unit', label: 'Cuci Sprei 1 Set (Rp 25.000/Set)', unit: 'set' },
]

export const WHATSAPP_NUMBER = '6285927262579'
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`
