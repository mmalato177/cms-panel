/* CONTENT */
window.pages = [
    {
        id: 201,
        slug: "homepage",
        title: "Homepage",
        contents: [
            {
                url: "dsr24.de/",
                lang: "DE",
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
                                    buttonlink: "/services?id=werksttat",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 402,
                                    title: "DSR24 für Autovermietungen",
                                    text: "So sind Sie in Sachen Ersatz­fahr­zeug der Ansprech­partner Nr.1.",
                                    buttonlink: "/services?id=autovermietungen",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 403,
                                    title: "DSR24 für Rechtsanwälte",
                                    text: "So einfach sichern Sie sich regel­mäßige Mandate.",
                                    buttonlink: "/services?id=rechtsanwaelte",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 404,
                                    title: "DSR24 für Kfz-Sachverständige",
                                    text: "So erhalten Sie Aufträge schnell und unkompliziert.",
                                    buttonlink: "/services?id=sachverstaendige",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 405,
                                    title: "DSR24 für Abschleppdienste",
                                    text: "So sind Sie bei Bergungsbedarf die erste Wahl.",
                                    buttonlink: "/services?id=abschleppdienste",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 406,
                                    title: "Schnelle Hilfe bei Unfallschäden",
                                    text: "Hier bekommen Sie im Fall eines Unfalls alles aus einer Hand!",
                                    buttonlink: "/services?id=unfallschaeden",
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
                            type: "dsrTemplate1.homepage.stats",
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
                                { icon: 1001, title: "News", buttonlink: "/news", buttonnewtab: true },
                                { icon: 1002, title: "Jobs", buttonlink: "/jobs", buttonnewtab: true },
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
                                    buttonlink: "/use-case?id=1",
                                    buttoncaption: "Geschichte lesen",
                                    buttonnewtab: true
                                },
                                {
                                    image: 903,
                                    name: "Michael Schmidt",
                                    age: "45 Jahre",
                                    job: "Ingenieur",
                                    text: "Schnell, professionell und ohne Stress.Ich kann DSR24 wirklich empfehlen!",
                                    buttonlink: "/use-case?id=2",
                                    buttoncaption: "Geschichte lesen",
                                    buttonnewtab: true
                                },
                                {
                                    image: 904,
                                    name: "Sarah Muller",
                                    age: "28 Jahre",
                                    job: "Lehrerin aus Hamburg",
                                    text: "DSR24 hat sich um alles gekümmert. Ich musste mich um nichts sorgen!.",
                                    buttonlink: "/use-case?id=3",
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
                                { icon: 1003, title: "DsrKlaert", buttonlink: "/dsrklaert", buttonnewtab: true },
                                { icon: 1005, title: "FAQ", buttonlink: "/faq", buttonnewtab: true },
                                { icon: 1006, title: "Blog", buttonlink: "/blog", buttonnewtab: true },
                                { icon: 1007, title: "Downloads", buttonlink: "/download", buttonnewtab: true }
                            ]
                        },
                        {
                            type: "dsrTemplate1.homepage.contact",
                            enabled: true,
                            title: "KONTAKTIEREN SIE UNS",
                            mapiframe: "https://www.google.com/maps/embed?pb=!1m18!...",
                            addresslabel: "Standort:",
                            iconaddress: 1201,
                            address: "Segelhorster Str. 2, 31840 Hessisch Oldendorf, Germany",
                            emailaddress: 1202,
                            emaillabel: "Email:",
                            email: "info@dsr24.de",
                            phoneicon: 1203,
                            phonelabel: "Anrufen:",
                            phone: "0800 - 321 24 24",
                            formtitle: "Kontaktformular",
                            formbuttoncaption: "Nachricht senden",
                            formsuccessmessage: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet."
                        }
                    ]
            },
            {
                url: "dsr24.de/en/",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks:
                    [
                        {
                            type: "dsrTemplate1.homepage.hero",
                            enabled: true,
                            title: "Did you have an accident that wasn't your fault?",
                            subtitle: "DSR24 helps you for free!",
                            backgroundimage: 123,
                            overlayopacity: 0.6,
                            buttoncaption: "Report damage case",
                            buttonlink: "/report-damage",
                            buttonnewtab: true
                        },
                        {
                            type: "dsrTemplate1.homepage.about-us",
                            enabled: true,
                            title: "Your reliable partner for accident damages",
                            subtitle: "Professional damage settlement with years of experience",
                            bulletpoints: [
                                "Free consultation and support",
                                "Fast and straightforward processing",
                                "Maximum compensation for you",
                            ],
                            paragraph: "With DSR24, you're in good hands. We take care of all aspects of your damage case and ensure you get what you're entitled to.",
                            image: 102,
                            buttoncaption: "Learn more about us",
                            buttonlink: "/about-us",
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
                                    title: "Free Consultation",
                                    text: "We provide comprehensive and free advice on all questions related to your damage case"
                                },
                                {
                                    icon: "fa-solid fa-gem",
                                    title: "Quick Processing",
                                    text: "With our years of experience, we handle your damage case quickly and efficiently."
                                },
                                {
                                    icon: "fa-solid fa-image",
                                    title: "Maximum Compensation",
                                    text: "We use all legal options to ensure you get the maximum compensation"
                                },
                                {
                                    icon: "fa-solid fa-shield",
                                    title: "Personal Support",
                                    text: "You have a dedicated contact person who guides you through the entire process"
                                }
                            ]
                        },
                        {
                            type: "dsrTemplate1.homepage.services",
                            title: "Our Services",
                            subtitle: "Services",
                            enabled: true,
                            items: [
                                {
                                    icon: 401,
                                    title: "DSR24 for Workshops",
                                    text: "The ideal line for your successful damage management.",
                                    buttonlink: "/services?id=workshops",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 402,
                                    title: "DSR24 for Car Rental",
                                    text: "Be the first contact for replacement vehicle needs.",
                                    buttonlink: "/services?id=car-rental",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 403,
                                    title: "DSR24 for Lawyers",
                                    text: "Easily secure regular client mandates.",
                                    buttonlink: "/services?id=lawyers",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 404,
                                    title: "DSR24 for Appraisers",
                                    text: "Get assignments quickly and easily.",
                                    buttonlink: "/services?id=appraisers",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 405,
                                    title: "DSR24 for Towing Services",
                                    text: "Be the first choice for recovery needs.",
                                    buttonlink: "/services?id=towing",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 406,
                                    title: "Fast Help for Accident Damage",
                                    text: "Get everything from one source in case of an accident!",
                                    buttonlink: "/services?id=accident-damage",
                                    buttonnewtab: true
                                }

                            ]

                        },
                        {
                            type: "dsrTemplate1.homepage.call_to_action",
                            enabled: true,
                            title: "Call to Action",
                            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            icon: "fa-solid fa-bullhorn ",
                            buttoncaption: "Get Started Now",
                            buttonlink: "/contact",
                            buttonnewtab: false
                        },

                        {
                            type: "dsrTemplate1.homepage.portfolio",
                            enabled: true,
                            subtitle: "Portfolio",
                            title: "Our Portfolio",

                            tabs: [
                                {
                                    label: "All",
                                    items: [
                                        { image: 701, title: "Project 1" },
                                        { image: 702, title: "Project 2" },
                                        { image: 703, title: "Project 3" },
                                        { image: 704, title: "Project 4" },
                                        { image: 705, title: "Project 5" },
                                        { image: 706, title: "Project 6" },
                                        { image: 707, title: "Project 7" },
                                        { image: 708, title: "Project 8" }
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
                                    label: "Map",
                                    items: [
                                        { image: 704, title: "Map 4" },
                                        { image: 706, title: "Map 6" }
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
                            heading: "DSR24 by the Numbers",
                            paragraph: "Our successes speak for themselves",
                            image: 102,
                            bulletpoints: [
                                {
                                    icon: "fa-regular fa-face-smile",
                                    number: "65",
                                    label: "Satisfied Customers -"
                                },
                                {
                                    icon: "fa-regular fa-newspaper",
                                    number: "85",
                                    label: "Projects -"
                                },
                                {
                                    icon: "fa-regular fa-clock",
                                    number: "35",
                                    label: "Years of Experience"
                                },
                                {
                                    icon: "fa-solid fa-trophy",
                                    number: "20",
                                    label: "Awards"
                                },
                            ],
                        },
                        {
                            type: "dsrTemplate1.homepage.team",
                            enabled: true,
                            title: "Our Team",
                            members: [
                                { image: 801, name: "Patrick", role: "CEO" },
                                { image: 802, name: "Katharina", role: "Manager" },
                                { image: 803, name: "Nadine", role: "Consultant" }
                            ]
                        },

                        {
                            type: "dsrTemplate1.homepage.newsandjobs",
                            enabled: true,
                            title: "How it all began",
                            subtitle: "How it all began",
                            items: [
                                { icon: 1001, title: "News", buttonlink: "/news", buttonnewtab: true },
                                { icon: 1002, title: "Jobs", buttonlink: "/jobs", buttonnewtab: true },
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
                                    age: "32 years",
                                    job: "Doctor",
                                    text: "DSR24 helped me get €2,500 from the third-party insurance!",
                                    buttonlink: "/use-case?id=1",
                                    buttoncaption: "Read story",
                                    buttonnewtab: true
                                },
                                {
                                    image: 903,
                                    name: "Michael Schmidt",
                                    age: "45 years",
                                    job: "Engineer",
                                    text: "Quick, professional, and stress-free. I can really recommend DSR24!",
                                    buttonlink: "/use-case?id=2",
                                    buttoncaption: "Read story",
                                    buttonnewtab: true
                                },
                                {
                                    image: 904,
                                    name: "Sarah Muller",
                                    age: "28 years",
                                    job: "Teacher from Hamburg",
                                    text: "DSR24 took care of everything. I didn't have to worry about anything!",
                                    buttonlink: "/use-case?id=3",
                                    buttoncaption: "Read story",
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
                                { icon: 1003, title: "DSR Clarifies", buttonlink: "/dsr-clarifies", buttonnewtab: true },
                                { icon: 1005, title: "FAQ", buttonlink: "/faq", buttonnewtab: true },
                                { icon: 1006, title: "Blog", buttonlink: "/blog", buttonnewtab: true },
                                { icon: 1007, title: "Downloads", buttonlink: "/download", buttonnewtab: true }
                            ]
                        },
                        {
                            type: "dsrTemplate1.homepage.contact",
                            enabled: true,
                            title: "CONTACT US",
                            mapiframe: "https://www.google.com/maps/embed?pb=!1m18!...",
                            addresslabel: "Location:",
                            iconaddress: 1201,
                            address: "Segelhorster Str. 2, 31840 Hessisch Oldendorf, Germany",
                            emailaddress: 1202,
                            emaillabel: "Email:",
                            email: "info@dsr24.de",
                            phoneicon: 1203,
                            phonelabel: "Call:",
                            phone: "0800 - 321 24 24",
                            formtitle: "Contact Form",
                            formbuttoncaption: "Send Message",
                            formsuccessmessage: "Thank you! Your message has been sent successfully."
                        }
                    ]
            }
        ]

    },

    {
        id: 202,
        slug: "about-us",
        title: "About Us",
        contents:
            [

                {
                    url: "dsr24.de/ueber-uns",
                    lang: "DE",
                    lastUpdated: "2026-02-12 13:45:10",
                    blocks: [
                        {
                            type: "dsrTemplate1.about-us.header",
                            enabled: true,
                            kicker: "#",
                            title: "Über uns",
                            subtitle_1: "Lerne mehr über DSR24",
                            subtitle_2: "Ihr zuverlässiger Partner bei Unfallschäden",
                            text: "Klicken Sie auf eine Karte, um die Erklärung zu sehen"
                        },
                        {
                            type: "dsrTemplate1.about-us.text_image",
                            enabled: true,
                            subtitle: "WIR FÜR EUCH",
                            title: "Lerne uns besser kennen",
                            paragraph: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupida tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            image: 102
                        },
                        {
                            type: "dsrTemplate1.about-us.video",
                            enabled: true,
                            subtitle: "DSR24 VORSTELLUNGSVIDEO",
                            title: "Unser Unternehmen im Überblick",
                            poster: 0,
                            videoId: 700
                        },
                        {
                            type: "dsrTemplate1.about-us.process_section",
                            enabled: true,
                            subtitle: "ABRECHNUNGSPROZESS",
                            title: "Ablauf der Schadenregulierung",
                            items: [
                                { title: "STEP 1", text: "Du meldest deinen Schaden bei uns und erhältst eine Bestätigungs-E-Mail." },
                                { title: "STEP 2", text: "Wir prüfen deinen Fall und melden uns, wenn Informationen fehlen sollten. Solltest du einen Mietwagen brauchen, führen wir mit dir ein Informationsgespräch." },
                                { title: "STEP 3", text: "Der Sachverständige meldet sich i. d. R. binnen 48 Std. bei dir, um dein Fahrzeug zu begutachten. Sollten wir aufgrund einer geringen Schadenhöhe nur einen Kostenvoranschlag einer Werkstatt benötigen, melden wir uns bei dir." },
                                { title: "STEP 4", text: "Wir ermitteln die Versicherung des Unfallgegners und unsere Rechtsabteilung legitimiert sich ggü. dieser als dein Rechtsbeistand.", readMore: true },
                                { title: "STEP 5", text: "Nach Vorliegen des Gutachtens beziffert unsere Rechtsabteilung deine Schadenersatzansprüche ggü. der gegnerischen Haftpflichtversicherung. Dies hat zwischen 4-8 Wochen Zeit für die Bearbeitung." },
                                { title: "STEP 6", text: "Nach Ablauf der Zahlungsfrist erinnern wir die Versicherung. Evtl. benötigt die Versicherung noch Nachweise (Zeugen, Bilder/Videos oder die E-Akte (Herausgabe durch Behörden kann bis zu 8 Wochen dauern)), um die Haftung bestätigen zu können." },
                                { title: "STEP 7", text: "Haftungsbestätigung der gegnerischen Versicherung und fiktive Zahlung der Schadenssumme oder Reparatur deines Fahrzeugs. Jede Abrechnung der gegnerischen Versicherung wird von uns geprüft (Quote, Kürzung o. Ä.) und Rücksprache mit dir gehalten." },
                            ]
                        }
                    ]
                },
                {
                    url: "dsr24.de/en/about-us",
                    lang: "EN",
                    lastUpdated: "2026-02-12 13:45:10",
                    blocks: [
                        {
                            type: "dsrTemplate1.about-us.header",
                            enabled: true,
                            kicker: "#",
                            title: "About us",
                            subtitle_1: "Learn more about DSR24",
                            subtitle_2: "Your reliable partner for accident claims",
                            text: "Click on a card to view the explanation"
                        },
                        {
                            type: "dsrTemplate1.about-us.text_image",
                            enabled: true,
                            subtitle: "WE’RE HERE FOR YOU",
                            title: "Get to know us better",
                            paragraph:
                                "DSR24 has been a trusted partner in accident damage and claims management for over 35 years. We support you from the first report to the final settlement—clear, fast, and always with your best interest in mind.",
                            image: 102
                        },
                        {
                            type: "dsrTemplate1.about-us.video",
                            enabled: true,
                            subtitle: "DSR24 INTRODUCTION VIDEO",
                            title: "Our company at a glance",
                            poster: 0,
                            videoId: 700
                        },
                        {
                            type: "dsrTemplate1.about-us.process_section",
                            enabled: true,
                            subtitle: "SETTLEMENT PROCESS",
                            title: "How claims settlement works",
                            items: [
                                {
                                    title: "STEP 1",
                                    text: "You report your claim to us and receive a confirmation email."
                                },
                                {
                                    title: "STEP 2",
                                    text: "We review your case and contact you if any information is missing. If you need a rental car, we’ll discuss the next steps with you."
                                },
                                {
                                    title: "STEP 3",
                                    text: "An independent assessor usually contacts you within 48 hours to inspect your vehicle. If the damage is minor and we only need an estimate from a workshop, we will let you know."
                                },
                                {
                                    title: "STEP 4",
                                    text: "We identify the other party’s insurer and our legal department registers as your legal representative.",
                                    readMore: true
                                },
                                {
                                    title: "STEP 5",
                                    text: "Once the assessment is available, our legal team calculates your compensation claims against the opposing liability insurer. Processing typically takes 4–8 weeks."
                                },
                                {
                                    title: "STEP 6",
                                    text: "After the payment deadline, we send a reminder to the insurer. Additional proof may be required (witnesses, photos/videos, or the official case file—requests to authorities can take up to 8 weeks) to confirm liability."
                                },
                                {
                                    title: "STEP 7",
                                    text: "Once liability is confirmed, you receive payment of the assessed damage amount (settlement) or the repair costs are covered. We review every insurer statement (e.g., liability split, reductions) and coordinate with you."
                                }
                            ]
                        }
                    ]
                }

            ]
    },

    {
        id: 203,
        slug: "blog",
        title: "Blog",
        contents: [
            {
                url: "dsr24.de/blog",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.blog.header",
                        enabled: true,
                        kicker: "#",
                        title: "Blog",
                        subtitle_1: "Aktuelle Tipps und Neuigkeiten rund um Unfallschäden",
                        text: "Klicken Sie auf eine Karte, um die Erklärung zu sehen",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.blog.search_filters",
                        enabled: true,
                        placeholder: "Suche nach Thema, Stichwort...",
                        filters: [
                            { key: "all", label: "Alle" },
                            { key: "news", label: "News" },
                            { key: "tips", label: "Tipps & Tricks" },
                            { key: "law", label: "Recht & Versicherung" },
                            { key: "guides", label: "Ratgeber" }
                        ],
                        activeFilter: "all"
                    },
                    {
                        type: "dsrTemplate1.blog.grid",
                        enabled: true,
                        itemsPerRow: 3,
                        items: [
                            {
                                id: 1,
                                categoryKey: "tips",
                                categoryLabel: "Tipps & Tricks",
                                date: "2026-01-28",
                                readTime: "5 Min",
                                title: "5 wichtige Schritte nach einem Autounfall",
                                excerpt: "Was Sie direkt nach dem Unfall beachten sollten, um Ihre Ansprüche zu sichern.",
                                buttoncaption: "Weiterlesen",
                                buttonlink: "blog-details.html?id=5-schritte-nach-unfall",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 2,
                                categoryKey: "law",
                                categoryLabel: "Recht & Versicherung",
                                date: "2026-01-25",
                                readTime: "8 Min",
                                title: "Neue Regelungen zur Schadenregulierung 2026",
                                excerpt: "Welche Änderungen gibt es – und was bedeutet das für Geschädigte?",
                                buttoncaption: "Weiterlesen",
                                buttonlink: "blog-details.html?id=regelungen-2026",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 3,
                                categoryKey: "guides",
                                categoryLabel: "Ratgeber",
                                date: "2026-01-22",
                                readTime: "6 Min",
                                title: "Gutachten verstehen: Begriffe und Werte erklärt",
                                excerpt: "Was bedeutet Wiederbeschaffungswert, Restwert und merkantiler Minderwert?",
                                buttoncaption: "Weiterlesen",
                                buttonlink: "blog-details.html?id=gutachten-verstehen",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 4,
                                categoryKey: "news",
                                categoryLabel: "News",
                                date: "2026-01-20",
                                readTime: "3 Min",
                                title: "DSR24 erweitert Partnernetzwerk",
                                excerpt: "Mehr Werkstätten, Gutachter und Anwälte – für noch schnellere Abwicklung.",
                                buttoncaption: "Weiterlesen",
                                buttonlink: "blog-details.html?id=partnernetzwerk",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 5,
                                categoryKey: "tips",
                                categoryLabel: "Tipps & Tricks",
                                date: "2026-01-18",
                                readTime: "4 Min",
                                title: "Mietwagen: Das sollten Sie wissen",
                                excerpt: "Wann besteht Anspruch und wie vermeiden Sie Kostenfallen?",
                                buttoncaption: "Weiterlesen",
                                buttonlink: "blog-details.html?id=mietwagen-wissen",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 6,
                                categoryKey: "law",
                                categoryLabel: "Recht & Versicherung",
                                date: "2026-01-15",
                                readTime: "7 Min",
                                title: "Schmerzensgeld: Berechnung und Ansprüche",
                                excerpt: "Welche Faktoren zählen – und wie setzt man Ansprüche korrekt durch?",
                                buttoncaption: "Weiterlesen",
                                buttonlink: "blog-details.html?id=schmerzensgeld",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 7,
                                categoryKey: "guides",
                                categoryLabel: "Ratgeber",
                                date: "2026-01-12",
                                readTime: "5 Min",
                                title: "Die richtige Werkstatt finden",
                                excerpt: "Vertragswerkstatt oder freie Werkstatt? Worauf es wirklich ankommt.",
                                buttoncaption: "Weiterlesen",
                                buttonlink: "blog-details.html?id=werkstatt-finden",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 8,
                                categoryKey: "tips",
                                categoryLabel: "Tipps & Tricks",
                                date: "2026-01-10",
                                readTime: "4 Min",
                                title: "Unfallstelle richtig dokumentieren",
                                excerpt: "Fotos, Daten, Zeugen: so sichern Sie Beweise für die Regulierung.",
                                buttoncaption: "Weiterlesen",
                                buttonlink: "blog-details.html?id=unfallstelle-dokumentieren",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 9,
                                categoryKey: "news",
                                categoryLabel: "News",
                                date: "2026-01-08",
                                readTime: "6 Min",
                                title: "Digitalisierung in der Schadenbearbeitung",
                                excerpt: "Wie moderne Tools die Prozesse beschleunigen und transparenter machen.",
                                buttoncaption: "Weiterlesen",
                                buttonlink: "blog-details.html?id=digitalisierung",
                                buttonnewtab: false,
                                image: 0
                            }
                        ]
                    }
                ]
            },

            {
                url: "dsr24.de/en/blog",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.blog.header",
                        enabled: true,
                        kicker: "#",
                        title: "Blog",
                        subtitle_1: "Latest tips and updates about accident claims",
                        text: "Click a card to view the explanation",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.blog.search_filters",
                        enabled: true,
                        placeholder: "Search by topic, keyword...",
                        filters: [
                            { key: "all", label: "All" },
                            { key: "news", label: "News" },
                            { key: "tips", label: "Tips & Tricks" },
                            { key: "law", label: "Law & Insurance" },
                            { key: "guides", label: "Guides" }
                        ],
                        activeFilter: "all"
                    },
                    {
                        type: "dsrTemplate1.blog.grid",
                        enabled: true,
                        itemsPerRow: 3,
                        items: [
                            {
                                id: 1,
                                categoryKey: "tips",
                                categoryLabel: "Tips & Tricks",
                                date: "2026-01-28",
                                readTime: "5 min",
                                title: "5 important steps after a car accident",
                                excerpt: "What to do right after an accident to protect your claims.",
                                buttoncaption: "Read more",
                                buttonlink: "blog-details.html?id=5-steps-after-accident",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 2,
                                categoryKey: "law",
                                categoryLabel: "Law & Insurance",
                                date: "2026-01-25",
                                readTime: "8 min",
                                title: "New claim settlement rules for 2026",
                                excerpt: "What changed and what it means for claimants.",
                                buttoncaption: "Read more",
                                buttonlink: "blog-details.html?id=rules-2026",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 3,
                                categoryKey: "guides",
                                categoryLabel: "Guides",
                                date: "2026-01-22",
                                readTime: "6 min",
                                title: "Understanding expert reports: key terms explained",
                                excerpt: "Replacement value, residual value, diminished value — explained.",
                                buttoncaption: "Read more",
                                buttonlink: "blog-details.html?id=understanding-reports",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 4,
                                categoryKey: "news",
                                categoryLabel: "News",
                                date: "2026-01-20",
                                readTime: "3 min",
                                title: "DSR24 expands partner network",
                                excerpt: "More workshops and experts for faster processing.",
                                buttoncaption: "Read more",
                                buttonlink: "blog-details.html?id=partner-network",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 5,
                                categoryKey: "tips",
                                categoryLabel: "Tips & Tricks",
                                date: "2026-01-18",
                                readTime: "4 min",
                                title: "Rental car: what you need to know",
                                excerpt: "When you’re entitled to a replacement car and how to avoid pitfalls.",
                                buttoncaption: "Read more",
                                buttonlink: "blog-details.html?id=rental-car",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 6,
                                categoryKey: "law",
                                categoryLabel: "Law & Insurance",
                                date: "2026-01-15",
                                readTime: "7 min",
                                title: "Pain and suffering: calculation and claims",
                                excerpt: "What matters and how claims are typically handled.",
                                buttoncaption: "Read more",
                                buttonlink: "blog-details.html?id=pain-suffering",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 7,
                                categoryKey: "guides",
                                categoryLabel: "Guides",
                                date: "2026-01-12",
                                readTime: "5 min",
                                title: "Finding the right workshop",
                                excerpt: "Authorized vs independent repair shops — what to consider.",
                                buttoncaption: "Read more",
                                buttonlink: "blog-details.html?id=right-workshop",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 8,
                                categoryKey: "tips",
                                categoryLabel: "Tips & Tricks",
                                date: "2026-01-10",
                                readTime: "4 min",
                                title: "Properly documenting the accident scene",
                                excerpt: "Photos, details, witnesses — secure your evidence.",
                                buttoncaption: "Read more",
                                buttonlink: "blog-details.html?id=document-scene",
                                buttonnewtab: false,
                                image: 0
                            },
                            {
                                id: 9,
                                categoryKey: "news",
                                categoryLabel: "News",
                                date: "2026-01-08",
                                readTime: "6 min",
                                title: "Digitalization of claim processing",
                                excerpt: "How modern tools speed up and improve transparency.",
                                buttoncaption: "Read more",
                                buttonlink: "blog-details.html?id=digitalization",
                                buttonnewtab: false,
                                image: 0
                            }
                        ]
                    }
                ]
            }
        ]
    },

    {
        id: 204,
        slug: "downloads",
        title: "Downloads",
        contents: [
            {
                url: "dsr24.de/downloads",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.downloads.header",
                        enabled: true,
                        kicker: "#",
                        title: "Downloads",
                        subtitle: "Nützliche Dokumente und Formulare für Sie",
                        text: "Laden Sie wichtige Dokumente direkt herunter.",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.downloads.grid",
                        enabled: true,
                        itemsPerRow: 3,
                        items: [
                            {
                                id: 1,
                                title: "Unfallbericht Formular",
                                text: "Europäischer Unfallbericht zum Ausfüllen.",
                                fileType: "PDF",
                                fileSize: "2.3 MB",
                                downloadUrl: "/downloads/unfallbericht.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 2,
                                title: "Checkliste Unfallstelle",
                                text: "Was ist direkt am Unfallort zu beachten?",
                                fileType: "PDF",
                                fileSize: "1.1 MB",
                                downloadUrl: "/downloads/checkliste-unfallstelle.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 3,
                                title: "Vollmacht zur Schadenregulierung",
                                text: "Vollmacht für die Abwicklung über DSR24.",
                                fileType: "PDF",
                                fileSize: "850 KB",
                                downloadUrl: "/downloads/vollmacht.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 4,
                                title: "Informationen zum Mietwagen",
                                text: "Wichtige Infos zum Ersatzfahrzeug.",
                                fileType: "PDF",
                                fileSize: "1.5 MB",
                                downloadUrl: "/downloads/mietwagen-info.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 5,
                                title: "Leitfaden Gutachten",
                                text: "Gutachten richtig verstehen – kompakt erklärt.",
                                fileType: "PDF",
                                fileSize: "2.8 MB",
                                downloadUrl: "/downloads/leitfaden-gutachten.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 6,
                                title: "Versicherungsleitfaden",
                                text: "Die wichtigsten Fragen rund um Versicherungen.",
                                fileType: "PDF",
                                fileSize: "1.9 MB",
                                downloadUrl: "/downloads/versicherungsleitfaden.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 7,
                                title: "Schadensmeldung Formular",
                                text: "Schnelle Schadensmeldung – einfach ausfüllen.",
                                fileType: "PDF",
                                fileSize: "1.2 MB",
                                downloadUrl: "/downloads/schadensmeldung.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 8,
                                title: "Rechte nach einem Unfall",
                                text: "Ihre Ansprüche im Überblick.",
                                fileType: "PDF",
                                fileSize: "2.1 MB",
                                downloadUrl: "/downloads/rechte-nach-unfall.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 9,
                                title: "Versicherungsbrief Muster",
                                text: "Vorlage zur Korrespondenz mit der Versicherung.",
                                fileType: "PDF",
                                fileSize: "750 KB",
                                downloadUrl: "/downloads/versicherungsbrief-muster.pdf",
                                icon: "pdf"
                            }
                        ]
                    },
                    {
                        type: "dsrTemplate1.downloads.helpbox",
                        enabled: true,
                        title: "Brauchen Sie Hilfe?",
                        text: "Falls Sie Fragen zu den Dokumenten haben oder Unterstützung beim Ausfüllen benötigen, kontaktieren Sie uns gerne. Unser Team steht Ihnen zur Verfügung!",
                        buttoncaption: "Jetzt Kontakt aufnehmen",
                        buttonlink: "/kontakt",
                        buttonnewtab: false
                    }
                ]
            },

            {
                url: "dsr24.de/en/downloads",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.downloads.header",
                        enabled: true,
                        kicker: "#",
                        title: "Downloads",
                        subtitle: "Useful documents and forms for you",
                        text: "Download important documents instantly.",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.downloads.grid",
                        enabled: true,
                        itemsPerRow: 3,
                        items: [
                            {
                                id: 1,
                                title: "Accident Report Form",
                                text: "European accident report form to complete.",
                                fileType: "PDF",
                                fileSize: "2.3 MB",
                                downloadUrl: "/downloads/accident-report.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 2,
                                title: "Accident Scene Checklist",
                                text: "What to do at the accident scene.",
                                fileType: "PDF",
                                fileSize: "1.1 MB",
                                downloadUrl: "/downloads/accident-scene-checklist.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 3,
                                title: "Power of Attorney",
                                text: "Authorization for DSR24 claim settlement.",
                                fileType: "PDF",
                                fileSize: "850 KB",
                                downloadUrl: "/downloads/power-of-attorney.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 4,
                                title: "Rental Car Information",
                                text: "Key information about replacement vehicles.",
                                fileType: "PDF",
                                fileSize: "1.5 MB",
                                downloadUrl: "/downloads/rental-car-info.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 5,
                                title: "Expert Report Guide",
                                text: "Understand expert reports correctly.",
                                fileType: "PDF",
                                fileSize: "2.8 MB",
                                downloadUrl: "/downloads/expert-report-guide.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 6,
                                title: "Insurance Guide",
                                text: "Important questions about insurance.",
                                fileType: "PDF",
                                fileSize: "1.9 MB",
                                downloadUrl: "/downloads/insurance-guide.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 7,
                                title: "Damage Report Form",
                                text: "Quick damage report – easy to fill out.",
                                fileType: "PDF",
                                fileSize: "1.2 MB",
                                downloadUrl: "/downloads/damage-report.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 8,
                                title: "Your Rights After an Accident",
                                text: "Overview of your claims and rights.",
                                fileType: "PDF",
                                fileSize: "2.1 MB",
                                downloadUrl: "/downloads/rights-after-accident.pdf",
                                icon: "pdf"
                            },
                            {
                                id: 9,
                                title: "Insurance Letter Template",
                                text: "Template for communication with insurers.",
                                fileType: "PDF",
                                fileSize: "750 KB",
                                downloadUrl: "/downloads/insurance-letter-template.pdf",
                                icon: "pdf"
                            }
                        ]
                    },
                    {
                        type: "dsrTemplate1.downloads.helpbox",
                        enabled: true,
                        title: "Need help?",
                        text: "If you have questions about these documents or need help filling them out, feel free to contact us. Our team is here for you!",
                        buttoncaption: "Contact us",
                        buttonlink: "/contact",
                        buttonnewtab: false
                    }
                ]
            }
        ]
    },

    {
        id: 205,
        slug: "faq",
        title: "FAQ",
        contents: [
            {
                url: "dsr24.de/faq.html",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.faq.header",
                        enabled: true,
                        kicker: "#",
                        title: "FAQ",
                        subtitle_1: "Häufig gestellte Fragen – Schnell und einfach erklärt",
                        text: "Klicken Sie auf eine Karte, um die Erklärung zu sehen"
                    },
                    {
                        type: "dsrTemplate1.faq.search_filters",
                        enabled: true,
                        placeholder: "Suche nach Thema, Stichwort...",
                        filters: [
                            { key: "all", label: "Alle" },
                            { key: "accident-claim", label: "Unfallschaden" },
                            { key: "insurance", label: "Versicherung" },
                            { key: "expert-opinion", label: "Gutachten" },
                            { key: "workshop", label: "Werkstatt" },
                            { key: "legal", label: "Rechtliches" }
                        ],
                        activeFilter: "all"
                    },
                    {
                        type: "dsrTemplate1.faq.grid",
                        enabled: false,
                        itemsPerRow: 3,
                        items: [
                            {
                                id: 1,
                                filterKey: "accident-claim",
                                title: "Was tun nach einem Unfall?",
                                text: "Die wichtigsten Schritte direkt nach einem Verkehrsunfall",
                                buttoncaption: "Mehr erfahren",
                                buttonlink: "faq-details.html?id=after-accident",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 2,
                                filterKey: "insurance",
                                title: "Welche Versicherung zahlt?",
                                text: "Zuständigkeiten und Leistungen der verschiedenen Versicherungen",
                                buttoncaption: "Mehr erfahren",
                                buttonlink: "faq-details.html?id=which-insurance",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 3,
                                filterKey: "expert-opinion",
                                title: "Brauche ich ein Gutachten?",
                                text: "Wann eine Schadensbewertung durch einen Experten erforderlich ist",
                                buttoncaption: "Mehr erfahren",
                                buttonlink: "faq-details.html?id=expert-opinion",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 4,
                                filterKey: "workshop",
                                title: "Freie Werkstattwahl",
                                text: "Ihre Rechte bei der Wahl einer Reparaturwerkstatt",
                                buttoncaption: "Mehr erfahren",
                                buttonlink: "faq-details.html?id=free-workshop-choice",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 5,
                                filterKey: "accident-claim",
                                title: "Unfallbericht richtig ausfüllen",
                                text: "So dokumentieren Sie den Unfall korrekt",
                                buttoncaption: "Mehr erfahren",
                                buttonlink: "faq-details.html?id=accident-report",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 6,
                                filterKey: "legal",
                                title: "Wer übernimmt die Anwaltskosten?",
                                text: "Kostenübernahme bei rechtlicher Unterstützung",
                                buttoncaption: "Mehr erfahren",
                                buttonlink: "faq-details.html?id=lawyer-costs",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 7,
                                filterKey: "insurance",
                                title: "Anspruch auf Mietwagen",
                                text: "Wann haben Sie Anspruch auf ein Ersatzfahrzeug?",
                                buttoncaption: "Mehr erfahren",
                                buttonlink: "faq-details.html?id=rental-car",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 8,
                                filterKey: "expert-opinion",
                                title: "Gutachten oder Kostenvoranschlag?",
                                text: "Die Unterschiede und wann welche Variante sinnvoll ist",
                                buttoncaption: "Mehr erfahren",
                                buttonlink: "faq-details.html?id=expert-vs-estimate",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 9,
                                filterKey: "accident-claim",
                                title: "Totalschaden – was nun?",
                                text: "Ihre Möglichkeiten bei einem wirtschaftlichen Totalschaden",
                                buttoncaption: "Mehr erfahren",
                                buttonlink: "faq-details.html?id=total-loss",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 10,
                                filterKey: "legal",
                                title: "Schmerzensgeld",
                                text: "Ansprüche bei Personenschäden",
                                buttoncaption: "Mehr erfahren",
                                buttonlink: "faq-details.html?id=pain-suffering",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 11,
                                filterKey: "workshop",
                                title: "Reparaturdauer",
                                text: "Wie lange dauert eine Schadensreparatur?",
                                buttoncaption: "Mehr erfahren",
                                buttonlink: "faq-details.html?id=repair-duration",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 12,
                                filterKey: "insurance",
                                title: "Schadenfreiheitsklasse",
                                text: "Auswirkungen eines Unfalls auf Ihre SF-Klasse",
                                buttoncaption: "Mehr erfahren",
                                buttonlink: "faq-details.html?id=no-claims-bonus",
                                buttonnewtab: false,
                                icon: "play"
                            }
                        ]
                    }
                ]
            },
            {
                url: "dsr24.de/en/faq.html",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.faq.header",
                        enabled: true,
                        kicker: "#",
                        title: "FAQ",
                        subtitle_1: "Frequently asked questions - quick and easy explained",
                        text: "Click on a card to see the explanation",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.faq.search_filters",
                        enabled: true,
                        placeholder: "Search by topic, keyword...",
                        filters: [
                            { key: "all", label: "All" },
                            { key: "accident-claim", label: "Accident Claim" },
                            { key: "insurance", label: "Insurance" },
                            { key: "expert-opinion", label: "Expert Opinion" },
                            { key: "workshop", label: "Workshop" },
                            { key: "legal", label: "Legal" }
                        ],
                        activeFilter: "all"
                    },
                    {
                        type: "dsrTemplate1.faq.grid",
                        enabled: true,
                        itemsPerRow: 3,
                        items: [
                            {
                                id: 1,
                                filterKey: "accident-claim",
                                title: "What to do after an accident?",
                                text: "The most important steps directly after a traffic accident",
                                buttoncaption: "Learn more",
                                buttonlink: "faq-details.html?id=after-accident",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 2,
                                filterKey: "insurance",
                                title: "Which insurance pays?",
                                text: "Responsibility and benefits of different insurance companies",
                                buttoncaption: "Learn more",
                                buttonlink: "faq-details.html?id=which-insurance",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 3,
                                filterKey: "expert-opinion",
                                title: "Do I need an expert opinion?",
                                text: "When a damage assessment is required",
                                buttoncaption: "Learn more",
                                buttonlink: "faq-details.html?id=expert-opinion",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 4,
                                filterKey: "workshop",
                                title: "Free choice of workshop",
                                text: "Your rights when choosing a repair shop",
                                buttoncaption: "Learn more",
                                buttonlink: "faq-details.html?id=free-workshop-choice",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 5,
                                filterKey: "accident-claim",
                                title: "Correctly filling out accident report",
                                text: "How to document the accident correctly",
                                buttoncaption: "Learn more",
                                buttonlink: "faq-details.html?id=accident-report",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 6,
                                filterKey: "legal",
                                title: "Who covers lawyer costs?",
                                text: "Cost coverage for legal support",
                                buttoncaption: "Learn more",
                                buttonlink: "faq-details.html?id=lawyer-costs",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 7,
                                filterKey: "insurance",
                                title: "Rental car entitlement",
                                text: "When are you entitled to a replacement vehicle?",
                                buttoncaption: "Learn more",
                                buttonlink: "faq-details.html?id=rental-car",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 8,
                                filterKey: "expert-opinion",
                                title: "Expert or cost estimate?",
                                text: "The differences and when what is needed",
                                buttoncaption: "Learn more",
                                buttonlink: "faq-details.html?id=expert-vs-estimate",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 9,
                                filterKey: "accident-claim",
                                title: "Total loss - what now?",
                                text: "Your options in case of economic total loss",
                                buttoncaption: "Learn more",
                                buttonlink: "faq-details.html?id=total-loss",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 10,
                                filterKey: "legal",
                                title: "Pain and suffering compensation",
                                text: "Claims for personal injuries",
                                buttoncaption: "Learn more",
                                buttonlink: "faq-details.html?id=pain-suffering",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 11,
                                filterKey: "workshop",
                                title: "Repair duration",
                                text: "How long does a damage repair take?",
                                buttoncaption: "Learn more",
                                buttonlink: "faq-details.html?id=repair-duration",
                                buttonnewtab: false,
                                icon: "play"
                            },
                            {
                                id: 12,
                                filterKey: "insurance",
                                title: "No-claims bonus",
                                text: "Impact of an accident on your SF class",
                                buttoncaption: "Learn more",
                                buttonlink: "faq-details.html?id=no-claims-bonus",
                                buttonnewtab: false,
                                icon: "play"
                            }
                        ]
                    }
                ]
            }
        ]
    },

    {
        id: 206,
        slug: "jobs",
        title: "Jobs",
        contents: [
            {
                url: "dsr24.de/arbeitsplaetze.html",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.arbeitsplaetze.header",
                        enabled: true,
                        kicker: "#",
                        title: "Jobs",
                        subtitle: "Deine Karriere bei DSR24 beginnt hier."
                    },
                    {
                        type: "dsrTemplate1.arbeitsplaetze.text_image",
                        enabled: true,
                        subtitle: "JOB TITLE",
                        title: "Arbeit dei DSR24",
                        paragraph:
                            "DSR24 steht für verlässliche Prozesse, starke Teams und echte Verantwortung. Bei uns arbeitest du an Lösungen, die Menschen nach einem Unfall wirklich weiterhelfen.\n\nOb Technik, Operations, Legal oder Marketing: Wir suchen motivierte Menschen, die mitdenken und gemeinsam wachsen wollen.",
                        image: 102
                    },
                    {
                        type: "dsrTemplate1.arbeitsplaetze.grid",
                        enabled: true,
                        subtitle: "OFFENE STELLEN",
                        title: "Wir stellen ein",
                        items: [
                            {
                                id: 1,
                                title: "Web Designer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Full time",
                                badgeType: "success", // optional for UI
                                buttoncaption: "Hier bewerben",
                                buttonlink: "/job-details.html?id=web-designer",
                                buttonnewtab: true
                            },
                            {
                                id: 2,
                                title: "Front-end Developer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Remote",
                                badgeType: "primary",
                                buttoncaption: "Hier bewerben",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=front-end-developer"

                            },
                            {
                                id: 3,
                                title: "Back-end Developer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "WFH",
                                badgeType: "info",
                                buttoncaption: "Hier bewerben",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=back-end-developer"
                            },
                            {
                                id: 4,
                                title: "Web Developer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Full time",
                                badgeType: "success",
                                buttoncaption: "Hier bewerben",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=web-developer"
                            },
                            {
                                id: 5,
                                title: "Marketing Trainee",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Contract",
                                badgeType: "warning",
                                buttoncaption: "Hier bewerben",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=marketing-trainee"
                            },
                            {
                                id: 6,
                                title: "Analyst",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Contract",
                                badgeType: "warning",
                                buttoncaption: "Hier bewerben",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=analyst"
                            }
                        ]
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs.html",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.jobs.header",
                        enabled: true,
                        kicker: "#",
                        title: "Jobs",
                        subtitle: "Your career at DSR24 starts here.",
                    },
                    {
                        type: "dsrTemplate1.jobs.text_image",
                        enabled: true,
                        subtitle: "JOB TITLE",
                        title: "Working at DSR24",
                        paragraph:
                            "DSR24 stands for reliable processes, strong teams, and real ownership. You’ll work on solutions that genuinely help people after an accident.\n\nFrom tech and operations to legal and marketing: we’re looking for motivated people who take initiative and want to grow together.",
                        image: 102
                    },
                    {
                        type: "dsrTemplate1.jobs.grid",
                        enabled: true,
                        subtitle: "JOBS AVAILABLE",
                        title: "We are hiring",
                        items: [
                            {
                                id: 1,
                                title: "Web Designer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Full time",
                                badgeType: "success",
                                buttoncaption: "Apply here",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=web-designer"
                            },
                            {
                                id: 2,
                                title: "Front-end Developer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Remote",
                                badgeType: "primary",
                                buttoncaption: "Apply here",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=front-end-developer"
                            },
                            {
                                id: 3,
                                title: "Back-end Developer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "WFH",
                                badgeType: "info",
                                buttoncaption: "Apply here",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=back-end-developer"
                            },
                            {
                                id: 4,
                                title: "Web Developer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Full time",
                                badgeType: "success",
                                buttoncaption: "Apply here",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=web-developer"
                            },
                            {
                                id: 5,
                                title: "Marketing Trainee",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Contract",
                                badgeType: "warning",
                                buttoncaption: "Apply here",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=marketing-trainee"
                            },
                            {
                                id: 6,
                                title: "Analyst",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Contract",
                                badgeType: "warning",
                                buttoncaption: "Apply here",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=analyst"
                            }
                        ]
                    }
                ]
            }
        ]
    },

    {
        id: 207,
        slug: "job-details",
        title: "Job Details",
        contents: [
            {
                url: "dsr24.de/stellendetails",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                ]
            },
            {
                url: "dsr24.de/en/job-details",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                ]
            }
        ]
    },


    {
        id: 208,
        slug: "news",
        title: "News",
        contents: [
            {
                url: "dsr24.de/news.html",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.news.header",
                        enabled: true,
                        kicker: "#",
                        title: "Nachrichten",
                        subtitle: "Aktuelle Tipps, Neuigkeiten und Ratgeber rund um Unfallschäden und deren Abwicklung.",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.news.back",
                        enabled: true,
                        label: "Zurück",
                        url: "index.html"
                    },
                    {
                        type: "dsrTemplate1.news.grid",
                        enabled: true,
                        itemsPerPage: 6,
                        showPagination: true,
                        items: [
                            {
                                id: 1,
                                date: "19. Okt. 2020",
                                category: "Marketing",
                                title: "Schneller Leitfaden für Geschäfte mit Freunden.",
                                excerpt:
                                    "Es gibt mittlerweile eine Vielzahl an Blindtexten. Diese werden häufig verwendet, wenn ein Text benötigt wird, um einen Bereich zu füllen.",
                                likes: 33,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=schneller-leitfaden-1"
                            },
                            {
                                id: 2,
                                date: "19. Okt. 2020",
                                category: "Marketing",
                                title: "Tipps zur erfolgreichen Zusammenarbeit.",
                                excerpt:
                                    "Moderne Geschäftsbeziehungen erfordern klare Kommunikation und gegenseitiges Vertrauen. Hier erfahren Sie, worauf es ankommt.",
                                likes: 28,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=zusammenarbeit-tipps"
                            },
                            {
                                id: 3,
                                date: "19. Okt. 2020",
                                category: "Ratgeber",
                                title: "Was tun nach einem Verkehrsunfall?",
                                excerpt:
                                    "Nach einem Unfall ist es wichtig, ruhig zu bleiben und die richtigen Schritte einzuleiten. Dieser Leitfaden hilft Ihnen dabei.",
                                likes: 45,
                                author: "Max Mustermann",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=verkehrsunfall-ratgeber"
                            },
                            {
                                id: 4,
                                date: "19. Okt. 2020",
                                category: "Recht",
                                title: "Ihre Rechte bei einem Haftpflichtschaden.",
                                excerpt:
                                    "Erfahren Sie, welche Ansprüche Ihnen zustehen und wie DSR24 Sie bei der Durchsetzung unterstützt.",
                                likes: 37,
                                author: "Anna Schmidt",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=rechte-haftpflicht"
                            },
                            {
                                id: 5,
                                date: "19. Okt. 2020",
                                category: "Technik",
                                title: "Digitale Schadenmeldung leicht gemacht.",
                                excerpt:
                                    "Mit unserer digitalen Lösung melden Sie Schäden schnell und unkompliziert – jederzeit und überall.",
                                likes: 22,
                                author: "Max Mustermann",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=digitale-schadenmeldung"
                            },
                            {
                                id: 6,
                                date: "19. Okt. 2020",
                                category: "Unternehmen",
                                title: "DSR24 stellt neue Services vor.",
                                excerpt:
                                    "Wir erweitern unser Leistungsportfolio, um unseren Kunden noch effizientere Lösungen anzubieten.",
                                likes: 19,
                                author: "Anna Schmidt",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=neue-services"
                            }
                        ]
                    },
                    {
                        type: "dsrTemplate1.news.pagination",
                        enabled: true,
                        currentPage: 1,
                        totalPages: 3,
                        style: "numbers"
                    }
                ]
            },
            {
                url: "dsr24.de/en/news.html",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.news.header",
                        enabled: true,
                        kicker: "#",
                        title: "News",
                        subtitle: "Latest tips, updates and guides about accident claims and how they’re handled.",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.news.back",
                        enabled: true,
                        label: "Back",
                        url: "index.html"
                    },
                    {
                        type: "dsrTemplate1.news.grid",
                        enabled: true,
                        itemsPerPage: 6,
                        showPagination: true,
                        items: [
                            {
                                id: 1,
                                date: "19th Oct, 2020",
                                category: "Marketing",
                                title: "Quick guide on business with friends.",
                                excerpt:
                                    "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
                                likes: 33,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=quick-guide-1"
                            },
                            {
                                id: 2,
                                date: "19th Oct, 2020",
                                category: "Marketing",
                                title: "Quick guide on business with friends.",
                                excerpt:
                                    "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
                                likes: 33,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=quick-guide-2"
                            },
                            {
                                id: 3,
                                date: "19th Oct, 2020",
                                category: "Marketing",
                                title: "Quick guide on business with friends.",
                                excerpt:
                                    "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
                                likes: 33,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=quick-guide-3"
                            },
                            {
                                id: 4,
                                date: "19th Oct, 2020",
                                category: "Marketing",
                                title: "Quick guide on business with friends.",
                                excerpt:
                                    "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
                                likes: 33,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=quick-guide-4"
                            },
                            {
                                id: 5,
                                date: "19th Oct, 2020",
                                category: "Marketing",
                                title: "Quick guide on business with friends.",
                                excerpt:
                                    "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
                                likes: 33,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=quick-guide-5"
                            },
                            {
                                id: 6,
                                date: "19th Oct, 2020",
                                category: "Marketing",
                                title: "Quick guide on business with friends.",
                                excerpt:
                                    "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
                                likes: 33,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=quick-guide-6"
                            }
                        ]
                    },
                    {
                        type: "dsrTemplate1.news.pagination",
                        enabled: true,
                        currentPage: 1,
                        totalPages: 3,
                        style: "numbers"
                    }
                ]
            }
        ]
    },

    {
        id: 209,
        slug: "news-details",
        title: "News Details",
        contents: [
            {
                url: "dsr24.de/nachrichten-details",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: []

            },
            {
                url: "dsr24.de/en/news-details",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: []
            }
        ]
    },

    {
        id: 210,
        slug: "services",
        title: "Services",
        contents: [
            {
                url: "dsr24.de/dienstleistungen",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: []
            },
            {
                url: "dsr24.de/en/services",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: []
            }
        ]
    },

    {
        id: 211,
        slug: "use-case",
        title: "Use Cases",
        contents: [
            {
                url: "dsr24.de/anwendungsfaelle",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
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
                url: "dsr24.de/en/use-case",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.use-case.header",
                        enabled: true,
                        title: "Use Cases",
                        subtitle: "Real success stories from DSR24",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.use-case.content",
                        enabled: true,
                        title: "Use Case Details",
                        paragraph: "Learn how DSR24 has supported customers in accident claims management.",
                        image: 102
                    }
                ]
            }
        ]
    },

    {
        id: 212,
        slug: "dsrklaert",
        title: "DSRKLÄRT",
        contents: [
            {
                url: "dsr24.de/dsrexplains",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.dsrklaert.header",
                        enabled: true,
                        kicker: "#",
                        title: "dsrklärt",
                        subtitle_1: "Wichtige Begriffe rund um Unfallschäden einfach erklärt",
                        text: "Klicken Sie auf eine Karte, um die Erklärung zu sehen",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.dsrklaert.grid",
                        enabled: true,
                        itemsPerRow: 3,
                        items: [
                            {
                                id: 1,
                                title: "Schadengutachten",
                                hint: "Klicken zum Umdrehen",
                                icon: "file",
                                explanation: "Ein Schadengutachten ist eine detaillierte Bewertung der Unfallschäden an Ihrem Fahrzeug durch einen unabhängigen Kfz-Sachverständigen. Es dokumentiert Art und Umfang der Schäden sowie die Reparaturkosten",

                            },
                            {
                                id: 2,
                                title: "Nutzungsausfall",
                                hint: "Klicken zum Umdrehen",
                                icon: "car-crash",
                                explanation: "Nutzungsausfall bezeichnet die Entschädigung für den Zeitraum, in dem Sie Ihr beschädigtes Fahrzeug nicht nutzen können. Diese wird unabhängig davon gezahlt, ob Sie tatsächlich ein Ersatzfahrzeug mieten.",

                            },
                            {
                                id: 3,
                                title: "Mietwagen",
                                hint: "Klicken zum Umdrehen",
                                icon: "car",
                                explanation: "Nach einem unverschuldeten Unfall haben Sie Anspruch auf ein Ersatzfahrzeug. Die Kosten trägt die gegnerische Versicherung. Der Mietwagen sollte in Ausstattung und Klasse Ihrem beschädigten Fahrzeug entsprechen.",

                            },
                            {
                                id: 4,
                                title: "Restwert",
                                hint: "Klicken zum Umdrehen",
                                icon: "euro",
                                explanation: "Der Restwert ist der Wert, den Ihr beschädigtes Fahrzeug noch hat. Bei einem wirtschaftlichen Totalschaden wird dieser vom Wiederbeschaffungswert abgezogen, um die Entschädigungssumme zu berechnen.",

                            },
                            {
                                id: 5,
                                title: "Merkantiler Minderwert",
                                hint: "Klicken zum Umdrehen",
                                icon: "chart",
                                explanation: "Auch nach fachgerechter Reparatur verliert ein Unfallfahrzeug an Wert. Dieser Wertverlust wird als merkantiler Minderwert bezeichnet und kann von der gegnerischen Versicherung geltend gemacht werden.",

                            },
                            {
                                id: 6,
                                title: "Wiederbeschaffungswert",
                                hint: "Klicken zum Umdrehen",
                                icon: "calculator",
                                explanation: "Der Wiederbeschaffungswert ist der Betrag, den Sie aufwenden müssten, um ein vergleichbares Fahrzeug gleichen Typs und Alters mit ähnlicher Laufleistung zu erwerben. Dies ist die Grundlage für die Entschädigung bei Totalschaden.",

                            },
                            {
                                id: 7,
                                title: "Totalschaden",
                                hint: "Klicken zum Umdrehen",
                                icon: "warning",
                                explanation: "Von einem Totalschaden spricht man, wenn die Reparaturkosten den Wiederbeschaffungswert übersteigen. Es gibt den wirtschaftlichen und den technischen Totalschaden. Bei Ersterem ist eine Reparatur unwirtschaftlich, bei Letzterem technisch nicht mehr möglich.",

                            },
                            {
                                id: 8,
                                title: "Haftpflichtversicherung",
                                hint: "Klicken zum Umdrehen",
                                icon: "shield",
                                explanation: "Die Kfz-Haftpflichtversicherung ist gesetzlich vorgeschrieben und deckt Schäden ab, die Sie anderen mit Ihrem Fahrzeug zufügen. Bei einem unverschuldeten Unfall zahlt die Haftpflicht des Unfallverursachers Ihre Schäden.",

                            },
                            {
                                id: 9,
                                title: "Reparaturkosten",
                                hint: "Klicken zum Umdrehen",
                                icon: "wrench",
                                explanation: "Bei einem unverschuldeten Unfall übernimmt die gegnerische Versicherung die vollständigen Reparaturkosten. Sie haben freie Werkstattwahl und Anspruch auf Reparatur mit Originalteilen in einer Fachwerkstatt.",

                            }
                        ]
                    },
                    {
                        type: "dsrTemplate1.dsrklaert.calltoaction",
                        enabled: true,
                        title: "Noch Fragen?",
                        text: "Unser Team steht Ihnen gerne zur Verfügung und beantwortet alle Ihre Fragen rund um Unfallschäden.",
                        buttoncaption: "Kontakt aufnehmen",
                        buttonlink: "/kontakt",
                        buttonnewtab: false
                    }
                ]
            },

            {
                url: "dsr24.de/en/dsrexplains",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.dsrklaert.header",
                        enabled: true,
                        kicker: "#",
                        title: "dsr explains",
                        subtitle_1: "Important terms about accident claims explained simply",
                        text: "Click a card to view the explanation",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.dsrklaert.grid",
                        enabled: true,
                        itemsPerRow: 3,
                        items: [
                            {
                                id: 1,
                                title: "Damage Assessment Report",
                                hint: "Click to flip",
                                icon: "file",
                                explanation:
                                    "A damage assessment report is a detailed evaluation of accident damage to your vehicle prepared by an independent vehicle expert. It documents the type and extent of the damage as well as the estimated repair costs."
                            },
                            {
                                id: 2,
                                title: "Loss of Use Compensation",
                                hint: "Click to flip",
                                icon: "car-crash",
                                explanation:
                                    "Loss of use compensation is payment for the period during which you cannot use your damaged vehicle. It can be paid regardless of whether you actually rent a replacement car."
                            },
                            {
                                id: 3,
                                title: "Rental Car",
                                hint: "Click to flip",
                                icon: "car",
                                explanation:
                                    "After a non-fault accident, you are generally entitled to a replacement vehicle. The costs are usually covered by the at-fault party’s insurer. The rental car should be comparable in class and equipment to your damaged vehicle."
                            },
                            {
                                id: 4,
                                title: "Residual Value",
                                hint: "Click to flip",
                                icon: "euro",
                                explanation:
                                    "The residual value is what your damaged vehicle is still worth. In an economic total loss, it is deducted from the replacement value to calculate the compensation amount."
                            },
                            {
                                id: 5,
                                title: "Diminished Value",
                                hint: "Click to flip",
                                icon: "chart",
                                explanation:
                                    "Even after a professional repair, an accident vehicle often loses market value. This loss is called diminished value and can typically be claimed from the at-fault party’s insurer."
                            },
                            {
                                id: 6,
                                title: "Replacement Value",
                                hint: "Click to flip",
                                icon: "calculator",
                                explanation:
                                    "The replacement value is the amount you would need to buy a comparable vehicle of the same type and age with similar mileage and condition. It is the basis for compensation in total loss cases."
                            },
                            {
                                id: 7,
                                title: "Total Loss",
                                hint: "Click to flip",
                                icon: "warning",
                                explanation:
                                    "A total loss occurs when repair costs exceed the replacement value. There is an economic total loss and a technical total loss. In the first case, repairing is not economically reasonable; in the second, repair is technically no longer possible."
                            },
                            {
                                id: 8,
                                title: "Liability Insurance",
                                hint: "Click to flip",
                                icon: "shield",
                                explanation:
                                    "Motor liability insurance is legally required and covers damage you cause to others with your vehicle. In a non-fault accident, the at-fault driver’s liability insurer pays for your damages."
                            },
                            {
                                id: 9,
                                title: "Repair Costs",
                                hint: "Click to flip",
                                icon: "wrench",
                                explanation:
                                    "In a non-fault accident, the at-fault party’s insurer typically covers the full repair costs. You can usually choose the repair shop freely and may be entitled to repairs using original parts at a qualified workshop."
                            }
                        ]
                    },
                    {
                        type: "dsrTemplate1.dsrklaert.calltoaction",
                        enabled: true,
                        title: "Still have questions?",
                        text: "Our team is happy to help and answer any questions you have about accident claims.",
                        buttoncaption: "Contact us",
                        buttonlink: "/contact",
                        buttonnewtab: false
                    }
                ]
            },
        ]
    }
];

/*====================================================================================================================================================================
====================================================================================================================================================================
                    SERVICES
====================================================================================================================================================================
=====================================================================================================================================================================*/

window.services = [
    {
        slug: "werkstatt",
        title: "Werkstatt",
        contents: [
            {
                url: "dsr24.de/services.html?id=werkstatt",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Werkstatt",
                        subtitle: "Werkstatt - Wichtige Begriffe erklärt"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "WERKSTATT",
                        title: "Werkstatt",
                        paragraph: "In unserer Werkstatt bieten wir eine Vielzahl von Dienstleistungen an, um Ihre Bedürfnisse zu erfüllen. Hier sind einige wichtige Begriffe, die Sie kennen sollten:\n\nDie Werkstatt ist ein Ort, an dem technische Arbeiten durchgeführt werden. Sie können hier Reparaturen, Wartung und andere Dienstleistungen in Anspruch nehmen.",
                        image: 501
                    }
                ]
            },
            {
                url: "dsr24.de/en/services.html?id=werkstatt",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Workshop",
                        subtitle: "Workshop - Key terms explained"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "WORKSHOP",
                        title: "Workshop",
                        paragraph: "We offer a wide range of services in our workshop to meet your needs. Here are some important terms you should know:\n\nThe workshop is a place where technical work is carried out. You can have repairs, maintenance, and other services done here.",
                        image: 501
                    }
                ]
            }
        ]
    },

    {
        slug: "autovermietungen",
        title: "Autovermietungen",
        contents: [
            {
                url: "dsr24.de/services.html?id=autovermietungen",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Autovermietungen",
                        subtitle: "Autovermietungen - Wichtige Begriffe erklärt"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "AUTOVERMIETUNGEN",
                        title: "Autovermietungen",
                        paragraph:
                            "Wenn Sie nach einem Unfall mobil bleiben müssen, unterstützen wir Sie bei der Organisation eines passenden Mietwagens...",
                        image: 502,
                        partnerLogo: 700
                    }
                ]
            },
            {
                url: "dsr24.de/en/services.html?id=autovermietungen",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Car Rentals",
                        subtitle: "Car rentals - Key terms explained"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "CAR RENTALS",
                        title: "Car Rentals",
                        paragraph:
                            "If you need to stay mobile after an accident, we help you arrange a suitable rental car...",
                        image: 502,
                        partnerLogo: 700
                    }
                ]
            },
        ]
    },


    {
        slug: "rechtsanwalt",
        title: "Rechtsanwalt",
        contents: [
            {
                url: "dsr24.de/services.html?id=rechtsanwalt",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Rechtsanwalt",
                        subtitle: "Rechtsanwalt - Wichtige Begriffe erklärt",
                        text: "Klicken Sie auf eine Karte, um die Erklärung zu sehen"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "RECHTSANWALT",
                        title: "Rechtsanwalt",
                        paragraph:
                            "Nach einem Unfall ist es wichtig, dass Ihre Ansprüche vollständig und korrekt durchgesetzt werden. Ein Rechtsanwalt unterstützt Sie dabei, die Kommunikation mit der gegnerischen Versicherung zu übernehmen und alle erforderlichen Schritte einzuleiten.\n\nSo werden Fristen eingehalten, Kürzungen geprüft und Ihre Schadenersatzansprüche professionell vertreten.",
                        image: 503,
                        partnerLogo: 701,
                        partnerNote: "in Kooperation mit"
                    }
                ]
            },
            {
                url: "dsr24.de/en/services.html?id=rechtsanwalt",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Lawyer",
                        subtitle: "Lawyer - Key terms explained",
                        text: "Click on a card to view the explanation"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "LAWYER",
                        title: "Lawyer",
                        paragraph:
                            "After an accident, it’s important that your claims are asserted fully and correctly. A lawyer supports you by handling communication with the other party’s insurer and initiating the necessary legal steps.\n\nThis helps ensure deadlines are met, reductions are reviewed, and your compensation claims are represented professionally.",
                        image: 503,
                        partnerLogo: 701
                    }
                ]
            }
        ]
    },

    {
        slug: "sachverstaendige",
        title: "Sachverstaendige",
        contents: [
            {
                url: "dsr24.de/services.html?id=sachverstaendige",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Sachverständige",
                        subtitle: "Sachverständige - Wichtige Begriffe erklärt",
                        text: "Klicken Sie auf eine Karte, um die Erklärung zu sehen"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "SACHVERSTÄNDIGE",
                        title: "Sachverständige",
                        paragraph:
                            "Ein Sachverständiger erstellt ein unabhängiges Gutachten zum Schaden an Ihrem Fahrzeug. Darin werden unter anderem Reparaturkosten, Wertminderung und ggf. Nutzungsausfall dokumentiert.\n\nDas Gutachten ist eine wichtige Grundlage für die Regulierung mit der Versicherung und hilft, Ihre Ansprüche nachvollziehbar zu belegen.",
                        image: 504,
                        partnerLogo: 702
                    }
                ]
            },
            {
                url: "dsr24.de/en/services.html?id=sachverstaendige",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Assessors",
                        subtitle: "Assessors - Key terms explained",
                        text: "Click on a card to view the explanation"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "ASSESSORS",
                        title: "Assessors",
                        paragraph:
                            "An assessor prepares an independent report on the damage to your vehicle. This typically includes repair costs, any loss in value, and—if applicable—compensation for loss of use.\n\nThe report is an important basis for settlement with the insurer and helps document your claims clearly.",
                        image: 504,
                        partnerLogo: 702
                    }
                ]
            }
        ]
    },

    {
        slug: "abschleppdienst",
        title: "Abschleppdienst",
        contents: [
            {
                url: "dsr24.de/services.html?id=abschleppdienst",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Abschleppdienst",
                        subtitle: "Abschleppdienst - Wichtige Begriffe erklärt",
                        text: "Klicken Sie auf eine Karte, um die Erklärung zu sehen"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "ABSCHLEPPDIENST",
                        title: "Abschleppdienst",
                        paragraph:
                            "Wenn Ihr Fahrzeug nach einem Unfall nicht mehr fahrbereit ist, organisiert ein Abschleppdienst den sicheren Transport zur Werkstatt oder zu einem Verwahrplatz.\n\nWir unterstützen Sie dabei, schnell eine passende Lösung zu finden und die nächsten Schritte zuverlässig zu koordinieren.",
                        image: 505
                    }
                ]
            },
            {
                url: "dsr24.de/en/services.html?id=abschleppdienst",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Towing Service",
                        subtitle: "Towing service - Key terms explained",
                        text: "Click on a card to view the explanation"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "TOWING SERVICE",
                        title: "Towing Service",
                        paragraph:
                            "If your vehicle is no longer roadworthy after an accident, a towing service arranges safe transport to a workshop or a secure storage location.\n\nWe help you find a suitable solution quickly and coordinate the next steps reliably.",
                        image: 505
                    }
                ]
            }
        ]
    },

    {
        slug: "unfallhilfe",
        title: "Unfalhilfe",
        contents: [
            {
                url: "dsr24.de/services.html?id=unfallhilfe",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Unfallhilfe",
                        subtitle: "Unfallhilfe - Wichtige Begriffe erklärt",
                        text: "Klicken Sie auf eine Karte, um die Erklärung zu sehen"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "UNFALLHILFE",
                        title: "Unfallhilfe",
                        paragraph:
                            "Direkt nach einem Unfall zählen schnelle, klare Schritte. Die Unfallhilfe unterstützt Sie dabei, die Situation richtig einzuschätzen, die notwendigen Informationen zu sichern und die nächsten Maßnahmen einzuleiten.\n\nWir begleiten Sie von der ersten Kontaktaufnahme bis zur weiteren Organisation (z. B. Werkstatt, Gutachten, Mietwagen), damit Sie entlastet sind.",
                        image: 506
                    }
                ]
            },
            {
                url: "dsr24.de/en/services.html?id=unfallhilfe",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Accident Assistance",
                        subtitle: "Accident assistance - Key terms explained",
                        text: "Click on a card to view the explanation"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "ACCIDENT ASSISTANCE",
                        title: "Accident Assistance",
                        paragraph:
                            "Right after an accident, quick and clear steps matter. Accident assistance helps you assess the situation correctly, secure the necessary information, and initiate the next actions.\n\nWe support you from the first contact through further coordination (e.g., workshop, assessment, rental car) so you’re not left dealing with everything alone.",
                        image: 506
                    }
                ]
            }
        ]
    }

];


/*=============================================================================================================================================================================================================
=============================================================================================================================================================================================================
                    jobs
==============================================================================================================================================================================================================
==============================================================================================================================================================================================================*/

window.jobs = [
    {
        slug: "web-designer",
        title: "Job Details",
        contents: [
            {
                url: "dsr24.de/jobs-details.html?id=web-designer",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.job-details.header",
                        enabled: true,
                        kicker: "#",
                        title: "Web Designer",
                        meta: "Germany · Vollzeit"
                    },
                    {
                        type: "dsrTemplate1.job-details.back",
                        enabled: true,
                        label: "Zurück",
                        url: "jobs.html" // or your jobs list page
                    },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Wir suchen einen kreativen Web Designer (m/w/d), der unser Team verstärkt.",
                        requirementsTitle: "Requirements",
                        requirements: [
                            "Starke UI/UX Skills",
                            "HTML, CSS, Figma",
                            "Auge fürs Detail"
                        ],
                        paragraph:
                            "Du gestaltest moderne Web-Interfaces, optimierst bestehende Designs und arbeitest eng mit Entwicklung und Marketing zusammen. Dabei achtest du auf Konsistenz, Performance und eine sehr gute Nutzerführung."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs-details.html?id=web-designer",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.job-details.header",
                        enabled: true,
                        kicker: "#",
                        title: "Web Designer",
                        meta: "Germany · Full time"
                    },
                    {
                        type: "dsrTemplate1.job-details.back",
                        enabled: true,
                        label: "Back",
                        url: "jobs.html"
                    },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "We are looking for a creative Web Designer to join our team.",
                        requirementsTitle: "Requirements",
                        requirements: [
                            "Strong UI/UX skills",
                            "HTML, CSS, Figma",
                            "Attention to detail"
                        ],
                        paragraph:
                            "You will design modern web interfaces, improve existing layouts, and work closely with development and marketing. You care about consistency, performance, and a great user experience."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            }
        ]
    },
    {
        slug: "front-end-developer",
        title: "Job Details",
        contents: [
            {
                url: "dsr24.de/jobs-details.html?id=front-end-developer",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Front-end Developer", meta: "Remote" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Zurück", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Werde Teil unseres Frontend-Teams und arbeite mit modernen Technologien.",
                        requirementsTitle: "Requirements",
                        requirements: ["JavaScript / React", "REST APIs", "Git Erfahrung"],
                        paragraph:
                            "Du entwickelst und pflegst UI-Komponenten, setzt Designs sauber um und achtest auf Performance sowie eine sehr gute User Experience. Gemeinsam mit Backend und Design bringst du Features schnell und zuverlässig in Produktion."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs-details.html?id=front-end-developer",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Front-end Developer", meta: "Remote" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Back", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Join our frontend team working with modern technologies.",
                        requirementsTitle: "Requirements",
                        requirements: ["JavaScript / React", "REST APIs", "Git experience"],
                        paragraph:
                            "You will build and maintain UI components, implement designs with high fidelity, and focus on performance and a great user experience. Working closely with backend and design, you’ll ship features quickly and reliably."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            }
        ]
    },

    {
        slug: "back-end-developer",
        title: "Job Details",
        contents: [
            {
                url: "dsr24.de/jobs-details.html?id=back-end-developer",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Back-end Developer", meta: "Remote" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Zurück", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Werde Teil unseres Backend-Teams und arbeite mit modernen Technologien.",
                        requirementsTitle: "Requirements",
                        requirements: ["Node.js / Express", "Database management", "API development"],
                        paragraph:
                            "Du entwickelst skalierbare Services, modellierst Datenstrukturen und sorgst für stabile Schnittstellen. Du arbeitest eng mit Frontend und Operations zusammen und bringst Qualität über Tests, Logging und Monitoring ins Produkt."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs-details.html?id=back-end-developer",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Back-end Developer", meta: "Remote" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Back", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Join our backend team working with modern technologies.",
                        requirementsTitle: "Requirements",
                        requirements: ["Node.js / Express", "Database management", "API development"],
                        paragraph:
                            "You will build scalable services, model data structures, and ensure stable interfaces. You’ll work closely with frontend and operations, and bring quality through testing, logging, and monitoring."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            }
        ]
    },

    {
        slug: "web-developer",
        title: "Job Details",
        contents: [
            {
                url: "dsr24.de/jobs-details.html?id=web-developer",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Web Developer", meta: "Germany · Vollzeit" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Zurück", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Wir suchen einen erfahrenen Web Developer, der unsere Plattform weiterentwickelt.",
                        requirementsTitle: "Requirements",
                        requirements: ["Full-stack development", "Node.js, Express", "Database management"],
                        paragraph:
                            "Du arbeitest an Features über den gesamten Stack, setzt Schnittstellen um und verbesserst bestehende Bereiche. Wichtig sind sauberes Engineering, verständlicher Code und ein Auge für Produktqualität."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs-details.html?id=web-developer",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Web Developer", meta: "Germany · Full time" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Back", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "We are looking for a skilled Web Developer to build our platform.",
                        requirementsTitle: "Requirements",
                        requirements: ["Full-stack development", "Node.js, Express", "Database management"],
                        paragraph:
                            "You’ll work on features across the stack, implement APIs, and improve existing areas. We value clean engineering, readable code, and strong product quality."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            }
        ]
    },

    {
        slug: "marketing-trainee",
        title: "Job Details",
        contents: [
            {
                url: "dsr24.de/jobs-details.html?id=marketing-trainee",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Marketing Trainee", meta: "Germany · Vollzeit" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Zurück", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Starte deine Marketing-Karriere bei uns als Trainee.",
                        requirementsTitle: "Requirements",
                        requirements: ["Leidenschaft für Marketing", "Starke Kommunikationsfähigkeiten", "Lernbereitschaft"],
                        paragraph:
                            "Du unterstützt bei Kampagnen, Content und Analysen. Du arbeitest mit verschiedenen Teams zusammen und lernst Schritt für Schritt, wie Marketingmaßnahmen geplant, umgesetzt und ausgewertet werden."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs-details.html?id=marketing-trainee",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Marketing Trainee", meta: "Germany · Full time" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Back", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Kickstart your marketing career with us as a trainee.",
                        requirementsTitle: "Requirements",
                        requirements: ["Passion for marketing", "Strong communication skills", "Eagerness to learn"],
                        paragraph:
                            "You will support campaigns, content, and analysis. Working across teams, you’ll learn how marketing initiatives are planned, executed, and evaluated step by step."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            }
        ]
    },

    {
        slug: "analyst",
        title: "Job Details",
        contents: [
            {
                url: "dsr24.de/jobs-details.html?id=analyst",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Analyst", meta: "Germany · Vollzeit" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Zurück", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Wir suchen einen datengetriebenen Analysten (m/w/d), der unser Team verstärkt.",
                        requirementsTitle: "Requirements",
                        requirements: ["Data analysis skills", "Experience with SQL and Excel", "Critical thinking"],
                        paragraph:
                            "Du analysierst Kennzahlen, erstellst Reports und leitest daraus konkrete Empfehlungen ab. Du arbeitest mit Product und Operations zusammen und hilfst dabei, Prozesse datenbasiert zu optimieren."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs-details.html?id=analyst",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Analyst", meta: "Germany · Full time" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Back", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "We are looking for a data-driven Analyst to join our team.",
                        requirementsTitle: "Requirements",
                        requirements: ["Data analysis skills", "Experience with SQL and Excel", "Critical thinking"],
                        paragraph:
                            "You will analyze KPIs, build reports, and turn insights into clear recommendations. You’ll collaborate with product and operations to optimize processes based on data."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            }
        ]
    }
];

/*====================================================================================================================================================================
====================================================================================================================================================================
            news
====================================================================================================================================================================
==================================================================================================================================================================*/


window.news = [
    {
        slug: "quick-guide-on-business-with-friends",
        title: "Quick guide on business with friends.",
        contents: [
            {
                url: "dsr24.de/news-details.html?id=1",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.news-details.header",
                        enabled: true,
                        kicker: "#",
                        title: "Schneller Leitfaden für Geschäfte mit Freunden.",
                        meta: {
                            date: "2024-06-01",
                            author: "John Doe 1"
                        }
                    },
                    {
                        type: "dsrTemplate1.news-details.back",
                        enabled: true,
                        label: "Zurück zu News",
                        url: "news.html"
                    },
                    {
                        type: "dsrTemplate1.news-details.hero_card",
                        enabled: true,
                        title: "DSR24 News",
                        backgroundimage: 0
                    },
                    {
                        type: "dsrTemplate1.news-details.body",
                        enabled: true,
                        intro:
                            "Dies ist der Einleitungsabsatz des Artikels. Er sollte die wichtigsten Informationen zusammenfassen und sofort Aufmerksamkeit erzeugen.",
                        paragraph1:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                        section: {
                            title: "Untertitel Beispiel",
                            text:
                                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                        },
                        quote:
                            "Dies ist ein hervorgehobenes Zitat aus dem Artikel, um wichtige Informationen zu betonen.",
                        paragraph2:
                            "Abschließender Abschnitt des Inhalts. Sie können weitere strukturierte Abschnitte, Bilder, Listen oder eingebettete Inhalte hinzufügen."
                    },
                    {
                        type: "dsrTemplate1.news-details.tags",
                        enabled: true,
                        label: "Tags:",
                        items: ["Sicherheit", "Versicherung", "Update"]
                    },
                    {
                        type: "dsrTemplate1.news-details.sidebar",
                        enabled: true,
                        shareTitle: "DIESEN ARTIKEL TEILEN",
                        share: {
                            facebook: true,
                            twitter: true,
                            linkedin: true
                        },
                        latestTitle: "AKTUELLE NEWS",
                        latest: [
                            { title: "So bearbeitet man Versicherungsfälle effizient", date: "10. Feb. 2026", url: "news-details.html?id=handle-claims-efficiently" },
                            { title: "Neuer Service-Ausbau angekündigt", date: "08. Feb. 2026", url: "news-details.html?id=service-expansion" },
                            { title: "DSR24 erreicht neuen Meilenstein", date: "05. Feb. 2026", url: "news-details.html?id=new-milestone" }
                        ]
                    }
                ]
            },
            {
                url: "dsr24.de/en/news-details.html?id=quick-guide-on-business-with-friends",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.news-details.header",
                        enabled: true,
                        kicker: "#",
                        title: "Quick guide on business with friends.",
                        meta: {
                            date: "2024-06-01",
                            author: "John Doe 1"
                        }
                    },
                    {
                        type: "dsrTemplate1.news-details.back",
                        enabled: true,
                        label: "Back to News",
                        url: "news.html"
                    },
                    {
                        type: "dsrTemplate1.news-details.hero_card",
                        enabled: true,
                        title: "DSR24 News",
                        backgroundimage: 0
                    },
                    {
                        type: "dsrTemplate1.news-details.body",
                        enabled: true,
                        intro:
                            "This is the article introduction paragraph. It should summarize the most important information and immediately capture attention.",
                        paragraph1:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                        section: {
                            title: "Subtitle Example",
                            text:
                                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                        },
                        quote:
                            "This is a highlighted quote from the article to emphasize key information.",
                        paragraph2:
                            "Final section of the article content. You can continue adding structured sections, images, lists or embedded content."
                    },
                    {
                        type: "dsrTemplate1.news-details.tags",
                        enabled: true,
                        label: "Tags:",
                        items: ["Security", "Insurance", "Update"]
                    },
                    {
                        type: "dsrTemplate1.news-details.sidebar",
                        enabled: true,
                        shareTitle: "SHARE THIS ARTICLE",
                        share: {
                            facebook: true,
                            twitter: true,
                            linkedin: true
                        },
                        latestTitle: "LATEST NEWS",
                        latest: [
                            { title: "How to handle insurance claims efficiently", date: "Feb 10, 2026", url: "news-details.html?id=handle-claims-efficiently" },
                            { title: "New service expansion announced", date: "Feb 08, 2026", url: "news-details.html?id=service-expansion" },
                            { title: "DSR24 reaches new milestone", date: "Feb 05, 2026", url: "news-details.html?id=new-milestone" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: "news 2",
        title: "News 2",
        contents: [
            {
                url: "dsr24.de/news-details.html?id=2",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.news-details.header",
                        enabled: true,
                        kicker: "#",
                        title: "News 2",
                        meta: {
                            date: "2024-06-01",
                            author: "John Doe 1"
                        }
                    },
                    {
                        type: "dsrTemplate1.news-details.back",
                        enabled: true,
                        label: "Zurück zu News",
                        url: "news.html"
                    },
                    {
                        type: "dsrTemplate1.news-details.hero_card",
                        enabled: true,
                        title: "DSR24 News",
                        backgroundimage: 0
                    },
                    {
                        type: "dsrTemplate1.news-details.body",
                        enabled: true,
                        intro:
                            "Dies ist der Einleitungsabsatz des Artikels. Er sollte die wichtigsten Informationen zusammenfassen und sofort Aufmerksamkeit erzeugen.",
                        paragraph1:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                        section: {
                            title: "Untertitel Beispiel",
                            text:
                                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                        },
                        quote:
                            "Dies ist ein hervorgehobenes Zitat aus dem Artikel, um wichtige Informationen zu betonen.",
                        paragraph2:
                            "Abschließender Abschnitt des Inhalts. Sie können weitere strukturierte Abschnitte, Bilder, Listen oder eingebettete Inhalte hinzufügen."
                    },
                    {
                        type: "dsrTemplate1.news-details.tags",
                        enabled: true,
                        label: "Tags:",
                        items: ["Sicherheit", "Versicherung", "Update"]
                    },
                    {
                        type: "dsrTemplate1.news-details.sidebar",
                        enabled: true,
                        shareTitle: "DIESEN ARTIKEL TEILEN",
                        share: {
                            facebook: true,
                            twitter: true,
                            linkedin: true
                        },
                        latestTitle: "AKTUELLE NEWS",
                        latest: [
                            { title: "So bearbeitet man Versicherungsfälle effizient", date: "10. Feb. 2026", url: "news-details.html?id=handle-claims-efficiently" },
                            { title: "Neuer Service-Ausbau angekündigt", date: "08. Feb. 2026", url: "news-details.html?id=service-expansion" },
                            { title: "DSR24 erreicht neuen Meilenstein", date: "05. Feb. 2026", url: "news-details.html?id=new-milestone" }
                        ]
                    }
                ]
            },
            {
                url: "dsr24.de/en/news-details.html?id=quick-guide-on-business-with-friends",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.news-details.header",
                        enabled: true,
                        kicker: "#",
                        title: "Quick guide on business with friends.",
                        meta: {
                            date: "2024-06-01",
                            author: "John Doe 1"
                        }
                    },
                    {
                        type: "dsrTemplate1.news-details.back",
                        enabled: true,
                        label: "Back to News",
                        url: "news.html"
                    },
                    {
                        type: "dsrTemplate1.news-details.hero_card",
                        enabled: true,
                        title: "DSR24 News",
                        backgroundimage: 0
                    },
                    {
                        type: "dsrTemplate1.news-details.body",
                        enabled: true,
                        intro:
                            "This is the article introduction paragraph. It should summarize the most important information and immediately capture attention.",
                        paragraph1:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                        section: {
                            title: "Subtitle Example",
                            text:
                                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                        },
                        quote:
                            "This is a highlighted quote from the article to emphasize key information.",
                        paragraph2:
                            "Final section of the article content. You can continue adding structured sections, images, lists or embedded content."
                    },
                    {
                        type: "dsrTemplate1.news-details.tags",
                        enabled: true,
                        label: "Tags:",
                        items: ["Security", "Insurance", "Update"]
                    },
                    {
                        type: "dsrTemplate1.news-details.sidebar",
                        enabled: true,
                        shareTitle: "SHARE THIS ARTICLE",
                        share: {
                            facebook: true,
                            twitter: true,
                            linkedin: true
                        },
                        latestTitle: "LATEST NEWS",
                        latest: [
                            { title: "How to handle insurance claims efficiently", date: "Feb 10, 2026", url: "news-details.html?id=handle-claims-efficiently" },
                            { title: "New service expansion announced", date: "Feb 08, 2026", url: "news-details.html?id=service-expansion" },
                            { title: "DSR24 reaches new milestone", date: "Feb 05, 2026", url: "news-details.html?id=new-milestone" }
                        ]
                    }
                ]
            }
        ]
    }
];


/*====================================================================================================================================================================
====================================================================================================================================================================
REVIEWS
====================================================================================================================================================================
==================================================================================================================================================================*/


window.reviews = [
  /* =====================================================
     1) MICHAEL SCHMIDT
  ====================================================== */
  {
    slug: "michael-schmidt",
    contents: [
      {
        url: "dsr24.de/use-case.html?id=2",
        lang: "DE",
        lastUpdated: "2026-02-12 13:45:10",
        blocks: [
          /* TOP HEADER (hero area) */
          {
            type: "dsrTemplate1.usecase.hero",
            enabled: true,
            kicker: "#",
            title: "Michael Schmidt",
            meta: "45 Jahre, Ingenieur aus Berlin"
          },

          /* BACK BUTTON */
          {
            type: "dsrTemplate1.usecase.back",
            enabled: true,
            label: "Zurück zu Kundenstimmen",
            url: "customer-reviews.html"
          },

          /* PROFILE CARD (left) */
          {
            type: "dsrTemplate1.usecase.profile",
            enabled: true,
            name: "Michael Schmidt",
            meta: "45 Jahre, Ingenieur aus Berlin",
            badges: ["Auffahrunfall", "Anwalt & Gutachter inkl."],
            quote: "Schnell, professionell und ohne Stress. Ich kann DSR24 wirklich empfehlen!",
            avatarImage: 301
          },

          /* MAIN HERO IMAGE (right, top) */
          {
            type: "dsrTemplate1.usecase.heroMedia",
            enabled: true,
            label: "Unfallsituation",
            image: 401
          },

          /* OPTIONAL VIDEO (Michael has video in your screenshot) */
          {
            type: "dsrTemplate1.usecase.video",
            enabled: true,
            title: "",
            videoUrl: "media/michael-schmidt.mp4",
            posterImage: 402,
            caption: "Das Video ansehen"
          },

          /* CONTENT SECTIONS */
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "car-crash",
            title: "Die Situation",
            text:
              "Auf dem Weg zur Arbeit ereignete sich der Unfall: An einer roten Ampel wurde ich von hinten angefahren. Der Aufprall war heftig und mein Fahrzeug wurde stark beschädigt. Zum Glück wurde niemand verletzt, aber mein Auto hatte einen erheblichen Heckschaden."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "warning",
            title: "Die Herausforderung",
            text:
              "Die gegnerische Versicherung versuchte, mit einem niedrigen Angebot davonzukommen und wollte keinen unabhängigen Gutachter akzeptieren. Als technikaffiner Mensch wusste ich, dass der Schaden deutlich höher war als angeboten. Außerdem wollte ich nicht auf den Kosten sitzen bleiben."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "handshake",
            title: "Wie DSR24 geholfen hat",
            text:
              "DSR24 stellte mir nicht nur einen Gutachter, sondern auch einen spezialisierten Anwalt zur Seite. Das Team koordinierte alles perfekt:",
            bullets: [
              "Unabhängiges Gutachten mit detaillierter Schadensanalyse",
              "Anwaltliche Vertretung gegenüber der Versicherung",
              "Premium-Leihwagen während der Reparaturzeit",
              "Organisation der Reparatur in einer Markenwerkstatt"
            ]
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "trophy",
            title: "Das Ergebnis",
            text:
              "Dank der professionellen Unterstützung erhielt ich die volle Entschädigung von über 4.200€. Die Reparatur wurde fachgerecht durchgeführt, und ich hatte während der gesamten Zeit ein gleichwertiges Ersatzfahrzeug. Der gesamte Prozess dauerte vier Wochen und verlief vollständig reibungslos."
          },

          /* SERVICES USED + TIMELINE */
          {
            type: "dsrTemplate1.usecase.summary",
            enabled: true,
            servicesTitle: "Genutzte Leistungen",
            services: ["Anwalt", "Gutachter", "Leihwagen", "Werkstatt"],
            timelineTitle: "Zeitverlauf",
            timeline: [
              { label: "Tag 1", text: "DSR24 kontaktiert, Fall dokumentiert" },
              { label: "Tag 2-3", text: "Gutachter und Anwalt eingeschaltet" },
              { label: "Tag 4", text: "Anwalt verhandelt mit Versicherung" },
              { label: "Tag 10", text: "Volle Entschädigung und Reparatur abgeschlossen" }
            ]
          },

          /* CTA STRIP */
          {
            type: "dsrTemplate1.usecase.cta",
            enabled: true,
            title: "Hatten Sie auch einen Unfall?",
            subtitle: "Lassen Sie sich kostenfrei von DSR24 helfen – genau wie unsere zufriedenen Kunden!",
            buttoncaption: "Schadenfall melden",
            buttonlink: "report-damage.html",
            buttonnewtab: false
          },

          /* MORE SUCCESS STORIES (cards to other use-cases) */
          {
            type: "dsrTemplate1.usecase.moreStories",
            enabled: true,
            title: "Weitere Erfolgsgeschichten",
            items: [
              {
                slug: "jane-doe",
                title: "Jane Doe",
                quote: "„DSR24 hat mir geholfen, 2.500€ von der gegnerischen Versicherung zu erhalten!“",
                image: 401,
                buttoncaption: "Geschichte lesen",
                buttonlink: "use-case.html?id=1",
                buttonnewtab: false
              },
              {
                slug: "sarah-mueller",
                title: "Sarah Müller",
                quote: "„DSR24 hat sich um alles gekümmert. Ich musste mich um nichts sorgen!“",
                image: 401,
                buttoncaption: "Geschichte lesen",
                buttonlink: "use-case.html?id=3",
                buttonnewtab: false
              }
            ]
          }
        ]
      },

      /* EN */
      {
        url: "dsr24.de/en/use-case.html?id=2",
        lang: "EN",
        lastUpdated: "2026-02-12 13:45:10",
        blocks: [
          {
            type: "dsrTemplate1.usecase.hero",
            enabled: true,
            kicker: "#",
            title: "Michael Schmidt",
            meta: "45 years old, engineer from Berlin"
          },
          {
            type: "dsrTemplate1.usecase.back",
            enabled: true,
            label: "Back to Customer Reviews",
            url: "customer-reviews.html"
          },
          {
            type: "dsrTemplate1.usecase.profile",
            enabled: true,
            name: "Michael Schmidt",
            meta: "45 years old, engineer from Berlin",
            badges: ["Rear-end collision", "Lawyer & expert included"],
            quote: "Fast, professional, and stress-free. I truly recommend DSR24!",
            avatarImage: 301
          },
          {
            type: "dsrTemplate1.usecase.heroMedia",
            enabled: true,
            label: "Accident situation",
            image: 401
          },
          {
            type: "dsrTemplate1.usecase.video",
            enabled: true,
            title: "",
            videoUrl: "media/michael-schmidt.mp4",
            posterImage: 402,
            caption: "Watch the video"
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "car-crash",
            title: "The Situation",
            text:
              "On my way to work I was hit from behind at a red light. The impact was strong and my car suffered significant rear damage."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "warning",
            title: "The Challenge",
            text:
              "The opposing insurer tried to settle with a low offer and didn’t want to accept an independent expert assessment."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "handshake",
            title: "How DSR24 Helped",
            text:
              "DSR24 provided an independent expert and a specialized lawyer and coordinated everything:",
            bullets: [
              "Independent expert report with detailed damage assessment",
              "Legal representation against the insurance company",
              "Replacement car during repair",
              "Repair organization with a qualified partner workshop"
            ]
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "trophy",
            title: "The Result",
            text:
              "I received full compensation of over €4,200. The repair was completed professionally and the whole process was smooth."
          },
          {
            type: "dsrTemplate1.usecase.summary",
            enabled: true,
            servicesTitle: "Services Used",
            services: ["Lawyer", "Expert", "Replacement car", "Workshop"],
            timelineTitle: "Timeline",
            timeline: [
              { label: "Day 1", text: "Contacted DSR24, case documented" },
              { label: "Day 2–3", text: "Expert and lawyer assigned" },
              { label: "Day 4", text: "Lawyer negotiated with insurer" },
              { label: "Day 10", text: "Full compensation + repair completed" }
            ]
          },
          {
            type: "dsrTemplate1.usecase.cta",
            enabled: true,
            title: "Did you also have an accident?",
            subtitle: "Get free support from DSR24 – just like our satisfied customers!",
            buttoncaption: "Report Damage",
            buttonlink: "report-damage.html",
            buttonnewtab: false
          },
          {
            type: "dsrTemplate1.usecase.moreStories",
            enabled: true,
            title: "More Success Stories",
            items: [
              {
                slug: "jane-doe",
                title: "Jane Doe",
                quote: "“DSR24 helped me receive €2,500 from the opposing insurance company!”",
                image: 401,
                buttoncaption: "Read story",
                buttonlink: "use-case.html?id=1",
                buttonnewtab: false
              },
              {
                slug: "sarah-mueller",
                title: "Sarah Müller",
                quote: "“DSR24 handled everything. I didn’t have to worry about anything!”",
                image: 401,
                buttoncaption: "Read story",
                buttonlink: "use-case.html?id=3",
                buttonnewtab: false
              }
            ]
          }
        ]
      }
    ]
  },

  /* =====================================================
     2) SARAH MÜLLER
  ====================================================== */
  {
    slug: "sarah-mueller",
    contents: [
      {
        url: "dsr24.de/use-case.html?id=3",
        lang: "DE",
        lastUpdated: "2026-02-12 13:45:10",
        blocks: [
          {
            type: "dsrTemplate1.usecase.hero",
            enabled: true,
            kicker: "#",
            title: "Sarah Müller",
            meta: "28 Jahre, Lehrerin aus Hamburg"
          },
          {
            type: "dsrTemplate1.usecase.back",
            enabled: true,
            label: "Zurück zu Kundenstimmen",
            url: "customer-reviews.html"
          },
          {
            type: "dsrTemplate1.usecase.profile",
            enabled: true,
            name: "Sarah Müller",
            meta: "28 Jahre, Lehrerin aus Hamburg",
            badges: ["Kreuzungsunfall", "Komplettservice"],
            quote: "DSR24 hat sich um alles gekümmert. Ich musste mich um nichts sorgen!",
            avatarImage: 302
          },
          {
            type: "dsrTemplate1.usecase.heroMedia",
            enabled: true,
            label: "Unfallsituation",
            image: 401
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "car-crash",
            title: "Die Situation",
            text:
              "An einer unübersichtlichen Kreuzung missachtete ein anderer Fahrer meine Vorfahrt und kollidierte mit meiner Fahrerseite. Der Schreck war groß und ich war zunächst völlig überfordert."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "warning",
            title: "Die Herausforderung",
            text:
              "Als junge Lehrerin hatte ich weder Erfahrung noch Zeit für die komplexe Unfallabwicklung. Die vielen Ansprechpartner – Versicherung, Werkstatt, Gutachter – waren mir völlig fremd."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "handshake",
            title: "Wie DSR24 geholfen hat",
            text:
              "Eine Freundin empfahl mir DSR24. Vom ersten Kontakt an hatte ich einen persönlichen Ansprechpartner, der alles erklärte und koordinierte. DSR24 übernahm buchstäblich alles – ich musste nur mein Auto abgeben."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "trophy",
            title: "Das Ergebnis",
            text:
              "Nach drei Wochen war alles erledigt. Mein Auto wurde perfekt repariert, alle Kosten wurden übernommen und ich hatte nicht einen Cent Eigenanteil."
          },
          {
            type: "dsrTemplate1.usecase.summary",
            enabled: true,
            servicesTitle: "Genutzte Leistungen",
            services: ["Gutachter", "Leihwagen", "Werkstatt", "Persönlicher Betreuer"],
            timelineTitle: "Zeitverlauf",
            timeline: [
              { label: "Tag 1", text: "Ausführliche Beratung und Fallaufnahme" },
              { label: "Tag 2", text: "Gutachter, Werkstatt, Leihwagen organisiert" },
              { label: "Tag 3–20", text: "Professionelle Instandsetzung" },
              { label: "Tag 21", text: "Auto übergeben, alles kostenlos" }
            ]
          },
          {
            type: "dsrTemplate1.usecase.cta",
            enabled: true,
            title: "Hatten Sie auch einen Unfall?",
            subtitle: "Lassen Sie sich kostenfrei von DSR24 helfen – genau wie unsere zufriedenen Kunden!",
            buttoncaption: "Schadenfall melden",
            buttonlink: "report-damage.html",
            buttonnewtab: false
          },
          {
            type: "dsrTemplate1.usecase.moreStories",
            enabled: true,
            title: "Weitere Erfolgsgeschichten",
            items: [
              {
                slug: "jane-doe",
                title: "Jane Doe",
                quote: "„DSR24 hat mir geholfen, 2.500€ von der gegnerischen Versicherung zu erhalten!“",
                image: 401,
                buttoncaption: "Geschichte lesen",
                buttonlink: "use-case.html?id=1",
                buttonnewtab: false
              },
              {
                slug: "michael-schmidt",
                title: "Michael Schmidt",
                quote: "„Schnell, professionell und ohne Stress. Ich kann DSR24 wirklich empfehlen!“",
                image: 401,
                buttoncaption: "Geschichte lesen",
                buttonlink: "use-case.html?id=2",
                buttonnewtab: false
              }
            ]
          }
        ]
      },

      /* EN */
      {
        url: "dsr24.de/en/use-case.html?id=3",
        lang: "EN",
        lastUpdated: "2026-02-12 13:45:10",
        blocks: [
          {
            type: "dsrTemplate1.usecase.hero",
            enabled: true,
            kicker: "#",
            title: "Sarah Müller",
            meta: "28 years old, teacher from Hamburg"
          },
          {
            type: "dsrTemplate1.usecase.back",
            enabled: true,
            label: "Back to Customer Reviews",
            url: "customer-reviews.html"
          },
          {
            type: "dsrTemplate1.usecase.profile",
            enabled: true,
            name: "Sarah Müller",
            meta: "28 years old, teacher from Hamburg",
            badges: ["Intersection accident", "Full service"],
            quote: "DSR24 handled everything. I didn’t have to worry about anything!",
            avatarImage: 302
          },
          {
            type: "dsrTemplate1.usecase.heroMedia",
            enabled: true,
            label: "Accident situation",
            image: 401
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "car-crash",
            title: "The Situation",
            text:
              "At a confusing intersection another driver ignored my right of way and hit the driver’s side of my car. I was shocked and felt overwhelmed."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "warning",
            title: "The Challenge",
            text:
              "I didn’t have the time or experience to deal with all parties involved — insurer, workshop, expert, paperwork."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "handshake",
            title: "How DSR24 Helped",
            text:
              "A friend recommended DSR24. From the first minute I had a personal advisor who explained everything and coordinated the entire process."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "trophy",
            title: "The Result",
            text:
              "After three weeks everything was resolved. My car was repaired perfectly, all costs were covered, and I didn’t pay anything out of pocket."
          },
          {
            type: "dsrTemplate1.usecase.summary",
            enabled: true,
            servicesTitle: "Services Used",
            services: ["Expert", "Replacement car", "Workshop", "Personal advisor"],
            timelineTitle: "Timeline",
            timeline: [
              { label: "Day 1", text: "Consultation and case intake" },
              { label: "Day 2", text: "Expert, workshop and replacement car arranged" },
              { label: "Day 3–20", text: "Professional repair" },
              { label: "Day 21", text: "Car returned, everything covered" }
            ]
          },
          {
            type: "dsrTemplate1.usecase.cta",
            enabled: true,
            title: "Did you also have an accident?",
            subtitle: "Get free support from DSR24 – just like our satisfied customers!",
            buttoncaption: "Report Damage",
            buttonlink: "report-damage.html",
            buttonnewtab: false
          },
          {
            type: "dsrTemplate1.usecase.moreStories",
            enabled: true,
            title: "More Success Stories",
            items: [
              {
                slug: "jane-doe",
                title: "Jane Doe",
                quote: "“DSR24 helped me receive €2,500 from the opposing insurance company!”",
                image: 401,
                buttoncaption: "Read story",
                buttonlink: "use-case.html?id=1",
                buttonnewtab: false
              },
              {
                slug: "michael-schmidt",
                title: "Michael Schmidt",
                quote: "“Fast, professional, and stress-free. I truly recommend DSR24!”",
                image: 401,
                buttoncaption: "Read story",
                buttonlink: "use-case.html?id=2",
                buttonnewtab: false
              }
            ]
          }
        ]
      }
    ]
  },

  /* =====================================================
     3) JANE DOE
  ====================================================== */
  {
    slug: "jane-doe",
    contents: [
      {
        url: "dsr24.de/use-case.html?id=1",
        lang: "DE",
        lastUpdated: "2026-02-12 13:45:10",
        blocks: [
          {
            type: "dsrTemplate1.usecase.hero",
            enabled: true,
            kicker: "#",
            title: "Jane Doe",
            meta: "32 Jahre, Ärztin aus München"
          },
          {
            type: "dsrTemplate1.usecase.back",
            enabled: true,
            label: "Zurück zu Kundenstimmen",
            url: "customer-reviews.html"
          },
          {
            type: "dsrTemplate1.usecase.profile",
            enabled: true,
            name: "Jane Doe",
            meta: "32 Jahre, Ärztin aus München",
            badges: ["Parkplatzunfall", "Vollständige Regulierung"],
            quote: "DSR24 hat mir geholfen, 2.500€ von der gegnerischen Versicherung zu erhalten!",
            avatarImage: 303
          },
          {
            type: "dsrTemplate1.usecase.heroMedia",
            enabled: true,
            label: "Unfallsituation",
            image: 401
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "car-crash",
            title: "Die Situation",
            text:
              "Nach meiner Schicht im Krankenhaus wollte ich nach Hause fahren. Auf dem Parkplatz stellte ich fest, dass mein Auto beschädigt wurde. Ein anderes Fahrzeug hatte beim Rückwärtsfahren meine Beifahrerseite getroffen."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "warning",
            title: "Die Herausforderung",
            text:
              "Der Verursacher hinterließ zwar einen Zettel, aber ich wusste nicht, wie ich am besten vorgehen sollte. Die Versicherung reagierte zögerlich, und der Schaden war deutlich größer als zunächst angenommen."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "handshake",
            title: "Wie DSR24 geholfen hat",
            text:
              "DSR24 erklärte mir jeden Schritt, organisierte einen unabhängigen Gutachter und übernahm die Kommunikation mit der gegnerischen Versicherung. Auch die Reparatur wurde in einer Partnerwerkstatt koordiniert."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "trophy",
            title: "Das Ergebnis",
            text:
              "Nach wenigen Wochen war mein Fahrzeug repariert. Die gegnerische Versicherung übernahm die Kosten vollständig – insgesamt über 2.500€."
          },
          {
            type: "dsrTemplate1.usecase.summary",
            enabled: true,
            servicesTitle: "Genutzte Leistungen",
            services: ["Gutachter", "Werkstatt", "Kommunikation mit Versicherung"],
            timelineTitle: "Zeitverlauf",
            timeline: [
              { label: "Tag 1", text: "Fallaufnahme und Beratung" },
              { label: "Tag 2", text: "Gutachten organisiert" },
              { label: "Tag 3–14", text: "Abwicklung mit Versicherung" },
              { label: "Tag 15+", text: "Reparatur abgeschlossen" }
            ]
          },
          {
            type: "dsrTemplate1.usecase.cta",
            enabled: true,
            title: "Hatten Sie auch einen Unfall?",
            subtitle: "Lassen Sie sich kostenfrei von DSR24 helfen – genau wie unsere zufriedenen Kunden!",
            buttoncaption: "Schadenfall melden",
            buttonlink: "report-damage.html",
            buttonnewtab: false
          },
          {
            type: "dsrTemplate1.usecase.moreStories",
            enabled: true,
            title: "Weitere Erfolgsgeschichten",
            items: [
              {
                slug: "michael-schmidt",
                title: "Michael Schmidt",
                quote: "„Schnell, professionell und ohne Stress. Ich kann DSR24 wirklich empfehlen!“",
                image: 401,
                buttoncaption: "Geschichte lesen",
                buttonlink: "use-case.html?id=2",
                buttonnewtab: false
              },
              {
                slug: "sarah-mueller",
                title: "Sarah Müller",
                quote: "„DSR24 hat sich um alles gekümmert. Ich musste mich um nichts sorgen!“",
                image: 401,
                buttoncaption: "Geschichte lesen",
                buttonlink: "use-case.html?id=3",
                buttonnewtab: false
              }
            ]
          }
        ]
      },

      /* EN */
      {
        url: "dsr24.de/en/use-case.html?id=1",
        lang: "EN",
        lastUpdated: "2026-02-12 13:45:10",
        blocks: [
          {
            type: "dsrTemplate1.usecase.hero",
            enabled: true,
            kicker: "#",
            title: "Jane Doe",
            meta: "32 years old, doctor from Munich"
          },
          {
            type: "dsrTemplate1.usecase.back",
            enabled: true,
            label: "Back to Customer Reviews",
            url: "customer-reviews.html"
          },
          {
            type: "dsrTemplate1.usecase.profile",
            enabled: true,
            name: "Jane Doe",
            meta: "32 years old, doctor from Munich",
            badges: ["Parking accident", "Full compensation"],
            quote: "DSR24 helped me receive €2,500 from the opposing insurance company!",
            avatarImage: 303
          },
          {
            type: "dsrTemplate1.usecase.heroMedia",
            enabled: true,
            label: "Accident situation",
            image: 401
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "car-crash",
            title: "The Situation",
            text:
              "After my hospital shift I discovered my car had been damaged in the parking lot. Another vehicle hit the passenger side while reversing."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "warning",
            title: "The Challenge",
            text:
              "Although the driver left a note, I wasn’t sure how to proceed. The insurer reacted slowly and the damage was more serious than expected."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "handshake",
            title: "How DSR24 Helped",
            text:
              "DSR24 explained each step, arranged an independent expert, handled communication with the opposing insurer, and coordinated the repair."
          },
          {
            type: "dsrTemplate1.usecase.section",
            enabled: true,
            icon: "trophy",
            title: "The Result",
            text:
              "Within a few weeks my car was repaired and the opposing insurer covered the full costs — over €2,500."
          },
          {
            type: "dsrTemplate1.usecase.summary",
            enabled: true,
            servicesTitle: "Services Used",
            services: ["Expert", "Workshop", "Insurance communication"],
            timelineTitle: "Timeline",
            timeline: [
              { label: "Day 1", text: "Case intake and consultation" },
              { label: "Day 2", text: "Expert report arranged" },
              { label: "Day 3–14", text: "Insurance handling" },
              { label: "Day 15+", text: "Repair completed" }
            ]
          },
          {
            type: "dsrTemplate1.usecase.cta",
            enabled: true,
            title: "Did you also have an accident?",
            subtitle: "Get free support from DSR24 – just like our satisfied customers!",
            buttoncaption: "Report Damage",
            buttonlink: "report-damage.html",
            buttonnewtab: false
          },
          {
            type: "dsrTemplate1.usecase.moreStories",
            enabled: true,
            title: "More Success Stories",
            items: [
              {
                slug: "michael-schmidt",
                title: "Michael Schmidt",
                quote: "“Fast, professional, and stress-free. I truly recommend DSR24!”",
                image: 401,
                buttoncaption: "Read story",
                buttonlink: "use-case.html?id=2",
                buttonnewtab: false
              },
              {
                slug: "sarah-müller",
                title: "Sarah Müller",
                quote: "“DSR24 handled everything. I didn’t have to worry about anything!”",
                image: 401,
                buttoncaption: "Read story",
                buttonlink: "use-case.html?id=3",
                buttonnewtab: false
              }
            ]
          }
        ]
      }
    ]
  }
];

