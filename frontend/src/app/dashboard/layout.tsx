import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen bg-slate-100">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Topbar />

                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}