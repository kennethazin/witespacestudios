import { ContactForm } from "@/components/contact-form";
import {FAQ} from "@/components/faqs";

export default function Inquiry() {
  return (
    <section >
<div className="space-y-7">
      <h1 className="text-right">Inquiry</h1>
      <h2>
        Please fill out the project inquiry form. We will schedule a
        consultation call to evaluate the project scope and share a detailed
        proposal.
      </h2>
      <div className="align-left">
        <ContactForm />
      </div>
      </div>

<div className="space-y-7 mt-20">
      <h1 className="text-right">FAQs</h1>
      <FAQ />
      </div>

    </section>
  );
}
