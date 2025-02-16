import { Navbar } from "./Navbar";

export default function PrivacyPolicy() {

    return (
        <>
            <Navbar />
            <section className="container grid lg:grid-cols-2 place-items-center py-10 md:py-10 gap-10">
                <div className="container mx-auto ">
                    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

                    <p className="mb-4">
                        Foster Media Networks ("we," "us," or "our") is committed to protecting the privacy of your information. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services, including our B2B lead generation services via LinkedIn.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>

                    <p className="mb-4">
                        We collect the following types of information:
                    </p>

                    <ul className="list-disc ml-6 mb-4">
                        <li>
                            <b>Information you provide directly:</b> When you contact us, sign up for our services, or interact with our website, we may collect information you provide, such as your name, email address, company name, job title, phone number, and any other information you choose to share.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>

                    <p className="mb-4">
                        We may use your information for the following purposes:
                    </p>

                    <ul className="list-disc ml-6 mb-4">
                        <li>To provide and personalize our services, including B2B lead generation.</li>
                        <li>To communicate with you about our services, including sending you marketing materials (you can opt-out at any time).</li>
                        <li>To improve our website and services.</li>
                        <li>To comply with legal obligations.</li>
                        <li>For any other purpose with your consent.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-2">How We Share Your Information</h2>

                    <p className="mb-4">
                        We do not share your information with the third parties
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Your Choices</h2>

                    <p className="mb-4">
                        You have the following choices regarding your information:
                    </p>

                    <ul className="list-disc ml-6 mb-4">
                        <li><b>Access and correction:</b> You may access and update your information by contacting us.</li>
                        <li><b>Marketing communications:</b> You can opt-out of receiving marketing communications from us by following the unsubscribe instructions in our emails or contacting us directly.</li>
                        <li><b>Cookies:</b> You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-2">Security</h2>

                    <p className="mb-4">
                        We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Changes to this Privacy Policy</h2>

                    <p className="mb-4">
                        We may update this Privacy Policy from time to time.  We will post any changes on our website.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

                    <p className="mb-4">
                        If you have any questions about this Privacy Policy, please contact us at: sarakadam10@gmail.com
                    </p>
                </div>
            </section>
        </>
    )
}