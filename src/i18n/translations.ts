export type Language = "en" | "da" | "sv" | "no";

export const SUPPORTED_LANGUAGES: Language[] = ["en", "da", "sv", "no"];

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: "English",
  da: "Dansk",
  sv: "Svenska",
  no: "Norsk",
};

export type TranslationKey =
  | "nav.home"
  | "nav.collection"
  | "nav.about"
  | "nav.tradera"
  | "nav.openMenu"
  | "nav.closeMenu"
  | "nav.menu"
  | "skip.toContent"
  | "hero.title"
  | "hero.subtitle"
  | "hero.cta"
  | "philosophy.title"
  | "philosophy.p1"
  | "philosophy.p2"
  | "philosophy.p3"
  | "collection.title"
  | "collection.empty"
  | "collection.error"
  | "collection.retry"
  | "testimonials.title"
  | "footer.brandTitle"
  | "footer.brandDesc"
  | "footer.navigate"
  | "footer.trust"
  | "footer.trustDesc"
  | "footer.copyright"
  | "footer.language"
  | "detail.back"
  | "detail.auctionDetails"
  | "detail.viewOnTradera"
  | "detail.handoff"
  | "detail.notFound"
  | "detail.return"
  | "detail.errorLoad"
  | "detail.tryAgain"
  | "detail.browseTradera";

type Dict = Record<TranslationKey, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.collection": "Collection",
  "nav.about": "About",
  "nav.tradera": "Tradera",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",
  "nav.menu": "Navigation menu",
  "skip.toContent": "Skip to content",
  "hero.title": "Every watch tells a story worth hearing",
  "hero.subtitle":
    "A curated collection of vintage timepieces - chosen for character, provenance, and the kind of patina that only decades of real life can produce.",
  "hero.cta": "Explore the Collection",
  "philosophy.title": "Why vintage?",
  "philosophy.p1":
    "A new watch tells you the time. A vintage watch tells you about time - decades of it, compressed into scratches on a case back, a dial that's slowly turned from silver to champagne, a movement that's been wound ten thousand mornings in a row.",
  "philosophy.p2":
    "We look for watches that have been worn honestly. Not safe queens preserved behind glass, but daily companions that carry the evidence of real life. That's where the character lives - in the imperfections.",
  "philosophy.p3":
    "Each piece in this collection has been chosen because it has something to say. A provenance worth knowing, a design that still holds up, or simply a presence on the wrist that modern watches struggle to replicate.",
  "collection.title": "The Collection",
  "collection.empty": "No watches available at the moment. Check back soon.",
  "collection.error": "We couldn't load the collection right now. Please try again.",
  "collection.retry": "Try again",
  "testimonials.title": "What collectors say",
  "footer.brandTitle": "Vintage Watches",
  "footer.brandDesc":
    "Curated vintage timepieces, each with a story worth telling. We believe every scratch, every patina mark, every worn edge is part of what makes a watch worth owning.",
  "footer.navigate": "Navigate",
  "footer.trust": "Trust",
  "footer.trustDesc":
    "Curated vintage watches since 2024. Every piece is authenticated and described honestly - wear, patina, and all.",
  "footer.copyright": "(c) {year} Vintage Watches. All auctions hosted on Tradera.",
  "footer.language": "Language",
  "detail.back": "Back to Collection",
  "detail.auctionDetails": "Auction Details",
  "detail.viewOnTradera": "View on Tradera",
  "detail.handoff":
    "This auction is hosted on Tradera. You'll be redirected to complete your purchase.",
  "detail.notFound": "This watch could not be found.",
  "detail.return": "Return to the collection",
  "detail.errorLoad": "We couldn't load this watch right now. Please try again.",
  "detail.tryAgain": "Try again",
  "detail.browseTradera": "Browse on Tradera",
};

const da: Dict = {
  "nav.home": "Hjem",
  "nav.collection": "Kollektion",
  "nav.about": "Om",
  "nav.tradera": "Tradera",
  "nav.openMenu": "Åbn menu",
  "nav.closeMenu": "Luk menu",
  "nav.menu": "Navigationsmenu",
  "skip.toContent": "Spring til indhold",
  "hero.title": "Hvert ur fortæller en historie værd at høre",
  "hero.subtitle":
    "En kurateret samling af vintage-ure - udvalgt for karakter, proveniens og den slags patina, som kun årtiers virkeligt liv kan skabe.",
  "hero.cta": "Udforsk samlingen",
  "philosophy.title": "Hvorfor vintage?",
  "philosophy.p1":
    "Et nyt ur fortæller dig tiden. Et vintage-ur fortæller dig om tiden - årtier af den, komprimeret i ridser på bagsiden, en skive der langsomt er blevet fra sølv til champagne, et værk der er trukket op ti tusind morgener i træk.",
  "philosophy.p2":
    "Vi leder efter ure, der er båret ærligt. Ikke museumsstykker bag glas, men daglige følgesvende, der bærer beviser på et virkeligt liv. Det er der, karakteren bor - i ufuldkommenhederne.",
  "philosophy.p3":
    "Hvert stykke i denne samling er valgt, fordi det har noget at sige. En proveniens værd at kende, et design der stadig holder, eller blot en tilstedeværelse på håndleddet, som moderne ure har svært ved at gengive.",
  "collection.title": "Samlingen",
  "collection.empty": "Ingen ure tilgængelige lige nu. Kig forbi snart.",
  "collection.error": "Vi kunne ikke indlæse samlingen lige nu. Prøv igen.",
  "collection.retry": "Prøv igen",
  "testimonials.title": "Hvad samlere siger",
  "footer.brandTitle": "Vintage Watches",
  "footer.brandDesc":
    "Kuraterede vintage-ure, hvert med en historie værd at fortælle. Vi tror på, at hver ridse, hvert patina-mærke og hver slidt kant er en del af det, der gør et ur værd at eje.",
  "footer.navigate": "Naviger",
  "footer.trust": "Tillid",
  "footer.trustDesc":
    "Kuraterede vintage-ure siden 2024. Hvert stykke er autentificeret og beskrevet ærligt - slid, patina og det hele.",
  "footer.copyright": "(c) {year} Vintage Watches. Alle auktioner hostes på Tradera.",
  "footer.language": "Sprog",
  "detail.back": "Tilbage til samlingen",
  "detail.auctionDetails": "Auktionsoplysninger",
  "detail.viewOnTradera": "Se på Tradera",
  "detail.handoff":
    "Denne auktion hostes på Tradera. Du bliver omdirigeret for at fuldføre dit køb.",
  "detail.notFound": "Dette ur kunne ikke findes.",
  "detail.return": "Tilbage til samlingen",
  "detail.errorLoad": "Vi kunne ikke indlæse dette ur lige nu. Prøv igen.",
  "detail.tryAgain": "Prøv igen",
  "detail.browseTradera": "Se på Tradera",
};

const sv: Dict = {
  "nav.home": "Hem",
  "nav.collection": "Kollektion",
  "nav.about": "Om",
  "nav.tradera": "Tradera",
  "nav.openMenu": "Öppna meny",
  "nav.closeMenu": "Stäng meny",
  "nav.menu": "Navigationsmeny",
  "skip.toContent": "Hoppa till innehåll",
  "hero.title": "Varje klocka berättar en historia värd att höra",
  "hero.subtitle":
    "En kurerad samling vintageklockor - utvalda för karaktär, härkomst och den sortens patina som bara årtionden av verkligt liv kan ge.",
  "hero.cta": "Utforska kollektionen",
  "philosophy.title": "Varför vintage?",
  "philosophy.p1":
    "En ny klocka berättar tiden för dig. En vintageklocka berättar om tiden - årtionden av den, komprimerade i repor på baksidan, en urtavla som långsamt gått från silver till champagne, ett verk som dragits upp tiotusen morgnar i rad.",
  "philosophy.p2":
    "Vi letar efter klockor som burits ärligt. Inte museiföremål bakom glas, utan dagliga följeslagare som bär bevis på ett verkligt liv. Det är där karaktären bor - i ofullkomligheterna.",
  "philosophy.p3":
    "Varje pjäs i denna samling har valts för att den har något att säga. En härkomst värd att känna till, en design som fortfarande håller, eller helt enkelt en närvaro på handleden som moderna klockor har svårt att återskapa.",
  "collection.title": "Kollektionen",
  "collection.empty": "Inga klockor tillgängliga just nu. Kom tillbaka snart.",
  "collection.error": "Vi kunde inte ladda kollektionen just nu. Försök igen.",
  "collection.retry": "Försök igen",
  "testimonials.title": "Vad samlare säger",
  "footer.brandTitle": "Vintage Watches",
  "footer.brandDesc":
    "Kurerade vintageklockor, var och en med en historia värd att berätta. Vi tror att varje repa, varje patinamärke och varje sliten kant är en del av det som gör en klocka värd att äga.",
  "footer.navigate": "Navigera",
  "footer.trust": "Förtroende",
  "footer.trustDesc":
    "Kurerade vintageklockor sedan 2024. Varje pjäs är autentiserad och ärligt beskriven - slitage, patina och allt.",
  "footer.copyright": "(c) {year} Vintage Watches. Alla auktioner hostas på Tradera.",
  "footer.language": "Språk",
  "detail.back": "Tillbaka till kollektionen",
  "detail.auctionDetails": "Auktionsdetaljer",
  "detail.viewOnTradera": "Visa på Tradera",
  "detail.handoff":
    "Denna auktion hostas på Tradera. Du omdirigeras för att slutföra ditt köp.",
  "detail.notFound": "Denna klocka kunde inte hittas.",
  "detail.return": "Tillbaka till kollektionen",
  "detail.errorLoad": "Vi kunde inte ladda denna klocka just nu. Försök igen.",
  "detail.tryAgain": "Försök igen",
  "detail.browseTradera": "Bläddra på Tradera",
};

const no: Dict = {
  "nav.home": "Hjem",
  "nav.collection": "Kolleksjon",
  "nav.about": "Om",
  "nav.tradera": "Tradera",
  "nav.openMenu": "Åpne meny",
  "nav.closeMenu": "Lukk meny",
  "nav.menu": "Navigasjonsmeny",
  "skip.toContent": "Hopp til innhold",
  "hero.title": "Hver klokke forteller en historie verdt å høre",
  "hero.subtitle":
    "En kuratert samling vintageklokker - valgt for karakter, opprinnelse og den typen patina som bare tiår med ekte liv kan skape.",
  "hero.cta": "Utforsk kolleksjonen",
  "philosophy.title": "Hvorfor vintage?",
  "philosophy.p1":
    "En ny klokke forteller deg klokkeslettet. En vintageklokke forteller deg om tiden - tiår av den, komprimert i riper på baksiden, en skive som sakte har gått fra sølv til champagne, et verk som er trukket opp ti tusen morgener på rad.",
  "philosophy.p2":
    "Vi leter etter klokker som har blitt brukt ærlig. Ikke museumsstykker bak glass, men daglige følgesvenner som bærer bevis på et virkelig liv. Det er der karakteren bor - i ufullkommenhetene.",
  "philosophy.p3":
    "Hver del i denne samlingen er valgt fordi den har noe å si. En opprinnelse verdt å kjenne, et design som fortsatt holder, eller bare en tilstedeværelse på håndleddet som moderne klokker sliter med å gjenskape.",
  "collection.title": "Kolleksjonen",
  "collection.empty": "Ingen klokker tilgjengelig akkurat nå. Kom tilbake snart.",
  "collection.error": "Vi kunne ikke laste kolleksjonen akkurat nå. Prøv igjen.",
  "collection.retry": "Prøv igjen",
  "testimonials.title": "Hva samlere sier",
  "footer.brandTitle": "Vintage Watches",
  "footer.brandDesc":
    "Kuraterte vintageklokker, hver med en historie verdt å fortelle. Vi tror at hver ripe, hvert patinamerke og hver slitt kant er en del av det som gjør en klokke verdt å eie.",
  "footer.navigate": "Naviger",
  "footer.trust": "Tillit",
  "footer.trustDesc":
    "Kuraterte vintageklokker siden 2024. Hver del er autentisert og ærlig beskrevet - slitasje, patina og alt.",
  "footer.copyright": "(c) {year} Vintage Watches. Alle auksjoner hostes på Tradera.",
  "footer.language": "Språk",
  "detail.back": "Tilbake til kolleksjonen",
  "detail.auctionDetails": "Auksjonsdetaljer",
  "detail.viewOnTradera": "Se på Tradera",
  "detail.handoff":
    "Denne auksjonen hostes på Tradera. Du blir omdirigert for å fullføre kjøpet.",
  "detail.notFound": "Denne klokken kunne ikke finnes.",
  "detail.return": "Tilbake til kolleksjonen",
  "detail.errorLoad": "Vi kunne ikke laste denne klokken akkurat nå. Prøv igjen.",
  "detail.tryAgain": "Prøv igjen",
  "detail.browseTradera": "Bla på Tradera",
};

export const translations: Record<Language, Dict> = { en, da, sv, no };
