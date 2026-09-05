"use client";

import { useState } from "react";

type AddCustomerModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddCustomerModal({
  isOpen,
  onClose,
}: AddCustomerModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) {
    return null;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      name,
      email,
      phone,
      notes,
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Add Customer
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add a new customer to your organization.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-slate-500 hover:text-slate-900"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-slate-500"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-slate-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Phone
            </label>

            <input
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-slate-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Notes
            </label>

            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              rows={4}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-slate-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800"
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
