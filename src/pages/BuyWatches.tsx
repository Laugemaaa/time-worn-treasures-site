import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Camera, CheckCircle2, Mail, ShieldCheck, Sparkles, Watch } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CONTACT_EMAIL = "Laugemunktradera@gmail.com";

type FormState = {
  name: string;
  email: string;
  phone: string;
  brand: string;
  model: string;
  condition: string;
  askingPrice: string;
  location: string;
  imageLinks: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  brand: "",
  model: "",
  condition: "",
  askingPrice: "",
  location: "",
  imageLinks: "",
  message: "",
};

export default function BuyWatches() {
  const [form, setForm] = useState<FormState>(initialFormState);

  const mailtoHref = useMemo(() => {
    const subject = `Opkøb af ur${form.brand ? ` - ${form.brand}` : ""}`;
    const body = [
      "Hej Lauge,",
      "",
      "Jeg vil gerne høre, om du er interesseret i at købe mit ur.",
      "",
      `Navn: ${form.name}`,
      `Email: ${form.email}`,
      `Telefon: ${form.phone || "-"}`,
      `Mærke: ${form.brand}`,
      `Model/reference: ${form.model || "-"}`,
      `Stand: ${form.condition || "-"}`,
      `Ønsket pris: ${form.askingPrice || "-"}`,
      `By/land: ${form.location || "-"}`,
      `Billeder eller links: ${form.imageLinks || "-"}`,
      "",
      "Beskrivelse:",
      form.message || "-",
      "",
      "Venlig hilsen",
      form.name || "",
    ].join("\n");

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <div className="min-h-screen bg-background paper-texture">
      <SEO
        title="Opkøb af vintage ure | GrandpasHeritage"
        description="Kontakt GrandpasHeritage, hvis du har et vintage ur, lommeur eller en ursamling, du overvejer at sælge."
        canonicalPath="/opkoeb"
      />
      <Navbar />

      <main id="main-content">
        <section className="relative overflow-hidden border-b border-border/70 bg-[linear-gradient(150deg,#2b2118_0%,#1d140f_48%,#100c09_100%)]">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 pb-16 pt-20 md:pb-24 md:pt-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                Opkøb af ure
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-6xl">
                Har du et vintage ur, du overvejer at sælge?
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#d8c8aa] md:text-lg">
                Send lidt information om uret, standen og dine billeder. Så vender jeg tilbage med en rolig og ærlig vurdering.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { icon: Watch, title: "Vintage armbåndsure", text: "Mekaniske, quartz, dress, diver og samlerure." },
                { icon: Camera, title: "Billeder hjælper", text: "Skive, bagside, krone, rem og eventuelle mærker." },
                { icon: ShieldCheck, title: "Ærlig dialog", text: "Ingen pres, bare en klar vurdering og næste skridt." },
              ].map((item) => (
                <div key={item.title} className="rounded-md border border-[#eadcc6]/18 bg-[#eadcc6]/7 p-4">
                  <item.icon className="mb-3 h-5 w-5 text-primary" />
                  <h2 className="font-serif text-lg font-semibold text-foreground">{item.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-[#d8c8aa]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="space-y-5">
              <div className="rounded-lg border border-border bg-card p-6 shadow-[0_18px_45px_-34px_rgba(29,20,15,0.8)]">
                <Sparkles className="mb-5 h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">Sådan fungerer det</h2>
                <div className="mt-6 space-y-5 text-sm leading-7 text-muted-foreground">
                  <p><span className="text-foreground">1.</span> Udfyld formularen med de oplysninger, du har.</p>
                  <p><span className="text-foreground">2.</span> Tilføj gerne links til billeder, hvis du har dem online.</p>
                  <p><span className="text-foreground">3.</span> Tryk Send, og din mail åbner med teksten klar.</p>
                </div>
              </div>

              <div className="rounded-lg border border-primary/20 bg-primary/8 p-6">
                <Mail className="mb-4 h-5 w-5 text-primary" />
                <p className="text-sm leading-7 text-muted-foreground">
                  Mailen sendes til <span className="text-foreground">{CONTACT_EMAIL}</span>. Du kan altid rette i mailen, før du sender den.
                </p>
              </div>
            </aside>

            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-border bg-card p-5 shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)] md:p-8"
            >
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-semibold text-foreground">Fortæl mig om uret</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Felterne med kontakt og mærke er de vigtigste. Resten kan du udfylde så godt som muligt.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Navn" id="name">
                  <Input id="name" required value={form.name} onChange={(event) => updateField("name", event.target.value)} />
                </Field>
                <Field label="Email" id="email">
                  <Input id="email" type="email" required value={form.email} onChange={(event) => updateField("email", event.target.value)} />
                </Field>
                <Field label="Telefon" id="phone">
                  <Input id="phone" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
                </Field>
                <Field label="By / land" id="location">
                  <Input id="location" value={form.location} onChange={(event) => updateField("location", event.target.value)} />
                </Field>
                <Field label="Mærke" id="brand">
                  <Input id="brand" required placeholder="Omega, Seiko, Certina..." value={form.brand} onChange={(event) => updateField("brand", event.target.value)} />
                </Field>
                <Field label="Model / reference" id="model">
                  <Input id="model" placeholder="Hvis du kender den" value={form.model} onChange={(event) => updateField("model", event.target.value)} />
                </Field>
                <Field label="Stand" id="condition">
                  <select
                    id="condition"
                    value={form.condition}
                    onChange={(event) => updateField("condition", event.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Vælg stand</option>
                    <option value="Pæn brugt stand">Pæn brugt stand</option>
                    <option value="Okay brugt stand">Okay brugt stand</option>
                    <option value="Defekt / reservedele">Defekt / reservedele</option>
                    <option value="Usikker">Usikker</option>
                  </select>
                </Field>
                <Field label="Ønsket pris" id="askingPrice">
                  <Input id="askingPrice" placeholder="DKK / SEK / EUR" value={form.askingPrice} onChange={(event) => updateField("askingPrice", event.target.value)} />
                </Field>
              </div>

              <div className="mt-5 grid gap-5">
                <Field label="Billeder eller links" id="imageLinks">
                  <Input
                    id="imageLinks"
                    placeholder="Link til billeder, Dropbox, Google Drive, annonce osv."
                    value={form.imageLinks}
                    onChange={(event) => updateField("imageLinks", event.target.value)}
                  />
                </Field>
                <Field label="Beskrivelse" id="message">
                  <Textarea
                    id="message"
                    rows={7}
                    placeholder="Fortæl gerne om historik, om det går, fejl, service, original æske/papirer og hvad du ellers ved."
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                  />
                </Field>
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Klar til at sende til {CONTACT_EMAIL}
                </div>
                <button
                  type="submit"
                  className="cta-press inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Send forespørgsel
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

type FieldProps = {
  label: string;
  id: string;
  children: ReactNode;
};

function Field({ label, id, children }: FieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-[#d8c8aa]">
        {label}
      </Label>
      {children}
    </div>
  );
}
