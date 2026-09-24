import { useCallback } from "react";
import { useLanguage } from "./LanguageProvider";
import { phraseTranslations, translateText } from "./localizedText";
import type { Language } from "./translations";
const terms: Record<string, Record<Language,string>> = {
  "Gold-Tone Square Watch": {
    "en": "Gold-tone square watch",
    "da": "Firkantet guldfarvet ur",
    "sv": "Fyrkantig guldfärgad klocka",
    "no": "Firkantet gullfarget klokke"
  },
  "Collection of 5 Vintage Soviet / USSR Pocket Watches": {
    "en": "Collection of 5 vintage Soviet / USSR pocket watches",
    "da": "Samling med 5 vintage sovjetiske lommeure",
    "sv": "Samling med 5 sovjetiska vintagefickur",
    "no": "Samling med 5 sovjetiske vintagelommeur"
  },
  "Vintage Japanese Day-Date Watch": {
    "en": "Vintage Japanese day-date watch",
    "da": "Japansk vintageur med dag og dato",
    "sv": "Japansk vintageklocka med dag och datum",
    "no": "Japansk vintageklokke med dag og dato"
  },
  "Swiss Made Mechanical Watch": {
    "en": "Swiss-made mechanical watch",
    "da": "Schweizisk mekanisk ur",
    "sv": "Schweiziskt mekaniskt ur",
    "no": "Sveitsisk mekanisk klokke"
  },
  "Two-Tone": {
    "en": "Two-tone",
    "da": "Tofarvet",
    "sv": "Tvåfärgad",
    "no": "Tofarget"
  },
  "Blue Dial": {
    "en": "Blue dial",
    "da": "Blå urskive",
    "sv": "Blå urtavla",
    "no": "Blå urskive"
  },
  "Herre ur": {
    "en": "Men's watch",
    "da": "Herreur",
    "sv": "Herrur",
    "no": "Herreklokke"
  },
  "Herreur": {
    "en": "Men's watch",
    "da": "Herreur",
    "sv": "Herrur",
    "no": "Herreklokke"
  },
  "Dameur": {
    "en": "Women's watch",
    "da": "Dameur",
    "sv": "Damur",
    "no": "Dameklokke"
  },
  "Men's Watch": {
    "en": "Men's watch",
    "da": "Herreur",
    "sv": "Herrur",
    "no": "Herreklokke"
  },
  "armbåndsure": {
    "en": "wristwatches",
    "da": "armbåndsure",
    "sv": "armbandsur",
    "no": "armbåndsur"
  },
  "armbandsur": {
    "en": "wristwatch",
    "da": "armbåndsur",
    "sv": "armbandsur",
    "no": "armbåndsur"
  },
  "lommeure": {
    "en": "pocket watches",
    "da": "lommeure",
    "sv": "fickur",
    "no": "lommeur"
  },
  "lommeur": {
    "en": "pocket watch",
    "da": "lommeur",
    "sv": "fickur",
    "no": "lommeur"
  },
  "dykkerur": {
    "en": "dive watch",
    "da": "dykkerur",
    "sv": "dykarur",
    "no": "dykkerklokke"
  },
  "digitalur": {
    "en": "digital watch",
    "da": "digitalur",
    "sv": "digitalur",
    "no": "digitalklokke"
  },
  "reservedele": {
    "en": "spare parts",
    "da": "reservedele",
    "sv": "reservdelar",
    "no": "reservedeler"
  },
  "rem og": {
    "en": "strap and",
    "da": "rem og",
    "sv": "band och",
    "no": "rem og"
  },
  "Rem &": {
    "en": "Strap &",
    "da": "Rem &",
    "sv": "Band &",
    "no": "Rem &"
  },
  "med blå urskive": {
    "en": "with blue dial",
    "da": "med blå urskive",
    "sv": "med blå urtavla",
    "no": "med blå urskive"
  },
  "med dato": {
    "en": "with date",
    "da": "med dato",
    "sv": "med datum",
    "no": "med dato"
  },
  "Grøn skive": {
    "en": "Green dial",
    "da": "Grøn skive",
    "sv": "Grön urtavla",
    "no": "Grønn urskive"
  },
  "Safirglas": {
    "en": "Sapphire crystal",
    "da": "Safirglas",
    "sv": "Safirglas",
    "no": "Safirglass"
  },
  "sælges samlet": {
    "en": "sold together",
    "da": "sælges samlet",
    "sv": "säljs tillsammans",
    "no": "selges samlet"
  },
  "solgt samlet": {
    "en": "sold together",
    "da": "solgt samlet",
    "sv": "sålda tillsammans",
    "no": "solgt samlet"
  },
  "med lokomotivmotiv": {
    "en": "with locomotive motif",
    "da": "med lokomotivmotiv",
    "sv": "med lokmotiv",
    "no": "med lokomotivmotiv"
  },
  "samling vintage ure": {
    "en": "collection of vintage watches",
    "da": "samling vintageure",
    "sv": "samling vintageklockor",
    "no": "samling vintageklokker"
  },
  "vintage ure": {
    "en": "vintage watches",
    "da": "vintageure",
    "sv": "vintageklockor",
    "no": "vintageklokker"
  },
  "Samling": {
    "en": "Collection",
    "da": "Samling",
    "sv": "Samling",
    "no": "Samling"
  },
  "Fire": {
    "en": "Four",
    "da": "Fire",
    "sv": "Fyra",
    "no": "Fire"
  },
  "stk.": {
    "en": "pieces",
    "da": "stk.",
    "sv": "st.",
    "no": "stk."
  },
  "m.fl.": {
    "en": "and others",
    "da": "m.fl.",
    "sv": "m.fl.",
    "no": "m.fl."
  },
  "med kæde": {
    "en": "with chain",
    "da": "med kæde",
    "sv": "med kedja",
    "no": "med kjede"
  },
  "sølv": {
    "en": "silver",
    "da": "sølv",
    "sv": "silver",
    "no": "sølv"
  },
  "antikke": {
    "en": "antique",
    "da": "antikke",
    "sv": "antika",
    "no": "antikke"
  },
  "før": {
    "en": "before",
    "da": "før",
    "sv": "före",
    "no": "før"
  },
  "ur": {
    "en": "watch",
    "da": "ur",
    "sv": "klocka",
    "no": "klokke"
  },
  "ure": {
    "en": "watches",
    "da": "ure",
    "sv": "klockor",
    "no": "klokker"
  },
  "Automatic": {
    "en": "Automatic",
    "da": "Automatisk",
    "sv": "Automatisk",
    "no": "Automatisk"
  },
  "Automatisk": {
    "en": "Automatic",
    "da": "Automatisk",
    "sv": "Automatisk",
    "no": "Automatisk"
  },
  "Jewels": {
    "en": "Jewels",
    "da": "Sten",
    "sv": "Stenar",
    "no": "Steiner"
  },
  "Day/Date": {
    "en": "Day/Date",
    "da": "Dag/dato",
    "sv": "Dag/datum",
    "no": "Dag/dato"
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
  }
};
const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const expression = new RegExp("(?<![\\p{L}])(" + Object.keys(terms).sort((a,b)=>b.length-a.length).map(escape).join("|") + ")(?![\\p{L}])", "giu");
const keys = Object.keys(terms);
export function translateContent(value: string, lang: Language): string {
 return value.split(/\r?\n/).map(line => {
 if (/^\s*•\s*/.test(line)) return line.match(/^\s*•\s*/)![0] + translateContent(line.replace(/^\s*•\s*/, ""), lang);
 const key = line.trim().replace(/\s+/g, " ");
 if (phraseTranslations[key]) return line.match(/^\s*/)?.[0] + translateText(key,lang) + line.match(/\s*$/)?.[0];
 const colon = line.indexOf(":");
 if(colon >= 0) return translateContent(line.slice(0,colon),lang) + ":" + translateContent(line.slice(colon+1),lang);
 return line.replace(expression, part => terms[keys.find(k=>k.toLowerCase()===part.toLowerCase())!][lang]);
 }).join("\n");
}
export function useLocalizedContent() { const {lang}=useLanguage(); return useCallback((value: string)=>translateContent(value,lang),[lang]); }

export function formatArchiveDate(value: string, lang: Language) {
 const months = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
 const match=value.match(/^(\d{1,2})\.?\s+([a-zæøå]+)\.?\s+(\d{1,2}):(\d{2})$/i);
 if (!match) return value;
 const month=months.indexOf(match[2].toLowerCase());
 if(month<0) return value;
 return new Intl.DateTimeFormat(lang==="no"?"nb-NO":lang,{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:false,timeZone:"UTC"}).format(new Date(Date.UTC(2000,month,Number(match[1]),Number(match[3]),Number(match[4]))));
}
