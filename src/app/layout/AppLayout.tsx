import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Toaster } from "@/shared/ui/sonner";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 h-screen p-4">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <nav>
        <ul>
          <li>
            <Link to="/" className="text-blue-500 hover:underline">Dashboard</Link>
          </li>
          <li className="mt-2">
            <Link to="/orders" className="text-blue-500 hover:underline">Orders</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Header = () => {
  return <div className="h-16 bg-gray-100 dark:bg-gray-800">Header</div>;
};

export const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      <Toaster />
    </div>
  );
};
