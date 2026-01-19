const translations = {
    de: {
        title: "Wir heiraten!",
        couple_names: "Maher & Katja",
        date: "04. Juli 2026",
        program_title: "Das Programm",
        
        // Freitag
        friday_date: "Freitag, 03.07.2026",
        friday_note: "(Nur für Gäste von außerhalb Prags)",
        friday_event: "Get-together",
        friday_desc: "Bei Katjas Eltern. Für Essen & Trinken ist gesorgt.\nAdresse: Masarykovo nábřeží 4, Prag 2",
        
        // Samstag
        saturday_date: "Samstag, 04.07.2026",
        ceremony: "Kirchliche Trauung",
        ceremony_desc: "Kirche St. Martin in der Mauer\nAdresse: Martinská 8, Prag 1",
        reception: "Feier & Kuchenanschnitt",
        reception_desc: "Pavilon Bohemia\nAdresse: Na Výstavišti 13",
        dinner: "Abendessen",
        dinner_desc: "Buffet/Menü im Pavilon",
        
        // Geschenke & Upload
        gift_title: "Geschenke",
        gift_text: "Das größte Geschenk ist, dass ihr diesen Tag mit uns feiert. Wer uns dennoch etwas schenken möchte: Wir würden uns sehr über einen Beitrag zu unseren Flitterwochen im Oktober (Ägypten) freuen.",
        upload_title: "Fotos & Videos",
        upload_text: "Bitte ladet eure Bilder und Videos hier hoch, damit wir sie sammeln können.",
        upload_btn: "Bilder hochladen"
    },
    en: {
        title: "We are getting married!",
        couple_names: "Maher & Katja",
        date: "July 4th, 2026",
        program_title: "The Program",
        
        friday_date: "Friday, July 3rd, 2026",
        friday_note: "(Only for guests arriving from out of Prague)",
        friday_event: "Get-together",
        friday_desc: "At Katja's parents' place. Food & drinks provided.\nAddress: Masarykovo nábřeží 4, Prague 2",
        
        saturday_date: "Saturday, July 4th, 2026",
        ceremony: "Wedding Ceremony",
        ceremony_desc: "Church St. Martin in the Wall\nAddress: Martinská 8, Prague 1",
        reception: "Celebration & Cake",
        reception_desc: "Pavilon Bohemia\nAddress: Na Výstavišti 13",
        dinner: "Dinner",
        dinner_desc: "Dinner at the Pavilion",
        
        gift_title: "Gifts",
        gift_text: "Your presence is the greatest gift. However, should you wish to give something, we would appreciate a contribution towards our honeymoon in Egypt this October.",
        upload_title: "Photos & Videos",
        upload_text: "Please upload your photos and videos here so we can collect them.",
        upload_btn: "Upload Photos"
    },
    ar: {
        title: "نتشرف بدعوتكم لحفل زفافنا",
        couple_names: "ماهر و كاتيا",
        date: ".4 يوليو 2026",
        program_title: "برنامج الحفل",
        
        friday_date: "الجمعة، 3 يوليو 2026",
        friday_note: "(فقط للضيوف القادمين من خارج براغ)",
        friday_event: "لقاء التعارف",
        friday_desc: "في منزل والدي كاتيا. الطعام والمشروبات متوفرة.\nالعنوان: Masarykovo nábřeží 4, Prague 2",
        
        saturday_date: "السبت، 4 يوليو 2026",
        ceremony: "مراسم الزواج",
        ceremony_desc: "كنيسة القديس مارتن في الجدار\nالعنوان: Martinská 8, Prague 1",
        reception: "الاحتفال وتقطيع الكعك",
        reception_desc: "جناح بوهيميا (Pavilon Bohemia)\nالعنوان: Na Výstavišti 13",
        dinner: "العشاء",
        dinner_desc: "العشاء في الجناح",
        
        gift_title: "هدايا الزفاف",
        gift_text: "وجودكم معنا هو أجمل هدية. لمن يرغب في تقديم هدية، نسعد بمساهمتكم في رحلة شهر العسل إلى مصر في شهر أكتوبر.",
        upload_title: "الصور والفيديوهات",
        upload_text: "يرجى تحميل الصور والفيديوهات هنا لنحتفظ بها للذكرى.",
        upload_btn: "تحميل الصور"
    },
    cs: {
        title: "Budeme se brát!",
        couple_names: "Maher & Katja",
        date: " 4. července 2026",
        program_title: "Program",
        
        friday_date: "Pátek, 3. 7. 2026",
        friday_note: "(Pouze pro hosty mimo Prahu)",
        friday_event: "Setkání",
        friday_desc: "U Katčiných rodičů. Jídlo a pití zajištěno.\nAdresa: Masarykovo nábřeží 4, Praha 2",
        
        saturday_date: "Sobota, 4. 7. 2026",
        ceremony: "Svatební obřad",
        ceremony_desc: "Kostel sv. Martina ve zdi\nAdresa: Martinská 8, Praha 1",
        reception: "Oslava a dort",
        reception_desc: "Pavilon Bohemia\nAdresa: Na Výstavišti 13",
        dinner: "Večeře",
        dinner_desc: "Společná večeře v pavilonu",
        
        gift_title: "Dary",
        gift_text: "Největším darem je pro nás to, že budete s námi. Pokud nás přesto chcete obdarovat, budeme rádi za příspěvek na naši svatební cestu do Egypta v říjnu.",
        upload_title: "Fotky a Videa",
        upload_text: "Prosím, nahrajte své fotky a videa sem.",
        upload_btn: "Nahrát fotky"
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // .innerText statt .textContent damit Zeilenumbrüche (\n) funktionieren
            element.innerText = translations[lang][key]; 
        }
    });

    if (lang === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}