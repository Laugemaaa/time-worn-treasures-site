import { useLanguage } from "@/i18n/LanguageProvider";
import heroWatch1 from "@/assets/hero-watch-1.jpg";
import heroWatch2 from "@/assets/hero-watch-2.jpg";
import heroWatch3 from "@/assets/hero-watch-3.jpg";

export function PhilosophySection() {
  const { t } = useLanguage();
  return (
    <section id="philosophy" className="mx-auto max-w-[1440px] bg-white px-5 pb-10 md:px-8">
      <div className="grid gap-px bg-black/10 md:grid-cols-[1.2fr_0.8fr]">
        <article className="relative min-h-[360px] overflow-hidden bg-black text-white">
          <img src={heroWatch1} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/22 to-transparent" />
          <div className="absolute bottom-7 left-7 max-w-md">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/62">
              Choose your story
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-none md:text-5xl">
              {t("philosophy.title")}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/72">
              {t("philosophy.p1")}
            </p>
          </div>
        </article>

        <div className="grid gap-px bg-black/10">
          <article className="relative min-h-[180px] overflow-hidden bg-black text-white">
            <img src={heroWatch2} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            <div className="absolute bottom-5 left-5 max-w-xs">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/62">
                Evidence of life
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/76">{t("philosophy.p2")}</p>
            </div>
          </article>
          <article className="relative min-h-[180px] overflow-hidden bg-black text-white">
            <img src={heroWatch3} alt="" className="absolute inset-0 h-full w-full object-cover opacity-72" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            <div className="absolute bottom-5 left-5 max-w-xs">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/62">
                Chosen carefully
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/76">{t("philosophy.p3")}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
