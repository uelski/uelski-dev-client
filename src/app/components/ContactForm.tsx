"use client";
import { useState } from "react";
export default function ContactForm() {
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
        } catch (error) {
          setToast({ type: "error", msg: "Something went wrong." });
        } finally {
          setLoading(false);
          // auto-hide toast 
          setTimeout(() => setToast(null), 4000);
        }
    };

    return (

        <form className="flex items-center flex-col gap-4 pb-[4rem]" onSubmit={handleSubmit}>
            {loading && <div className="absolute w-full flex flex-col items-center justify-start h-full z-[9] bg-white/50">
                <p>Sending message...</p>
                <span className="loading loading-ring loading-xl"></span>
            </div>
            }
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
            <div role="alert" className={`absolute bottom-0 alert ${toast.type === "success" ? "alert-success" : "alert-error"}`}>
                    {toast.type === "success" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                )}
                {toast.type === "error" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                )}
                <span>{toast.msg}</span>
            </div>
        )}
    </form>
    );
}