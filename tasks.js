const tasks = [
    {
        question: 'Vai attēlotajā situācijā ir atļauts attīstīt atļauto braukšanas ātrumu 90km/h?',
        image: 'imgs/img-1.jpg',
        type: 'single', // single / multi
        options:
            [
                'Atļauts.',
                'Aizliegts.'
            ],
        answer: 'Atļauts.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā?',
        image: 'imgs/img-2.png',
        type: 'single', // single / multi
        options:
            [
                'Dosiet ceļu tikai sarkanā automobiļa vadītājam.',
                'Dosiet ceļu abiem transportlīdzekļu vadītājiem.',
                'Dosiet ceļu tikai zaļā automobiļa vadītājam.',
                'Šķērsosiet krustojumu pirmais.'
            ],
        answer: 'Šķērsosiet krustojumu pirmais.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā?',
        image: 'imgs/img-3.jpg',
        type: 'single', // single / multi
        options:
            [
                'Dosiet ceļu tikai operatīvā transportlīdzekļa vadītājam.',
                'Dosiet ceļu abu transportlīdzekļu vadītājiem.',
                'Šķērsosiet krustojumu pirmais.'
            ],
        answer: 'Dosiet ceļu tikai operatīvā transportlīdzekļa vadītājam.'
    },
    {
        question: 'Kā degvielas patēriņu ietekmē antispārns?',
        image: 'imgs/img-4.jpg',
        type: 'single', // single / multi
        options:
            [
                'Degvielas patēriņš palielinās.',
                'Degvielas patēriņš samazinās.'
            ],
        answer: 'Degvielas patēriņš palielinās.'
    },
    {
        question: 'Kura transportlīdzekļa vadītājam ir priekšroka apdzīvotās vietās?',
        image: 'imgs/img-5.jpg',
        type: 'single', // single / multi
        options:
            [
                'Autobusa vadītājam.',
                'Vieglā automobiļa vadītājam.'
            ],
        answer: 'Autobusa vadītājam.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā?',
        image: 'imgs/img-6.png',
        type: 'single', // single / multi
        options:
            [
                'Dosiet ceļu tikai pretim braucošā transportlīdzekļa vadītājam.',
                'Dosiet ceļu tikai kravas automobiļa vadītājam.',
                'Dosiet ceļu abiem transportlīdzekļu vadītājiem.'
            ],
        answer: 'Dosiet ceļu abiem transportlīdzekļu vadītājiem.'
    },
    {
        question: 'Kā jārīkojas automobiļa vadītājam attēlotajā situācijā?',
        image: 'imgs/img-7.jpg',
        type: 'single', // single / multi
        options:
            [
                'Jābrauc ar tādu ātrumu, lai, ja nepieciešams, varētu nekavējoties apturēt automobili.',
                'Veicot apbraukšanu pilnībā jāiebrauc pretējā braukšanas joslā .',
                'Jāsignalizē un jāieslēdz avārijas gaismas signalizācija.'
            ],
        answer: 'Jābrauc ar tādu ātrumu, lai, ja nepieciešams, varētu nekavējoties apturēt automobili.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā?',
        image: 'imgs/img-8.png',
        type: 'single', // single / multi
        options:
            [
                'Dosiet ceļu pretim braucošajam vieglā automobiļa vadītājam.',
                'Dosiet ceļu kravas automobiļa vadītājam.',
                'Šķērsosiet krustojumu pirmais.'
            ],
        answer: 'Dosiet ceļu pretim braucošajam vieglā automobiļa vadītājam.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā?',
        image: 'imgs/img-9.png',
        type: 'single', // single / multi
        options:
            [
                'Šķērsosiet krustojumu pirmais.',
                'Dosiet ceļu tikai velosipēda vadītājam.',
                'Dosiet ceļu vieglā automobiļa un velosipēda vadītājam.',
                'Dosiet ceļu tikai vieglā automobiļa vadītājam.'
            ],
        answer: 'Dosiet ceļu tikai vieglā automobiļa vadītājam.'
    },
    {
        question: 'Kā rīkosieties attēlotajā situācijā?',
        image: 'imgs/img-10.png',
        type: 'single', // single / multi
        options:
            [
                'Apbrauksiet šķērsli pa labo pusi.',
                'Dosiet ceļu zilajam automobilim un apbrauksiet šķērsli pa kreiso pusi.'
            ],
        answer: 'Apbrauksiet šķērsli pa labo pusi.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā?',
        image: 'imgs/img-11.jpg',
        type: 'single', // single / multi
        options:
            [
                'Dosiet ceļu velosipēda vadītājam.',
                'Šķērsosiet krustojumu pirmais.'
            ],
        answer: 'Dosiet ceļu velosipēda vadītājam.'
    },
    {
        question: 'Kā alkoholiskie dzērieni ietekmē transportlīdzekļa vadītāja reakcijas laiku?',
        image: 'imgs/img-12.png',
        type: 'single', // single / multi
        options:
            [
                'Reakcijas laiku neizmaina.',
                'Reakcijas laiku palielina.',
                'Reakcijas laiku samazina.'
            ],
        answer: 'Reakcijas laiku palielina.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā?',
        image: 'imgs/img-13.jpg',
        type: 'single', // single / multi
        options:
            [
                'Šķērsosiet krustojumu pirmais.',
                'Dosiet ceļu motociklam.'
            ],
        answer: 'Dosiet ceļu motociklam.'
    },
    {
        question: 'Kāda būs Jūsu pirmā rīcība, ja vēlaties nogriezties pa kreisi attēlotajā situācijā?',
        image: 'imgs/img-14.png',
        type: 'single', // single / multi
        options:
            [
                'Ieslēgšu pagrieziena signālu.',
                'Pārliecināšos par drošību.'
            ],
        answer: 'Ieslēgšu pagrieziena signālu.'
    },
    {
        question: 'Par ko brīdina ceļa zīme?',
        image: 'imgs/img-15.png',
        type: 'single', // single / multi
        options:
            [
                'Par bīstamu labo pagriezienu.',
                'Par bīstamiem pagriezieniem, kur pirmais pagrieziens būs pa labi.',
                'Par lejupceļu ar sekojošu augšupceļu.'
            ],
        answer: 'Par bīstamiem pagriezieniem, kur pirmais pagrieziens būs pa labi.'
    },
    {
        question: 'Kāda ir darbības zona ceļa zīmei “Braukt taisni” attēlotajā situācijā?',
        image: 'imgs/img-16.png',
        type: 'single', // single / multi
        options:
            [
                'Līdz nākošajam krustojumam.',
                'Līdz ceļa zīmei “Apdzīvotas vietas beigas”'
            ],
        answer: 'Līdz ceļa zīmei “Apdzīvotas vietas beigas”'
    },
    {
        question: 'Kā jārīkojas dzeltenā automobiļa vadītājam attēlotā situācijā?',
        image: 'imgs/img-17.jpg',
        type: 'single', // single / multi
        options:
            [
                'Jāturpina kustība nesamazinot ātrumu.',
                'Strauji jābremzē.'
            ],
        answer: 'Strauji jābremzē.'
    },
    {
        question: 'Kuriem transportlīdzekļu vadītājiem atļauts braukt attēlotajā situācijā?',
        image: 'imgs/img-18.jpg',
        type: 'single', // single / multi
        options:
            [
                'Kravas automobiļa, vieglā automobiļa un autobusa vadītājiem.',
                'Visiem transportlīdzekļu vadītājiem braukt aizliegts.',
                'Kravas automobiļa un vieglā automobiļa vadītājiem.'
            ],
        answer: 'Kravas automobiļa un vieglā automobiļa vadītājiem.'
    },
    {
        question: 'Par ko brīdina attēlotais ceļa apzīmējums?',
        image: 'imgs/img-19.jpg',
        type: 'single', // single / multi
        options:
            [
                'Par nepārtrauktās līnijas tuvošanos.',
                'Par to, ka atrodaties uz ātrgaitas ceļa.'
            ],
        answer: 'Par nepārtrauktās līnijas tuvošanos.'
    },
    {
        question: 'Vai attēlotajā situācijā atļauts apdzīt?',
        image: 'imgs/img-20.jpg',
        type: 'single', // single / multi
        options:
            [
                'Aizliegts.',
                'Atļauts.'
            ],
        answer: 'Aizliegts.'
    },
    {
        question: 'Kāds ir maksimāli atļautais braukšanas ātrums velkot automobili?',
        image: 'imgs/img-21.jpg',
        type: 'single', // single / multi
        options:
            [
                '90km/h.',
                '50km/h.',
                '80km/h.',
                '100km/h.'
            ],
        answer: '50km/h.'
    },
    {
        question: 'Vai velosipēds ir pareizi nostiprināts pārvadāšanai?',
        image: 'imgs/img-22.png',
        type: 'single', // single / multi
        options:
            [
                'Pareizi, jo nerada lieku gaisa pretestību.',
                'Nepareizi, jo aizsedz apgaismes ierīces un numurzīmi.'
            ],
        answer: 'Nepareizi, jo aizsedz apgaismes ierīces un numurzīmi.'
    },
    {
        question: 'Pa kuru trajektoriju automobiļa vadītājam atļauts krustojumā nogriezties pa labi?',
        image: 'imgs/img-23.jpg',
        type: 'single', // single / multi
        options:
            [
                'Tikai A.',
                'Pa A vai B.',
                'Tikai B.'
            ],
        answer: 'Tikai A.'
    },
    {
        question: 'Kuram no minētajiem faktoriem ir būtiskākā ietekme uz degvielas patēriņu pilsētā?',
        image: 'imgs/img-24.jpg',
        type: 'single', // single / multi
        options:
            [
                'Optimālai maršruta plānošanai.',
                'Cilvēku skaitam transportlīdzeklī.',
                'Vēja ātrumam.'
            ],
        answer: 'Optimālai maršruta plānošanai.'
    },
    {
        question: 'Kad velkamajam automobilim ir jābūt iedegtai avārijas gaismas signalizācijai?',
        image: 'imgs/img-25.png',
        type: 'single', // single / multi
        options:
            [
                'Braucot apdzīvotās vietās.',
                'Braucot ārpus apdzīvotām vietām.',
                'Braucot diennakts tumšajā laikā.',
                'Vienmēr.'
            ],
        answer: 'Vienmēr.'
    },
    {
        question: 'Kuram satiksmes dalībniekam ir priekšroka attēlotajā situācijā?',
        image: 'imgs/img-26.png',
        type: 'single', // single / multi
        options:
            [
                'Automobiļa vadītājam.',
                'Gājējam.'
            ],
        answer: 'Gājējam.'
    },
    {
        question: 'Kurā attēlā pareizāk tiek veikta cietušā izvilkšana no ceļu satiksmes negadījumā iekļuvušā automobiļa?',
        image: 'imgs/img-27.png',
        type: 'single', // single / multi
        options:
            [
                'A.',
                'B.',
                'Abi paņēmieni ir pareizi.'
            ],
        answer: 'A.'
    },
    {
        question: 'Vai vieglā automobiļa vadītājam atļauts apdzīt attēlotajā situācijā?',
        image: 'imgs/img-28.jpg',
        type: 'single', // single / multi
        options:
            [
                'Aizliegts, jebkurā gadījumā.',
                'Atļauts.',
                'Aizliegts, tikai gadījumos, ja tuvojas transportlīdzekļi no kreisās puses.'
            ],
        answer: 'Aizliegts, jebkurā gadījumā.' // maybe 'Atļauts.'
    },
    {
        question: 'Ko norāda attēlotā papildzīme?',
        image: 'imgs/img-29.png',
        type: 'single', // single / multi
        options:
            [
                'Norāda ieteicamo braukšanas virzienu pa labi.',
                'Ka atrodaties uz mazāksvarīga ceļa, kurš krustojumā maina virzienu pa labi.',
                'Ka atrodaties uz galvenā ceļa, kurš krustojumā maina virzienu pa labi.'
            ],
        answer: 'Ka atrodaties uz galvenā ceļa, kurš krustojumā maina virzienu pa labi.'
    },
    {
        question: 'Vai pasažieriem atļauts atrasties velkamajā automobilī?',
        image: 'imgs/img-30.png',
        type: 'single', // single / multi
        options:
            [
                'Aizliegts.',
                'Atļauts.'
            ],
        answer: 'Aizliegts.'
    },
    {
        question: 'Pa kuru no trajektorijām vieglā automobiļa vadītājam atļauts apsteigt kravas automobili apdzīvotā vietā?',
        image: 'imgs/img-31.png',
        type: 'single', // single / multi
        options:
            [
                'Pa A un B.',
                'Tikai pa B.',
                'Tikai pa A.'
            ],
        answer: 'Tikai pa A.'
    },
    {
        question: 'Kuros virzienos automobiļa vadītājam ir atļauts braukt attēlotā situācijā?',
        image: 'imgs/img-32.jpg',
        type: 'single', // single / multi
        options:
            [
                'A C D E.',
                'B C D.',
                'B C E.'
            ],
        answer: 'A C D E.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā (dzeltens mirgojošs signāls)?',
        image: 'imgs/img-33.jpg',
        type: 'single', // single / multi
        options:
            [
                'Šķērsosiet krustojumu pirmais.',
                'Dosiet ceļu pretim braucošā automobiļa vadītājam.'
            ],
        answer: 'Dosiet ceļu pretim braucošā automobiļa vadītājam.'
    }/*,
    {
        question: '',
        image: 'imgs/',
        type: 'single', // single / multi
        options:
            [
                '',
                ''
            ],
        answer: ''
    }*/
];
