// Indian States & UTs with Districts, Lok Sabha, and Assembly Constituencies
const INDIA_DATA = {
  "Andhra Pradesh": {
    districts: {
      "Anantapur": {
        lokSabha: {
          "Anantapur": ["Anantapur Urban", "Kalyandurg", "Raptadu", "Singanamala", "Uravakonda", "Guntakal", "Tadpatri"],
          "Hindupur": ["Penukonda", "Hindupur", "Madakasira", "Dharmavaram", "Kadiri", "Rayadurg"]
        }
      },
      "Chittoor": {
        lokSabha: {
          "Chittoor": ["Chittoor", "Puthalapattu", "Nagari", "Gangadhara Nellore", "Satyavedu", "Srikalahasti"],
          "Tirupati": ["Tirupati", "Gudur", "Sullurpeta", "Venkatagiri", "Rajampet"]
        }
      },
      "East Godavari": {
        lokSabha: {
          "Kakinada": ["Kakinada City", "Kakinada Rural", "Peddapuram", "Prathipadu", "Tuni", "Anaparthi"],
          "Rajahmundry": ["Rajahmundry City", "Rajahmundry Rural", "Kovvur", "Nidadavolu", "Gopalapuram"]
        }
      },
      "Guntur": {
        lokSabha: {
          "Guntur": ["Guntur West", "Guntur East", "Tadikonda", "Mangalagiri", "Ponnur", "Prathipadu", "Tenali"],
          "Narasaraopet": ["Narasaraopet", "Chilakaluripet", "Vinukonda", "Gurazala", "Macherla", "Sattenapalli"]
        }
      },
      "Krishna": {
        lokSabha: {
          "Vijayawada": ["Vijayawada East", "Vijayawada West", "Vijayawada Central", "Mylavaram", "Nandigama", "Tiruvuru", "Jaggaiahpet"],
          "Machilipatnam": ["Machilipatnam", "Pedana", "Avanigadda", "Gudivada", "Kaikalur", "Gannavaram"]
        }
      },
      "Visakhapatnam": {
        lokSabha: {
          "Visakhapatnam": ["Visakhapatnam East", "Visakhapatnam West", "Visakhapatnam South", "Visakhapatnam North", "Gajuwaka", "Bhimili", "Pendurthi"],
          "Anakapalle": ["Anakapalle", "Chodavaram", "Madugula", "Elamanchili", "Payakaraopet", "Narsipatnam"]
        }
      }
    }
  },
  "Assam": {
    districts: {
      "Kamrup Metropolitan": {
        lokSabha: {
          "Guwahati": ["Gauhati East", "Gauhati West", "Dispur", "Jalukbari", "Boko", "Chaygaon", "Palasbari"]
        }
      },
      "Dibrugarh": {
        lokSabha: {
          "Dibrugarh": ["Dibrugarh", "Moran", "Lahowal", "Duliajan", "Tingkhong", "Naharkatia"]
        }
      },
      "Cachar": {
        lokSabha: {
          "Silchar": ["Silchar", "Sonai", "Dholai", "Udharbond", "Lakhipur", "Barkhola", "Katigorah"]
        }
      }
    }
  },
  "Bihar": {
    districts: {
      "Patna": {
        lokSabha: {
          "Patna Sahib": ["Kumhrar", "Bankipur", "Digha", "Phulwari Sharif", "Patna Sahib", "Bakhtiarpur"],
          "Patliputra": ["Danapur", "Maner", "Paliganj", "Bikram", "Masaurhi", "Barh"]
        }
      },
      "Gaya": {
        lokSabha: {
          "Gaya": ["Gaya Town", "Bodh Gaya", "Atri", "Wazirganj", "Sherghati", "Barachatti", "Tikari"]
        }
      },
      "Muzaffarpur": {
        lokSabha: {
          "Muzaffarpur": ["Muzaffarpur", "Bochahan", "Gaighat", "Aurai", "Minapur", "Kanti", "Sakra", "Kurhani"]
        }
      },
      "Bhagalpur": {
        lokSabha: {
          "Bhagalpur": ["Bhagalpur", "Nathnagar", "Kahalgaon", "Sultanganj", "Pirpainti", "Bihpur", "Gopalpur"]
        }
      },
      "Darbhanga": {
        lokSabha: {
          "Darbhanga": ["Darbhanga", "Darbhanga Rural", "Benipur", "Alinagar", "Hayaghat", "Bahadurpur", "Keoti", "Jale"]
        }
      }
    }
  },
  "Delhi": {
    districts: {
      "Central Delhi": {
        lokSabha: {
          "New Delhi": ["Karol Bagh", "Patel Nagar", "Rajinder Nagar", "New Delhi"],
          "Chandni Chowk": ["Chandni Chowk", "Ballimaran", "Matia Mahal", "Sadar Bazar"]
        }
      },
      "East Delhi": {
        lokSabha: {
          "East Delhi": ["Laxmi Nagar", "Vishwas Nagar", "Krishna Nagar", "Shahdara", "Patparganj", "Kondli", "Trilokpuri", "Gandhi Nagar"]
        }
      },
      "North East Delhi": {
        lokSabha: {
          "North East Delhi": ["Seelampur", "Ghonda", "Babarpur", "Gokulpuri", "Mustafabad", "Rohtas Nagar", "Timarpur"]
        }
      },
      "South Delhi": {
        lokSabha: {
          "South Delhi": ["Greater Kailash", "Chhatarpur", "Mehrauli", "Tughlakabad", "Badarpur", "Sangam Vihar", "Deoli", "Ambedkar Nagar"]
        }
      },
      "West Delhi": {
        lokSabha: {
          "West Delhi": ["Janakpuri", "Vikaspuri", "Tilak Nagar", "Rajouri Garden", "Hari Nagar", "Dwarka", "Madipur", "Uttam Nagar"]
        }
      }
    }
  },
  "Gujarat": {
    districts: {
      "Ahmedabad": {
        lokSabha: {
          "Ahmedabad East": ["Maninagar", "Danilimda", "Sabarmati", "Ellisbridge", "Naranpura", "Nikol", "Naroda", "Thakkarbapa Nagar"],
          "Ahmedabad West": ["Vejalpur", "Ghatlodia", "Jamalpur-Khadia", "Dariapur", "Asarwa", "Amraiwadi"]
        }
      },
      "Surat": {
        lokSabha: {
          "Surat": ["Surat East", "Surat West", "Surat North", "Limbayat", "Udhna", "Majura", "Katargam", "Varachha Road"]
        }
      },
      "Vadodara": {
        lokSabha: {
          "Vadodara": ["Vadodara City", "Savli", "Waghodia", "Manjalpur", "Sayajigunj", "Akota", "Raopura"]
        }
      },
      "Rajkot": {
        lokSabha: {
          "Rajkot": ["Rajkot East", "Rajkot West", "Rajkot South", "Rajkot Rural", "Jasdan", "Gondal", "Jetpur"]
        }
      }
    }
  },
  "Haryana": {
    districts: {
      "Gurugram": {
        lokSabha: {
          "Gurgaon": ["Gurgaon", "Badshahpur", "Pataudi", "Sohna", "Bawal", "Rewari"]
        }
      },
      "Faridabad": {
        lokSabha: {
          "Faridabad": ["Faridabad", "Faridabad NIT", "Badkhal", "Ballabgarh", "Tigaon", "Prithla", "Palwal"]
        }
      },
      "Karnal": {
        lokSabha: {
          "Karnal": ["Karnal", "Gharaunda", "Indri", "Nilokheri", "Assandh", "Panipat Rural", "Panipat City"]
        }
      },
      "Rohtak": {
        lokSabha: {
          "Rohtak": ["Rohtak", "Kalanaur", "Garhi Sampla-Kiloi", "Meham", "Bahadurgarh", "Badli", "Jhajjar"]
        }
      }
    }
  },
  "Karnataka": {
    districts: {
      "Bengaluru Urban": {
        lokSabha: {
          "Bangalore North": ["Byatarayanapura", "Yeshwanthpur", "Rajarajeshwari Nagar", "Dasarahalli", "Mahalakshmi Layout", "Malleshwaram", "Hebbal", "Pulakeshinagar"],
          "Bangalore South": ["Padmanabhanagar", "BTM Layout", "Jayanagar", "Basavanagudi", "Bommanahalli", "Bangalore South", "Govindraj Nagar", "Vijayanagar"],
          "Bangalore Central": ["Shivajinagar", "Shantinagar", "Gandhi Nagar", "Rajaji Nagar", "Chamrajpet", "Chickpet", "Mahadevapura", "Sarvagnanagar"]
        }
      },
      "Mysuru": {
        lokSabha: {
          "Mysore": ["Krishnaraja", "Chamaraja", "Narasimharaja", "Chamundeshwari", "Varuna", "T. Narasipura", "Hunsur", "Periyapatna"]
        }
      },
      "Dharwad": {
        lokSabha: {
          "Dharwad": ["Hubli-Dharwad Central", "Hubli-Dharwad East", "Hubli-Dharwad West", "Dharwad", "Kundgol", "Kalghatgi", "Navalgund"]
        }
      }
    }
  },
  "Kerala": {
    districts: {
      "Thiruvananthapuram": {
        lokSabha: {
          "Thiruvananthapuram": ["Thiruvananthapuram", "Nemom", "Vattiyoorkavu", "Kazhakkoottam", "Kovalam", "Neyyattinkara", "Parassala"]
        }
      },
      "Ernakulam": {
        lokSabha: {
          "Ernakulam": ["Ernakulam", "Kochi", "Thrikkakara", "Tripunithura", "Kalamassery", "Paravur", "Vypin"]
        }
      },
      "Kozhikode": {
        lokSabha: {
          "Kozhikode": ["Kozhikode North", "Kozhikode South", "Beypore", "Elathur", "Kunnamangalam", "Koduvally", "Balussery"]
        }
      }
    }
  },
  "Madhya Pradesh": {
    districts: {
      "Bhopal": {
        lokSabha: {
          "Bhopal": ["Bhopal North", "Bhopal Central", "Bhopal South West", "Govindpura", "Huzur", "Berasia", "Narela", "Sehore"]
        }
      },
      "Indore": {
        lokSabha: {
          "Indore": ["Indore-1", "Indore-2", "Indore-3", "Indore-4", "Indore-5", "Rau", "Sanwer", "Depalpur", "Mhow"]
        }
      },
      "Gwalior": {
        lokSabha: {
          "Gwalior": ["Gwalior", "Gwalior Rural", "Gwalior East", "Gwalior South", "Bhitarwar", "Dabra"]
        }
      },
      "Jabalpur": {
        lokSabha: {
          "Jabalpur": ["Jabalpur East", "Jabalpur North", "Jabalpur West", "Jabalpur Cantt", "Panagar", "Sihora", "Patan", "Bargi"]
        }
      }
    }
  },
  "Maharashtra": {
    districts: {
      "Mumbai City": {
        lokSabha: {
          "Mumbai South": ["Colaba", "Malabar Hill", "Mumbadevi", "Byculla", "Worli", "Shivadi"],
          "Mumbai South Central": ["Mahim", "Dharavi", "Sion Koliwada", "Wadala", "Sewri", "Chembur"]
        }
      },
      "Mumbai Suburban": {
        lokSabha: {
          "Mumbai North": ["Borivali", "Dahisar", "Magathane", "Kandivali East", "Charkop", "Malad West"],
          "Mumbai North West": ["Andheri West", "Andheri East", "Jogeshwari East", "Dindoshi", "Goregaon", "Versova"],
          "Mumbai North East": ["Mulund", "Vikhroli", "Ghatkopar West", "Ghatkopar East", "Mankhurd Shivaji Nagar", "Bhandup West"],
          "Mumbai North Central": ["Bandra West", "Bandra East", "Vile Parle", "Chandivali", "Kurla", "Kalina"]
        }
      },
      "Pune": {
        lokSabha: {
          "Pune": ["Kasba Peth", "Shivajinagar", "Kothrud", "Parvati", "Hadapsar", "Pune Cantonment", "Vadgaon Sheri"],
          "Baramati": ["Baramati", "Indapur", "Bhor", "Purandar", "Daund", "Khadakwasla"]
        }
      },
      "Nagpur": {
        lokSabha: {
          "Nagpur": ["Nagpur South West", "Nagpur South", "Nagpur East", "Nagpur Central", "Nagpur West", "Nagpur North"]
        }
      },
      "Thane": {
        lokSabha: {
          "Thane": ["Thane", "Kopri-Pachpakhadi", "Oval-Majiwada", "Mira Bhayandar", "Airoli", "Belapur"],
          "Kalyan": ["Kalyan Rural", "Kalyan East", "Dombivali", "Ulhasnagar", "Ambernath", "Mumbra-Kalwa"]
        }
      }
    }
  },
  "Punjab": {
    districts: {
      "Amritsar": {
        lokSabha: {
          "Amritsar": ["Amritsar Central", "Amritsar East", "Amritsar West", "Amritsar North", "Amritsar South", "Attari", "Ajnala", "Raja Sansi", "Majitha"]
        }
      },
      "Ludhiana": {
        lokSabha: {
          "Ludhiana": ["Ludhiana East", "Ludhiana South", "Ludhiana Central", "Ludhiana West", "Ludhiana North", "Atam Nagar", "Gill", "Dakha", "Jagraon"]
        }
      },
      "Jalandhar": {
        lokSabha: {
          "Jalandhar": ["Jalandhar Central", "Jalandhar North", "Jalandhar West", "Jalandhar Cantt", "Kartarpur", "Adampur", "Phillaur", "Nakodar", "Shahkot"]
        }
      }
    }
  },
  "Rajasthan": {
    districts: {
      "Jaipur": {
        lokSabha: {
          "Jaipur": ["Hawa Mahal", "Vidhyadhar Nagar", "Civil Lines", "Kishanpole", "Adarsh Nagar", "Malviya Nagar", "Sanganer", "Bagru"],
          "Jaipur Rural": ["Amber", "Jamwa Ramgarh", "Shahpura", "Kotputli", "Viratnagar", "Chomu", "Phulera", "Jhotwara"]
        }
      },
      "Jodhpur": {
        lokSabha: {
          "Jodhpur": ["Jodhpur", "Soorsagar", "Sardarpura", "Luni", "Bilara", "Bhopalgarh", "Osian", "Phalodi", "Lohawat"]
        }
      },
      "Udaipur": {
        lokSabha: {
          "Udaipur": ["Udaipur", "Udaipur Rural", "Mavli", "Vallabhnagar", "Salumber", "Dhariawad", "Jhadol", "Gogunda"]
        }
      },
      "Kota": {
        lokSabha: {
          "Kota": ["Kota North", "Kota South", "Ladpura", "Ramganj Mandi", "Pipalda", "Sangod", "Keshoraipatan", "Bundi"]
        }
      },
      "Ajmer": {
        lokSabha: {
          "Ajmer": ["Ajmer North", "Ajmer South", "Pushkar", "Nasirabad", "Kishangarh", "Kekri", "Masuda", "Dudu"]
        }
      }
    }
  },
  "Tamil Nadu": {
    districts: {
      "Chennai": {
        lokSabha: {
          "Chennai North": ["Royapuram", "Harbour", "Perambur", "Kolathur", "Villivakkam", "Thiru-Vi-Ka Nagar"],
          "Chennai South": ["Mylapore", "Velachery", "Saidapet", "T. Nagar", "Virugambakkam", "Shozhinganallur"],
          "Chennai Central": ["Chepauk-Thiruvallikeni", "Thousand Lights", "Anna Nagar", "Egmore", "Harbour"]
        }
      },
      "Coimbatore": {
        lokSabha: {
          "Coimbatore": ["Coimbatore North", "Coimbatore South", "Singanallur", "Sulur", "Kavundampalayam", "Palladam"]
        }
      },
      "Madurai": {
        lokSabha: {
          "Madurai": ["Madurai East", "Madurai North", "Madurai South", "Madurai West", "Madurai Central", "Thiruparankundram", "Melur"]
        }
      }
    }
  },
  "Telangana": {
    districts: {
      "Hyderabad": {
        lokSabha: {
          "Hyderabad": ["Charminar", "Yakutpura", "Chandrayangutta", "Malakpet", "Karwan", "Goshamahal", "Bahadurpura"],
          "Secunderabad": ["Secunderabad", "Musheerabad", "Amberpet", "Khairatabad", "Jubilee Hills", "Sanathnagar", "Nampally"]
        }
      },
      "Rangareddy": {
        lokSabha: {
          "Chevella": ["Chevella", "Rajendranagar", "Serilingampally", "Maheswaram", "Vikarabad", "Pargi", "Tandur"],
          "Malkajgiri": ["Malkajgiri", "Quthbullapur", "Kukatpally", "Uppal", "LB Nagar", "Medchal", "Secunderabad Cantt"]
        }
      }
    }
  },
  "Uttar Pradesh": {
    districts: {
      "Lucknow": {
        lokSabha: {
          "Lucknow": ["Lucknow West", "Lucknow North", "Lucknow East", "Lucknow Central", "Lucknow Cantt", "Sarojini Nagar"],
          "Mohanlalganj": ["Mohanlalganj", "Bakshi Kaa Talab", "Malihabad", "Sidhauli"]
        }
      },
      "Varanasi": {
        lokSabha: {
          "Varanasi": ["Varanasi North", "Varanasi South", "Varanasi Cantt", "Rohaniya", "Sevapuri"]
        }
      },
      "Prayagraj": {
        lokSabha: {
          "Allahabad (Prayagraj)": ["Allahabad West", "Allahabad North", "Allahabad South", "Bara", "Karchana"],
          "Phulpur": ["Phulpur", "Soraon", "Phaphamau", "Pratappur", "Handia"]
        }
      },
      "Gautam Buddh Nagar": {
        lokSabha: {
          "Gautam Buddha Nagar": ["Noida", "Dadri", "Jewar", "Sikandrabad", "Khurja"]
        }
      },
      "Kanpur Nagar": {
        lokSabha: {
          "Kanpur": ["Aryanagar", "Sisamau", "Generalganj", "Govindnagar", "Kalyanpur", "Kidwainagar", "Kanpur Cantt"]
        }
      },
      "Agra": {
        lokSabha: {
          "Agra": ["Agra Cantt", "Agra South", "Agra North", "Etmadpur", "J जलेसर"],
          "Fatehpur Sikri": ["Fatehpur Sikri", "Kheragarh", "Fatehabad", "Bah"]
        }
      },
      "Meerut": {
        lokSabha: {
          "Meerut": ["Meerut Cantt", "Meerut City", "Meerut South", "Kithore", "Hapur"]
        }
      }
    }
  },
  "West Bengal": {
    districts: {
      "Kolkata": {
        lokSabha: {
          "Kolkata North": ["Chowrangee", "Entally", "Bela", "Jorasanko", "Shyampukur", "Maniktala", "Kashipur-Belgachia"],
          "Kolkata South": ["Rashbehari", "Ballygunge", "Bhawanipore", "Kolkata Port", "Kasba", "Jadavpur"]
        }
      },
      "North 24 Parganas": {
        lokSabha: {
          "Barasat": ["Barasat", "Deganga", "Habra", "Ashoknagar", "Rajarhat New Town", "Bidhannagar", "Madhyamgram"],
          "Dum Dum": ["Dum Dum", "Dum Dum Uttar", "Panihati", "Kamarhati", "Baranagar", "Khardaha"]
        }
      },
      "Howrah": {
        lokSabha: {
          "Howrah": ["Bally", "Howrah Uttar", "Howrah Madhya", "Shibpur", "Howrah Dakshin", "Sankrail", "Panchla"]
        }
      }
    }
  }
};

// All 28 States & 8 UTs for full national coverage
const ALL_STATES_UTS = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

// Nature of Grievance Options (From searchmyvote-site + election categories)
const GRIEVANCE_TYPES = [
  "Name missing from voter list (SIR 2026)",
  "Name deleted from voter list without notice",
  "Incorrect voter details (Name, Age, Gender, Address)",
  "Registration / address shifted without consent",
  "Voter ID card (EPIC) lost or not received",
  "SIR 2026 enumeration / verification issue",
  "SIR notice or objection received",
  "Marked Absent, Shifted, Dead or Duplicate (ASDD) disputed",
  "Polling booth / accessibility issue",
  "EVM / VVPAT or polling day grievance",
  "Model Code of Conduct (MCC) violation",
  "Threat, intimidation or electoral inducement",
  "Other electoral roll grievance"
];
