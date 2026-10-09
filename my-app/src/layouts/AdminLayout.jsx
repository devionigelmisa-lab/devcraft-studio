import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-[#112a46] text-white p-6 space-y-6">
        <h2 className="text-xl font-bold border-b border-gray-700 pb-4">
          DevCraft Admin
        </h2>
        <nav className="space-y-2 flex flex-col">
          <Link
            to="/admin/dashboard"
            className="px-4 py-2 hover:bg-[#2b75b1] rounded-lg transition text-sm font-semibold"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/about"
            className="px-4 py-2 hover:bg-[#2b75b1] rounded-lg transition text-sm font-semibold"
          >
            About
          </Link>
          <hr className="border-gray-700 my-4" />
          <Link
            to="/"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-center rounded-lg transition text-xs"
          >
            ← Kembali ke Website
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}