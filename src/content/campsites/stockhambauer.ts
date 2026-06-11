import type { CampsiteConfig } from "../types";

const IMG = "/campsites/stockhambauer";

const stockhambauer: CampsiteConfig = {
  name: "Wintercamping Stockham",
  shortName: "Stockham",
  slug: "stockhambauer",
  ort: "Kleinarl",
  region: "Salzburg",
  regionLong: "Kleinarl · Salzburger Sportwelt · Ski Amadé",

  theme: "alpin",
  heroVariant: "left",

  brandKind: "Camping am BIO-Bauernhof",

  claim: "Dein Wohnwagen im Schnee — Ski-in direkt zum Lift",
  claimEmphasis: "direkt zum Lift",
  intro:
    "Stell deinen Wohnwagen den ganzen Winter auf unseren BIO-Bauernhof in Kleinarl: morgens mit den Skiern über die Straße zum Lift, abends in die hofeigene Sauna — schneesicher von Dezember bis April.",

  statement: {
    text: "Bei uns steigst du direkt vom Stellplatz auf die Ski und querst nur die verschneite Straße zum Lift der Bergbahnen Kleinarl.",
    emphasis: "direkt vom Stellplatz",
  },

  pillars: [
    {
      title: "Mit Ski direkt zum Lift",
      text: "Vom Platz querst du nur die Straße zum Lift der Bergbahnen Kleinarl — und stehst mitten in der Skiwelt Ski Amadé mit über 270 Liften.",
      image: { src: `${IMG}/ski-amade.webp`, alt: "Frisch präparierte Piste in Ski Amadé bei Kleinarl" },
    },
    {
      title: "Direkt an der Langlaufloipe",
      text: "Der Campingplatz liegt unmittelbar an der Loipe — eine von acht Langlaufloipen, die bis zum Naturparadies Jägersee führen. Meist über 150 cm Schnee im Tal.",
      image: { src: `${IMG}/winter-loipe.webp`, alt: "Verschneite Winterlandschaft an der Langlaufloipe in Kleinarl" },
    },
    {
      title: "Echter BIO-Bauernhof",
      text: "Der Stockhamhof ist ein mit 4 Blumen ausgezeichneter Bio-Bauernhof: täglich frische Bio-Heumilch, hofeigene Bioprodukte und Tiere zum Anfassen.",
      image: { src: `${IMG}/bio-bauernhof.webp`, alt: "Bäuerin mit Kuh im Stall des BIO-Bauernhofs Stockham" },
    },
  ],

  usps: [
    "25 Saison-Stellplätze",
    "Ski-in zum Lift",
    "An 8 Langlaufloipen",
    "Beheizter Skiraum",
    "Sauna & Ruheraum",
    "Gratis WLAN am Hof",
  ],

  trust: {
    heading: "Warum Gäste seit 20 Jahren wiederkommen",
    headingEmphasis: "20 Jahren",
    intro:
      "Viele Stammgäste lassen ihren Wohnwagen Winter für Winter bei uns stehen — manche schon über zwanzig Jahre. Sie schätzen die gemütliche Atmosphäre, die Schneesicherheit und die kurzen Wege zur Piste.",
  },

  awards: [
    { label: "4 Blumen · Urlaub am Bauernhof" },
    { label: "BIO-zertifizierter Bauernhof" },
  ],

  saison: { von: "Dezember", bis: "April" },

  hero: {
    aerial: { src: `${IMG}/hero-winter-stockhamhof.webp`, alt: "Tief verschneiter Stockhamhof in Kleinarl unter blauem Winterhimmel" },
  },

  camping: {
    heading: "Wintercamping am Stockhamhof",
    intro:
      "25 Saison-Stellplätze mit Strom, direkt an der Loipe und nur eine Straße vom Lift entfernt — dazu beheizter Skiraum, hofeigene Sauna und Gratis-WLAN am ganzen Hof.",
    features: [
      {
        title: "Ski-in direkt zum Lift",
        text: "Von deinem Stellplatz fährst du mit den Skiern über die meist verschneite Straße direkt zum Lift der Bergbahnen Kleinarl und in die Skiwelt Ski Amadé.",
        image: { src: `${IMG}/wintercamping-skiin.webp`, alt: "Skipiste mit Blick auf das verschneite Kleinarl beim Camping Stockham" },
      },
      {
        title: "Sommercamping seit 2023",
        text: "Seit 2023 kannst du auch im Sommer bei uns campen: 5 Stellplätze mit Strom, Naturbadeteich, Sauna und alle Annehmlichkeiten des Hofs.",
        image: { src: `${IMG}/sommercamping-hof.webp`, alt: "Der Stockhamhof mit Wiesen und Spielplatz im Sommer" },
      },
    ],
  },

  anreise: {
    heading: "Über die Tauernautobahn nach Kleinarl",
    modes: [
      {
        title: "Mit dem Auto",
        text: "A10 Tauernautobahn bis Ausfahrt 66 Flachau, dann rund 15 km auf der Landstraße Richtung Wagrain–Kleinarl. Die Straße wird regelmäßig vom Schneepflug geräumt.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächster Bahnhof ist Bischofshofen (rund 30 Min Fahrt); von dort mit Bus oder Taxi weiter nach Kleinarl.",
      },
      {
        title: "Mit dem Wanderbus",
        text: "Der Wanderbus bringt dich für € 1 pro Strecke durch die ganze Salzburger Sportwelt — inkl. Großarl, Hüttschlag und Obertauern.",
      },
    ],
  },

  galerie: {
    heading: "Vier Jahreszeiten am Stockhamhof",
    headingEmphasis: "Vier Jahreszeiten",
    intro:
      "Vom verschneiten Hof bis zum klaren Bergsee im Sommer — ein paar Eindrücke vom Stockhamhof und seiner Umgebung in Kleinarl.",
    tag: "Kleinarl · 1014 m",
    images: [
      { src: `${IMG}/ferienwohnung.webp`, alt: "Helle Ferienwohnung mit Massivholzmöbeln am Stockhamhof" },
      { src: `${IMG}/abenteuerland.webp`, alt: "Kinder spielen im Abenteuerland am Stockhamhof" },
      { src: `${IMG}/tappenkarsee.webp`, alt: "Klarer Bergsee Tappenkarsee in den Bergen über Kleinarl" },
      { src: `${IMG}/almhuette-grasreith.webp`, alt: "Traditionelle Almhütte Grasreith oberhalb von Kleinarl" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz im Schnee",
    headingEmphasis: "im Schnee",
    intro:
      "Schreib uns Zeitraum und Wunsch — Familie Gwehenberger meldet sich persönlich mit Verfügbarkeit und dem genauen Stellplatz-Preis.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — die Stellplatz-Preise sind auf der Website nicht veröffentlicht (nur auf Anfrage), bitte bestätigen. Pro Nacht inkl. Strom, zzgl. Kurtaxe. Wintercamping: Mindestaufenthalt 3 Nächte (6 in den Ferienzeiten). Sommercamping: Mindestaufenthalt 7 Nächte.",
    highlight: {
      title: "Ski-in zum Lift",
      text: "Vom Stellplatz mit den Skiern über die Straße direkt zum Lift.",
    },
    categories: [
      { id: "wintercamping", label: "Wintercamping-Stellplatz", perNight: 39, perExtraGuest: 9 },
      { id: "sommercamping", label: "Sommercamping-Stellplatz", perNight: 34, perExtraGuest: 9 },
    ],
  },

  kontakt: {
    coords: { lat: 47.283971, lng: 13.314017 },
    tel: "+43 650 9953543",
    telHref: "tel:+436509953543",
    mail: "stockham@sbg.at",
    facebook: "https://www.facebook.com/Urlaub-am-Bauernhof-Stockham-406628286116029/",
    adresse: "Stockhamweg 5 · 5603 Kleinarl · Salzburg",
  },

  languages: ["DE", "EN", "NL"],

  nav: [
    {
      label: "Wintercamping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Ski & Loipe", href: "#camping" },
      ],
    },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Anfahrt",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default stockhambauer;
