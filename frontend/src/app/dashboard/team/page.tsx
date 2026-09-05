const members = [
    {
        id: "1",
        name: "Sami Farhat",
        email: "sami@example.com",
        role: "Owner",
    },
    {
        id: "2",
        name: "Maya Hassan",
        email: "maya@example.com",
        role: "Manager",
    },
    {
        id: "3",
        name: "Karim Ali",
        email: "karim@example.com",
        role: "Member",
    },
];

export default function TeamPage() {
    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">
                        Team
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Manage members of your organization.
                    </p>
                </div>

                <button className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800">
                    Add Member
                </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <table className="w-full">
                    <thead className="border-b border-slate-200 bg-slate-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Name
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Email
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Role
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200">
                        {members.map((member) => (
                            <tr key={member.id} className="hover:bg-slate-50">
                                <td className="px-6 py-4 font-medium text-slate-900">
                                    {member.name}
                                </td>

                                <td className="px-6 py-4 text-slate-600">
                                    {member.email}
                                </td>

                                <td className="px-6 py-4">
                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                                        {member.role}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}