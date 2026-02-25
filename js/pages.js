/* CONTENT */
window.pages = [
    {
        id: 201,
        slug: "homepage",
        title: "Homepage",
        urls: ["dsr24.de/", "dsr24.de/en/"],
        language: ["DE", "EN"],
        lastUpdated: "2026-02-12 13:45:10",
        blocks:
            [
                {
                    type: "dsrTemplate1.homepage.hero",
                    enabled: true,
                    title: "Du hattest einen unverschuldeten Autounfall?",
                    subtitle: "Die DSR24 hilft dir kostenfrei!",
                    backgroundimage: 123, 
                    overlayopacity: 0.6,
                    buttoncaption: "Hier Schadenfall melden",
                    buttonlink: "/schaden-melden",
                    buttonnewtab: true
                },
                {
                    type: "dsrTemplate1.homepage.about-us",
                    enabled: true,
                    title: "Ihr zuverlässiger Partner bei Unfallschäden",
                    subtitle: "Professionelle Schadenregulierung mit jahrelanger Erfahrung",
                    bulletpoints: [
                        "Kostenlose Beratung und Betreuung",
                        "Schnelle und unkomplizierte Abwicklung",
                        "Maximale Schadensersatzleistung für Sie",
                    ],
                    paragraph: "Bei DSR24 sind Sie in guten Händen. Wir kümmern uns um alle Aspekte Ihres Schadenfalls und sorgen dafür, dass Sie zu Ihrem Recht kommen.",
                    image: 102,
                    buttoncaption: "Mehr über uns erfahren",
                    buttonlink: "/ueberuns",
                    buttonnewtab: true

                },
                {
                    type: "dsrTemplate1.homepage.partners",
                    enabled: true,
                    logos: [201, 202, 203, 204, 205]
                },
                {
                    type: "dsrTemplate1.homepage.features",
                    enabled: true,
                    videoid: 301,
                    videoimage: 302,
                    items: [
                        {
                            icon: "fa-solid fa-clipboard-list",
                            title: "Kostenfreie Beratung",
                            text: "Wir beraten Sie umfassend und kostenfrei zu allen Fragen rund um Ihren Schadenfall"
                        },
                        {
                            icon: "fa-solid fa-gem",
                            title: "Schnelle Abwicklung",
                            text: "Durch unsere langjährige Erfahrung wickeln wir Ihren Schadenfall schnell und effizient ab."
                        },
                        {
                            icon: "fa-solid fa-image",
                            title: "Maximale Entschädigung",
                            text: "Wir setzen alle rechtlichen Möglichkeiten ein, um Ihnen die maximale Entschädigung zu sichern"
                        },
                        {
                            icon: "fa-solid fa-shield",
                            title: "Persönliche Betreuung",
                            text: "Sie haben einen festen Ansprechpartner, der Sie während des gesamten Prozesses begleitet"
                        }
                    ]
                },
                {
                    type: "dsrTemplate1.homepage.services",
                    title: "Unsere Leistungen",
                    subtitle: "Leistungen",
                    enabled: true,
                    items: [
                        {
                            icon: 401,
                            title: "DSR24 für Werkstatt",
                            text: "Die Ideallinie für Ihr erfolgreiches Schadenmanagement.",
                            buttonLink: "/services?id=werksttat",
                            buttonnewtab: true
                        },
                        {
                            icon: 402,
                            title: "DSR24 für Autovermietungen",
                            text: "So sind Sie in Sachen Ersatz­fahr­zeug der Ansprech­partner Nr.1.",
                            buttonLink: "/services?id=autovermietungen",
                            buttonnewtab: true
                        },
                        {
                            icon: 403,
                            title: "DSR24 für Rechtsanwälte",
                            text: "So einfach sichern Sie sich regel­mäßige Mandate.",
                            buttonLink: "/services?id=rechtsanwaelte",
                            buttonnewtab: true
                        },
                        {
                            icon: 404,
                            title: "DSR24 für Kfz-Sachverständige",
                            text: "So erhalten Sie Aufträge schnell und unkompliziert.",
                            buttonLink: "/services?id=sachverstaendige",
                            buttonnewtab: true
                        },
                        {
                            icon: 405,
                            title: "DSR24 für Abschleppdienste",
                            text: "So sind Sie bei Bergungsbedarf die erste Wahl.",
                            buttonLink: "/services?id=abschleppdienste",
                            buttonnewtab: true
                        },
                        {
                            icon: 406,
                            title: "Schnelle Hilfe bei Unfallschäden",
                            text: "Hier bekommen Sie im Fall eines Unfalls alles aus einer Hand!",
                            buttonLink: "/services?id=unfallschaeden",
                            buttonnewtab: true
                        }

                    ]

                },
                {
                    type: "dsrTemplate1.homepage.call_to_action",
                    enabled: true,
                    title: "Handlungsaufruf",
                    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    icon: "fa-solid fa-bullhorn ",
                    buttoncaption: "Jetzt starten",
                    buttonlink: "/kontakt",
                    buttonnewtab: false
                },

                {
                    type: "dsrTemplate1.homepage.portfolio",
                    enabled: true,
                    subtitle: "Portfolio",
                    title: "Unser Portfolio",

                    tabs: [
                        {
                            label: "Alle",
                            items: [
                                { image: 701, title: "Projekt 1" },
                                { image: 702, title: "Projekt 2" },
                                { image: 703, title: "Projekt 3" },
                                { image: 704, title: "Projekt 4" },
                                { image: 705, title: "Projekt 5" },
                                { image: 706, title: "Projekt 6" },
                                { image: 707, title: "Projekt 7" },
                                { image: 708, title: "Projekt 8" }
                            ]
                        },
                        {
                            label: "App",
                            items: [
                                { image: 701, title: "App 1" },
                                { image: 703, title: "App 3" },
                                { image: 707, title: "App 7" }
                            ]
                        },
                        {
                            label: "Karte",
                            items: [
                                { image: 704, title: "Karte 4" },
                                { image: 706, title: "Karte 6" }
                            ]
                        },
                        {
                            label: "Web",
                            items: [
                                { image: 702, title: "Web 2" },
                                { image: 705, title: "Web 5" },
                                { image: 708, title: "Web 8" }
                            ]
                        }

                    ],
                },

                {
                    type: "stats",
                    enabled: true,
                    title: "DSR24 Statistics",
                    subtitle: "Statistics",
                    heading: "DSR24 in Zahlen",
                    paragraph: "Unsere Erfolge sprechen für sich",
                    image: 102,
                    bulletpoints: [
                        {
                            icon: "fa-regular fa-face-smile",
                            number: "65",
                            label: "Zufriedene Kunden -"
                        },
                        {
                            icon: "fa-regular fa-newspaper",
                            number: "85",
                            label: "Projeckte -"
                        },
                        {
                            icon: "fa-regular fa-clock",
                            number: "35",
                            label: "Jahre Erfahrung"
                        },
                        {
                            icon: "fa-solid fa-trophy",
                            number: "20",
                            label: "Auszeichnungen"
                        },
                    ],
                },
                {
                    type: "dsrTemplate1.homepage.team",
                    enabled: true,
                    title: "Unser Team",
                    members: [
                        { image: 801, name: "Patrick", role: "CEO" },
                        { image: 802, name: "Katharina", role: "Managerin" },
                        { image: 803, name: "Nadine", role: "Beraterin" }
                    ]
                },

                {
                    type: "dsrTemplate1.homepage.newsandjobs",
                    enabled: true,
                    title: "Wie alles begann",
                    subtitle: "Wie alles begann",
                    items: [
                        { icon: 1001, title: "News", buttonLink: "/news", buttonnewtab: true },
                        { icon: 1002, title: "Jobs", buttonLink: "/jobs", buttonnewtab: true },
                    ]
                },
                {
                    type: "dsrTemplate1.homepage.reviews",
                    enabled: true,
                    backgroundimage: 901,
                    items: [
                        {
                            image: 902,
                            name: "Jane Doe",
                            age: "32 Jahre",
                            job: "Arztin",
                            text: "DSR24 hat mir geholfen, 2.500€ von der gegnerischen Versicherung zu erhalten!",
                            buttonLink: "/use-case?id=1",
                            buttoncaption: "Geschichte lesen",
                            buttonnewtab: true
                        },
                        {
                            image: 903,
                            name: "Michael Schmidt",
                            age: "45 Jahre",
                            job: "Ingenieur",
                            text: "Schnell, professionell und ohne Stress.Ich kann DSR24 wirklich empfehlen!",
                            buttonLink: "/use-case?id=2",
                            buttoncaption: "Geschichte lesen",
                            buttonnewtab: true
                        },
                        {
                            image: 904,
                            name: "Sarah Muller",
                            age: "28 Jahre",
                            job: "Lehrerin aus Hamburg",
                            text: "DSR24 hat sich um alles gekümmert. Ich musste mich um nichts sorgen!.",
                            buttonLink: "/use-case?id=3",
                            buttoncaption: "Geschichte lesen",
                            buttonnewtab: true
                        },
                    ]
                },
                {
                    type: "dsrTemplate1.homepage.quickactions",
                    title: "Check our Actions",
                    subtitle: "Quick Actions",
                    enabled: true,
                    items: [
                        { icon: 1003, title: "DsrKlaert", buttonLink: "/dsrklaert", buttonnewtab: true },
                        { icon: 1005, title: "FAQ", buttonLink: "/faq", buttonnewtab: true },
                        { icon: 1006, title: "Blog", buttonLink: "/blog", buttonnewtab: true },
                        { icon: 1007, title: "Downloads", buttonLink: "/download", buttonnewtab: true }
                    ]
                },
                {
                    type: "dsrTemplate1.homepage.contact",
                    enabled: true,
                    title: "KONTAKTIEREN SIE UNS",
                    mapiframe: "https://www.google.com/maps/embed?pb=!1m18!...",
                    addresslabel: "Standort:",
                    iconaddress:1201,
                    address: "Segelhorster Str. 2, 31840 Hessisch Oldendorf, Germany",
                    emailaddress:1202,
                    emaillabel: "Email:",
                    email: "info@dsr24.de",
                    phoneicon:1203,
                    phonelabel: "Anrufen:",
                    phone: "0800 - 321 24 24",
                    formtitle: "Kontaktformular",
                    formbuttoncaption: "Nachricht senden",
                    formsuccessmessage: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet."
                }
            ]
    },

    {
        id: 202,
        slug: "about-us",
        title: "About Us",
        urls: ["dsr24.de/ueber-uns", "dsr24.de/en/about-us"],
        language: ["DE", "EN"],
        lastUpdated: "2026-02-12 13:45:10",
        blocks:
            [
                {
                    type: "dsrTemplate1.about-us.header",
                    enabled: true,
                    title: "Über uns",
                    subtitle: "Ein Blick auf unsere Geschichte",
                    backgroundimage: 123
                },
                {
                    type: "dsrTemplate1.about-us.content",
                    enabled: true,
                    title: "Wer wir sind",
                    paragraph: "DSR24 ist seit über 35 Jahren Ihr zuverlässiger Partner bei Unfallschäden und Schadenregulierung.",
                    image: 102
                }
            ]
    },

    {
        id: 203,
        slug: "blog",
        title: "Blog",
        urls: ["dsr24.de/blog", "dsr24.de/en/blog"],
        language: ["DE", "EN"],
        lastUpdated: "2026-02-12 13:45:10",
        blocks:
            [
                {
                    type: "dsrTemplate1.blog.header",
                    enabled: true,
                    title: "Unser Blog",
                    subtitle: "Die neuesten Artikel und Nachrichten",
                    backgroundimage: 123
                },
                {
                    type: "dsrTemplate1.blog.search",
                    enabled: true,
                    placeholder: "Blog durchsuchen...",
                    title: "Nach Artikeln suchen"
                },
                {
                    type: "dsrTemplate1.blog.grid",
                    enabled: true,
                    title: "Blog Artikel",
                    items: []
                }
            ]
    },

    {
        id: 204,
        slug: "downloads",
        title: "Downloads",
        urls: ["dsr24.de/downloads", "dsr24.de/en/downloads"],
        language: ["DE", "EN"],
        lastUpdated: "2026-02-12 13:45:10",
        blocks:
            [
                {
                    type: "dsrTemplate1.downloads.header",
                    enabled: true,
                    title: "Downloads",
                    subtitle: "Alle Dokumente und Dateien zum Herunterladen",
                    backgroundimage: 123
                },
                {
                    type: "dsrTemplate1.downloads.grid",
                    enabled: true,
                    title: "Verfügbare Downloads",
                    items: []
                }
            ]
    },

    {
        id: 205,
        slug: "faq",
        title: "FAQ",
        urls: ["dsr24.de/haeufig-gestellte-fragen", "dsr24.de/en/faq"],
        language: ["DE", "EN"],
        lastUpdated: "2026-02-12 13:45:10",
        blocks:
            [
                {
                    type: "dsrTemplate1.faq.header",
                    enabled: true,
                    title: "Häufig gestellte Fragen",
                    subtitle: "Die Antworten auf Ihre Fragen",
                    backgroundimage: 123
                },
                {
                    type: "dsrTemplate1.faq.search",
                    enabled: true,
                    placeholder: "Fragen durchsuchen...",
                    title: "Finden Sie Antworten"
                },
                {
                    type: "dsrTemplate1.faq.grid",
                    enabled: true,
                    title: "Fragen und Antworten",
                    items: []
                }
            ]
    },

    {
        id: 206,
        slug: "jobs",
        title: "Jobs",
        urls: ["dsr24.de/stellenangebote", "dsr24.de/en/jobs"],
        language: ["DE", "EN"],
        lastUpdated: "2026-02-12 13:45:10",
        blocks:
            [
                {
                    type: "dsrTemplate1.jobs.header",
                    enabled: true,
                    title: "Stellenangebote",
                    subtitle: "Werden Sie Teil unseres Teams",
                    backgroundimage: 123
                },
                {
                    type: "dsrTemplate1.jobs.content",
                    enabled: true,
                    title: "Karriere bei DSR24",
                    paragraph: "Wir suchen motivierte und engagierte Mitarbeiter, die unser Team verstärken möchten.",
                    image: 102
                },
                {
                    type: "dsrTemplate1.jobs.grid",
                    enabled: true,
                    title: "Offene Positionen",
                    items: []
                }
            ]
    },

    {
        id: 207,
        slug: "job-details",
        title: "Job Details",
        urls: ["dsr24.de/stellendetails", "dsr24.de/en/job-details"],
        language: ["DE", "EN"],
        lastUpdated: "2026-02-12 13:45:10",
        blocks:
            [
                {
                    type: "dsrTemplate1.job-details.header",
                    enabled: true,
                    title: "Stellendetails",
                    subtitle: "Jobdetails und Anforderungen",
                    backgroundimage: 123
                },
                {
                    type: "dsrTemplate1.job-details.content",
                    enabled: true,
                    title: "Stellen Details",
                    paragraph: "Detaillierte Informationen zur Position, zu den Anforderungen und zum Unternehmen.",
                    image: 102
                }
            ]
    },

    {
        id: 208,
        slug: "news",
        title: "News",
        urls: ["dsr24.de/nachrichten", "dsr24.de/en/news"],
        language: ["DE", "EN"],
        lastUpdated: "2026-02-12 13:45:10",
        blocks:
            [
                {
                    type: "dsrTemplate1.news.header",
                    enabled: true,
                    title: "Nachrichten",
                    subtitle: "Die neuesten Meldungen von DSR24",
                    backgroundimage: 123
                },
                {
                    type: "dsrTemplate1.news.grid",
                    enabled: true,
                    title: "Neueste Nachrichten",
                    items: []
                }
            ]
    },

    {
        id: 209,
        slug: "news-details",
        title: "News Details",
        urls: ["dsr24.de/nachrichten-details", "dsr24.de/en/news-details"],
        language: ["DE", "EN"],
        lastUpdated: "2026-02-12 13:45:10",
        blocks:
            [
                {
                    type: "dsrTemplate1.news-details.header",
                    enabled: true,
                    title: "Nachrichtendetails",
                    subtitle: "Aktuelle Nachrichten von DSR24",
                    backgroundimage: 123
                },
                {
                    type: "dsrTemplate1.news-details.content",
                    enabled: true,
                    title: "Nachrichteninhalt",
                    paragraph: "Vollständiger Inhalt der Nachricht mit allen wichtigen Details.",
                    image: 102
                }
            ]
    },

    {
        id: 210,
        slug: "services",
        title: "Services",
        urls: ["dsr24.de/dienstleistungen", "dsr24.de/en/services"],
        language: ["DE", "EN"],
        lastUpdated: "2026-02-12 13:45:10",
        blocks:
            [
                {
                    type: "dsrTemplate1.services.header",
                    enabled: true,
                    title: "Unsere Dienstleistungen",
                    subtitle: "Maßgeschneiderte Lösungen für Ihre Bedürfnisse",
                    backgroundimage: 123
                },
                {
                    type: "dsrTemplate1.services.content",
                    enabled: true,
                    title: "Service-Übersicht",
                    paragraph: "DSR24 bietet umfassende Dienstleistungen für alle Stakeholder in der Unfallschadenregulierung.",
                    image: 102
                }
            ]
    },

    {
        id: 211,
        slug: "use-case",
        title: "Use Cases",
        urls: ["dsr24.de/anwendungsfaelle", "dsr24.de/en/use-case"],
        language: ["DE", "EN"],
        lastUpdated: "2026-02-12 13:45:10",
        blocks:
            [
                {
                    type: "dsrTemplate1.use-case.header",
                    enabled: true,
                    title: "Anwendungsfälle",
                    subtitle: "Echte Erfolgsgeschichten von DSR24",
                    backgroundimage: 123
                },
                {
                    type: "dsrTemplate1.use-case.content",
                    enabled: true,
                    title: "Use Case Details",
                    paragraph: "Erfahren Sie, wie DSR24 Kunden bei der Schadenregulierung geholfen hat.",
                    image: 102
                }
            ]
    },

    {
        id: 212,
        slug: "dsrklaert",
        title: "DSRKLAERT",
        urls: ["dsr24.de/dsrklaert", "dsr24.de/en/dsrklaert"],
        language: ["DE", "EN"],
        lastUpdated: "2026-02-12 13:45:10",
        blocks:
            [
                {
                    type: "dsrTemplate1.dsrklaert.header",
                    enabled: true,
                    title: "DSR Klärt auf",
                    subtitle: "Wissen und Informationen rund um Unfallschäden",
                    backgroundimage: 123
                },
                {
                    type: "dsrTemplate1.dsrklaert.grid",
                    enabled: true,
                    title: "Aufklärungsartikel",
                    items: []
                },
                {
                    type: "dsrTemplate1.dsrklaert.calltoaction",
                    enabled: true,
                    title: "Kontaktieren Sie uns",
                    text: "Haben Sie Fragen? Wir helfen Ihnen gerne weiter.",
                    buttoncaption: "Jetzt Kontakt aufnehmen",
                    buttonlink: "/kontakt",
                    buttonnewtab: false
                }
            ]
    }
];








