import ContactForm from "./ContactForm";
export default function Contact() {
    return (
        <section id="contact" className="py-10 bg-base-100">
            <h2 className="text-4xl font-bold text-center pb-10">Contact</h2>
            <div className="relative">
                <ContactForm />
            </div>
        </section>
    );
}