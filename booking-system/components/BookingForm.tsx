
"use client";

import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    service: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("จองนัดสำเร็จ!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        placeholder="ชื่อ"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        className="border p-2 w-full"
      />
      <input
        type="email"
        placeholder="อีเมล"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        className="border p-2 w-full"
      />
      <input
        type="datetime-local"
        value={form.date}
        onChange={e => setForm({ ...form, date: e.target.value })}
        className="border p-2 w-full"
      />
      <select
        value={form.service}
        onChange={e => setForm({ ...form, service: e.target.value })}
        className="border p-2 w-full"
      >
        <option value="">เลือกบริการ</option>
        <option value="ปรึกษา">ปรึกษา</option>
        <option value="ตัดผม">ตัดผม</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        จองนัด
      </button>
    </form>
  );
}
