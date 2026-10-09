import { catalogData } from "../../utils/data";

export default function AdminDashboard() {
  const productsCount = catalogData.filter((i) => i.type === "product").length;
  const servicesCount = catalogData.filter((i) => i.type === "service").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-[#112a46]">DevCraft Studio — Admin Panel</h1>
        <p className="text-gray-500 text-sm">Kelola katalog produk digital, layanan jasa desain, dan brief masuk.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 border rounded-xl shadow-sm">
          <p className="text-xs font-semibold text-gray-400">TOTAL PRODUK DIGITAL</p>
          <p className="text-2xl font-bold text-[#2b75b1]">{productsCount} Template</p>
        </div>
        <div className="bg-white p-5 border rounded-xl shadow-sm">
          <p className="text-xs font-semibold text-gray-400">LAYANAN JASA DESAIN</p>
          <p className="text-2xl font-bold text-[#112a46]">{servicesCount} Service</p>
        </div>
        <div className="bg-white p-5 border rounded-xl shadow-sm">
          <p className="text-xs font-semibold text-gray-400">BRIEF KUSTOM MASUK</p>
          <p className="text-2xl font-bold text-amber-500">3 Brief Pending</p>
        </div>
        <div className="bg-white p-5 border rounded-xl shadow-sm">
          <p className="text-xs font-semibold text-gray-400">TOTAL ESTIMASI OMSET</p>
          <p className="text-2xl font-bold text-green-600">Rp 2.450.000</p>
        </div>
      </div>

      <div className="bg-white p-6 border rounded-xl shadow-sm space-y-4">
        <h2 className="font-bold text-[#112a46] text-lg">Brief Desain Kustom Terbaru</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#eaf2f8] text-[#112a46]">
              <tr>
                <th className="p-3">Nama Project / Brand</th>
                <th className="p-3">Layanan</th>
                <th className="p-3">Deadline</th>
                <th className="p-3">Budget</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3 font-semibold">Kopi Senja Identity</td>
                <td className="p-3">Branding Package</td>
                <td className="p-3">5 Days</td>
                <td className="p-3">Rp 300.000</td>
                <td className="p-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-bold">In Progress</span></td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Poster Seminar Nasional BEM FTK</td>
                <td className="p-3">Poster Design</td>
                <td className="p-3">3 Days</td>
                <td className="p-3">Rp 50.000</td>
                <td className="p-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-bold">Review Brief</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}