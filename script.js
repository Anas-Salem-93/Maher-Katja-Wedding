const translations = {
    de: {
        title: "Wir heiraten!",
        couple_names: "Anna & Lukas", // Ändere die Namen hier
        date: "20. August 2024",
        program_title: "Das Programm",
        ceremony: "Trauung",
        ceremony_desc: "Kirche St. Beispiel, Musterstadt",
        reception: "Sektempfang",
        reception_desc: "Im Garten der Location",
        dinner: "Abendessen",
        dinner_desc: "Festsaal",
        party: "Party",
        party_desc: "Open End!",
        menu_title: "Das Menü",
        starter: "Vorspeise",
        starter_desc: "Kürbissuppe mit Kernöl",
        main: "Hauptgang",
        main_desc: "Rinderbraten oder Vegane Lasagne",
        dessert: "Dessert",
        dessert_desc: "Hochzeitstorte & Buffet",
        upload_title: "Fotos & Videos",
        upload_text: "Bitte ladet eure schönsten Momente hier hoch.",
        upload_btn: "Bilder hochladen"
    },
    en: {
        title: "We are getting married!",
        couple_names: "Anna & Lukas",
        date: "August 20th, 2024",
        program_title: "The Program",
        ceremony: "Ceremony",
        ceremony_desc: "St. Example Church",
        reception: "Reception",
        reception_desc: "In the garden",
        dinner: "Dinner",
        dinner_desc: "Banquet Hall",
        party: "Party",
        party_desc: "All night long!",
        menu_title: "The Menu",
        starter: "Starter",
        starter_desc: "Pumpkin soup",
        main: "Main Course",
        main_desc: "Roast beef or Vegan Lasagna",
        dessert: "Dessert",
        dessert_desc: "Wedding Cake & Buffet",
        upload_title: "Photos & Videos",
        upload_text: "Please upload your favorite moments here.",
        upload_btn: "Upload Photos"
    },
    ar: {
        title: "سنحتفل بزفافنا!",
        couple_names: "آنا ولوكاس",
        date: "20 أغسطس 2024",
        program_title: "برنامج الحفل",
        ceremony: "مراسم الزواج",
        ceremony_desc: "كنيسة القديس مثال",
        reception: "حفل استقبال",
        reception_desc: "في حديقة المكان",
        dinner: "العشاء",
        dinner_desc: "قاعة الاحتفالات",
        party: "الحفل",
        party_desc: "حتى الصباح!",
        menu_title: "قائمة الطعام",
        starter: "المقبلات",
        starter_desc: "شوربة القرع",
        main: "الطبق الرئيسي",
        main_desc: "لحم مشوي أو لازانيا نباتية",
        dessert: "الحلوى",
        dessert_desc: "كعكة الزفاف والبوفيه",
        upload_title: "الصور والفيديوهات",
        upload_text: "يرجى تحميل أجمل اللحظات هنا.",
        upload_btn: "تحميل الصور"
    },
    cs: {
        title: "Budeme se brát!",
        couple_names: "Anna & Lukas",
        date: "20. srpna 2024",
        program_title: "Program",
        ceremony: "Obřad",
        ceremony_desc: "Kostel sv. Příklad",
        reception: "Recepce",
        reception_desc: "V zahradě",
        dinner: "Večeře",
        dinner_desc: "Slavnostní sál",
        party: "Párty",
        party_desc: "Až do rána!",
        menu_title: "Menu",
        starter: "Předkrm",
        starter_desc: "Dýňová polévka",
        main: "Hlavní chod",
        main_desc: "Hovězí pečeně nebo Veganské lasagne",
        dessert: "Dezert",
        dessert_desc: "Svatební dort & bufet",
        upload_title: "Fotky a Videa",
        upload_text: "Nahrajte sem prosím své oblíbené momenty.",
        upload_btn: "Nahrát fotky"
    }
};

function changeLanguage(lang) {
    // Hole alle Elemente, die übersetzt werden sollen
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // RTL (Rechts-nach-Links) für Arabisch aktivieren
    if (lang === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}