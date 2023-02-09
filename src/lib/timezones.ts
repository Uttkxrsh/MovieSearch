const timezones = {
  "Europe/Andorra": {
    country: "Andorra",
    code: "AD",
  },
  "Asia/Dubai": {
    country: "United Arab Emirates",
    code: "AE",
  },
  "Asia/Kabul": {
    country: "Afghanistan",
    code: "AF",
  },
  "Europe/Tirane": {
    country: "Albania",
    code: "AL",
  },
  "Asia/Yerevan": {
    country: "Armenia",
    code: "AM",
  },
  "Antarctica/Casey": {
    country: "Antarctica",
    code: "AQ",
  },
  "Antarctica/Davis": {
    country: "Antarctica",
    code: "AQ",
  },
  "Antarctica/Mawson": {
    country: "Antarctica",
    code: "AQ",
  },
  "Antarctica/Palmer": {
    country: "Antarctica",
    code: "AQ",
  },
  "Antarctica/Rothera": {
    country: "Antarctica",
    code: "AQ",
  },
  "Antarctica/Troll": {
    country: "Antarctica",
    code: "AQ",
  },
  "America/Argentina/Buenos_Aires": {
    country: "Argentina",
    code: "AR",
  },
  "America/Argentina/Cordoba": {
    country: "Argentina",
    code: "AR",
  },
  "America/Argentina/Salta": {
    country: "Argentina",
    code: "AR",
  },
  "America/Argentina/Jujuy": {
    country: "Argentina",
    code: "AR",
  },
  "America/Argentina/Tucuman": {
    country: "Argentina",
    code: "AR",
  },
  "America/Argentina/Catamarca": {
    country: "Argentina",
    code: "AR",
  },
  "America/Argentina/La_Rioja": {
    country: "Argentina",
    code: "AR",
  },
  "America/Argentina/San_Juan": {
    country: "Argentina",
    code: "AR",
  },
  "America/Argentina/Mendoza": {
    country: "Argentina",
    code: "AR",
  },
  "America/Argentina/San_Luis": {
    country: "Argentina",
    code: "AR",
  },
  "America/Argentina/Rio_Gallegos": {
    country: "Argentina",
    code: "AR",
  },
  "America/Argentina/Ushuaia": {
    country: "Argentina",
    code: "AR",
  },
  "Pacific/Pago_Pago": {
    country: "Samoa (American)",
    code: "AS",
  },
  "Europe/Vienna": {
    country: "Austria",
    code: "AT",
  },
  "Australia/Lord_Howe": {
    country: "Australia",
    code: "AU",
  },
  "Antarctica/Macquarie": {
    country: "Australia",
    code: "AU",
  },
  "Australia/Hobart": {
    country: "Australia",
    code: "AU",
  },
  "Australia/Melbourne": {
    country: "Australia",
    code: "AU",
  },
  "Australia/Sydney": {
    country: "Australia",
    code: "AU",
  },
  "Australia/Broken_Hill": {
    country: "Australia",
    code: "AU",
  },
  "Australia/Brisbane": {
    country: "Australia",
    code: "AU",
  },
  "Australia/Lindeman": {
    country: "Australia",
    code: "AU",
  },
  "Australia/Adelaide": {
    country: "Australia",
    code: "AU",
  },
  "Australia/Darwin": {
    country: "Australia",
    code: "AU",
  },
  "Australia/Perth": {
    country: "Australia",
    code: "AU",
  },
  "Australia/Eucla": {
    country: "Australia",
    code: "AU",
  },
  "Asia/Baku": {
    country: "Azerbaijan",
    code: "AZ",
  },
  "America/Barbados": {
    country: "Barbados",
    code: "BB",
  },
  "Asia/Dhaka": {
    country: "Bangladesh",
    code: "BD",
  },
  "Europe/Brussels": {
    country: "Belgium",
    code: "BE",
  },
  "Europe/Sofia": {
    country: "Bulgaria",
    code: "BG",
  },
  "Atlantic/Bermuda": {
    country: "Bermuda",
    code: "BM",
  },
  "America/La_Paz": {
    country: "Bolivia",
    code: "BO",
  },
  "America/Noronha": {
    country: "Brazil",
    code: "BR",
  },
  "America/Belem": {
    country: "Brazil",
    code: "BR",
  },
  "America/Fortaleza": {
    country: "Brazil",
    code: "BR",
  },
  "America/Recife": {
    country: "Brazil",
    code: "BR",
  },
  "America/Araguaina": {
    country: "Brazil",
    code: "BR",
  },
  "America/Maceio": {
    country: "Brazil",
    code: "BR",
  },
  "America/Bahia": {
    country: "Brazil",
    code: "BR",
  },
  "America/Sao_Paulo": {
    country: "Brazil",
    code: "BR",
  },
  "America/Campo_Grande": {
    country: "Brazil",
    code: "BR",
  },
  "America/Cuiaba": {
    country: "Brazil",
    code: "BR",
  },
  "America/Santarem": {
    country: "Brazil",
    code: "BR",
  },
  "America/Porto_Velho": {
    country: "Brazil",
    code: "BR",
  },
  "America/Boa_Vista": {
    country: "Brazil",
    code: "BR",
  },
  "America/Manaus": {
    country: "Brazil",
    code: "BR",
  },
  "America/Eirunepe": {
    country: "Brazil",
    code: "BR",
  },
  "America/Rio_Branco": {
    country: "Brazil",
    code: "BR",
  },
  "Asia/Thimphu": {
    country: "Bhutan",
    code: "BT",
  },
  "Europe/Minsk": {
    country: "Belarus",
    code: "BY",
  },
  "America/Belize": {
    country: "Belize",
    code: "BZ",
  },
  "America/St_Johns": {
    country: "Canada",
    code: "CA",
  },
  "America/Halifax": {
    country: "Canada",
    code: "CA",
  },
  "America/Glace_Bay": {
    country: "Canada",
    code: "CA",
  },
  "America/Moncton": {
    country: "Canada",
    code: "CA",
  },
  "America/Goose_Bay": {
    country: "Canada",
    code: "CA",
  },
  "America/Toronto": {
    country: "Canada",
    code: "CA",
  },
  "America/Iqaluit": {
    country: "Canada",
    code: "CA",
  },
  "America/Winnipeg": {
    country: "Canada",
    code: "CA",
  },
  "America/Resolute": {
    country: "Canada",
    code: "CA",
  },
  "America/Rankin_Inlet": {
    country: "Canada",
    code: "CA",
  },
  "America/Regina": {
    country: "Canada",
    code: "CA",
  },
  "America/Swift_Current": {
    country: "Canada",
    code: "CA",
  },
  "America/Edmonton": {
    country: "Canada",
    code: "CA",
  },
  "America/Cambridge_Bay": {
    country: "Canada",
    code: "CA",
  },
  "America/Yellowknife": {
    country: "Canada",
    code: "CA",
  },
  "America/Inuvik": {
    country: "Canada",
    code: "CA",
  },
  "America/Dawson_Creek": {
    country: "Canada",
    code: "CA",
  },
  "America/Fort_Nelson": {
    country: "Canada",
    code: "CA",
  },
  "America/Whitehorse": {
    country: "Canada",
    code: "CA",
  },
  "America/Dawson": {
    country: "Canada",
    code: "CA",
  },
  "America/Vancouver": {
    country: "Canada",
    code: "CA",
  },
  "Europe/Zurich": {
    country: "Switzerland",
    code: "CH",
  },
  "Africa/Abidjan": {
    country: "Côte d'Ivoire",
    code: "CI",
  },
  "Pacific/Rarotonga": {
    country: "Cook Islands",
    code: "CK",
  },
  "America/Santiago": {
    country: "Chile",
    code: "CL",
  },
  "America/Punta_Arenas": {
    country: "Chile",
    code: "CL",
  },
  "Pacific/Easter": {
    country: "Chile",
    code: "CL",
  },
  "Asia/Shanghai": {
    country: "China",
    code: "CN",
  },
  "Asia/Urumqi": {
    country: "China",
    code: "CN",
  },
  "America/Bogota": {
    country: "Colombia",
    code: "CO",
  },
  "America/Costa_Rica": {
    country: "Costa Rica",
    code: "CR",
  },
  "America/Havana": {
    country: "Cuba",
    code: "CU",
  },
  "Atlantic/Cape_Verde": {
    country: "Cape Verde",
    code: "CV",
  },
  "Asia/Nicosia": {
    country: "Cyprus",
    code: "CY",
  },
  "Asia/Famagusta": {
    country: "Cyprus",
    code: "CY",
  },
  "Europe/Prague": {
    country: "Czech Republic",
    code: "CZ",
  },
  "Europe/Berlin": {
    country: "Germany",
    code: "DE",
  },
  "America/Santo_Domingo": {
    country: "Dominican Republic",
    code: "DO",
  },
  "Africa/Algiers": {
    country: "Algeria",
    code: "DZ",
  },
  "America/Guayaquil": {
    country: "Ecuador",
    code: "EC",
  },
  "Pacific/Galapagos": {
    country: "Ecuador",
    code: "EC",
  },
  "Europe/Tallinn": {
    country: "Estonia",
    code: "EE",
  },
  "Africa/Cairo": {
    country: "Egypt",
    code: "EG",
  },
  "Africa/El_Aaiun": {
    country: "Western Sahara",
    code: "EH",
  },
  "Europe/Madrid": {
    country: "Spain",
    code: "ES",
  },
  "Africa/Ceuta": {
    country: "Spain",
    code: "ES",
  },
  "Atlantic/Canary": {
    country: "Spain",
    code: "ES",
  },
  "Europe/Helsinki": {
    country: "Finland",
    code: "FI",
  },
  "Pacific/Fiji": {
    country: "Fiji",
    code: "FJ",
  },
  "Atlantic/Stanley": {
    country: "Falkland Islands",
    code: "FK",
  },
  "Pacific/Kosrae": {
    country: "Micronesia",
    code: "FM",
  },
  "Atlantic/Faroe": {
    country: "Faroe Islands",
    code: "FO",
  },
  "Europe/Paris": {
    country: "France",
    code: "FR",
  },
  "Europe/London": {
    country: "Britain (UK)",
    code: "GB",
  },
  "Asia/Tbilisi": {
    country: "Georgia",
    code: "GE",
  },
  "America/Cayenne": {
    country: "French Guiana",
    code: "GF",
  },
  "Europe/Gibraltar": {
    country: "Gibraltar",
    code: "GI",
  },
  "America/Nuuk": {
    country: "Greenland",
    code: "GL",
  },
  "America/Danmarkshavn": {
    country: "Greenland",
    code: "GL",
  },
  "America/Scoresbysund": {
    country: "Greenland",
    code: "GL",
  },
  "America/Thule": {
    country: "Greenland",
    code: "GL",
  },
  "Europe/Athens": {
    country: "Greece",
    code: "GR",
  },
  "Atlantic/South_Georgia": {
    country: "South Georgia & the South Sandwich Islands",
    code: "GS",
  },
  "America/Guatemala": {
    country: "Guatemala",
    code: "GT",
  },
  "Pacific/Guam": {
    country: "Guam",
    code: "GU",
  },
  "Africa/Bissau": {
    country: "Guinea-Bissau",
    code: "GW",
  },
  "America/Guyana": {
    country: "Guyana",
    code: "GY",
  },
  "Asia/Hong_Kong": {
    country: "Hong Kong",
    code: "HK",
  },
  "America/Tegucigalpa": {
    country: "Honduras",
    code: "HN",
  },
  "America/Port-au-Prince": {
    country: "Haiti",
    code: "HT",
  },
  "Europe/Budapest": {
    country: "Hungary",
    code: "HU",
  },
  "Asia/Jakarta": {
    country: "Indonesia",
    code: "ID",
  },
  "Asia/Pontianak": {
    country: "Indonesia",
    code: "ID",
  },
  "Asia/Makassar": {
    country: "Indonesia",
    code: "ID",
  },
  "Asia/Jayapura": {
    country: "Indonesia",
    code: "ID",
  },
  "Europe/Dublin": {
    country: "Ireland",
    code: "IE",
  },
  "Asia/Jerusalem": {
    country: "Israel",
    code: "IL",
  },
  "Asia/Kolkata": {
    country: "India",
    code: "IN",
  },
  "Indian/Chagos": {
    country: "British Indian Ocean Territory",
    code: "IO",
  },
  "Asia/Baghdad": {
    country: "Iraq",
    code: "IQ",
  },
  "Asia/Tehran": {
    country: "Iran",
    code: "IR",
  },
  "Europe/Rome": {
    country: "Italy",
    code: "IT",
  },
  "America/Jamaica": {
    country: "Jamaica",
    code: "JM",
  },
  "Asia/Amman": {
    country: "Jordan",
    code: "JO",
  },
  "Asia/Tokyo": {
    country: "Japan",
    code: "JP",
  },
  "Africa/Nairobi": {
    country: "Kenya",
    code: "KE",
  },
  "Asia/Bishkek": {
    country: "Kyrgyzstan",
    code: "KG",
  },
  "Pacific/Tarawa": {
    country: "Kiribati",
    code: "KI",
  },
  "Pacific/Kanton": {
    country: "Kiribati",
    code: "KI",
  },
  "Pacific/Kiritimati": {
    country: "Kiribati",
    code: "KI",
  },
  "Asia/Pyongyang": {
    country: "Korea (North)",
    code: "KP",
  },
  "Asia/Seoul": {
    country: "Korea (South)",
    code: "KR",
  },
  "Asia/Almaty": {
    country: "Kazakhstan",
    code: "KZ",
  },
  "Asia/Qyzylorda": {
    country: "Kazakhstan",
    code: "KZ",
  },
  "Asia/Qostanay": {
    country: "Kazakhstan",
    code: "KZ",
  },
  "Asia/Aqtobe": {
    country: "Kazakhstan",
    code: "KZ",
  },
  "Asia/Aqtau": {
    country: "Kazakhstan",
    code: "KZ",
  },
  "Asia/Atyrau": {
    country: "Kazakhstan",
    code: "KZ",
  },
  "Asia/Oral": {
    country: "Kazakhstan",
    code: "KZ",
  },
  "Asia/Beirut": {
    country: "Lebanon",
    code: "LB",
  },
  "Asia/Colombo": {
    country: "Sri Lanka",
    code: "LK",
  },
  "Africa/Monrovia": {
    country: "Liberia",
    code: "LR",
  },
  "Europe/Vilnius": {
    country: "Lithuania",
    code: "LT",
  },
  "Europe/Riga": {
    country: "Latvia",
    code: "LV",
  },
  "Africa/Tripoli": {
    country: "Libya",
    code: "LY",
  },
  "Africa/Casablanca": {
    country: "Morocco",
    code: "MA",
  },
  "Europe/Chisinau": {
    country: "Moldova",
    code: "MD",
  },
  "Pacific/Kwajalein": {
    country: "Marshall Islands",
    code: "MH",
  },
  "Asia/Yangon": {
    country: "Myanmar (Burma)",
    code: "MM",
  },
  "Asia/Ulaanbaatar": {
    country: "Mongolia",
    code: "MN",
  },
  "Asia/Hovd": {
    country: "Mongolia",
    code: "MN",
  },
  "Asia/Choibalsan": {
    country: "Mongolia",
    code: "MN",
  },
  "Asia/Macau": {
    country: "Macau",
    code: "MO",
  },
  "America/Martinique": {
    country: "Martinique",
    code: "MQ",
  },
  "Europe/Malta": {
    country: "Malta",
    code: "MT",
  },
  "Indian/Mauritius": {
    country: "Mauritius",
    code: "MU",
  },
  "Indian/Maldives": {
    country: "Maldives",
    code: "MV",
  },
  "America/Mexico_City": {
    country: "Mexico",
    code: "MX",
  },
  "America/Cancun": {
    country: "Mexico",
    code: "MX",
  },
  "America/Merida": {
    country: "Mexico",
    code: "MX",
  },
  "America/Monterrey": {
    country: "Mexico",
    code: "MX",
  },
  "America/Matamoros": {
    country: "Mexico",
    code: "MX",
  },
  "America/Chihuahua": {
    country: "Mexico",
    code: "MX",
  },
  "America/Ciudad_Juarez": {
    country: "Mexico",
    code: "MX",
  },
  "America/Ojinaga": {
    country: "Mexico",
    code: "MX",
  },
  "America/Mazatlan": {
    country: "Mexico",
    code: "MX",
  },
  "America/Bahia_Banderas": {
    country: "Mexico",
    code: "MX",
  },
  "America/Hermosillo": {
    country: "Mexico",
    code: "MX",
  },
  "America/Tijuana": {
    country: "Mexico",
    code: "MX",
  },
  "Asia/Kuching": {
    country: "Malaysia",
    code: "MY",
  },
  "Africa/Maputo": {
    country: "Mozambique",
    code: "MZ",
  },
  "Africa/Windhoek": {
    country: "Namibia",
    code: "NA",
  },
  "Pacific/Noumea": {
    country: "New Caledonia",
    code: "NC",
  },
  "Pacific/Norfolk": {
    country: "Norfolk Island",
    code: "NF",
  },
  "Africa/Lagos": {
    country: "Nigeria",
    code: "NG",
  },
  "America/Managua": {
    country: "Nicaragua",
    code: "NI",
  },
  "Asia/Kathmandu": {
    country: "Nepal",
    code: "NP",
  },
  "Pacific/Nauru": {
    country: "Nauru",
    code: "NR",
  },
  "Pacific/Niue": {
    country: "Niue",
    code: "NU",
  },
  "Pacific/Auckland": {
    country: "New Zealand",
    code: "NZ",
  },
  "Pacific/Chatham": {
    country: "New Zealand",
    code: "NZ",
  },
  "America/Panama": {
    country: "Panama",
    code: "PA",
  },
  "America/Lima": {
    country: "Peru",
    code: "PE",
  },
  "Pacific/Tahiti": {
    country: "French Polynesia",
    code: "PF",
  },
  "Pacific/Marquesas": {
    country: "French Polynesia",
    code: "PF",
  },
  "Pacific/Gambier": {
    country: "French Polynesia",
    code: "PF",
  },
  "Pacific/Port_Moresby": {
    country: "Papua New Guinea",
    code: "PG",
  },
  "Pacific/Bougainville": {
    country: "Papua New Guinea",
    code: "PG",
  },
  "Asia/Manila": {
    country: "Philippines",
    code: "PH",
  },
  "Asia/Karachi": {
    country: "Pakistan",
    code: "PK",
  },
  "Europe/Warsaw": {
    country: "Poland",
    code: "PL",
  },
  "America/Miquelon": {
    country: "St Pierre & Miquelon",
    code: "PM",
  },
  "Pacific/Pitcairn": {
    country: "Pitcairn",
    code: "PN",
  },
  "America/Puerto_Rico": {
    country: "Puerto Rico",
    code: "PR",
  },
  "Asia/Gaza": {
    country: "Palestine",
    code: "PS",
  },
  "Asia/Hebron": {
    country: "Palestine",
    code: "PS",
  },
  "Europe/Lisbon": {
    country: "Portugal",
    code: "PT",
  },
  "Atlantic/Madeira": {
    country: "Portugal",
    code: "PT",
  },
  "Atlantic/Azores": {
    country: "Portugal",
    code: "PT",
  },
  "Pacific/Palau": {
    country: "Palau",
    code: "PW",
  },
  "America/Asuncion": {
    country: "Paraguay",
    code: "PY",
  },
  "Asia/Qatar": {
    country: "Qatar",
    code: "QA",
  },
  "Europe/Bucharest": {
    country: "Romania",
    code: "RO",
  },
  "Europe/Belgrade": {
    country: "Serbia",
    code: "RS",
  },
  "Europe/Kaliningrad": {
    country: "Russia",
    code: "RU",
  },
  "Europe/Moscow": {
    country: "Russia",
    code: "RU",
  },
  "Europe/Simferopol": {
    country: "Russia",
    code: "RU",
  },
  "Europe/Kirov": {
    country: "Russia",
    code: "RU",
  },
  "Europe/Volgograd": {
    country: "Russia",
    code: "RU",
  },
  "Europe/Astrakhan": {
    country: "Russia",
    code: "RU",
  },
  "Europe/Saratov": {
    country: "Russia",
    code: "RU",
  },
  "Europe/Ulyanovsk": {
    country: "Russia",
    code: "RU",
  },
  "Europe/Samara": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Yekaterinburg": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Omsk": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Novosibirsk": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Barnaul": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Tomsk": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Novokuznetsk": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Krasnoyarsk": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Irkutsk": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Chita": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Yakutsk": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Khandyga": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Vladivostok": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Ust-Nera": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Magadan": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Sakhalin": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Srednekolymsk": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Kamchatka": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Anadyr": {
    country: "Russia",
    code: "RU",
  },
  "Asia/Riyadh": {
    country: "Saudi Arabia",
    code: "SA",
  },
  "Pacific/Guadalcanal": {
    country: "Solomon Islands",
    code: "SB",
  },
  "Africa/Khartoum": {
    country: "Sudan",
    code: "SD",
  },
  "Asia/Singapore": {
    country: "Singapore",
    code: "SG",
  },
  "America/Paramaribo": {
    country: "Suriname",
    code: "SR",
  },
  "Africa/Juba": {
    country: "South Sudan",
    code: "SS",
  },
  "Africa/Sao_Tome": {
    country: "Sao Tome & Principe",
    code: "ST",
  },
  "America/El_Salvador": {
    country: "El Salvador",
    code: "SV",
  },
  "Asia/Damascus": {
    country: "Syria",
    code: "SY",
  },
  "America/Grand_Turk": {
    country: "Turks & Caicos Is",
    code: "TC",
  },
  "Africa/Ndjamena": {
    country: "Chad",
    code: "TD",
  },
  "Asia/Bangkok": {
    country: "Thailand",
    code: "TH",
  },
  "Asia/Dushanbe": {
    country: "Tajikistan",
    code: "TJ",
  },
  "Pacific/Fakaofo": {
    country: "Tokelau",
    code: "TK",
  },
  "Asia/Dili": {
    country: "East Timor",
    code: "TL",
  },
  "Asia/Ashgabat": {
    country: "Turkmenistan",
    code: "TM",
  },
  "Africa/Tunis": {
    country: "Tunisia",
    code: "TN",
  },
  "Pacific/Tongatapu": {
    country: "Tonga",
    code: "TO",
  },
  "Europe/Istanbul": {
    country: "Turkey",
    code: "TR",
  },
  "Asia/Taipei": {
    country: "Taiwan",
    code: "TW",
  },
  "Europe/Kyiv": {
    country: "Ukraine",
    code: "UA",
  },
  "America/New_York": {
    country: "United States",
    code: "US",
  },
  "America/Detroit": {
    country: "United States",
    code: "US",
  },
  "America/Kentucky/Louisville": {
    country: "United States",
    code: "US",
  },
  "America/Kentucky/Monticello": {
    country: "United States",
    code: "US",
  },
  "America/Indiana/Indianapolis": {
    country: "United States",
    code: "US",
  },
  "America/Indiana/Vincennes": {
    country: "United States",
    code: "US",
  },
  "America/Indiana/Winamac": {
    country: "United States",
    code: "US",
  },
  "America/Indiana/Marengo": {
    country: "United States",
    code: "US",
  },
  "America/Indiana/Petersburg": {
    country: "United States",
    code: "US",
  },
  "America/Indiana/Vevay": {
    country: "United States",
    code: "US",
  },
  "America/Chicago": {
    country: "United States",
    code: "US",
  },
  "America/Indiana/Tell_City": {
    country: "United States",
    code: "US",
  },
  "America/Indiana/Knox": {
    country: "United States",
    code: "US",
  },
  "America/Menominee": {
    country: "United States",
    code: "US",
  },
  "America/North_Dakota/Center": {
    country: "United States",
    code: "US",
  },
  "America/North_Dakota/New_Salem": {
    country: "United States",
    code: "US",
  },
  "America/North_Dakota/Beulah": {
    country: "United States",
    code: "US",
  },
  "America/Denver": {
    country: "United States",
    code: "US",
  },
  "America/Boise": {
    country: "United States",
    code: "US",
  },
  "America/Phoenix": {
    country: "United States",
    code: "US",
  },
  "America/Los_Angeles": {
    country: "United States",
    code: "US",
  },
  "America/Anchorage": {
    country: "United States",
    code: "US",
  },
  "America/Juneau": {
    country: "United States",
    code: "US",
  },
  "America/Sitka": {
    country: "United States",
    code: "US",
  },
  "America/Metlakatla": {
    country: "United States",
    code: "US",
  },
  "America/Yakutat": {
    country: "United States",
    code: "US",
  },
  "America/Nome": {
    country: "United States",
    code: "US",
  },
  "America/Adak": {
    country: "United States",
    code: "US",
  },
  "Pacific/Honolulu": {
    country: "United States",
    code: "US",
  },
  "America/Montevideo": {
    country: "Uruguay",
    code: "UY",
  },
  "Asia/Samarkand": {
    country: "Uzbekistan",
    code: "UZ",
  },
  "Asia/Tashkent": {
    country: "Uzbekistan",
    code: "UZ",
  },
  "America/Caracas": {
    country: "Venezuela",
    code: "VE",
  },
  "Asia/Ho_Chi_Minh": {
    country: "Vietnam",
    code: "VN",
  },
  "Pacific/Efate": {
    country: "Vanuatu",
    code: "VU",
  },
  "Pacific/Apia": {
    country: "Samoa (western)",
    code: "WS",
  },
  "Africa/Johannesburg": {
    country: "South Africa",
    code: "ZA",
  },
  "America/Antigua": {
    country: "Antigua & Barbuda",
    code: "AG",
  },
  "America/Anguilla": {
    country: "Anguilla",
    code: "AI",
  },
  "Africa/Luanda": {
    country: "Angola",
    code: "AO",
  },
  "Antarctica/McMurdo": {
    country: "Antarctica",
    code: "AQ",
  },
  "Antarctica/DumontDUrville": {
    country: "Antarctica",
    code: "AQ",
  },
  "Antarctica/Syowa": {
    country: "Antarctica",
    code: "AQ",
  },
  "Antarctica/Vostok": {
    country: "Antarctica",
    code: "AQ",
  },
  "America/Aruba": {
    country: "Aruba",
    code: "AW",
  },
  "Europe/Mariehamn": {
    country: "Åland Islands",
    code: "AX",
  },
  "Europe/Sarajevo": {
    country: "Bosnia & Herzegovina",
    code: "BA",
  },
  "Africa/Ouagadougou": {
    country: "Burkina Faso",
    code: "BF",
  },
  "Asia/Bahrain": {
    country: "Bahrain",
    code: "BH",
  },
  "Africa/Bujumbura": {
    country: "Burundi",
    code: "BI",
  },
  "Africa/Porto-Novo": {
    country: "Benin",
    code: "BJ",
  },
  "America/St_Barthelemy": {
    country: "St Barthelemy",
    code: "BL",
  },
  "Asia/Brunei": {
    country: "Brunei",
    code: "BN",
  },
  "America/Kralendijk": {
    country: "Caribbean NL",
    code: "BQ",
  },
  "America/Nassau": {
    country: "Bahamas",
    code: "BS",
  },
  "Africa/Gaborone": {
    country: "Botswana",
    code: "BW",
  },
  "America/Blanc-Sablon": {
    country: "Canada",
    code: "CA",
  },
  "America/Atikokan": {
    country: "Canada",
    code: "CA",
  },
  "America/Creston": {
    country: "Canada",
    code: "CA",
  },
  "Indian/Cocos": {
    country: "Cocos (Keeling) Islands",
    code: "CC",
  },
  "Africa/Kinshasa": {
    country: "Congo (Dem. Rep.)",
    code: "CD",
  },
  "Africa/Lubumbashi": {
    country: "Congo (Dem. Rep.)",
    code: "CD",
  },
  "Africa/Bangui": {
    country: "Central African Rep.",
    code: "CF",
  },
  "Africa/Brazzaville": {
    country: "Congo (Rep.)",
    code: "CG",
  },
  "Africa/Douala": {
    country: "Cameroon",
    code: "CM",
  },
  "America/Curacao": {
    country: "Curaçao",
    code: "CW",
  },
  "Indian/Christmas": {
    country: "Christmas Island",
    code: "CX",
  },
  "Europe/Busingen": {
    country: "Germany",
    code: "DE",
  },
  "Africa/Djibouti": {
    country: "Djibouti",
    code: "DJ",
  },
  "Europe/Copenhagen": {
    country: "Denmark",
    code: "DK",
  },
  "America/Dominica": {
    country: "Dominica",
    code: "DM",
  },
  "Africa/Asmara": {
    country: "Eritrea",
    code: "ER",
  },
  "Africa/Addis_Ababa": {
    country: "Ethiopia",
    code: "ET",
  },
  "Pacific/Chuuk": {
    country: "Micronesia",
    code: "FM",
  },
  "Pacific/Pohnpei": {
    country: "Micronesia",
    code: "FM",
  },
  "Africa/Libreville": {
    country: "Gabon",
    code: "GA",
  },
  "America/Grenada": {
    country: "Grenada",
    code: "GD",
  },
  "Europe/Guernsey": {
    country: "Guernsey",
    code: "GG",
  },
  "Africa/Accra": {
    country: "Ghana",
    code: "GH",
  },
  "Africa/Banjul": {
    country: "Gambia",
    code: "GM",
  },
  "Africa/Conakry": {
    country: "Guinea",
    code: "GN",
  },
  "America/Guadeloupe": {
    country: "Guadeloupe",
    code: "GP",
  },
  "Africa/Malabo": {
    country: "Equatorial Guinea",
    code: "GQ",
  },
  "Europe/Zagreb": {
    country: "Croatia",
    code: "HR",
  },
  "Europe/Isle_of_Man": {
    country: "Isle of Man",
    code: "IM",
  },
  "Atlantic/Reykjavik": {
    country: "Iceland",
    code: "IS",
  },
  "Europe/Jersey": {
    country: "Jersey",
    code: "JE",
  },
  "Asia/Phnom_Penh": {
    country: "Cambodia",
    code: "KH",
  },
  "Indian/Comoro": {
    country: "Comoros",
    code: "KM",
  },
  "America/St_Kitts": {
    country: "St Kitts & Nevis",
    code: "KN",
  },
  "Asia/Kuwait": {
    country: "Kuwait",
    code: "KW",
  },
  "America/Cayman": {
    country: "Cayman Islands",
    code: "KY",
  },
  "Asia/Vientiane": {
    country: "Laos",
    code: "LA",
  },
  "America/St_Lucia": {
    country: "St Lucia",
    code: "LC",
  },
  "Europe/Vaduz": {
    country: "Liechtenstein",
    code: "LI",
  },
  "Africa/Maseru": {
    country: "Lesotho",
    code: "LS",
  },
  "Europe/Luxembourg": {
    country: "Luxembourg",
    code: "LU",
  },
  "Europe/Monaco": {
    country: "Monaco",
    code: "MC",
  },
  "Europe/Podgorica": {
    country: "Montenegro",
    code: "ME",
  },
  "America/Marigot": {
    country: "St Martin (French)",
    code: "MF",
  },
  "Indian/Antananarivo": {
    country: "Madagascar",
    code: "MG",
  },
  "Pacific/Majuro": {
    country: "Marshall Islands",
    code: "MH",
  },
  "Europe/Skopje": {
    country: "North Macedonia",
    code: "MK",
  },
  "Africa/Bamako": {
    country: "Mali",
    code: "ML",
  },
  "Pacific/Saipan": {
    country: "Northern Mariana Islands",
    code: "MP",
  },
  "Africa/Nouakchott": {
    country: "Mauritania",
    code: "MR",
  },
  "America/Montserrat": {
    country: "Montserrat",
    code: "MS",
  },
  "Africa/Blantyre": {
    country: "Malawi",
    code: "MW",
  },
  "Asia/Kuala_Lumpur": {
    country: "Malaysia",
    code: "MY",
  },
  "Africa/Niamey": {
    country: "Niger",
    code: "NE",
  },
  "Europe/Amsterdam": {
    country: "Netherlands",
    code: "NL",
  },
  "Europe/Oslo": {
    country: "Norway",
    code: "NO",
  },
  "Asia/Muscat": {
    country: "Oman",
    code: "OM",
  },
  "Indian/Reunion": {
    country: "Réunion",
    code: "RE",
  },
  "Africa/Kigali": {
    country: "Rwanda",
    code: "RW",
  },
  "Indian/Mahe": {
    country: "Seychelles",
    code: "SC",
  },
  "Europe/Stockholm": {
    country: "Sweden",
    code: "SE",
  },
  "Atlantic/St_Helena": {
    country: "St Helena",
    code: "SH",
  },
  "Europe/Ljubljana": {
    country: "Slovenia",
    code: "SI",
  },
  "Arctic/Longyearbyen": {
    country: "Svalbard & Jan Mayen",
    code: "SJ",
  },
  "Europe/Bratislava": {
    country: "Slovakia",
    code: "SK",
  },
  "Africa/Freetown": {
    country: "Sierra Leone",
    code: "SL",
  },
  "Europe/San_Marino": {
    country: "San Marino",
    code: "SM",
  },
  "Africa/Dakar": {
    country: "Senegal",
    code: "SN",
  },
  "Africa/Mogadishu": {
    country: "Somalia",
    code: "SO",
  },
  "America/Lower_Princes": {
    country: "St Maarten (Dutch)",
    code: "SX",
  },
  "Africa/Mbabane": {
    country: "Eswatini (Swaziland)",
    code: "SZ",
  },
  "Indian/Kerguelen": {
    country: "French Southern Territories",
    code: "TF",
  },
  "Africa/Lome": {
    country: "Togo",
    code: "TG",
  },
  "America/Port_of_Spain": {
    country: "Trinidad & Tobago",
    code: "TT",
  },
  "Pacific/Funafuti": {
    country: "Tuvalu",
    code: "TV",
  },
  "Africa/Dar_es_Salaam": {
    country: "Tanzania",
    code: "TZ",
  },
  "Africa/Kampala": {
    country: "Uganda",
    code: "UG",
  },
  "Pacific/Midway": {
    country: "US minor outlying islands",
    code: "UM",
  },
  "Pacific/Wake": {
    country: "US minor outlying islands",
    code: "UM",
  },
  "Europe/Vatican": {
    country: "Vatican City",
    code: "VA",
  },
  "America/St_Vincent": {
    country: "St Vincent",
    code: "VC",
  },
  "America/Tortola": {
    country: "Virgin Islands (UK)",
    code: "VG",
  },
  "America/St_Thomas": {
    country: "Virgin Islands (US)",
    code: "VI",
  },
  "Pacific/Wallis": {
    country: "Wallis & Futuna",
    code: "WF",
  },
  "Asia/Aden": {
    country: "Yemen",
    code: "YE",
  },
  "Indian/Mayotte": {
    country: "Mayotte",
    code: "YT",
  },
  "Africa/Lusaka": {
    country: "Zambia",
    code: "ZM",
  },
  "Africa/Harare": {
    country: "Zimbabwe",
    code: "ZW",
  },
};

export default timezones;
