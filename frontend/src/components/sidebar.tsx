"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Sidebar() {

    const pathname = usePathname();

    const links = [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/dashboard/customers", label: "Customers" },
        { href: "/dashboard/projects", label: "Projects" },
        { href: "/dashboard/team", label: "Team" },
        { href: "/dashboard/settings", label: "Settings" },
    ]

    return (
        <aside className="flex min-h-screen w-64 flex-col border-r border-slate-800 bg-slate-950 text-white">
            <div className="border-b border-slate-800 p-6">
                <h1 className="text-2xl font-bold">OpsPilot</h1>
            </div>

            <nav className="flex flex-col gap-2 p-4">
                {links.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`rounded-lg px-4 py-3 ${isActive
                                ? "bg-slate-800 text-white"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
