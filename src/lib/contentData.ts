import { ASSETS } from './constants';

export interface Hotspot {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  x: number; // percentage
  y: number; // percentage
  desc: string;
  techSpec: string;
}

export interface Track {
  id: string;
  title: string;
  duration: string;
  genre: string;
  description: string;
  bpm: string;
}

export interface LiveDate {
  date: string;
  city: string;
  venue: string;
  status: string;
}

export interface RouteEntry {
  id: string;
  name: string;
  region: string;
  distance: string;
  asphaltCondition: string;
  image: string;
  journalEntry: string;
  highlights: string[];
  dateLog: string;
}

export interface Moment {
  id: string;
  title: string;
  category: 'BARBER' | 'MACHINE' | 'VOICE' | 'ROAD';
  src: string;
  location: string;
  date: string;
  exif: string;
  caption: string;
}

export const SITE_DATA = {
  hero: {
    title: 'PIOTR MIĄSIK',
    roles: ['BARBER', 'VOICE', 'ROAD'],
    tagline: 'THE ROAD IS PART OF THE CRAFT.',
    subTagline: 'Precyzja ostrza, surowy głos rocka i niekończący się asfalt Polski na dostosowanej Hondzie Shadow 1100 CCM z 1987 roku.',
    locationGps: "GPS: 52°13'N 21°00'E // SHADOW 1100 CCM V-TWIN 1987",
    videoUrl: ASSETS.heroVideo,
    imageUrl: ASSETS.heroImage,
  },

  intro: {
    tag: 'CHAPTER 00 // DOCUMENTARY ESSAY',
    headlinePrefix: 'ONE MAN. THREE WORLDS:',
    words: ['BARBER', 'VOICE', 'ROAD'],
    paragraphs: [
      'Nie dowiesz się wszystkiego o człowieku, dopóki nie zobaczysz go w jego trzech stanach skupienia. Piotr Miąsik nie dzieli życia na sztywne kategorie. W jego świecie ręce pachnące olejkiem do brody chwilę później chwytają starą, skórzaną kierownicę dostosowanej Hondy Shadow 1100 CCM z 1987 roku, by wieczorem opierać się o mikser na dymnej scenie klubowej.',
      'To nie jest wyreżyserowany profil w mediach społecznościowych. To surowy etos rzemiosła, wolności i muzyki. Precyzja brzytwy wymaga absolutnego skupienia, tak samo jak pokonywanie ostrych zakrętów na pętli bieszczadzkiej po zmroku. Surowy głos rocka dopełnia całości – głośno, prawdziwie, bez wygładzania.',
    ],
  },

  barber: {
    sectionTag: 'CHAPTER 01 // CRAFT OF CHARACTER',
    headline: 'THE BARBER',
    keywords: 'PRECISION. CHARACTER. CRAFT.',
    subKeywords: 'BEARD & HAIR ARCHITECTURE // NO FADS',
    quote: 'STRZYŻENIE TO NIE USŁUGA. TO RYTUAŁ TOŻSAMOŚCI.',
    description: 'Każde cięcie brzytwą wymaga czystej intuicji i opanowania ruchu. Prawdziwe fryzjerstwo męskie nie goni za jednosezonowymi trendami. Chodzi o dopasowanie kształtu do charakteru człowieka, struktury jego kości i jego stylu życia. Fotel barberski staje się miejscem szczerych spotkań z ludźmi.',
    portraitImage: ASSETS.heroImage,
    toolsImage: '/images/barber_craft_tools.jpg',
    principles: [
      {
        num: '01',
        title: 'SZACUNEK DO TRADYCJI',
        desc: 'Klasyczne formy fryzjerskie, które starzeją się z godnością.',
      },
      {
        num: '02',
        title: 'SPOTKANIA Z LUDŹMI',
        desc: 'Fotel barberski jako przestrzeń do męskiej rozmowy, wymiany historii lub milczenia.',
      },
      {
        num: '03',
        title: 'BEZ KOMPROMISÓW',
        desc: 'Dokładność konturu, naturalny układ włosa i anatomia twarzy.',
      },
    ],
  },

  machine: {
    sectionTag: 'CHAPTER 02 // STEEL & ASPHALT 1987',
    headline: 'THE MACHINE',
    modelTitle: 'HONDA SHADOW 1100 CCM (1987 CUSTOM)',
    subtitle: 'ROAD MACHINE // 1100 CCM V-TWIN 45°',
    mainImage: '/images/machine_honda_shadow.jpg',
    hotspots: [
      {
        id: 'engine',
        number: '01',
        name: 'SILNIK 1100 CCM V-TWIN',
        subtitle: 'CHŁODZONY CIECZĄ 1099cc // V-TWIN 45°',
        x: 52,
        y: 62,
        desc: 'Sercem customowej maszyny jest potężna dwucylindrowa jednostka 1100 CCM o pojemności 1099 cm³. Wysoki moment obrotowy przy niskich obrotach i potężne basowe dudnienie ze zmodyfikowanego wydechu.',
        techSpec: 'Pojemność: 1099 CCM // Moment: 95 Nm @ 2750 RPM // Skrzynia: 5-biegowa',
      },
      {
        id: 'shaft',
        number: '02',
        name: 'WAŁ KARDANA (SHAFT DRIVE)',
        subtitle: 'BEZOBSŁUGOWY NAPĘD KOŃCOWY 1100 CCM',
        x: 32,
        y: 72,
        desc: 'Bezobsługowy wał kardana dostosowany do przenoszenia wysokiego momentu obrotowego silnika 1100 CCM. Gwarancja niezawodności w deszczu, pyłku i pyle na polskich trasach.',
        techSpec: 'Typ: Enclosed Shaft Drive // System: Heavy-Duty Universal Joint',
      },
      {
        id: 'exhaust',
        number: '03',
        name: 'CUSTOM STALOWY WYDECH 1100 CCM',
        subtitle: 'GŁĘBOKI BASOWY REZONANS HEAVY V-TWIN',
        x: 68,
        y: 78,
        desc: 'Ręcznie spawany wydech stalowy dopasowany do pojemności 1100 CCM. Nisko dudniący, głęboki dźwięk rezonujący w wąwozach górskich i pod wiaduktami.',
        techSpec: 'Wykończenie: Matowa czarna powłoka ceramiczna // Przepływ: Custom Baffle',
      },
      {
        id: 'saddle',
        number: '04',
        name: 'CUSTOMOWE SIODŁO SKÓRZANE 1987',
        subtitle: 'RĘCZNIE SZYTA SKÓRA BYDLĘCA',
        x: 42,
        y: 42,
        desc: 'Wyprofilowane do długich przelotów przez całą Polskę. Patynowana skóra bydlęca z mosiężnymi okuciami i głębokim wyprofilowaniem lędźwiowym.',
        techSpec: 'Wykończenie: Naturalna skóra bydlęca // Przeszycia: Woskowany kord',
      },
      {
        id: 'gauges',
        number: '05',
        name: 'ANALOGOWY KOKPIT VINTAGE 1987',
        subtitle: 'KLASYCZNY WSKAZÓWKOWY ZEGAR HONDA',
        x: 62,
        y: 28,
        desc: 'Minimalistyczny analogowy prędkościomierz i wskaźnik temperatury z lat 80. Bez ekranów TFT, tylko surowy mechaniczny wskaźnik przebytych kilometrów.',
        techSpec: 'Styl: Vintage Nippon Seiki // Podświetlenie: Warm Incandescent',
      },
    ] as Hotspot[],
  },

  voice: {
    sectionTag: 'CHAPTER 03 // STAGE, SMOKE & RAW VOICE',
    headline: 'THE VOICE',
    tracks: [
      {
        id: '01',
        title: 'TURN THE PAGE (METALLICA STYLE ROAD ANTHEM)',
        duration: '05:42',
        genre: 'HEAVY ROCK / HIGHWAY SOUNDTRACK',
        description: 'Ironiczny, wolno narastający hymn motocyklistów na trasie. Potężny przester gitarowy i surowy, pełny wokal.',
        bpm: '82 BPM',
      },
      {
        id: '02',
        title: 'RIDER ON THE EDGE (1100 CCM)',
        duration: '04:18',
        genre: 'HEAVY ROCK / DESERT ROAD',
        description: 'Surowy, niski wokal połączony z przesterowanym riffem gitarowym i basowym dudnieniem 1100 CCM. Utwór inspirowany nocnymi przelotami po trasie A4.',
        bpm: '124 BPM',
      },
      {
        id: '03',
        title: 'SHADOW V-TWIN (ACOUSTIC DEMO)',
        duration: '03:45',
        genre: 'ACOUSTIC ROCK / BLUES',
        description: 'Akustyczna opowieść o wolności, zapachu benzyny i braku celu podróży. Nagrano na żywo na prostej taśmie analogowej.',
        bpm: '98 BPM',
      },
      {
        id: '04',
        title: 'COLD ASPHALT & RAZOR EDGE',
        duration: '05:02',
        genre: 'HARD ROCK / BACKSTAGE',
        description: 'Energiczny, dymny numer koncertowy z mocną sekcją rytmiczną i gitarowym solówkowym uderzeniem.',
        bpm: '138 BPM',
      },
    ] as Track[],
    liveDates: [
      {
        date: '24 PAŹDZIERNIKA',
        city: 'KRAKÓW',
        venue: 'UNDERGROUND ROCK BAR',
        status: 'BILETY W SPRZEDAŻY',
      },
      {
        date: '12 LISTOPADA',
        city: 'KATOWICE',
        venue: 'INDUSTRIAL STAGE WORKSHOP',
        status: 'OSTATNIE MIEJSCA',
      },
      {
        date: '02 GRUDNIA',
        city: 'WARSZAWA',
        venue: 'MOTORCYCLE & ROCK CLUB',
        status: 'WKRÓTCE',
      },
      {
        date: '18 GRUDNIA',
        city: 'GDAŃSK',
        venue: 'SHIPYARD BACKSTAGE',
        status: 'WKRÓTCE',
      },
    ] as LiveDate[],
  },

  philosophy: {
    sectionTag: 'CHAPTER 04 // MEMENTO VIVERE & THE OPEN ROAD',
    headline: 'O PRZEMIJANIU I CHWILACH',
    subheadline: 'LIFE IS FRAGILE // CATCH THE MOMENTS BEFORE THE DUST SETTLES',
    quote: '„Życie jest zbyt krótkie na odkładanie drogi na później. Zostaje tylko to, co przeżyłeś naprawdę.”',
    essay: [
      'Gdy jedziesz motocyklem nocą przez puste polskie szosy, z silnikiem 1100 CCM pracującym miarowo pod tobą, czujesz fizycznie, jak szybko ucieka czas. Wskazówka prędkościomierza mierzy kilometry, ale prawdziwą miarą są chwile: zapach wilgotnego lasu o świcie, gorąca kawa wypita na poboczu Bieszczad, dźwięk brzytwy na skórzanym pasie czy wibracja strun na dymnej scenie.',
      'Życie jest kruche. Nie ma gwarancji na jutro. Dlatego w rzemiośle barberskim liczy się każde jedno cięcie tu i teraz, w muzyce – każdy surowy dźwięk wydobyty z gardła, a na drodze – każdy pokonany zakręt i każde spotkanie z drugim człowiekiem. Nie zbieramy rzeczy. Kolekcjonujemy momenty, zanim kurz drogi opadnie na zawsze.',
    ],
    mementos: [
      {
        tag: '01 // TERAŹNIEJSZOŚĆ',
        title: 'TU I TERAZ (CARPE DIEM)',
        desc: 'Obecność w danym momencie. Skupienie na fotelu barberskim lub za kierownicą motocykla.',
      },
      {
        tag: '02 // PAMIĘĆ',
        title: 'KOLEKCJONOWANIE CHWIL',
        desc: 'Zdjęcia analogowe, zapach benzyny i deszczu, wspomnienia nocnych przelotów.',
      },
      {
        tag: '03 // POKORA',
        title: 'KRUCHOŚĆ CZASU & LUDZIE',
        desc: 'Świadomość przemijania nie budzi lęku – budzi wolność, szacunek do ludzi i odwagę do prawdziwego życia.',
      },
    ],
  },

  soundtrack: {
    sectionTag: 'ROAD SOUNDTRACK // METALLICA',
    songTitle: 'TURN THE PAGE',
    artist: 'METALLICA (BOB SEGER COVER)',
    album: 'GARAGE INC. // HIGHWAY ANTHEM',
    lyricQuote: '„On a long and lonesome highway, east of Omaha... You can listen to the engine singin’ out his one-note song...”',
    description: 'Hymn niekończącej się drogi. Utwór, który idealnie oddaje samotność i piękno motocyklowych podróży po Polsce na Hondzie Shadow 1100 CCM. Dźwięk silnika V-twin przeplatający się z przesterowanym riffem.',
  },

  diary: {
    sectionTag: 'CHAPTER 05 // POLISH ROAD TRIP JOURNAL',
    headline: 'ROAD DIARY',
    routes: [
      {
        id: '01',
        name: 'WIELKA PĘTLA BIESZCZADZKA',
        region: 'PODKARPACIE // BIESZCZADY',
        distance: '144 KM',
        asphaltCondition: 'SUROWY, SERPENTYNY, MGŁA',
        image: '/images/polish_road_bieszczady.jpg',
        journalEntry: 'Poranny start o 06:00 z Leska. Mgła opadająca na dolinę Sanu. Honda Shadow 1100 CCM ciągnie z potężnym zapasem momentu obrotowego pod Słonną Przełęcz. Brak ruchu, cichy wiatr i zapach mokrych liści.',
        highlights: ['Przełęcz Wyżna (872 m n.p.m.)', 'Cisna - Solina', 'Serpentyny Słonne'],
        dateLog: '14 WRZEŚNIA // ODA DO ASPHALTU',
      },
      {
        id: '02',
        name: 'SZLAK ORLICH GNIAZD',
        region: 'MAŁOPOLSKA // JURA KRAKOWSKO-CZĘSTOCHOWSKA',
        distance: '162 KM',
        asphaltCondition: 'GŁADKI, WZNIESIENIA, WAPIENIE',
        image: '/images/moment_night_highway.jpg',
        journalEntry: 'Przejazd wąskimi drogami wokół ruin zamków w Ogrodzieńcu i Ojcowie. Skały wapienne odbijające zachodzące słońce. V-twin 1100 CCM z 1987 roku brzmi potężnie w ocienionych wąwozach jurajskich.',
        highlights: ['Ojców', 'Zamek Ogrodzieniec', 'Olsztyn koło Częstochowy'],
        dateLog: '02 SIERPNIA // JURAJSKIE ZAMKI',
      },
      {
        id: '03',
        name: 'SZOSA BAŁTYCKA',
        region: 'POMORZE // HEL & ŁEBA',
        distance: '210 KM',
        asphaltCondition: 'WIATR MORSKI, BRZYZA, DŁUGIE PROSTE',
        image: ASSETS.heroImage,
        journalEntry: 'Wiatr wiejący od otwartego morza. Przejazd Mierzeją Helską o zachodzie słońca. Droga otoczona sosnowymi lasami i zapach słonej wody. Postój na małą kawę z termosu na pustej plaży.',
        highlights: ['Mierzeja Helska', 'Słowiński Park Narodowy', 'Latarnia Rozewie'],
        dateLog: '19 LIPCA // BREEZE & CHROME',
      },
      {
        id: '04',
        name: 'INDUSTRIALNE ŚLĄSKO',
        region: 'ŚLĄSK // KATOWICE & ZABRZE',
        distance: '95 KM',
        asphaltCondition: 'MIEJSKI INDUSTRIAL, KOSTKA BRUKOWA',
        image: '/images/machine_honda_shadow.jpg',
        journalEntry: 'Szyby kopalniane, czerwona cegła Nikiszowca i stalowe viadukty Zabrza. Surowy, wieczny charakter. Miejsca pełne historii ludzi pracujących własnymi rękami.',
        highlights: ['Nikiszowiec', 'Kopalnia Guido', 'Strefa Kultury Katowice'],
        dateLog: '08 MAJA // INDUSTRIAL DUST',
      },
    ] as RouteEntry[],
  },

  moments: {
    sectionTag: 'CHAPTER 06 // ARCHIVE OF MOMENTS & PEOPLE',
    headline: 'MOMENTS',
    momentsList: [
      {
        id: 'm1',
        title: 'PIOTR MIĄSIK & HONDA SHADOW 1100 CCM',
        category: 'MACHINE',
        src: ASSETS.heroImage,
        location: 'PRZEŁĘCZ SŁONNA // BIESZCZADY',
        date: '14.09.2024',
        exif: '35mm // f/2.8 // ISO 400 // Kodak Tri-X',
        caption: 'Przerwa na poboczu drogi po pierwszym odcinku pętli bieszczadzkiej. Czysta cisza i ciepły silnik 1100 CCM.',
      },
      {
        id: 'm2',
        title: 'BRZYTWA I GORĄCY KOMPRES',
        category: 'BARBER',
        src: '/images/barber_craft_tools.jpg',
        location: 'WARSZTAT BARBERSKI // KATOWICE',
        date: '28.08.2024',
        exif: '50mm // f/1.8 // ISO 200 // Ilford HP5',
        caption: 'Precyzja ostrza i tradycyjne narzędzia ze stali japońskiej. Rytuał golenia na gładko.',
      },
      {
        id: 'm3',
        title: 'VOICE & MIC ON STAGE',
        category: 'VOICE',
        src: '/images/voice_stage_performance.jpg',
        location: 'UNDERGROUND CLUB // KRAKÓW',
        date: '05.10.2024',
        exif: '85mm // f/1.4 // ISO 1600 // Fuji Neopan',
        caption: 'Nocny gig klubowy. Dym ze sceny, lampowy przester i pełna moc głosu.',
      },
      {
        id: 'm4',
        title: '1100 CCM V-TWIN ENGINE CLOSE-UP',
        category: 'MACHINE',
        src: '/images/machine_honda_shadow.jpg',
        location: 'INDUSTRIAL WORKSHOP // ŚLĄSK',
        date: '12.06.2024',
        exif: '35mm // f/4.0 // ISO 100 // CineStill 800T',
        caption: 'Mechaniczne serce dostosowanej Hondy Shadow 1100 CCM z 1987 roku.',
      },
      {
        id: 'm5',
        title: 'BIESZCZADZKA SZOSA MOOD',
        category: 'ROAD',
        src: '/images/polish_road_bieszczady.jpg',
        location: 'TRASA LESKO - CISNA',
        date: '15.09.2024',
        exif: '24mm // f/5.6 // ISO 400 // Tri-X 400',
        caption: 'Mgła osiadająca na asfalcie. Długa prosta otoczona gęstym lasem bukowym.',
      },
      {
        id: 'm6',
        title: 'NOCNY PRZELOT TRASĄ A4',
        category: 'ROAD',
        src: '/images/moment_night_highway.jpg',
        location: 'AUTOSTRADA A4 // MAŁOPOLSKA',
        date: '22.07.2024',
        exif: '50mm // f/1.4 // ISO 3200 // Digital RAW',
        caption: 'Reflektory samochodów mijanych w deszczu. Refleksy światła na mokrym asfalcie.',
      },
      {
        id: 'm7',
        title: 'KLASYCZNY FOTEL BARBERSKI',
        category: 'BARBER',
        src: '/images/moment_barber_interior.jpg',
        location: 'SALON BARBERSKI // WARSZAWA',
        date: '03.11.2024',
        exif: '35mm // f/2.0 // ISO 800 // Kodak Portra',
        caption: 'Zabytkowy fotel z ciężkiego żeliwa i czarnej skóry. Miejsce męskich rozmów.',
      },
      {
        id: 'm8',
        title: 'STAGE MICROPHONE SILHOUETTE',
        category: 'VOICE',
        src: '/images/moment_rock_stage.jpg',
        location: 'SHIPYARD STAGE // GDAŃSK',
        date: '18.08.2024',
        exif: '85mm // f/2.8 // ISO 1200 // Black & White',
        caption: 'Mikrofon gotowy przed próbnym graniem. Cisza przed głośnym rockowym uderzeniem.',
      },
    ] as Moment[],
  },

  finalTransition: {
    tag: 'FINAL HERO TRANSITION // 1987 HONDA SHADOW 1100 CCM',
    headline: 'THE ROAD IS WAITING.',
    description: 'Czy potrzebujesz precyzyjnego strzyżenia na fotelu barberskim, nagrania sesji rockowej czy wspólnego przelotu na Hondzie 1100 CCM?',
  },

  contact: {
    email: 'piotr.miasik@craft-road.pl',
    phone: '+48 600 000 1987',
    locations: [
      'WARSZTAT BARBERSKI // KATOWICE',
      'TRASY POLSKA // HONDA SHADOW 1100 CCM',
      'SCENA ROCKOWA // KRAKÓW / WARSZAWA',
    ],
  },
};
