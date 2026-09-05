"use client";

import { useState } from "react";
import AddCustomerModal from "@/components/customers/add-customer-modal";

const customers = [
  {
    id: "1",
    name: "Cedars Café",
    email: "info@cedarscafe.com",
    phone: "+961 70 123 456",
    notes: "Website redesign and operations support.",
  },
  {
    id: "2",
    name: "Beirut Fitness",
    email: "hello@beirutfitness.com",
    phone: "+961 71 987 654",
    notes: "Interested in a new member management system.",
  },
  {
    id: "3",
    name: "Northline Studio",
    email: null,
    phone: "+961 76 555 221",
    notes: null,
  },
];

export default function CustomersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Customers</h1>

          <p className="mt-2 text-slate-500">
            Manage your organization&apos;s customers.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800"
        >
          Add Customer
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
                Phone
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Notes
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-900">
                  {customer.name}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {customer.email ?? "—"}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {customer.phone ?? "—"}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {customer.notes ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddCustomerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
