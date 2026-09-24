import { useCallback } from "react";
import { useLanguage } from "./LanguageProvider";
import type { Language } from "./translations";
export const phraseTranslations: Record<string, Record<Language, string>> = {
  "The GrandpasHeritage Standard": {
    "en": "The GrandpasHeritage Standard",
    "da": "GrandpasHeritage-standarden",
    "sv": "GrandpasHeritage-standarden",
    "no": "GrandpasHeritage-standarden"
  },
  "Every watch deserves a closer look": {
    "en": "Every watch deserves a closer look",
    "da": "Hvert ur fortjener et nærmere kig",
    "sv": "Varje klocka förtjänar en närmare titt",
    "no": "Hver klokke fortjener en nærmere titt"
  },
  "Before a watch is offered for sale, the details that matter are examined, tested and documented. Vintage watches are not expected to be perfect — but their condition should be understood.": {
    "en": "Before a watch is offered for sale, the details that matter are examined, tested and documented. Vintage watches are not expected to be perfect — but their condition should be understood.",
    "da": "Før et ur sættes til salg, undersøges, testes og dokumenteres de væsentlige detaljer. Vintageure forventes ikke at være perfekte — men deres stand skal være tydelig.",
    "sv": "Innan en klocka säljs granskas, testas och dokumenteras viktiga detaljer. Vintageklockor förväntas inte vara perfekta — men deras skick ska vara tydligt.",
    "no": "Før en klokke legges ut for salg, undersøkes, testes og dokumenteres de viktige detaljene. Vintageklokker forventes ikke å være perfekte — men tilstanden skal være tydelig."
  },
  "Frequently asked": {
    "en": "Frequently asked",
    "da": "Ofte stillede spørgsmål",
    "sv": "Vanliga frågor",
    "no": "Vanlige spørsmål"
  },
  "A few things worth knowing": {
    "en": "A few things worth knowing",
    "da": "Godt at vide",
    "sv": "Bra att veta",
    "no": "Greit å vite"
  },
  "Clear expectations are part of buying vintage. These are the questions collectors ask most often.": {
    "en": "Clear expectations are part of buying vintage. These are the questions collectors ask most often.",
    "da": "Klare forventninger hører med, når man køber vintage. Her er de spørgsmål, samlere oftest stiller.",
    "sv": "Tydliga förväntningar hör till när man köper vintage. Här är frågorna samlare oftast ställer.",
    "no": "Tydelige forventninger hører med når man kjøper vintage. Her er spørsmålene samlere oftest stiller."
  },
  "Collector feedback": {
    "en": "Collector feedback",
    "da": "Samlernes anmeldelser",
    "sv": "Samlarnas omdömen",
    "no": "Samlernes omtaler"
  },
  "5/5 på Tradera": {
    "en": "5/5 on Tradera",
    "da": "5/5 på Tradera",
    "sv": "5/5 på Tradera",
    "no": "5/5 på Tradera"
  },
  "Review carousel controls": {
    "en": "Review carousel controls",
    "da": "Styr anmeldelseskarrusellen",
    "sv": "Styr omdömeskarusellen",
    "no": "Styr omtale-karusellen"
  },
  "Previous reviews": {
    "en": "Previous reviews",
    "da": "Forrige anmeldelser",
    "sv": "Föregående omdömen",
    "no": "Forrige omtaler"
  },
  "Next reviews": {
    "en": "Next reviews",
    "da": "Næste anmeldelser",
    "sv": "Nästa omdömen",
    "no": "Neste omtaler"
  },
  "Collector reviews": {
    "en": "Collector reviews",
    "da": "Anmeldelser fra samlere",
    "sv": "Omdömen från samlare",
    "no": "Omtaler fra samlere"
  },
  "Choose review": {
    "en": "Choose review",
    "da": "Vælg anmeldelse",
    "sv": "Välj omdöme",
    "no": "Velg omtale"
  },
  "See all feedback on Tradera": {
    "en": "See all feedback on Tradera",
    "da": "Se alle anmeldelser på Tradera",
    "sv": "Se alla omdömen på Tradera",
    "no": "Se alle omtaler på Tradera"
  },
  "Tradera buyer": {
    "en": "Tradera buyer",
    "da": "Køber på Tradera",
    "sv": "Köpare på Tradera",
    "no": "Kjøper på Tradera"
  },
  "Start:": {
    "en": "Starting bid:",
    "da": "Startbud:",
    "sv": "Utropspris:",
    "no": "Startbud:"
  },
  "Live:": {
    "en": "Current bid:",
    "da": "Aktuelt bud:",
    "sv": "Aktuellt bud:",
    "no": "Gjeldende bud:"
  },
  "bids": {
    "en": "bids",
    "da": "bud",
    "sv": "bud",
    "no": "bud"
  },
  "Main navigation": {
    "en": "Main navigation",
    "da": "Hovednavigation",
    "sv": "Huvudnavigation",
    "no": "Hovednavigasjon"
  },
  "GrandpasHeritage home": {
    "en": "GrandpasHeritage home",
    "da": "GrandpasHeritage forside",
    "sv": "GrandpasHeritage startsida",
    "no": "GrandpasHeritage forside"
  },
  "Instagram (opens in new tab)": {
    "en": "Instagram (opens in new tab)",
    "da": "Instagram (åbner i en ny fane)",
    "sv": "Instagram (öppnas i ny flik)",
    "no": "Instagram (åpnes i ny fane)"
  },
  "Mobile navigation": {
    "en": "Mobile navigation",
    "da": "Mobilnavigation",
    "sv": "Mobilnavigation",
    "no": "Mobilnavigasjon"
  },
  "Footer navigation": {
    "en": "Footer navigation",
    "da": "Navigation i sidefoden",
    "sv": "Navigation i sidfoten",
    "no": "Navigasjon i bunnteksten"
  },
  "Gold vintage watch on warm brown leather": {
    "en": "Gold vintage watch on warm brown leather",
    "da": "Gyldent vintageur på varmt brunt læder",
    "sv": "Gyllene vintageklocka på varmt brunt läder",
    "no": "Gyllen vintageklokke på varmt brunt lær"
  },
  "Opkøb af vintage ure {brand}": {
    "en": "Sell a vintage watch {brand}",
    "da": "Sælg et vintageur {brand}",
    "sv": "Sälj en vintageklocka {brand}",
    "no": "Selg en vintageklokke {brand}"
  },
  "Kontakt GrandpasHeritage, hvis du har et vintage ur, lommeur eller en ursamling, du overvejer at sælge.": {
    "en": "Contact GrandpasHeritage if you have a vintage watch, pocket watch or watch collection you are considering selling.",
    "da": "Kontakt GrandpasHeritage, hvis du har et vintageur, lommeur eller en ursamling, du overvejer at sælge.",
    "sv": "Kontakta GrandpasHeritage om du har en vintageklocka, ett fickur eller en klocksamling du funderar på att sälja.",
    "no": "Kontakt GrandpasHeritage hvis du har en vintageklokke, et lommeur eller en klokkesamling du vurderer å selge."
  },
  "Opkøb af ure": {
    "en": "Sell a watch",
    "da": "Opkøb af ure",
    "sv": "Sälj en klocka",
    "no": "Selg en klokke"
  },
  "Har du et vintage ur, du overvejer at sælge?": {
    "en": "Have a vintage watch you are considering selling?",
    "da": "Har du et vintageur, du overvejer at sælge?",
    "sv": "Har du en vintageklocka du funderar på att sälja?",
    "no": "Har du en vintageklokke du vurderer å selge?"
  },
  "Send lidt information om uret, standen og dine billeder. Så vender jeg tilbage med en rolig og ærlig vurdering.": {
    "en": "Send some information about the watch, its condition and your photos. I will get back to you with a considered, honest assessment.",
    "da": "Send lidt information om uret, standen og dine billeder. Så vender jeg tilbage med en rolig og ærlig vurdering.",
    "sv": "Skicka lite information om klockan, dess skick och dina bilder. Jag återkommer med en lugn och ärlig bedömning.",
    "no": "Send litt informasjon om klokken, tilstanden og bildene dine. Jeg kommer tilbake med en rolig og ærlig vurdering."
  },
  "Sådan fungerer det": {
    "en": "How it works",
    "da": "Sådan fungerer det",
    "sv": "Så fungerar det",
    "no": "Slik fungerer det"
  },
  "Udfyld formularen med de oplysninger, du har.": {
    "en": "Fill in the form with the information you have.",
    "da": "Udfyld formularen med de oplysninger, du har.",
    "sv": "Fyll i formuläret med de uppgifter du har.",
    "no": "Fyll ut skjemaet med opplysningene du har."
  },
  "Tilføj gerne links til billeder, hvis du har dem online.": {
    "en": "Add links to photos if you have them online.",
    "da": "Tilføj gerne links til billeder, hvis du har dem online.",
    "sv": "Lägg gärna till länkar till bilder om du har dem online.",
    "no": "Legg gjerne til lenker til bilder hvis du har dem på nett."
  },
  "Tryk Send, og din mail åbner med teksten klar.": {
    "en": "Press Send to open your email app with the text ready.",
    "da": "Tryk Send, og din mail åbner med teksten klar.",
    "sv": "Tryck på Skicka så öppnas ditt e-postprogram med texten klar.",
    "no": "Trykk Send, så åpnes e-postprogrammet med teksten klar."
  },
  "Mailen sendes til": {
    "en": "The email is addressed to",
    "da": "Mailen sendes til",
    "sv": "Mejlet adresseras till",
    "no": "E-posten adresseres til"
  },
  ". Du kan altid rette i mailen, før du sender den.": {
    "en": ". You can edit the email before sending it.",
    "da": ". Du kan altid rette i mailen, før du sender den.",
    "sv": ". Du kan ändra mejlet innan du skickar det.",
    "no": ". Du kan redigere e-posten før du sender den."
  },
  "Fortæl mig om uret": {
    "en": "Tell me about the watch",
    "da": "Fortæl mig om uret",
    "sv": "Berätta om klockan",
    "no": "Fortell om klokken"
  },
  "Felterne med kontakt og mærke er de vigtigste. Resten kan du udfylde så godt som muligt.": {
    "en": "Contact details and brand are the most important fields. Fill in the rest as best you can.",
    "da": "Felterne med kontakt og mærke er de vigtigste. Resten kan du udfylde så godt som muligt.",
    "sv": "Kontaktuppgifter och märke är viktigast. Fyll i resten så gott du kan.",
    "no": "Kontaktopplysninger og merke er viktigst. Fyll ut resten så godt du kan."
  },
  "Navn": {
    "en": "Name",
    "da": "Navn",
    "sv": "Namn",
    "no": "Navn"
  },
  "Email": {
    "en": "Email",
    "da": "E-mail",
    "sv": "E-post",
    "no": "E-post"
  },
  "Telefon": {
    "en": "Phone",
    "da": "Telefon",
    "sv": "Telefon",
    "no": "Telefon"
  },
  "By / land": {
    "en": "City / country",
    "da": "By / land",
    "sv": "Ort / land",
    "no": "By / land"
  },
  "Mærke": {
    "en": "Brand",
    "da": "Mærke",
    "sv": "Märke",
    "no": "Merke"
  },
  "Model / reference": {
    "en": "Model / reference",
    "da": "Model / reference",
    "sv": "Modell / referens",
    "no": "Modell / referanse"
  },
  "Hvis du kender den": {
    "en": "If known",
    "da": "Hvis du kender den",
    "sv": "Om du känner till den",
    "no": "Hvis du kjenner den"
  },
  "Stand": {
    "en": "Condition",
    "da": "Stand",
    "sv": "Skick",
    "no": "Tilstand"
  },
  "Vælg stand": {
    "en": "Choose condition",
    "da": "Vælg stand",
    "sv": "Välj skick",
    "no": "Velg tilstand"
  },
  "Pæn brugt stand": {
    "en": "Good used condition",
    "da": "Pæn brugt stand",
    "sv": "Fint begagnat skick",
    "no": "Pen brukt tilstand"
  },
  "Okay brugt stand": {
    "en": "Fair used condition",
    "da": "Okay brugt stand",
    "sv": "Okej begagnat skick",
    "no": "Grei brukt tilstand"
  },
  "Defekt / reservedele": {
    "en": "Not working / spare parts",
    "da": "Defekt / reservedele",
    "sv": "Defekt / reservdelar",
    "no": "Defekt / reservedeler"
  },
  "Usikker": {
    "en": "Not sure",
    "da": "Usikker",
    "sv": "Osäker",
    "no": "Usikker"
  },
  "Ønsket pris": {
    "en": "Asking price",
    "da": "Ønsket pris",
    "sv": "Önskat pris",
    "no": "Ønsket pris"
  },
  "Billeder eller links": {
    "en": "Photos or links",
    "da": "Billeder eller links",
    "sv": "Bilder eller länkar",
    "no": "Bilder eller lenker"
  },
  "Link til billeder, Dropbox, Google Drive, annonce osv.": {
    "en": "Links to photos, Dropbox, Google Drive, a listing, etc.",
    "da": "Link til billeder, Dropbox, Google Drive, annonce osv.",
    "sv": "Länkar till bilder, Dropbox, Google Drive, annons osv.",
    "no": "Lenker til bilder, Dropbox, Google Drive, annonse osv."
  },
  "Beskrivelse": {
    "en": "Description",
    "da": "Beskrivelse",
    "sv": "Beskrivning",
    "no": "Beskrivelse"
  },
  "Fortæl gerne om historik, om det går, fejl, service, original æske/papirer og hvad du ellers ved.": {
    "en": "Include its history, whether it runs, faults, servicing, original box/papers and anything else you know.",
    "da": "Fortæl gerne om historik, om det går, fejl, service, original æske/papirer og hvad du ellers ved.",
    "sv": "Berätta om historik, om den går, fel, service, originalask/papper och annat du vet.",
    "no": "Fortell om historikk, om den går, feil, service, original eske/papirer og annet du vet."
  },
  "Klar til at sende til": {
    "en": "Ready to send to",
    "da": "Klar til at sende til",
    "sv": "Redo att skicka till",
    "no": "Klar til å sende til"
  },
  "Send forespørgsel": {
    "en": "Send enquiry",
    "da": "Send forespørgsel",
    "sv": "Skicka förfrågan",
    "no": "Send forespørsel"
  },
  "Active Tradera auctions from GrandpasHeritage. Vintage watches listed with photos, condition notes, and live bidding details.": {
    "en": "Active Tradera auctions from GrandpasHeritage. Vintage watches listed with photos, condition notes, and current bidding details.",
    "da": "Aktive Tradera-auktioner fra GrandpasHeritage. Vintageure med billeder, oplysninger om stand og aktuelle bud.",
    "sv": "Aktiva Tradera-auktioner från GrandpasHeritage. Vintageklockor med bilder, skickbeskrivningar och aktuella bud.",
    "no": "Aktive Tradera-auksjoner fra GrandpasHeritage. Vintageklokker med bilder, tilstandsbeskrivelser og gjeldende bud."
  },
  "Live on Tradera": {
    "en": "On Tradera now",
    "da": "På Tradera nu",
    "sv": "På Tradera nu",
    "no": "På Tradera nå"
  },
  "Current auctions": {
    "en": "Current auctions",
    "da": "Aktuelle auktioner",
    "sv": "Aktuella auktioner",
    "no": "Aktuelle auksjoner"
  },
  "A clean overview of the vintage watches currently listed by GrandpasHeritage. Each piece opens with more photos and details before bidding continues on Tradera.": {
    "en": "A clean overview of the vintage watches currently listed by GrandpasHeritage. Each piece opens with more photos and details before bidding continues on Tradera.",
    "da": "Se de vintageure, GrandpasHeritage har til salg lige nu. Åbn et ur for flere billeder og detaljer, og byd videre på Tradera.",
    "sv": "Se vintageklockorna GrandpasHeritage har till försäljning just nu. Öppna en klocka för fler bilder och detaljer och fortsätt budgivningen på Tradera.",
    "no": "Se vintageklokkene GrandpasHeritage har til salgs nå. Åpne en klokke for flere bilder og detaljer, og fortsett budgivningen på Tradera."
  },
  "Open Tradera": {
    "en": "Open Tradera",
    "da": "Åbn Tradera",
    "sv": "Öppna Tradera",
    "no": "Åpne Tradera"
  },
  "We could not load the auctions": {
    "en": "We could not load the auctions",
    "da": "Auktionerne kunne ikke indlæses",
    "sv": "Auktionerna kunde inte laddas",
    "no": "Auksjonene kunne ikke lastes"
  },
  "Try again, or open Tradera directly.": {
    "en": "Try again, or open Tradera directly.",
    "da": "Prøv igen, eller åbn Tradera direkte.",
    "sv": "Försök igen eller öppna Tradera direkt.",
    "no": "Prøv igjen eller åpne Tradera direkte."
  },
  "Try again": {
    "en": "Try again",
    "da": "Prøv igen",
    "sv": "Försök igen",
    "no": "Prøv igjen"
  },
  "No live auctions right now": {
    "en": "No active auctions right now",
    "da": "Ingen aktive auktioner lige nu",
    "sv": "Inga aktiva auktioner just nu",
    "no": "Ingen aktive auksjoner akkurat nå"
  },
  "New auctions will appear here automatically when they go live.": {
    "en": "New auctions will appear here automatically when they go live.",
    "da": "Nye auktioner vises automatisk her, når de starter.",
    "sv": "Nya auktioner visas automatiskt här när de startar.",
    "no": "Nye auksjoner vises automatisk her når de starter."
  },
  "Oops! Page not found": {
    "en": "Page not found",
    "da": "Siden blev ikke fundet",
    "sv": "Sidan hittades inte",
    "no": "Siden ble ikke funnet"
  },
  "Return to Home": {
    "en": "Return to home",
    "da": "Tilbage til forsiden",
    "sv": "Till startsidan",
    "no": "Tilbake til forsiden"
  },
  "View larger": {
    "en": "View larger",
    "da": "Se større billede",
    "sv": "Visa större bild",
    "no": "Vis større bilde"
  },
  "Start automatic reviews": {
    "en": "Start automatic reviews",
    "da": "Start automatisk skift",
    "sv": "Starta automatiskt byte",
    "no": "Start automatisk bytte"
  },
  "Pause automatic reviews": {
    "en": "Pause automatic reviews",
    "da": "Sæt automatisk skift på pause",
    "sv": "Pausa automatiskt byte",
    "no": "Sett automatisk bytte på pause"
  },
  "Show review {n}": {
    "en": "Show review {n}",
    "da": "Vis anmeldelse {n}",
    "sv": "Visa omdöme {n}",
    "no": "Vis omtale {n}"
  },
  "{n} of {total}": {
    "en": "{n} of {total}",
    "da": "{n} af {total}",
    "sv": "{n} av {total}",
    "no": "{n} av {total}"
  },
  "Show image {n}": {
    "en": "Show image {n}",
    "da": "Vis billede {n}",
    "sv": "Visa bild {n}",
    "no": "Vis bilde {n}"
  },
  "Previous image": {
    "en": "Previous image",
    "da": "Forrige billede",
    "sv": "Föregående bild",
    "no": "Forrige bilde"
  },
  "Next image": {
    "en": "Next image",
    "da": "Næste billede",
    "sv": "Nästa bild",
    "no": "Neste bilde"
  },
  "Image gallery": {
    "en": "Image gallery",
    "da": "Billedgalleri",
    "sv": "Bildgalleri",
    "no": "Bildegalleri"
  },
  "Close": {
    "en": "Close",
    "da": "Luk",
    "sv": "Stäng",
    "no": "Lukk"
  },
  "See review from {name} on Tradera": {
    "en": "See review from {name} on Tradera",
    "da": "Se anmeldelsen fra {name} på Tradera",
    "sv": "Se omdömet från {name} på Tradera",
    "no": "Se omtalen fra {name} på Tradera"
  },
  "View {name}": {
    "en": "View {name}",
    "da": "Se {name}",
    "sv": "Visa {name}",
    "no": "Se {name}"
  },
  "Research": {
    "en": "Research",
    "da": "Research",
    "sv": "Efterforskning",
    "no": "Undersøkelse"
  },
  "Component review": {
    "en": "Component review",
    "da": "Gennemgang af dele",
    "sv": "Granskning av delar",
    "no": "Gjennomgang av deler"
  },
  "Function test": {
    "en": "Function test",
    "da": "Funktionstest",
    "sv": "Funktionstest",
    "no": "Funksjonstest"
  },
  "Timekeeping": {
    "en": "Timekeeping",
    "da": "Præcision",
    "sv": "Tidshållning",
    "no": "Presisjon"
  },
  "Condition inspection": {
    "en": "Condition inspection",
    "da": "Vurdering af stand",
    "sv": "Skickbedömning",
    "no": "Tilstandsvurdering"
  },
  "Documented & listed": {
    "en": "Documented & listed",
    "da": "Dokumenteret og sat til salg",
    "sv": "Dokumenterad och till salu",
    "no": "Dokumentert og lagt ut for salg"
  },
  "Model, reference, approximate age and relevant historical details are researched.": {
    "en": "Model, reference, approximate age and relevant historical details are researched.",
    "da": "Model, reference, omtrentlig alder og relevante historiske detaljer undersøges.",
    "sv": "Modell, referens, ungefärlig ålder och relevanta historiska detaljer undersöks.",
    "no": "Modell, referanse, omtrentlig alder og relevante historiske detaljer undersøkes."
  },
  "Dial, case, crown, caseback, movement and bracelet or strap are reviewed for consistency and known replacement parts.": {
    "en": "Dial, case, crown, caseback, movement and bracelet or strap are reviewed for consistency and known replacement parts.",
    "da": "Skive, kasse, krone, bagkasse, værk og lænke eller rem gennemgås for sammenhæng og kendte udskiftede dele.",
    "sv": "Urtavla, boett, krona, baklock, urverk och länk eller band granskas avseende samstämmighet och kända utbytta delar.",
    "no": "Urskive, kasse, krone, baklokk, urverk og lenke eller rem gjennomgås for samsvar og kjente utskiftede deler."
  },
  "Winding, time setting, date, day and other applicable functions are tested.": {
    "en": "Winding, time setting, date, day and other applicable functions are tested.",
    "da": "Optræk, tidsindstilling, dato, ugedag og øvrige relevante funktioner testes.",
    "sv": "Uppdragning, tidsinställning, datum, veckodag och övriga tillämpliga funktioner testas.",
    "no": "Opptrekk, tidsinnstilling, dato, ukedag og øvrige aktuelle funksjoner testes."
  },
  "Mechanical watches are checked for running behaviour and accuracy when possible.": {
    "en": "Mechanical watches are checked for running behaviour and accuracy when possible.",
    "da": "Mekaniske ures gang og præcision kontrolleres, når det er muligt.",
    "sv": "Mekaniska klockors gång och precision kontrolleras när det är möjligt.",
    "no": "Mekaniske klokkers gang og presisjon kontrolleres når det er mulig."
  },
  "Case, crystal, dial, hands and other visible details are inspected for wear, patina, damage and imperfections.": {
    "en": "Case, crystal, dial, hands and other visible details are inspected for wear, patina, damage and imperfections.",
    "da": "Kasse, glas, skive, visere og andre synlige detaljer undersøges for slid, patina, skader og fejl.",
    "sv": "Boett, glas, urtavla, visare och andra synliga detaljer granskas för slitage, patina, skador och brister.",
    "no": "Kasse, glass, urskive, visere og andre synlige detaljer undersøkes for slitasje, patina, skader og feil."
  },
  "The watch is measured, photographed and described with the relevant observations before being offered for sale.": {
    "en": "The watch is measured, photographed and described with the relevant observations before being offered for sale.",
    "da": "Uret måles, fotograferes og beskrives med de relevante observationer, før det sættes til salg.",
    "sv": "Klockan mäts, fotograferas och beskrivs med relevanta observationer innan den säljs.",
    "no": "Klokken måles, fotograferes og beskrives med relevante observasjoner før den legges ut for salg."
  },
  "Are the watches serviced?": {
    "en": "Are the watches serviced?",
    "da": "Er urene serviceret?",
    "sv": "Är klockorna servade?",
    "no": "Er klokkene vedlikeholdt?"
  },
  "Not necessarily. Service history is stated whenever it is known. If a watch has not recently been serviced, this should not be assumed.": {
    "en": "Not necessarily. Service history is stated whenever it is known. If a watch has not recently been serviced, this should not be assumed.",
    "da": "Ikke nødvendigvis. Servicehistorik oplyses, når den er kendt. Man bør ikke gå ud fra, at et ur er nyligt serviceret, medmindre det er oplyst.",
    "sv": "Inte nödvändigtvis. Servicehistorik anges när den är känd. Utgå inte från att en klocka nyligen har servats om det inte anges.",
    "no": "Ikke nødvendigvis. Servicehistorikk oppgis når den er kjent. Ikke anta at en klokke nylig har fått service hvis det ikke er oppgitt."
  },
  "Are all parts original?": {
    "en": "Are all parts original?",
    "da": "Er alle dele originale?",
    "sv": "Är alla delar original?",
    "no": "Er alle deler originale?"
  },
  "Known replacement or aftermarket components are disclosed whenever identified. With vintage watches, complete originality cannot always be guaranteed unless specifically stated.": {
    "en": "Known replacement or aftermarket components are disclosed whenever identified. With vintage watches, complete originality cannot always be guaranteed unless specifically stated.",
    "da": "Kendte udskiftede eller uoriginale dele oplyses, når de identificeres. Fuld originalitet kan ikke altid garanteres for vintageure, medmindre det udtrykkeligt er angivet.",
    "sv": "Kända utbytta delar och eftermarknadsdelar anges när de identifieras. Fullständig originalitet kan inte alltid garanteras för vintageklockor om det inte uttryckligen anges.",
    "no": "Kjente utskiftede deler og ettermarkedsdeler oppgis når de identifiseres. Full originalitet kan ikke alltid garanteres for vintageklokker med mindre det er uttrykkelig oppgitt."
  },
  "Are vintage watches waterproof?": {
    "en": "Are vintage watches waterproof?",
    "da": "Er vintageure vandtætte?",
    "sv": "Är vintageklockor vattentäta?",
    "no": "Er vintageklokker vanntette?"
  },
  "Unless explicitly stated otherwise, vintage watches should not be considered water resistant.": {
    "en": "Unless explicitly stated otherwise, vintage watches should not be considered water resistant.",
    "da": "Vintageure bør ikke betragtes som vandtætte, medmindre andet udtrykkeligt er angivet.",
    "sv": "Vintageklockor bör inte betraktas som vattentäta om inte annat uttryckligen anges.",
    "no": "Vintageklokker bør ikke regnes som vanntette med mindre annet er uttrykkelig oppgitt."
  },
  "How are the watches tested?": {
    "en": "How are the watches tested?",
    "da": "Hvordan testes urene?",
    "sv": "Hur testas klockorna?",
    "no": "Hvordan testes klokkene?"
  },
  "Applicable functions are tested and relevant observations are documented before listing. Mechanical watches may also be checked for running behaviour and accuracy when possible.": {
    "en": "Applicable functions are tested and relevant observations are documented before listing. Mechanical watches may also be checked for running behaviour and accuracy when possible.",
    "da": "Relevante funktioner testes, og observationer dokumenteres før salg. Mekaniske ures gang og præcision kan også kontrolleres, når det er muligt.",
    "sv": "Tillämpliga funktioner testas och relevanta observationer dokumenteras före försäljning. Mekaniska klockors gång och precision kan också kontrolleras när det är möjligt.",
    "no": "Aktuelle funksjoner testes og relevante observasjoner dokumenteres før salg. Mekaniske klokkers gang og presisjon kan også kontrolleres når det er mulig."
  },
  "Where are purchases completed?": {
    "en": "Where are purchases completed?",
    "da": "Hvor foregår købet?",
    "sv": "Var genomförs köpet?",
    "no": "Hvor gjennomføres kjøpet?"
  },
  "Purchases are completed through Tradera, where the latest auction details and buyer protections can be found.": {
    "en": "Purchases are completed through Tradera, where the latest auction details and buyer protections can be found.",
    "da": "Køb gennemføres på Tradera, hvor du finder de seneste auktionsoplysninger og oplysninger om køberbeskyttelse.",
    "sv": "Köp genomförs på Tradera, där du hittar de senaste auktionsuppgifterna och information om köparskydd.",
    "no": "Kjøp gjennomføres på Tradera, der du finner de nyeste auksjonsopplysningene og informasjon om kjøperbeskyttelse."
  },
  "Can I sell a watch to GrandpasHeritage?": {
    "en": "Can I sell a watch to GrandpasHeritage?",
    "da": "Kan jeg sælge et ur til GrandpasHeritage?",
    "sv": "Kan jag sälja en klocka till GrandpasHeritage?",
    "no": "Kan jeg selge en klokke til GrandpasHeritage?"
  },
  "Yes. Use the Sell a Watch page to get in touch with details and photos of the watch.": {
    "en": "Yes. Use the Sell a Watch page to get in touch with details and photos of the watch.",
    "da": "Ja. Brug siden Sælg et ur til at kontakte os med oplysninger og billeder af uret.",
    "sv": "Ja. Använd sidan Sälj en klocka för att kontakta oss med information och bilder på klockan.",
    "no": "Ja. Bruk siden Selg en klokke for å kontakte oss med opplysninger og bilder av klokken."
  },
  "Vintage armbåndsure": {
    "en": "Vintage wristwatches",
    "da": "Vintage armbåndsure",
    "sv": "Vintagearmbandsur",
    "no": "Vintagearmbåndsur"
  },
  "Mekaniske, quartz, dress, diver og samlerure.": {
    "en": "Mechanical, quartz, dress, dive and collectible watches.",
    "da": "Mekaniske, quartz, dress, dykker- og samlerure.",
    "sv": "Mekaniska klockor, quartzur, dressur, dykarur och samlarklockor.",
    "no": "Mekaniske klokker, quartzur, dressur, dykkerur og samlerklokker."
  },
  "Billeder hjælper": {
    "en": "Photos help",
    "da": "Billeder hjælper",
    "sv": "Bilder hjälper",
    "no": "Bilder hjelper"
  },
  "Skive, bagside, krone, rem og eventuelle mærker.": {
    "en": "Dial, caseback, crown, strap and any markings.",
    "da": "Skive, bagside, krone, rem og eventuelle mærker.",
    "sv": "Urtavla, baklock, krona, band och eventuella märkningar.",
    "no": "Urskive, baklokk, krone, rem og eventuelle merker."
  },
  "Ærlig dialog": {
    "en": "Honest dialogue",
    "da": "Ærlig dialog",
    "sv": "Ärlig dialog",
    "no": "Ærlig dialog"
  },
  "Ingen pres, bare en klar vurdering og næste skridt.": {
    "en": "No pressure, just a clear assessment and next steps.",
    "da": "Intet pres, bare en klar vurdering og næste skridt.",
    "sv": "Ingen press, bara en tydlig bedömning och nästa steg.",
    "no": "Intet press, bare en tydelig vurdering og neste steg."
  },
  "Opkøb af ur": {
    "en": "Watch sale enquiry",
    "da": "Forespørgsel om salg af ur",
    "sv": "Förfrågan om klockförsäljning",
    "no": "Forespørsel om salg av klokke"
  },
  "Hej Lauge,": {
    "en": "Hello Lauge,",
    "da": "Hej Lauge,",
    "sv": "Hej Lauge,",
    "no": "Hei Lauge,"
  },
  "Jeg vil gerne høre, om du er interesseret i at købe mit ur.": {
    "en": "I would like to know if you are interested in buying my watch.",
    "da": "Jeg vil gerne høre, om du er interesseret i at købe mit ur.",
    "sv": "Jag undrar om du är intresserad av att köpa min klocka.",
    "no": "Jeg lurer på om du er interessert i å kjøpe klokken min."
  },
  "Venlig hilsen": {
    "en": "Kind regards",
    "da": "Venlig hilsen",
    "sv": "Vänliga hälsningar",
    "no": "Vennlig hilsen"
  },
  "Small gold Omega Ladymatic watch worn on a wrist": {
    "en": "Small gold Omega Ladymatic watch worn on a wrist",
    "da": "Lille gyldent Omega Ladymatic-ur på et håndled",
    "sv": "Liten gyllene Omega Ladymatic på en handled",
    "no": "Liten gyllen Omega Ladymatic på et håndledd"
  },
  "Vintage Rado Golden Horse watch on a steel bracelet": {
    "en": "Vintage Rado Golden Horse watch on a steel bracelet",
    "da": "Vintage Rado Golden Horse med stållænke",
    "sv": "Vintage Rado Golden Horse med stållänk",
    "no": "Vintage Rado Golden Horse med stållenke"
  },
  "Vintage Enicar Sherpa Guide watch on a steel bracelet": {
    "en": "Vintage Enicar Sherpa Guide watch on a steel bracelet",
    "da": "Vintage Enicar Sherpa Guide med stållænke",
    "sv": "Vintage Enicar Sherpa Guide med stållänk",
    "no": "Vintage Enicar Sherpa Guide med stållenke"
  },
  "Allt löste sig jättebra många pluss 👍👍": {
    "en": "Everything worked out really well, lots of positives 👍👍",
    "da": "Alt løste sig rigtig godt, mange plusser 👍👍",
    "sv": "Allt löste sig jättebra många pluss 👍👍",
    "no": "Alt ordnet seg kjempebra, mange plusser 👍👍"
  },
  "Tolle Uhr. Schnelle Lieferung. Alles wie beschrieben. 👍👍👍": {
    "en": "Great watch. Fast delivery. Everything as described. 👍👍👍",
    "da": "Flot ur. Hurtig levering. Alt som beskrevet. 👍👍👍",
    "sv": "Fin klocka. Snabb leverans. Allt enligt beskrivningen. 👍👍👍",
    "no": "Flott klokke. Rask levering. Alt som beskrevet. 👍👍👍"
  },
  "Bra": {
    "en": "Good",
    "da": "Godt",
    "sv": "Bra",
    "no": "Bra"
  },
  "Riktig bra,perfekt packning, hjälpsam": {
    "en": "Really good, perfectly packed, helpful",
    "da": "Rigtig godt, perfekt pakket, hjælpsom",
    "sv": "Riktig bra,perfekt packning, hjälpsam",
    "no": "Veldig bra, perfekt pakket, hjelpsom"
  },
  "Allt var perfekt! Tack så mycket för en smidig och trevlig affär! Rekommenderas": {
    "en": "Everything was perfect! Thank you for a smooth and pleasant transaction! Recommended",
    "da": "Alt var perfekt! Tak for en nem og behagelig handel! Kan anbefales",
    "sv": "Allt var perfekt! Tack så mycket för en smidig och trevlig affär! Rekommenderas",
    "no": "Alt var perfekt! Takk for en enkel og hyggelig handel! Anbefales"
  },
  "Super! A++++": {
    "en": "Super! A++++",
    "da": "Super! A++++",
    "sv": "Super! A++++",
    "no": "Supert! A++++"
  },
  "Bra packat och bra kommunikation 👍": {
    "en": "Well packed and good communication 👍",
    "da": "Godt pakket og god kommunikation 👍",
    "sv": "Bra packat och bra kommunikation 👍",
    "no": "Godt pakket og god kommunikasjon 👍"
  },
  "Positiv anmeldelse på Tradera.": {
    "en": "Positive feedback on Tradera.",
    "da": "Positiv anmeldelse på Tradera.",
    "sv": "Positivt omdöme på Tradera.",
    "no": "Positiv omtale på Tradera."
  },
  "Seriös säljare, välpackat och god kommunikation en toppenvara till samlingen.": {
    "en": "Reliable seller, well packed and good communication. A great addition to the collection.",
    "da": "Seriøs sælger, godt pakket og god kommunikation. En fantastisk tilføjelse til samlingen.",
    "sv": "Seriös säljare, välpackat och god kommunikation en toppenvara till samlingen.",
    "no": "Seriøs selger, godt pakket og god kommunikasjon. Et flott tilskudd til samlingen."
  },
  "Allting helt perfekt. Suverän säljare!": {
    "en": "Everything absolutely perfect. Excellent seller!",
    "da": "Alt helt perfekt. Fremragende sælger!",
    "sv": "Allting helt perfekt. Suverän säljare!",
    "no": "Alt helt perfekt. Suveren selger!"
  },
  "Smidigt och enkelt. Proffsigt paketerat.": {
    "en": "Smooth and easy. Professionally packed.",
    "da": "Nemt og enkelt. Professionelt pakket.",
    "sv": "Smidigt och enkelt. Proffsigt paketerat.",
    "no": "Smidig og enkelt. Profesjonelt pakket."
  },
  "Rekommenderar +++++++": {
    "en": "Recommended +++++++",
    "da": "Kan anbefales +++++++",
    "sv": "Rekommenderar +++++++",
    "no": "Anbefales +++++++"
  },
  "🌟🌟🌟🌟🌟 Super nöjd, bra kommunikation och mycket trevlig säljare! 🙏": {
    "en": "🌟🌟🌟🌟🌟 Very happy, good communication and a very friendly seller! 🙏",
    "da": "🌟🌟🌟🌟🌟 Meget tilfreds, god kommunikation og en meget venlig sælger! 🙏",
    "sv": "🌟🌟🌟🌟🌟 Super nöjd, bra kommunikation och mycket trevlig säljare! 🙏",
    "no": "🌟🌟🌟🌟🌟 Veldig fornøyd, god kommunikasjon og en svært hyggelig selger! 🙏"
  },
  "Perfect. Thank you !": {
    "en": "Perfect. Thank you!",
    "da": "Perfekt. Tak!",
    "sv": "Perfekt. Tack!",
    "no": "Perfekt. Takk!"
  },
  "Snabbt, smidigt och allt funkade som det skulle.": {
    "en": "Fast, smooth and everything worked as it should.",
    "da": "Hurtigt, nemt og alt virkede, som det skulle.",
    "sv": "Snabbt, smidigt och allt funkade som det skulle.",
    "no": "Raskt, smidig og alt fungerte som det skulle."
  },
  "Translated review": {
    "en": "Translated review",
    "da": "Oversat anmeldelse",
    "sv": "Översatt omdöme",
    "no": "Oversatt omtale"
  },
  "Herre": {
    "en": "Men",
    "da": "Herre",
    "sv": "Herr",
    "no": "Herre"
  },
  "Dame": {
    "en": "Women",
    "da": "Dame",
    "sv": "Dam",
    "no": "Dame"
  },
  "God brugt stand": {
    "en": "Good used condition",
    "da": "God brugt stand",
    "sv": "Gott begagnat skick",
    "no": "God brukt tilstand"
  },
  "Meget god stand": {
    "en": "Very good condition",
    "da": "Meget god stand",
    "sv": "Mycket gott skick",
    "no": "Meget god tilstand"
  },
  "Ingen eller minimale tegn på brug": {
    "en": "No or minimal signs of use",
    "da": "Ingen eller minimale tegn på brug",
    "sv": "Inga eller minimala tecken på användning",
    "no": "Ingen eller minimale tegn til bruk"
  },
  "Mindre tegn på brug": {
    "en": "Minor signs of use",
    "da": "Mindre tegn på brug",
    "sv": "Mindre tecken på användning",
    "no": "Mindre tegn til bruk"
  },
  "The service history is unknown.": {
    "en": "The service history is unknown.",
    "da": "Servicehistorikken er ukendt.",
    "sv": "Servicehistoriken är okänd.",
    "no": "Servicehistorikken er ukjent."
  },
  "Please examine all photos carefully and read the full description.": {
    "en": "Please examine all photos carefully and read the full description.",
    "da": "Se alle billeder grundigt, og læs hele beskrivelsen.",
    "sv": "Granska alla bilder noga och läs hela beskrivningen.",
    "no": "Se nøye på alle bildene og les hele beskrivelsen."
  },
  "Please examine all photos carefully and read the full description before bidding.": {
    "en": "Please examine all photos carefully and read the full description before bidding.",
    "da": "Se alle billeder grundigt, og læs hele beskrivelsen, før du byder.",
    "sv": "Granska alla bilder noga och läs hela beskrivningen innan du bjuder.",
    "no": "Se nøye på alle bildene og les hele beskrivelsen før du byr."
  },
  "Please note: The buyer is responsible for any applicable import duties and taxes.": {
    "en": "Please note: The buyer is responsible for any applicable import duties and taxes.",
    "da": "Bemærk: Køberen er ansvarlig for eventuelle importafgifter og skatter.",
    "sv": "Observera: Köparen ansvarar för eventuella importavgifter och skatter.",
    "no": "Merk: Kjøperen er ansvarlig for eventuelle importavgifter og skatter."
  },
  "The automatic movement is running and the day/date functions are working.": {
    "en": "The automatic movement is running and the day/date functions are working.",
    "da": "Det automatiske urværk går, og dag- og datofunktionerne virker.",
    "sv": "Det automatiska urverket går och dag- och datumfunktionerna fungerar.",
    "no": "Det automatiske urverket går, og dag- og datofunksjonene virker."
  },
  "The automatic Seiko 6106C movement is running and the day/date functions are working.": {
    "en": "The automatic Seiko 6106C movement is running and the day/date functions are working.",
    "da": "Det automatiske Seiko 6106C-urværk går, og dag- og datofunktionerne virker.",
    "sv": "Det automatiska Seiko 6106C-urverket går och dag- och datumfunktionerna fungerar.",
    "no": "Det automatiske Seiko 6106C-urverket går, og dag- og datofunksjonene virker."
  },
  "A brand new black leather strap has been fitted to the watch.": {
    "en": "A brand new black leather strap has been fitted to the watch.",
    "da": "Uret har fået monteret en helt ny sort læderrem.",
    "sv": "Klockan har fått ett helt nytt svart läderband.",
    "no": "Klokken har fått montert en helt ny svart lærrem."
  },
  "The silver dial is well preserved and features applied hour markers and a day/date display.": {
    "en": "The silver dial is well preserved and features applied hour markers and a day/date display.",
    "da": "Den sølvfarvede skive er velbevaret og har påsatte timemarkører samt dag- og datovisning.",
    "sv": "Den silverfärgade urtavlan är välbevarad och har applicerade timmarkörer samt dag- och datumvisning.",
    "no": "Den sølvfargede urskiven er godt bevart og har påsatte timemarkører samt dag- og datovisning."
  },
  "The silver dial presents nicely and features applied hour markers and a day/date display.": {
    "en": "The silver dial presents nicely and features applied hour markers and a day/date display.",
    "da": "Den sølvfarvede skive fremstår flot og har påsatte timemarkører samt dag- og datovisning.",
    "sv": "Den silverfärgade urtavlan är fin och har applicerade timmarkörer samt dag- och datumvisning.",
    "no": "Den sølvfargede urskiven fremstår fin og har påsatte timemarkører samt dag- og datovisning."
  },
  "The watch shows normal signs of wear consistent with its age, including scratches and marks on the case and bracelet, but remains in nice vintage condition.": {
    "en": "The watch shows normal signs of wear consistent with its age, including scratches and marks on the case and bracelet, but remains in nice vintage condition.",
    "da": "Uret har alderssvarende brugsspor, herunder ridser og mærker på kasse og lænke, men er stadig i fin vintagestand.",
    "sv": "Klockan har normalt åldersrelaterat slitage, inklusive repor och märken på boett och länk, men är fortfarande i fint vintageskick.",
    "no": "Klokken har aldersrelaterte bruksspor, inkludert riper og merker på kasse og lenke, men er fortsatt i fin vintagetilstand."
  },
  "The watch shows normal signs of wear consistent with its age, including scratches and marks on the case, case back, clasp and bracelet, but remains in nice vintage condition.": {
    "en": "The watch shows normal signs of wear consistent with its age, including scratches and marks on the case, case back, clasp and bracelet, but remains in nice vintage condition.",
    "da": "Uret har alderssvarende brugsspor, herunder ridser og mærker på kasse, bagkasse, lås og lænke, men er stadig i fin vintagestand.",
    "sv": "Klockan har normalt åldersrelaterat slitage, inklusive repor och märken på boett, baklock, spänne och länk, men är fortfarande i fint vintageskick.",
    "no": "Klokken har aldersrelaterte bruksspor, inkludert riper og merker på kasse, baklokk, lås og lenke, men er fortsatt i fin vintagetilstand."
  },
  "The watch shows normal signs of wear consistent with its age, including scratches and marks on the case and case back, but remains in nice vintage condition.": {
    "en": "The watch shows normal signs of wear consistent with its age, including scratches and marks on the case and case back, but remains in nice vintage condition.",
    "da": "Uret har alderssvarende brugsspor, herunder ridser og mærker på kasse og bagkasse, men er stadig i fin vintagestand.",
    "sv": "Klockan har normalt åldersrelaterat slitage, inklusive repor och märken på boett och baklock, men är fortfarande i fint vintageskick.",
    "no": "Klokken har aldersrelaterte bruksspor, inkludert riper og merker på kasse og baklokk, men er fortsatt i fin vintagetilstand."
  },
  "Brand": {
    "en": "Brand",
    "da": "Mærke",
    "sv": "Märke",
    "no": "Merke"
  },
  "Model": {
    "en": "Model",
    "da": "Model",
    "sv": "Modell",
    "no": "Modell"
  },
  "Reference": {
    "en": "Reference",
    "da": "Reference",
    "sv": "Referens",
    "no": "Referanse"
  },
  "Serial number": {
    "en": "Serial number",
    "da": "Serienummer",
    "sv": "Serienummer",
    "no": "Serienummer"
  },
  "Production date": {
    "en": "Production date",
    "da": "Produktionsdato",
    "sv": "Tillverkningsdatum",
    "no": "Produksjonsdato"
  },
  "Movement": {
    "en": "Movement",
    "da": "Urværk",
    "sv": "Urverk",
    "no": "Urverk"
  },
  "Caliber": {
    "en": "Caliber",
    "da": "Kaliber",
    "sv": "Kaliber",
    "no": "Kaliber"
  },
  "Jewels": {
    "en": "Jewels",
    "da": "Sten",
    "sv": "Stenar",
    "no": "Steiner"
  },
  "Features": {
    "en": "Features",
    "da": "Funktioner",
    "sv": "Funktioner",
    "no": "Funksjoner"
  },
  "Case": {
    "en": "Case",
    "da": "Urkasse",
    "sv": "Boett",
    "no": "Urkasse"
  },
  "Dial": {
    "en": "Dial",
    "da": "Urskive",
    "sv": "Urtavla",
    "no": "Urskive"
  },
  "Bracelet": {
    "en": "Bracelet",
    "da": "Lænke",
    "sv": "Länk",
    "no": "Lenke"
  },
  "Crown": {
    "en": "Crown",
    "da": "Krone",
    "sv": "Krona",
    "no": "Krone"
  },
  "Strap": {
    "en": "Strap",
    "da": "Rem",
    "sv": "Band",
    "no": "Rem"
  },
  "Country of manufacture": {
    "en": "Country of manufacture",
    "da": "Fremstillingsland",
    "sv": "Tillverkningsland",
    "no": "Produksjonsland"
  },
  "Automatic": {
    "en": "Automatic",
    "da": "Automatisk",
    "sv": "Automatisk",
    "no": "Automatisk"
  },
  "Stainless steel": {
    "en": "Stainless steel",
    "da": "Rustfrit stål",
    "sv": "Rostfritt stål",
    "no": "Rustfritt stål"
  },
  "Silver textured dial": {
    "en": "Silver textured dial",
    "da": "Sølvfarvet skive med struktur",
    "sv": "Silverfärgad urtavla med struktur",
    "no": "Sølvfarget urskive med struktur"
  },
  "Rado stainless steel bracelet": {
    "en": "Rado stainless steel bracelet",
    "da": "Rado-lænke i rustfrit stål",
    "sv": "Rado-länk i rostfritt stål",
    "no": "Rado-lenke i rustfritt stål"
  },
  "Signed Rado crown": {
    "en": "Signed Rado crown",
    "da": "Krone med Rado-logo",
    "sv": "Krona med Rado-logotyp",
    "no": "Krone med Rado-logo"
  },
  "Switzerland": {
    "en": "Switzerland",
    "da": "Schweiz",
    "sv": "Schweiz",
    "no": "Sveits"
  },
  "Japan": {
    "en": "Japan",
    "da": "Japan",
    "sv": "Japan",
    "no": "Japan"
  },
  "Silver": {
    "en": "Silver",
    "da": "Sølvfarvet",
    "sv": "Silverfärgad",
    "no": "Sølvfarget"
  },
  "Brand new black leather strap": {
    "en": "Brand new black leather strap",
    "da": "Helt ny sort læderrem",
    "sv": "Helt nytt svart läderband",
    "no": "Helt ny svart lærrem"
  },
  "Day/Date": {
    "en": "Day/Date",
    "da": "Dag/dato",
    "sv": "Dag/datum",
    "no": "Dag/dato"
  },
  "Shipping to Sweden": {
    "en": "Shipping to Sweden",
    "da": "Forsendelse til Sverige",
    "sv": "Frakt till Sverige",
    "no": "Frakt til Sverige"
  },
  "November": {
    "en": "November",
    "da": "November",
    "sv": "November",
    "no": "November"
  },
  "January": {
    "en": "January",
    "da": "Januar",
    "sv": "Januari",
    "no": "Januar"
  },
  "approx.": {
    "en": "approx.",
    "da": "ca.",
    "sv": "ca",
    "no": "ca."
  },
  "excluding crown": {
    "en": "excluding crown",
    "da": "uden krone",
    "sv": "utan krona",
    "no": "uten krone"
  },
  "jewels": {
    "en": "jewels",
    "da": "sten",
    "sv": "stenar",
    "no": "steiner"
  },
  "Mekanisk ur, virker fint når det trækkes op": {
    "en": "Mechanical watch, runs well when wound",
    "da": "Mekanisk ur, virker fint når det trækkes op",
    "sv": "Mekanisk klocka, går bra när den dras upp",
    "no": "Mekanisk klokke, går fint når den trekkes opp"
  },
  "God brugt stand med brugsspor": {
    "en": "Good used condition with signs of use",
    "da": "God brugt stand med brugsspor",
    "sv": "Gott begagnat skick med bruksspår",
    "no": "God brukt tilstand med bruksspor"
  },
  "Okay brugt stand med brugsspor": {
    "en": "Fair used condition with signs of use",
    "da": "Okay brugt stand med brugsspor",
    "sv": "Okej begagnat skick med bruksspår",
    "no": "Grei brukt tilstand med bruksspor"
  },
  "Okay brugt stand med synlige tegn på slid": {
    "en": "Fair used condition with visible wear",
    "da": "Okay brugt stand med synlige tegn på slid",
    "sv": "Okej begagnat skick med synligt slitage",
    "no": "Grei brukt tilstand med synlig slitasje"
  },
  "Quartz ur med nyt batteri": {
    "en": "Quartz watch with a new battery",
    "da": "Quartzur med nyt batteri",
    "sv": "Quartzur med nytt batteri",
    "no": "Quartzur med nytt batteri"
  },
  "Ridser og almindelige brugsspor": {
    "en": "Scratches and normal signs of use",
    "da": "Ridser og almindelige brugsspor",
    "sv": "Repor och vanliga bruksspår",
    "no": "Riper og vanlige bruksspor"
  },
  "Alle ure er stemplet 0.800 sølv": {
    "en": "All watches are stamped 0.800 silver",
    "da": "Alle ure er stemplet 0.800 sølv",
    "sv": "Alla klockor är stämplade 0.800 silver",
    "no": "Alle klokkene er stemplet 0.800 sølv"
  },
  "Alle ure virker som de skal og blev solgt som de er": {
    "en": "All watches work as they should and were sold as is",
    "da": "Alle ure virker som de skal og blev solgt som de er",
    "sv": "Alla klockor fungerar som de ska och såldes i befintligt skick",
    "no": "Alle klokkene virker som de skal og ble solgt som de er"
  },
  "5 stk. ældre mekaniske lommeure": {
    "en": "5 older mechanical pocket watches",
    "da": "5 ældre mekaniske lommeure",
    "sv": "5 äldre mekaniska fickur",
    "no": "5 eldre mekaniske lommeur"
  },
  "Diameter inkl. krone": {
    "en": "Diameter including crown",
    "da": "Diameter inkl. krone",
    "sv": "Diameter inklusive krona",
    "no": "Diameter inkludert krone"
  },
  "Other": {
    "en": "Other",
    "da": "Andre",
    "sv": "Övriga",
    "no": "Andre"
  },
  "Vintage Omega lommeur i 0.800 sølv. Swiss Made, okay brugt stand og synlige tegn på slid.": {
    "en": "Vintage Omega pocket watch in 0.800 silver. Swiss-made, fair used condition with visible wear.",
    "da": "Vintage Omega lommeur i 0.800 sølv. Schweizisk, okay brugt stand med synlige tegn på slid.",
    "sv": "Vintage Omega fickur i 0.800 silver. Schweiziskt, okej begagnat skick med synligt slitage.",
    "no": "Vintage Omega lommeur i 0.800 sølv. Sveitsisk, grei brukt tilstand med synlig slitasje."
  },
  "Samling med 5 ældre mekaniske lommeure i 0.800 sølv, solgt samlet i brugt stand.": {
    "en": "Collection of 5 older mechanical pocket watches in 0.800 silver, sold together in used condition.",
    "da": "Samling med 5 ældre mekaniske lommeure i 0.800 sølv, solgt samlet i brugt stand.",
    "sv": "Samling med 5 äldre mekaniska fickur i 0.800 silver, sålda tillsammans i begagnat skick.",
    "no": "Samling med 5 eldre mekaniske lommeur i 0.800 sølv, solgt samlet i brukt tilstand."
  },
  "CYMA lommeur med kæde. Swiss Made, okay brugt stand og synlige tegn på slid.": {
    "en": "CYMA pocket watch with chain. Swiss-made, fair used condition with visible wear.",
    "da": "CYMA lommeur med kæde. Schweizisk, okay brugt stand med synlige tegn på slid.",
    "sv": "CYMA fickur med kedja. Schweiziskt, okej begagnat skick med synligt slitage.",
    "no": "CYMA lommeur med kjede. Sveitsisk, grei brukt tilstand med synlig slitasje."
  },
  "14k dameur fra H. Moser & Cie. Swiss Made, god brugt stand og mindre tegn på brug.": {
    "en": "14k women's watch by H. Moser & Cie. Swiss-made, good used condition with minor signs of use.",
    "da": "14k dameur fra H. Moser & Cie. Schweizisk, god brugt stand med mindre brugsspor.",
    "sv": "14k damur från H. Moser & Cie. Schweiziskt, gott begagnat skick med mindre bruksspår.",
    "no": "14k dameklokke fra H. Moser & Cie. Sveitsisk, god brukt tilstand med mindre bruksspor."
  },
  "Rado Florence quartz med safirglas. Swiss Made, unisex og okay brugt stand.": {
    "en": "Rado Florence quartz with sapphire crystal. Swiss-made, unisex, in fair used condition.",
    "da": "Rado Florence quartz med safirglas. Schweizisk, unisex og okay brugt stand.",
    "sv": "Rado Florence quartz med safirglas. Schweiziskt, unisex och okej begagnat skick.",
    "no": "Rado Florence quartz med safirglass. Sveitsisk, unisex og grei brukt tilstand."
  },
  "Omega Seamaster De Ville dameur. Swiss Made, okay brugt stand og synlige tegn på slid.": {
    "en": "Omega Seamaster De Ville women's watch. Swiss-made, fair used condition with visible wear.",
    "da": "Omega Seamaster De Ville dameur. Schweizisk, okay brugt stand med synlige tegn på slid.",
    "sv": "Omega Seamaster De Ville damur. Schweiziskt, okej begagnat skick med synligt slitage.",
    "no": "Omega Seamaster De Ville dameklokke. Sveitsisk, grei brukt tilstand med synlig slitasje."
  },
  "God brugt stand med mindre tegn på brug": {
    "en": "Good used condition with minor signs of use",
    "da": "God brugt stand med mindre tegn på brug",
    "sv": "Gott begagnat skick med mindre bruksspår",
    "no": "God brukt tilstand med mindre bruksspor"
  },
  "h": {
    "en": "h",
    "da": "t",
    "sv": "t",
    "no": "t"
  }
};
export function translateText(text: string, lang: Language, vars: Record<string, string | number> = {}) {
 const key = text.trim().replace(/\s+/g, " ");
 let result = phraseTranslations[key]?.[lang] ?? text;
 return result.replace(/\{(\w+)\}/g, (match, key) => vars[key] == null ? match : String(vars[key]));
}
export function useLocalizedText() {
 const { lang } = useLanguage();
 return useCallback((text: string, vars?: Record<string, string | number>) => translateText(text, lang, vars), [lang]);
}
