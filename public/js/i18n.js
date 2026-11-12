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
    badge_optional: "वैकल्पिक"
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
    badge_optional: "Optional"
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
