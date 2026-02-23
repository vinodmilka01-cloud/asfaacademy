"use client";

import { useState } from "react";
import {
    Users,
    Trophy,
    Image as ImageIcon,
    Settings,
    Home,
    Plus,
    LogOut,
    Edit,
    Trash2,
    Calendar,
    LayoutDashboard
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
    { name: "Dashboard", icon: LayoutDashboard, id: "dash" },
    { name: "Athletes", icon: Users, id: "athletes" },
    { name: "Events", icon: Calendar, id: "events" },
    { name: "Gallery", icon: ImageIcon, id: "gallery" },
    { name: "Team", icon: Users, id: "team" },
    { name: "Web Content", icon: Settings, id: "content" },
];

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("dash");

    return (
        <main className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-72 bg-gray-950 text-white flex flex-col p-6 sticky top-0 h-screen">
                <div className="flex items-center gap-3 mb-12 px-2">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-xl italic">A</div>
                    <div>
                        <h2 className="font-bold text-lg leading-tight uppercase tracking-wide">ASFA ADMIN</h2>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">v1.0.4 Stable</p>
                    </div>
                </div>

                <nav className="flex-1 space-y-2">
                    {sidebarLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => setActiveTab(link.id)}
                            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-medium ${activeTab === link.id
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <link.icon size={20} />
                            {link.name}
                        </button>
                    ))}
                </nav>

                <div className="mt-auto space-y-4">
                    <Link href="/" className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-white transition-colors">
                        <Home size={20} />
                        Back to Site
                    </Link>
                    <button className="w-full flex items-center gap-4 px-4 py-3 text-red-400 hover:text-red-300 transition-colors">
                        <LogOut size={20} />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <section className="flex-1 p-10 overflow-y-auto">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 italic uppercase tracking-wide">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</h1>
                        <p className="text-gray-500 mt-1">Manage your academy data and content dynamically.</p>
                    </div>

                    <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-primary/10 hover:scale-105 transition-all">
                        <Plus size={20} /> Add New {activeTab === "dash" ? "Entry" : activeTab.slice(0, -1)}
                    </button>
                </header>

                {/* Dashboard Stats */}
                {activeTab === "dash" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {[
                            { label: "Total Athletes", value: "124", icon: Users, color: "text-primary bg-primary/10" },
                            { label: "National Medals", value: "20", icon: Trophy, color: "text-yellow-600 bg-yellow-50" },
                            { label: "State Medals", value: "50", icon: Trophy, color: "text-blue-600 bg-blue-50" },
                            { label: "Web Visitors", value: "2.4k", icon: ImageIcon, color: "text-green-600 bg-green-50" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                                    <p className="text-3xl font-black text-gray-900 italic tracking-tight">{stat.value}</p>
                                </div>
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.color}`}>
                                    <stat.icon size={28} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Dynamic Table Section */}
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                        <h3 className="font-bold text-xl italic uppercase tracking-wide">Recent {activeTab} Records</h3>
                        <div className="flex gap-2">
                            <input type="text" placeholder="Search records..." className="px-4 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-primary outline-none" />
                        </div>
                    </div>

                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-50">
                                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Record Name</th>
                                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Category / Sport</th>
                                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Last Modified</th>
                                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <tr key={item} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 font-bold uppercase italic">M</div>
                                            <span className="font-bold text-gray-900 italic tracking-wide">Record Instance #{item}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="px-3 py-1 bg-gray-100 text-[10px] font-bold text-gray-500 rounded-full uppercase tracking-tighter">Athletics / National</span>
                                    </td>
                                    <td className="px-8 py-5 text-sm text-gray-500 italic">2 hours ago</td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><Edit size={16} /></button>
                                            <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="p-8 text-center border-t border-gray-50">
                        <button className="text-gray-400 text-sm font-medium hover:text-primary transition-colors italic">Load More {activeTab} History</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
