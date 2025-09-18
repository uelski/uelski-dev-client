"use client";
import { useState } from "react";
export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null);;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
    
        try {
          const res = await fetch("/api/contact", { method: "POST", body: data });
          const json = await res.json().catch(() => ({}));
          if (!res.ok || !json.ok) throw new Error(json?.error || "Failed to send");
    
          setToast({ type: "success", msg: "Message sent!." });
          form.reset();
        } catch (err: any) {
          setToast({ type: "error", msg: err?.message ?? "Something went wrong." });
        } finally {
          setLoading(false);
          // auto-hide toast 
          setTimeout(() => setToast(null), 4000);
        }
    };

    return (
        <>
        {loading && <span className="loading loading-ring loading-xl"></span>}
        {!loading && (
            <form className="flex items-center flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="company"
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="hidden"
                />
                {/* Optional "speed" trap: reject submissions sent too quickly */}
                <input className="hidden" type="hidden" name="renderedAt" value={String(Date.now())} />
                <textarea className="textarea" name="message" placeholder="Message"></textarea>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" name="email" placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>
                <button className="btn btn-neutral" type="submit">Submit</button>
                {toast && (
                    <div className="toast toast-end">
                        <div className={`alert ${toast.type === "success" ? "alert-success" : "alert-error"}`}>
                            <span>{toast.msg}</span>
                        </div>
                    </div>
                )}
            </form>
        )}
        </>
    );
}