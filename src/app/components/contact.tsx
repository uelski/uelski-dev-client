export default function Contact() {
    return (
        <section id="contact" className="py-10 bg-base-100 bg-white">
            <h2 className="text-4xl font-bold text-center pb-10">Contact</h2>
            <div>
                <form className="flex items-center flex-col gap-4">
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
                </form>
            </div>
        </section>
    );
}