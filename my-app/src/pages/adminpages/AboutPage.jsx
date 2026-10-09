export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-5xl">
      <div className="bg-[#112a46] text-white rounded-2xl p-8 shadow-md">
        <h1 className="text-3xl font-extrabold mt-1">Tentang DevCraft Studio</h1>
        <p className="text-[#eaf2f8] text-sm mt-2 max-w-2xl leading-relaxed">
          DevCraft Studio adalah platform digital untuk penyediaan aset desain siap pakai 
          serta layanan perancangan desain kustom berbasis Creative Brief.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 border rounded-xl shadow-sm space-y-3">
          <h2 className="text-lg font-bold text-[#112a46]">Visi Studio</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Menjadi platform kreatif utama yang memudahkan mahasiswa, pelaku UMKM, dan kreator konten 
            dalam memperoleh aset visual berkualitas tinggi secara praktis dan efisien.
          </p>
        </div>

        <div className="bg-white p-6 border rounded-xl shadow-sm space-y-3">
          <h2 className="text-lg font-bold text-[#112a46]">Misi Utama</h2>
          <ul className="text-gray-600 text-sm space-y-1.5 list-disc list-inside">
            <li>Menyediakan template desain aesthetic dan fully editable.</li>
            <li>Memberikan layanan desain custom transparan dengan estimasi budget jelas.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}