const projects = [
    {
        id: "1",
        name: "Cedars Café Website",
        customer: "Cedars Café",
        status: "Active",
        dueDate: "2026-09-20",
    },
    {
        id: "2",
        name: "Fitness Member Portal",
        customer: "Beirut Fitness",
        status: "Planned",
        dueDate: "2026-10-05",
    },
    {
        id: "3",
        name: "Studio Operations Setup",
        customer: "Northline Studio",
        status: "On Hold",
        dueDate: null,
    },
];

export default function ProjectsPage() {
    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">
                        Projects
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Manage work across your customers.
                    </p>
                </div>

                <button className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800">
                    Add Project
                </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <table className="w-full">
                    <thead className="border-b border-slate-200 bg-slate-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Project
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Customer
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Status
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Due Date
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200">
                        {projects.map((project) => (
                            <tr key={project.id} className="hover:bg-slate-50">
                                <td className="px-6 py-4 font-medium text-slate-900">
                                    {project.name}
                                </td>

                                <td className="px-6 py-4 text-slate-600">
                                    {project.customer}
                                </td>

                                <td className="px-6 py-4">
                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                                        {project.status}
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-slate-600">
                                    {project.dueDate ?? "—"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}