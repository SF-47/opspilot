export default function Topbar() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
            <div>
                <p className="text-sm text-slate-500">
                    Workspace
                </p>

                <h2 className="font-semibold text-slate-900">
                    PixelWorks
                </h2>
            </div>

            <div className="flex items-center gap-3">
                <div className="text-right">
                    <p className="text-sm font-medium text-slate-900">
                        Sami Farhat
                    </p>

                    <p className="text-xs text-slate-500">
                        Owner
                    </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
                    SF
                </div>
            </div>
        </header>
    );
}