/**
 * SEARCH MY VOTE — Bilingual Localization System (Hindi & English)
 * Default Language: Hindi ('hi')
 * Toggleable to English ('en')
 */

const TRANSLATIONS = {
  hi: {
    // Brand & Navbar
    brand_subtitle: "मतदाता सहायता एवं जन शिकायत मंच",
    nav_file_btn: "शिकायत दर्ज करें",
    nav_track_btn: "स्थिति ट्रैक करें",

    // Hero Section
    hero_badge: "लोकतांत्रिक मतदाता अधिकार एवं निर्वाचक नामावली सहायता",
    hero_title_hindi: "आपका वोट.<br><span>आपकी आवाज़.</span>",
    hero_title_sub: "Your Vote is <em>Your Voice.</em>",
    hero_subtitle: "क्या मतदाता सूची (SIR 2026) से आपका नाम गायब है? बिना सूचना नाम हटने या गलत विवरण की गोपनीय शिकायत दर्ज करें।",
    hero_hindi_sub: "अगर आपका नाम मतदाता सूची से हट गया है या रिकॉर्ड में गलत जानकारी है, तो अपनी शिकायत दर्ज करें। लोकदल दस्तावेज़ एकत्र कर कानूनी और लोकतांत्रिक माध्यमों से मुद्दा उठाने का प्रयास करेगा।",
    hero_btn_register: "अपनी शिकायत दर्ज करें ↗",
    hero_btn_track: "स्थिति ट्रैक करें →",
    hero_scroll_hint: "शिकायत दर्ज करने या ट्रैक करने के लिए नीचे स्क्रॉल करें",

    // Sage Features
    pillar1_title: "राष्ट्रव्यापी दायरा",
    pillar1_desc: "28 राज्यों और 8 केंद्र शासित प्रदेशों का सत्यापित निर्वाचन क्षेत्र कवरेज।",
    pillar2_title: "साक्ष्य आधारित",
    pillar2_desc: "मतदाता पर्ची, पुराना पहचान पत्र या नोटिस प्रमाण के रूप में संलग्न करें।",
    pillar3_title: "गोपनीय ट्रैकिंग",
    pillar3_desc: "केस रिफरेंस और 10-अंकों के गुप्त सुरक्षा पिन से रियल-टाइम जांच।",
    pillar4_title: "कानूनी व लोकतांत्रिक पैरवी",
    pillar4_desc: "अधिकृत विधिक सेल द्वारा समीक्षा और संवैधानिक अधिकारों का संरक्षण।",

    // How It Works Section
    how_it_works_kicker: "यह कैसे काम करता है · HOW IT WORKS",
    how_it_works_title: "अपनी शिकायत को सुने जाने के लिए तीन आसान कदम",
    step1_title: "अपनी शिकायत दर्ज करें",
    step1_desc: "मोबाइल या वेबसाइट पर जाकर अपनी समस्या और आवश्यक जानकारी भरकर शिकायत दर्ज करें।",
    step2_title: "अपने निर्वाचन क्षेत्र के विवरण की पुष्टि करें",
    step2_desc: "यह सुनिश्चित करें कि आपकी शिकायत सही राज्य, जिला, लोकसभा और विधानसभा निर्वाचन क्षेत्र से संबंधित है।",
    step3_title: "अपनी शिकायत की स्थिति ट्रैक करें",
    step3_desc: "दर्ज शिकायत की प्रगति को अपने केस रिफरेंस और सुरक्षा पिन (PIN) के माध्यम से कभी भी देखें।",

    // Tabs
    tab_file: "01. शिकायत दर्ज करें",
    tab_track: "02. स्थिति ट्रैक करें",

    // Form Headers
    form_title: "अपनी शिकायत दर्ज करें",
    form_subtitle: "केंद्रीय डेटाबेस में आधिकारिक शिकायत दर्ज करने के लिए नीचे अपना विवरण भरें।",

    // Form Section 01
    sec1_title: "01 व्यक्तिगत एवं संपर्क विवरण",
    sec1_sub: "नाम और संपर्क विवरण · केवल शिकायत संबंधी संवाद के लिए",
    lbl_fullname: "पूरा नाम *",
    ph_fullname: "जैसा मतदाता पहचान पत्र या सूची में है",
    lbl_mobile: "मोबाइल नंबर *",
    ph_mobile: "10 अंकों का मोबाइल नंबर",
    lbl_email: "ईमेल",
    ph_email: "उदाहरण: rajesh@example.com",
    lbl_postcode: "पिन कोड",
    ph_postcode: "6 अंकों का पोस्टल पिन कोड",
    lbl_address: "पता",
    ph_address: "मकान नंबर, सड़क, मोहल्ला या कॉलोनी",

    // Form Section 02
    sec2_title: "02 आपका वोट कहाँ पंजीकृत है?",
    sec2_sub: "राज्य, जिला, लोकसभा एवं विधानसभा निर्वाचन क्षेत्र",
    lbl_state: "राज्य / केंद्र शासित प्रदेश *",
    opt_state: "राज्य या केंद्र शासित प्रदेश चुनें",
    lbl_district: "जिला *",
    opt_district: "जिला चुनें",
    lbl_loksabha: "लोकसभा निर्वाचन क्षेत्र",
    opt_loksabha: "लोकसभा क्षेत्र चुनें",
    lbl_assembly: "विधानसभा निर्वाचन क्षेत्र",
    opt_assembly: "विधानसभा क्षेत्र चुनें",
    lbl_village: "गांव या वार्ड",
    ph_village: "गांव का नाम या नगरपालिका वार्ड",
    lbl_booth: "मतदान केंद्र / पोलिंग बूथ (यदि ज्ञात हो)",
    ph_booth: "जैसे: प्राथमिक विद्यालय कक्ष संख्या 2",
    lbl_part: "निर्वाचक नामावली भाग संख्या",
    ph_part: "जैसे: 142",
    lbl_serial: "निर्वाचक नामावली क्रमांक संख्या",
    ph_serial: "जैसे: 589",

    // Form Section 03
    sec3_title: "03 SIR 2026 शिकायत का विवरण",
    sec3_sub: "समस्या और उसके पहले किये गये प्रयास",
    lbl_nature: "शिकायत का प्रकार *",
    opt_nature: "अपनी समस्या का चयन करें",
    lbl_stage: "SIR का संबंधित चरण",
    opt_stage: "चरण चुनें",
    lbl_incident_date: "समस्या कब पता चली?",
    ph_incident_date: "जैसे: अक्टूबर 2025 या तारीख",
    lbl_card_status: "वोटर कार्ड की स्थिति *",
    opt_card_status: "स्थिति चुनें",
    lbl_epic: "वोटर आईडी / EPIC संख्या",
    ph_epic: "जैसे: ABC1234567",
    lbl_last_seen: "पिछली बार मतदाता सूची में नाम कब था?",
    ph_last_seen: "जैसे: 2024 लोकसभा चुनाव",
    lbl_eci_ref: "पूर्व ECI आवेदन / अपील संख्या",
    ph_eci_ref: "जैसे: फॉर्म 6 / 7 / 8 रिफरेंस नंबर",
    lbl_desc: "पूरी शिकायत विस्तार से लिखें *",
    ph_desc: "विस्तार से बताएं कि क्या समस्या हुई...",
    desc_help: "कृपया आधार नंबर, बैंक खाता, जाति, धर्म या राजनीतिक पसंद का उल्लेख न करें।",

    // Form Section 04
    sec4_title: "04 प्रमाण अपलोड करें",
    sec4_sub: "प्रमाण अपलोड करें — ऐच्छिक; मतदाता पहचान पत्र न होने पर भी शिकायत दर्ज कर सकते हैं",
    upload_title: "वोटर कार्ड या सहायक प्रमाण संलग्न करें",
    upload_sub: "पुराना वोटर कार्ड, पिछली मतदाता सूची का पृष्ठ, नोटिस या स्क्रीनशॉट",
    upload_note: "PDF / JPG / PNG / WEBP · अधिकतम 6 MB. आधार अपलोड न करें।",

    // Form Section 05
    sec5_title: "05 आप इस वेबसाइट तक कैसे पहुंचे?",
    sec5_sub: "इससे लोकदल टीम को यह समझने में सहायता मिलती है कि शिकायतें कहाँ से आ रही हैं",
    lbl_source: "माध्यम / स्रोत",
    opt_source: "माध्यम चुनें",
    consent_req: "मैं पुष्टि करता/करती हूँ कि यह शिकायत मेरे या मेरे द्वारा अधिकृत व्यक्ति के वास्तविक मतदाता पंजीकरण से संबंधित है। दी गई जानकारी मेरी सर्वोत्तम जानकारी के अनुसार सत्य है। *",
    consent_rep: "मैं सर्च माय वोट / लोकदल लीगल एड टीम को चुनाव अधिकारियों या उचित मंचों के समक्ष आवश्यकता पड़ने पर इस शिकायत का प्रतिनिधित्व करने के लिए अधिकृत करता/करती हूँ (वैकल्पिक)।",
    legal_box_title: "सूचना: गैर-सरकारी मतदाता अधिकार पहल",
    legal_box_desc: "सर्च माय वोट (Search My Vote) नागरिकों की मतदाता सूची संबंधी समस्याओं में सहायता के लिए लोकदल की एक गैर-सरकारी पहल है। यहाँ दर्ज शिकायतें कानूनी सहायता, सत्यापन और लोकतांत्रिक पैरवी के लिए हैं। हम कोई शुल्क नहीं लेते और हम भारत निर्वाचन आयोग (ECI) नहीं हैं।",
    btn_reset: "फॉर्म रीसेट करें",
    btn_submit: "शिकायत दर्ज करें और टिकट प्राप्त करें ↗",

    // Sidebar
    sb1_title: "शुरू करने से पहले",
    sb1_item1: "स्थिति अलर्ट के लिए वैध 10-अंकों का मोबाइल नंबर",
    sb1_item2: "निर्वाचन क्षेत्र विवरण (राज्य, जिला, विधानसभा)",
    sb1_item3: "नाम हटने या विलोपन की स्थिति का विवरण",
    sb2_title: "आपका डेटा सुरक्षित है",
    sb2_desc: "आपकी जानकारी भारतीय डेटा संरक्षण (DPDP) सिद्धांतों के तहत गोपनीय रखी जाती है। इसका उपयोग केवल नागरिक सहायता और लोकतांत्रिक अधिकारों के लिए किया जाता है।",
    sb3_title: "स्वतंत्र नागरिक मंच",
    sb3_desc: "लोकदल संवैधानिक मताधिकारों और विधिक प्रतिनिधित्व की वकालत करता है। यह पोर्टल आधिकारिक मतदाता सूची में सीधा बदलाव नहीं करता है।",

    // Track Face
    track_title: "शिकायत की स्थिति जांचें",
    track_sub: "अपनी दर्ज शिकायत की वास्तविक स्थिति और केसवर्कर की टिप्पणियां देखने के लिए केस रिफरेंस और गुप्त पिन दर्ज करें।",
    lbl_caseref: "केस रिफरेंस नंबर *",
    ph_caseref: "जैसे: SMV-2026-XXXXXXXXXX",
    lbl_pin: "निजी ट्रैकिंग पिन (PIN) *",
    ph_pin: "10-अक्षरों का गुप्त पिन",
    btn_track: "स्थिति देखें →",
    track_privacy_note: "पिन खो गया है? पहचान सत्यापन के साथ सर्च माय वोट टीम से संपर्क करें। गोपनीयता के लिए, केवल मोबाइल नंबर से स्थिति नहीं देखी जा सकती।",
    track_btn_back: "← दूसरी शिकायत दर्ज करें",

    // Closing Pledge & Footer
    pledge_kicker: "हमारा संकल्प",
    pledge_title: "भारतीय लोकतंत्र के प्रति हमारी प्रतिबद्धता",
    pledge_sub: "प्रत्येक भारतीय नागरिक का यह संवैधानिक अधिकार है कि उसका नाम मतदाता सूची में सही दर्ज हो।",
    pledge1_title: "1. 100% गोपनीयता",
    pledge1_desc: "आपकी व्यक्तिगत जानकारी पूर्णतः सुरक्षित है। हम कभी भी आपका विवरण व्यावसायिक या अवांछित प्रचार के लिए साझा नहीं करते।",
    pledge2_title: "2. 48 घंटे में केस इंटेक",
    pledge2_desc: "दर्ज प्रत्येक शिकायत को केंद्रीय रजिस्टर में दर्ज कर अधिकृत केसवर्करों द्वारा प्राथमिकता से समीक्षा की जाती है।",
    pledge3_title: "3. पारदर्शी ट्रैकिंग",
    pledge3_desc: "आपको तुरंत केस रिफरेंस और सुरक्षित पिन जारी किया जाता है जिससे आप कभी भी प्रगति देख सकते हैं।",
    legal_footer_title: "वैधानिक सूचना",
    legal_footer_desc: "SearchMyVote.com लोकदल द्वारा प्रायोजित एक स्वतंत्र नागरिक सहायता व शिकायत निवारण हेल्पलाइन है। यह भारत निर्वाचन आयोग (ECI) की आधिकारिक वेबसाइट नहीं है और आधिकारिक निर्वाचक नामावली में सीधे बदलाव नहीं करती।",
    support_title: "नागरिक सहायता केंद्र",
    support_desc: "क्या आपको अपनी शिकायत के संबंध में सहायता चाहिए?",
    support_hours: "समय: सोम – शनि (प्रातः 9:00 बजे – सायं 7:00 बजे IST)",
    copyright: "© 2026 सर्च माय वोट (Search My Vote). सर्वाधिकार सुरक्षित।",

    // Success Modal
    modal_title: "शिकायत सफलतापूर्वक दर्ज हुई!",
    modal_desc: "आपका मामला सर्च माय वोट के केंद्रीय रजिस्टर में दर्ज हो गया है। अपनी शिकायत को ट्रैक करने के लिए नीचे दिए गए दोनों क्रेडेंशियल्स सुरक्षित रखें:",
    modal_caseref_lbl: "केस रिफरेंस नंबर",
    modal_pin_lbl: "निजी ट्रैकिंग पिन (PIN)",
    modal_note: "पिन खो जाने पर पहचान सत्यापन आवश्यक होगा। गोपनीयता हेतु केवल मोबाइल नंबर से स्थिति नहीं देखी जा सकती।",
    btn_done: "संपन्न",
    btn_receipt: "रसीद डाउनलोड करें 📄",
    btn_track_now: "अभी ट्रैक करें ➔",
    badge_optional: "वैकल्पिक",

    // Main Navigation Links
    nav_how: "प्रक्रिया",
    nav_rights: "संवैधानिक अधिकार",
    nav_history: "मतदान इतिहास",
    nav_sir: "SIR 2026",
    nav_faq: "अक्सर पूछे जाने वाले प्रश्न",

    // Civic Section: Constitutional Rights
    rights_kicker: "संवैधानिक सुरक्षा एवं वैधानिक प्रावधान",
    rights_title: "अपने संवैधानिक मतदान अधिकार जानिए",
    rights_sub: "भारतीय संविधान और लोक प्रतिनिधित्व अधिनियम के तहत प्रत्येक पात्र नागरिक को मताधिकार प्राप्त है। कोई भी वैध मतदाता मनमाने ढंग से नामावली से नहीं हटाया जा सकता।",
    r_art324_title: "अनुच्छेद 324: स्वतंत्र निर्वाचन अधीक्षण",
    r_art324_desc: "संसद और राज्य विधानसभाओं के सभी निर्वाचनों के अधीक्षण, निर्देशन और नियंत्रण का दायित्व एक स्वतंत्र निर्वाचन आयोग में निहित है।",
    r_art325_title: "अनुच्छेद 325: धर्म, मूलवंश, जाति या लिंग के आधार पर कोई भेदभाव नहीं",
    r_art325_desc: "प्रत्येक प्रादेशिक निर्वाचन क्षेत्र के लिए एक सामान्य निर्वाचक नामावली होगी; केवल धर्म, मूलवंश, जाति या लिंग के आधार पर कोई अपात्र नहीं होगा।",
    r_art326_title: "अनुच्छेद 326: वयस्क मताधिकार की संवैधानिक गारंटी",
    r_art326_desc: "18 वर्ष या उससे अधिक आयु का प्रत्येक भारतीय नागरिक मतदान हेतु पंजीकृत होने का हकदार है, जब तक कि विधि द्वारा अयोग्य न घोषित हो।",
    r_rpa50_title: "RPA 1950: निर्वाचक नामावली तैयार व पुनरीक्षण",
    r_rpa50_desc: "लोक प्रतिनिधित्व अधिनियम 1950 की धारा 14-25 के तहत मतदाता सूची तैयार करने, दावे, आपत्तियां और अपील (धारा 24) के वैधानिक अधिकार तय हैं।",
    r_rpa51_title: "RPA 1951: मतदान का वैधानिक अधिकार",
    r_rpa51_desc: "अधिनियम की धारा 62 स्पष्ट करती है कि निर्वाचक नामावली में दर्ज प्रत्येक व्यक्ति मतदान का हकदार है। अनधिकृत विलोपन इस अधिकार का हनन है।",
    r_remedy_title: "आधिकारिक ECI उपचार: फॉर्म 6, 7 और 8",
    r_remedy_desc: "नाम जोड़ने के लिए फॉर्म 6, विलोपन या आपत्ति के लिए फॉर्म 7, तथा सुधार या निवास स्थानांतरण के लिए फॉर्म 8 का उपयोग करें।",
    r_alert_title: "महत्वपूर्ण विधिक अंतर: वोटर आईडी कार्ड (EPIC) बनाम सक्रिय निर्वाचक नामावली",
    r_alert_desc: "केवल वोटर पहचान पत्र (EPIC) होना वोट डालने की गारंटी नहीं देता। मतदान के दिन संबंधित मतदान केंद्र की वर्तमान निर्वाचक नामावली में आपका नाम होना अनिवार्य है। यदि आपका नाम गलत तरीके से कट गया है, तो तुरंत फॉर्म 6 या फॉर्म 8 भरकर पुनरीक्षण की मांग करें।",
    r_sources_label: "आधिकारिक वैधानिक स्रोत:",

    // Civic Section: Voting History Timeline
    history_kicker: "संवैधानिक यात्रा (1950–2026)",
    history_title: "भारत में लोकतांत्रिक मतदान का विकास",
    history_sub: "1950 में स्वतंत्र निर्वाचन आयोग की स्थापना से लेकर डिजिटल आधुनिकिकरण और SIR 2026 तक भारत के सार्वभौमिक वयस्क मताधिकार की ऐतिहासिक यात्रा।",
    h_1950_title: "निर्वाचन आयोग की स्थापना",
    h_1950_desc: "25 जनवरी 1950 को स्वतंत्र संवैधानिक संस्था के रूप में भारत निर्वाचन आयोग का गठन हुआ। श्री सुकुमार सेन प्रथम मुख्य निर्वाचन आयुक्त बने।",
    h_1951_title: "प्रथम आम चुनाव",
    h_1951_desc: "17.3 करोड़ मतदाताओं के साथ विश्व का सबसे बड़ा लोकतांत्रिक प्रयोग; सार्वभौमिक वयस्क मताधिकार की ऐतिहासिक शुरुआत।",
    h_1982_title: "ईवीएम का प्रथम प्रायोगिक उपयोग",
    h_1982_desc: "केरल के 70-पारूर विधानसभा क्षेत्र में इलेक्ट्रॉनिक वोटिंग मशीन (EVM) का पहला परीक्षण किया गया।",
    h_1988_title: "मतदान आयु 18 वर्ष (61वां संशोधन)",
    h_1988_desc: "संविधान के 61वें संशोधन अधिनियम 1988 द्वारा मतदान की न्यूनतम आयु 21 वर्ष से घटाकर 18 वर्ष की गई।",
    h_2004_title: "राष्ट्रव्यापी ईवीएम मतदान",
    h_2004_desc: "14वें लोकसभा चुनाव में देश के सभी 543 संसदीय क्षेत्रों में शत-प्रतिशत इलेक्ट्रॉनिक वोटिंग मशीनों से मतदान संपन्न हुआ।",
    h_2013_title: "VVPAT का आरंभ",
    h_2013_desc: "नागालैंड के नोकसेन विधानसभा क्षेत्र में मतदाता सत्यापन योग्य पेपर ऑडिट ट्रेल (VVPAT) का पहला प्रयोग।",
    h_2019_title: "शत-प्रतिशत VVPAT कवरेज",
    h_2019_desc: "17वें लोकसभा चुनाव में सभी मतदान केंद्रों पर अनिवार्य VVPAT पर्ची सत्यापन लागू किया गया।",
    h_2026_title: "SIR 2026 एवं डिजिटल रोल सत्यापन",
    h_2026_desc: "विशेष गहन पुनरीक्षण (SIR) के तहत घर-घर सत्यापन और मतदाता सूची का आधुनिकीकरण; सर्च माय वोट नागरिक सहायता।",

    // Civic Section: SIR 2026 Resource Centre
    sir_kicker: "विशेष गहन पुनरीक्षण · SPECIAL INTENSIVE REVISION",
    sir_title: "SIR 2026 संसाधन केंद्र एवं नागरिक मार्गदर्शिका",
    sir_sub: "विशेष गहन पुनरीक्षण (SIR 2026) के दौरान मतदाता सूची का घर-घर सत्यापन, प्रारूप प्रकाशन और विलोपन से बचाव के लिए जरूरी नियम व दस्तावेज़।",
    s_what_title: "SIR क्या है?",
    s_what_desc: "विशेष गहन पुनरीक्षण (Special Intensive Revision) निर्वाचन आयोग द्वारा घर-घर जाकर मतदाताओं का भौतिक सत्यापन करने की प्रक्रिया है, ताकि फर्जी या स्थानांतरित प्रविष्टियां हटाई जा सकें।",
    s_enum_title: "गणना प्रपत्र (Enumeration Form)",
    s_enum_desc: "बीएलओ (BLO) द्वारा घर आकर भरा जाने वाला फॉर्म। इसमें परिवार के सभी वयस्क सदस्यों का नाम, आयु और निवास प्रमाण की जांच की जाती है।",
    s_draft_title: "प्रारूप नामावली (Draft Roll)",
    s_draft_desc: "गणना के बाद प्रकाशित कच्ची मतदाता सूची। प्रत्येक नागरिक को मतदान केंद्र या ECI पोर्टल पर जाकर अपना नाम अवश्य जांचना चाहिए।",
    s_notice_title: "ईआरओ नोटिस (ERO Notice)",
    s_notice_desc: "यदि नाम हटाने का प्रस्ताव है, तो ERO द्वारा कारण बताओ नोटिस जारी करना अनिवार्य है। बिना सुनवाई नागरिक का नाम नहीं काटा जा सकता।",
    s_forms_title: "दावे व आपत्तियां (Forms 6, 7, 8)",
    s_forms_desc: "प्रारूप सूची प्रकाशन के बाद 30 दिनों के भीतर फॉर्म 6 (नया नाम), फॉर्म 7 (आपत्ति) या फॉर्म 8 (सुधार/स्थानांतरण) दाखिल कर सकते हैं।",
    s_evidence_title: "आवश्यक साक्ष्य एवं प्रमाण",
    s_evidence_desc: "पहचान पत्र, निवास प्रमाण (बिजली बिल, राशन कार्ड, बैंक पासबुक), आयु प्रमाण और पिछली मतदाता सूची की पर्ची सुरक्षित रखें।",

    // Civic Section: FAQs
    faq_kicker: "नागरिक सहायता एवं समाधान",
    faq_title: "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
    faq_sub: "मतदाता सूची, नाम कटना, कानूनी अधिकार और सर्च माय वोट की कार्यप्रणाली से जुड़े प्रमुख सवालों के आधिकारिक जवाब।",
    ph_faq_search: "प्रश्न खोजें (उदा: वोटर कार्ड, नाम कटना, आधार, नोटिस, ECI)...",
    faq_q1: "क्या यह वेबसाइट भारत निर्वाचन आयोग (ECI) की आधिकारिक वेबसाइट है?",
    faq_a1: "नहीं। सर्च माय वोट (Search My Vote) नागरिकों की सहायता के लिए लोकदल की एक स्वतंत्र, गैर-सरकारी पहल है। यह भारत निर्वाचन आयोग की वेबसाइट नहीं है। यहाँ दर्ज शिकायतें कानूनी सहायता, सत्यापन और लोकतांत्रिक पैरवी के लिए हैं।",
    faq_q2: "क्या यहाँ शिकायत दर्ज करने से मेरा आवेदन सीधे चुनाव आयोग में जमा हो जाता है?",
    faq_a2: "नहीं। यहाँ दर्ज शिकायत से हमारा विधिक सेल आपके मामले का दस्तावेजीकरण करता है और आपको सही वैधानिक प्रपत्र (फॉर्म 6, 7 या 8) भरने, अपील दाखिल करने या ERO सुनवाई में उपस्थित होने का पूर्ण मार्गदर्शन व विधिक सहायता प्रदान करता है।",
    faq_q3: "मेरे पास मूल वोटर आईडी कार्ड (EPIC) है, क्या नाम कटने पर भी मैं वोट दे सकता हूँ?",
    faq_a3: "नहीं। भारतीय चुनाव नियमों के तहत मतदान करने के लिए केवल पहचान पत्र होना पर्याप्त नहीं है; मतदान के दिन संबंधित मतदान केंद्र की 'वर्तमान निर्वाचक नामावली' में आपका नाम सक्रिय होना अनिवार्य है। यदि नाम कट गया है तो तुरंत फॉर्म 6 या 8 भरें।",
    faq_q4: "क्या शिकायत दर्ज करने के लिए आधार कार्ड देना या अपलोड करना अनिवार्य है?",
    faq_a4: "बिल्कुल नहीं। इस पोर्टल पर आधार कार्ड देना या अपलोड करना अनिवार्य नहीं है। हम नागरिकों से कभी भी पूर्ण आधार संख्या या बैंक विवरण नहीं मांगते। आप पुराना वोटर कार्ड, बिजली बिल या कोई अन्य मान्य निवास प्रमाण अपलोड कर सकते हैं।",
    faq_q5: "मैं अपनी दर्ज शिकायत की प्रगति कैसे देख सकता हूँ?",
    faq_a5: "शिकायत दर्ज होते ही आपको एक 'केस रिफरेंस नंबर' (उदा: SMV-2026-XXXXXXXXXX) और एक 10-अक्षरों का 'निजी ट्रैकिंग पिन' (PIN) प्राप्त होता है। ऊपर 'स्थिति ट्रैक करें' टैब में ये दोनों क्रेडेंशियल्स दर्ज करके आप कभी भी केसवर्कर की टिप्पणियां और प्रगति देख सकते हैं।",
    faq_q6: "स्टेटस में 'Closed' का क्या अर्थ है? क्या इसका मतलब मेरा नाम जुड़ गया?",
    faq_a6: "नहीं। 'Closed' सर्च माय वोट की आंतरिक सहायता प्रक्रिया की समाप्ति को दर्शाता है (जैसे विधिक नोटिस सौंप दिया गया या उचित प्रपत्र भरवा दिया गया)। आधिकारिक मतदाता सूची में नाम जुड़ने या संशोधन की अंतिम पुष्टि केवल ECI के निर्वाचक पोर्टल पर ही जांची जा सकती है।",
    faq_q7: "क्या मेरी जानकारी किसी राजनीतिक प्रचार या मार्केटिंग के लिए उपयोग की जाएगी?",
    faq_a7: "नहीं। सर्च माय वोट नागरिक डेटा संरक्षण (DPDP) सिद्धांतों का कड़ाई से पालन करता है। आपकी जानकारी का उपयोग केवल आपके मतदाता अधिकार की बहाली, विधिक परामर्श और केस संबंधी सहायता के लिए ही किया जाता है। इसे कभी किसी तीसरे पक्ष को नहीं बेचा या सौंपा जाता।",
    faq_q8: "यदि मुझे SIR 2026 में विलोपन का ERO नोटिस मिला है तो मुझे क्या करना चाहिए?",
    faq_a8: "नोटिस में उल्लिखित सुनवाई की तारीख और स्थान पर अपने पहचान व निवास प्रमाण (बिजली बिल, राशन कार्ड, पूर्व मतदाता पर्ची) के साथ उपस्थित हों। यदि आप समय पर उपस्थित नहीं हो सकते या सहायता चाहिए, तो हमारी हेल्पलाइन पर विवरण दर्ज करें ताकि हमारी लीगल टीम आपकी पैरवी में सहायता कर सके।",

    // Footer Resource Grid
    footer_col1_desc: "लोकदल द्वारा संचालित एक स्वतंत्र, गैर-सरकारी मतदाता अधिकार एवं निर्वाचक नामावली सहायता पहल। हम प्रत्येक नागरिक के मताधिकार की रक्षा हेतु विधिक एवं लोकतांत्रिक सहयोग प्रदान करते हैं।",
    footer_pill: "गैर-सरकारी नागरिक पहल · Non-Government",
    footer_col2_title: "नागरिक सेवाएं एवं आधिकारिक लिंक",
    footer_col3_title: "संवैधानिक ज्ञान एवं सहायता",
    f_link_file: "अपनी शिकायत दर्ज करें",
    f_link_track: "शिकायत की स्थिति ट्रैक करें",
    f_link_rights: "संवैधानिक मतदान अधिकार (अनुच्छेद 324-326)",
    f_link_history: "भारत में मतदान का इतिहास (1950–2026)",
    f_link_sir: "SIR 2026 संसाधन केंद्र",
    f_link_faq: "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
    dpdp_footer_title: "डेटा सुरक्षा एवं DPDP सिद्धांत",
    dpdp_footer_desc: "नागरिकों द्वारा साझा की गई जानकारी भारतीय डिजिटल व्यक्तिगत डेटा संरक्षण (DPDP) सिद्धांतों के अनुसार पूर्णतः गोपनीय रखी जाती है। इस डेटा का उपयोग केवल नागरिक केसवर्क के लिए किया जाता है, किसी व्यावसायिक या अवांछित प्रचार के लिए नहीं।"
  },

  en: {
    // Brand & Navbar
    brand_subtitle: "Grievance & Voter Support",
    nav_file_btn: "File a Complaint",
    nav_track_btn: "Track Complaint",

    // Hero Section
    hero_badge: "Democratic Voter Rights & Electoral Roll Assistance",
    hero_title_hindi: "Your Vote.<br><span>Your Voice.</span>",
    hero_title_sub: "Aapka Vote, <em>Aapki Aawaaz.</em>",
    hero_subtitle: "Has your name gone missing from the voter list? Notice unexpected deletion or enumeration errors? Register your grievance confidentially.",
    hero_hindi_sub: "If your name was omitted or details were recorded incorrectly during SIR 2026, submit your complaint. Lok Dal compiles documentation for lawful and democratic advocacy.",
    hero_btn_register: "Register your grievance ↗",
    hero_btn_track: "Track a case →",
    hero_scroll_hint: "Scroll down to register or track",

    // Sage Features
    pillar1_title: "Nationwide Scope",
    pillar1_desc: "28 states & 8 UTs verified constituency hierarchy & coverage.",
    pillar2_title: "Evidence First",
    pillar2_desc: "Attach supporting proof & detailed electoral roll records.",
    pillar3_title: "Private Tracking",
    pillar3_desc: "Dual-credential tracking (Case Reference & PIN) for instant real-time lookup.",
    pillar4_title: "Lawful Advocacy",
    pillar4_desc: "Authorized caseworker review & constitutional representation.",

    // How It Works Section
    how_it_works_kicker: "HOW IT WORKS",
    how_it_works_title: "Three steps to make your grievance heard",
    step1_title: "Submit your grievance",
    step1_desc: "Enter your contact details and describe what occurred with your voter roll registration.",
    step2_title: "Verify constituency details",
    step2_desc: "Select your State, District, Lok Sabha and Assembly Constituency with verified procedures.",
    step3_title: "Follow the case",
    step3_desc: "Use your generated Ticket ID at any time to monitor review progress and caseworker notes.",

    // Tabs
    tab_file: "01. File Complaint",
    tab_track: "02. Track Complaint",

    // Form Headers
    form_title: "Register Your Grievance",
    form_subtitle: "Provide your details below to log an official grievance into the central database.",

    // Form Section 01
    sec1_title: "01 Personal & contact details",
    sec1_sub: "Personal & contact details · Only for grievance-related communication",
    lbl_fullname: "Full name / पूरा नाम *",
    ph_fullname: "e.g. Rajesh Kumar Sharma",
    lbl_mobile: "Mobile / मोबाइल नंबर *",
    ph_mobile: "10-digit mobile number",
    lbl_email: "Email",
    ph_email: "e.g. rajesh@example.com",
    lbl_postcode: "PIN code",
    ph_postcode: "6-digit PIN code",
    lbl_address: "Address / पता",
    ph_address: "House / street / locality address",

    // Form Section 02
    sec2_title: "02 Where is your vote registered?",
    sec2_sub: "State, District, Lok Sabha and Assembly Constituency",
    lbl_state: "State / UT / राज्य *",
    opt_state: "Select state or UT",
    lbl_district: "District / जिला *",
    opt_district: "Select district",
    lbl_loksabha: "Lok Sabha constituency / लोकसभा",
    opt_loksabha: "Select Lok Sabha constituency",
    lbl_assembly: "Assembly constituency / विधानसभा",
    opt_assembly: "Select Assembly constituency",
    lbl_village: "Village / ward / गांव या वार्ड",
    ph_village: "Village name or municipal ward",
    lbl_booth: "Polling station / बूथ (if known)",
    ph_booth: "e.g. Primary School Room 2",
    lbl_part: "Electoral roll part number",
    ph_part: "e.g. 142",
    lbl_serial: "Electoral roll serial number",
    ph_serial: "e.g. 589",

    // Form Section 03
    sec3_title: "03 SIR 2026 grievance details",
    sec3_sub: "Problem and previous efforts made",
    lbl_nature: "Nature of complaint / शिकायत का प्रकार *",
    opt_nature: "Select your problem",
    lbl_stage: "Stage of SIR / संबंधित चरण",
    opt_stage: "Select stage",
    lbl_incident_date: "When did you notice it?",
    ph_incident_date: "e.g. October 2025 or Date",
    lbl_card_status: "Voter ID card status *",
    opt_card_status: "Select status",
    lbl_epic: "EPIC / Voter ID number",
    ph_epic: "e.g. ABC1234567",
    lbl_last_seen: "Last time your name was in the roll",
    ph_last_seen: "e.g. 2024 Lok Sabha elections",
    lbl_eci_ref: "Existing ECI application / appeal no.",
    ph_eci_ref: "e.g. Form 6 / 7 / 8 reference number",
    lbl_desc: "Explain what happened / पूरी शिकायत *",
    ph_desc: "Describe the issue in detail...",
    desc_help: "Please do not include Aadhaar, bank numbers, caste, religion, political preference, or details about unrelated people.",

    // Form Section 04
    sec4_title: "04 Upload supporting proof",
    sec4_sub: "Upload supporting proof — optional; a missing voter card should not prevent reporting",
    upload_title: "Attach voter card or supporting evidence",
    upload_sub: "Voter card, earlier voter-list page, SIR notice, or screenshot",
    upload_note: "PDF / JPG / PNG / WEBP · Max 6 MB. Avoid Aadhaar uploads.",

    // Form Section 05
    sec5_title: "05 How did you reach this website?",
    sec5_sub: "Helps the Lok Dal team understand where grievances are coming from",
    lbl_source: "Source / माध्यम",
    opt_source: "Select source",
    consent_req: "I confirm this grievance relates to a genuine voter registration issue for myself or a person who authorized me. The details provided are true to the best of my knowledge. *",
    consent_rep: "I authorize the Search My Vote / Lok Dal legal aid team to represent this grievance before election authorities or appropriate forums if necessary (Optional).",
    legal_box_title: "Notice: Non-governmental Electoral Rights Initiative",
    legal_box_desc: "Search My Vote is a non-governmental initiative by Lok Dal to assist citizens with electoral roll issues. Grievances submitted here are for advocacy, verification, and legal aid. We do not charge fees and we are not the Election Commission of India.",
    btn_reset: "Reset Form",
    btn_submit: "Submit SIR grievance ↗",

    // Sidebar
    sb1_title: "Before you begin",
    sb1_item1: "Valid 10-digit mobile number for status alerts",
    sb1_item2: "Constituency details (State, District, Assembly)",
    sb1_item3: "Description of missing name or roll deletion",
    sb2_title: "Your data is protected",
    sb2_desc: "Submissions are stored securely and treated confidentially in accordance with Indian DPDP principles. Information is used exclusively for citizen casework and democratic grievance representation.",
    sb3_title: "Independent platform",
    sb3_desc: "Lok Dal advocates for constitutional voter rights and lawful representation. This platform does not directly modify official voter registers.",

    // Track Face
    track_title: "Track Complaint Status",
    track_sub: "Enter your Case reference number and Private tracking PIN to check the real-time status and caseworker remarks.",
    lbl_caseref: "Case reference number *",
    ph_caseref: "e.g. SMV-2026-XXXXXXXXXX",
    lbl_pin: "Private tracking PIN *",
    ph_pin: "10-character PIN",
    btn_track: "View case status →",
    track_privacy_note: "Lost your PIN? Contact the Search My Vote team with identity verification. For privacy, your status cannot be accessed using only a mobile number.",
    track_btn_back: "← File Another Complaint",

    // Closing Pledge & Footer
    pledge_kicker: "OUR SOLEMN PLEDGE",
    pledge_title: "Commitment to Indian Democracy",
    pledge_sub: "Every Indian citizen has a constitutional right to an accurate electoral roll entry. Here is our solemn pledge to you.",
    pledge1_title: "1. 100% Confidentiality",
    pledge1_desc: "Your personal information is strictly protected under Indian data protection principles. We never share your contact details for commercial purposes or political campaigning.",
    pledge2_title: "2. 48-Hour Case Intake",
    pledge2_desc: "Every complaint registered on Search My Vote is ingested into our CRM database, reviewed by designated caseworkers, and categorized for timely representation.",
    pledge3_title: "3. Transparent Tracking",
    pledge3_desc: "You are issued a unique Case reference number (SMV-2026-XXXXXXXXXX) and Private tracking PIN instantly. You can track real-time progress, caseworker remarks, and advocacy updates at any time.",
    legal_footer_title: "Statutory Legal Notice",
    legal_footer_desc: "SearchMyVote.com is an independent voter grievance intake and documentation helpline sponsored and managed by Lok Dal (INDIA bloc constituent). This portal is not an Election Commission of India (ECI) website and does not directly change official voter rolls.",
    support_title: "Citizen Support Desk",
    support_desc: "Have questions about your grievance or need immediate assistance?",
    support_hours: "Hours: Mon – Sat (9:00 AM – 7:00 PM IST)",
    copyright: "© 2026 Search My Vote. All rights reserved.",

    // Success Modal
    modal_title: "Grievance Registered Successfully!",
    modal_desc: "Your case has been recorded in the Search My Vote central register. Please save your dual credentials below to track your grievance:",
    modal_caseref_lbl: "Case reference number",
    modal_pin_lbl: "Private tracking PIN",
    modal_note: "Lost your PIN? Contact the Search My Vote team with identity verification. For privacy, your status cannot be accessed using only a mobile number.",
    btn_done: "Done",
    btn_receipt: "Download Receipt 📄",
    btn_track_now: "Track Now ➔",
    badge_optional: "Optional",

    // Main Navigation Links
    nav_how: "How It Works",
    nav_rights: "Voter Rights",
    nav_history: "Voting History",
    nav_sir: "SIR 2026",
    nav_faq: "FAQ",

    // Civic Section: Constitutional Rights
    rights_kicker: "Constitutional Safeguards & Statutory Framework",
    rights_title: "Know Your Constitutional Voting Rights",
    rights_sub: "Under the Constitution of India and the Representation of the People Acts, every adult citizen is entitled to vote and register. No eligible voter may be removed arbitrarily.",
    r_art324_title: "Article 324: Independent Election Supervision",
    r_art324_desc: "Superintendence, direction, and control of all Parliamentary and State Assembly elections are vested in an independent Election Commission of India.",
    r_art325_title: "Article 325: Non-Discrimination in Electoral Rolls",
    r_art325_desc: "Single electoral roll per constituency; no citizen may be excluded or claim special rolls on grounds of religion, race, caste, or sex.",
    r_art326_title: "Article 326: Universal Adult Suffrage Guaranteed",
    r_art326_desc: "Every citizen aged 18 or above has the constitutional right to be registered as a voter, unless disqualified under law on specific statutory grounds.",
    r_rpa50_title: "RPA 1950: Electoral Roll Preparation & Revision",
    r_rpa50_desc: "Sections 14-25 govern constituency delimitation, roll preparation, claims, objections, and statutory appeal procedures under Section 24.",
    r_rpa51_title: "RPA 1951: Statutory Right to Vote",
    r_rpa51_desc: "Section 62 establishes that every person enrolled in an electoral roll is entitled to vote in that constituency, barring express disqualifications.",
    r_remedy_title: "Official ECI Remedies: Forms 6, 7 & 8",
    r_remedy_desc: "File Form 6 for fresh inclusion, Form 7 for objection/deletion, and Form 8 for correction of entries or shifting of residence.",
    r_alert_title: "Vital Legal Distinction: EPIC Card vs. Active Electoral Roll",
    r_alert_desc: "Holding a physical Voter ID card (EPIC) does not alone entitle you to cast a ballot. Your name MUST appear in the current, active electoral roll for your polling station on polling day. If deleted erroneously, file Form 6 or 8 immediately.",
    r_sources_label: "Official Statutory Sources:",

    // Civic Section: Voting History Timeline
    history_kicker: "Constitutional Journey (1950–2026)",
    history_title: "The Evolution of Democratic Voting in India",
    history_sub: "From the creation of an independent election watchdog in 1950 to modern electronic verification and SIR 2026, trace India's democratic milestone history.",
    h_1950_title: "Establishment of the ECI",
    h_1950_desc: "ECI established on 25 January 1950 as an autonomous constitutional body, with Sukumar Sen serving as India's first Chief Election Commissioner.",
    h_1951_title: "First General Elections",
    h_1951_desc: "World's largest democratic exercise covering 17.3 crore eligible voters across 489 Lok Sabha seats; inaugurated universal adult suffrage.",
    h_1982_title: "First EVM Pilot in Kerala",
    h_1982_desc: "Electronic Voting Machines introduced experimentally at 50 polling stations in 70-Parur Assembly Constituency, Kerala.",
    h_1988_title: "Voting Age Lowered to 18 (61st Amendment)",
    h_1988_desc: "The 61st Constitutional Amendment Act lowered the minimum voting age from 21 to 18 years, enfranchising millions of youth nationwide.",
    h_2004_title: "Nationwide EVM Rollout",
    h_2004_desc: "First General Election where all 543 Parliamentary constituencies used Electronic Voting Machines exclusively across India.",
    h_2013_title: "Introduction of VVPAT",
    h_2013_desc: "Voter Verifiable Paper Audit Trail (VVPAT) deployed for the first time in 51-Noksen Assembly Constituency, Nagaland.",
    h_2019_title: "100% VVPAT Universal Deployment",
    h_2019_desc: "Universal deployment of VVPAT units across all 10.35 lakh polling stations during the 17th Lok Sabha elections.",
    h_2026_title: "SIR 2026 & Digital Roll Verification",
    h_2026_desc: "Special Intensive Revision (SIR 2026) roll modernization and door-to-door verification; Search My Vote citizen casework support.",

    // Civic Section: SIR 2026 Resource Centre
    sir_kicker: "Special Intensive Revision · SIR 2026",
    sir_title: "SIR 2026 Resource Centre & Citizen Guide",
    sir_sub: "Comprehensive statutory guidance on door-to-door enumeration, draft roll inspections, ERO hearing notices, and defending your voting rights during SIR 2026.",
    s_what_title: "What is SIR?",
    s_what_desc: "Special Intensive Revision is a thorough door-to-door physical enumeration conducted by election officials to verify resident electors and remove duplicates.",
    s_enum_title: "Enumeration Form",
    s_enum_desc: "The official schedule filled during house-to-house enumeration. Ensure your household details and family members are recorded accurately.",
    s_draft_title: "Draft Roll Publication",
    s_draft_desc: "The preliminary electoral roll published for public inspection. Always inspect this list at your polling station or online to verify your inclusion.",
    s_notice_title: "ERO Inquiry Notice",
    s_notice_desc: "Statutory notice issued by the Electoral Registration Officer before any deletion. You are entitled to reasonable opportunity of hearing under Section 22 of RPA 1950.",
    s_forms_title: "Claims & Objections (Forms 6, 7, 8)",
    s_forms_desc: "Statutory window (typically 30 days) following draft publication to file Form 6 (inclusion), Form 7 (objection), or Form 8 (correction/shifting).",
    s_evidence_title: "Supporting Proof & Documentation",
    s_evidence_desc: "Preserve previous EPIC, electricity bills, rent agreement, bank passbook, and proof of ordinary residence for verification and grievance filing.",

    // Civic Section: FAQs
    faq_kicker: "Citizen Support & Clear Answers",
    faq_title: "Frequently Asked Questions (FAQ)",
    faq_sub: "Direct, plain-language answers to your questions about voter registration, deletion risks, statutory appeals, and how Search My Vote assists.",
    ph_faq_search: "Search questions (e.g., voter card, deletion, Aadhaar, notice, ECI)...",
    faq_q1: "Is this website the official Election Commission of India (ECI) website?",
    faq_a1: "No. Search My Vote is an independent, non-governmental citizen initiative operated by Lok Dal. It is not an ECI website. Grievances submitted here are for legal assistance, verification, and democratic advocacy.",
    faq_q2: "Does submitting a grievance here file my application directly with the Election Commission?",
    faq_a2: "No. Registration documents your case in our central register. Our legal cell provides comprehensive guidance and assistance to file official ECI forms (Form 6, 7, or 8) and represent you at ERO hearings.",
    faq_q3: "I have a physical Voter ID card (EPIC). Can I still vote if my name is deleted from the roll?",
    faq_a3: "No. Under Indian election law, possessing an EPIC card alone does not permit you to cast a ballot; your name MUST be enrolled in the active electoral roll for your polling station on polling day. If deleted, file Form 6 or 8 immediately.",
    faq_q4: "Is Aadhaar mandatory to file a grievance on this website?",
    faq_a4: "No, absolutely not. Providing or uploading an Aadhaar card is completely optional. We never ask for full Aadhaar numbers or bank details. You may upload a previous EPIC card, utility bill, or other valid residence proof.",
    faq_q5: "How can I track the progress of my submitted grievance?",
    faq_a5: "Upon submission, you receive an official Case reference number (e.g. SMV-2026-XXXXXXXXXX) and a 10-character Private tracking PIN. Enter both credentials in the 'Track Complaint' tab above to view caseworker remarks and progress.",
    faq_q6: "What does 'Closed' status mean? Does it mean my name is now in the official roll?",
    faq_a6: "No. 'Closed' signifies completion of Search My Vote's casework assistance (such as submitting legal representation or assisting with forms). Confirmation of inclusion in the official electoral roll must be verified directly on ECI's voter portal.",
    faq_q7: "Will my contact or personal information be used for political marketing?",
    faq_a7: "No. Search My Vote adheres strictly to Indian Digital Personal Data Protection (DPDP) principles. Your data is used exclusively for voter rights representation and legal assistance, and is never shared or sold to third parties.",
    faq_q8: "What should I do if I receive an ERO deletion notice during SIR 2026?",
    faq_a8: "Attend the designated ERO hearing with proof of identity and ordinary residence (utility bill, ration card, previous voter slip). If you need help or cannot appear, log your details on our helpline so our legal team can assist in representation.",

    // Footer Resource Grid
    footer_col1_desc: "An independent, non-governmental voter rights and electoral roll assistance initiative by Lok Dal. We provide legal documentation and democratic advocacy for every citizen's franchise.",
    footer_pill: "Non-Governmental Citizen Initiative",
    footer_col2_title: "Citizen Services & Official Portals",
    footer_col3_title: "Civic Knowledge & Help Desk",
    f_link_file: "File a Complaint",
    f_link_track: "Track Complaint Status",
    f_link_rights: "Constitutional Voting Rights (Articles 324-326)",
    f_link_history: "History of Voting in India (1950–2026)",
    f_link_sir: "SIR 2026 Resource Centre",
    f_link_faq: "Frequently Asked Questions (FAQ)",
    dpdp_footer_title: "Data Protection & DPDP Principles",
    dpdp_footer_desc: "Information shared by citizens is maintained confidentially in strict accordance with Indian DPDP principles. Data is utilized exclusively for citizen casework, never sold or used for marketing."
  }
};

/**
 * Global Language Management Function
 * Default: 'hi' (Hindi)
 */
function setLanguage(lang) {
  if (lang !== 'hi' && lang !== 'en') lang = 'hi';

  localStorage.setItem('smv_lang', lang);
  document.documentElement.lang = lang;

  // Toggle active class on navbar buttons
  const btnHi = document.getElementById('langBtnHi');
  const btnEn = document.getElementById('langBtnEn');
  if (btnHi && btnEn) {
    if (lang === 'hi') {
      btnHi.classList.add('active');
      btnEn.classList.remove('active');
    } else {
      btnEn.classList.add('active');
      btnHi.classList.remove('active');
    }
  }

  // Switch How It Works Infographic Image
  const howImg = document.getElementById('howItWorksImg');
  if (howImg) {
    howImg.src = lang === 'hi' ? '/assets/how-it-works-hi.jpg' : '/assets/how-it-works-en.jpg';
    howImg.alt = lang === 'hi' 
      ? 'यह कैसे काम करता है - अपनी शिकायत को सुने जाने के लिए तीन आसान कदम' 
      : 'How It Works - Three Steps to Make Your Grievance Heard';
  }

  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  // Update textContent for elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Update innerHTML for elements with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholder for elements with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // Update badge-optional text
  document.querySelectorAll('.badge-optional').forEach(el => {
    el.textContent = dict.badge_optional;
  });

  // Update default option text for select elements
  const selectDefaults = [
    { id: 'stateSelect', key: 'opt_state' },
    { id: 'districtSelect', key: 'opt_district' },
    { id: 'lokSabhaSelect', key: 'opt_loksabha' },
    { id: 'assemblySelect', key: 'opt_assembly' },
    { id: 'natureSelect', key: 'opt_nature' },
    { id: 'sirStageSelect', key: 'opt_stage' },
    { id: 'voterCardStatusSelect', key: 'opt_card_status' },
    { id: 'sourceSelect', key: 'opt_source' }
  ];

  selectDefaults.forEach(item => {
    const sel = document.getElementById(item.id);
    if (sel && sel.options && sel.options[0] && sel.options[0].value === '') {
      sel.options[0].textContent = dict[item.key] || sel.options[0].textContent;
    }
  });
}

// Auto-run on script load (defaults to 'hi')
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('smv_lang') || 'hi';
  setLanguage(savedLang);
});
