import hMoserImage1 from "@/assets/sold-watches/h-moser-14k-01.png";
import hMoserImage2 from "@/assets/sold-watches/h-moser-14k-02.png";
import hMoserImage3 from "@/assets/sold-watches/h-moser-14k-03.png";
import hMoserImage4 from "@/assets/sold-watches/h-moser-14k-04.png";
import hMoserImage5 from "@/assets/sold-watches/h-moser-14k-05.png";
import hMoserImage6 from "@/assets/sold-watches/h-moser-14k-06.png";
import hMoserImage7 from "@/assets/sold-watches/h-moser-14k-07.png";
import hMoserImage8 from "@/assets/sold-watches/h-moser-14k-08.png";
import hMoserImage9 from "@/assets/sold-watches/h-moser-14k-09.png";
import omegaSeamasterImage1 from "@/assets/sold-watches/omega-seamaster-deville-01.png";
import omegaSeamasterImage2 from "@/assets/sold-watches/omega-seamaster-deville-02.png";
import cymaPocketImage1 from "@/assets/sold-watches/cyma-pocket-990-01.png";
import cymaPocketImage2 from "@/assets/sold-watches/cyma-pocket-990-02.png";
import cymaPocketImage3 from "@/assets/sold-watches/cyma-pocket-990-03.png";
import cymaPocketImage4 from "@/assets/sold-watches/cyma-pocket-990-04.png";
import cymaPocketImage5 from "@/assets/sold-watches/cyma-pocket-990-05.png";
import cymaPocketImage6 from "@/assets/sold-watches/cyma-pocket-990-06.png";
import seikoActusImage1 from "@/assets/sold-watches/seiko-5-actus-7019-7350-01.png";
import seikoActusImage2 from "@/assets/sold-watches/seiko-5-actus-7019-7350-02.png";
import seikoActusImage3 from "@/assets/sold-watches/seiko-5-actus-7019-7350-03.png";
import seikoActusImage4 from "@/assets/sold-watches/seiko-5-actus-7019-7350-04.png";
import seikoActusImage5 from "@/assets/sold-watches/seiko-5-actus-7019-7350-05.png";
import fiveSilverPocketWatchesImage1 from "@/assets/sold-watches/five-antique-silver-pocket-watches-01.png";
import fiveSilverPocketWatchesImage2 from "@/assets/sold-watches/five-antique-silver-pocket-watches-02.png";
import radoFlorenceImage1 from "@/assets/sold-watches/rado-florence-quartz-01.png";
import radoFlorenceImage2 from "@/assets/sold-watches/rado-florence-quartz-02.png";
import radoFlorenceImage3 from "@/assets/sold-watches/rado-florence-quartz-03.png";
import radoFlorenceImage4 from "@/assets/sold-watches/rado-florence-quartz-04.png";
import omegaPocketSilverImage1 from "@/assets/sold-watches/omega-pocket-silver-0800-01.png";
import omegaPocketSilverImage2 from "@/assets/sold-watches/omega-pocket-silver-0800-02.png";
import omegaPocketSilverImage3 from "@/assets/sold-watches/omega-pocket-silver-0800-03.png";
import omegaPocketSilverImage4 from "@/assets/sold-watches/omega-pocket-silver-0800-04.png";

export type SoldWatch = {
  id: string;
  title: string;
  imageUrl: string;
  images?: string[];
  soldPrice: number;
  currency: string;
  priceLabel?: string;
  soldDate?: string;
  numberOfBids?: number;
  shortDescription?: string;
  details?: string[];
  traderaUrl?: string;
};

export const soldWatches: SoldWatch[] = [
  {
    id: "seiko-5-actus-7019-7350-groen-skive",
    title: "Vintage Seiko 5 Actus 7019-7350 - Grøn skive",
    imageUrl: seikoActusImage1,
    images: [
      seikoActusImage1,
      seikoActusImage2,
      seikoActusImage3,
      seikoActusImage4,
      seikoActusImage5,
    ],
    soldPrice: 1125,
    currency: "DKK",
    soldDate: "26. juni 18:31",
    numberOfBids: 21,
    shortDescription:
      "Vintage Seiko 5 Actus med grøn skive, sort læderrem og automatisk Seiko 7019-værk.",
    details: [
      "Diameter: 37 mm",
      "Reference: 7019-7350",
      "Urværk: Seiko 7019, automatisk, 21 jewels",
      "Grøn urskive og sort læderrem",
      "God brugt stand med mindre tegn på brug",
      "Seiko · Herre · 1971-1980",
    ],
  },
  {
    id: "vintage-omega-lommeur-soelv-0800",
    title: "Vintage Omega lommeur (sølv 0.800)",
    imageUrl: omegaPocketSilverImage1,
    images: [
      omegaPocketSilverImage1,
      omegaPocketSilverImage2,
      omegaPocketSilverImage3,
      omegaPocketSilverImage4,
    ],
    soldPrice: 589,
    currency: "DKK",
    soldDate: "22. mar. 13:59",
    numberOfBids: 33,
    shortDescription:
      "Vintage Omega lommeur i 0.800 sølv. Swiss Made, okay brugt stand og synlige tegn på slid.",
    details: [
      "Diameter: 48 mm",
      "Diameter inkl. krone: 59 mm",
      "Mekanisk ur, virker fint når det trækkes op",
      "Okay brugt stand med brugsspor",
      "Omega · Swiss Made · før 1930",
      "Sølv 0.800",
    ],
  },
  {
    id: "5-antikke-lommeure-0800-soelv-samlet",
    title: "5 antikke lommeure i 0.800 sølv sælges samlet",
    imageUrl: fiveSilverPocketWatchesImage1,
    images: [fiveSilverPocketWatchesImage1, fiveSilverPocketWatchesImage2],
    soldPrice: 1026,
    currency: "DKK",
    soldDate: "20. mar. 18:28",
    numberOfBids: 3,
    shortDescription:
      "Samling med 5 ældre mekaniske lommeure i 0.800 sølv, solgt samlet i brugt stand.",
    details: [
      "5 stk. ældre mekaniske lommeure",
      "Alle ure er stemplet 0.800 sølv",
      "Okay brugt stand med synlige tegn på slid",
      "Ridser og almindelige brugsspor",
      "Alle ure virker som de skal og blev solgt som de er",
    ],
  },
  {
    id: "cyma-lommeur-15-jewels-adjusted-cal-990",
    title: "CYMA lommeur 15 jewels adjusted cal. 990 med kæde",
    imageUrl: cymaPocketImage1,
    images: [
      cymaPocketImage1,
      cymaPocketImage2,
      cymaPocketImage3,
      cymaPocketImage4,
      cymaPocketImage5,
      cymaPocketImage6,
    ],
    soldPrice: 542,
    currency: "DKK",
    priceLabel: "Udbudspris",
    soldDate: "16. maj 18:03",
    numberOfBids: 1,
    shortDescription:
      "CYMA lommeur med kæde. Swiss Made, okay brugt stand og synlige tegn på slid.",
    details: [
      "Diameter: 51 mm",
      "Diameter inkl. krone: 63 mm",
      "Mekanisk ur, virker fint når det trækkes op",
      "Okay brugt stand med brugsspor",
      "CYMA · Swiss Made · 1930-1940",
      "15 jewels adjusted cal. 990",
    ],
  },
  {
    id: "h-moser-cie-14k-dameur",
    title: "H. Moser & Cie 14k Dameur",
    imageUrl: hMoserImage1,
    images: [
      hMoserImage1,
      hMoserImage2,
      hMoserImage3,
      hMoserImage4,
      hMoserImage5,
      hMoserImage6,
      hMoserImage7,
      hMoserImage8,
      hMoserImage9,
    ],
    soldPrice: 5304,
    currency: "DKK",
    soldDate: "14. mar. 00:25",
    numberOfBids: 1,
    shortDescription:
      "14k dameur fra H. Moser & Cie. Swiss Made, god brugt stand og mindre tegn på brug.",
    details: [
      "Diameter: 26 mm",
      "Diameter inkl. krone: 28 mm",
      "Mekanisk ur, virker fint når det trækkes op",
      "God brugt stand med brugsspor",
      "H. Moser & Cie. · Swiss Made · før 1930",
    ],
  },
  {
    id: "rado-florence-swiss-made-safirglas-quartz",
    title: "Rado Florence – Swiss Made – Safirglas – Quartz",
    imageUrl: radoFlorenceImage1,
    images: [
      radoFlorenceImage1,
      radoFlorenceImage2,
      radoFlorenceImage3,
      radoFlorenceImage4,
    ],
    soldPrice: 481,
    currency: "DKK",
    soldDate: "14. mar. 00:23",
    numberOfBids: 1,
    shortDescription:
      "Rado Florence quartz med safirglas. Swiss Made, unisex og okay brugt stand.",
    details: [
      "Diameter: 23 mm",
      "Diameter inkl. krone: 25 mm",
      "Quartz ur med nyt batteri",
      "Okay brugt stand med synlige tegn på slid",
      "Rado · Swiss Made · Unisex",
      "Safirglas",
    ],
  },
  {
    id: "omega-seamaster-de-ville-dameur",
    title: "Omega Seamaster De Ville Dameur",
    imageUrl: omegaSeamasterImage1,
    images: [omegaSeamasterImage1, omegaSeamasterImage2],
    soldPrice: 715,
    currency: "DKK",
    soldDate: "14. mar. 00:21",
    numberOfBids: 45,
    shortDescription:
      "Omega Seamaster De Ville dameur. Swiss Made, okay brugt stand og synlige tegn på slid.",
    details: [
      "Diameter: 22 mm",
      "Diameter inkl. krone: 20 mm",
      "Mekanisk ur, virker fint når det trækkes op",
      "Okay brugt stand med brugsspor",
      "Omega · Swiss Made · 1961-1970",
    ],
  },
];
