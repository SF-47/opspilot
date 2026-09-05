export default function DashboardPage() {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">
                    Dashboard
                </h1>

                <p className="mt-2 text-slate-500">
                    Overview of your organization.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <p className="text-sm text-slate-500">
                        Customers
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                        24
                    </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <p className="text-sm text-slate-500">
                        Active Projects
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                        8
                    </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <p className="text-sm text-slate-500">
                        Team Members
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                        6
                    </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <p className="text-sm text-slate-500">
                        Tasks Due
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                        12
                    </p>
                </div>
            </div>
        </div>
    );
}