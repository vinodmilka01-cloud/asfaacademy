"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });

        if (res.ok) {
            router.push("/admin/dashboard");
        } else {
            setError("Incorrect password. Access denied.");
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-950 p-6">
            <div className="w-full max-w-md">
                <div className="bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-800">
                    <div className="bg-primary p-10 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-16 -mb-16" />
                        <ShieldCheck size={56} className="mx-auto mb-4 relative z-10" />
                        <h1 className="text-3xl font-black italic uppercase tracking-tighter relative z-10">ASFA Admin</h1>
                        <p className="opacity-70 text-sm mt-1 relative z-10">Owner Access Only</p>
                    </div>

                    <form onSubmit={handleLogin} className="p-10 space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder-gray-600"
                                    placeholder="Enter admin password"
                                    required
                                    autoFocus
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl font-medium">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 transition-all disabled:opacity-50"
                        >
                            {loading ? "Authenticating..." : "Access Dashboard"}
                        </button>
                    </form>
                </div>
                <p className="text-center text-gray-700 text-xs mt-6">This page is not indexed or linked publicly.</p>
            </div>
        </main>
    );
}
