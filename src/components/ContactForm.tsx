"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          required
          placeholder="Tên của bạn"
          className="rounded border border-border px-3 py-2.5 text-sm outline-none focus:border-primary"
        />
        <input
          required
          type="tel"
          placeholder="Điện thoại"
          className="rounded border border-border px-3 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="email"
          placeholder="Địa chỉ email"
          className="rounded border border-border px-3 py-2.5 text-sm outline-none focus:border-primary"
        />
        <input
          placeholder="Địa chỉ"
          className="rounded border border-border px-3 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>
      <textarea
        placeholder="Nội dung"
        rows={5}
        className="w-full rounded border border-border px-3 py-2.5 text-sm outline-none focus:border-primary"
      />
      <button
        type="submit"
        className="rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase text-primary-foreground hover:opacity-90"
      >
        Gửi liên hệ
      </button>
      {submitted && (
        <p className="text-sm font-medium text-green-600">
          Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất.
        </p>
      )}
    </form>
  );
}
