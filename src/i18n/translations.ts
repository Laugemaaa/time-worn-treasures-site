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
  | "nav.available"
  | "nav.about"
  | "nav.soldWatches"
  | "nav.buyWatches"
  | "nav.tradera"
  | "nav.openMenu"
  | "nav.closeMenu"
  | "nav.menu"
  | "skip.toContent"
  | "hero.title"
  | "hero.subtitle"
  | "hero.cta"
  | "philosophy.title"
  | "philosophy.intro"
  | "philosophy.p1"
  | "philosophy.p2"
  | "philosophy.p3"
  | "founder.eyebrow"
  | "founder.title"
  | "founder.p1"
  | "founder.p2"
  | "founder.p3"
  | "founder.p4"
  | "founder.tagVintage"
  | "founder.tagCharacter"
  | "founder.tagProvenance"
  | "founder.tag1"
  | "founder.tag2"
  | "founder.tag3"
  | "curation.eyebrow"
  | "curation.title"
  | "curation.p1"
  | "curation.p2"
  | "curation.p3"
  | "curation.p4"
  | "curation.tag1"
  | "curation.tag2"
  | "curation.tag3"
  | "curation.ctaEyebrow"
  | "curation.ctaTitle"
  | "curation.ctaLink"
  | "instagram.eyebrow"
  | "instagram.title"
  | "instagram.p1"
  | "instagram.p2"
  | "instagram.cta"
  | "instagram.videoLabel"
  | "collection.title"
  | "collection.infoEyebrow"
  | "collection.infoTitle"
  | "collection.infoBody"
  | "collection.infoPoint1"
  | "collection.infoPoint2"
  | "collection.productSummary"
  | "collection.empty"
  | "collection.emptyDescription"
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
  | "detail.descriptionFallback"
  | "detail.listingInfoEyebrow"
  | "detail.listingInfoTitle"
  | "detail.originalNotesTitle"
  | "detail.originalNotesIntro"
  | "detail.keyNotesTitle"
  | "detail.specificationsTitle"
  | "detail.sellerNotesTitle"
  | "detail.specItem"
  | "detail.specAudience"
  | "detail.specCondition"
  | "detail.specBrand"
  | "detail.specSize"
  | "detail.specPeriod"
  | "detail.specNotes"
  | "detail.notFound"
  | "detail.return"
  | "detail.errorLoad"
  | "detail.tryAgain"
  | "detail.browseTradera"
  | "sold.archive"
  | "sold.title"
  | "sold.description"
  | "sold.emptyTitle"
  | "sold.emptyDescription"
  | "sold.viewListing"
  | "sold.viewPreviousListing"
  | "sold.ended"
  | "sold.finalPrice"
  | "sold.askingPrice"
  | "sold.bids"
  | "sold.back"
  | "sold.notFoundTitle"
  | "sold.notFoundDescription"
  | "sold.itemLabel"
  | "sold.imageLabel"
  | "sold.itemNumber"
  | "sold.filterByBrand"
  | "sold.allBrands"
  | "sold.categoryCount"
  | "sold.chooseBrand"
  | "sold.genericDescription"
  | "sold.showingCount";

type Dict = Record<TranslationKey, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.collection": "Collection",
  "nav.available": "Auctions",
  "nav.about": "About",
  "nav.soldWatches": "Sold watches",
  "nav.buyWatches": "Sell a watch",
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
  "philosophy.intro":
    "Because the marks, wear, and patina are part of the story, not something to hide.",
  "philosophy.p1":
    "A new watch tells you the time. A vintage watch tells you about time - decades of it, compressed into scratches on a case back, a dial that's slowly turned from silver to champagne, a movement that's been wound ten thousand mornings in a row.",
  "philosophy.p2":
    "We look for watches that have been worn honestly. Not safe queens preserved behind glass, but daily companions that carry the evidence of real life. That's where the character lives - in the imperfections.",
  "philosophy.p3":
    "Each piece in this collection has been chosen because it has something to say. A provenance worth knowing, a design that still holds up, or simply a presence on the wrist that modern watches struggle to replicate.",
  "founder.eyebrow": "Grandpa's Heritage",
  "founder.title": "Built around watches with a life before us",
  "founder.p1":
    "I created Grandpa's Heritage because I have always been drawn to objects that carry memory. A vintage watch is never just a way to tell the time. It is something that has been worn, repaired, kept, forgotten, found again, and passed from one chapter of life into another.",
  "founder.p2":
    "The name comes from that feeling: the idea that a watch can hold a piece of someone's history. Some pieces are inherited, some are discovered, and some simply have the kind of character that modern things rarely get the chance to develop.",
  "founder.p3":
    "The watches here are chosen for honesty rather than perfection. We look for vintage pieces with visible character, good design, mechanical charm, and the small signs of age that make each one feel individual. Scratches, patina, softened edges, and a dial that has changed with time are not flaws to hide. They are part of the story.",
  "founder.p4":
    "Grandpa's Heritage is for people who want something with presence. Not a watch that looks untouched, but one that feels like it has already lived and is ready to be worn into its next story.",
  "founder.tagVintage": "Vintage",
  "founder.tagCharacter": "Character",
  "founder.tagProvenance": "Provenance",
  "founder.tag1": "Vintage",
  "founder.tag2": "Character",
  "founder.tag3": "Provenance",
  "curation.eyebrow": "The selection",
  "curation.title": "Chosen for honesty, not perfection",
  "curation.p1":
    "Every piece is selected with the same question in mind: does it have a reason to exist in the collection? A good case shape, an interesting dial, a reliable quartz movement, a strap with the right character, a repair project, or simply the kind of quiet charm that makes you look twice.",
  "curation.p2":
    "We do not try to erase age or hide condition. Instead, each piece is presented with the details that matter: the marks, the wear, the patina, known service notes, defects, missing parts, and the small imperfections that help tell the truth of the piece.",
  "curation.p3":
    "The goal is to make buying vintage feel calm and transparent. Photos, descriptions, and condition notes are meant to give a clear sense of what the watch is, not a polished version of what it once was.",
  "curation.p4":
    "When a watch leaves Grandpa's Heritage, it does not disappear from the story. The sold watches archive is kept as a quiet record of the pieces that have passed through the collection - useful for reference, transparency, and a sense of the kind of watches we choose.",
  "curation.tag1": "Honesty",
  "curation.tag2": "Archive",
  "curation.tag3": "Reference",
  "curation.ctaEyebrow": "Archive",
  "curation.ctaTitle": "See sold watches here",
  "curation.ctaLink": "Open archive",
  "instagram.eyebrow": "Instagram",
  "instagram.title": "See the details in motion",
  "instagram.p1":
    "On Instagram I share the small moments that still photos do not always catch: the way a dial changes in the light, the sound of a hand-wound movement, and the marks that make each watch feel alive.",
  "instagram.p2":
    "The videos are a closer look at the watches before they become listings - slower, more tactile, and focused on the details that give vintage pieces their character.",
  "instagram.cta": "Follow on Instagram",
  "instagram.videoLabel": "Instagram video showing a vintage watch from Grandpa's Heritage",
  "collection.title": "Active auctions",
  "collection.infoEyebrow": "New finds",
  "collection.infoTitle": "More watches are added regularly",
  "collection.infoBody":
    "The collection changes as new vintage pieces are found, checked, photographed, and listed for auction.",
  "collection.infoPoint1": "Auctions are refreshed as listings go live on Tradera.",
  "collection.infoPoint2": "Check back often for newly added pieces and returning archive updates.",
  "collection.productSummary": "Vintage watch listed on Tradera with photos, condition notes, and live auction details.",
  "collection.empty": "No watches available at the moment. Check back soon.",
  "collection.emptyDescription": "New auctions are added whenever fresh vintage pieces are ready for Tradera.",
  "collection.error": "We couldn't load the collection right now. Please try again.",
  "collection.retry": "Try again",
  "testimonials.title": "What collectors say",
  "footer.brandTitle": "Grandpa's Heritage",
  "footer.brandDesc":
    "Curated vintage timepieces, each with a story worth telling. We believe every scratch, every patina mark, and every worn edge are part of what makes a watch worth owning.",
  "footer.navigate": "Navigate",
  "footer.trust": "Trust",
  "footer.trustDesc":
    "Curated vintage watches since 2024. Every piece is described honestly, and purchases are completed on Tradera.",
  "footer.copyright": "(c) {year} Grandpa's Heritage. All auctions are completed on Tradera.",
  "footer.language": "Language",
  "detail.back": "Back to Collection",
  "detail.auctionDetails": "Auction Details",
  "detail.viewOnTradera": "View on Tradera",
  "detail.handoff":
    "This listing is presented here, but the auction and checkout continue on Tradera.",
  "detail.descriptionFallback":
    "The original auction text is available on Tradera. Review the photos, condition notes, and live listing details before bidding.",
  "detail.listingInfoEyebrow": "From the Tradera listing",
  "detail.listingInfoTitle": "Watch details at a glance",
  "detail.originalNotesTitle": "Original listing notes",
  "detail.originalNotesIntro":
    "These notes come from the active Tradera auction and are kept in the seller's original wording.",
  "detail.keyNotesTitle": "Key notes",
  "detail.specificationsTitle": "Specifications",
  "detail.sellerNotesTitle": "Seller notes",
  "detail.specItem": "Item no.",
  "detail.specAudience": "Audience",
  "detail.specCondition": "Condition",
  "detail.specBrand": "Brand",
  "detail.specSize": "Case size",
  "detail.specPeriod": "Period",
  "detail.specNotes": "Notes",
  "detail.notFound": "This watch could not be found.",
  "detail.return": "Return to the collection",
  "detail.errorLoad": "We couldn't load this watch right now. Please try again.",
  "detail.tryAgain": "Try again",
  "detail.browseTradera": "Browse on Tradera",
  "sold.archive": "Archive",
  "sold.title": "Sold watches",
  "sold.description":
    "An archive of previously sold vintage watches from GrandpasHeritage. Kept for transparency, reference, and to show the kinds of pieces that have passed through the collection.",
  "sold.emptyTitle": "Sold watches coming soon",
  "sold.emptyDescription":
    "Previous sales can be added here with an image, sale price, and link to the completed Tradera listing.",
  "sold.viewListing": "View listing",
  "sold.viewPreviousListing": "View previous listing",
  "sold.ended": "Ended {date}",
  "sold.finalPrice": "Final price",
  "sold.askingPrice": "Asking price",
  "sold.bids": "{count} bids",
  "sold.back": "Back to sold watches",
  "sold.notFoundTitle": "Listing not found",
  "sold.notFoundDescription": "This sold watch does not exist in the archive.",
  "sold.itemLabel": "Sold watch",
  "sold.imageLabel": "Show image {index} of {title}",
  "sold.itemNumber": "Item no.",
  "sold.filterByBrand": "Filter by brand",
  "sold.allBrands": "All brands",
  "sold.categoryCount": "{count} sold",
  "sold.chooseBrand": "Choose a brand to see previously sold watches from the archive.",
  "sold.genericDescription": "Previously sold vintage watch from the GrandpasHeritage archive.",
  "sold.showingCount": "Showing {count} of {total} sold watches",
};

const da: Dict = {
  "nav.home": "Hjem",
  "nav.collection": "Kollektion",
  "nav.available": "Auktioner",
  "nav.about": "Om",
  "nav.soldWatches": "Solgte ure",
  "nav.buyWatches": "Opkøb",
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
  "philosophy.intro":
    "Fordi mærkerne, sliddet og patinaen er en del af historien, ikke noget der skal skjules.",
  "philosophy.p1":
    "Et nyt ur fortæller dig tiden. Et vintage-ur fortæller dig om tiden - årtier af den, komprimeret i ridser på bagsiden, en skive der langsomt er blevet fra sølv til champagne, et værk der er trukket op ti tusind morgener i træk.",
  "philosophy.p2":
    "Vi leder efter ure, der er båret ærligt. Ikke museumsstykker bag glas, men daglige følgesvende, der bærer beviser på et virkeligt liv. Det er der, karakteren bor - i ufuldkommenhederne.",
  "philosophy.p3":
    "Hvert stykke i denne samling er valgt, fordi det har noget at sige. En proveniens værd at kende, et design der stadig holder, eller blot en tilstedeværelse på håndleddet, som moderne ure har svært ved at gengive.",
  "founder.eyebrow": "Grandpa's Heritage",
  "founder.title": "Bygget omkring ure med et liv før os",
  "founder.p1":
    "Jeg skabte Grandpa's Heritage, fordi jeg altid har været draget af genstande, der bærer minder. Et vintage-ur er aldrig bare en måde at aflæse tiden på. Det er noget, der er blevet båret, repareret, gemt, glemt, fundet igen og givet videre fra ét kapitel i livet til det næste.",
  "founder.p2":
    "Navnet kommer fra den følelse: ideen om, at et ur kan bære et stykke af nogens historie. Nogle stykker er arvet, nogle er fundet, og nogle har ganske enkelt den slags karakter, som moderne ting sjældent får chancen for at udvikle.",
  "founder.p3":
    "Urene her er valgt for ærlighed frem for perfektion. Vi leder efter vintage-stykker med synlig karakter, godt design, mekanisk charme og de små alderstegn, der gør hvert ur individuelt. Ridser, patina, blødgjorte kanter og en skive, der har ændret sig med tiden, er ikke fejl, der skal skjules. De er en del af historien.",
  "founder.p4":
    "Grandpa's Heritage er for mennesker, der vil have noget med nærvær. Ikke et ur, der ser uberørt ud, men et der føles, som om det allerede har levet og er klar til at blive båret ind i sin næste historie.",
  "founder.tagVintage": "Vintage",
  "founder.tagCharacter": "Karakter",
  "founder.tagProvenance": "Proveniens",
  "founder.tag1": "Vintage",
  "founder.tag2": "Karakter",
  "founder.tag3": "Proveniens",
  "curation.eyebrow": "Udvælgelsen",
  "curation.title": "Udvalgt for ærlighed, ikke perfektion",
  "curation.p1":
    "Hvert stykke bliver valgt med det samme spørgsmål i tankerne: har det en grund til at høre til i samlingen? En god kasseform, en interessant skive, et pålideligt quartz-værk, en rem med den rette karakter, et reparationsprojekt, eller bare den stille charme, der får en til at kigge igen.",
  "curation.p2":
    "Vi prøver ikke at slette alder eller skjule stand. I stedet bliver hvert stykke vist med de detaljer, der betyder noget: mærker, slid, patina, kendt servicehistorik, defekter, manglende dele og de små ufuldkommenheder, der fortæller sandheden om stykket.",
  "curation.p3":
    "Målet er at gøre det roligt og gennemsigtigt at købe vintage. Billeder, beskrivelser og standnoter skal give et klart indtryk af, hvad uret er - ikke en poleret version af hvad det engang var.",
  "curation.p4":
    "Når et ur forlader Grandpa's Heritage, forsvinder det ikke fra historien. Arkivet med solgte ure bevares som en rolig oversigt over de ure, der har været igennem samlingen - nyttigt som reference, gennemsigtighed og som et billede af den slags ure, vi udvælger.",
  "curation.tag1": "Ærlighed",
  "curation.tag2": "Arkiv",
  "curation.tag3": "Reference",
  "curation.ctaEyebrow": "Arkiv",
  "curation.ctaTitle": "Se solgte ure her",
  "curation.ctaLink": "Åbn arkiv",
  "instagram.eyebrow": "Instagram",
  "instagram.title": "Se detaljerne i bevægelse",
  "instagram.p1":
    "På Instagram deler jeg de små øjeblikke, som billeder ikke altid fanger: hvordan en urskive skifter i lyset, lyden af et manuelt optrukket værk og de mærker, der giver hvert ur liv.",
  "instagram.p2":
    "Videoerne er et tættere kig på urene, før de bliver til annoncer - roligere, mere taktile og med fokus på de detaljer, der giver vintage-ure deres karakter.",
  "instagram.cta": "Følg med på Instagram",
  "instagram.videoLabel": "Instagram-video med et vintage-ur fra Grandpa's Heritage",
  "collection.title": "Aktive auktioner",
  "collection.infoEyebrow": "Nye fund",
  "collection.infoTitle": "Der kommer løbende flere ure",
  "collection.infoBody":
    "Samlingen ændrer sig, når nye vintage-ure bliver fundet, tjekket, fotograferet og sat på auktion.",
  "collection.infoPoint1": "Auktionerne opdateres, når nye annoncer går live på Tradera.",
  "collection.infoPoint2": "Kig forbi løbende for nye ure og opdateringer fra arkivet.",
  "collection.productSummary": "Vintage-ur på Tradera med billeder, standnoter og live auktionsoplysninger.",
  "collection.empty": "Ingen ure tilgængelige lige nu. Kig forbi snart.",
  "collection.emptyDescription": "Nye auktioner bliver tilføjet, når friske vintage-ure er klar til Tradera.",
  "collection.error": "Vi kunne ikke indlæse samlingen lige nu. Prøv igen.",
  "collection.retry": "Prøv igen",
  "testimonials.title": "Hvad samlere siger",
  "footer.brandTitle": "Grandpa's Heritage",
  "footer.brandDesc":
    "Kuraterede vintage-ure, hvert med en historie værd at fortælle. Vi tror på, at hver ridse, hvert patina-mærke og hver slidt kant er en del af det, der gør et ur værd at eje.",
  "footer.navigate": "Naviger",
  "footer.trust": "Tillid",
  "footer.trustDesc":
    "Kuraterede vintage-ure siden 2024. Hvert ur beskrives ærligt, og køb gennemføres på Tradera.",
  "footer.copyright": "(c) {year} Grandpa's Heritage. Alle auktioner gennemføres på Tradera.",
  "footer.language": "Sprog",
  "detail.back": "Tilbage til samlingen",
  "detail.auctionDetails": "Auktionsoplysninger",
  "detail.viewOnTradera": "Se på Tradera",
  "detail.handoff":
    "Denne visning præsenteres her, men auktionen og betalingen fortsætter på Tradera.",
  "detail.descriptionFallback":
    "Den originale auktionstekst findes på Tradera. Gennemgå billeder, standnoter og de live auktionsoplysninger før du byder.",
  "detail.listingInfoEyebrow": "Fra Tradera-annoncen",
  "detail.listingInfoTitle": "Urets detaljer kort fortalt",
  "detail.originalNotesTitle": "Originale annoncenoter",
  "detail.originalNotesIntro":
    "Disse noter kommer fra den aktive Tradera-auktion og vises med sælgerens originale formulering.",
  "detail.keyNotesTitle": "Vigtige noter",
  "detail.specificationsTitle": "Specifikationer",
  "detail.sellerNotesTitle": "Sælgernoter",
  "detail.specItem": "Varenr.",
  "detail.specAudience": "Målgruppe",
  "detail.specCondition": "Stand",
  "detail.specBrand": "Mærke",
  "detail.specSize": "Kassestørrelse",
  "detail.specPeriod": "Periode",
  "detail.specNotes": "Noter",
  "detail.notFound": "Dette ur kunne ikke findes.",
  "detail.return": "Tilbage til samlingen",
  "detail.errorLoad": "Vi kunne ikke indlæse dette ur lige nu. Prøv igen.",
  "detail.tryAgain": "Prøv igen",
  "detail.browseTradera": "Se på Tradera",
  "sold.archive": "Arkiv",
  "sold.title": "Solgte ure",
  "sold.description":
    "Et arkiv over tidligere solgte vintage-ure fra GrandpasHeritage. Beholdt for gennemsigtighed, reference og for at vise de typer ure, der har været igennem samlingen.",
  "sold.emptyTitle": "Solgte ure kommer snart",
  "sold.emptyDescription":
    "Tidligere salg kan tilføjes her med billede, salgspris og link til den afsluttede Tradera-annonce.",
  "sold.viewListing": "Se opslag",
  "sold.viewPreviousListing": "Se tidligere annonce",
  "sold.ended": "Afsluttet {date}",
  "sold.finalPrice": "Slutpris",
  "sold.askingPrice": "Udbudspris",
  "sold.bids": "{count} bud",
  "sold.back": "Tilbage til solgte ure",
  "sold.notFoundTitle": "Opslaget blev ikke fundet",
  "sold.notFoundDescription": "Det solgte ur findes ikke i arkivet.",
  "sold.itemLabel": "Solgt ur",
  "sold.imageLabel": "Vis billede {index} af {title}",
  "sold.itemNumber": "Varenr.",
  "sold.filterByBrand": "Filtrer efter mærke",
  "sold.allBrands": "Alle mærker",
  "sold.categoryCount": "{count} solgt",
  "sold.chooseBrand": "Vælg et mærke for at se tidligere solgte ure fra arkivet.",
  "sold.genericDescription": "Tidligere solgt vintage-ur fra GrandpasHeritage-arkivet.",
  "sold.showingCount": "Viser {count} af {total} solgte ure",
};

const sv: Dict = {
  "nav.home": "Hem",
  "nav.collection": "Kollektionen",
  "nav.available": "Auktioner",
  "nav.about": "Om",
  "nav.soldWatches": "Sålda klockor",
  "nav.buyWatches": "Sälj klocka",
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
  "philosophy.intro":
    "För att märkena, slitaget och patinan är en del av historien, inte något som ska döljas.",
  "philosophy.p1":
    "En ny klocka berättar tiden för dig. En vintageklocka berättar om tiden - årtionden av den, komprimerade i repor på baksidan, en urtavla som långsamt gått från silver till champagne, ett verk som dragits upp tiotusen morgnar i rad.",
  "philosophy.p2":
    "Vi letar efter klockor som burits ärligt. Inte museiföremål bakom glas, utan dagliga följeslagare som bär bevis på ett verkligt liv. Det är där karaktären bor - i ofullkomligheterna.",
  "philosophy.p3":
    "Varje pjäs i denna samling har valts för att den har något att säga. En härkomst värd att känna till, en design som fortfarande håller, eller helt enkelt en närvaro på handleden som moderna klockor har svårt att återskapa.",
  "founder.eyebrow": "Grandpa's Heritage",
  "founder.title": "Byggt kring klockor med ett liv före oss",
  "founder.p1":
    "Jag skapade Grandpa's Heritage eftersom jag alltid har dragits till föremål som bär minnen. En vintageklocka är aldrig bara ett sätt att visa tiden. Den är något som har burits, reparerats, sparats, glömts, hittats igen och förts vidare från ett kapitel i livet till ett annat.",
  "founder.p2":
    "Namnet kommer från den känslan: idén att en klocka kan bära en bit av någons historia. Vissa föremål är ärvda, vissa är upptäckta, och vissa har helt enkelt den sortens karaktär som moderna saker sällan får chansen att utveckla.",
  "founder.p3":
    "Klockorna här väljs för ärlighet snarare än perfektion. Vi letar efter vintageföremål med synlig karaktär, god design, mekanisk charm och de små ålderstecken som gör varje klocka individuell. Repor, patina, mjuknade kanter och en urtavla som förändrats med tiden är inte fel att dölja. De är en del av historien.",
  "founder.p4":
    "Grandpa's Heritage är för människor som vill ha något med närvaro. Inte en klocka som ser orörd ut, utan en som känns som att den redan har levt och är redo att bäras in i sin nästa historia.",
  "founder.tagVintage": "Vintage",
  "founder.tagCharacter": "Karaktär",
  "founder.tagProvenance": "Härkomst",
  "founder.tag1": "Vintage",
  "founder.tag2": "Karaktär",
  "founder.tag3": "Härkomst",
  "curation.eyebrow": "Urvalet",
  "curation.title": "Valt för ärlighet, inte perfektion",
  "curation.p1":
    "Varje föremål väljs med samma fråga i åtanke: har det en anledning att finnas i samlingen? En bra boettform, en intressant urtavla, ett pålitligt quartzverk, ett band med rätt karaktär, ett reparationsprojekt, eller bara den stilla charm som får en att titta en gång till.",
  "curation.p2":
    "Vi försöker inte sudda ut ålder eller dölja skick. I stället visas varje föremål med detaljerna som betyder något: märken, slitage, patina, känd servicehistorik, defekter, saknade delar och de små ofullkomligheter som berättar sanningen om föremålet.",
  "curation.p3":
    "Målet är att göra vintageköp lugna och transparenta. Bilder, beskrivningar och skicknoter ska ge en tydlig känsla av vad klockan är - inte en polerad version av vad den en gång var.",
  "curation.p4":
    "När en klocka lämnar Grandpa's Heritage försvinner den inte ur berättelsen. Arkivet med sålda klockor sparas som en stillsam översikt över de klockor som har passerat genom kollektionen - användbart för referens, transparens och en känsla för vilken typ av klockor vi väljer.",
  "curation.tag1": "Ärlighet",
  "curation.tag2": "Arkiv",
  "curation.tag3": "Referens",
  "curation.ctaEyebrow": "Arkiv",
  "curation.ctaTitle": "Se sålda klockor här",
  "curation.ctaLink": "Öppna arkiv",
  "instagram.eyebrow": "Instagram",
  "instagram.title": "Se detaljerna i rörelse",
  "instagram.p1":
    "På Instagram delar jag de små ögonblick som stillbilder inte alltid fångar: hur en urtavla skiftar i ljuset, ljudet av ett manuellt uppdraget verk och märkena som ger varje klocka liv.",
  "instagram.p2":
    "Videorna är en närmare titt på klockorna innan de blir annonser - lugnare, mer taktila och med fokus på detaljerna som ger vintageklockor deras karaktär.",
  "instagram.cta": "Följ på Instagram",
  "instagram.videoLabel": "Instagram-video med en vintageklocka från Grandpa's Heritage",
  "collection.title": "Aktiva auktioner",
  "collection.infoEyebrow": "Nya fynd",
  "collection.infoTitle": "Fler klockor läggs till löpande",
  "collection.infoBody":
    "Kollektionen förändras när nya vintageklockor hittas, kontrolleras, fotograferas och läggs ut på auktion.",
  "collection.infoPoint1": "Auktionerna uppdateras när nya annonser går live på Tradera.",
  "collection.infoPoint2": "Titta förbi regelbundet för nya klockor och uppdateringar från arkivet.",
  "collection.productSummary": "Vintageklocka på Tradera med bilder, skicknoteringar och live auktionsdetaljer.",
  "collection.empty": "Inga klockor tillgängliga just nu. Kom tillbaka snart.",
  "collection.emptyDescription": "Nya auktioner läggs till när nya vintageklockor är redo för Tradera.",
  "collection.error": "Vi kunde inte ladda kollektionen just nu. Försök igen.",
  "collection.retry": "Försök igen",
  "testimonials.title": "Vad samlare säger",
  "footer.brandTitle": "Grandpa's Heritage",
  "footer.brandDesc":
    "Kurerade vintageklockor, var och en med en historia värd att berätta. Vi tror att varje repa, varje patinamärke och varje sliten kant är en del av det som gör en klocka värd att äga.",
  "footer.navigate": "Navigera",
  "footer.trust": "Förtroende",
  "footer.trustDesc":
    "Kurerade vintageklockor sedan 2024. Varje klocka beskrivs ärligt, och köp slutförs på Tradera.",
  "footer.copyright": "(c) {year} Grandpa's Heritage. Alla auktioner slutförs på Tradera.",
  "footer.language": "Språk",
  "detail.back": "Tillbaka till kollektionen",
  "detail.auctionDetails": "Auktionsdetaljer",
  "detail.viewOnTradera": "Visa på Tradera",
  "detail.handoff":
    "Den här visningen presenteras här, men auktionen och köpet fortsätter på Tradera.",
  "detail.descriptionFallback":
    "Den ursprungliga auktionstexten finns på Tradera. Granska bilder, skicknoteringar och aktuella auktionsdetaljer innan du lägger bud.",
  "detail.listingInfoEyebrow": "Från Tradera-annonsen",
  "detail.listingInfoTitle": "Klockans detaljer i korthet",
  "detail.originalNotesTitle": "Originala annonsnoter",
  "detail.originalNotesIntro":
    "Dessa noter kommer från den aktiva Tradera-auktionen och visas med säljarens ursprungliga formulering.",
  "detail.keyNotesTitle": "Viktiga noter",
  "detail.specificationsTitle": "Specifikationer",
  "detail.sellerNotesTitle": "Säljarnoter",
  "detail.specItem": "Varunr.",
  "detail.specAudience": "Målgrupp",
  "detail.specCondition": "Skick",
  "detail.specBrand": "Märke",
  "detail.specSize": "Boettstorlek",
  "detail.specPeriod": "Period",
  "detail.specNotes": "Noter",
  "detail.notFound": "Den här klockan kunde inte hittas.",
  "detail.return": "Tillbaka till kollektionen",
  "detail.errorLoad": "Vi kunde inte ladda den här klockan just nu. Försök igen.",
  "detail.tryAgain": "Försök igen",
  "detail.browseTradera": "Bläddra på Tradera",
  "sold.archive": "Arkiv",
  "sold.title": "Sålda klockor",
  "sold.description":
    "Ett arkiv över tidigare sålda vintageklockor från GrandpasHeritage. Sparat för transparens, referens och för att visa vilka typer av klockor som har passerat genom kollektionen.",
  "sold.emptyTitle": "Sålda klockor kommer snart",
  "sold.emptyDescription":
    "Tidigare försäljningar kan läggas till här med bild, slutpris och länk till den avslutade Tradera-annonsen.",
  "sold.viewListing": "Visa inlägg",
  "sold.viewPreviousListing": "Visa tidigare annons",
  "sold.ended": "Avslutad {date}",
  "sold.finalPrice": "Slutpris",
  "sold.askingPrice": "Utropspris",
  "sold.bids": "{count} bud",
  "sold.back": "Tillbaka till sålda klockor",
  "sold.notFoundTitle": "Inlägget hittades inte",
  "sold.notFoundDescription": "Den sålda klockan finns inte i arkivet.",
  "sold.itemLabel": "Såld klocka",
  "sold.imageLabel": "Visa bild {index} av {title}",
  "sold.itemNumber": "Varunr.",
  "sold.filterByBrand": "Filtrera efter märke",
  "sold.allBrands": "Alla märken",
  "sold.categoryCount": "{count} sålda",
  "sold.chooseBrand": "Välj ett märke för att se tidigare sålda klockor från arkivet.",
  "sold.genericDescription": "Tidigare såld vintageklocka från GrandpasHeritage-arkivet.",
  "sold.showingCount": "Visar {count} av {total} sålda klockor",
};

const no: Dict = {
  "nav.home": "Hjem",
  "nav.collection": "Kolleksjonen",
  "nav.available": "Auksjoner",
  "nav.about": "Om",
  "nav.soldWatches": "Solgte klokker",
  "nav.buyWatches": "Selg klokke",
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
  "philosophy.intro":
    "Fordi merkene, slitasjen og patinaen er en del av historien, ikke noe som skal skjules.",
  "philosophy.p1":
    "En ny klokke forteller deg klokkeslettet. En vintageklokke forteller deg om tiden - tiår av den, komprimert i riper på baksiden, en skive som sakte har gått fra sølv til champagne, et verk som er trukket opp ti tusen morgener på rad.",
  "philosophy.p2":
    "Vi leter etter klokker som har blitt brukt ærlig. Ikke museumsstykker bak glass, men daglige følgesvenner som bærer bevis på et virkelig liv. Det er der karakteren bor - i ufullkommenhetene.",
  "philosophy.p3":
    "Hver del i denne samlingen er valgt fordi den har noe å si. En opprinnelse verdt å kjenne, et design som fortsatt holder, eller bare en tilstedeværelse på håndleddet som moderne klokker sliter med å gjenskape.",
  "founder.eyebrow": "Grandpa's Heritage",
  "founder.title": "Bygget rundt klokker med et liv før oss",
  "founder.p1":
    "Jeg skapte Grandpa's Heritage fordi jeg alltid har vært tiltrukket av gjenstander som bærer minner. En vintageklokke er aldri bare en måte å vise tiden på. Den er noe som har blitt brukt, reparert, tatt vare på, glemt, funnet igjen og gitt videre fra ett kapittel i livet til et annet.",
  "founder.p2":
    "Navnet kommer fra den følelsen: ideen om at en klokke kan holde på en bit av noens historie. Noen deler er arvet, noen er oppdaget, og noen har ganske enkelt den typen karakter som moderne ting sjelden får sjansen til å utvikle.",
  "founder.p3":
    "Klokkene her er valgt for ærlighet fremfor perfeksjon. Vi ser etter vintageklokker med synlig karakter, god design, mekanisk sjarm og de små alderstegnene som gjør hver enkelt individuell. Riper, patina, mykere kanter og en urskive som har endret seg med tiden, er ikke feil som skal skjules. De er en del av historien.",
  "founder.p4":
    "Grandpa's Heritage er for mennesker som vil ha noe med nærvær. Ikke en klokke som ser urørt ut, men en som føles som om den allerede har levd og er klar til å bæres inn i sin neste historie.",
  "founder.tagVintage": "Vintage",
  "founder.tagCharacter": "Karakter",
  "founder.tagProvenance": "Opprinnelse",
  "founder.tag1": "Vintage",
  "founder.tag2": "Karakter",
  "founder.tag3": "Opprinnelse",
  "curation.eyebrow": "Utvalget",
  "curation.title": "Valgt for ærlighet, ikke perfeksjon",
  "curation.p1":
    "Hvert objekt velges med det samme spørsmålet i tankene: har det en grunn til å høre hjemme i samlingen? En god kasseform, en interessant skive, et pålitelig quartzverk, en rem med riktig karakter, et reparasjonsprosjekt, eller bare den stille sjarmen som får deg til å se en gang til.",
  "curation.p2":
    "Vi prøver ikke å slette alder eller skjule tilstand. I stedet vises hvert objekt med detaljene som betyr noe: merker, slitasje, patina, kjent servicehistorikk, defekter, manglende deler og de små ufullkommenhetene som forteller sannheten om objektet.",
  "curation.p3":
    "Målet er å gjøre vintagekjøp rolige og transparente. Bilder, beskrivelser og tilstandsnotater skal gi en tydelig følelse av hva klokken er - ikke en polert versjon av hva den en gang var.",
  "curation.p4":
    "Når en klokke forlater Grandpa's Heritage, forsvinner den ikke fra historien. Arkivet med solgte klokker bevares som en rolig oversikt over klokkene som har vært innom kolleksjonen - nyttig som referanse, åpenhet og som et bilde av hva slags klokker vi velger.",
  "curation.tag1": "Ærlighet",
  "curation.tag2": "Arkiv",
  "curation.tag3": "Referanse",
  "curation.ctaEyebrow": "Arkiv",
  "curation.ctaTitle": "Se solgte klokker her",
  "curation.ctaLink": "Åpne arkiv",
  "instagram.eyebrow": "Instagram",
  "instagram.title": "Se detaljene i bevegelse",
  "instagram.p1":
    "På Instagram deler jeg de små øyeblikkene som stillbilder ikke alltid fanger: hvordan en urskive skifter i lyset, lyden av et manuelt opptrekt verk og merkene som gir hver klokke liv.",
  "instagram.p2":
    "Videoene er en nærmere titt på klokkene før de blir annonser - roligere, mer taktile og med fokus på detaljene som gir vintageklokker karakter.",
  "instagram.cta": "Følg på Instagram",
  "instagram.videoLabel": "Instagram-video med en vintageklokke fra Grandpa's Heritage",
  "collection.title": "Aktive auksjoner",
  "collection.infoEyebrow": "Nye funn",
  "collection.infoTitle": "Flere klokker legges til fortløpende",
  "collection.infoBody":
    "Kolleksjonen endrer seg når nye vintageklokker blir funnet, sjekket, fotografert og lagt ut på auksjon.",
  "collection.infoPoint1": "Auksjonene oppdateres når nye annonser går live på Tradera.",
  "collection.infoPoint2": "Kom innom jevnlig for nye klokker og oppdateringer fra arkivet.",
  "collection.productSummary": "Vintageklokke på Tradera med bilder, tilstandsnotater og live auksjonsdetaljer.",
  "collection.empty": "Ingen klokker tilgjengelig akkurat nå. Kom tilbake snart.",
  "collection.emptyDescription": "Nye auksjoner legges til når nye vintageklokker er klare for Tradera.",
  "collection.error": "Vi kunne ikke laste kolleksjonen akkurat nå. Prøv igjen.",
  "collection.retry": "Prøv igjen",
  "testimonials.title": "Hva samlere sier",
  "footer.brandTitle": "Grandpa's Heritage",
  "footer.brandDesc":
    "Kuraterte vintageklokker, hver med en historie verdt å fortelle. Vi tror at hver ripe, hvert patinamerke og hver slitt kant er en del av det som gjør en klokke verdt å eie.",
  "footer.navigate": "Naviger",
  "footer.trust": "Tillit",
  "footer.trustDesc":
    "Kuraterte vintageklokker siden 2024. Hver klokke beskrives ærlig, og kjøp fullføres på Tradera.",
  "footer.copyright": "(c) {year} Grandpa's Heritage. Alle auktioner fullføres på Tradera.",
  "footer.language": "Språk",
  "detail.back": "Tilbake til kolleksjonen",
  "detail.auctionDetails": "Auksjonsdetaljer",
  "detail.viewOnTradera": "Se på Tradera",
  "detail.handoff":
    "Denne visningen presenteres her, men auksjonen og kjøpet fortsetter på Tradera.",
  "detail.descriptionFallback":
    "Den opprinnelige auksjonsteksten finnes på Tradera. Se gjennom bilder, tilstandsnotater og live auksjonsdetaljer før du byr.",
  "detail.listingInfoEyebrow": "Fra Tradera-annonsen",
  "detail.listingInfoTitle": "Klokkens detaljer kort fortalt",
  "detail.originalNotesTitle": "Originale annonsenotater",
  "detail.originalNotesIntro":
    "Disse notatene kommer fra den aktive Tradera-auksjonen og vises med selgerens opprinnelige formulering.",
  "detail.keyNotesTitle": "Viktige notater",
  "detail.specificationsTitle": "Spesifikasjoner",
  "detail.sellerNotesTitle": "Selgernotater",
  "detail.specItem": "Varenr.",
  "detail.specAudience": "Målgruppe",
  "detail.specCondition": "Tilstand",
  "detail.specBrand": "Merke",
  "detail.specSize": "Kassestørrelse",
  "detail.specPeriod": "Periode",
  "detail.specNotes": "Notater",
  "detail.notFound": "Denne klokken kunne ikke finnes.",
  "detail.return": "Tilbake til kolleksjonen",
  "detail.errorLoad": "Vi kunne ikke laste denne klokken akkurat nå. Prøv igjen.",
  "detail.tryAgain": "Prøv igjen",
  "detail.browseTradera": "Bla på Tradera",
  "sold.archive": "Arkiv",
  "sold.title": "Solgte klokker",
  "sold.description":
    "Et arkiv over tidligere solgte vintageklokker fra GrandpasHeritage. Beholdt for åpenhet, referanse og for å vise hvilke typer klokker som har vært innom kolleksjonen.",
  "sold.emptyTitle": "Solgte klokker kommer snart",
  "sold.emptyDescription":
    "Tidligere salg kan legges til her med bilde, salgspris og lenke til den avsluttede Tradera-annonsen.",
  "sold.viewListing": "Se oppføring",
  "sold.viewPreviousListing": "Se tidligere annonse",
  "sold.ended": "Avsluttet {date}",
  "sold.finalPrice": "Sluttpris",
  "sold.askingPrice": "Prisantydning",
  "sold.bids": "{count} bud",
  "sold.back": "Tilbake til solgte klokker",
  "sold.notFoundTitle": "Oppføringen ble ikke funnet",
  "sold.notFoundDescription": "Den solgte klokken finnes ikke i arkivet.",
  "sold.itemLabel": "Solgt klokke",
  "sold.imageLabel": "Vis bilde {index} av {title}",
  "sold.itemNumber": "Varenr.",
  "sold.filterByBrand": "Filtrer etter merke",
  "sold.allBrands": "Alle merker",
  "sold.categoryCount": "{count} solgt",
  "sold.chooseBrand": "Velg et merke for å se tidligere solgte klokker fra arkivet.",
  "sold.genericDescription": "Tidligere solgt vintageklokke fra GrandpasHeritage-arkivet.",
  "sold.showingCount": "Viser {count} av {total} solgte klokker",
};

export const translations: Record<Language, Dict> = { en, da, sv, no };
