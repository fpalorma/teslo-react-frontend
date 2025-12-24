import { useState } from "react";
import {AdminSidebar} from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import { Outlet } from "react-router";
import { useAuthStore } from "@/auth/store/auth.store";

export const AdminLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const {user} = useAuthStore()
  return (
    <div className=" bg-gray-50 flex">
      <AdminSidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        user={user}
      />

      <div className="flex-1 flex flex-col">
        <AdminHeader />

        <main className="flex-1 p-6">
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
