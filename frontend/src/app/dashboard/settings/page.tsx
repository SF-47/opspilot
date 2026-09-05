export default function SettingsPage() {
    return (
        <div className="max-w-3xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">
                    Settings
                </h1>

                <p className="mt-2 text-slate-500">
                    Manage your organization settings.
                </p>
            </div>

            <div className="space-y-6">
                <section className="rounded-xl border border-slate-200 bg-white p-6">
                    <h2 className="text-lg font-semibold text-slate-900">
                        Organization
                    </h2>

                    <div className="mt-6">
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Organization Name
                        </label>

                        <input
                            type="text"
                            defaultValue="PixelWorks"
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-slate-500"
                        />
                    </div>

                    <button className="mt-6 rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800">
                        Save Changes
                    </button>
                </section>

                <section className="rounded-xl border border-red-200 bg-white p-6">
                    <h2 className="text-lg font-semibold text-red-700">
                        Danger Zone
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Destructive organization actions will appear here.
                    </p>

                    <button className="mt-6 rounded-lg border border-red-300 px-4 py-2 font-medium text-red-600 hover:bg-red-50">
                        Delete Organization
                    </button>
                </section>
            </div>
        </div>
    );
}