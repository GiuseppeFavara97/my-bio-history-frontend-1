"use client";

import React, { useState } from "react";
import Navigation from "./components/navigation/navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((open) => !open);

  return (
    <>
      <Navigation toggle={toggleSidebar} />
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="w-64 bg-white h-full">
            <button onClick={toggleSidebar}>Close</button>
          </div>
        </div>
      )}
      {children}
    </>
  );
}