const states = [
  {
    value: "AZ_MI",
    title: "Mingachevir",
    countryId: "AZ",
  },
  {
    value: "WS_GI",
    title: "Gaga'ifomauga",
    countryId: "WS",
  },
  {
    value: "US_PR",
    title: "Puerto Rico",
    countryId: "US",
  },
  {
    value: "GH_UE",
    title: "Upper East",
    countryId: "GH",
  },
  {
    value: "DO_23",
    title: "San Pedro de Macorís",
    countryId: "DO",
  },
  {
    value: "IN_MZ",
    title: "Mizoram",
    countryId: "IN",
  },
  {
    value: "PG_WHM",
    title: "Western Highlands Province",
    countryId: "PG",
  },
  {
    value: "LV_015",
    title: "Balvi Municipality",
    countryId: "LV",
  },
  {
    value: "LV_061",
    title: "Mālpils Municipality",
    countryId: "LV",
  },
  {
    value: "JP_12",
    title: "Chiba Prefecture",
    countryId: "JP",
  },
  {
    value: "TN_71",
    title: "Gafsa Governorate",
    countryId: "TN",
  },
  {
    value: "SN_KL",
    title: "Kaolack",
    countryId: "SN",
  },
  {
    value: "RU_MOW",
    title: "Moscow",
    countryId: "RU",
  },
  {
    value: "TO_01",
    title: "ʻEua",
    countryId: "TO",
  },
  {
    value: "CZ_634",
    title: "Třebíč",
    countryId: "CZ",
  },
  {
    value: "HU_ST",
    title: "Salgótarján",
    countryId: "HU",
  },
  {
    value: "LY_JI",
    title: "Jafara",
    countryId: "LY",
  },
  {
    value: "IT_TR",
    title: "Terni",
    countryId: "IT",
  },
  {
    value: "NI_CI",
    title: "Chinandega",
    countryId: "NI",
  },
  {
    value: "MA_HOC",
    title: "Al Hoceïma",
    countryId: "MA",
  },
  {
    value: "KM_M",
    title: "Mohéli",
    countryId: "KM",
  },
  {
    value: "GT_SM",
    title: "San Marcos Department",
    countryId: "GT",
  },
  {
    value: "DZ_33",
    title: "Illizi",
    countryId: "DZ",
  },
  {
    value: "BF_KMD",
    title: "Komondjari Province",
    countryId: "BF",
  },
  {
    value: "CH_NE",
    title: "Neuchâtel",
    countryId: "CH",
  },
  {
    value: "SI_121",
    title: "Škocjan Municipality",
    countryId: "SI",
  },
  {
    value: "SZ_SH",
    title: "Shiselweni District",
    countryId: "SZ",
  },
  {
    value: "TT_PTF",
    title: "Point Fortin",
    countryId: "TT",
  },
  {
    value: "TT_POS",
    title: "Port of Spain",
    countryId: "TT",
  },
  {
    value: "TT_PRT",
    title: "Princes Town Regional Corporation",
    countryId: "TT",
  },
  {
    value: "TT_MRC",
    title: "Rio Claro-Mayaro Regional Corporation",
    countryId: "TT",
  },
  {
    value: "TT_SFO",
    title: "San Fernando",
    countryId: "TT",
  },
  {
    value: "TT_SJL",
    title: "San Juan-Laventille Regional Corporation",
    countryId: "TT",
  },
  {
    value: "TT_SGE",
    title: "Sangre Grande Regional Corporation",
    countryId: "TT",
  },
  {
    value: "TT_SIP",
    title: "Siparia Regional Corporation",
    countryId: "TT",
  },
  {
    value: "TT_TUP",
    title: "Tunapuna-Piarco Regional Corporation",
    countryId: "TT",
  },
  {
    value: "TT_WTO",
    title: "Western Tobago",
    countryId: "TT",
  },
  {
    value: "TT_CTT",
    title: "Couva-Tabaquite-Talparo Regional Corporation",
    countryId: "TT",
  },
  {
    value: "OM_SH",
    title: "Ash Sharqiyah Region",
    countryId: "OM",
  },
  {
    value: "OM_DA",
    title: "Ad Dakhiliyah Governorate",
    countryId: "OM",
  },
  {
    value: "OM_ZA",
    title: "Ad Dhahirah Governorate",
    countryId: "OM",
  },
  {
    value: "OM_BS",
    title: "Al Batinah North Governorate",
    countryId: "OM",
  },
  {
    value: "OM_BA",
    title: "Al Batinah Region",
    countryId: "OM",
  },
  {
    value: "OM_BJ",
    title: "Al Batinah South Governorate",
    countryId: "OM",
  },
  {
    value: "OM_BU",
    title: "Al Buraimi Governorate",
    countryId: "OM",
  },
  {
    value: "OM_WU",
    title: "Al Wusta Governorate",
    countryId: "OM",
  },
  {
    value: "OM_SS",
    title: "Ash Sharqiyah North Governorate",
    countryId: "OM",
  },
  {
    value: "OM_SJ",
    title: "Ash Sharqiyah South Governorate",
    countryId: "OM",
  },
  {
    value: "OM_ZU",
    title: "Dhofar Governorate",
    countryId: "OM",
  },
  {
    value: "OM_MU",
    title: "Musandam Governorate",
    countryId: "OM",
  },
  {
    value: "OM_MA",
    title: "Muscat Governorate",
    countryId: "OM",
  },
  {
    value: "JO_BA",
    title: "Balqa Governorate",
    countryId: "JO",
  },
  {
    value: "JO_AQ",
    title: "Aqaba Governorate",
    countryId: "JO",
  },
  {
    value: "JO_AM",
    title: "Amman Governorate",
    countryId: "JO",
  },
  {
    value: "JO_AJ",
    title: "Ajloun Governorate",
    countryId: "JO",
  },
  {
    value: "JO_AT",
    title: "Tafilah Governorate",
    countryId: "JO",
  },
  {
    value: "JO_MA",
    title: "Mafraq Governorate",
    countryId: "JO",
  },
  {
    value: "JO_MD",
    title: "Madaba Governorate",
    countryId: "JO",
  },
  {
    value: "JO_MN",
    title: "Ma'an Governorate",
    countryId: "JO",
  },
  {
    value: "JO_KA",
    title: "Karak Governorate",
    countryId: "JO",
  },
  {
    value: "JO_JA",
    title: "Jerash Governorate",
    countryId: "JO",
  },
  {
    value: "IL_Z",
    title: "Northern District",
    countryId: "IL",
  },
  {
    value: "IL_JM",
    title: "Jerusalem District",
    countryId: "IL",
  },
  {
    value: "IL_HA",
    title: "Haifa District",
    countryId: "IL",
  },
  {
    value: "IL_M",
    title: "Central District",
    countryId: "IL",
  },
  {
    value: "IL_D",
    title: "Southern District",
    countryId: "IL",
  },
  {
    value: "TZ_02",
    title: "Dar es Salaam",
    countryId: "TZ",
  },
  {
    value: "TZ_01",
    title: "Arusha",
    countryId: "TZ",
  },
  {
    value: "TZ_07",
    title: "Zanzibar North",
    countryId: "TZ",
  },
  {
    value: "TZ_25",
    title: "Tanga",
    countryId: "TZ",
  },
  {
    value: "TZ_24",
    title: "Tabora",
    countryId: "TZ",
  },
  {
    value: "TZ_31",
    title: "Songwe",
    countryId: "TZ",
  },
  {
    value: "TZ_23",
    title: "Singida",
    countryId: "TZ",
  },
  {
    value: "TZ_30",
    title: "Simiyu",
    countryId: "TZ",
  },
  {
    value: "TZ_22",
    title: "Shinyanga",
    countryId: "TZ",
  },
  {
    value: "TZ_21",
    title: "Ruvuma",
    countryId: "TZ",
  },
  {
    value: "TZ_20",
    title: "Rukwa",
    countryId: "TZ",
  },
  {
    value: "TZ_19",
    title: "Pwani",
    countryId: "TZ",
  },
  {
    value: "TZ_10",
    title: "Pemba South",
    countryId: "TZ",
  },
  {
    value: "TZ_06",
    title: "Pemba North",
    countryId: "TZ",
  },
  {
    value: "TZ_29",
    title: "Njombe",
    countryId: "TZ",
  },
  {
    value: "TZ_18",
    title: "Mwanza",
    countryId: "TZ",
  },
  {
    value: "TZ_17",
    title: "Mtwara",
    countryId: "TZ",
  },
  {
    value: "TZ_16",
    title: "Morogoro",
    countryId: "TZ",
  },
  {
    value: "TZ_14",
    title: "Mbeya",
    countryId: "TZ",
  },
  {
    value: "TZ_13",
    title: "Mara",
    countryId: "TZ",
  },
  {
    value: "TZ_26",
    title: "Manyara",
    countryId: "TZ",
  },
  {
    value: "TZ_12",
    title: "Lindi",
    countryId: "TZ",
  },
  {
    value: "TZ_09",
    title: "Kilimanjaro",
    countryId: "TZ",
  },
  {
    value: "TZ_08",
    title: "Kigoma",
    countryId: "TZ",
  },
  {
    value: "TZ_28",
    title: "Katavi",
    countryId: "TZ",
  },
  {
    value: "TZ_05",
    title: "Kagera",
    countryId: "TZ",
  },
  {
    value: "TZ_03",
    title: "Dodoma",
    countryId: "TZ",
  },
  {
    value: "TZ_15",
    title: "Zanzibar West",
    countryId: "TZ",
  },
  {
    value: "TZ_11",
    title: "Zanzibar South",
    countryId: "TZ",
  },
  {
    value: "TZ_27",
    title: "Geita",
    countryId: "TZ",
  },
  {
    value: "PA_9",
    title: "Veraguas Province",
    countryId: "PA",
  },
  {
    value: "PA_8",
    title: "Panamá Province",
    countryId: "PA",
  },
  {
    value: "PA_10",
    title: "Panamá Oeste Province",
    countryId: "PA",
  },
  {
    value: "PA_NB",
    title: "Ngöbe-Buglé Comarca",
    countryId: "PA",
  },
  {
    value: "PA_7",
    title: "Los Santos Province",
    countryId: "PA",
  },
  {
    value: "PA_6",
    title: "Herrera Province",
    countryId: "PA",
  },
  {
    value: "AD_08",
    title: "Escaldes-Engordany",
    countryId: "AD",
  },
  {
    value: "PA_KY",
    title: "Guna Yala",
    countryId: "PA",
  },
  {
    value: "PA_EM",
    title: "Emberá-Wounaan Comarca",
    countryId: "PA",
  },
  {
    value: "PA_5",
    title: "Darién Province",
    countryId: "PA",
  },
  {
    value: "PA_3",
    title: "Colón Province",
    countryId: "PA",
  },
  {
    value: "PA_2",
    title: "Coclé Province",
    countryId: "PA",
  },
  {
    value: "PA_4",
    title: "Chiriquí Province",
    countryId: "PA",
  },
  {
    value: "PA_1",
    title: "Bocas del Toro Province",
    countryId: "PA",
  },
  {
    value: "KI_G",
    title: "Gilbert Islands",
    countryId: "KI",
  },
  {
    value: "KI_L",
    title: "Line Islands",
    countryId: "KI",
  },
  {
    value: "KI_P",
    title: "Phoenix Islands",
    countryId: "KI",
  },
  {
    value: "CN_ZJ",
    title: "Zhejiang",
    countryId: "CN",
  },
  {
    value: "CN_YN",
    title: "Yunnan",
    countryId: "CN",
  },
  {
    value: "CN_XZ",
    title: "Xizang",
    countryId: "CN",
  },
  {
    value: "CN_TJ",
    title: "Tianjin",
    countryId: "CN",
  },
  {
    value: "CN_TW",
    title: "Taiwan",
    countryId: "CN",
  },
  {
    value: "CN_SC",
    title: "Sichuan",
    countryId: "CN",
  },
  {
    value: "CN_SX",
    title: "Shanxi",
    countryId: "CN",
  },
  {
    value: "CN_SH",
    title: "Shanghai",
    countryId: "CN",
  },
  {
    value: "CN_SD",
    title: "Shandong",
    countryId: "CN",
  },
  {
    value: "CN_SN",
    title: "Shaanxi",
    countryId: "CN",
  },
  {
    value: "CN_QH",
    title: "Qinghai",
    countryId: "CN",
  },
  {
    value: "CN_NX",
    title: "Ningxia Huizu",
    countryId: "CN",
  },
  {
    value: "CN_MO",
    title: "Macau SAR",
    countryId: "CN",
  },
  {
    value: "CN_LN",
    title: "Liaoning",
    countryId: "CN",
  },
  {
    value: "CN_JL",
    title: "Jilin",
    countryId: "CN",
  },
  {
    value: "CN_JX",
    title: "Jiangxi",
    countryId: "CN",
  },
  {
    value: "CN_JS",
    title: "Jiangsu",
    countryId: "CN",
  },
  {
    value: "CN_NM",
    title: "Inner Mongolia",
    countryId: "CN",
  },
  {
    value: "CN_HN",
    title: "Hunan",
    countryId: "CN",
  },
  {
    value: "CN_HB",
    title: "Hubei",
    countryId: "CN",
  },
  {
    value: "CN_HK",
    title: "Hong Kong SAR",
    countryId: "CN",
  },
  {
    value: "CN_HA",
    title: "Henan",
    countryId: "CN",
  },
  {
    value: "CN_HL",
    title: "Heilongjiang",
    countryId: "CN",
  },
  {
    value: "CN_HE",
    title: "Hebei",
    countryId: "CN",
  },
  {
    value: "CN_HI",
    title: "Hainan",
    countryId: "CN",
  },
  {
    value: "CN_GZ",
    title: "Guizhou",
    countryId: "CN",
  },
  {
    value: "CN_GX",
    title: "Guangxi Zhuang",
    countryId: "CN",
  },
  {
    value: "CN_GD",
    title: "Guangdong",
    countryId: "CN",
  },
  {
    value: "CN_GS",
    title: "Gansu",
    countryId: "CN",
  },
  {
    value: "CN_FJ",
    title: "Fujian",
    countryId: "CN",
  },
  {
    value: "CN_CQ",
    title: "Chongqing",
    countryId: "CN",
  },
  {
    value: "CN_BJ",
    title: "Beijing",
    countryId: "CN",
  },
  {
    value: "CN_AH",
    title: "Anhui",
    countryId: "CN",
  },
  {
    value: "CU_15",
    title: "Artemisa Province",
    countryId: "CU",
  },
  {
    value: "CU_08",
    title: "Ciego de Ávila Province",
    countryId: "CU",
  },
  {
    value: "CU_06",
    title: "Cienfuegos Province",
    countryId: "CU",
  },
  {
    value: "CU_12",
    title: "Granma Province",
    countryId: "CU",
  },
  {
    value: "CU_14",
    title: "Guantánamo Province",
    countryId: "CU",
  },
  {
    value: "CU_03",
    title: "Havana Province",
    countryId: "CU",
  },
  {
    value: "CU_11",
    title: "Holguín Province",
    countryId: "CU",
  },
  {
    value: "CU_99",
    title: "Isla de la Juventud",
    countryId: "CU",
  },
  {
    value: "CU_10",
    title: "Las Tunas Province",
    countryId: "CU",
  },
  {
    value: "CU_04",
    title: "Matanzas Province",
    countryId: "CU",
  },
  {
    value: "CU_16",
    title: "Mayabeque Province",
    countryId: "CU",
  },
  {
    value: "CU_01",
    title: "Pinar del Río Province",
    countryId: "CU",
  },
  {
    value: "CU_07",
    title: "Sancti Spíritus Province",
    countryId: "CU",
  },
  {
    value: "CU_13",
    title: "Santiago de Cuba Province",
    countryId: "CU",
  },
  {
    value: "CU_05",
    title: "Villa Clara Province",
    countryId: "CU",
  },
  {
    value: "AZ_CAL",
    title: "Jalilabad District",
    countryId: "AZ",
  },
  {
    value: "AZ_XIZ",
    title: "Khizi District",
    countryId: "AZ",
  },
  {
    value: "AZ_XAC",
    title: "Khachmaz District",
    countryId: "AZ",
  },
  {
    value: "AZ_KAN",
    title: "Kangarli District",
    countryId: "AZ",
  },
  {
    value: "AZ_KAL",
    title: "Kalbajar District",
    countryId: "AZ",
  },
  {
    value: "AZ_ABS",
    title: "Absheron District",
    countryId: "AZ",
  },
  {
    value: "AZ_AGM",
    title: "Agdam District",
    countryId: "AZ",
  },
  {
    value: "AZ_AGS",
    title: "Agdash District",
    countryId: "AZ",
  },
  {
    value: "AZ_AGC",
    title: "Aghjabadi District",
    countryId: "AZ",
  },
  {
    value: "AZ_AGA",
    title: "Agstafa District",
    countryId: "AZ",
  },
  {
    value: "AZ_AGU",
    title: "Agsu District",
    countryId: "AZ",
  },
  {
    value: "AZ_AST",
    title: "Astara District",
    countryId: "AZ",
  },
  {
    value: "AZ_BAB",
    title: "Babek District",
    countryId: "AZ",
  },
  {
    value: "AZ_BA",
    title: "Baku",
    countryId: "AZ",
  },
  {
    value: "AZ_BAL",
    title: "Balakan District",
    countryId: "AZ",
  },
  {
    value: "AZ_BAR",
    title: "Barda District",
    countryId: "AZ",
  },
  {
    value: "AZ_BEY",
    title: "Beylagan District",
    countryId: "AZ",
  },
  {
    value: "AZ_BIL",
    title: "Bilasuvar District",
    countryId: "AZ",
  },
  {
    value: "AZ_DAS",
    title: "Dashkasan District",
    countryId: "AZ",
  },
  {
    value: "AZ_FUZ",
    title: "Fizuli District",
    countryId: "AZ",
  },
  {
    value: "AZ_GA",
    title: "Ganja",
    countryId: "AZ",
  },
  {
    value: "AZ_GAD",
    title: "Gədəbəy",
    countryId: "AZ",
  },
  {
    value: "AZ_QOB",
    title: "Gobustan District",
    countryId: "AZ",
  },
  {
    value: "AZ_GOR",
    title: "Goranboy District",
    countryId: "AZ",
  },
  {
    value: "AZ_GOY",
    title: "Goychay",
    countryId: "AZ",
  },
  {
    value: "AZ_GYG",
    title: "Goygol District",
    countryId: "AZ",
  },
  {
    value: "AZ_HAC",
    title: "Hajigabul District",
    countryId: "AZ",
  },
  {
    value: "AZ_IMI",
    title: "Imishli District",
    countryId: "AZ",
  },
  {
    value: "AZ_ISM",
    title: "Ismailli District",
    countryId: "AZ",
  },
  {
    value: "AZ_CAB",
    title: "Jabrayil District",
    countryId: "AZ",
  },
  {
    value: "AZ_CUL",
    title: "Julfa District",
    countryId: "AZ",
  },
  {
    value: "AZ_ZAR",
    title: "Zardab District",
    countryId: "AZ",
  },
  {
    value: "AZ_ZAQ",
    title: "Zaqatala District",
    countryId: "AZ",
  },
  {
    value: "AZ_ZAN",
    title: "Zangilan District",
    countryId: "AZ",
  },
  {
    value: "AZ_YEV",
    title: "Yevlakh District",
    countryId: "AZ",
  },
  {
    value: "AZ_YE",
    title: "Yevlakh",
    countryId: "AZ",
  },
  {
    value: "AZ_YAR",
    title: "Yardymli District",
    countryId: "AZ",
  },
  {
    value: "AZ_UCA",
    title: "Ujar District",
    countryId: "AZ",
  },
  {
    value: "AZ_TOV",
    title: "Tovuz District",
    countryId: "AZ",
  },
  {
    value: "AZ_TAR",
    title: "Tartar District",
    countryId: "AZ",
  },
  {
    value: "AZ_SM",
    title: "Sumqayit",
    countryId: "AZ",
  },
  {
    value: "AZ_SIY",
    title: "Siazan District",
    countryId: "AZ",
  },
  {
    value: "AZ_SUS",
    title: "Shusha District",
    countryId: "AZ",
  },
  {
    value: "AZ_SR",
    title: "Shirvan",
    countryId: "AZ",
  },
  {
    value: "AZ_SAR",
    title: "Sharur District",
    countryId: "AZ",
  },
  {
    value: "AZ_SKR",
    title: "Shamkir District",
    countryId: "AZ",
  },
  {
    value: "AZ_SMI",
    title: "Shamakhi District",
    countryId: "AZ",
  },
  {
    value: "AZ_SAK",
    title: "Shaki District",
    countryId: "AZ",
  },
  {
    value: "AZ_SA",
    title: "Shaki",
    countryId: "AZ",
  },
  {
    value: "AZ_SAH",
    title: "Shahbuz District",
    countryId: "AZ",
  },
  {
    value: "AZ_SBN",
    title: "Shabran District",
    countryId: "AZ",
  },
  {
    value: "AZ_SMX",
    title: "Samukh District",
    countryId: "AZ",
  },
  {
    value: "AZ_SAL",
    title: "Salyan District",
    countryId: "AZ",
  },
  {
    value: "AZ_SAD",
    title: "Sadarak District",
    countryId: "AZ",
  },
  {
    value: "AZ_SAB",
    title: "Sabirabad District",
    countryId: "AZ",
  },
  {
    value: "AZ_SAT",
    title: "Saatly District",
    countryId: "AZ",
  },
  {
    value: "AZ_QUS",
    title: "Qusar District",
    countryId: "AZ",
  },
  {
    value: "AZ_QBI",
    title: "Qubadli District",
    countryId: "AZ",
  },
  {
    value: "AZ_QBA",
    title: "Quba District",
    countryId: "AZ",
  },
  {
    value: "AZ_QAZ",
    title: "Qazakh District",
    countryId: "AZ",
  },
  {
    value: "AZ_QAX",
    title: "Qakh District",
    countryId: "AZ",
  },
  {
    value: "AZ_QAB",
    title: "Qabala District",
    countryId: "AZ",
  },
  {
    value: "AZ_ORD",
    title: "Ordubad District",
    countryId: "AZ",
  },
  {
    value: "AZ_OGU",
    title: "Oghuz District",
    countryId: "AZ",
  },
  {
    value: "AZ_NEF",
    title: "Neftchala District",
    countryId: "AZ",
  },
  {
    value: "AZ_NX",
    title: "Nakhchivan Autonomous Republic",
    countryId: "AZ",
  },
  {
    value: "AZ_MAS",
    title: "Masally District",
    countryId: "AZ",
  },
  {
    value: "AZ_XVD",
    title: "Martuni",
    countryId: "AZ",
  },
  {
    value: "AZ_LER",
    title: "Lerik District",
    countryId: "AZ",
  },
  {
    value: "AZ_LA",
    title: "Lankaran District",
    countryId: "AZ",
  },
  {
    value: "AZ_LAN",
    title: "Lankaran",
    countryId: "AZ",
  },
  {
    value: "AZ_LAC",
    title: "Lachin District",
    countryId: "AZ",
  },
  {
    value: "AZ_KUR",
    title: "Kurdamir District",
    countryId: "AZ",
  },
  {
    value: "AZ_XCI",
    title: "Khojali District",
    countryId: "AZ",
  },
  {
    value: "IE_LS",
    title: "Laois",
    countryId: "IE",
  },
  {
    value: "IE_KK",
    title: "Kilkenny",
    countryId: "IE",
  },
  {
    value: "IE_KE",
    title: "Kildare",
    countryId: "IE",
  },
  {
    value: "IE_KY",
    title: "Kerry",
    countryId: "IE",
  },
  {
    value: "IE_G",
    title: "Galway",
    countryId: "IE",
  },
  {
    value: "IE_D",
    title: "Dublin",
    countryId: "IE",
  },
  {
    value: "IE_DL",
    title: "Donegal",
    countryId: "IE",
  },
  {
    value: "IE_CO",
    title: "Cork",
    countryId: "IE",
  },
  {
    value: "IE_C",
    title: "Connacht",
    countryId: "IE",
  },
  {
    value: "IE_CE",
    title: "Clare",
    countryId: "IE",
  },
  {
    value: "IE_CN",
    title: "Cavan",
    countryId: "IE",
  },
  {
    value: "IE_CW",
    title: "Carlow",
    countryId: "IE",
  },
  {
    value: "IE_L",
    title: "Leinster",
    countryId: "IE",
  },
  {
    value: "IE_WW",
    title: "Wicklow",
    countryId: "IE",
  },
  {
    value: "IE_LK",
    title: "Limerick",
    countryId: "IE",
  },
  {
    value: "IE_LD",
    title: "Longford",
    countryId: "IE",
  },
  {
    value: "IE_LH",
    title: "Louth",
    countryId: "IE",
  },
  {
    value: "IE_MO",
    title: "Mayo",
    countryId: "IE",
  },
  {
    value: "IE_MH",
    title: "Meath",
    countryId: "IE",
  },
  {
    value: "IE_MN",
    title: "Monaghan",
    countryId: "IE",
  },
  {
    value: "IE_M",
    title: "Munster",
    countryId: "IE",
  },
  {
    value: "IE_OY",
    title: "Offaly",
    countryId: "IE",
  },
  {
    value: "IE_RN",
    title: "Roscommon",
    countryId: "IE",
  },
  {
    value: "IE_SO",
    title: "Sligo",
    countryId: "IE",
  },
  {
    value: "IE_TA",
    title: "Tipperary",
    countryId: "IE",
  },
  {
    value: "IE_U",
    title: "Ulster",
    countryId: "IE",
  },
  {
    value: "IE_WD",
    title: "Waterford",
    countryId: "IE",
  },
  {
    value: "IE_WH",
    title: "Westmeath",
    countryId: "IE",
  },
  {
    value: "IE_WX",
    title: "Wexford",
    countryId: "IE",
  },
  {
    value: "QA_KH",
    title: "Al Khor",
    countryId: "QA",
  },
  {
    value: "QA_ZA",
    title: "Al Daayen",
    countryId: "QA",
  },
  {
    value: "QA_RA",
    title: "Al Rayyan Municipality",
    countryId: "QA",
  },
  {
    value: "QA_WA",
    title: "Al Wakrah",
    countryId: "QA",
  },
  {
    value: "QA_SH",
    title: "Al-Shahaniya",
    countryId: "QA",
  },
  {
    value: "QA_DA",
    title: "Doha",
    countryId: "QA",
  },
  {
    value: "QA_MS",
    title: "Madinat ash Shamal",
    countryId: "QA",
  },
  {
    value: "QA_US",
    title: "Umm Salal Municipality",
    countryId: "QA",
  },
  {
    value: "CF_OP",
    title: "Ouham-Pendé Prefecture",
    countryId: "CF",
  },
  {
    value: "CF_SE",
    title: "Sangha-Mbaéré",
    countryId: "CF",
  },
  {
    value: "CF_VK",
    title: "Vakaga Prefecture",
    countryId: "CF",
  },
  {
    value: "CF_BB",
    title: "Bamingui-Bangoran Prefecture",
    countryId: "CF",
  },
  {
    value: "CF_BK",
    title: "Basse-Kotto Prefecture",
    countryId: "CF",
  },
  {
    value: "CF_HM",
    title: "Haut-Mbomou Prefecture",
    countryId: "CF",
  },
  {
    value: "CF_HK",
    title: "Haute-Kotto Prefecture",
    countryId: "CF",
  },
  {
    value: "CF_KG",
    title: "Kémo Prefecture",
    countryId: "CF",
  },
  {
    value: "CF_LB",
    title: "Lobaye Prefecture",
    countryId: "CF",
  },
  {
    value: "CF_HS",
    title: "Mambéré-Kadéï",
    countryId: "CF",
  },
  {
    value: "CF_MB",
    title: "Mbomou Prefecture",
    countryId: "CF",
  },
  {
    value: "CF_KB",
    title: "Nana-Grébizi Economic Prefecture",
    countryId: "CF",
  },
  {
    value: "CF_NM",
    title: "Nana-Mambéré Prefecture",
    countryId: "CF",
  },
  {
    value: "CF_MP",
    title: "Ombella-M'Poko Prefecture",
    countryId: "CF",
  },
  {
    value: "CF_UK",
    title: "Ouaka Prefecture",
    countryId: "CF",
  },
  {
    value: "CF_BGF",
    title: "Bangui",
    countryId: "CF",
  },
  {
    value: "CF_AC",
    title: "Ouham Prefecture",
    countryId: "CF",
  },
  {
    value: "BI_BB",
    title: "Bubanza Province",
    countryId: "BI",
  },
  {
    value: "BI_BM",
    title: "Bujumbura Mairie Province",
    countryId: "BI",
  },
  {
    value: "BI_RY",
    title: "Ruyigi Province",
    countryId: "BI",
  },
  {
    value: "BI_RT",
    title: "Rutana Province",
    countryId: "BI",
  },
  {
    value: "BI_RM",
    title: "Rumonge Province",
    countryId: "BI",
  },
  {
    value: "BI_NG",
    title: "Ngozi Province",
    countryId: "BI",
  },
  {
    value: "BI_MW",
    title: "Mwaro Province",
    countryId: "BI",
  },
  {
    value: "BI_MY",
    title: "Muyinga Province",
    countryId: "BI",
  },
  {
    value: "BI_MU",
    title: "Muramvya Province",
    countryId: "BI",
  },
  {
    value: "BI_MA",
    title: "Makamba Province",
    countryId: "BI",
  },
  {
    value: "BI_KI",
    title: "Kirundo Province",
    countryId: "BI",
  },
  {
    value: "BI_KY",
    title: "Kayanza Province",
    countryId: "BI",
  },
  {
    value: "BI_KR",
    title: "Karuzi Province",
    countryId: "BI",
  },
  {
    value: "BI_GI",
    title: "Gitega Province",
    countryId: "BI",
  },
  {
    value: "BI_CI",
    title: "Cibitoke Province",
    countryId: "BI",
  },
  {
    value: "BI_CA",
    title: "Cankuzo Province",
    countryId: "BI",
  },
  {
    value: "BI_BR",
    title: "Bururi Province",
    countryId: "BI",
  },
  {
    value: "BI_BL",
    title: "Bujumbura Rural Province",
    countryId: "BI",
  },
  {
    value: "PT_02",
    title: "Beja",
    countryId: "PT",
  },
  {
    value: "PT_20",
    title: "Açores",
    countryId: "PT",
  },
  {
    value: "PT_01",
    title: "Aveiro",
    countryId: "PT",
  },
  {
    value: "PT_18",
    title: "Viseu",
    countryId: "PT",
  },
  {
    value: "PT_17",
    title: "Vila Real",
    countryId: "PT",
  },
  {
    value: "PT_16",
    title: "Viana do Castelo",
    countryId: "PT",
  },
  {
    value: "PT_15",
    title: "Setúbal",
    countryId: "PT",
  },
  {
    value: "PT_14",
    title: "Santarém",
    countryId: "PT",
  },
  {
    value: "PT_13",
    title: "Porto",
    countryId: "PT",
  },
  {
    value: "PT_12",
    title: "Portalegre",
    countryId: "PT",
  },
  {
    value: "PT_30",
    title: "Madeira",
    countryId: "PT",
  },
  {
    value: "PT_11",
    title: "Lisbon",
    countryId: "PT",
  },
  {
    value: "PT_10",
    title: "Leiria",
    countryId: "PT",
  },
  {
    value: "PT_09",
    title: "Guarda",
    countryId: "PT",
  },
  {
    value: "PT_08",
    title: "Faro",
    countryId: "PT",
  },
  {
    value: "PT_07",
    title: "Évora",
    countryId: "PT",
  },
  {
    value: "PT_06",
    title: "Coimbra",
    countryId: "PT",
  },
  {
    value: "PT_05",
    title: "Castelo Branco",
    countryId: "PT",
  },
  {
    value: "PT_04",
    title: "Bragança",
    countryId: "PT",
  },
  {
    value: "PT_03",
    title: "Braga",
    countryId: "PT",
  },
  {
    value: "NG_AB",
    title: "Abia",
    countryId: "NG",
  },
  {
    value: "NG_FC",
    title: "Abuja Federal Capital Territory",
    countryId: "NG",
  },
  {
    value: "NG_AD",
    title: "Adamawa",
    countryId: "NG",
  },
  {
    value: "NG_AK",
    title: "Akwa Ibom",
    countryId: "NG",
  },
  {
    value: "NG_AN",
    title: "Anambra",
    countryId: "NG",
  },
  {
    value: "NG_BA",
    title: "Bauchi",
    countryId: "NG",
  },
  {
    value: "NG_BY",
    title: "Bayelsa",
    countryId: "NG",
  },
  {
    value: "NG_BE",
    title: "Benue",
    countryId: "NG",
  },
  {
    value: "NG_BO",
    title: "Borno",
    countryId: "NG",
  },
  {
    value: "NG_CR",
    title: "Cross River",
    countryId: "NG",
  },
  {
    value: "NG_DE",
    title: "Delta",
    countryId: "NG",
  },
  {
    value: "NG_EB",
    title: "Ebonyi",
    countryId: "NG",
  },
  {
    value: "NG_ED",
    title: "Edo",
    countryId: "NG",
  },
  {
    value: "NG_EK",
    title: "Ekiti",
    countryId: "NG",
  },
  {
    value: "NG_EN",
    title: "Enugu",
    countryId: "NG",
  },
  {
    value: "NG_GO",
    title: "Gombe",
    countryId: "NG",
  },
  {
    value: "NG_IM",
    title: "Imo",
    countryId: "NG",
  },
  {
    value: "NG_JI",
    title: "Jigawa",
    countryId: "NG",
  },
  {
    value: "NG_ZA",
    title: "Zamfara",
    countryId: "NG",
  },
  {
    value: "NG_KN",
    title: "Kano",
    countryId: "NG",
  },
  {
    value: "NG_KT",
    title: "Katsina",
    countryId: "NG",
  },
  {
    value: "NG_KE",
    title: "Kebbi",
    countryId: "NG",
  },
  {
    value: "NG_KO",
    title: "Kogi",
    countryId: "NG",
  },
  {
    value: "NG_KW",
    title: "Kwara",
    countryId: "NG",
  },
  {
    value: "NG_LA",
    title: "Lagos",
    countryId: "NG",
  },
  {
    value: "NG_NA",
    title: "Nasarawa",
    countryId: "NG",
  },
  {
    value: "NG_NI",
    title: "Niger",
    countryId: "NG",
  },
  {
    value: "NG_OG",
    title: "Ogun",
    countryId: "NG",
  },
  {
    value: "NG_ON",
    title: "Ondo",
    countryId: "NG",
  },
  {
    value: "NG_OS",
    title: "Osun",
    countryId: "NG",
  },
  {
    value: "NG_OY",
    title: "Oyo",
    countryId: "NG",
  },
  {
    value: "NG_PL",
    title: "Plateau",
    countryId: "NG",
  },
  {
    value: "NG_RI",
    title: "Rivers",
    countryId: "NG",
  },
  {
    value: "NG_SO",
    title: "Sokoto",
    countryId: "NG",
  },
  {
    value: "NG_TA",
    title: "Taraba",
    countryId: "NG",
  },
  {
    value: "NG_YO",
    title: "Yobe",
    countryId: "NG",
  },
  {
    value: "AL_BU",
    title: "Bulqizë District",
    countryId: "AL",
  },
  {
    value: "AL_05",
    title: "Gjirokastër County",
    countryId: "AL",
  },
  {
    value: "AL_FR",
    title: "Fier District",
    countryId: "AL",
  },
  {
    value: "AL_KU",
    title: "Kukës District",
    countryId: "AL",
  },
  {
    value: "AL_07",
    title: "Kukës County",
    countryId: "AL",
  },
  {
    value: "AL_KC",
    title: "Kuçovë District",
    countryId: "AL",
  },
  {
    value: "AL_KR",
    title: "Krujë District",
    countryId: "AL",
  },
  {
    value: "AL_KO",
    title: "Korçë District",
    countryId: "AL",
  },
  {
    value: "AL_06",
    title: "Korçë County",
    countryId: "AL",
  },
  {
    value: "AL_ER",
    title: "Kolonjë District",
    countryId: "AL",
  },
  {
    value: "AL_KA",
    title: "Kavajë District",
    countryId: "AL",
  },
  {
    value: "AL_HA",
    title: "Has District",
    countryId: "AL",
  },
  {
    value: "AL_GR",
    title: "Gramsh District",
    countryId: "AL",
  },
  {
    value: "AL_01",
    title: "Berat County",
    countryId: "AL",
  },
  {
    value: "AL_BR",
    title: "Berat District",
    countryId: "AL",
  },
  {
    value: "AL_GJ",
    title: "Gjirokastër District",
    countryId: "AL",
  },
  {
    value: "AL_DL",
    title: "Delvinë District",
    countryId: "AL",
  },
  {
    value: "AL_04",
    title: "Fier County",
    countryId: "AL",
  },
  {
    value: "AL_03",
    title: "Elbasan County",
    countryId: "AL",
  },
  {
    value: "AL_DR",
    title: "Durrës District",
    countryId: "AL",
  },
  {
    value: "AL_02",
    title: "Durrës County",
    countryId: "AL",
  },
  {
    value: "AL_DI",
    title: "Dibër District",
    countryId: "AL",
  },
  {
    value: "AL_09",
    title: "Dibër County",
    countryId: "AL",
  },
  {
    value: "AL_DV",
    title: "Devoll District",
    countryId: "AL",
  },
  {
    value: "AL_TR",
    title: "Tirana District",
    countryId: "AL",
  },
  {
    value: "AL_12",
    title: "Vlorë County",
    countryId: "AL",
  },
  {
    value: "AL_VL",
    title: "Vlorë District",
    countryId: "AL",
  },
  {
    value: "AL_TP",
    title: "Tropojë District",
    countryId: "AL",
  },
  {
    value: "AL_11",
    title: "Tirana County",
    countryId: "AL",
  },
  {
    value: "AL_TE",
    title: "Tepelenë District",
    countryId: "AL",
  },
  {
    value: "AL_SK",
    title: "Skrapar District",
    countryId: "AL",
  },
  {
    value: "AL_SH",
    title: "Shkodër District",
    countryId: "AL",
  },
  {
    value: "AL_10",
    title: "Shkodër County",
    countryId: "AL",
  },
  {
    value: "AL_SR",
    title: "Sarandë District",
    countryId: "AL",
  },
  {
    value: "AL_PU",
    title: "Pukë District",
    countryId: "AL",
  },
  {
    value: "AL_PG",
    title: "Pogradec District",
    countryId: "AL",
  },
  {
    value: "AL_PR",
    title: "Përmet District",
    countryId: "AL",
  },
  {
    value: "AL_PQ",
    title: "Peqin District",
    countryId: "AL",
  },
  {
    value: "AL_MR",
    title: "Mirditë District",
    countryId: "AL",
  },
  {
    value: "AL_MT",
    title: "Mat District",
    countryId: "AL",
  },
  {
    value: "AL_MK",
    title: "Mallakastër District",
    countryId: "AL",
  },
  {
    value: "AL_MM",
    title: "Malësi e Madhe District",
    countryId: "AL",
  },
  {
    value: "AL_LU",
    title: "Lushnjë District",
    countryId: "AL",
  },
  {
    value: "AL_LB",
    title: "Librazhd District",
    countryId: "AL",
  },
  {
    value: "AL_LE",
    title: "Lezhë District",
    countryId: "AL",
  },
  {
    value: "AL_08",
    title: "Lezhë County",
    countryId: "AL",
  },
  {
    value: "BE_WNA",
    title: "Namur",
    countryId: "BE",
  },
  {
    value: "AL_KB",
    title: "Kurbin District",
    countryId: "AL",
  },
  {
    value: "BE_VLG",
    title: "Flanders",
    countryId: "BE",
  },
  {
    value: "BE_VBR",
    title: "Flemish Brabant",
    countryId: "BE",
  },
  {
    value: "BE_WHT",
    title: "Hainaut",
    countryId: "BE",
  },
  {
    value: "BE_WLG",
    title: "Liège",
    countryId: "BE",
  },
  {
    value: "BE_VLI",
    title: "Limburg",
    countryId: "BE",
  },
  {
    value: "BE_WLX",
    title: "Luxembourg",
    countryId: "BE",
  },
  {
    value: "BE_WAL",
    title: "Wallonia",
    countryId: "BE",
  },
  {
    value: "BE_WBR",
    title: "Walloon Brabant",
    countryId: "BE",
  },
  {
    value: "BE_BRU",
    title: "Brussels-Capital Region",
    countryId: "BE",
  },
  {
    value: "BE_VWV",
    title: "West Flanders",
    countryId: "BE",
  },
  {
    value: "BE_VOV",
    title: "East Flanders",
    countryId: "BE",
  },
  {
    value: "BE_VAN",
    title: "Antwerp",
    countryId: "BE",
  },
  {
    value: "HR_03",
    title: "Sisak-Moslavina",
    countryId: "HR",
  },
  {
    value: "HR_05",
    title: "Varaždin",
    countryId: "HR",
  },
  {
    value: "HR_10",
    title: "Virovitica-Podravina",
    countryId: "HR",
  },
  {
    value: "HR_16",
    title: "Vukovar-Syrmia",
    countryId: "HR",
  },
  {
    value: "HR_13",
    title: "Zadar",
    countryId: "HR",
  },
  {
    value: "HR_01",
    title: "Zagreb",
    countryId: "HR",
  },
  {
    value: "HR_21",
    title: "Zagreb",
    countryId: "HR",
  },
  {
    value: "HR_17",
    title: "Split-Dalmatia",
    countryId: "HR",
  },
  {
    value: "HR_15",
    title: "Šibenik-Knin",
    countryId: "HR",
  },
  {
    value: "HR_08",
    title: "Primorje-Gorski Kotar",
    countryId: "HR",
  },
  {
    value: "HR_11",
    title: "Požega-Slavonia",
    countryId: "HR",
  },
  {
    value: "HR_14",
    title: "Osijek-Baranja",
    countryId: "HR",
  },
  {
    value: "HR_20",
    title: "Međimurje",
    countryId: "HR",
  },
  {
    value: "HR_02",
    title: "Krapina-Zagorje",
    countryId: "HR",
  },
  {
    value: "HR_06",
    title: "Koprivnica-Križevci",
    countryId: "HR",
  },
  {
    value: "HR_04",
    title: "Karlovac",
    countryId: "HR",
  },
  {
    value: "HR_18",
    title: "Istria",
    countryId: "HR",
  },
  {
    value: "HR_19",
    title: "Dubrovnik-Neretva",
    countryId: "HR",
  },
  {
    value: "HR_12",
    title: "Brod-Posavina",
    countryId: "HR",
  },
  {
    value: "HR_07",
    title: "Bjelovar-Bilogora",
    countryId: "HR",
  },
  {
    value: "AR_W",
    title: "Corrientes",
    countryId: "AR",
  },
  {
    value: "AR_U",
    title: "Chubut",
    countryId: "AR",
  },
  {
    value: "AR_C",
    title: "Ciudad Autónoma de Buenos Aires",
    countryId: "AR",
  },
  {
    value: "AR_X",
    title: "Córdoba",
    countryId: "AR",
  },
  {
    value: "AR_A",
    title: "Salta",
    countryId: "AR",
  },
  {
    value: "AR_J",
    title: "San Juan",
    countryId: "AR",
  },
  {
    value: "AR_Y",
    title: "Jujuy",
    countryId: "AR",
  },
  {
    value: "AR_L",
    title: "La Pampa",
    countryId: "AR",
  },
  {
    value: "AR_F",
    title: "La Rioja",
    countryId: "AR",
  },
  {
    value: "AR_M",
    title: "Mendoza",
    countryId: "AR",
  },
  {
    value: "AR_N",
    title: "Misiones",
    countryId: "AR",
  },
  {
    value: "AR_D",
    title: "San Luis",
    countryId: "AR",
  },
  {
    value: "AR_T",
    title: "Tucumán",
    countryId: "AR",
  },
  {
    value: "AR_V",
    title: "Tierra del Fuego",
    countryId: "AR",
  },
  {
    value: "AR_G",
    title: "Santiago del Estero",
    countryId: "AR",
  },
  {
    value: "AR_S",
    title: "Santa Fe",
    countryId: "AR",
  },
  {
    value: "AR_Z",
    title: "Santa Cruz",
    countryId: "AR",
  },
  {
    value: "AR_B",
    title: "Buenos Aires",
    countryId: "AR",
  },
  {
    value: "AR_E",
    title: "Entre Ríos",
    countryId: "AR",
  },
  {
    value: "AR_Q",
    title: "Neuquén",
    countryId: "AR",
  },
  {
    value: "AR_P",
    title: "Formosa",
    countryId: "AR",
  },
  {
    value: "AR_R",
    title: "Río Negro",
    countryId: "AR",
  },
  {
    value: "AR_K",
    title: "Catamarca",
    countryId: "AR",
  },
  {
    value: "AR_H",
    title: "Chaco",
    countryId: "AR",
  },
  {
    value: "SL_N",
    title: "Northern Province",
    countryId: "SL",
  },
  {
    value: "SL_S",
    title: "Southern Province",
    countryId: "SL",
  },
  {
    value: "SL_W",
    title: "Western Area",
    countryId: "SL",
  },
  {
    value: "SL_E",
    title: "Eastern Province",
    countryId: "SL",
  },
  {
    value: "TJ_GB",
    title: "Gorno-Badakhshan Autonomous Province",
    countryId: "TJ",
  },
  {
    value: "TJ_KT",
    title: "Khatlon Province",
    countryId: "TJ",
  },
  {
    value: "TJ_RA",
    title: "districts of Republican Subordination",
    countryId: "TJ",
  },
  {
    value: "TJ_SU",
    title: "Sughd Province",
    countryId: "TJ",
  },
  {
    value: "BJ_CO",
    title: "Collines Department",
    countryId: "BJ",
  },
  {
    value: "BJ_AL",
    title: "Alibori Department",
    countryId: "BJ",
  },
  {
    value: "BJ_AK",
    title: "Atakora Department",
    countryId: "BJ",
  },
  {
    value: "BJ_PL",
    title: "Plateau Department",
    countryId: "BJ",
  },
  {
    value: "BJ_BO",
    title: "Borgou Department",
    countryId: "BJ",
  },
  {
    value: "BJ_KO",
    title: "Kouffo Department",
    countryId: "BJ",
  },
  {
    value: "BJ_LI",
    title: "Littoral Department",
    countryId: "BJ",
  },
  {
    value: "BJ_AQ",
    title: "Atlantique Department",
    countryId: "BJ",
  },
  {
    value: "BJ_ZO",
    title: "Zou Department",
    countryId: "BJ",
  },
  {
    value: "BJ_DO",
    title: "Donga Department",
    countryId: "BJ",
  },
  {
    value: "BJ_OU",
    title: "Ouémé Department",
    countryId: "BJ",
  },
  {
    value: "BG_27",
    title: "Shumen",
    countryId: "BG",
  },
  {
    value: "BJ_MO",
    title: "Mono Department",
    countryId: "BJ",
  },
  {
    value: "LU_WI",
    title: "Canton of Wiltz",
    countryId: "LU",
  },
  {
    value: "LU_CA",
    title: "Canton of Capellen",
    countryId: "LU",
  },
  {
    value: "LU_CL",
    title: "Canton of Clervaux",
    countryId: "LU",
  },
  {
    value: "LU_DI",
    title: "Canton of Diekirch",
    countryId: "LU",
  },
  {
    value: "LU_EC",
    title: "Canton of Echternach",
    countryId: "LU",
  },
  {
    value: "LU_ES",
    title: "Canton of Esch-sur-Alzette",
    countryId: "LU",
  },
  {
    value: "LU_GR",
    title: "Canton of Grevenmacher",
    countryId: "LU",
  },
  {
    value: "LU_LU",
    title: "Canton of Luxembourg",
    countryId: "LU",
  },
  {
    value: "LU_ME",
    title: "Canton of Mersch",
    countryId: "LU",
  },
  {
    value: "LU_RD",
    title: "Canton of Redange",
    countryId: "LU",
  },
  {
    value: "LU_RM",
    title: "Canton of Remich",
    countryId: "LU",
  },
  {
    value: "LU_VD",
    title: "Canton of Vianden",
    countryId: "LU",
  },
  {
    value: "LU_D",
    title: "Diekirch District",
    countryId: "LU",
  },
  {
    value: "LU_G",
    title: "Grevenmacher District",
    countryId: "LU",
  },
  {
    value: "LU_L",
    title: "Luxembourg District",
    countryId: "LU",
  },
  {
    value: "GA_4",
    title: "Ngounié Province",
    countryId: "GA",
  },
  {
    value: "GA_7",
    title: "Ogooué-Lolo Province",
    countryId: "GA",
  },
  {
    value: "GA_2",
    title: "Haut-Ogooué Province",
    countryId: "GA",
  },
  {
    value: "GA_6",
    title: "Ogooué-Ivindo Province",
    countryId: "GA",
  },
  {
    value: "GA_1",
    title: "Estuaire Province",
    countryId: "GA",
  },
  {
    value: "GA_3",
    title: "Moyen-Ogooué Province",
    countryId: "GA",
  },
  {
    value: "GA_9",
    title: "Woleu-Ntem Province",
    countryId: "GA",
  },
  {
    value: "GA_8",
    title: "Ogooué-Maritime Province",
    countryId: "GA",
  },
  {
    value: "DM_11",
    title: "Saint Peter Parish",
    countryId: "DM",
  },
  {
    value: "DM_03",
    title: "Saint David Parish",
    countryId: "DM",
  },
  {
    value: "DM_10",
    title: "Saint Paul Parish",
    countryId: "DM",
  },
  {
    value: "DM_09",
    title: "Saint Patrick Parish",
    countryId: "DM",
  },
  {
    value: "DM_08",
    title: "Saint Mark Parish",
    countryId: "DM",
  },
  {
    value: "DM_07",
    title: "Saint Luke Parish",
    countryId: "DM",
  },
  {
    value: "DM_04",
    title: "Saint George Parish",
    countryId: "DM",
  },
  {
    value: "DM_02",
    title: "Saint Andrew Parish",
    countryId: "DM",
  },
  {
    value: "DM_06",
    title: "Saint Joseph Parish",
    countryId: "DM",
  },
  {
    value: "DM_05",
    title: "Saint John Parish",
    countryId: "DM",
  },
  {
    value: "MY_12",
    title: "Sabah",
    countryId: "MY",
  },
  {
    value: "MY_16",
    title: "Putrajaya",
    countryId: "MY",
  },
  {
    value: "MY_02",
    title: "Kedah",
    countryId: "MY",
  },
  {
    value: "MY_09",
    title: "Perlis",
    countryId: "MY",
  },
  {
    value: "MY_13",
    title: "Sarawak",
    countryId: "MY",
  },
  {
    value: "MY_03",
    title: "Kelantan",
    countryId: "MY",
  },
  {
    value: "MY_10",
    title: "Selangor",
    countryId: "MY",
  },
  {
    value: "MY_11",
    title: "Terengganu",
    countryId: "MY",
  },
  {
    value: "MY_06",
    title: "Pahang",
    countryId: "MY",
  },
  {
    value: "MY_07",
    title: "Penang",
    countryId: "MY",
  },
  {
    value: "MY_05",
    title: "Negeri Sembilan",
    countryId: "MY",
  },
  {
    value: "MY_04",
    title: "Malacca",
    countryId: "MY",
  },
  {
    value: "MY_15",
    title: "Labuan",
    countryId: "MY",
  },
  {
    value: "MY_14",
    title: "Kuala Lumpur",
    countryId: "MY",
  },
  {
    value: "MY_01",
    title: "Johor",
    countryId: "MY",
  },
  {
    value: "MY_08",
    title: "Perak",
    countryId: "MY",
  },
  {
    value: "WS_FA",
    title: "Fa'asaleleaga",
    countryId: "WS",
  },
  {
    value: "WS_TU",
    title: "Tuamasaga",
    countryId: "WS",
  },
  {
    value: "WS_VS",
    title: "Vaisigano",
    countryId: "WS",
  },
  {
    value: "WS_VF",
    title: "Va'a-o-Fonoti",
    countryId: "WS",
  },
  {
    value: "WS_SA",
    title: "Satupa'itea",
    countryId: "WS",
  },
  {
    value: "WS_PA",
    title: "Palauli",
    countryId: "WS",
  },
  {
    value: "WS_AL",
    title: "Aiga-i-le-Tai",
    countryId: "WS",
  },
  {
    value: "WS_AT",
    title: "Atua",
    countryId: "WS",
  },
  {
    value: "WS_GE",
    title: "Gaga'emauga",
    countryId: "WS",
  },
  {
    value: "BY_VI",
    title: "Vitebsk Region",
    countryId: "BY",
  },
  {
    value: "BY_MA",
    title: "Mogilev Region",
    countryId: "BY",
  },
  {
    value: "BY_BR",
    title: "Brest Region",
    countryId: "BY",
  },
  {
    value: "BY_HM",
    title: "Minsk",
    countryId: "BY",
  },
  {
    value: "BY_HR",
    title: "Grodno Region",
    countryId: "BY",
  },
  {
    value: "BY_MI",
    title: "Minsk Region",
    countryId: "BY",
  },
  {
    value: "BY_HO",
    title: "Gomel Region",
    countryId: "BY",
  },
  {
    value: "MX_NLE",
    title: "Nuevo León",
    countryId: "MX",
  },
  {
    value: "MX_ZAC",
    title: "Zacatecas",
    countryId: "MX",
  },
  {
    value: "MX_YUC",
    title: "Yucatán",
    countryId: "MX",
  },
  {
    value: "MX_VER",
    title: "Veracruz de Ignacio de la Llave",
    countryId: "MX",
  },
  {
    value: "MX_TLA",
    title: "Tlaxcala",
    countryId: "MX",
  },
  {
    value: "MX_TAM",
    title: "Tamaulipas",
    countryId: "MX",
  },
  {
    value: "MX_TAB",
    title: "Tabasco",
    countryId: "MX",
  },
  {
    value: "MX_SON",
    title: "Sonora",
    countryId: "MX",
  },
  {
    value: "MX_SIN",
    title: "Sinaloa",
    countryId: "MX",
  },
  {
    value: "MX_SLP",
    title: "San Luis Potosí",
    countryId: "MX",
  },
  {
    value: "MX_ROO",
    title: "Quintana Roo",
    countryId: "MX",
  },
  {
    value: "MX_QUE",
    title: "Querétaro",
    countryId: "MX",
  },
  {
    value: "MX_PUE",
    title: "Puebla",
    countryId: "MX",
  },
  {
    value: "MX_AGU",
    title: "Aguascalientes",
    countryId: "MX",
  },
  {
    value: "MX_GRO",
    title: "Guerrero",
    countryId: "MX",
  },
  {
    value: "MX_GUA",
    title: "Guanajuato",
    countryId: "MX",
  },
  {
    value: "MX_MEX",
    title: "Estado de México",
    countryId: "MX",
  },
  {
    value: "MX_DUR",
    title: "Durango",
    countryId: "MX",
  },
  {
    value: "MX_COL",
    title: "Colima",
    countryId: "MX",
  },
  {
    value: "MX_COA",
    title: "Coahuila de Zaragoza",
    countryId: "MX",
  },
  {
    value: "MX_CDMX",
    title: "Ciudad de México",
    countryId: "MX",
  },
  {
    value: "MX_CHH",
    title: "Chihuahua",
    countryId: "MX",
  },
  {
    value: "MX_CHP",
    title: "Chiapas",
    countryId: "MX",
  },
  {
    value: "MX_OAX",
    title: "Oaxaca",
    countryId: "MX",
  },
  {
    value: "MX_NAY",
    title: "Nayarit",
    countryId: "MX",
  },
  {
    value: "MX_BCN",
    title: "Baja California",
    countryId: "MX",
  },
  {
    value: "MX_MOR",
    title: "Morelos",
    countryId: "MX",
  },
  {
    value: "MX_HID",
    title: "Hidalgo",
    countryId: "MX",
  },
  {
    value: "MX_JAL",
    title: "Jalisco",
    countryId: "MX",
  },
  {
    value: "MX_MIC",
    title: "Michoacán de Ocampo",
    countryId: "MX",
  },
  {
    value: "MX_CAM",
    title: "Campeche",
    countryId: "MX",
  },
  {
    value: "MX_BCS",
    title: "Baja California Sur",
    countryId: "MX",
  },
  {
    value: "BG_24",
    title: "Stara Zagora Province",
    countryId: "BG",
  },
  {
    value: "BG_23",
    title: "Sofia Province",
    countryId: "BG",
  },
  {
    value: "BG_22",
    title: "Sofia City Province",
    countryId: "BG",
  },
  {
    value: "BG_21",
    title: "Smolyan Province",
    countryId: "BG",
  },
  {
    value: "BG_20",
    title: "Sliven Province",
    countryId: "BG",
  },
  {
    value: "BG_16",
    title: "Plovdiv Province",
    countryId: "BG",
  },
  {
    value: "BG_15",
    title: "Pleven Province",
    countryId: "BG",
  },
  {
    value: "BG_14",
    title: "Pernik Province",
    countryId: "BG",
  },
  {
    value: "BG_13",
    title: "Pazardzhik Province",
    countryId: "BG",
  },
  {
    value: "BG_12",
    title: "Montana Province",
    countryId: "BG",
  },
  {
    value: "BG_11",
    title: "Lovech Province",
    countryId: "BG",
  },
  {
    value: "BG_10",
    title: "Kyustendil Province",
    countryId: "BG",
  },
  {
    value: "BG_09",
    title: "Kardzhali Province",
    countryId: "BG",
  },
  {
    value: "BG_26",
    title: "Haskovo Province",
    countryId: "BG",
  },
  {
    value: "BG_07",
    title: "Gabrovo Province",
    countryId: "BG",
  },
  {
    value: "BG_08",
    title: "Dobrich Province",
    countryId: "BG",
  },
  {
    value: "BG_02",
    title: "Burgas Province",
    countryId: "BG",
  },
  {
    value: "BG_01",
    title: "Blagoevgrad Province",
    countryId: "BG",
  },
  {
    value: "BG_28",
    title: "Yambol Province",
    countryId: "BG",
  },
  {
    value: "BG_06",
    title: "Vratsa Province",
    countryId: "BG",
  },
  {
    value: "BG_05",
    title: "Vidin Province",
    countryId: "BG",
  },
  {
    value: "BG_04",
    title: "Veliko Tarnovo Province",
    countryId: "BG",
  },
  {
    value: "BG_03",
    title: "Varna Province",
    countryId: "BG",
  },
  {
    value: "BG_19",
    title: "Silistra Province",
    countryId: "BG",
  },
  {
    value: "BG_25",
    title: "Targovishte Province",
    countryId: "BG",
  },
  {
    value: "BG_18",
    title: "Ruse Province",
    countryId: "BG",
  },
  {
    value: "BG_17",
    title: "Razgrad Province",
    countryId: "BG",
  },
  {
    value: "CR_C",
    title: "Provincia de Cartago",
    countryId: "CR",
  },
  {
    value: "CR_L",
    title: "Limón Province",
    countryId: "CR",
  },
  {
    value: "CR_H",
    title: "Heredia Province",
    countryId: "CR",
  },
  {
    value: "CR_G",
    title: "Guanacaste Province",
    countryId: "CR",
  },
  {
    value: "CR_A",
    title: "Alajuela Province",
    countryId: "CR",
  },
  {
    value: "CR_SJ",
    title: "San José Province",
    countryId: "CR",
  },
  {
    value: "CR_P",
    title: "Puntarenas Province",
    countryId: "CR",
  },
  {
    value: "KP_09",
    title: "North Hamgyong Province",
    countryId: "KP",
  },
  {
    value: "KP_08",
    title: "South Hamgyong Province",
    countryId: "KP",
  },
  {
    value: "KP_02",
    title: "South Pyongan Province",
    countryId: "KP",
  },
  {
    value: "KP_06",
    title: "North Hwanghae Province",
    countryId: "KP",
  },
  {
    value: "KP_05",
    title: "South Hwanghae Province",
    countryId: "KP",
  },
  {
    value: "KP_03",
    title: "North Pyongan Province",
    countryId: "KP",
  },
  {
    value: "KP_01",
    title: "Pyongyang",
    countryId: "KP",
  },
  {
    value: "KP_13",
    title: "Rason",
    countryId: "KP",
  },
  {
    value: "KP_10",
    title: "Ryanggang Province",
    countryId: "KP",
  },
  {
    value: "KP_04",
    title: "Chagang Province",
    countryId: "KP",
  },
  {
    value: "KP_07",
    title: "Kangwon Province",
    countryId: "KP",
  },
  {
    value: "CY_04",
    title: "Famagusta District (Mağusa)",
    countryId: "CY",
  },
  {
    value: "CY_06",
    title: "Kyrenia District (Keryneia)",
    countryId: "CY",
  },
  {
    value: "CY_03",
    title: "Larnaca District (Larnaka)",
    countryId: "CY",
  },
  {
    value: "CY_02",
    title: "Limassol District (Leymasun)",
    countryId: "CY",
  },
  {
    value: "CY_01",
    title: "Nicosia District (Lefkoşa)",
    countryId: "CY",
  },
  {
    value: "CY_05",
    title: "Paphos District (Pafos)",
    countryId: "CY",
  },
  {
    value: "SB_RB",
    title: "Rennell and Bellona Province",
    countryId: "SB",
  },
  {
    value: "SB_TE",
    title: "Temotu Province",
    countryId: "SB",
  },
  {
    value: "SB_WE",
    title: "Western Province",
    countryId: "SB",
  },
  {
    value: "SB_CE",
    title: "Central Province",
    countryId: "SB",
  },
  {
    value: "SB_CH",
    title: "Choiseul Province",
    countryId: "SB",
  },
  {
    value: "SB_GU",
    title: "Guadalcanal Province",
    countryId: "SB",
  },
  {
    value: "SB_CT",
    title: "Honiara",
    countryId: "SB",
  },
  {
    value: "SB_IS",
    title: "Isabel Province",
    countryId: "SB",
  },
  {
    value: "SB_MK",
    title: "Makira-Ulawa Province",
    countryId: "SB",
  },
  {
    value: "SR_WA",
    title: "Wanica District",
    countryId: "SR",
  },
  {
    value: "SR_SA",
    title: "Saramacca District",
    countryId: "SR",
  },
  {
    value: "SR_PM",
    title: "Paramaribo District",
    countryId: "SR",
  },
  {
    value: "SR_PR",
    title: "Para District",
    countryId: "SR",
  },
  {
    value: "SR_NI",
    title: "Nickerie District",
    countryId: "SR",
  },
  {
    value: "SR_MA",
    title: "Marowijne District",
    countryId: "SR",
  },
  {
    value: "SR_CR",
    title: "Coronie District",
    countryId: "SR",
  },
  {
    value: "SR_CM",
    title: "Commewijne District",
    countryId: "SR",
  },
  {
    value: "SR_BR",
    title: "Brokopondo District",
    countryId: "SR",
  },
  {
    value: "SR_SI",
    title: "Sipaliwini District",
    countryId: "SR",
  },
  {
    value: "SC_12",
    title: "Glacis",
    countryId: "SC",
  },
  {
    value: "SC_01",
    title: "Anse-aux-Pins",
    countryId: "SC",
  },
  {
    value: "SC_05",
    title: "Anse Royale",
    countryId: "SC",
  },
  {
    value: "SC_02",
    title: "Anse Boileau",
    countryId: "SC",
  },
  {
    value: "SC_04",
    title: "Au Cap",
    countryId: "SC",
  },
  {
    value: "SC_13",
    title: "Grand'Anse Mahé",
    countryId: "SC",
  },
  {
    value: "SC_14",
    title: "Grand'Anse Praslin",
    countryId: "SC",
  },
  {
    value: "SC_15",
    title: "La Digue",
    countryId: "SC",
  },
  {
    value: "SC_16",
    title: "La Rivière Anglaise",
    countryId: "SC",
  },
  {
    value: "SC_24",
    title: "Les Mamelles",
    countryId: "SC",
  },
  {
    value: "SC_17",
    title: "Mont Buxton",
    countryId: "SC",
  },
  {
    value: "SC_18",
    title: "Mont Fleuri",
    countryId: "SC",
  },
  {
    value: "SC_19",
    title: "Plaisance",
    countryId: "SC",
  },
  {
    value: "SC_20",
    title: "Pointe La Rue",
    countryId: "SC",
  },
  {
    value: "SC_21",
    title: "Port Glaud",
    countryId: "SC",
  },
  {
    value: "SC_25",
    title: "Roche Caiman",
    countryId: "SC",
  },
  {
    value: "SC_22",
    title: "Saint Louis",
    countryId: "SC",
  },
  {
    value: "SC_23",
    title: "Takamaka",
    countryId: "SC",
  },
  {
    value: "SC_11",
    title: "Cascade",
    countryId: "SC",
  },
  {
    value: "SC_10",
    title: "Bel Ombre",
    countryId: "SC",
  },
  {
    value: "SC_09",
    title: "Bel Air",
    countryId: "SC",
  },
  {
    value: "SC_08",
    title: "Beau Vallon",
    countryId: "SC",
  },
  {
    value: "SC_07",
    title: "Baie Sainte Anne",
    countryId: "SC",
  },
  {
    value: "SC_06",
    title: "Baie Lazare",
    countryId: "SC",
  },
  {
    value: "TM_S",
    title: "Ashgabat",
    countryId: "TM",
  },
  {
    value: "TM_B",
    title: "Balkan Region",
    countryId: "TM",
  },
  {
    value: "TM_D",
    title: "Daşoguz Region",
    countryId: "TM",
  },
  {
    value: "TM_L",
    title: "Lebap Region",
    countryId: "TM",
  },
  {
    value: "TM_M",
    title: "Mary Region",
    countryId: "TM",
  },
  {
    value: "BW_CE",
    title: "Central District",
    countryId: "BW",
  },
  {
    value: "BW_GH",
    title: "Ghanzi District",
    countryId: "BW",
  },
  {
    value: "BW_KG",
    title: "Kgalagadi District",
    countryId: "BW",
  },
  {
    value: "BW_KL",
    title: "Kgatleng District",
    countryId: "BW",
  },
  {
    value: "BW_KW",
    title: "Kweneng District",
    countryId: "BW",
  },
  {
    value: "BW_NG",
    title: "Ngamiland",
    countryId: "BW",
  },
  {
    value: "BW_NE",
    title: "North-East District",
    countryId: "BW",
  },
  {
    value: "BW_NW",
    title: "North-West District",
    countryId: "BW",
  },
  {
    value: "BW_SE",
    title: "South-East District",
    countryId: "BW",
  },
  {
    value: "BW_SO",
    title: "Southern District",
    countryId: "BW",
  },
  {
    value: "RS_00",
    title: "Belgrade",
    countryId: "RS",
  },
  {
    value: "RS_14",
    title: "Bor District",
    countryId: "RS",
  },
  {
    value: "RS_11",
    title: "Braničevo District",
    countryId: "RS",
  },
  {
    value: "RS_02",
    title: "Central Banat District",
    countryId: "RS",
  },
  {
    value: "RS_23",
    title: "Jablanica District",
    countryId: "RS",
  },
  {
    value: "RS_09",
    title: "Kolubara District",
    countryId: "RS",
  },
  {
    value: "RS_08",
    title: "Mačva District",
    countryId: "RS",
  },
  {
    value: "RS_17",
    title: "Moravica District",
    countryId: "RS",
  },
  {
    value: "RS_20",
    title: "Nišava District",
    countryId: "RS",
  },
  {
    value: "RS_01",
    title: "North Bačka District",
    countryId: "RS",
  },
  {
    value: "RS_03",
    title: "North Banat District",
    countryId: "RS",
  },
  {
    value: "RS_24",
    title: "Pčinja District",
    countryId: "RS",
  },
  {
    value: "RS_22",
    title: "Pirot District",
    countryId: "RS",
  },
  {
    value: "RS_10",
    title: "Podunavlje District",
    countryId: "RS",
  },
  {
    value: "RS_13",
    title: "Pomoravlje District",
    countryId: "RS",
  },
  {
    value: "RS_19",
    title: "Rasina District",
    countryId: "RS",
  },
  {
    value: "RS_18",
    title: "Raška District",
    countryId: "RS",
  },
  {
    value: "RS_06",
    title: "South Bačka District",
    countryId: "RS",
  },
  {
    value: "RS_04",
    title: "South Banat District",
    countryId: "RS",
  },
  {
    value: "RS_07",
    title: "Srem District",
    countryId: "RS",
  },
  {
    value: "CN_XJ",
    title: "Xinjiang",
    countryId: "CN",
  },
  {
    value: "RS_12",
    title: "Šumadija District",
    countryId: "RS",
  },
  {
    value: "RS_21",
    title: "Toplica District",
    countryId: "RS",
  },
  {
    value: "RS_VO",
    title: "Vojvodina",
    countryId: "RS",
  },
  {
    value: "RS_05",
    title: "West Bačka District",
    countryId: "RS",
  },
  {
    value: "RS_15",
    title: "Zaječar District",
    countryId: "RS",
  },
  {
    value: "RS_16",
    title: "Zlatibor District",
    countryId: "RS",
  },
  {
    value: "US_GA",
    title: "Georgia",
    countryId: "US",
  },
  {
    value: "US_UM-79",
    title: "Wake Island",
    countryId: "US",
  },
  {
    value: "US_VA",
    title: "Virginia",
    countryId: "US",
  },
  {
    value: "US_VT",
    title: "Vermont",
    countryId: "US",
  },
  {
    value: "US_UT",
    title: "Utah",
    countryId: "US",
  },
  {
    value: "US_VI",
    title: "United States Virgin Islands",
    countryId: "US",
  },
  {
    value: "US_UM",
    title: "United States Minor Outlying Islands",
    countryId: "US",
  },
  {
    value: "US_TX",
    title: "Texas",
    countryId: "US",
  },
  {
    value: "US_TN",
    title: "Tennessee",
    countryId: "US",
  },
  {
    value: "US_SD",
    title: "South Dakota",
    countryId: "US",
  },
  {
    value: "US_SC",
    title: "South Carolina",
    countryId: "US",
  },
  {
    value: "US_RI",
    title: "Rhode Island",
    countryId: "US",
  },
  {
    value: "US_PA",
    title: "Pennsylvania",
    countryId: "US",
  },
  {
    value: "US_UM-95",
    title: "Palmyra Atoll",
    countryId: "US",
  },
  {
    value: "US_OR",
    title: "Oregon",
    countryId: "US",
  },
  {
    value: "US_OK",
    title: "Oklahoma",
    countryId: "US",
  },
  {
    value: "US_OH",
    title: "Ohio",
    countryId: "US",
  },
  {
    value: "US_MP",
    title: "Northern Mariana Islands",
    countryId: "US",
  },
  {
    value: "US_ND",
    title: "North Dakota",
    countryId: "US",
  },
  {
    value: "US_NC",
    title: "North Carolina",
    countryId: "US",
  },
  {
    value: "US_NY",
    title: "New York",
    countryId: "US",
  },
  {
    value: "US_NM",
    title: "New Mexico",
    countryId: "US",
  },
  {
    value: "US_NJ",
    title: "New Jersey",
    countryId: "US",
  },
  {
    value: "US_NH",
    title: "New Hampshire",
    countryId: "US",
  },
  {
    value: "US_NV",
    title: "Nevada",
    countryId: "US",
  },
  {
    value: "US_NE",
    title: "Nebraska",
    countryId: "US",
  },
  {
    value: "US_UM-76",
    title: "Navassa Island",
    countryId: "US",
  },
  {
    value: "US_MT",
    title: "Montana",
    countryId: "US",
  },
  {
    value: "US_MO",
    title: "Missouri",
    countryId: "US",
  },
  {
    value: "US_MS",
    title: "Mississippi",
    countryId: "US",
  },
  {
    value: "US_MN",
    title: "Minnesota",
    countryId: "US",
  },
  {
    value: "US_UM-71",
    title: "Midway Atoll",
    countryId: "US",
  },
  {
    value: "US_MI",
    title: "Michigan",
    countryId: "US",
  },
  {
    value: "US_FL",
    title: "Florida",
    countryId: "US",
  },
  {
    value: "US_GU",
    title: "Guam",
    countryId: "US",
  },
  {
    value: "US_HI",
    title: "Hawaii",
    countryId: "US",
  },
  {
    value: "US_UM-84",
    title: "Howland Island",
    countryId: "US",
  },
  {
    value: "US_ID",
    title: "Idaho",
    countryId: "US",
  },
  {
    value: "US_IL",
    title: "Illinois",
    countryId: "US",
  },
  {
    value: "US_IN",
    title: "Indiana",
    countryId: "US",
  },
  {
    value: "US_IA",
    title: "Iowa",
    countryId: "US",
  },
  {
    value: "US_UM-86",
    title: "Jarvis Island",
    countryId: "US",
  },
  {
    value: "US_DE",
    title: "Delaware",
    countryId: "US",
  },
  {
    value: "US_CT",
    title: "Connecticut",
    countryId: "US",
  },
  {
    value: "US_MA",
    title: "Massachusetts",
    countryId: "US",
  },
  {
    value: "US_MD",
    title: "Maryland",
    countryId: "US",
  },
  {
    value: "US_ME",
    title: "Maine",
    countryId: "US",
  },
  {
    value: "US_LA",
    title: "Louisiana",
    countryId: "US",
  },
  {
    value: "US_UM-89",
    title: "Kingman Reef",
    countryId: "US",
  },
  {
    value: "US_KY",
    title: "Kentucky",
    countryId: "US",
  },
  {
    value: "US_KS",
    title: "Kansas",
    countryId: "US",
  },
  {
    value: "US_UM-67",
    title: "Johnston Atoll",
    countryId: "US",
  },
  {
    value: "US_CO",
    title: "Colorado",
    countryId: "US",
  },
  {
    value: "US_CA",
    title: "California",
    countryId: "US",
  },
  {
    value: "US_UM-81",
    title: "Baker Island",
    countryId: "US",
  },
  {
    value: "US_AR",
    title: "Arkansas",
    countryId: "US",
  },
  {
    value: "US_AZ",
    title: "Arizona",
    countryId: "US",
  },
  {
    value: "US_AL",
    title: "Alabama",
    countryId: "US",
  },
  {
    value: "US_AK",
    title: "Alaska",
    countryId: "US",
  },
  {
    value: "US_AS",
    title: "American Samoa",
    countryId: "US",
  },
  {
    value: "US_DC",
    title: "District of Columbia",
    countryId: "US",
  },
  {
    value: "US_WY",
    title: "Wyoming",
    countryId: "US",
  },
  {
    value: "US_WI",
    title: "Wisconsin",
    countryId: "US",
  },
  {
    value: "US_WV",
    title: "West Virginia",
    countryId: "US",
  },
  {
    value: "US_WA",
    title: "Washington",
    countryId: "US",
  },
  {
    value: "GH_BO",
    title: "Bono",
    countryId: "GH",
  },
  {
    value: "GH_AF",
    title: "Ahafo",
    countryId: "GH",
  },
  {
    value: "GH_AH",
    title: "Ashanti",
    countryId: "GH",
  },
  {
    value: "GH_BE",
    title: "Bono East",
    countryId: "GH",
  },
  {
    value: "GH_CP",
    title: "Central",
    countryId: "GH",
  },
  {
    value: "GH_EP",
    title: "Eastern",
    countryId: "GH",
  },
  {
    value: "HR_09",
    title: "Lika-Senj",
    countryId: "HR",
  },
  {
    value: "GH_AA",
    title: "Greater Accra",
    countryId: "GH",
  },
  {
    value: "GH_NE",
    title: "North East",
    countryId: "GH",
  },
  {
    value: "GH_NP",
    title: "Northern",
    countryId: "GH",
  },
  {
    value: "GH_OT",
    title: "Oti",
    countryId: "GH",
  },
  {
    value: "GH_SV",
    title: "Savannah",
    countryId: "GH",
  },
  {
    value: "GH_UW",
    title: "Upper West",
    countryId: "GH",
  },
  {
    value: "GH_WN",
    title: "Western North",
    countryId: "GH",
  },
  {
    value: "GH_WP",
    title: "Western",
    countryId: "GH",
  },
  {
    value: "GH_TV",
    title: "Volta",
    countryId: "GH",
  },
  {
    value: "LK_62",
    title: "Puttalam District",
    countryId: "LK",
  },
  {
    value: "LK_82",
    title: "Monaragala District",
    countryId: "LK",
  },
  {
    value: "LK_45",
    title: "Mullaitivu District",
    countryId: "LK",
  },
  {
    value: "LK_7",
    title: "North Central Province",
    countryId: "LK",
  },
  {
    value: "LK_41",
    title: "Jaffna District",
    countryId: "LK",
  },
  {
    value: "LK_33",
    title: "Hambantota District",
    countryId: "LK",
  },
  {
    value: "LK_12",
    title: "Gampaha District",
    countryId: "LK",
  },
  {
    value: "LK_31",
    title: "Galle District",
    countryId: "LK",
  },
  {
    value: "LK_5",
    title: "Eastern Province",
    countryId: "LK",
  },
  {
    value: "LK_11",
    title: "Colombo District",
    countryId: "LK",
  },
  {
    value: "LK_2",
    title: "Central Province",
    countryId: "LK",
  },
  {
    value: "LK_51",
    title: "Batticaloa District",
    countryId: "LK",
  },
  {
    value: "LK_81",
    title: "Badulla District",
    countryId: "LK",
  },
  {
    value: "LK_71",
    title: "Anuradhapura District",
    countryId: "LK",
  },
  {
    value: "LK_52",
    title: "Ampara District",
    countryId: "LK",
  },
  {
    value: "LK_4",
    title: "Northern Province",
    countryId: "LK",
  },
  {
    value: "LK_3",
    title: "Southern Province",
    countryId: "LK",
  },
  {
    value: "LK_53",
    title: "Trincomalee District",
    countryId: "LK",
  },
  {
    value: "LK_8",
    title: "Uva Province",
    countryId: "LK",
  },
  {
    value: "LK_44",
    title: "Vavuniya District",
    countryId: "LK",
  },
  {
    value: "LK_1",
    title: "Western Province",
    countryId: "LK",
  },
  {
    value: "LK_22",
    title: "Matale District",
    countryId: "LK",
  },
  {
    value: "LK_43",
    title: "Mannar District",
    countryId: "LK",
  },
  {
    value: "LK_42",
    title: "Kilinochchi District",
    countryId: "LK",
  },
  {
    value: "LK_92",
    title: "Kegalle District",
    countryId: "LK",
  },
  {
    value: "LK_21",
    title: "Kandy District",
    countryId: "LK",
  },
  {
    value: "LK_13",
    title: "Kalutara District",
    countryId: "LK",
  },
  {
    value: "LK_32",
    title: "Matara District",
    countryId: "LK",
  },
  {
    value: "LK_23",
    title: "Nuwara Eliya District",
    countryId: "LK",
  },
  {
    value: "LK_72",
    title: "Polonnaruwa District",
    countryId: "LK",
  },
  {
    value: "LK_91",
    title: "Ratnapura district",
    countryId: "LK",
  },
  {
    value: "LK_6",
    title: "North Western Province",
    countryId: "LK",
  },
  {
    value: "LK_9",
    title: "Sabaragamuwa Province",
    countryId: "LK",
  },
  {
    value: "VI_SJ",
    title: "Saint John",
    countryId: "VI",
  },
  {
    value: "VI_SC",
    title: "Saint Croix",
    countryId: "VI",
  },
  {
    value: "ME_01",
    title: "Andrijevica Municipality",
    countryId: "ME",
  },
  {
    value: "ME_21",
    title: "Žabljak Municipality",
    countryId: "ME",
  },
  {
    value: "ME_20",
    title: "Ulcinj Municipality",
    countryId: "ME",
  },
  {
    value: "ME_19",
    title: "Tivat Municipality",
    countryId: "ME",
  },
  {
    value: "ME_18",
    title: "Šavnik Municipality",
    countryId: "ME",
  },
  {
    value: "ME_17",
    title: "Rožaje Municipality",
    countryId: "ME",
  },
  {
    value: "ME_16",
    title: "Podgorica Municipality",
    countryId: "ME",
  },
  {
    value: "ME_15",
    title: "Plužine Municipality",
    countryId: "ME",
  },
  {
    value: "ME_14",
    title: "Pljevlja Municipality",
    countryId: "ME",
  },
  {
    value: "ME_13",
    title: "Plav Municipality",
    countryId: "ME",
  },
  {
    value: "ME_23",
    title: "Petnjica Municipality",
    countryId: "ME",
  },
  {
    value: "ME_06",
    title: "Old Royal Capital Cetinje",
    countryId: "ME",
  },
  {
    value: "ME_12",
    title: "Nikšić Municipality",
    countryId: "ME",
  },
  {
    value: "ME_11",
    title: "Mojkovac Municipality",
    countryId: "ME",
  },
  {
    value: "ME_10",
    title: "Kotor Municipality",
    countryId: "ME",
  },
  {
    value: "ME_09",
    title: "Kolašin Municipality",
    countryId: "ME",
  },
  {
    value: "ME_22",
    title: "Gusinje Municipality",
    countryId: "ME",
  },
  {
    value: "ME_07",
    title: "Danilovgrad Municipality",
    countryId: "ME",
  },
  {
    value: "ME_05",
    title: "Budva Municipality",
    countryId: "ME",
  },
  {
    value: "ME_04",
    title: "Bijelo Polje Municipality",
    countryId: "ME",
  },
  {
    value: "ME_03",
    title: "Berane Municipality",
    countryId: "ME",
  },
  {
    value: "ME_02",
    title: "Bar Municipality",
    countryId: "ME",
  },
  {
    value: "MD_ST",
    title: "Strășeni District",
    countryId: "MD",
  },
  {
    value: "MD_TA",
    title: "Taraclia District",
    countryId: "MD",
  },
  {
    value: "MD_TE",
    title: "Telenești District",
    countryId: "MD",
  },
  {
    value: "MD_SN",
    title: "Transnistria autonomous territorial unit",
    countryId: "MD",
  },
  {
    value: "MD_UN",
    title: "Ungheni District",
    countryId: "MD",
  },
  {
    value: "MD_CR",
    title: "Criuleni District",
    countryId: "MD",
  },
  {
    value: "CU_09",
    title: "Camagüey Province",
    countryId: "CU",
  },
  {
    value: "MD_CM",
    title: "Cimișlia District",
    countryId: "MD",
  },
  {
    value: "MD_SV",
    title: "Ștefan Vodă District",
    countryId: "MD",
  },
  {
    value: "MD_SO",
    title: "Soroca District",
    countryId: "MD",
  },
  {
    value: "MD_CU",
    title: "Chișinău Municipality",
    countryId: "MD",
  },
  {
    value: "MD_CS",
    title: "Căușeni District",
    countryId: "MD",
  },
  {
    value: "MD_CT",
    title: "Cantemir District",
    countryId: "MD",
  },
  {
    value: "MD_CL",
    title: "Călărași District",
    countryId: "MD",
  },
  {
    value: "MD_CA",
    title: "Cahul District",
    countryId: "MD",
  },
  {
    value: "MD_BR",
    title: "Briceni District",
    countryId: "MD",
  },
  {
    value: "MD_BD",
    title: "Bender Municipality",
    countryId: "MD",
  },
  {
    value: "MD_BS",
    title: "Basarabeasca District",
    countryId: "MD",
  },
  {
    value: "MD_BA",
    title: "Bălți Municipality",
    countryId: "MD",
  },
  {
    value: "MD_AN",
    title: "Anenii Noi District",
    countryId: "MD",
  },
  {
    value: "MD_IA",
    title: "Ialoveni District",
    countryId: "MD",
  },
  {
    value: "MD_DO",
    title: "Dondușeni District",
    countryId: "MD",
  },
  {
    value: "MD_DR",
    title: "Drochia District",
    countryId: "MD",
  },
  {
    value: "MD_DU",
    title: "Dubăsari District",
    countryId: "MD",
  },
  {
    value: "MD_ED",
    title: "Edineț District",
    countryId: "MD",
  },
  {
    value: "MD_FA",
    title: "Fălești District",
    countryId: "MD",
  },
  {
    value: "MD_FL",
    title: "Florești District",
    countryId: "MD",
  },
  {
    value: "MD_GA",
    title: "Gagauzia",
    countryId: "MD",
  },
  {
    value: "MD_GL",
    title: "Glodeni District",
    countryId: "MD",
  },
  {
    value: "MD_HI",
    title: "Hîncești District",
    countryId: "MD",
  },
  {
    value: "MD_SD",
    title: "Șoldănești District",
    countryId: "MD",
  },
  {
    value: "MD_SI",
    title: "Sîngerei District",
    countryId: "MD",
  },
  {
    value: "MD_RI",
    title: "Rîșcani District",
    countryId: "MD",
  },
  {
    value: "MD_RE",
    title: "Rezina District",
    countryId: "MD",
  },
  {
    value: "MD_OR",
    title: "Orhei District",
    countryId: "MD",
  },
  {
    value: "MD_OC",
    title: "Ocnița District",
    countryId: "MD",
  },
  {
    value: "MD_NI",
    title: "Nisporeni District",
    countryId: "MD",
  },
  {
    value: "PH_GUI",
    title: "Guimaras",
    countryId: "PH",
  },
  {
    value: "PH_ZSI",
    title: "Zamboanga Sibugay",
    countryId: "PH",
  },
  {
    value: "PH_09",
    title: "Zamboanga Peninsula",
    countryId: "PH",
  },
  {
    value: "PH_ZAS",
    title: "Zamboanga del Sur",
    countryId: "PH",
  },
  {
    value: "PH_ZAN",
    title: "Zamboanga del Norte",
    countryId: "PH",
  },
  {
    value: "PH_ZMB",
    title: "Zambales",
    countryId: "PH",
  },
  {
    value: "PH_06",
    title: "Western Visayas",
    countryId: "PH",
  },
  {
    value: "PH_TAW",
    title: "Tawi-Tawi",
    countryId: "PH",
  },
  {
    value: "PH_TAR",
    title: "Tarlac",
    countryId: "PH",
  },
  {
    value: "PH_SUR",
    title: "Surigao del Sur",
    countryId: "PH",
  },
  {
    value: "PH_SUN",
    title: "Surigao del Norte",
    countryId: "PH",
  },
  {
    value: "PH_SLU",
    title: "Sulu",
    countryId: "PH",
  },
  {
    value: "PH_SUK",
    title: "Sultan Kudarat",
    countryId: "PH",
  },
  {
    value: "PH_SLE",
    title: "Southern Leyte",
    countryId: "PH",
  },
  {
    value: "PH_SCO",
    title: "South Cotabato",
    countryId: "PH",
  },
  {
    value: "PH_SOR",
    title: "Sorsogon",
    countryId: "PH",
  },
  {
    value: "PH_12",
    title: "Soccsksargen",
    countryId: "PH",
  },
  {
    value: "PH_SIG",
    title: "Siquijor",
    countryId: "PH",
  },
  {
    value: "PH_SAR",
    title: "Sarangani",
    countryId: "PH",
  },
  {
    value: "PH_ROM",
    title: "Romblon",
    countryId: "PH",
  },
  {
    value: "PH_RIZ",
    title: "Rizal",
    countryId: "PH",
  },
  {
    value: "PH_QUI",
    title: "Quirino",
    countryId: "PH",
  },
  {
    value: "PH_QUE",
    title: "Quezon",
    countryId: "PH",
  },
  {
    value: "PH_PAN",
    title: "Pangasinan",
    countryId: "PH",
  },
  {
    value: "PH_PAM",
    title: "Pampanga",
    countryId: "PH",
  },
  {
    value: "PH_PLW",
    title: "Palawan",
    countryId: "PH",
  },
  {
    value: "PH_MDR",
    title: "Oriental Mindoro",
    countryId: "PH",
  },
  {
    value: "PH_MDC",
    title: "Occidental Mindoro",
    countryId: "PH",
  },
  {
    value: "PH_NUV",
    title: "Nueva Vizcaya",
    countryId: "PH",
  },
  {
    value: "PH_NUE",
    title: "Nueva Ecija",
    countryId: "PH",
  },
  {
    value: "PH_NSA",
    title: "Northern Samar",
    countryId: "PH",
  },
  {
    value: "PH_10",
    title: "Northern Mindanao",
    countryId: "PH",
  },
  {
    value: "PH_NER",
    title: "Negros Oriental",
    countryId: "PH",
  },
  {
    value: "PH_NEC",
    title: "Negros Occidental",
    countryId: "PH",
  },
  {
    value: "PH_MOU",
    title: "Mountain Province",
    countryId: "PH",
  },
  {
    value: "PH_MSR",
    title: "Misamis Oriental",
    countryId: "PH",
  },
  {
    value: "PH_MSC",
    title: "Misamis Occidental",
    countryId: "PH",
  },
  {
    value: "PH_41",
    title: "Mimaropa",
    countryId: "PH",
  },
  {
    value: "PH_NCR",
    title: "Metro Manila",
    countryId: "PH",
  },
  {
    value: "PH_MAS",
    title: "Masbate",
    countryId: "PH",
  },
  {
    value: "PH_MAD",
    title: "Marinduque",
    countryId: "PH",
  },
  {
    value: "PH_MAG",
    title: "Maguindanao",
    countryId: "PH",
  },
  {
    value: "PH_LEY",
    title: "Leyte",
    countryId: "PH",
  },
  {
    value: "PH_LAS",
    title: "Lanao del Sur",
    countryId: "PH",
  },
  {
    value: "PH_LAN",
    title: "Lanao del Norte",
    countryId: "PH",
  },
  {
    value: "PH_LAG",
    title: "Laguna",
    countryId: "PH",
  },
  {
    value: "PH_LUN",
    title: "La Union",
    countryId: "PH",
  },
  {
    value: "PH_KAL",
    title: "Kalinga",
    countryId: "PH",
  },
  {
    value: "PH_ISA",
    title: "Isabela",
    countryId: "PH",
  },
  {
    value: "PH_ILI",
    title: "Iloilo",
    countryId: "PH",
  },
  {
    value: "PH_ILS",
    title: "Ilocos Sur",
    countryId: "PH",
  },
  {
    value: "PH_01",
    title: "Ilocos Region",
    countryId: "PH",
  },
  {
    value: "PH_ILN",
    title: "Ilocos Norte",
    countryId: "PH",
  },
  {
    value: "PH_IFU",
    title: "Ifugao",
    countryId: "PH",
  },
  {
    value: "PH_08",
    title: "Eastern Visayas",
    countryId: "PH",
  },
  {
    value: "PH_EAS",
    title: "Eastern Samar",
    countryId: "PH",
  },
  {
    value: "PH_DIN",
    title: "Dinagat Islands",
    countryId: "PH",
  },
  {
    value: "PH_11",
    title: "Davao Region",
    countryId: "PH",
  },
  {
    value: "PH_DAO",
    title: "Davao Oriental",
    countryId: "PH",
  },
  {
    value: "PH_DVO",
    title: "Davao Occidental",
    countryId: "PH",
  },
  {
    value: "PH_DAS",
    title: "Davao del Sur",
    countryId: "PH",
  },
  {
    value: "PH_DAV",
    title: "Davao del Norte",
    countryId: "PH",
  },
  {
    value: "PH_NCO",
    title: "Cotabato",
    countryId: "PH",
  },
  {
    value: "PH_15",
    title: "Cordillera Administrative Region",
    countryId: "PH",
  },
  {
    value: "PH_COM",
    title: "Compostela Valley",
    countryId: "PH",
  },
  {
    value: "PH_07",
    title: "Central Visayas",
    countryId: "PH",
  },
  {
    value: "PH_03",
    title: "Central Luzon",
    countryId: "PH",
  },
  {
    value: "PH_CEB",
    title: "Cebu",
    countryId: "PH",
  },
  {
    value: "PH_CAV",
    title: "Cavite",
    countryId: "PH",
  },
  {
    value: "PH_CAT",
    title: "Catanduanes",
    countryId: "PH",
  },
  {
    value: "PH_13",
    title: "Caraga",
    countryId: "PH",
  },
  {
    value: "PH_CAP",
    title: "Capiz",
    countryId: "PH",
  },
  {
    value: "PH_CAM",
    title: "Camiguin",
    countryId: "PH",
  },
  {
    value: "PH_CAS",
    title: "Camarines Sur",
    countryId: "PH",
  },
  {
    value: "PH_CAN",
    title: "Camarines Norte",
    countryId: "PH",
  },
  {
    value: "PH_40",
    title: "Calabarzon",
    countryId: "PH",
  },
  {
    value: "PH_02",
    title: "Cagayan Valley",
    countryId: "PH",
  },
  {
    value: "PH_CAG",
    title: "Cagayan",
    countryId: "PH",
  },
  {
    value: "PH_BUL",
    title: "Bulacan",
    countryId: "PH",
  },
  {
    value: "PH_BUK",
    title: "Bukidnon",
    countryId: "PH",
  },
  {
    value: "PH_BOH",
    title: "Bohol",
    countryId: "PH",
  },
  {
    value: "PH_BIL",
    title: "Biliran",
    countryId: "PH",
  },
  {
    value: "PH_05",
    title: "Bicol Region",
    countryId: "PH",
  },
  {
    value: "PH_BEN",
    title: "Benguet",
    countryId: "PH",
  },
  {
    value: "PH_BTG",
    title: "Batangas",
    countryId: "PH",
  },
  {
    value: "PH_BTN",
    title: "Batanes",
    countryId: "PH",
  },
  {
    value: "PH_BAN",
    title: "Bataan",
    countryId: "PH",
  },
  {
    value: "PH_BAS",
    title: "Basilan",
    countryId: "PH",
  },
  {
    value: "PH_14",
    title: "Autonomous Region in Muslim Mindanao",
    countryId: "PH",
  },
  {
    value: "PH_AUR",
    title: "Aurora",
    countryId: "PH",
  },
  {
    value: "PH_APA",
    title: "Apayao",
    countryId: "PH",
  },
  {
    value: "PH_ANT",
    title: "Antique",
    countryId: "PH",
  },
  {
    value: "PH_ALB",
    title: "Albay",
    countryId: "PH",
  },
  {
    value: "PH_AKL",
    title: "Aklan",
    countryId: "PH",
  },
  {
    value: "PH_AGS",
    title: "Agusan del Sur",
    countryId: "PH",
  },
  {
    value: "PH_AGN",
    title: "Agusan del Norte",
    countryId: "PH",
  },
  {
    value: "PH_ABR",
    title: "Abra",
    countryId: "PH",
  },
  {
    value: "CI_15",
    title: "Sud-Bandama",
    countryId: "CI",
  },
  {
    value: "CI_12",
    title: "Marahoué Region",
    countryId: "CI",
  },
  {
    value: "CI_DN",
    title: "Denguélé District",
    countryId: "CI",
  },
  {
    value: "CI_CM",
    title: "Comoé District",
    countryId: "CI",
  },
  {
    value: "CI_06",
    title: "Dix-Huit Montagnes",
    countryId: "CI",
  },
  {
    value: "CI_19",
    title: "Moyen-Cavally",
    countryId: "CI",
  },
  {
    value: "CI_18",
    title: "Fromager",
    countryId: "CI",
  },
  {
    value: "CI_MG",
    title: "Montagnes District",
    countryId: "CI",
  },
  {
    value: "CI_GD",
    title: "Gôh-Djiboua District",
    countryId: "CI",
  },
  {
    value: "CI_10",
    title: "Denguélé Region",
    countryId: "CI",
  },
  {
    value: "CI_02",
    title: "Haut-Sassandra",
    countryId: "CI",
  },
  {
    value: "CI_LC",
    title: "Lacs District",
    countryId: "CI",
  },
  {
    value: "CI_07",
    title: "Lacs Region",
    countryId: "CI",
  },
  {
    value: "CI_LG",
    title: "Lagunes District",
    countryId: "CI",
  },
  {
    value: "CI_01",
    title: "Lagunes region",
    countryId: "CI",
  },
  {
    value: "CI_ZZ",
    title: "Zanzan Region",
    countryId: "CI",
  },
  {
    value: "CI_YM",
    title: "Yamoussoukro",
    countryId: "CI",
  },
  {
    value: "CI_14",
    title: "Worodougou",
    countryId: "CI",
  },
  {
    value: "CI_WR",
    title: "Woroba District",
    countryId: "CI",
  },
  {
    value: "CI_04",
    title: "Vallée du Bandama Region",
    countryId: "CI",
  },
  {
    value: "CI_VB",
    title: "Vallée du Bandama District",
    countryId: "CI",
  },
  {
    value: "CI_13",
    title: "Sud-Comoé",
    countryId: "CI",
  },
  {
    value: "CI_05",
    title: "Moyen-Comoé",
    countryId: "CI",
  },
  {
    value: "CI_11",
    title: "N'zi-Comoé",
    countryId: "CI",
  },
  {
    value: "CI_SM",
    title: "Sassandra-Marahoué District",
    countryId: "CI",
  },
  {
    value: "CI_03",
    title: "Savanes Region",
    countryId: "CI",
  },
  {
    value: "CI_09",
    title: "Bas-Sassandra Region",
    countryId: "CI",
  },
  {
    value: "CI_BS",
    title: "Bas-Sassandra District",
    countryId: "CI",
  },
  {
    value: "CI_17",
    title: "Bafing Region",
    countryId: "CI",
  },
  {
    value: "CI_16",
    title: "Agnéby",
    countryId: "CI",
  },
  {
    value: "CI_AB",
    title: "Abidjan",
    countryId: "CI",
  },
  {
    value: "DO_27",
    title: "Valverde Province",
    countryId: "DO",
  },
  {
    value: "DO_02",
    title: "Azua Province",
    countryId: "DO",
  },
  {
    value: "DO_03",
    title: "Baoruco Province",
    countryId: "DO",
  },
  {
    value: "DO_04",
    title: "Barahona Province",
    countryId: "DO",
  },
  {
    value: "DO_05",
    title: "Dajabón Province",
    countryId: "DO",
  },
  {
    value: "DO_01",
    title: "Distrito Nacional",
    countryId: "DO",
  },
  {
    value: "DO_06",
    title: "Duarte Province",
    countryId: "DO",
  },
  {
    value: "DO_08",
    title: "El Seibo Province",
    countryId: "DO",
  },
  {
    value: "DO_09",
    title: "Espaillat Province",
    countryId: "DO",
  },
  {
    value: "DO_30",
    title: "Hato Mayor Province",
    countryId: "DO",
  },
  {
    value: "DO_19",
    title: "Hermanas Mirabal Province",
    countryId: "DO",
  },
  {
    value: "DO_10",
    title: "Independencia",
    countryId: "DO",
  },
  {
    value: "DO_11",
    title: "La Altagracia Province",
    countryId: "DO",
  },
  {
    value: "DO_12",
    title: "La Romana Province",
    countryId: "DO",
  },
  {
    value: "DO_13",
    title: "La Vega Province",
    countryId: "DO",
  },
  {
    value: "DO_14",
    title: "María Trinidad Sánchez Province",
    countryId: "DO",
  },
  {
    value: "DO_28",
    title: "Monseñor Nouel Province",
    countryId: "DO",
  },
  {
    value: "DO_15",
    title: "Monte Cristi Province",
    countryId: "DO",
  },
  {
    value: "DO_29",
    title: "Monte Plata Province",
    countryId: "DO",
  },
  {
    value: "DO_16",
    title: "Pedernales Province",
    countryId: "DO",
  },
  {
    value: "DO_17",
    title: "Peravia Province",
    countryId: "DO",
  },
  {
    value: "DO_18",
    title: "Puerto Plata Province",
    countryId: "DO",
  },
  {
    value: "DO_20",
    title: "Samaná Province",
    countryId: "DO",
  },
  {
    value: "DO_21",
    title: "San Cristóbal Province",
    countryId: "DO",
  },
  {
    value: "DO_31",
    title: "San José de Ocoa Province",
    countryId: "DO",
  },
  {
    value: "DO_22",
    title: "San Juan Province",
    countryId: "DO",
  },
  {
    value: "DO_24",
    title: "Sánchez Ramírez Province",
    countryId: "DO",
  },
  {
    value: "DO_25",
    title: "Santiago Province",
    countryId: "DO",
  },
  {
    value: "DO_26",
    title: "Santiago Rodríguez Province",
    countryId: "DO",
  },
  {
    value: "DO_32",
    title: "Santo Domingo Province",
    countryId: "DO",
  },
  {
    value: "TV_NUI",
    title: "Nui",
    countryId: "TV",
  },
  {
    value: "TV_NKF",
    title: "Nukufetau",
    countryId: "TV",
  },
  {
    value: "TV_NKL",
    title: "Nukulaelae",
    countryId: "TV",
  },
  {
    value: "TV_VAI",
    title: "Vaitupu",
    countryId: "TV",
  },
  {
    value: "TV_FUN",
    title: "Funafuti",
    countryId: "TV",
  },
  {
    value: "TV_NMG",
    title: "Nanumanga",
    countryId: "TV",
  },
  {
    value: "TV_NMA",
    title: "Nanumea",
    countryId: "TV",
  },
  {
    value: "TV_NIT",
    title: "Niutao Island Council",
    countryId: "TV",
  },
  {
    value: "AD_04",
    title: "La Massana",
    countryId: "AD",
  },
  {
    value: "AD_05",
    title: "Ordino",
    countryId: "AD",
  },
  {
    value: "AD_07",
    title: "Andorra la Vella",
    countryId: "AD",
  },
  {
    value: "AD_02",
    title: "Canillo",
    countryId: "AD",
  },
  {
    value: "AD_06",
    title: "Sant Julià de Lòria",
    countryId: "AD",
  },
  {
    value: "AD_03",
    title: "Encamp",
    countryId: "AD",
  },
  {
    value: "UY_RN",
    title: "Río Negro Department",
    countryId: "UY",
  },
  {
    value: "UY_TA",
    title: "Tacuarembó Department",
    countryId: "UY",
  },
  {
    value: "UY_SA",
    title: "Salto Department",
    countryId: "UY",
  },
  {
    value: "UY_SJ",
    title: "San José Department",
    countryId: "UY",
  },
  {
    value: "UY_SO",
    title: "Soriano Department",
    countryId: "UY",
  },
  {
    value: "UY_FD",
    title: "Florida Department",
    countryId: "UY",
  },
  {
    value: "UY_FS",
    title: "Flores Department",
    countryId: "UY",
  },
  {
    value: "UY_DU",
    title: "Durazno Department",
    countryId: "UY",
  },
  {
    value: "UY_CO",
    title: "Colonia Department",
    countryId: "UY",
  },
  {
    value: "UY_CL",
    title: "Cerro Largo Department",
    countryId: "UY",
  },
  {
    value: "UY_CA",
    title: "Canelones Department",
    countryId: "UY",
  },
  {
    value: "UY_AR",
    title: "Artigas Department",
    countryId: "UY",
  },
  {
    value: "UY_LA",
    title: "Lavalleja Department",
    countryId: "UY",
  },
  {
    value: "UY_MA",
    title: "Maldonado Department",
    countryId: "UY",
  },
  {
    value: "UY_MO",
    title: "Montevideo Department",
    countryId: "UY",
  },
  {
    value: "UY_PA",
    title: "Paysandú Department",
    countryId: "UY",
  },
  {
    value: "UY_RV",
    title: "Rivera Department",
    countryId: "UY",
  },
  {
    value: "UY_RO",
    title: "Rocha Department",
    countryId: "UY",
  },
  {
    value: "UY_TT",
    title: "Treinta y Tres Department",
    countryId: "UY",
  },
  {
    value: "BO_C",
    title: "Cochabamba Department",
    countryId: "BO",
  },
  {
    value: "BO_L",
    title: "La Paz Department",
    countryId: "BO",
  },
  {
    value: "BO_O",
    title: "Oruro Department",
    countryId: "BO",
  },
  {
    value: "BO_N",
    title: "Pando Department",
    countryId: "BO",
  },
  {
    value: "GQ_C",
    title: "Río Muni",
    countryId: "GQ",
  },
  {
    value: "BO_P",
    title: "Potosí Department",
    countryId: "BO",
  },
  {
    value: "BO_S",
    title: "Santa Cruz Department",
    countryId: "BO",
  },
  {
    value: "BO_B",
    title: "Beni Department",
    countryId: "BO",
  },
  {
    value: "BO_T",
    title: "Tarija Department",
    countryId: "BO",
  },
  {
    value: "BO_H",
    title: "Chuquisaca Department",
    countryId: "BO",
  },
  {
    value: "NO_06",
    title: "Buskerud",
    countryId: "NO",
  },
  {
    value: "NO_07",
    title: "Vestfold",
    countryId: "NO",
  },
  {
    value: "NO_10",
    title: "Vest-Agder",
    countryId: "NO",
  },
  {
    value: "NO_50",
    title: "Trøndelag",
    countryId: "NO",
  },
  {
    value: "NO_19",
    title: "Troms",
    countryId: "NO",
  },
  {
    value: "NO_08",
    title: "Telemark",
    countryId: "NO",
  },
  {
    value: "NO_21",
    title: "Svalbard",
    countryId: "NO",
  },
  {
    value: "NO_16",
    title: "Sør-Trøndelag",
    countryId: "NO",
  },
  {
    value: "NO_14",
    title: "Sogn og Fjordane",
    countryId: "NO",
  },
  {
    value: "NO_11",
    title: "Rogaland",
    countryId: "NO",
  },
  {
    value: "NO_01",
    title: "Østfold",
    countryId: "NO",
  },
  {
    value: "NO_03",
    title: "Oslo",
    countryId: "NO",
  },
  {
    value: "NO_05",
    title: "Oppland",
    countryId: "NO",
  },
  {
    value: "NO_18",
    title: "Nordland",
    countryId: "NO",
  },
  {
    value: "NO_17",
    title: "Nord-Trøndelag",
    countryId: "NO",
  },
  {
    value: "NO_15",
    title: "Møre og Romsdal",
    countryId: "NO",
  },
  {
    value: "NO_22",
    title: "Jan Mayen",
    countryId: "NO",
  },
  {
    value: "NO_12",
    title: "Hordaland",
    countryId: "NO",
  },
  {
    value: "NO_04",
    title: "Hedmark",
    countryId: "NO",
  },
  {
    value: "NO_20",
    title: "Finnmark",
    countryId: "NO",
  },
  {
    value: "NO_02",
    title: "Akershus",
    countryId: "NO",
  },
  {
    value: "MM_14",
    title: "Chin State",
    countryId: "MM",
  },
  {
    value: "MM_07",
    title: "Ayeyarwady Region",
    countryId: "MM",
  },
  {
    value: "MM_06",
    title: "Yangon Region",
    countryId: "MM",
  },
  {
    value: "MM_05",
    title: "Tanintharyi Region",
    countryId: "MM",
  },
  {
    value: "MM_17",
    title: "Shan State",
    countryId: "MM",
  },
  {
    value: "MM_01",
    title: "Sagaing Region",
    countryId: "MM",
  },
  {
    value: "MM_16",
    title: "Rakhine State",
    countryId: "MM",
  },
  {
    value: "MM_18",
    title: "Naypyidaw Union Territory",
    countryId: "MM",
  },
  {
    value: "MM_15",
    title: "Mon State",
    countryId: "MM",
  },
  {
    value: "MM_04",
    title: "Mandalay Region",
    countryId: "MM",
  },
  {
    value: "MM_03",
    title: "Magway Region",
    countryId: "MM",
  },
  {
    value: "MM_13",
    title: "Kayin State",
    countryId: "MM",
  },
  {
    value: "MM_12",
    title: "Kayah State",
    countryId: "MM",
  },
  {
    value: "MM_11",
    title: "Kachin State",
    countryId: "MM",
  },
  {
    value: "AT_4",
    title: "Upper Austria",
    countryId: "AT",
  },
  {
    value: "AT_9",
    title: "Vienna",
    countryId: "AT",
  },
  {
    value: "AT_8",
    title: "Vorarlberg",
    countryId: "AT",
  },
  {
    value: "AT_5",
    title: "Salzburg",
    countryId: "AT",
  },
  {
    value: "AT_6",
    title: "Styria",
    countryId: "AT",
  },
  {
    value: "AT_7",
    title: "Tyrol",
    countryId: "AT",
  },
  {
    value: "AT_1",
    title: "Burgenland",
    countryId: "AT",
  },
  {
    value: "AT_2",
    title: "Carinthia",
    countryId: "AT",
  },
  {
    value: "AT_3",
    title: "Lower Austria",
    countryId: "AT",
  },
  {
    value: "GW_BA",
    title: "Bafatá",
    countryId: "GW",
  },
  {
    value: "GW_BM",
    title: "Biombo Region",
    countryId: "GW",
  },
  {
    value: "GW_BL",
    title: "Bolama Region",
    countryId: "GW",
  },
  {
    value: "GW_CA",
    title: "Cacheu Region",
    countryId: "GW",
  },
  {
    value: "GW_GA",
    title: "Gabú Region",
    countryId: "GW",
  },
  {
    value: "GW_L",
    title: "Leste Province",
    countryId: "GW",
  },
  {
    value: "GW_N",
    title: "Norte Province",
    countryId: "GW",
  },
  {
    value: "GW_QU",
    title: "Quinara Region",
    countryId: "GW",
  },
  {
    value: "GW_S",
    title: "Sul Province",
    countryId: "GW",
  },
  {
    value: "GW_TO",
    title: "Tombali Region",
    countryId: "GW",
  },
  {
    value: "IN_TN",
    title: "Tamil Nadu",
    countryId: "IN",
  },
  {
    value: "IN_TG",
    title: "Telangana",
    countryId: "IN",
  },
  {
    value: "IN_TR",
    title: "Tripura",
    countryId: "IN",
  },
  {
    value: "IN_UP",
    title: "Uttar Pradesh",
    countryId: "IN",
  },
  {
    value: "IN_UT",
    title: "Uttarakhand",
    countryId: "IN",
  },
  {
    value: "IN_WB",
    title: "West Bengal",
    countryId: "IN",
  },
  {
    value: "IN_AN",
    title: "Andaman and Nicobar Islands",
    countryId: "IN",
  },
  {
    value: "IN_AP",
    title: "Andhra Pradesh",
    countryId: "IN",
  },
  {
    value: "IN_AR",
    title: "Arunachal Pradesh",
    countryId: "IN",
  },
  {
    value: "IN_AS",
    title: "Assam",
    countryId: "IN",
  },
  {
    value: "IN_BR",
    title: "Bihar",
    countryId: "IN",
  },
  {
    value: "IN_CH",
    title: "Chandigarh",
    countryId: "IN",
  },
  {
    value: "IN_CT",
    title: "Chhattisgarh",
    countryId: "IN",
  },
  {
    value: "IN_DH",
    title: "Dadra and Nagar Haveli and Daman and Diu",
    countryId: "IN",
  },
  {
    value: "IN_DL",
    title: "Delhi",
    countryId: "IN",
  },
  {
    value: "IN_GA",
    title: "Goa",
    countryId: "IN",
  },
  {
    value: "IN_GJ",
    title: "Gujarat",
    countryId: "IN",
  },
  {
    value: "IN_JK",
    title: "Jammu and Kashmir",
    countryId: "IN",
  },
  {
    value: "IN_JH",
    title: "Jharkhand",
    countryId: "IN",
  },
  {
    value: "IN_KA",
    title: "Karnataka",
    countryId: "IN",
  },
  {
    value: "IN_KL",
    title: "Kerala",
    countryId: "IN",
  },
  {
    value: "IN_LA",
    title: "Ladakh",
    countryId: "IN",
  },
  {
    value: "IN_LD",
    title: "Lakshadweep",
    countryId: "IN",
  },
  {
    value: "IN_MP",
    title: "Madhya Pradesh",
    countryId: "IN",
  },
  {
    value: "IN_MH",
    title: "Maharashtra",
    countryId: "IN",
  },
  {
    value: "IN_MN",
    title: "Manipur",
    countryId: "IN",
  },
  {
    value: "IN_ML",
    title: "Meghalaya",
    countryId: "IN",
  },
  {
    value: "IN_NL",
    title: "Nagaland",
    countryId: "IN",
  },
  {
    value: "IN_OR",
    title: "Odisha",
    countryId: "IN",
  },
  {
    value: "IN_PY",
    title: "Puducherry",
    countryId: "IN",
  },
  {
    value: "IN_PB",
    title: "Punjab",
    countryId: "IN",
  },
  {
    value: "IN_SK",
    title: "Sikkim",
    countryId: "IN",
  },
  {
    value: "IN_HR",
    title: "Haryana",
    countryId: "IN",
  },
  {
    value: "IN_HP",
    title: "Himachal Pradesh",
    countryId: "IN",
  },
  {
    value: "DE_BW",
    title: "Baden-Württemberg",
    countryId: "DE",
  },
  {
    value: "DE_BY",
    title: "Bavaria",
    countryId: "DE",
  },
  {
    value: "DE_BE",
    title: "Berlin",
    countryId: "DE",
  },
  {
    value: "DE_BB",
    title: "Brandenburg",
    countryId: "DE",
  },
  {
    value: "DE_HB",
    title: "Bremen",
    countryId: "DE",
  },
  {
    value: "DE_HH",
    title: "Hamburg",
    countryId: "DE",
  },
  {
    value: "DE_HE",
    title: "Hesse",
    countryId: "DE",
  },
  {
    value: "DE_NI",
    title: "Lower Saxony",
    countryId: "DE",
  },
  {
    value: "DE_MV",
    title: "Mecklenburg-Vorpommern",
    countryId: "DE",
  },
  {
    value: "DE_SL",
    title: "Saarland",
    countryId: "DE",
  },
  {
    value: "DE_SN",
    title: "Saxony",
    countryId: "DE",
  },
  {
    value: "DE_ST",
    title: "Saxony-Anhalt",
    countryId: "DE",
  },
  {
    value: "DE_SH",
    title: "Schleswig-Holstein",
    countryId: "DE",
  },
  {
    value: "DE_TH",
    title: "Thuringia",
    countryId: "DE",
  },
  {
    value: "DE_NW",
    title: "North Rhine-Westphalia",
    countryId: "DE",
  },
  {
    value: "DE_RP",
    title: "Rhineland-Palatinate",
    countryId: "DE",
  },
  {
    value: "PY_15",
    title: "Presidente Hayes Department",
    countryId: "PY",
  },
  {
    value: "PY_2",
    title: "San Pedro Department",
    countryId: "PY",
  },
  {
    value: "PY_16",
    title: "Alto Paraguay Department",
    countryId: "PY",
  },
  {
    value: "PY_10",
    title: "Alto Paraná Department",
    countryId: "PY",
  },
  {
    value: "PY_13",
    title: "Amambay Department",
    countryId: "PY",
  },
  {
    value: "PY_19",
    title: "Boquerón Department",
    countryId: "PY",
  },
  {
    value: "PY_5",
    title: "Caaguazú",
    countryId: "PY",
  },
  {
    value: "PY_6",
    title: "Caazapá",
    countryId: "PY",
  },
  {
    value: "PY_14",
    title: "Canindeyú",
    countryId: "PY",
  },
  {
    value: "PY_11",
    title: "Central Department",
    countryId: "PY",
  },
  {
    value: "PY_1",
    title: "Concepción Department",
    countryId: "PY",
  },
  {
    value: "PY_3",
    title: "Cordillera Department",
    countryId: "PY",
  },
  {
    value: "PY_4",
    title: "Guairá Department",
    countryId: "PY",
  },
  {
    value: "PY_7",
    title: "Itapúa",
    countryId: "PY",
  },
  {
    value: "PY_8",
    title: "Misiones Department",
    countryId: "PY",
  },
  {
    value: "PY_12",
    title: "Ñeembucú Department",
    countryId: "PY",
  },
  {
    value: "PY_9",
    title: "Paraguarí Department",
    countryId: "PY",
  },
  {
    value: "NP_NA",
    title: "Narayani Zone",
    countryId: "NP",
  },
  {
    value: "NP_2",
    title: "Mid-Western Region",
    countryId: "NP",
  },
  {
    value: "NP_BA",
    title: "Bagmati Zone",
    countryId: "NP",
  },
  {
    value: "NP_BH",
    title: "Bheri Zone",
    countryId: "NP",
  },
  {
    value: "NP_1",
    title: "Central Region",
    countryId: "NP",
  },
  {
    value: "NP_DH",
    title: "Dhaulagiri Zone",
    countryId: "NP",
  },
  {
    value: "NP_4",
    title: "Eastern Development Region",
    countryId: "NP",
  },
  {
    value: "KR_46",
    title: "South Jeolla Province",
    countryId: "KR",
  },
  {
    value: "NP_5",
    title: "Far-Western Development Region",
    countryId: "NP",
  },
  {
    value: "NP_ME",
    title: "Mechi Zone",
    countryId: "NP",
  },
  {
    value: "NP_MA",
    title: "Mahakali Zone",
    countryId: "NP",
  },
  {
    value: "NP_3",
    title: "Western Region",
    countryId: "NP",
  },
  {
    value: "NP_SE",
    title: "Seti Zone",
    countryId: "NP",
  },
  {
    value: "NP_SA",
    title: "Sagarmatha Zone",
    countryId: "NP",
  },
  {
    value: "NP_RA",
    title: "Rapti Zone",
    countryId: "NP",
  },
  {
    value: "NP_GA",
    title: "Gandaki Zone",
    countryId: "NP",
  },
  {
    value: "NP_LU",
    title: "Lumbini Zone",
    countryId: "NP",
  },
  {
    value: "NP_KO",
    title: "Kosi Zone",
    countryId: "NP",
  },
  {
    value: "NP_KA",
    title: "Karnali Zone",
    countryId: "NP",
  },
  {
    value: "NP_JA",
    title: "Janakpur Zone",
    countryId: "NP",
  },
  {
    value: "PG_CPM",
    title: "Central Province",
    countryId: "PG",
  },
  {
    value: "PG_NSB",
    title: "Bougainville",
    countryId: "PG",
  },
  {
    value: "PG_EHG",
    title: "Eastern Highlands Province",
    countryId: "PG",
  },
  {
    value: "PG_WPD",
    title: "Western Province",
    countryId: "PG",
  },
  {
    value: "PG_WBK",
    title: "West New Britain Province",
    countryId: "PG",
  },
  {
    value: "PG_SHM",
    title: "Southern Highlands Province",
    countryId: "PG",
  },
  {
    value: "PG_SAN",
    title: "Sandaun Province",
    countryId: "PG",
  },
  {
    value: "PG_NCD",
    title: "Port Moresby",
    countryId: "PG",
  },
  {
    value: "PG_NPP",
    title: "Oro Province",
    countryId: "PG",
  },
  {
    value: "PG_NIK",
    title: "New Ireland Province",
    countryId: "PG",
  },
  {
    value: "PG_MPL",
    title: "Morobe Province",
    countryId: "PG",
  },
  {
    value: "PG_MBA",
    title: "Milne Bay Province",
    countryId: "PG",
  },
  {
    value: "PG_MRL",
    title: "Manus Province",
    countryId: "PG",
  },
  {
    value: "PG_MPM",
    title: "Madang Province",
    countryId: "PG",
  },
  {
    value: "PG_JWK",
    title: "Jiwaka Province",
    countryId: "PG",
  },
  {
    value: "PG_HLA",
    title: "Hela",
    countryId: "PG",
  },
  {
    value: "PG_GPK",
    title: "Gulf",
    countryId: "PG",
  },
  {
    value: "PG_EPW",
    title: "Enga Province",
    countryId: "PG",
  },
  {
    value: "PG_EBR",
    title: "East New Britain",
    countryId: "PG",
  },
  {
    value: "PG_CPK",
    title: "Chimbu Province",
    countryId: "PG",
  },
  {
    value: "GY_UT",
    title: "Upper Takutu-Upper Essequibo",
    countryId: "GY",
  },
  {
    value: "GY_BA",
    title: "Barima-Waini",
    countryId: "GY",
  },
  {
    value: "GY_UD",
    title: "Upper Demerara-Berbice",
    countryId: "GY",
  },
  {
    value: "GY_PT",
    title: "Potaro-Siparuni",
    countryId: "GY",
  },
  {
    value: "GY_PM",
    title: "Pomeroon-Supenaam",
    countryId: "GY",
  },
  {
    value: "GY_MA",
    title: "Mahaica-Berbice",
    countryId: "GY",
  },
  {
    value: "GY_ES",
    title: "Essequibo Islands-West Demerara",
    countryId: "GY",
  },
  {
    value: "GY_EB",
    title: "East Berbice-Corentyne",
    countryId: "GY",
  },
  {
    value: "GY_DE",
    title: "Demerara-Mahaica",
    countryId: "GY",
  },
  {
    value: "GY_CU",
    title: "Cuyuni-Mazaruni",
    countryId: "GY",
  },
  {
    value: "CL_NB",
    title: "Ñuble",
    countryId: "CL",
  },
  {
    value: "CL_LL",
    title: "Los Lagos",
    countryId: "CL",
  },
  {
    value: "CL_LR",
    title: "Los Ríos",
    countryId: "CL",
  },
  {
    value: "CL_MA",
    title: "Magallanes y de la Antártica Chilena",
    countryId: "CL",
  },
  {
    value: "CL_ML",
    title: "Maule",
    countryId: "CL",
  },
  {
    value: "CL_RM",
    title: "Región Metropolitana de Santiago",
    countryId: "CL",
  },
  {
    value: "CL_TA",
    title: "Tarapacá",
    countryId: "CL",
  },
  {
    value: "CL_VS",
    title: "Valparaíso",
    countryId: "CL",
  },
  {
    value: "CL_AI",
    title: "Aisén del General Carlos Ibañez del Campo",
    countryId: "CL",
  },
  {
    value: "CL_AN",
    title: "Antofagasta",
    countryId: "CL",
  },
  {
    value: "CL_AP",
    title: "Arica y Parinacota",
    countryId: "CL",
  },
  {
    value: "CL_AT",
    title: "Atacama",
    countryId: "CL",
  },
  {
    value: "CL_BI",
    title: "Biobío",
    countryId: "CL",
  },
  {
    value: "CL_CO",
    title: "Coquimbo",
    countryId: "CL",
  },
  {
    value: "CL_AR",
    title: "La Araucanía",
    countryId: "CL",
  },
  {
    value: "CL_LI",
    title: "Libertador General Bernardo O'Higgins",
    countryId: "CL",
  },
  {
    value: "ZM_09",
    title: "Lusaka Province",
    countryId: "ZM",
  },
  {
    value: "ZM_10",
    title: "Muchinga Province",
    countryId: "ZM",
  },
  {
    value: "ZM_05",
    title: "Northern Province",
    countryId: "ZM",
  },
  {
    value: "ZM_01",
    title: "Western Province",
    countryId: "ZM",
  },
  {
    value: "ZM_07",
    title: "Southern Province",
    countryId: "ZM",
  },
  {
    value: "ZM_02",
    title: "Central Province",
    countryId: "ZM",
  },
  {
    value: "ZM_08",
    title: "Copperbelt Province",
    countryId: "ZM",
  },
  {
    value: "ZM_06",
    title: "Northwestern Province",
    countryId: "ZM",
  },
  {
    value: "ZM_03",
    title: "Eastern Province",
    countryId: "ZM",
  },
  {
    value: "ZM_04",
    title: "Luapula Province",
    countryId: "ZM",
  },
  {
    value: "KR_31",
    title: "Ulsan",
    countryId: "KR",
  },
  {
    value: "KR_11",
    title: "Seoul",
    countryId: "KR",
  },
  {
    value: "KR_44",
    title: "South Chungcheong Province",
    countryId: "KR",
  },
  {
    value: "KR_48",
    title: "South Gyeongsang Province",
    countryId: "KR",
  },
  {
    value: "KR_45",
    title: "North Jeolla Province",
    countryId: "KR",
  },
  {
    value: "KR_47",
    title: "North Gyeongsang Province",
    countryId: "KR",
  },
  {
    value: "KR_49",
    title: "Jeju",
    countryId: "KR",
  },
  {
    value: "KR_43",
    title: "North Chungcheong Province",
    countryId: "KR",
  },
  {
    value: "KR_28",
    title: "Incheon",
    countryId: "KR",
  },
  {
    value: "KR_41",
    title: "Gyeonggi Province",
    countryId: "KR",
  },
  {
    value: "KR_29",
    title: "Gwangju",
    countryId: "KR",
  },
  {
    value: "KR_42",
    title: "Gangwon Province",
    countryId: "KR",
  },
  {
    value: "KR_30",
    title: "Daejeon",
    countryId: "KR",
  },
  {
    value: "KR_27",
    title: "Daegu",
    countryId: "KR",
  },
  {
    value: "KR_26",
    title: "Busan",
    countryId: "KR",
  },
  {
    value: "KR_50",
    title: "Sejong City",
    countryId: "KR",
  },
  {
    value: "UG_407",
    title: "Kibaale District",
    countryId: "UG",
  },
  {
    value: "UG_103",
    title: "Kiboga District",
    countryId: "UG",
  },
  {
    value: "UG_323",
    title: "Alebtong District",
    countryId: "UG",
  },
  {
    value: "UG_315",
    title: "Amolatar District",
    countryId: "UG",
  },
  {
    value: "UG_324",
    title: "Amudat District",
    countryId: "UG",
  },
  {
    value: "UG_216",
    title: "Amuria District",
    countryId: "UG",
  },
  {
    value: "UG_316",
    title: "Amuru District",
    countryId: "UG",
  },
  {
    value: "UG_213",
    title: "Kaberamaido District",
    countryId: "UG",
  },
  {
    value: "UG_427",
    title: "Kagadi District",
    countryId: "UG",
  },
  {
    value: "GA_5",
    title: "Nyanga Province",
    countryId: "GA",
  },
  {
    value: "UG_428",
    title: "Kakumiro District",
    countryId: "UG",
  },
  {
    value: "UG_101",
    title: "Kalangala District",
    countryId: "UG",
  },
  {
    value: "UG_222",
    title: "Kaliro District",
    countryId: "UG",
  },
  {
    value: "UG_122",
    title: "Kalungu District",
    countryId: "UG",
  },
  {
    value: "UG_102",
    title: "Kampala District",
    countryId: "UG",
  },
  {
    value: "UG_205",
    title: "Kamuli District",
    countryId: "UG",
  },
  {
    value: "UG_413",
    title: "Kamwenge District",
    countryId: "UG",
  },
  {
    value: "UG_307",
    title: "Lira District",
    countryId: "UG",
  },
  {
    value: "UG_326",
    title: "Lamwo District",
    countryId: "UG",
  },
  {
    value: "UG_125",
    title: "Kyotera District",
    countryId: "UG",
  },
  {
    value: "UG_415",
    title: "Kyenjojo District",
    countryId: "UG",
  },
  {
    value: "UG_422",
    title: "Kyegegwa District",
    countryId: "UG",
  },
  {
    value: "UG_414",
    title: "Kanungu District",
    countryId: "UG",
  },
  {
    value: "UG_227",
    title: "Kibuku District",
    countryId: "UG",
  },
  {
    value: "UG_419",
    title: "Kiruhura District",
    countryId: "UG",
  },
  {
    value: "UG_421",
    title: "Kiryandongo District",
    countryId: "UG",
  },
  {
    value: "UG_408",
    title: "Kisoro District",
    countryId: "UG",
  },
  {
    value: "UG_305",
    title: "Kitgum District",
    countryId: "UG",
  },
  {
    value: "UG_123",
    title: "Kyankwanzi District",
    countryId: "UG",
  },
  {
    value: "UG_228",
    title: "Kween District",
    countryId: "UG",
  },
  {
    value: "UG_208",
    title: "Kumi District",
    countryId: "UG",
  },
  {
    value: "UG_218",
    title: "Bududa District",
    countryId: "UG",
  },
  {
    value: "UG_217",
    title: "Budaka District",
    countryId: "UG",
  },
  {
    value: "UG_303",
    title: "Arua District",
    countryId: "UG",
  },
  {
    value: "UG_412",
    title: "Rukungiri District",
    countryId: "UG",
  },
  {
    value: "UG_431",
    title: "Rukiga District",
    countryId: "UG",
  },
  {
    value: "UG_426",
    title: "Sheema District",
    countryId: "UG",
  },
  {
    value: "UG_232",
    title: "Serere District",
    countryId: "UG",
  },
  {
    value: "UG_111",
    title: "Sembabule District",
    countryId: "UG",
  },
  {
    value: "UG_319",
    title: "Koboko District",
    countryId: "UG",
  },
  {
    value: "UG_306",
    title: "Kotido District",
    countryId: "UG",
  },
  {
    value: "UG_325",
    title: "Kole District",
    countryId: "UG",
  },
  {
    value: "UG_312",
    title: "Pader District",
    countryId: "UG",
  },
  {
    value: "UG_321",
    title: "Oyam District",
    countryId: "UG",
  },
  {
    value: "UG_329",
    title: "Otuke District",
    countryId: "UG",
  },
  {
    value: "UG_331",
    title: "Omoro District",
    countryId: "UG",
  },
  {
    value: "UG_328",
    title: "Nwoya District",
    countryId: "UG",
  },
  {
    value: "UG_411",
    title: "Ntungamo District",
    countryId: "UG",
  },
  {
    value: "UG_405",
    title: "Kabarole District",
    countryId: "UG",
  },
  {
    value: "UG_404",
    title: "Kabale District",
    countryId: "UG",
  },
  {
    value: "UG_318",
    title: "Kaabong District",
    countryId: "UG",
  },
  {
    value: "UG_204",
    title: "Jinja District",
    countryId: "UG",
  },
  {
    value: "UG_418",
    title: "Isingiro District",
    countryId: "UG",
  },
  {
    value: "UG_203",
    title: "Iganga District",
    countryId: "UG",
  },
  {
    value: "UG_417",
    title: "Ibanda District",
    countryId: "UG",
  },
  {
    value: "UG_304",
    title: "Gulu District",
    countryId: "UG",
  },
  {
    value: "UG_121",
    title: "Gomba District",
    countryId: "UG",
  },
  {
    value: "UG_E",
    title: "Eastern Region",
    countryId: "UG",
  },
  {
    value: "UG_302",
    title: "Apac District",
    countryId: "UG",
  },
  {
    value: "UG_108",
    title: "Mukono District",
    countryId: "UG",
  },
  {
    value: "UG_107",
    title: "Mubende District",
    countryId: "UG",
  },
  {
    value: "UG_106",
    title: "Mpigi District",
    countryId: "UG",
  },
  {
    value: "UG_309",
    title: "Moyo District",
    countryId: "UG",
  },
  {
    value: "UG_308",
    title: "Moroto District",
    countryId: "UG",
  },
  {
    value: "UG_115",
    title: "Mityana District",
    countryId: "UG",
  },
  {
    value: "UG_423",
    title: "Mitooma District",
    countryId: "UG",
  },
  {
    value: "UG_410",
    title: "Mbarara District",
    countryId: "UG",
  },
  {
    value: "UG_209",
    title: "Mbale District",
    countryId: "UG",
  },
  {
    value: "UG_214",
    title: "Mayuge District",
    countryId: "UG",
  },
  {
    value: "UG_409",
    title: "Masindi District",
    countryId: "UG",
  },
  {
    value: "UG_105",
    title: "Masaka District",
    countryId: "UG",
  },
  {
    value: "UG_320",
    title: "Maracha District",
    countryId: "UG",
  },
  {
    value: "UG_223",
    title: "Manafwa District",
    countryId: "UG",
  },
  {
    value: "UG_114",
    title: "Lyantonde District",
    countryId: "UG",
  },
  {
    value: "UG_118",
    title: "Bukomansimbi District",
    countryId: "UG",
  },
  {
    value: "UG_219",
    title: "Bukedea District",
    countryId: "UG",
  },
  {
    value: "UG_117",
    title: "Buikwe District",
    countryId: "UG",
  },
  {
    value: "UG_420",
    title: "Buhweju District",
    countryId: "UG",
  },
  {
    value: "UG_201",
    title: "Bugiri District",
    countryId: "UG",
  },
  {
    value: "UG_124",
    title: "Lwengo District",
    countryId: "UG",
  },
  {
    value: "UG_104",
    title: "Luwero District",
    countryId: "UG",
  },
  {
    value: "UG_229",
    title: "Luuka District",
    countryId: "UG",
  },
  {
    value: "UG_W",
    title: "Western Region",
    countryId: "UG",
  },
  {
    value: "GN_FA",
    title: "Faranah Prefecture",
    countryId: "GN",
  },
  {
    value: "UG_313",
    title: "Yumbe District",
    countryId: "UG",
  },
  {
    value: "UG_330",
    title: "Zombo District",
    countryId: "UG",
  },
  {
    value: "UG_113",
    title: "Wakiso District",
    countryId: "UG",
  },
  {
    value: "UG_212",
    title: "Tororo District",
    countryId: "UG",
  },
  {
    value: "UG_211",
    title: "Soroti District",
    countryId: "UG",
  },
  {
    value: "UG_215",
    title: "Sironko District",
    countryId: "UG",
  },
  {
    value: "UG_425",
    title: "Rubirizi District",
    countryId: "UG",
  },
  {
    value: "UG_429",
    title: "Rubanda District",
    countryId: "UG",
  },
  {
    value: "UG_110",
    title: "Rakai District",
    countryId: "UG",
  },
  {
    value: "UG_210",
    title: "Pallisa District",
    countryId: "UG",
  },
  {
    value: "UG_119",
    title: "Butambala District",
    countryId: "UG",
  },
  {
    value: "UG_221",
    title: "Butaleja District",
    countryId: "UG",
  },
  {
    value: "UG_202",
    title: "Busia District",
    countryId: "UG",
  },
  {
    value: "UG_430",
    title: "Bunyangabu District",
    countryId: "UG",
  },
  {
    value: "UG_402",
    title: "Bushenyi District",
    countryId: "UG",
  },
  {
    value: "UG_401",
    title: "Bundibugyo District",
    countryId: "UG",
  },
  {
    value: "UG_416",
    title: "Buliisa District",
    countryId: "UG",
  },
  {
    value: "UG_225",
    title: "Bulambuli District",
    countryId: "UG",
  },
  {
    value: "UG_220",
    title: "Bukwo District",
    countryId: "UG",
  },
  {
    value: "UG_424",
    title: "Ntoroko District",
    countryId: "UG",
  },
  {
    value: "UG_N",
    title: "Northern Region",
    countryId: "UG",
  },
  {
    value: "UG_314",
    title: "Abim District",
    countryId: "UG",
  },
  {
    value: "UG_233",
    title: "Butebo District",
    countryId: "UG",
  },
  {
    value: "UG_120",
    title: "Buvuma District",
    countryId: "UG",
  },
  {
    value: "UG_226",
    title: "Buyende District",
    countryId: "UG",
  },
  {
    value: "UG_C",
    title: "Central Region",
    countryId: "UG",
  },
  {
    value: "UG_317",
    title: "Dokolo District",
    countryId: "UG",
  },
  {
    value: "UG_301",
    title: "Adjumani District",
    countryId: "UG",
  },
  {
    value: "UG_322",
    title: "Agago District",
    countryId: "UG",
  },
  {
    value: "UG_332",
    title: "Pakwach District",
    countryId: "UG",
  },
  {
    value: "UG_231",
    title: "Ngora District",
    countryId: "UG",
  },
  {
    value: "UG_310",
    title: "Nebbi District",
    countryId: "UG",
  },
  {
    value: "UG_327",
    title: "Napak District",
    countryId: "UG",
  },
  {
    value: "UG_224",
    title: "Namutumba District",
    countryId: "UG",
  },
  {
    value: "UG_234",
    title: "Namisindwa District",
    countryId: "UG",
  },
  {
    value: "UG_230",
    title: "Namayingo District",
    countryId: "UG",
  },
  {
    value: "UG_109",
    title: "Nakasongola District",
    countryId: "UG",
  },
  {
    value: "UG_116",
    title: "Nakaseke District",
    countryId: "UG",
  },
  {
    value: "UG_206",
    title: "Kapchorwa District",
    countryId: "UG",
  },
  {
    value: "UG_406",
    title: "Kasese District",
    countryId: "UG",
  },
  {
    value: "UG_207",
    title: "Katakwi District",
    countryId: "UG",
  },
  {
    value: "GB_LIN",
    title: "Lincolnshire",
    countryId: "GB",
  },
  {
    value: "GB_LBC",
    title: "Lisburn and Castlereagh",
    countryId: "GB",
  },
  {
    value: "GB_LSB",
    title: "Lisburn City Council",
    countryId: "GB",
  },
  {
    value: "GB_LIV",
    title: "Liverpool",
    countryId: "GB",
  },
  {
    value: "GB_BDG",
    title: "London Borough of Barking and Dagenham",
    countryId: "GB",
  },
  {
    value: "GB_MRT",
    title: "London Borough of Merton",
    countryId: "GB",
  },
  {
    value: "GB_LEW",
    title: "London Borough of Lewisham",
    countryId: "GB",
  },
  {
    value: "GB_LBH",
    title: "London Borough of Lambeth",
    countryId: "GB",
  },
  {
    value: "GB_ISL",
    title: "London Borough of Islington",
    countryId: "GB",
  },
  {
    value: "GB_HNS",
    title: "London Borough of Hounslow",
    countryId: "GB",
  },
  {
    value: "GB_HIL",
    title: "London Borough of Hillingdon",
    countryId: "GB",
  },
  {
    value: "GB_HAV",
    title: "London Borough of Havering",
    countryId: "GB",
  },
  {
    value: "GB_HRW",
    title: "London Borough of Harrow",
    countryId: "GB",
  },
  {
    value: "GB_HRY",
    title: "London Borough of Haringey",
    countryId: "GB",
  },
  {
    value: "GB_HMF",
    title: "London Borough of Hammersmith and Fulham",
    countryId: "GB",
  },
  {
    value: "GB_HCK",
    title: "London Borough of Hackney",
    countryId: "GB",
  },
  {
    value: "GB_ENF",
    title: "London Borough of Enfield",
    countryId: "GB",
  },
  {
    value: "GB_EAL",
    title: "London Borough of Ealing",
    countryId: "GB",
  },
  {
    value: "GB_CRY",
    title: "London Borough of Croydon",
    countryId: "GB",
  },
  {
    value: "GB_CMD",
    title: "London Borough of Camden",
    countryId: "GB",
  },
  {
    value: "GB_BRY",
    title: "London Borough of Bromley",
    countryId: "GB",
  },
  {
    value: "GB_BEN",
    title: "London Borough of Brent",
    countryId: "GB",
  },
  {
    value: "GB_BEX",
    title: "London Borough of Bexley",
    countryId: "GB",
  },
  {
    value: "GB_BNE",
    title: "London Borough of Barnet",
    countryId: "GB",
  },
  {
    value: "GB_ABE",
    title: "Aberdeen",
    countryId: "GB",
  },
  {
    value: "GB_ABD",
    title: "Aberdeenshire",
    countryId: "GB",
  },
  {
    value: "GB_ANS",
    title: "Angus",
    countryId: "GB",
  },
  {
    value: "GB_ANT",
    title: "Antrim",
    countryId: "GB",
  },
  {
    value: "GB_ARD",
    title: "Ards",
    countryId: "GB",
  },
  {
    value: "GB_ANN",
    title: "Antrim and Newtownabbey",
    countryId: "GB",
  },
  {
    value: "GB_AND",
    title: "Ards and North Down",
    countryId: "GB",
  },
  {
    value: "GW_OI",
    title: "Oio Region",
    countryId: "GW",
  },
  {
    value: "GB_AGB",
    title: "Argyll and Bute",
    countryId: "GB",
  },
  {
    value: "GB_ARM",
    title: "Armagh City and District Council",
    countryId: "GB",
  },
  {
    value: "GB_ABC",
    title: "Armagh, Banbridge and Craigavon",
    countryId: "GB",
  },
  {
    value: "GB_SH-AC",
    title: "Ascension Island",
    countryId: "GB",
  },
  {
    value: "GB_BLA",
    title: "Ballymena Borough",
    countryId: "GB",
  },
  {
    value: "GB_BLY",
    title: "Ballymoney",
    countryId: "GB",
  },
  {
    value: "GB_BNB",
    title: "Banbridge",
    countryId: "GB",
  },
  {
    value: "GB_BNS",
    title: "Barnsley",
    countryId: "GB",
  },
  {
    value: "GB_BAS",
    title: "Bath and North East Somerset",
    countryId: "GB",
  },
  {
    value: "GB_WRX",
    title: "Wrexham County Borough",
    countryId: "GB",
  },
  {
    value: "GB_WOR",
    title: "Worcestershire",
    countryId: "GB",
  },
  {
    value: "GB_WOK",
    title: "Wokingham",
    countryId: "GB",
  },
  {
    value: "GB_WRL",
    title: "Wirral",
    countryId: "GB",
  },
  {
    value: "GB_WNM",
    title: "Windsor and Maidenhead",
    countryId: "GB",
  },
  {
    value: "GB_WIL",
    title: "Wiltshire",
    countryId: "GB",
  },
  {
    value: "GB_WSX",
    title: "West Sussex",
    countryId: "GB",
  },
  {
    value: "GB_WLN",
    title: "West Lothian",
    countryId: "GB",
  },
  {
    value: "GB_WDU",
    title: "West Dunbartonshire",
    countryId: "GB",
  },
  {
    value: "GB_WBK",
    title: "West Berkshire",
    countryId: "GB",
  },
  {
    value: "GB_WAR",
    title: "Warwickshire",
    countryId: "GB",
  },
  {
    value: "GB_WRT",
    title: "Warrington",
    countryId: "GB",
  },
  {
    value: "GB_WLL",
    title: "Walsall",
    countryId: "GB",
  },
  {
    value: "GB_WLS",
    title: "Wales",
    countryId: "GB",
  },
  {
    value: "GB_WKF",
    title: "Wakefield",
    countryId: "GB",
  },
  {
    value: "GB_VGL",
    title: "Vale of Glamorgan",
    countryId: "GB",
  },
  {
    value: "GB_UKM",
    title: "United Kingdom",
    countryId: "GB",
  },
  {
    value: "GB_TRF",
    title: "Trafford",
    countryId: "GB",
  },
  {
    value: "GB_TOF",
    title: "Torfaen",
    countryId: "GB",
  },
  {
    value: "GB_TOB",
    title: "Torbay",
    countryId: "GB",
  },
  {
    value: "GB_THR",
    title: "Thurrock",
    countryId: "GB",
  },
  {
    value: "GB_TFW",
    title: "Telford and Wrekin",
    countryId: "GB",
  },
  {
    value: "GB_TAM",
    title: "Tameside",
    countryId: "GB",
  },
  {
    value: "GB_SWD",
    title: "Swindon",
    countryId: "GB",
  },
  {
    value: "GB_SRY",
    title: "Surrey",
    countryId: "GB",
  },
  {
    value: "GB_SFK",
    title: "Suffolk",
    countryId: "GB",
  },
  {
    value: "GB_STB",
    title: "Strabane District Council",
    countryId: "GB",
  },
  {
    value: "GB_STT",
    title: "Stockton-on-Tees",
    countryId: "GB",
  },
  {
    value: "GB_SKP",
    title: "Stockport",
    countryId: "GB",
  },
  {
    value: "GB_STG",
    title: "Stirling",
    countryId: "GB",
  },
  {
    value: "GB_STS",
    title: "Staffordshire",
    countryId: "GB",
  },
  {
    value: "GB_SHN",
    title: "St Helens",
    countryId: "GB",
  },
  {
    value: "GB_SOS",
    title: "Southend-on-Sea",
    countryId: "GB",
  },
  {
    value: "GB_STY",
    title: "South Tyneside",
    countryId: "GB",
  },
  {
    value: "GB_SLK",
    title: "South Lanarkshire",
    countryId: "GB",
  },
  {
    value: "GB_SGC",
    title: "South Gloucestershire",
    countryId: "GB",
  },
  {
    value: "GB_SAY",
    title: "South Ayrshire",
    countryId: "GB",
  },
  {
    value: "GB_SOM",
    title: "Somerset",
    countryId: "GB",
  },
  {
    value: "GB_SOL",
    title: "Solihull",
    countryId: "GB",
  },
  {
    value: "GB_SLG",
    title: "Slough",
    countryId: "GB",
  },
  {
    value: "GB_SHR",
    title: "Shropshire",
    countryId: "GB",
  },
  {
    value: "GB_ZET",
    title: "Shetland Islands",
    countryId: "GB",
  },
  {
    value: "GB_SHF",
    title: "Sheffield",
    countryId: "GB",
  },
  {
    value: "GB_SFT",
    title: "Sefton",
    countryId: "GB",
  },
  {
    value: "GB_SCB",
    title: "Scottish Borders",
    countryId: "GB",
  },
  {
    value: "GB_SCT",
    title: "Scotland",
    countryId: "GB",
  },
  {
    value: "GB_SAW",
    title: "Sandwell",
    countryId: "GB",
  },
  {
    value: "GB_SLF",
    title: "Salford",
    countryId: "GB",
  },
  {
    value: "GB_SH-HL",
    title: "Saint Helena",
    countryId: "GB",
  },
  {
    value: "GB_RUT",
    title: "Rutland",
    countryId: "GB",
  },
  {
    value: "GB_KTT",
    title: "Royal Borough of Kingston upon Thames",
    countryId: "GB",
  },
  {
    value: "GB_KEC",
    title: "Royal Borough of Kensington and Chelsea",
    countryId: "GB",
  },
  {
    value: "GB_GRE",
    title: "Royal Borough of Greenwich",
    countryId: "GB",
  },
  {
    value: "GB_ROT",
    title: "Rotherham",
    countryId: "GB",
  },
  {
    value: "GB_RCH",
    title: "Rochdale",
    countryId: "GB",
  },
  {
    value: "GB_RCT",
    title: "Rhondda Cynon Taf",
    countryId: "GB",
  },
  {
    value: "GB_RFW",
    title: "Renfrewshire",
    countryId: "GB",
  },
  {
    value: "GB_RCC",
    title: "Redcar and Cleveland",
    countryId: "GB",
  },
  {
    value: "GB_RDG",
    title: "Reading",
    countryId: "GB",
  },
  {
    value: "GB_POW",
    title: "Powys",
    countryId: "GB",
  },
  {
    value: "GB_POL",
    title: "Poole",
    countryId: "GB",
  },
  {
    value: "GB_PKN",
    title: "Perth and Kinross",
    countryId: "GB",
  },
  {
    value: "GB_PEM",
    title: "Pembrokeshire",
    countryId: "GB",
  },
  {
    value: "GB_OXF",
    title: "Oxfordshire",
    countryId: "GB",
  },
  {
    value: "GB_ELS",
    title: "Outer Hebrides",
    countryId: "GB",
  },
  {
    value: "GB_BDF",
    title: "Bedford",
    countryId: "GB",
  },
  {
    value: "GB_BFS",
    title: "Belfast district",
    countryId: "GB",
  },
  {
    value: "GB_BIR",
    title: "Birmingham",
    countryId: "GB",
  },
  {
    value: "GB_BBD",
    title: "Blackburn with Darwen",
    countryId: "GB",
  },
  {
    value: "GB_BPL",
    title: "Blackpool",
    countryId: "GB",
  },
  {
    value: "GB_BGW",
    title: "Blaenau Gwent County Borough",
    countryId: "GB",
  },
  {
    value: "GB_BOL",
    title: "Bolton",
    countryId: "GB",
  },
  {
    value: "GB_BMH",
    title: "Bournemouth",
    countryId: "GB",
  },
  {
    value: "GB_BRC",
    title: "Bracknell Forest",
    countryId: "GB",
  },
  {
    value: "GB_ORK",
    title: "Orkney Islands",
    countryId: "GB",
  },
  {
    value: "GB_OMH",
    title: "Omagh District Council",
    countryId: "GB",
  },
  {
    value: "GB_OLD",
    title: "Oldham",
    countryId: "GB",
  },
  {
    value: "GB_NTT",
    title: "Nottinghamshire",
    countryId: "GB",
  },
  {
    value: "GB_NBL",
    title: "Northumberland",
    countryId: "GB",
  },
  {
    value: "GB_NIR",
    title: "Northern Ireland",
    countryId: "GB",
  },
  {
    value: "GB_NTH",
    title: "Northamptonshire",
    countryId: "GB",
  },
  {
    value: "GB_NYK",
    title: "North Yorkshire",
    countryId: "GB",
  },
  {
    value: "GB_NTY",
    title: "North Tyneside",
    countryId: "GB",
  },
  {
    value: "GB_NSM",
    title: "North Somerset",
    countryId: "GB",
  },
  {
    value: "GB_NLN",
    title: "North Lincolnshire",
    countryId: "GB",
  },
  {
    value: "GB_NLK",
    title: "North Lanarkshire",
    countryId: "GB",
  },
  {
    value: "GB_NEL",
    title: "North East Lincolnshire",
    countryId: "GB",
  },
  {
    value: "GB_NDN",
    title: "North Down Borough Council",
    countryId: "GB",
  },
  {
    value: "GB_NAY",
    title: "North Ayrshire",
    countryId: "GB",
  },
  {
    value: "GB_NFK",
    title: "Norfolk",
    countryId: "GB",
  },
  {
    value: "GB_NTA",
    title: "Newtownabbey Borough Council",
    countryId: "GB",
  },
  {
    value: "GB_NMD",
    title: "Newry, Mourne and Down",
    countryId: "GB",
  },
  {
    value: "GB_NYM",
    title: "Newry and Mourne District Council",
    countryId: "GB",
  },
  {
    value: "GB_NWP",
    title: "Newport",
    countryId: "GB",
  },
  {
    value: "GB_BRD",
    title: "Bradford",
    countryId: "GB",
  },
  {
    value: "GB_BGE",
    title: "Bridgend County Borough",
    countryId: "GB",
  },
  {
    value: "GB_BNH",
    title: "Brighton and Hove",
    countryId: "GB",
  },
  {
    value: "GB_BKM",
    title: "Buckinghamshire",
    countryId: "GB",
  },
  {
    value: "GB_BUR",
    title: "Bury",
    countryId: "GB",
  },
  {
    value: "GB_CAY",
    title: "Caerphilly County Borough",
    countryId: "GB",
  },
  {
    value: "GB_CLD",
    title: "Calderdale",
    countryId: "GB",
  },
  {
    value: "GB_CAM",
    title: "Cambridgeshire",
    countryId: "GB",
  },
  {
    value: "GB_CMN",
    title: "Carmarthenshire",
    countryId: "GB",
  },
  {
    value: "GB_CKF",
    title: "Carrickfergus Borough Council",
    countryId: "GB",
  },
  {
    value: "GB_CSR",
    title: "Castlereagh",
    countryId: "GB",
  },
  {
    value: "GB_CCG",
    title: "Causeway Coast and Glens",
    countryId: "GB",
  },
  {
    value: "GB_CBF",
    title: "Central Bedfordshire",
    countryId: "GB",
  },
  {
    value: "GB_CGN",
    title: "Ceredigion",
    countryId: "GB",
  },
  {
    value: "GB_CHE",
    title: "Cheshire East",
    countryId: "GB",
  },
  {
    value: "GB_CHW",
    title: "Cheshire West and Chester",
    countryId: "GB",
  },
  {
    value: "GB_CRF",
    title: "City and County of Cardiff",
    countryId: "GB",
  },
  {
    value: "GB_SWA",
    title: "City and County of Swansea",
    countryId: "GB",
  },
  {
    value: "GB_BST",
    title: "City of Bristol",
    countryId: "GB",
  },
  {
    value: "GB_DER",
    title: "City of Derby",
    countryId: "GB",
  },
  {
    value: "GB_KHL",
    title: "City of Kingston upon Hull",
    countryId: "GB",
  },
  {
    value: "GB_LCE",
    title: "City of Leicester",
    countryId: "GB",
  },
  {
    value: "GB_LND",
    title: "City of London",
    countryId: "GB",
  },
  {
    value: "GB_NGM",
    title: "City of Nottingham",
    countryId: "GB",
  },
  {
    value: "GB_PTE",
    title: "City of Peterborough",
    countryId: "GB",
  },
  {
    value: "GB_NET",
    title: "Newcastle upon Tyne",
    countryId: "GB",
  },
  {
    value: "GB_NTL",
    title: "Neath Port Talbot County Borough",
    countryId: "GB",
  },
  {
    value: "GB_PLY",
    title: "City of Plymouth",
    countryId: "GB",
  },
  {
    value: "GB_POR",
    title: "City of Portsmouth",
    countryId: "GB",
  },
  {
    value: "GB_STH",
    title: "City of Southampton",
    countryId: "GB",
  },
  {
    value: "GB_STE",
    title: "City of Stoke-on-Trent",
    countryId: "GB",
  },
  {
    value: "GB_SND",
    title: "City of Sunderland",
    countryId: "GB",
  },
  {
    value: "GB_WSM",
    title: "City of Westminster",
    countryId: "GB",
  },
  {
    value: "GB_WLV",
    title: "City of Wolverhampton",
    countryId: "GB",
  },
  {
    value: "GB_YOR",
    title: "City of York",
    countryId: "GB",
  },
  {
    value: "GB_CLK",
    title: "Clackmannanshire",
    countryId: "GB",
  },
  {
    value: "GB_CLR",
    title: "Coleraine Borough Council",
    countryId: "GB",
  },
  {
    value: "GB_CWY",
    title: "Conwy County Borough",
    countryId: "GB",
  },
  {
    value: "GB_CKT",
    title: "Cookstown District Council",
    countryId: "GB",
  },
  {
    value: "GB_CON",
    title: "Cornwall",
    countryId: "GB",
  },
  {
    value: "GB_DUR",
    title: "County Durham",
    countryId: "GB",
  },
  {
    value: "GB_COV",
    title: "Coventry",
    countryId: "GB",
  },
  {
    value: "GB_CGV",
    title: "Craigavon Borough Council",
    countryId: "GB",
  },
  {
    value: "GB_CMA",
    title: "Cumbria",
    countryId: "GB",
  },
  {
    value: "GB_DAL",
    title: "Darlington",
    countryId: "GB",
  },
  {
    value: "GB_DEN",
    title: "Denbighshire",
    countryId: "GB",
  },
  {
    value: "IN_RJ",
    title: "Rajasthan",
    countryId: "IN",
  },
  {
    value: "GB_DBY",
    title: "Derbyshire",
    countryId: "GB",
  },
  {
    value: "GB_DRS",
    title: "Derry City and Strabane",
    countryId: "GB",
  },
  {
    value: "GB_DRY",
    title: "Derry City Council",
    countryId: "GB",
  },
  {
    value: "GB_DEV",
    title: "Devon",
    countryId: "GB",
  },
  {
    value: "GB_DNC",
    title: "Doncaster",
    countryId: "GB",
  },
  {
    value: "GB_DOR",
    title: "Dorset",
    countryId: "GB",
  },
  {
    value: "GB_DOW",
    title: "Down District Council",
    countryId: "GB",
  },
  {
    value: "GB_DUD",
    title: "Dudley",
    countryId: "GB",
  },
  {
    value: "GB_DGY",
    title: "Dumfries and Galloway",
    countryId: "GB",
  },
  {
    value: "GB_DND",
    title: "Dundee",
    countryId: "GB",
  },
  {
    value: "GB_DGN",
    title: "Dungannon and South Tyrone Borough Council",
    countryId: "GB",
  },
  {
    value: "GB_EAY",
    title: "East Ayrshire",
    countryId: "GB",
  },
  {
    value: "GB_EDU",
    title: "East Dunbartonshire",
    countryId: "GB",
  },
  {
    value: "GB_ELN",
    title: "East Lothian",
    countryId: "GB",
  },
  {
    value: "GB_ERW",
    title: "East Renfrewshire",
    countryId: "GB",
  },
  {
    value: "GB_ERY",
    title: "East Riding of Yorkshire",
    countryId: "GB",
  },
  {
    value: "GB_ESX",
    title: "East Sussex",
    countryId: "GB",
  },
  {
    value: "GB_EDH",
    title: "Edinburgh",
    countryId: "GB",
  },
  {
    value: "GB_ENG",
    title: "England",
    countryId: "GB",
  },
  {
    value: "GB_ESS",
    title: "Essex",
    countryId: "GB",
  },
  {
    value: "GB_FAL",
    title: "Falkirk",
    countryId: "GB",
  },
  {
    value: "GB_FMO",
    title: "Fermanagh and Omagh",
    countryId: "GB",
  },
  {
    value: "GB_FER",
    title: "Fermanagh District Council",
    countryId: "GB",
  },
  {
    value: "GB_MYL",
    title: "Moyle District Council",
    countryId: "GB",
  },
  {
    value: "GB_MRY",
    title: "Moray",
    countryId: "GB",
  },
  {
    value: "GB_MON",
    title: "Monmouthshire",
    countryId: "GB",
  },
  {
    value: "GB_MIK",
    title: "Milton Keynes",
    countryId: "GB",
  },
  {
    value: "GB_MLN",
    title: "Midlothian",
    countryId: "GB",
  },
  {
    value: "GB_MDB",
    title: "Middlesbrough",
    countryId: "GB",
  },
  {
    value: "GB_MUL",
    title: "Mid Ulster",
    countryId: "GB",
  },
  {
    value: "GB_MEA",
    title: "Mid and East Antrim",
    countryId: "GB",
  },
  {
    value: "GB_WGN",
    title: "Metropolitan Borough of Wigan",
    countryId: "GB",
  },
  {
    value: "GB_MTY",
    title: "Merthyr Tydfil County Borough",
    countryId: "GB",
  },
  {
    value: "GB_MDW",
    title: "Medway",
    countryId: "GB",
  },
  {
    value: "GB_MAN",
    title: "Manchester",
    countryId: "GB",
  },
  {
    value: "GB_MFT",
    title: "Magherafelt District Council",
    countryId: "GB",
  },
  {
    value: "GB_WND",
    title: "London Borough of Wandsworth",
    countryId: "GB",
  },
  {
    value: "GB_WFT",
    title: "London Borough of Waltham Forest",
    countryId: "GB",
  },
  {
    value: "GB_TWH",
    title: "London Borough of Tower Hamlets",
    countryId: "GB",
  },
  {
    value: "GB_STN",
    title: "London Borough of Sutton",
    countryId: "GB",
  },
  {
    value: "GB_SWK",
    title: "London Borough of Southwark",
    countryId: "GB",
  },
  {
    value: "GB_FIF",
    title: "Fife",
    countryId: "GB",
  },
  {
    value: "GB_FLN",
    title: "Flintshire",
    countryId: "GB",
  },
  {
    value: "GB_GAT",
    title: "Gateshead",
    countryId: "GB",
  },
  {
    value: "GB_GLG",
    title: "Glasgow",
    countryId: "GB",
  },
  {
    value: "GB_GLS",
    title: "Gloucestershire",
    countryId: "GB",
  },
  {
    value: "GB_GWN",
    title: "Gwynedd",
    countryId: "GB",
  },
  {
    value: "GB_HAL",
    title: "Halton",
    countryId: "GB",
  },
  {
    value: "GB_HAM",
    title: "Hampshire",
    countryId: "GB",
  },
  {
    value: "GB_RIC",
    title: "London Borough of Richmond upon Thames",
    countryId: "GB",
  },
  {
    value: "GB_RDB",
    title: "London Borough of Redbridge",
    countryId: "GB",
  },
  {
    value: "GB_NWM",
    title: "London Borough of Newham",
    countryId: "GB",
  },
  {
    value: "GB_HPL",
    title: "Hartlepool",
    countryId: "GB",
  },
  {
    value: "GB_HEF",
    title: "Herefordshire",
    countryId: "GB",
  },
  {
    value: "GB_HRT",
    title: "Hertfordshire",
    countryId: "GB",
  },
  {
    value: "GB_HLD",
    title: "Highland",
    countryId: "GB",
  },
  {
    value: "GB_IVC",
    title: "Inverclyde",
    countryId: "GB",
  },
  {
    value: "GB_IOW",
    title: "Isle of Wight",
    countryId: "GB",
  },
  {
    value: "GB_IOS",
    title: "Isles of Scilly",
    countryId: "GB",
  },
  {
    value: "GB_KEN",
    title: "Kent",
    countryId: "GB",
  },
  {
    value: "GB_KIR",
    title: "Kirklees",
    countryId: "GB",
  },
  {
    value: "GB_KWL",
    title: "Knowsley",
    countryId: "GB",
  },
  {
    value: "GB_LAN",
    title: "Lancashire",
    countryId: "GB",
  },
  {
    value: "GB_LRN",
    title: "Larne Borough Council",
    countryId: "GB",
  },
  {
    value: "GB_LDS",
    title: "Leeds",
    countryId: "GB",
  },
  {
    value: "GB_LEC",
    title: "Leicestershire",
    countryId: "GB",
  },
  {
    value: "GB_LMV",
    title: "Limavady Borough Council",
    countryId: "GB",
  },
  {
    value: "TW_KEE",
    title: "Keelung",
    countryId: "TW",
  },
  {
    value: "TW_YUN",
    title: "Yunlin",
    countryId: "TW",
  },
  {
    value: "TW_ILA",
    title: "Yilan",
    countryId: "TW",
  },
  {
    value: "TW_TAO",
    title: "Taoyuan",
    countryId: "TW",
  },
  {
    value: "TW_TTT",
    title: "Taitung",
    countryId: "TW",
  },
  {
    value: "TW_TPE",
    title: "Taipei",
    countryId: "TW",
  },
  {
    value: "TW_TNN",
    title: "Tainan",
    countryId: "TW",
  },
  {
    value: "IL_TA",
    title: "Tel Aviv District",
    countryId: "IL",
  },
  {
    value: "TW_TXG",
    title: "Taichung",
    countryId: "TW",
  },
  {
    value: "TW_PIF",
    title: "Pingtung",
    countryId: "TW",
  },
  {
    value: "TW_PEN",
    title: "Penghu",
    countryId: "TW",
  },
  {
    value: "TW_NWT",
    title: "New Taipei",
    countryId: "TW",
  },
  {
    value: "TW_NAN",
    title: "Nantou",
    countryId: "TW",
  },
  {
    value: "TW_MIA",
    title: "Miaoli",
    countryId: "TW",
  },
  {
    value: "TW_LIE",
    title: "Lienchiang",
    countryId: "TW",
  },
  {
    value: "TW_KIN",
    title: "Kinmen",
    countryId: "TW",
  },
  {
    value: "TW_KHH",
    title: "Kaohsiung",
    countryId: "TW",
  },
  {
    value: "TW_HUA",
    title: "Hualien",
    countryId: "TW",
  },
  {
    value: "TW_HSZ",
    title: "Hsinchu",
    countryId: "TW",
  },
  {
    value: "TW_HSQ",
    title: "Hsinchu",
    countryId: "TW",
  },
  {
    value: "TW_CYQ",
    title: "Chiayi",
    countryId: "TW",
  },
  {
    value: "TW_CYI",
    title: "Chiayi",
    countryId: "TW",
  },
  {
    value: "TW_CHA",
    title: "Changhua",
    countryId: "TW",
  },
  {
    value: "GQ_I",
    title: "Insular Region",
    countryId: "GQ",
  },
  {
    value: "GQ_CS",
    title: "Centro Sur Province",
    countryId: "GQ",
  },
  {
    value: "GQ_BS",
    title: "Bioko Sur Province",
    countryId: "GQ",
  },
  {
    value: "GQ_BN",
    title: "Bioko Norte Province",
    countryId: "GQ",
  },
  {
    value: "GQ_AN",
    title: "Annobón Province",
    countryId: "GQ",
  },
  {
    value: "GQ_WN",
    title: "Wele-Nzas Province",
    countryId: "GQ",
  },
  {
    value: "GQ_LI",
    title: "Litoral Province",
    countryId: "GQ",
  },
  {
    value: "GQ_KN",
    title: "Kié-Ntem Province",
    countryId: "GQ",
  },
  {
    value: "GM_U",
    title: "Upper River Division",
    countryId: "GM",
  },
  {
    value: "GM_L",
    title: "Lower River Division",
    countryId: "GM",
  },
  {
    value: "GM_M",
    title: "Central River Division",
    countryId: "GM",
  },
  {
    value: "GM_B",
    title: "Banjul",
    countryId: "GM",
  },
  {
    value: "GM_W",
    title: "West Coast Division",
    countryId: "GM",
  },
  {
    value: "GM_N",
    title: "North Bank Division",
    countryId: "GM",
  },
  {
    value: "LV_016",
    title: "Bauska Municipality",
    countryId: "LV",
  },
  {
    value: "LV_109",
    title: "Viļāni Municipality",
    countryId: "LV",
  },
  {
    value: "LV_108",
    title: "Viļaka Municipality",
    countryId: "LV",
  },
  {
    value: "LV_107",
    title: "Viesīte Municipality",
    countryId: "LV",
  },
  {
    value: "LV_106",
    title: "Ventspils Municipality",
    countryId: "LV",
  },
  {
    value: "LV_VEN",
    title: "Ventspils",
    countryId: "LV",
  },
  {
    value: "LV_105",
    title: "Vecumnieki Municipality",
    countryId: "LV",
  },
  {
    value: "LV_104",
    title: "Vecpiebalga Municipality",
    countryId: "LV",
  },
  {
    value: "LV_103",
    title: "Vārkava Municipality",
    countryId: "LV",
  },
  {
    value: "LV_102",
    title: "Varakļāni Municipality",
    countryId: "LV",
  },
  {
    value: "LV_VMR",
    title: "Valmiera",
    countryId: "LV",
  },
  {
    value: "LV_101",
    title: "Valka Municipality",
    countryId: "LV",
  },
  {
    value: "LV_100",
    title: "Vaiņode Municipality",
    countryId: "LV",
  },
  {
    value: "LV_027",
    title: "Dundaga Municipality",
    countryId: "LV",
  },
  {
    value: "LV_026",
    title: "Dobele Municipality",
    countryId: "LV",
  },
  {
    value: "LV_025",
    title: "Daugavpils Municipality",
    countryId: "LV",
  },
  {
    value: "LV_DGV",
    title: "Daugavpils",
    countryId: "LV",
  },
  {
    value: "LV_024",
    title: "Dagda Municipality",
    countryId: "LV",
  },
  {
    value: "LV_023",
    title: "Cibla Municipality",
    countryId: "LV",
  },
  {
    value: "LV_021",
    title: "Cesvaine Municipality",
    countryId: "LV",
  },
  {
    value: "LV_022",
    title: "Cēsis Municipality",
    countryId: "LV",
  },
  {
    value: "LV_020",
    title: "Carnikava Municipality",
    countryId: "LV",
  },
  {
    value: "LV_019",
    title: "Burtnieki Municipality",
    countryId: "LV",
  },
  {
    value: "LV_018",
    title: "Brocēni Municipality",
    countryId: "LV",
  },
  {
    value: "LV_017",
    title: "Beverīna Municipality",
    countryId: "LV",
  },
  {
    value: "LV_014",
    title: "Baltinava Municipality",
    countryId: "LV",
  },
  {
    value: "LV_013",
    title: "Baldone Municipality",
    countryId: "LV",
  },
  {
    value: "LV_012",
    title: "Babīte Municipality",
    countryId: "LV",
  },
  {
    value: "LV_010",
    title: "Auce Municipality",
    countryId: "LV",
  },
  {
    value: "LV_009",
    title: "Ape Municipality",
    countryId: "LV",
  },
  {
    value: "LV_008",
    title: "Amata Municipality",
    countryId: "LV",
  },
  {
    value: "LV_007",
    title: "Alūksne Municipality",
    countryId: "LV",
  },
  {
    value: "LV_006",
    title: "Alsunga Municipality",
    countryId: "LV",
  },
  {
    value: "LV_005",
    title: "Aloja Municipality",
    countryId: "LV",
  },
  {
    value: "LV_004",
    title: "Aknīste Municipality",
    countryId: "LV",
  },
  {
    value: "LV_003",
    title: "Aizpute Municipality",
    countryId: "LV",
  },
  {
    value: "LV_002",
    title: "Aizkraukle Municipality",
    countryId: "LV",
  },
  {
    value: "LV_001",
    title: "Aglona Municipality",
    countryId: "LV",
  },
  {
    value: "LV_110",
    title: "Zilupe Municipality",
    countryId: "LV",
  },
  {
    value: "LV_REZ",
    title: "Rēzekne",
    countryId: "LV",
  },
  {
    value: "LV_076",
    title: "Rauna Municipality",
    countryId: "LV",
  },
  {
    value: "LV_075",
    title: "Priekuļi Municipality",
    countryId: "LV",
  },
  {
    value: "LV_074",
    title: "Priekule Municipality",
    countryId: "LV",
  },
  {
    value: "IT_VC",
    title: "Vercelli",
    countryId: "IT",
  },
  {
    value: "LV_099",
    title: "Tukums Municipality",
    countryId: "LV",
  },
  {
    value: "LV_098",
    title: "Tērvete Municipality",
    countryId: "LV",
  },
  {
    value: "LV_097",
    title: "Talsi Municipality",
    countryId: "LV",
  },
  {
    value: "LV_096",
    title: "Strenči Municipality",
    countryId: "LV",
  },
  {
    value: "LV_095",
    title: "Stopiņi Municipality",
    countryId: "LV",
  },
  {
    value: "LV_094",
    title: "Smiltene Municipality",
    countryId: "LV",
  },
  {
    value: "LV_093",
    title: "Skrunda Municipality",
    countryId: "LV",
  },
  {
    value: "LV_092",
    title: "Skrīveri Municipality",
    countryId: "LV",
  },
  {
    value: "LV_091",
    title: "Sigulda Municipality",
    countryId: "LV",
  },
  {
    value: "LV_090",
    title: "Sēja Municipality",
    countryId: "LV",
  },
  {
    value: "LV_089",
    title: "Saulkrasti Municipality",
    countryId: "LV",
  },
  {
    value: "LV_088",
    title: "Saldus Municipality",
    countryId: "LV",
  },
  {
    value: "LV_087",
    title: "Salaspils Municipality",
    countryId: "LV",
  },
  {
    value: "LV_086",
    title: "Salacgrīva Municipality",
    countryId: "LV",
  },
  {
    value: "LV_085",
    title: "Sala Municipality",
    countryId: "LV",
  },
  {
    value: "LV_083",
    title: "Rundāle Municipality",
    countryId: "LV",
  },
  {
    value: "LV_084",
    title: "Rūjiena Municipality",
    countryId: "LV",
  },
  {
    value: "LV_082",
    title: "Rugāji Municipality",
    countryId: "LV",
  },
  {
    value: "LV_081",
    title: "Rucava Municipality",
    countryId: "LV",
  },
  {
    value: "LV_080",
    title: "Ropaži Municipality",
    countryId: "LV",
  },
  {
    value: "LV_079",
    title: "Roja Municipality",
    countryId: "LV",
  },
  {
    value: "LV_RIX",
    title: "Riga",
    countryId: "LV",
  },
  {
    value: "LV_078",
    title: "Riebiņi Municipality",
    countryId: "LV",
  },
  {
    value: "LV_077",
    title: "Rēzekne Municipality",
    countryId: "LV",
  },
  {
    value: "LV_073",
    title: "Preiļi Municipality",
    countryId: "LV",
  },
  {
    value: "LV_072",
    title: "Pļaviņas Municipality",
    countryId: "LV",
  },
  {
    value: "LV_071",
    title: "Pāvilosta Municipality",
    countryId: "LV",
  },
  {
    value: "LV_070",
    title: "Pārgauja Municipality",
    countryId: "LV",
  },
  {
    value: "LV_069",
    title: "Ozolnieki Municipality",
    countryId: "LV",
  },
  {
    value: "LV_068",
    title: "Olaine Municipality",
    countryId: "LV",
  },
  {
    value: "LV_067",
    title: "Ogre Municipality",
    countryId: "LV",
  },
  {
    value: "LV_066",
    title: "Nīca Municipality",
    countryId: "LV",
  },
  {
    value: "LV_065",
    title: "Nereta Municipality",
    countryId: "LV",
  },
  {
    value: "LV_064",
    title: "Naukšēni Municipality",
    countryId: "LV",
  },
  {
    value: "LV_063",
    title: "Mērsrags Municipality",
    countryId: "LV",
  },
  {
    value: "LV_060",
    title: "Mazsalaca Municipality",
    countryId: "LV",
  },
  {
    value: "LV_062",
    title: "Mārupe Municipality",
    countryId: "LV",
  },
  {
    value: "LV_059",
    title: "Madona Municipality",
    countryId: "LV",
  },
  {
    value: "LV_058",
    title: "Ludza Municipality",
    countryId: "LV",
  },
  {
    value: "LV_057",
    title: "Lubāna Municipality",
    countryId: "LV",
  },
  {
    value: "LV_056",
    title: "Līvāni Municipality",
    countryId: "LV",
  },
  {
    value: "LV_054",
    title: "Limbaži Municipality",
    countryId: "LV",
  },
  {
    value: "LV_055",
    title: "Līgatne Municipality",
    countryId: "LV",
  },
  {
    value: "LV_LPX",
    title: "Liepāja",
    countryId: "LV",
  },
  {
    value: "LV_053",
    title: "Lielvārde Municipality",
    countryId: "LV",
  },
  {
    value: "LV_050",
    title: "Kuldīga Municipality",
    countryId: "LV",
  },
  {
    value: "LV_049",
    title: "Krustpils Municipality",
    countryId: "LV",
  },
  {
    value: "LV_048",
    title: "Krimulda Municipality",
    countryId: "LV",
  },
  {
    value: "LV_047",
    title: "Krāslava Municipality",
    countryId: "LV",
  },
  {
    value: "LV_046",
    title: "Koknese Municipality",
    countryId: "LV",
  },
  {
    value: "LV_045",
    title: "Kocēni Municipality",
    countryId: "LV",
  },
  {
    value: "LV_052",
    title: "Ķekava Municipality",
    countryId: "LV",
  },
  {
    value: "LV_051",
    title: "Ķegums Municipality",
    countryId: "LV",
  },
  {
    value: "LV_044",
    title: "Kārsava Municipality",
    countryId: "LV",
  },
  {
    value: "LV_043",
    title: "Kandava Municipality",
    countryId: "LV",
  },
  {
    value: "LV_JUR",
    title: "Jūrmala",
    countryId: "LV",
  },
  {
    value: "LV_041",
    title: "Jelgava Municipality",
    countryId: "LV",
  },
  {
    value: "LV_JEL",
    title: "Jelgava",
    countryId: "LV",
  },
  {
    value: "LV_042",
    title: "Jēkabpils Municipality",
    countryId: "LV",
  },
  {
    value: "LV_JKB",
    title: "Jēkabpils",
    countryId: "LV",
  },
  {
    value: "LV_040",
    title: "Jaunpils Municipality",
    countryId: "LV",
  },
  {
    value: "LV_039",
    title: "Jaunpiebalga Municipality",
    countryId: "LV",
  },
  {
    value: "LV_038",
    title: "Jaunjelgava Municipality",
    countryId: "LV",
  },
  {
    value: "LV_037",
    title: "Inčukalns Municipality",
    countryId: "LV",
  },
  {
    value: "LV_036",
    title: "Ilūkste Municipality",
    countryId: "LV",
  },
  {
    value: "LV_035",
    title: "Ikšķile Municipality",
    countryId: "LV",
  },
  {
    value: "LV_034",
    title: "Iecava Municipality",
    countryId: "LV",
  },
  {
    value: "LV_033",
    title: "Gulbene Municipality",
    countryId: "LV",
  },
  {
    value: "LV_032",
    title: "Grobiņa Municipality",
    countryId: "LV",
  },
  {
    value: "JO_IR",
    title: "Irbid Governorate",
    countryId: "JO",
  },
  {
    value: "LV_031",
    title: "Garkalne Municipality",
    countryId: "LV",
  },
  {
    value: "LV_030",
    title: "Ērgļi Municipality",
    countryId: "LV",
  },
  {
    value: "LV_029",
    title: "Engure Municipality",
    countryId: "LV",
  },
  {
    value: "LV_028",
    title: "Durbe Municipality",
    countryId: "LV",
  },
  {
    value: "MV_26",
    title: "Kaafu Atoll",
    countryId: "MV",
  },
  {
    value: "MV_23",
    title: "Haa Dhaalu Atoll",
    countryId: "MV",
  },
  {
    value: "MV_07",
    title: "Haa Alif Atoll",
    countryId: "MV",
  },
  {
    value: "MV_29",
    title: "Gnaviyani Atoll",
    countryId: "MV",
  },
  {
    value: "MV_28",
    title: "Gaafu Dhaalu Atoll",
    countryId: "MV",
  },
  {
    value: "MV_27",
    title: "Gaafu Alif Atoll",
    countryId: "MV",
  },
  {
    value: "MV_14",
    title: "Faafu Atoll",
    countryId: "MV",
  },
  {
    value: "MV_17",
    title: "Dhaalu Atoll",
    countryId: "MV",
  },
  {
    value: "MV_CE",
    title: "Central Province",
    countryId: "MV",
  },
  {
    value: "MV_00",
    title: "Alif Dhaal Atoll",
    countryId: "MV",
  },
  {
    value: "MV_02",
    title: "Alif Alif Atoll",
    countryId: "MV",
  },
  {
    value: "MV_01",
    title: "Addu Atoll",
    countryId: "MV",
  },
  {
    value: "MV_05",
    title: "Laamu Atoll",
    countryId: "MV",
  },
  {
    value: "MV_03",
    title: "Lhaviyani Atoll",
    countryId: "MV",
  },
  {
    value: "MV_MLE",
    title: "Malé",
    countryId: "MV",
  },
  {
    value: "MV_12",
    title: "Meemu Atoll",
    countryId: "MV",
  },
  {
    value: "MV_25",
    title: "Noonu Atoll",
    countryId: "MV",
  },
  {
    value: "MV_NC",
    title: "North Central Province",
    countryId: "MV",
  },
  {
    value: "MV_NO",
    title: "North Province",
    countryId: "MV",
  },
  {
    value: "MV_13",
    title: "Raa Atoll",
    countryId: "MV",
  },
  {
    value: "MV_SC",
    title: "South Central Province",
    countryId: "MV",
  },
  {
    value: "MV_24",
    title: "Shaviyani Atoll",
    countryId: "MV",
  },
  {
    value: "MV_SU",
    title: "South Province",
    countryId: "MV",
  },
  {
    value: "MV_08",
    title: "Thaa Atoll",
    countryId: "MV",
  },
  {
    value: "MV_US",
    title: "Upper South Province",
    countryId: "MV",
  },
  {
    value: "MV_04",
    title: "Vaavu Atoll",
    countryId: "MV",
  },
  {
    value: "SE_BD",
    title: "Norrbotten County",
    countryId: "SE",
  },
  {
    value: "SE_K",
    title: "Blekinge",
    countryId: "SE",
  },
  {
    value: "SE_W",
    title: "Dalarna County",
    countryId: "SE",
  },
  {
    value: "SE_X",
    title: "Gävleborg County",
    countryId: "SE",
  },
  {
    value: "SE_I",
    title: "Gotland County",
    countryId: "SE",
  },
  {
    value: "SE_N",
    title: "Halland County",
    countryId: "SE",
  },
  {
    value: "SE_F",
    title: "Jönköping County",
    countryId: "SE",
  },
  {
    value: "SE_H",
    title: "Kalmar County",
    countryId: "SE",
  },
  {
    value: "SE_G",
    title: "Kronoberg County",
    countryId: "SE",
  },
  {
    value: "SE_T",
    title: "Örebro County",
    countryId: "SE",
  },
  {
    value: "SE_E",
    title: "Östergötland County",
    countryId: "SE",
  },
  {
    value: "SE_M",
    title: "Skåne County",
    countryId: "SE",
  },
  {
    value: "SE_D",
    title: "Södermanland County",
    countryId: "SE",
  },
  {
    value: "SE_AB",
    title: "Stockholm County",
    countryId: "SE",
  },
  {
    value: "SE_C",
    title: "Uppsala County",
    countryId: "SE",
  },
  {
    value: "SE_S",
    title: "Värmland County",
    countryId: "SE",
  },
  {
    value: "SE_AC",
    title: "Västerbotten County",
    countryId: "SE",
  },
  {
    value: "SE_Y",
    title: "Västernorrland County",
    countryId: "SE",
  },
  {
    value: "SE_U",
    title: "Västmanland County",
    countryId: "SE",
  },
  {
    value: "SE_O",
    title: "Västra Götaland County",
    countryId: "SE",
  },
  {
    value: "GE_TB",
    title: "Tbilisi",
    countryId: "GE",
  },
  {
    value: "GE_RL",
    title: "Racha-Lechkhumi and Kvemo Svaneti",
    countryId: "GE",
  },
  {
    value: "GE_MM",
    title: "Mtskheta-Mtianeti",
    countryId: "GE",
  },
  {
    value: "GE_KK",
    title: "Kvemo Kartli",
    countryId: "GE",
  },
  {
    value: "GE_29",
    title: "Khelvachauri Municipality",
    countryId: "GE",
  },
  {
    value: "GE_KA",
    title: "Kakheti",
    countryId: "GE",
  },
  {
    value: "GE_IM",
    title: "Imereti",
    countryId: "GE",
  },
  {
    value: "GE_GU",
    title: "Guria",
    countryId: "GE",
  },
  {
    value: "GE_AB",
    title: "Autonomous Republic of Abkhazia",
    countryId: "GE",
  },
  {
    value: "GE_AJ",
    title: "Adjara",
    countryId: "GE",
  },
  {
    value: "GE_SJ",
    title: "Samtskhe-Javakheti",
    countryId: "GE",
  },
  {
    value: "GE_50",
    title: "Senaki Municipality",
    countryId: "GE",
  },
  {
    value: "GE_SK",
    title: "Shida Kartli",
    countryId: "GE",
  },
  {
    value: "GE_SZ",
    title: "Samegrelo-Zemo Svaneti",
    countryId: "GE",
  },
  {
    value: "MG_T",
    title: "Antananarivo Province",
    countryId: "MG",
  },
  {
    value: "MG_D",
    title: "Antsiranana Province",
    countryId: "MG",
  },
  {
    value: "MG_F",
    title: "Fianarantsoa Province",
    countryId: "MG",
  },
  {
    value: "MG_M",
    title: "Mahajanga Province",
    countryId: "MG",
  },
  {
    value: "MG_A",
    title: "Toamasina Province",
    countryId: "MG",
  },
  {
    value: "MG_U",
    title: "Toliara Province",
    countryId: "MG",
  },
  {
    value: "KN_09",
    title: "Saint Paul Capisterre Parish",
    countryId: "KN",
  },
  {
    value: "KN_10",
    title: "Saint Paul Charlestown Parish",
    countryId: "KN",
  },
  {
    value: "KN_11",
    title: "Saint Peter Basseterre Parish",
    countryId: "KN",
  },
  {
    value: "KN_01",
    title: "Christ Church Nichola Town Parish",
    countryId: "KN",
  },
  {
    value: "JO_AZ",
    title: "Zarqa Governorate",
    countryId: "JO",
  },
  {
    value: "KN_N",
    title: "Nevis",
    countryId: "KN",
  },
  {
    value: "KN_02",
    title: "Saint Anne Sandy Point Parish",
    countryId: "KN",
  },
  {
    value: "KN_04",
    title: "Saint George Gingerland Parish",
    countryId: "KN",
  },
  {
    value: "KN_05",
    title: "Saint James Windward Parish",
    countryId: "KN",
  },
  {
    value: "KN_06",
    title: "Saint John Capisterre Parish",
    countryId: "KN",
  },
  {
    value: "KN_07",
    title: "Saint John Figtree Parish",
    countryId: "KN",
  },
  {
    value: "KN_12",
    title: "Saint Thomas Lowland Parish",
    countryId: "KN",
  },
  {
    value: "KN_13",
    title: "Saint Thomas Middle Island Parish",
    countryId: "KN",
  },
  {
    value: "KN_15",
    title: "Trinity Palmetto Point Parish",
    countryId: "KN",
  },
  {
    value: "KN_K",
    title: "Saint Kitts",
    countryId: "KN",
  },
  {
    value: "KN_08",
    title: "Saint Mary Cayon Parish",
    countryId: "KN",
  },
  {
    value: "JP_30",
    title: "Wakayama Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_23",
    title: "Aichi Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_05",
    title: "Akita Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_02",
    title: "Aomori Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_38",
    title: "Ehime Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_18",
    title: "Fukui Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_40",
    title: "Fukuoka Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_07",
    title: "Fukushima Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_21",
    title: "Gifu Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_10",
    title: "Gunma Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_34",
    title: "Hiroshima Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_01",
    title: "Hokkaidō Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_28",
    title: "Hyōgo Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_08",
    title: "Ibaraki Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_17",
    title: "Ishikawa Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_03",
    title: "Iwate Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_37",
    title: "Kagawa Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_46",
    title: "Kagoshima Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_14",
    title: "Kanagawa Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_39",
    title: "Kōchi Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_43",
    title: "Kumamoto Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_26",
    title: "Kyōto Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_24",
    title: "Mie Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_04",
    title: "Miyagi Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_45",
    title: "Miyazaki Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_20",
    title: "Nagano Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_42",
    title: "Nagasaki Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_29",
    title: "Nara Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_15",
    title: "Niigata Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_44",
    title: "Ōita Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_33",
    title: "Okayama Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_47",
    title: "Okinawa Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_27",
    title: "Ōsaka Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_41",
    title: "Saga Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_11",
    title: "Saitama Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_25",
    title: "Shiga Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_32",
    title: "Shimane Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_22",
    title: "Shizuoka Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_09",
    title: "Tochigi Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_36",
    title: "Tokushima Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_13",
    title: "Tokyo",
    countryId: "JP",
  },
  {
    value: "JP_31",
    title: "Tottori Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_16",
    title: "Toyama Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_06",
    title: "Yamagata Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_35",
    title: "Yamaguchi Prefecture",
    countryId: "JP",
  },
  {
    value: "JP_19",
    title: "Yamanashi Prefecture",
    countryId: "JP",
  },
  {
    value: "PR_CL",
    title: "Carolina",
    countryId: "PR",
  },
  {
    value: "PR_GN",
    title: "Guaynabo",
    countryId: "PR",
  },
  {
    value: "PR_MG",
    title: "Mayagüez",
    countryId: "PR",
  },
  {
    value: "PR_PO",
    title: "Ponce",
    countryId: "PR",
  },
  {
    value: "PR_SJ",
    title: "San Juan",
    countryId: "PR",
  },
  {
    value: "PR_TB",
    title: "Toa Baja",
    countryId: "PR",
  },
  {
    value: "PR_TA",
    title: "Trujillo Alto",
    countryId: "PR",
  },
  {
    value: "PR_AR",
    title: "Arecibo",
    countryId: "PR",
  },
  {
    value: "PR_BY",
    title: "Bayamon",
    countryId: "PR",
  },
  {
    value: "PR_CG",
    title: "Caguas",
    countryId: "PR",
  },
  {
    value: "FR_56",
    title: "Morbihan",
    countryId: "FR",
  },
  {
    value: "FR_55",
    title: "Meuse",
    countryId: "FR",
  },
  {
    value: "FR_54",
    title: "Meurthe-et-Moselle",
    countryId: "FR",
  },
  {
    value: "FR_69M",
    title: "Métropole de Lyon",
    countryId: "FR",
  },
  {
    value: "FR_976",
    title: "Mayotte",
    countryId: "FR",
  },
  {
    value: "FR_53",
    title: "Mayenne",
    countryId: "FR",
  },
  {
    value: "FR_972",
    title: "Martinique",
    countryId: "FR",
  },
  {
    value: "FR_51",
    title: "Marne",
    countryId: "FR",
  },
  {
    value: "FR_50",
    title: "Manche",
    countryId: "FR",
  },
  {
    value: "FR_49",
    title: "Maine-et-Loire",
    countryId: "FR",
  },
  {
    value: "FR_48",
    title: "Lozère",
    countryId: "FR",
  },
  {
    value: "FR_47",
    title: "Lot-et-Garonne",
    countryId: "FR",
  },
  {
    value: "FR_46",
    title: "Lot",
    countryId: "FR",
  },
  {
    value: "FR_45",
    title: "Loiret",
    countryId: "FR",
  },
  {
    value: "FR_44",
    title: "Loire-Atlantique",
    countryId: "FR",
  },
  {
    value: "FR_42",
    title: "Loire",
    countryId: "FR",
  },
  {
    value: "FR_41",
    title: "Loir-et-Cher",
    countryId: "FR",
  },
  {
    value: "FR_40",
    title: "Landes",
    countryId: "FR",
  },
  {
    value: "FR_75C",
    title: "Paris",
    countryId: "FR",
  },
  {
    value: "FR_62",
    title: "Pas-de-Calais",
    countryId: "FR",
  },
  {
    value: "FR_PDL",
    title: "Pays-de-la-Loire",
    countryId: "FR",
  },
  {
    value: "FR_PAC",
    title: "Provence-Alpes-Côte-d’Azur",
    countryId: "FR",
  },
  {
    value: "FR_63",
    title: "Puy-de-Dôme",
    countryId: "FR",
  },
  {
    value: "FR_64",
    title: "Pyrénées-Atlantiques",
    countryId: "FR",
  },
  {
    value: "FR_66",
    title: "Pyrénées-Orientales",
    countryId: "FR",
  },
  {
    value: "FR_69",
    title: "Rhône",
    countryId: "FR",
  },
  {
    value: "FR_PM",
    title: "Saint Pierre and Miquelon",
    countryId: "FR",
  },
  {
    value: "FR_BL",
    title: "Saint-Barthélemy",
    countryId: "FR",
  },
  {
    value: "FR_MF",
    title: "Saint-Martin",
    countryId: "FR",
  },
  {
    value: "FR_89",
    title: "Yonne",
    countryId: "FR",
  },
  {
    value: "FR_06",
    title: "Alpes-Maritimes",
    countryId: "FR",
  },
  {
    value: "FR_07",
    title: "Ardèche",
    countryId: "FR",
  },
  {
    value: "FR_08",
    title: "Ardennes",
    countryId: "FR",
  },
  {
    value: "FR_88",
    title: "Vosges",
    countryId: "FR",
  },
  {
    value: "FR_86",
    title: "Vienne",
    countryId: "FR",
  },
  {
    value: "FR_85",
    title: "Vendée",
    countryId: "FR",
  },
  {
    value: "FR_84",
    title: "Vaucluse",
    countryId: "FR",
  },
  {
    value: "FR_OCC",
    title: "Occitanie",
    countryId: "FR",
  },
  {
    value: "FR_60",
    title: "Oise",
    countryId: "FR",
  },
  {
    value: "FR_61",
    title: "Orne",
    countryId: "FR",
  },
  {
    value: "FR_18",
    title: "Cher",
    countryId: "FR",
  },
  {
    value: "FR_17",
    title: "Charente-Maritime",
    countryId: "FR",
  },
  {
    value: "FR_16",
    title: "Charente",
    countryId: "FR",
  },
  {
    value: "FR_CVL",
    title: "Centre-Val de Loire",
    countryId: "FR",
  },
  {
    value: "FR_15",
    title: "Cantal",
    countryId: "FR",
  },
  {
    value: "FR_14",
    title: "Calvados",
    countryId: "FR",
  },
  {
    value: "FR_BRE",
    title: "Bretagne",
    countryId: "FR",
  },
  {
    value: "FR_BFC",
    title: "Bourgogne-Franche-Comté",
    countryId: "FR",
  },
  {
    value: "FR_57",
    title: "Moselle",
    countryId: "FR",
  },
  {
    value: "FR_58",
    title: "Nièvre",
    countryId: "FR",
  },
  {
    value: "FR_59",
    title: "Nord",
    countryId: "FR",
  },
  {
    value: "FR_NOR",
    title: "Normandie",
    countryId: "FR",
  },
  {
    value: "FR_NAQ",
    title: "Nouvelle-Aquitaine",
    countryId: "FR",
  },
  {
    value: "FR_78",
    title: "Yvelines",
    countryId: "FR",
  },
  {
    value: "FR_71",
    title: "Saône-et-Loire",
    countryId: "FR",
  },
  {
    value: "FR_13",
    title: "Bouches-du-Rhône",
    countryId: "FR",
  },
  {
    value: "FR_67",
    title: "Bas-Rhin",
    countryId: "FR",
  },
  {
    value: "FR_12",
    title: "Aveyron",
    countryId: "FR",
  },
  {
    value: "FR_ARA",
    title: "Auvergne-Rhône-Alpes",
    countryId: "FR",
  },
  {
    value: "FR_11",
    title: "Aude",
    countryId: "FR",
  },
  {
    value: "FR_10",
    title: "Aube",
    countryId: "FR",
  },
  {
    value: "FR_09",
    title: "Ariège",
    countryId: "FR",
  },
  {
    value: "FR_72",
    title: "Sarthe",
    countryId: "FR",
  },
  {
    value: "FR_73",
    title: "Savoie",
    countryId: "FR",
  },
  {
    value: "FR_77",
    title: "Seine-et-Marne",
    countryId: "FR",
  },
  {
    value: "FR_76",
    title: "Seine-Maritime",
    countryId: "FR",
  },
  {
    value: "FR_93",
    title: "Seine-Saint-Denis",
    countryId: "FR",
  },
  {
    value: "FR_80",
    title: "Somme",
    countryId: "FR",
  },
  {
    value: "FR_81",
    title: "Tarn",
    countryId: "FR",
  },
  {
    value: "FR_82",
    title: "Tarn-et-Garonne",
    countryId: "FR",
  },
  {
    value: "FR_90",
    title: "Territoire de Belfort",
    countryId: "FR",
  },
  {
    value: "FR_95",
    title: "Val-d'Oise",
    countryId: "FR",
  },
  {
    value: "FR_94",
    title: "Val-de-Marne",
    countryId: "FR",
  },
  {
    value: "FR_83",
    title: "Var",
    countryId: "FR",
  },
  {
    value: "FR_WF",
    title: "Wallis and Futuna",
    countryId: "FR",
  },
  {
    value: "FR_01",
    title: "Ain",
    countryId: "FR",
  },
  {
    value: "FR_02",
    title: "Aisne",
    countryId: "FR",
  },
  {
    value: "FR_03",
    title: "Allier",
    countryId: "FR",
  },
  {
    value: "FR_04",
    title: "Alpes-de-Haute-Provence",
    countryId: "FR",
  },
  {
    value: "FR_6AE",
    title: "Alsace",
    countryId: "FR",
  },
  {
    value: "FR_974",
    title: "La Réunion",
    countryId: "FR",
  },
  {
    value: "FR_39",
    title: "Jura",
    countryId: "FR",
  },
  {
    value: "FR_38",
    title: "Isère",
    countryId: "FR",
  },
  {
    value: "FR_37",
    title: "Indre-et-Loire",
    countryId: "FR",
  },
  {
    value: "FR_36",
    title: "Indre",
    countryId: "FR",
  },
  {
    value: "FR_35",
    title: "Ille-et-Vilaine",
    countryId: "FR",
  },
  {
    value: "FR_IDF",
    title: "Île-de-France",
    countryId: "FR",
  },
  {
    value: "FR_34",
    title: "Hérault",
    countryId: "FR",
  },
  {
    value: "FR_92",
    title: "Hauts-de-Seine",
    countryId: "FR",
  },
  {
    value: "FR_HDF",
    title: "Hauts-de-France",
    countryId: "FR",
  },
  {
    value: "FR_65",
    title: "Hautes-Pyrénées",
    countryId: "FR",
  },
  {
    value: "FR_05",
    title: "Hautes-Alpes",
    countryId: "FR",
  },
  {
    value: "FR_87",
    title: "Haute-Vienne",
    countryId: "FR",
  },
  {
    value: "FR_74",
    title: "Haute-Savoie",
    countryId: "FR",
  },
  {
    value: "FR_70",
    title: "Haute-Saône",
    countryId: "FR",
  },
  {
    value: "FR_52",
    title: "Haute-Marne",
    countryId: "FR",
  },
  {
    value: "FR_43",
    title: "Haute-Loire",
    countryId: "FR",
  },
  {
    value: "FR_31",
    title: "Haute-Garonne",
    countryId: "FR",
  },
  {
    value: "FR_2B",
    title: "Haute-Corse",
    countryId: "FR",
  },
  {
    value: "FR_68",
    title: "Haut-Rhin",
    countryId: "FR",
  },
  {
    value: "FR_971",
    title: "Guadeloupe",
    countryId: "FR",
  },
  {
    value: "FR_GES",
    title: "Grand-Est",
    countryId: "FR",
  },
  {
    value: "FR_33",
    title: "Gironde",
    countryId: "FR",
  },
  {
    value: "FR_32",
    title: "Gers",
    countryId: "FR",
  },
  {
    value: "FR_30",
    title: "Gard",
    countryId: "FR",
  },
  {
    value: "FR_TF",
    title: "French Southern and Antarctic Lands",
    countryId: "FR",
  },
  {
    value: "FR_PF",
    title: "French Polynesia",
    countryId: "FR",
  },
  {
    value: "FR_973",
    title: "French Guiana",
    countryId: "FR",
  },
  {
    value: "FR_29",
    title: "Finistère",
    countryId: "FR",
  },
  {
    value: "FR_28",
    title: "Eure-et-Loir",
    countryId: "FR",
  },
  {
    value: "FR_27",
    title: "Eure",
    countryId: "FR",
  },
  {
    value: "FR_91",
    title: "Essonne",
    countryId: "FR",
  },
  {
    value: "FR_26",
    title: "Drôme",
    countryId: "FR",
  },
  {
    value: "FR_25",
    title: "Doubs",
    countryId: "FR",
  },
  {
    value: "FR_24",
    title: "Dordogne",
    countryId: "FR",
  },
  {
    value: "FR_79",
    title: "Deux-Sèvres",
    countryId: "FR",
  },
  {
    value: "FR_23",
    title: "Creuse",
    countryId: "FR",
  },
  {
    value: "FR_22",
    title: "Côtes-d'Armor",
    countryId: "FR",
  },
  {
    value: "FR_21",
    title: "Côte-d'Or",
    countryId: "FR",
  },
  {
    value: "FR_2A",
    title: "Corse-du-Sud",
    countryId: "FR",
  },
  {
    value: "FR_20R",
    title: "Corse",
    countryId: "FR",
  },
  {
    value: "FR_19",
    title: "Corrèze",
    countryId: "FR",
  },
  {
    value: "FR_CP",
    title: "Clipperton",
    countryId: "FR",
  },
  {
    value: "TN_22",
    title: "Zaghouan Governorate",
    countryId: "TN",
  },
  {
    value: "TN_11",
    title: "Tunis Governorate",
    countryId: "TN",
  },
  {
    value: "TN_83",
    title: "Tataouine Governorate",
    countryId: "TN",
  },
  {
    value: "TN_51",
    title: "Sousse Governorate",
    countryId: "TN",
  },
  {
    value: "TN_34",
    title: "Siliana Governorate",
    countryId: "TN",
  },
  {
    value: "TN_43",
    title: "Sidi Bouzid Governorate",
    countryId: "TN",
  },
  {
    value: "TN_61",
    title: "Sfax Governorate",
    countryId: "TN",
  },
  {
    value: "TN_52",
    title: "Monastir Governorate",
    countryId: "TN",
  },
  {
    value: "TN_82",
    title: "Medenine Governorate",
    countryId: "TN",
  },
  {
    value: "TN_81",
    title: "Gabès Governorate",
    countryId: "TN",
  },
  {
    value: "TN_23",
    title: "Bizerte Governorate",
    countryId: "TN",
  },
  {
    value: "TN_13",
    title: "Ben Arous Governorate",
    countryId: "TN",
  },
  {
    value: "TN_14",
    title: "Manouba Governorate",
    countryId: "TN",
  },
  {
    value: "TN_12",
    title: "Ariana Governorate",
    countryId: "TN",
  },
  {
    value: "TN_31",
    title: "Kassrine",
    countryId: "TN",
  },
  {
    value: "TN_42",
    title: "Kasserine Governorate",
    countryId: "TN",
  },
  {
    value: "TN_41",
    title: "Kairouan Governorate",
    countryId: "TN",
  },
  {
    value: "TN_32",
    title: "Jendouba Governorate",
    countryId: "TN",
  },
  {
    value: "TN_53",
    title: "Mahdia Governorate",
    countryId: "TN",
  },
  {
    value: "TN_33",
    title: "Kef Governorate",
    countryId: "TN",
  },
  {
    value: "TN_73",
    title: "Kebili Governorate",
    countryId: "TN",
  },
  {
    value: "TN_72",
    title: "Tozeur Governorate",
    countryId: "TN",
  },
  {
    value: "AE_RK",
    title: "Ras al-Khaimah",
    countryId: "AE",
  },
  {
    value: "AE_SH",
    title: "Sharjah Emirate",
    countryId: "AE",
  },
  {
    value: "AE_UQ",
    title: "Umm al-Quwain",
    countryId: "AE",
  },
  {
    value: "AE_AZ",
    title: "Abu Dhabi Emirate",
    countryId: "AE",
  },
  {
    value: "AE_AJ",
    title: "Ajman Emirate",
    countryId: "AE",
  },
  {
    value: "AE_DU",
    title: "Dubai",
    countryId: "AE",
  },
  {
    value: "AE_FU",
    title: "Fujairah",
    countryId: "AE",
  },
  {
    value: "BH_16",
    title: "Central Governorate",
    countryId: "BH",
  },
  {
    value: "BH_13",
    title: "Capital Governorate",
    countryId: "BH",
  },
  {
    value: "BH_14",
    title: "Southern Governorate",
    countryId: "BH",
  },
  {
    value: "BH_17",
    title: "Northern Governorate",
    countryId: "BH",
  },
  {
    value: "BH_15",
    title: "Muharraq Governorate",
    countryId: "BH",
  },
  {
    value: "SG_01",
    title: "Central Singapore Community Development Council",
    countryId: "SG",
  },
  {
    value: "SG_04",
    title: "South East Community Development Council",
    countryId: "SG",
  },
  {
    value: "SG_05",
    title: "South West Community Development Council",
    countryId: "SG",
  },
  {
    value: "SG_02",
    title: "North East Community Development Council",
    countryId: "SG",
  },
  {
    value: "SG_03",
    title: "North West Community Development Council",
    countryId: "SG",
  },
  {
    value: "AO_MAL",
    title: "Malanje Province",
    countryId: "AO",
  },
  {
    value: "AO_ZAI",
    title: "Zaire Province",
    countryId: "AO",
  },
  {
    value: "AO_UIG",
    title: "Uíge Province",
    countryId: "AO",
  },
  {
    value: "AO_MOX",
    title: "Moxico Province",
    countryId: "AO",
  },
  {
    value: "AO_LSU",
    title: "Lunda Sul Province",
    countryId: "AO",
  },
  {
    value: "AO_LNO",
    title: "Lunda Norte Province",
    countryId: "AO",
  },
  {
    value: "AO_LUA",
    title: "Luanda Province",
    countryId: "AO",
  },
  {
    value: "AO_HUI",
    title: "Huíla Province",
    countryId: "AO",
  },
  {
    value: "AO_HUA",
    title: "Huambo Province",
    countryId: "AO",
  },
  {
    value: "AO_CNN",
    title: "Cunene Province",
    countryId: "AO",
  },
  {
    value: "AO_CUS",
    title: "Cuanza Sul",
    countryId: "AO",
  },
  {
    value: "AO_CNO",
    title: "Cuanza Norte Province",
    countryId: "AO",
  },
  {
    value: "AO_CCU",
    title: "Cuando Cubango Province",
    countryId: "AO",
  },
  {
    value: "AO_CAB",
    title: "Cabinda Province",
    countryId: "AO",
  },
  {
    value: "AO_BIE",
    title: "Bié Province",
    countryId: "AO",
  },
  {
    value: "AO_BGU",
    title: "Benguela Province",
    countryId: "AO",
  },
  {
    value: "AO_BGO",
    title: "Bengo Province",
    countryId: "AO",
  },
  {
    value: "EC_O",
    title: "El Oro",
    countryId: "EC",
  },
  {
    value: "EC_Z",
    title: "Zamora Chinchipe",
    countryId: "EC",
  },
  {
    value: "EC_T",
    title: "Tungurahua",
    countryId: "EC",
  },
  {
    value: "EC_U",
    title: "Sucumbíos",
    countryId: "EC",
  },
  {
    value: "EC_SD",
    title: "Santo Domingo de los Tsáchilas",
    countryId: "EC",
  },
  {
    value: "EC_Y",
    title: "Pastaza",
    countryId: "EC",
  },
  {
    value: "EC_D",
    title: "Orellana",
    countryId: "EC",
  },
  {
    value: "EC_N",
    title: "Napo",
    countryId: "EC",
  },
  {
    value: "EC_S",
    title: "Morona-Santiago",
    countryId: "EC",
  },
  {
    value: "EC_M",
    title: "Manabí",
    countryId: "EC",
  },
  {
    value: "EC_R",
    title: "Los Ríos",
    countryId: "EC",
  },
  {
    value: "EC_L",
    title: "Loja",
    countryId: "EC",
  },
  {
    value: "EC_I",
    title: "Imbabura",
    countryId: "EC",
  },
  {
    value: "EC_G",
    title: "Guayas",
    countryId: "EC",
  },
  {
    value: "EC_W",
    title: "Galápagos",
    countryId: "EC",
  },
  {
    value: "EC_E",
    title: "Esmeraldas",
    countryId: "EC",
  },
  {
    value: "EC_P",
    title: "Pichincha",
    countryId: "EC",
  },
  {
    value: "EC_SE",
    title: "Santa Elena",
    countryId: "EC",
  },
  {
    value: "EC_A",
    title: "Azuay",
    countryId: "EC",
  },
  {
    value: "EC_B",
    title: "Bolívar",
    countryId: "EC",
  },
  {
    value: "EC_F",
    title: "Cañar",
    countryId: "EC",
  },
  {
    value: "EC_C",
    title: "Carchi",
    countryId: "EC",
  },
  {
    value: "EC_H",
    title: "Chimborazo",
    countryId: "EC",
  },
  {
    value: "EC_X",
    title: "Cotopaxi",
    countryId: "EC",
  },
  {
    value: "BA_03",
    title: "Tuzla Canton",
    countryId: "BA",
  },
  {
    value: "BA_08",
    title: "West Herzegovina Canton",
    countryId: "BA",
  },
  {
    value: "BA_04",
    title: "Zenica-Doboj Canton",
    countryId: "BA",
  },
  {
    value: "BA_05",
    title: "Bosnian Podrinje Canton",
    countryId: "BA",
  },
  {
    value: "BA_BRC",
    title: "Brčko District",
    countryId: "BA",
  },
  {
    value: "BA_10",
    title: "Canton 10",
    countryId: "BA",
  },
  {
    value: "BA_06",
    title: "Central Bosnia Canton",
    countryId: "BA",
  },
  {
    value: "BA_BIH",
    title: "Federation of Bosnia and Herzegovina",
    countryId: "BA",
  },
  {
    value: "BA_07",
    title: "Herzegovina-Neretva Canton",
    countryId: "BA",
  },
  {
    value: "BA_02",
    title: "Posavina Canton",
    countryId: "BA",
  },
  {
    value: "BA_SRP",
    title: "Republika Srpska",
    countryId: "BA",
  },
  {
    value: "BA_09",
    title: "Sarajevo Canton",
    countryId: "BA",
  },
  {
    value: "BA_01",
    title: "Una-Sana Canton",
    countryId: "BA",
  },
  {
    value: "TG_P",
    title: "Plateaux Region",
    countryId: "TG",
  },
  {
    value: "TG_S",
    title: "Savanes Region",
    countryId: "TG",
  },
  {
    value: "TG_C",
    title: "Centrale Region",
    countryId: "TG",
  },
  {
    value: "TG_K",
    title: "Kara Region",
    countryId: "TG",
  },
  {
    value: "TG_M",
    title: "Maritime",
    countryId: "TG",
  },
  {
    value: "AU_VIC",
    title: "Victoria",
    countryId: "AU",
  },
  {
    value: "AU_TAS",
    title: "Tasmania",
    countryId: "AU",
  },
  {
    value: "AU_QLD",
    title: "Queensland",
    countryId: "AU",
  },
  {
    value: "AU_SA",
    title: "South Australia",
    countryId: "AU",
  },
  {
    value: "AU_NT",
    title: "Northern Territory",
    countryId: "AU",
  },
  {
    value: "AU_NSW",
    title: "New South Wales",
    countryId: "AU",
  },
  {
    value: "AU_ACT",
    title: "Australian Capital Territory",
    countryId: "AU",
  },
  {
    value: "AU_WA",
    title: "Western Australia",
    countryId: "AU",
  },
  {
    value: "RO_DJ",
    title: "Dolj County",
    countryId: "RO",
  },
  {
    value: "RO_AG",
    title: "Arges",
    countryId: "RO",
  },
  {
    value: "RO_AR",
    title: "Arad County",
    countryId: "RO",
  },
  {
    value: "RO_AB",
    title: "Alba",
    countryId: "RO",
  },
  {
    value: "RO_BH",
    title: "Bihor County",
    countryId: "RO",
  },
  {
    value: "RO_BN",
    title: "Bistrița-Năsăud County",
    countryId: "RO",
  },
  {
    value: "RO_BT",
    title: "Botoșani County",
    countryId: "RO",
  },
  {
    value: "RO_BR",
    title: "Braila",
    countryId: "RO",
  },
  {
    value: "RO_BV",
    title: "Brașov County",
    countryId: "RO",
  },
  {
    value: "RO_B",
    title: "Bucharest",
    countryId: "RO",
  },
  {
    value: "RO_BZ",
    title: "Buzău County",
    countryId: "RO",
  },
  {
    value: "RO_CL",
    title: "Călărași County",
    countryId: "RO",
  },
  {
    value: "RO_CS",
    title: "Caraș-Severin County",
    countryId: "RO",
  },
  {
    value: "RO_CJ",
    title: "Cluj County",
    countryId: "RO",
  },
  {
    value: "RO_CT",
    title: "Constanța County",
    countryId: "RO",
  },
  {
    value: "RO_CV",
    title: "Covasna County",
    countryId: "RO",
  },
  {
    value: "RO_DB",
    title: "Dâmbovița County",
    countryId: "RO",
  },
  {
    value: "RO_BC",
    title: "Bacău County",
    countryId: "RO",
  },
  {
    value: "RO_GL",
    title: "Galați County",
    countryId: "RO",
  },
  {
    value: "RO_GR",
    title: "Giurgiu County",
    countryId: "RO",
  },
  {
    value: "RO_GJ",
    title: "Gorj County",
    countryId: "RO",
  },
  {
    value: "RO_HR",
    title: "Harghita County",
    countryId: "RO",
  },
  {
    value: "RO_HD",
    title: "Hunedoara County",
    countryId: "RO",
  },
  {
    value: "RO_IL",
    title: "Ialomița County",
    countryId: "RO",
  },
  {
    value: "RO_IS",
    title: "Iași County",
    countryId: "RO",
  },
  {
    value: "RO_IF",
    title: "Ilfov County",
    countryId: "RO",
  },
  {
    value: "RO_MM",
    title: "Maramureș County",
    countryId: "RO",
  },
  {
    value: "RO_MH",
    title: "Mehedinți County",
    countryId: "RO",
  },
  {
    value: "RO_MS",
    title: "Mureș County",
    countryId: "RO",
  },
  {
    value: "RO_NT",
    title: "Neamț County",
    countryId: "RO",
  },
  {
    value: "RO_OT",
    title: "Olt County",
    countryId: "RO",
  },
  {
    value: "RO_PH",
    title: "Prahova County",
    countryId: "RO",
  },
  {
    value: "RO_SJ",
    title: "Sălaj County",
    countryId: "RO",
  },
  {
    value: "RO_SM",
    title: "Satu Mare County",
    countryId: "RO",
  },
  {
    value: "RO_SB",
    title: "Sibiu County",
    countryId: "RO",
  },
  {
    value: "RO_SV",
    title: "Suceava County",
    countryId: "RO",
  },
  {
    value: "RO_TR",
    title: "Teleorman County",
    countryId: "RO",
  },
  {
    value: "RO_TM",
    title: "Timiș County",
    countryId: "RO",
  },
  {
    value: "RO_TL",
    title: "Tulcea County",
    countryId: "RO",
  },
  {
    value: "RO_VL",
    title: "Vâlcea County",
    countryId: "RO",
  },
  {
    value: "RO_VS",
    title: "Vaslui County",
    countryId: "RO",
  },
  {
    value: "RO_VN",
    title: "Vrancea County",
    countryId: "RO",
  },
  {
    value: "YE_SH",
    title: "Shabwah Governorate",
    countryId: "YE",
  },
  {
    value: "YE_SU",
    title: "Socotra Governorate",
    countryId: "YE",
  },
  {
    value: "YE_TA",
    title: "Ta'izz Governorate",
    countryId: "YE",
  },
  {
    value: "YE_DH",
    title: "Dhamar Governorate",
    countryId: "YE",
  },
  {
    value: "YE_HD",
    title: "Hadhramaut Governorate",
    countryId: "YE",
  },
  {
    value: "YE_HJ",
    title: "Hajjah Governorate",
    countryId: "YE",
  },
  {
    value: "YE_IB",
    title: "Ibb Governorate",
    countryId: "YE",
  },
  {
    value: "YE_LA",
    title: "Lahij Governorate",
    countryId: "YE",
  },
  {
    value: "YE_AD",
    title: "'Adan Governorate",
    countryId: "YE",
  },
  {
    value: "YE_AM",
    title: "'Amran Governorate",
    countryId: "YE",
  },
  {
    value: "YE_AB",
    title: "Abyan Governorate",
    countryId: "YE",
  },
  {
    value: "YE_BA",
    title: "Al Bayda' Governorate",
    countryId: "YE",
  },
  {
    value: "YE_HU",
    title: "Al Hudaydah Governorate",
    countryId: "YE",
  },
  {
    value: "YE_JA",
    title: "Al Jawf Governorate",
    countryId: "YE",
  },
  {
    value: "YE_MR",
    title: "Al Mahrah Governorate",
    countryId: "YE",
  },
  {
    value: "YE_MW",
    title: "Al Mahwit Governorate",
    countryId: "YE",
  },
  {
    value: "YE_SN",
    title: "Sana'a Governorate",
    countryId: "YE",
  },
  {
    value: "YE_MA",
    title: "Ma'rib Governorate",
    countryId: "YE",
  },
  {
    value: "YE_RA",
    title: "Raymah Governorate",
    countryId: "YE",
  },
  {
    value: "YE_SD",
    title: "Saada Governorate",
    countryId: "YE",
  },
  {
    value: "YE_SA",
    title: "Sana'a",
    countryId: "YE",
  },
  {
    value: "NR_03",
    title: "Anetan District",
    countryId: "NR",
  },
  {
    value: "NR_14",
    title: "Yaren District",
    countryId: "NR",
  },
  {
    value: "NR_13",
    title: "Uaboe District",
    countryId: "NR",
  },
  {
    value: "NR_12",
    title: "Nibok District",
    countryId: "NR",
  },
  {
    value: "NR_11",
    title: "Meneng District",
    countryId: "NR",
  },
  {
    value: "NR_10",
    title: "Ijuw District",
    countryId: "NR",
  },
  {
    value: "NR_09",
    title: "Ewa District",
    countryId: "NR",
  },
  {
    value: "NR_08",
    title: "Denigomodu District",
    countryId: "NR",
  },
  {
    value: "NR_07",
    title: "Buada District",
    countryId: "NR",
  },
  {
    value: "NR_06",
    title: "Boe District",
    countryId: "NR",
  },
  {
    value: "NR_05",
    title: "Baiti District",
    countryId: "NR",
  },
  {
    value: "NR_04",
    title: "Anibare District",
    countryId: "NR",
  },
  {
    value: "NR_02",
    title: "Anabar District",
    countryId: "NR",
  },
  {
    value: "NR_01",
    title: "Aiwo District",
    countryId: "NR",
  },
  {
    value: "KH_4",
    title: "Kampong Chhnang",
    countryId: "KH",
  },
  {
    value: "KH_1",
    title: "Banteay Meanchey",
    countryId: "KH",
  },
  {
    value: "KH_2",
    title: "Battambang",
    countryId: "KH",
  },
  {
    value: "KH_3",
    title: "Kampong Cham",
    countryId: "KH",
  },
  {
    value: "KH_5",
    title: "Kampong Speu",
    countryId: "KH",
  },
  {
    value: "KH_6",
    title: "Kampong Thom",
    countryId: "KH",
  },
  {
    value: "KH_7",
    title: "Kampot",
    countryId: "KH",
  },
  {
    value: "KH_8",
    title: "Kandal",
    countryId: "KH",
  },
  {
    value: "KH_23",
    title: "Kep",
    countryId: "KH",
  },
  {
    value: "KH_9",
    title: "Koh Kong",
    countryId: "KH",
  },
  {
    value: "KH_10",
    title: "Kratie",
    countryId: "KH",
  },
  {
    value: "KH_11",
    title: "Mondulkiri",
    countryId: "KH",
  },
  {
    value: "KH_22",
    title: "Oddar Meanchey",
    countryId: "KH",
  },
  {
    value: "KH_24",
    title: "Pailin",
    countryId: "KH",
  },
  {
    value: "KH_12",
    title: "Phnom Penh",
    countryId: "KH",
  },
  {
    value: "KH_13",
    title: "Preah Vihear",
    countryId: "KH",
  },
  {
    value: "KH_14",
    title: "Prey Veng",
    countryId: "KH",
  },
  {
    value: "KH_15",
    title: "Pursat",
    countryId: "KH",
  },
  {
    value: "KH_16",
    title: "Ratanakiri",
    countryId: "KH",
  },
  {
    value: "KH_17",
    title: "Siem Reap",
    countryId: "KH",
  },
  {
    value: "KH_18",
    title: "Sihanoukville",
    countryId: "KH",
  },
  {
    value: "KH_19",
    title: "Stung Treng",
    countryId: "KH",
  },
  {
    value: "KH_20",
    title: "Svay Rieng",
    countryId: "KH",
  },
  {
    value: "KH_21",
    title: "Takeo",
    countryId: "KH",
  },
  {
    value: "SN_KD",
    title: "Kolda",
    countryId: "SN",
  },
  {
    value: "SN_KE",
    title: "Kédougou",
    countryId: "SN",
  },
  {
    value: "SN_KA",
    title: "Kaffrine",
    countryId: "SN",
  },
  {
    value: "SN_FK",
    title: "Fatick",
    countryId: "SN",
  },
  {
    value: "SN_DB",
    title: "Diourbel Region",
    countryId: "SN",
  },
  {
    value: "SN_DK",
    title: "Dakar",
    countryId: "SN",
  },
  {
    value: "SN_ZG",
    title: "Ziguinchor",
    countryId: "SN",
  },
  {
    value: "SN_TH",
    title: "Thiès Region",
    countryId: "SN",
  },
  {
    value: "SN_TC",
    title: "Tambacounda Region",
    countryId: "SN",
  },
  {
    value: "SN_SE",
    title: "Sédhiou",
    countryId: "SN",
  },
  {
    value: "SN_SL",
    title: "Saint-Louis",
    countryId: "SN",
  },
  {
    value: "SN_MT",
    title: "Matam",
    countryId: "SN",
  },
  {
    value: "SN_LG",
    title: "Louga",
    countryId: "SN",
  },
  {
    value: "MW_CT",
    title: "Chitipa district",
    countryId: "MW",
  },
  {
    value: "MW_DO",
    title: "Dowa District",
    countryId: "MW",
  },
  {
    value: "MW_KR",
    title: "Karonga District",
    countryId: "MW",
  },
  {
    value: "MW_SA",
    title: "Salima District",
    countryId: "MW",
  },
  {
    value: "MW_RU",
    title: "Rumphi District",
    countryId: "MW",
  },
  {
    value: "MW_PH",
    title: "Phalombe District",
    countryId: "MW",
  },
  {
    value: "MW_NI",
    title: "Ntchisi District",
    countryId: "MW",
  },
  {
    value: "MW_NU",
    title: "Ntcheu District",
    countryId: "MW",
  },
  {
    value: "MW_NS",
    title: "Nsanje District",
    countryId: "MW",
  },
  {
    value: "MW_N",
    title: "Northern Region",
    countryId: "MW",
  },
  {
    value: "MW_NK",
    title: "Nkhotakota District",
    countryId: "MW",
  },
  {
    value: "MW_NB",
    title: "Nkhata Bay District",
    countryId: "MW",
  },
  {
    value: "MW_MZ",
    title: "Mzimba District",
    countryId: "MW",
  },
  {
    value: "MW_MW",
    title: "Mwanza District",
    countryId: "MW",
  },
  {
    value: "MW_MU",
    title: "Mulanje District",
    countryId: "MW",
  },
  {
    value: "MW_BA",
    title: "Balaka District",
    countryId: "MW",
  },
  {
    value: "MW_BL",
    title: "Blantyre District",
    countryId: "MW",
  },
  {
    value: "MW_C",
    title: "Central Region",
    countryId: "MW",
  },
  {
    value: "MW_CK",
    title: "Chikwawa District",
    countryId: "MW",
  },
  {
    value: "MW_CR",
    title: "Chiradzulu District",
    countryId: "MW",
  },
  {
    value: "MW_DE",
    title: "Dedza District",
    countryId: "MW",
  },
  {
    value: "MW_MC",
    title: "Mchinji District",
    countryId: "MW",
  },
  {
    value: "MW_MG",
    title: "Mangochi District",
    countryId: "MW",
  },
  {
    value: "MW_MH",
    title: "Machinga District",
    countryId: "MW",
  },
  {
    value: "MW_LI",
    title: "Lilongwe District",
    countryId: "MW",
  },
  {
    value: "MW_LK",
    title: "Likoma District",
    countryId: "MW",
  },
  {
    value: "MW_KS",
    title: "Kasungu District",
    countryId: "MW",
  },
  {
    value: "MW_ZO",
    title: "Zomba District",
    countryId: "MW",
  },
  {
    value: "MW_TH",
    title: "Thyolo District",
    countryId: "MW",
  },
  {
    value: "MW_S",
    title: "Southern Region",
    countryId: "MW",
  },
  {
    value: "SD_GZ",
    title: "Al Jazirah",
    countryId: "SD",
  },
  {
    value: "SD_GD",
    title: "Al Qadarif",
    countryId: "SD",
  },
  {
    value: "SD_NB",
    title: "Blue Nile",
    countryId: "SD",
  },
  {
    value: "SD_DC",
    title: "Central Darfur",
    countryId: "SD",
  },
  {
    value: "SD_DE",
    title: "East Darfur",
    countryId: "SD",
  },
  {
    value: "SD_NW",
    title: "White Nile",
    countryId: "SD",
  },
  {
    value: "SD_GK",
    title: "West Kordofan",
    countryId: "SD",
  },
  {
    value: "SD_DN",
    title: "North Darfur",
    countryId: "SD",
  },
  {
    value: "SD_DW",
    title: "West Darfur",
    countryId: "SD",
  },
  {
    value: "SD_KS",
    title: "South Kordofan",
    countryId: "SD",
  },
  {
    value: "SD_DS",
    title: "South Darfur",
    countryId: "SD",
  },
  {
    value: "SD_SI",
    title: "Sennar",
    countryId: "SD",
  },
  {
    value: "SD_NR",
    title: "River Nile",
    countryId: "SD",
  },
  {
    value: "SD_RS",
    title: "Red Sea",
    countryId: "SD",
  },
  {
    value: "SD_NO",
    title: "Northern",
    countryId: "SD",
  },
  {
    value: "SD_KN",
    title: "North Kordofan",
    countryId: "SD",
  },
  {
    value: "SD_KA",
    title: "Kassala",
    countryId: "SD",
  },
  {
    value: "SD_KH",
    title: "Khartoum",
    countryId: "SD",
  },
  {
    value: "RU_KR",
    title: "Republic of Karelia",
    countryId: "RU",
  },
  {
    value: "RU_MO",
    title: "Republic of Mordovia",
    countryId: "RU",
  },
  {
    value: "RU_SE",
    title: "Republic of North Ossetia-Alania",
    countryId: "RU",
  },
  {
    value: "RU_ARK",
    title: "Arkhangelsk",
    countryId: "RU",
  },
  {
    value: "RU_AST",
    title: "Astrakhan Oblast",
    countryId: "RU",
  },
  {
    value: "RU_BEL",
    title: "Belgorod Oblast",
    countryId: "RU",
  },
  {
    value: "RU_BRY",
    title: "Bryansk Oblast",
    countryId: "RU",
  },
  {
    value: "RU_CE",
    title: "Chechen Republic",
    countryId: "RU",
  },
  {
    value: "RU_CHE",
    title: "Chelyabinsk Oblast",
    countryId: "RU",
  },
  {
    value: "RU_CHU",
    title: "Chukotka Autonomous Okrug",
    countryId: "RU",
  },
  {
    value: "RU_CU",
    title: "Chuvash Republic",
    countryId: "RU",
  },
  {
    value: "RU_IRK",
    title: "Irkutsk",
    countryId: "RU",
  },
  {
    value: "RU_IVA",
    title: "Ivanovo Oblast",
    countryId: "RU",
  },
  {
    value: "RU_YEV",
    title: "Jewish Autonomous Oblast",
    countryId: "RU",
  },
  {
    value: "RU_KB",
    title: "Kabardino-Balkar Republic",
    countryId: "RU",
  },
  {
    value: "RU_KGD",
    title: "Kaliningrad",
    countryId: "RU",
  },
  {
    value: "RU_KLU",
    title: "Kaluga Oblast",
    countryId: "RU",
  },
  {
    value: "RU_KAM",
    title: "Kamchatka Krai",
    countryId: "RU",
  },
  {
    value: "RU_KC",
    title: "Karachay-Cherkess Republic",
    countryId: "RU",
  },
  {
    value: "RU_KEM",
    title: "Kemerovo Oblast",
    countryId: "RU",
  },
  {
    value: "RU_KHA",
    title: "Khabarovsk Krai",
    countryId: "RU",
  },
  {
    value: "RU_KHM",
    title: "Khanty-Mansi Autonomous Okrug",
    countryId: "RU",
  },
  {
    value: "RU_KIR",
    title: "Kirov Oblast",
    countryId: "RU",
  },
  {
    value: "RU_KO",
    title: "Komi Republic",
    countryId: "RU",
  },
  {
    value: "RU_KOS",
    title: "Kostroma Oblast",
    countryId: "RU",
  },
  {
    value: "RU_KDA",
    title: "Krasnodar Krai",
    countryId: "RU",
  },
  {
    value: "RU_KYA",
    title: "Krasnoyarsk Krai",
    countryId: "RU",
  },
  {
    value: "RU_KGN",
    title: "Kurgan Oblast",
    countryId: "RU",
  },
  {
    value: "RU_KRS",
    title: "Kursk Oblast",
    countryId: "RU",
  },
  {
    value: "RU_LEN",
    title: "Leningrad Oblast",
    countryId: "RU",
  },
  {
    value: "RU_LIP",
    title: "Lipetsk Oblast",
    countryId: "RU",
  },
  {
    value: "RU_MAG",
    title: "Magadan Oblast",
    countryId: "RU",
  },
  {
    value: "RU_ALT",
    title: "Altai Krai",
    countryId: "RU",
  },
  {
    value: "RU_AL",
    title: "Altai Republic",
    countryId: "RU",
  },
  {
    value: "RU_AMU",
    title: "Amur Oblast",
    countryId: "RU",
  },
  {
    value: "RU_ZAB",
    title: "Zabaykalsky Krai",
    countryId: "RU",
  },
  {
    value: "RU_YAR",
    title: "Yaroslavl Oblast",
    countryId: "RU",
  },
  {
    value: "RU_YAN",
    title: "Yamalo-Nenets Autonomous Okrug",
    countryId: "RU",
  },
  {
    value: "RU_VOR",
    title: "Voronezh Oblast",
    countryId: "RU",
  },
  {
    value: "RU_VLG",
    title: "Vologda Oblast",
    countryId: "RU",
  },
  {
    value: "RU_VGG",
    title: "Volgograd Oblast",
    countryId: "RU",
  },
  {
    value: "RU_VLA",
    title: "Vladimir Oblast",
    countryId: "RU",
  },
  {
    value: "RU_ULY",
    title: "Ulyanovsk Oblast",
    countryId: "RU",
  },
  {
    value: "RU_UD",
    title: "Udmurt Republic",
    countryId: "RU",
  },
  {
    value: "RU_TYU",
    title: "Tyumen Oblast",
    countryId: "RU",
  },
  {
    value: "RU_TVE",
    title: "Tver Oblast",
    countryId: "RU",
  },
  {
    value: "RU_TY",
    title: "Tuva Republic",
    countryId: "RU",
  },
  {
    value: "RU_TUL",
    title: "Tula Oblast",
    countryId: "RU",
  },
  {
    value: "RU_TOM",
    title: "Tomsk Oblast",
    countryId: "RU",
  },
  {
    value: "RU_TAM",
    title: "Tambov Oblast",
    countryId: "RU",
  },
  {
    value: "RU_SVE",
    title: "Sverdlovsk",
    countryId: "RU",
  },
  {
    value: "RU_STA",
    title: "Stavropol Krai",
    countryId: "RU",
  },
  {
    value: "RU_SMO",
    title: "Smolensk Oblast",
    countryId: "RU",
  },
  {
    value: "RU_UA-40",
    title: "Sevastopol",
    countryId: "RU",
  },
  {
    value: "RU_SAR",
    title: "Saratov Oblast",
    countryId: "RU",
  },
  {
    value: "RU_SAM",
    title: "Samara Oblast",
    countryId: "RU",
  },
  {
    value: "RU_SAK",
    title: "Sakhalin",
    countryId: "RU",
  },
  {
    value: "RU_SA",
    title: "Sakha Republic",
    countryId: "RU",
  },
  {
    value: "RU_SPE",
    title: "Saint Petersburg",
    countryId: "RU",
  },
  {
    value: "RU_RYA",
    title: "Ryazan Oblast",
    countryId: "RU",
  },
  {
    value: "RU_ROS",
    title: "Rostov Oblast",
    countryId: "RU",
  },
  {
    value: "RU_TA",
    title: "Republic of Tatarstan",
    countryId: "RU",
  },
  {
    value: "RU_AD",
    title: "Republic of Adygea",
    countryId: "RU",
  },
  {
    value: "RU_BA",
    title: "Republic of Bashkortostan",
    countryId: "RU",
  },
  {
    value: "RU_BU",
    title: "Republic of Buryatia",
    countryId: "RU",
  },
  {
    value: "RU_DA",
    title: "Republic of Dagestan",
    countryId: "RU",
  },
  {
    value: "RU_IN",
    title: "Republic of Ingushetia",
    countryId: "RU",
  },
  {
    value: "RU_KL",
    title: "Republic of Kalmykia",
    countryId: "RU",
  },
  {
    value: "RU_KK",
    title: "Republic of Khakassia",
    countryId: "RU",
  },
  {
    value: "RU_ME",
    title: "Mari El Republic",
    countryId: "RU",
  },
  {
    value: "RU_MOS",
    title: "Moscow Oblast",
    countryId: "RU",
  },
  {
    value: "RU_MUR",
    title: "Murmansk Oblast",
    countryId: "RU",
  },
  {
    value: "RU_NEN",
    title: "Nenets Autonomous Okrug",
    countryId: "RU",
  },
  {
    value: "RU_NIZ",
    title: "Nizhny Novgorod Oblast",
    countryId: "RU",
  },
  {
    value: "RU_NGR",
    title: "Novgorod Oblast",
    countryId: "RU",
  },
  {
    value: "RU_NVS",
    title: "Novosibirsk",
    countryId: "RU",
  },
  {
    value: "RU_OMS",
    title: "Omsk Oblast",
    countryId: "RU",
  },
  {
    value: "RU_ORE",
    title: "Orenburg Oblast",
    countryId: "RU",
  },
  {
    value: "RU_ORL",
    title: "Oryol Oblast",
    countryId: "RU",
  },
  {
    value: "RU_PNZ",
    title: "Penza Oblast",
    countryId: "RU",
  },
  {
    value: "RU_PER",
    title: "Perm Krai",
    countryId: "RU",
  },
  {
    value: "RU_PRI",
    title: "Primorsky Krai",
    countryId: "RU",
  },
  {
    value: "RU_PSK",
    title: "Pskov Oblast",
    countryId: "RU",
  },
  {
    value: "NE_7",
    title: "Zinder Region",
    countryId: "NE",
  },
  {
    value: "NE_6",
    title: "Tillabéri Region",
    countryId: "NE",
  },
  {
    value: "NE_5",
    title: "Tahoua Region",
    countryId: "NE",
  },
  {
    value: "NE_1",
    title: "Agadez Region",
    countryId: "NE",
  },
  {
    value: "NE_4",
    title: "Maradi Region",
    countryId: "NE",
  },
  {
    value: "NE_3",
    title: "Dosso Region",
    countryId: "NE",
  },
  {
    value: "NE_2",
    title: "Diffa Region",
    countryId: "NE",
  },
  {
    value: "NA_KW",
    title: "Kavango West Region",
    countryId: "NA",
  },
  {
    value: "NA_KE",
    title: "Kavango East Region",
    countryId: "NA",
  },
  {
    value: "NA_KA",
    title: "Karas Region",
    countryId: "NA",
  },
  {
    value: "NA_HA",
    title: "Hardap Region",
    countryId: "NA",
  },
  {
    value: "NA_ER",
    title: "Erongo Region",
    countryId: "NA",
  },
  {
    value: "NA_CA",
    title: "Zambezi Region",
    countryId: "NA",
  },
  {
    value: "NA_OD",
    title: "Otjozondjupa Region",
    countryId: "NA",
  },
  {
    value: "NA_OT",
    title: "Oshikoto Region",
    countryId: "NA",
  },
  {
    value: "NA_ON",
    title: "Oshana Region",
    countryId: "NA",
  },
  {
    value: "NA_OS",
    title: "Omusati Region",
    countryId: "NA",
  },
  {
    value: "NA_OH",
    title: "Omaheke Region",
    countryId: "NA",
  },
  {
    value: "NA_OW",
    title: "Ohangwena Region",
    countryId: "NA",
  },
  {
    value: "NA_KU",
    title: "Kunene Region",
    countryId: "NA",
  },
  {
    value: "NA_KH",
    title: "Khomas Region",
    countryId: "NA",
  },
  {
    value: "BD_03",
    title: "Bogra District",
    countryId: "BD",
  },
  {
    value: "BD_57",
    title: "Sherpur District",
    countryId: "BD",
  },
  {
    value: "BD_62",
    title: "Shariatpur District",
    countryId: "BD",
  },
  {
    value: "BD_58",
    title: "Satkhira District",
    countryId: "BD",
  },
  {
    value: "BD_F",
    title: "Rangpur Division",
    countryId: "BD",
  },
  {
    value: "BD_55",
    title: "Rangpur District",
    countryId: "BD",
  },
  {
    value: "BD_56",
    title: "Rangamati Hill District",
    countryId: "BD",
  },
  {
    value: "BD_E",
    title: "Rajshahi Division",
    countryId: "BD",
  },
  {
    value: "BD_54",
    title: "Rajshahi District",
    countryId: "BD",
  },
  {
    value: "BD_53",
    title: "Rajbari District",
    countryId: "BD",
  },
  {
    value: "BD_50",
    title: "Pirojpur District",
    countryId: "BD",
  },
  {
    value: "BD_51",
    title: "Patuakhali District",
    countryId: "BD",
  },
  {
    value: "BD_52",
    title: "Panchagarh District",
    countryId: "BD",
  },
  {
    value: "BD_49",
    title: "Pabna District",
    countryId: "BD",
  },
  {
    value: "BD_47",
    title: "Noakhali District",
    countryId: "BD",
  },
  {
    value: "BD_46",
    title: "Nilphamari District",
    countryId: "BD",
  },
  {
    value: "BD_41",
    title: "Netrokona District",
    countryId: "BD",
  },
  {
    value: "BD_44",
    title: "Natore District",
    countryId: "BD",
  },
  {
    value: "BD_40",
    title: "Narayanganj District",
    countryId: "BD",
  },
  {
    value: "BD_43",
    title: "Narail District",
    countryId: "BD",
  },
  {
    value: "BD_48",
    title: "Naogaon District",
    countryId: "BD",
  },
  {
    value: "BD_H",
    title: "Mymensingh Division",
    countryId: "BD",
  },
  {
    value: "BD_34",
    title: "Mymensingh District",
    countryId: "BD",
  },
  {
    value: "BD_35",
    title: "Munshiganj District",
    countryId: "BD",
  },
  {
    value: "BD_38",
    title: "Moulvibazar District",
    countryId: "BD",
  },
  {
    value: "BD_39",
    title: "Meherpur District",
    countryId: "BD",
  },
  {
    value: "BD_36",
    title: "Madaripur District",
    countryId: "BD",
  },
  {
    value: "BD_32",
    title: "Lalmonirhat District",
    countryId: "BD",
  },
  {
    value: "BD_31",
    title: "Lakshmipur District",
    countryId: "BD",
  },
  {
    value: "BD_30",
    title: "Kushtia District",
    countryId: "BD",
  },
  {
    value: "BD_28",
    title: "Kurigram District",
    countryId: "BD",
  },
  {
    value: "BD_26",
    title: "Kishoreganj District",
    countryId: "BD",
  },
  {
    value: "BD_D",
    title: "Khulna Division",
    countryId: "BD",
  },
  {
    value: "BD_27",
    title: "Khulna District",
    countryId: "BD",
  },
  {
    value: "BD_29",
    title: "Khagrachari District",
    countryId: "BD",
  },
  {
    value: "BD_24",
    title: "Joypurhat District",
    countryId: "BD",
  },
  {
    value: "BD_23",
    title: "Jhenaidah District",
    countryId: "BD",
  },
  {
    value: "BD_25",
    title: "Jhalokati District",
    countryId: "BD",
  },
  {
    value: "BD_22",
    title: "Jessore District",
    countryId: "BD",
  },
  {
    value: "BD_21",
    title: "Jamalpur District",
    countryId: "BD",
  },
  {
    value: "BD_20",
    title: "Habiganj District",
    countryId: "BD",
  },
  {
    value: "BD_17",
    title: "Gopalganj District",
    countryId: "BD",
  },
  {
    value: "BD_18",
    title: "Gazipur District",
    countryId: "BD",
  },
  {
    value: "BD_19",
    title: "Gaibandha District",
    countryId: "BD",
  },
  {
    value: "BD_16",
    title: "Feni District",
    countryId: "BD",
  },
  {
    value: "BD_15",
    title: "Faridpur District",
    countryId: "BD",
  },
  {
    value: "BD_14",
    title: "Dinajpur District",
    countryId: "BD",
  },
  {
    value: "BD_C",
    title: "Dhaka Division",
    countryId: "BD",
  },
  {
    value: "BD_13",
    title: "Dhaka District",
    countryId: "BD",
  },
  {
    value: "BD_11",
    title: "Cox's Bazar District",
    countryId: "BD",
  },
  {
    value: "BD_08",
    title: "Comilla District",
    countryId: "BD",
  },
  {
    value: "BD_12",
    title: "Chuadanga District",
    countryId: "BD",
  },
  {
    value: "BD_B",
    title: "Chittagong Division",
    countryId: "BD",
  },
  {
    value: "BD_10",
    title: "Chittagong District",
    countryId: "BD",
  },
  {
    value: "BD_45",
    title: "Chapai Nawabganj District",
    countryId: "BD",
  },
  {
    value: "BD_09",
    title: "Chandpur District",
    countryId: "BD",
  },
  {
    value: "BD_04",
    title: "Brahmanbaria District",
    countryId: "BD",
  },
  {
    value: "BD_59",
    title: "Sirajganj District",
    countryId: "BD",
  },
  {
    value: "BD_07",
    title: "Bhola District",
    countryId: "BD",
  },
  {
    value: "BD_A",
    title: "Barisal Division",
    countryId: "BD",
  },
  {
    value: "BD_06",
    title: "Barisal District",
    countryId: "BD",
  },
  {
    value: "BD_02",
    title: "Barguna District",
    countryId: "BD",
  },
  {
    value: "BD_01",
    title: "Bandarban District",
    countryId: "BD",
  },
  {
    value: "BD_33",
    title: "Bahadia",
    countryId: "BD",
  },
  {
    value: "BD_05",
    title: "Bagerhat District",
    countryId: "BD",
  },
  {
    value: "BD_64",
    title: "Thakurgaon District",
    countryId: "BD",
  },
  {
    value: "BD_63",
    title: "Tangail District",
    countryId: "BD",
  },
  {
    value: "BD_G",
    title: "Sylhet Division",
    countryId: "BD",
  },
  {
    value: "BD_60",
    title: "Sylhet District",
    countryId: "BD",
  },
  {
    value: "BD_61",
    title: "Sunamganj District",
    countryId: "BD",
  },
  {
    value: "MH_T",
    title: "Ratak Chain",
    countryId: "MH",
  },
  {
    value: "MH_L",
    title: "Ralik Chain",
    countryId: "MH",
  },
  {
    value: "BN_BE",
    title: "Belait District",
    countryId: "BN",
  },
  {
    value: "BN_TU",
    title: "Tutong District",
    countryId: "BN",
  },
  {
    value: "BN_TE",
    title: "Temburong District",
    countryId: "BN",
  },
  {
    value: "BN_BM",
    title: "Brunei-Muara District",
    countryId: "BN",
  },
  {
    value: "UZ_TK",
    title: "Tashkent",
    countryId: "UZ",
  },
  {
    value: "UZ_XO",
    title: "Xorazm Region",
    countryId: "UZ",
  },
  {
    value: "UZ_TO",
    title: "Tashkent Region",
    countryId: "UZ",
  },
  {
    value: "UZ_SU",
    title: "Surxondaryo Region",
    countryId: "UZ",
  },
  {
    value: "UZ_SI",
    title: "Sirdaryo Region",
    countryId: "UZ",
  },
  {
    value: "UZ_SA",
    title: "Samarqand Region",
    countryId: "UZ",
  },
  {
    value: "UZ_QA",
    title: "Qashqadaryo Region",
    countryId: "UZ",
  },
  {
    value: "UZ_NW",
    title: "Navoiy Region",
    countryId: "UZ",
  },
  {
    value: "UZ_NG",
    title: "Namangan Region",
    countryId: "UZ",
  },
  {
    value: "UZ_QR",
    title: "Karakalpakstan",
    countryId: "UZ",
  },
  {
    value: "UZ_JI",
    title: "Jizzakh Region",
    countryId: "UZ",
  },
  {
    value: "UZ_FA",
    title: "Fergana Region",
    countryId: "UZ",
  },
  {
    value: "UZ_BU",
    title: "Bukhara Region",
    countryId: "UZ",
  },
  {
    value: "UZ_AN",
    title: "Andijan Region",
    countryId: "UZ",
  },
  {
    value: "ZW_MS",
    title: "Matabeleland South Province",
    countryId: "ZW",
  },
  {
    value: "ZW_ME",
    title: "Mashonaland East Province",
    countryId: "ZW",
  },
  {
    value: "ZW_MW",
    title: "Mashonaland West Province",
    countryId: "ZW",
  },
  {
    value: "ZW_MV",
    title: "Masvingo Province",
    countryId: "ZW",
  },
  {
    value: "ZW_MN",
    title: "Matabeleland North Province",
    countryId: "ZW",
  },
  {
    value: "ZW_MI",
    title: "Midlands Province",
    countryId: "ZW",
  },
  {
    value: "ZW_BU",
    title: "Bulawayo Province",
    countryId: "ZW",
  },
  {
    value: "ZW_HA",
    title: "Harare Province",
    countryId: "ZW",
  },
  {
    value: "ZW_MA",
    title: "Manicaland",
    countryId: "ZW",
  },
  {
    value: "ZW_MC",
    title: "Mashonaland Central Province",
    countryId: "ZW",
  },
  {
    value: "TO_02",
    title: "Haʻapai",
    countryId: "TO",
  },
  {
    value: "TO_03",
    title: "Niuas",
    countryId: "TO",
  },
  {
    value: "TO_04",
    title: "Tongatapu",
    countryId: "TO",
  },
  {
    value: "TO_05",
    title: "Vavaʻu",
    countryId: "TO",
  },
  {
    value: "CZ_631",
    title: "Havlíčkův Brod",
    countryId: "CZ",
  },
  {
    value: "CZ_645",
    title: "Hodonín",
    countryId: "CZ",
  },
  {
    value: "CZ_521",
    title: "Hradec Králové",
    countryId: "CZ",
  },
  {
    value: "CZ_512",
    title: "Jablonec nad Nisou",
    countryId: "CZ",
  },
  {
    value: "CZ_711",
    title: "Jeseník",
    countryId: "CZ",
  },
  {
    value: "CZ_522",
    title: "Jičín",
    countryId: "CZ",
  },
  {
    value: "CZ_632",
    title: "Jihlava",
    countryId: "CZ",
  },
  {
    value: "CZ_31",
    title: "Jihočeský kraj",
    countryId: "CZ",
  },
  {
    value: "CZ_64",
    title: "Jihomoravský kraj",
    countryId: "CZ",
  },
  {
    value: "CZ_313",
    title: "Jindřichův Hradec",
    countryId: "CZ",
  },
  {
    value: "CZ_41",
    title: "Karlovarský kraj",
    countryId: "CZ",
  },
  {
    value: "CZ_412",
    title: "Karlovy Vary",
    countryId: "CZ",
  },
  {
    value: "CZ_803",
    title: "Karviná",
    countryId: "CZ",
  },
  {
    value: "CZ_203",
    title: "Kladno",
    countryId: "CZ",
  },
  {
    value: "CZ_322",
    title: "Klatovy",
    countryId: "CZ",
  },
  {
    value: "CZ_204",
    title: "Kolín",
    countryId: "CZ",
  },
  {
    value: "CZ_63",
    title: "Kraj Vysočina",
    countryId: "CZ",
  },
  {
    value: "CZ_52",
    title: "Královéhradecký kraj",
    countryId: "CZ",
  },
  {
    value: "CZ_721",
    title: "Kroměříž",
    countryId: "CZ",
  },
  {
    value: "CZ_205",
    title: "Kutná Hora",
    countryId: "CZ",
  },
  {
    value: "CZ_513",
    title: "Liberec",
    countryId: "CZ",
  },
  {
    value: "CZ_51",
    title: "Liberecký kraj",
    countryId: "CZ",
  },
  {
    value: "CZ_423",
    title: "Litoměřice",
    countryId: "CZ",
  },
  {
    value: "CZ_424",
    title: "Louny",
    countryId: "CZ",
  },
  {
    value: "CZ_206",
    title: "Mělník",
    countryId: "CZ",
  },
  {
    value: "CZ_207",
    title: "Mladá Boleslav",
    countryId: "CZ",
  },
  {
    value: "CZ_80",
    title: "Moravskoslezský kraj",
    countryId: "CZ",
  },
  {
    value: "CZ_425",
    title: "Most",
    countryId: "CZ",
  },
  {
    value: "CZ_523",
    title: "Náchod",
    countryId: "CZ",
  },
  {
    value: "CZ_804",
    title: "Nový Jičín",
    countryId: "CZ",
  },
  {
    value: "CZ_208",
    title: "Nymburk",
    countryId: "CZ",
  },
  {
    value: "CZ_712",
    title: "Olomouc",
    countryId: "CZ",
  },
  {
    value: "CZ_71",
    title: "Olomoucký kraj",
    countryId: "CZ",
  },
  {
    value: "CZ_805",
    title: "Opava",
    countryId: "CZ",
  },
  {
    value: "CZ_201",
    title: "Benešov",
    countryId: "CZ",
  },
  {
    value: "CZ_20",
    title: "Středočeský kraj",
    countryId: "CZ",
  },
  {
    value: "CZ_647",
    title: "Znojmo",
    countryId: "CZ",
  },
  {
    value: "CZ_72",
    title: "Zlínský kraj",
    countryId: "CZ",
  },
  {
    value: "CZ_724",
    title: "Zlín",
    countryId: "CZ",
  },
  {
    value: "CZ_635",
    title: "Žďár nad Sázavou",
    countryId: "CZ",
  },
  {
    value: "CZ_646",
    title: "Vyškov",
    countryId: "CZ",
  },
  {
    value: "CZ_723",
    title: "Vsetín",
    countryId: "CZ",
  },
  {
    value: "CZ_534",
    title: "Ústí nad Orlicí",
    countryId: "CZ",
  },
  {
    value: "CZ_427",
    title: "Ústí nad Labem",
    countryId: "CZ",
  },
  {
    value: "CZ_42",
    title: "Ústecký kraj",
    countryId: "CZ",
  },
  {
    value: "CZ_722",
    title: "Uherské Hradiště",
    countryId: "CZ",
  },
  {
    value: "CZ_525",
    title: "Trutnov",
    countryId: "CZ",
  },
  {
    value: "CZ_426",
    title: "Teplice",
    countryId: "CZ",
  },
  {
    value: "CZ_327",
    title: "Tachov",
    countryId: "CZ",
  },
  {
    value: "CZ_317",
    title: "Tábor",
    countryId: "CZ",
  },
  {
    value: "CZ_533",
    title: "Svitavy",
    countryId: "CZ",
  },
  {
    value: "CZ_715",
    title: "Šumperk",
    countryId: "CZ",
  },
  {
    value: "CZ_806",
    title: "Ostrava-město",
    countryId: "CZ",
  },
  {
    value: "CZ_532",
    title: "Pardubice",
    countryId: "CZ",
  },
  {
    value: "CZ_53",
    title: "Pardubický kraj",
    countryId: "CZ",
  },
  {
    value: "CZ_633",
    title: "Pelhřimov",
    countryId: "CZ",
  },
  {
    value: "CZ_314",
    title: "Písek",
    countryId: "CZ",
  },
  {
    value: "CZ_324",
    title: "Plzeň-jih",
    countryId: "CZ",
  },
  {
    value: "CZ_323",
    title: "Plzeň-město",
    countryId: "CZ",
  },
  {
    value: "CZ_325",
    title: "Plzeň-sever",
    countryId: "CZ",
  },
  {
    value: "CZ_32",
    title: "Plzeňský kraj",
    countryId: "CZ",
  },
  {
    value: "CZ_315",
    title: "Prachatice",
    countryId: "CZ",
  },
  {
    value: "CZ_209",
    title: "Praha-východ",
    countryId: "CZ",
  },
  {
    value: "CZ_20A",
    title: "Praha-západ",
    countryId: "CZ",
  },
  {
    value: "CZ_10",
    title: "Praha, Hlavní město",
    countryId: "CZ",
  },
  {
    value: "CZ_714",
    title: "Přerov",
    countryId: "CZ",
  },
  {
    value: "CZ_20B",
    title: "Příbram",
    countryId: "CZ",
  },
  {
    value: "CZ_713",
    title: "Prostějov",
    countryId: "CZ",
  },
  {
    value: "CZ_20C",
    title: "Rakovník",
    countryId: "CZ",
  },
  {
    value: "CZ_326",
    title: "Rokycany",
    countryId: "CZ",
  },
  {
    value: "CZ_524",
    title: "Rychnov nad Kněžnou",
    countryId: "CZ",
  },
  {
    value: "CZ_514",
    title: "Semily",
    countryId: "CZ",
  },
  {
    value: "CZ_413",
    title: "Sokolov",
    countryId: "CZ",
  },
  {
    value: "CZ_202",
    title: "Beroun",
    countryId: "CZ",
  },
  {
    value: "CZ_316",
    title: "Strakonice",
    countryId: "CZ",
  },
  {
    value: "CZ_641",
    title: "Blansko",
    countryId: "CZ",
  },
  {
    value: "CZ_644",
    title: "Břeclav",
    countryId: "CZ",
  },
  {
    value: "CZ_642",
    title: "Brno-město",
    countryId: "CZ",
  },
  {
    value: "CZ_643",
    title: "Brno-venkov",
    countryId: "CZ",
  },
  {
    value: "CZ_801",
    title: "Bruntál",
    countryId: "CZ",
  },
  {
    value: "CZ_511",
    title: "Česká Lípa",
    countryId: "CZ",
  },
  {
    value: "CZ_311",
    title: "České Budějovice",
    countryId: "CZ",
  },
  {
    value: "CZ_312",
    title: "Český Krumlov",
    countryId: "CZ",
  },
  {
    value: "CZ_411",
    title: "Cheb",
    countryId: "CZ",
  },
  {
    value: "CZ_422",
    title: "Chomutov",
    countryId: "CZ",
  },
  {
    value: "CZ_531",
    title: "Chrudim",
    countryId: "CZ",
  },
  {
    value: "CZ_421",
    title: "Děčín",
    countryId: "CZ",
  },
  {
    value: "CZ_321",
    title: "Domažlice",
    countryId: "CZ",
  },
  {
    value: "CZ_802",
    title: "Frýdek-Místek",
    countryId: "CZ",
  },
  {
    value: "HU_CS",
    title: "Csongrád County",
    countryId: "HU",
  },
  {
    value: "HU_BK",
    title: "Bács-Kiskun",
    countryId: "HU",
  },
  {
    value: "HU_BA",
    title: "Baranya",
    countryId: "HU",
  },
  {
    value: "HU_BE",
    title: "Békés",
    countryId: "HU",
  },
  {
    value: "HU_BC",
    title: "Békéscsaba",
    countryId: "HU",
  },
  {
    value: "HU_BZ",
    title: "Borsod-Abaúj-Zemplén",
    countryId: "HU",
  },
  {
    value: "HU_BU",
    title: "Budapest",
    countryId: "HU",
  },
  {
    value: "HU_ZE",
    title: "Zalaegerszeg",
    countryId: "HU",
  },
  {
    value: "HU_ZA",
    title: "Zala County",
    countryId: "HU",
  },
  {
    value: "HU_VE",
    title: "Veszprém County",
    countryId: "HU",
  },
  {
    value: "HU_VM",
    title: "Veszprém",
    countryId: "HU",
  },
  {
    value: "HU_VA",
    title: "Vas County",
    countryId: "HU",
  },
  {
    value: "HU_TO",
    title: "Tolna County",
    countryId: "HU",
  },
  {
    value: "HU_TB",
    title: "Tatabánya",
    countryId: "HU",
  },
  {
    value: "HU_SH",
    title: "Szombathely",
    countryId: "HU",
  },
  {
    value: "HU_SK",
    title: "Szolnok",
    countryId: "HU",
  },
  {
    value: "HU_SS",
    title: "Szekszárd",
    countryId: "HU",
  },
  {
    value: "HU_SF",
    title: "Székesfehérvár",
    countryId: "HU",
  },
  {
    value: "HU_SD",
    title: "Szeged",
    countryId: "HU",
  },
  {
    value: "HU_SZ",
    title: "Szabolcs-Szatmár-Bereg County",
    countryId: "HU",
  },
  {
    value: "HU_SN",
    title: "Sopron",
    countryId: "HU",
  },
  {
    value: "HU_SO",
    title: "Somogy County",
    countryId: "HU",
  },
  {
    value: "HU_PE",
    title: "Pest County",
    countryId: "HU",
  },
  {
    value: "HU_PS",
    title: "Pécs",
    countryId: "HU",
  },
  {
    value: "HU_NY",
    title: "Nyíregyháza",
    countryId: "HU",
  },
  {
    value: "HU_NO",
    title: "Nógrád County",
    countryId: "HU",
  },
  {
    value: "HU_NK",
    title: "Nagykanizsa",
    countryId: "HU",
  },
  {
    value: "HU_MI",
    title: "Miskolc",
    countryId: "HU",
  },
  {
    value: "HU_KE",
    title: "Komárom-Esztergom",
    countryId: "HU",
  },
  {
    value: "HU_KM",
    title: "Kecskemét",
    countryId: "HU",
  },
  {
    value: "HU_KV",
    title: "Kaposvár",
    countryId: "HU",
  },
  {
    value: "HU_JN",
    title: "Jász-Nagykun-Szolnok County",
    countryId: "HU",
  },
  {
    value: "HU_HV",
    title: "Hódmezővásárhely",
    countryId: "HU",
  },
  {
    value: "HU_HE",
    title: "Heves County",
    countryId: "HU",
  },
  {
    value: "HU_HB",
    title: "Hajdú-Bihar County",
    countryId: "HU",
  },
  {
    value: "HU_GS",
    title: "Győr-Moson-Sopron County",
    countryId: "HU",
  },
  {
    value: "HU_GY",
    title: "Győr",
    countryId: "HU",
  },
  {
    value: "HU_FE",
    title: "Fejér County",
    countryId: "HU",
  },
  {
    value: "HU_ER",
    title: "Érd",
    countryId: "HU",
  },
  {
    value: "HU_EG",
    title: "Eger",
    countryId: "HU",
  },
  {
    value: "HU_DU",
    title: "Dunaújváros",
    countryId: "HU",
  },
  {
    value: "HU_DE",
    title: "Debrecen",
    countryId: "HU",
  },
  {
    value: "BZ_CZL",
    title: "Corozal District",
    countryId: "BZ",
  },
  {
    value: "BZ_SC",
    title: "Stann Creek District",
    countryId: "BZ",
  },
  {
    value: "BZ_TOL",
    title: "Toledo District",
    countryId: "BZ",
  },
  {
    value: "BZ_OW",
    title: "Orange Walk District",
    countryId: "BZ",
  },
  {
    value: "BZ_BZ",
    title: "Belize District",
    countryId: "BZ",
  },
  {
    value: "BZ_CY",
    title: "Cayo District",
    countryId: "BZ",
  },
  {
    value: "BB_02",
    title: "Saint Andrew",
    countryId: "BB",
  },
  {
    value: "BB_01",
    title: "Christ Church",
    countryId: "BB",
  },
  {
    value: "BB_05",
    title: "Saint John",
    countryId: "BB",
  },
  {
    value: "BB_06",
    title: "Saint Joseph",
    countryId: "BB",
  },
  {
    value: "BB_07",
    title: "Saint Lucy",
    countryId: "BB",
  },
  {
    value: "BB_04",
    title: "Saint James",
    countryId: "BB",
  },
  {
    value: "BB_08",
    title: "Saint Michael",
    countryId: "BB",
  },
  {
    value: "BB_09",
    title: "Saint Peter",
    countryId: "BB",
  },
  {
    value: "BB_10",
    title: "Saint Philip",
    countryId: "BB",
  },
  {
    value: "BB_11",
    title: "Saint Thomas",
    countryId: "BB",
  },
  {
    value: "BB_03",
    title: "Saint George",
    countryId: "BB",
  },
  {
    value: "MU_RR",
    title: "Rivière du Rempart District",
    countryId: "MU",
  },
  {
    value: "MU_AG",
    title: "Agaléga",
    countryId: "MU",
  },
  {
    value: "MU_BR",
    title: "Beau Bassin-Rose Hill",
    countryId: "MU",
  },
  {
    value: "MU_CC",
    title: "Cargados Carajos",
    countryId: "MU",
  },
  {
    value: "MU_CU",
    title: "Curepipe",
    countryId: "MU",
  },
  {
    value: "MU_FL",
    title: "Flacq District",
    countryId: "MU",
  },
  {
    value: "MU_GP",
    title: "Grand Port District",
    countryId: "MU",
  },
  {
    value: "MU_MO",
    title: "Moka District",
    countryId: "MU",
  },
  {
    value: "MU_PA",
    title: "Pamplemousses District",
    countryId: "MU",
  },
  {
    value: "IT_BR",
    title: "Brindisi",
    countryId: "IT",
  },
  {
    value: "MU_PW",
    title: "Plaines Wilhems District",
    countryId: "MU",
  },
  {
    value: "MU_PU",
    title: "Port Louis",
    countryId: "MU",
  },
  {
    value: "MU_PL",
    title: "Port Louis District",
    countryId: "MU",
  },
  {
    value: "MU_VP",
    title: "Vacoas-Phoenix",
    countryId: "MU",
  },
  {
    value: "MU_SA",
    title: "Savanne District",
    countryId: "MU",
  },
  {
    value: "MU_RO",
    title: "Rodrigues",
    countryId: "MU",
  },
  {
    value: "MU_BL",
    title: "Rivière Noire District",
    countryId: "MU",
  },
  {
    value: "MU_QB",
    title: "Quatre Bornes",
    countryId: "MU",
  },
  {
    value: "CO_NSA",
    title: "Norte de Santander",
    countryId: "CO",
  },
  {
    value: "MM_02",
    title: "Bago",
    countryId: "MM",
  },
  {
    value: "CO_MET",
    title: "Meta",
    countryId: "CO",
  },
  {
    value: "CO_NAR",
    title: "Nariño",
    countryId: "CO",
  },
  {
    value: "CO_PUT",
    title: "Putumayo",
    countryId: "CO",
  },
  {
    value: "CO_QUI",
    title: "Quindío",
    countryId: "CO",
  },
  {
    value: "CO_RIS",
    title: "Risaralda",
    countryId: "CO",
  },
  {
    value: "CO_SAN",
    title: "Santander",
    countryId: "CO",
  },
  {
    value: "CO_VID",
    title: "Vichada",
    countryId: "CO",
  },
  {
    value: "CO_VAU",
    title: "Vaupés",
    countryId: "CO",
  },
  {
    value: "CO_VAC",
    title: "Valle del Cauca",
    countryId: "CO",
  },
  {
    value: "CO_TOL",
    title: "Tolima",
    countryId: "CO",
  },
  {
    value: "CO_SUC",
    title: "Sucre",
    countryId: "CO",
  },
  {
    value: "CO_AMA",
    title: "Amazonas",
    countryId: "CO",
  },
  {
    value: "CO_ANT",
    title: "Antioquia",
    countryId: "CO",
  },
  {
    value: "CO_ARA",
    title: "Arauca",
    countryId: "CO",
  },
  {
    value: "CO_SAP",
    title: "Archipiélago de San Andrés, Providencia y Santa Catalina",
    countryId: "CO",
  },
  {
    value: "CO_ATL",
    title: "Atlántico",
    countryId: "CO",
  },
  {
    value: "CO_DC",
    title: "Bogotá D.C.",
    countryId: "CO",
  },
  {
    value: "CO_BOL",
    title: "Bolívar",
    countryId: "CO",
  },
  {
    value: "CO_BOY",
    title: "Boyacá",
    countryId: "CO",
  },
  {
    value: "CO_CAL",
    title: "Caldas",
    countryId: "CO",
  },
  {
    value: "CO_CAQ",
    title: "Caquetá",
    countryId: "CO",
  },
  {
    value: "CO_CAS",
    title: "Casanare",
    countryId: "CO",
  },
  {
    value: "CO_CAU",
    title: "Cauca",
    countryId: "CO",
  },
  {
    value: "CO_CES",
    title: "Cesar",
    countryId: "CO",
  },
  {
    value: "CO_CHO",
    title: "Chocó",
    countryId: "CO",
  },
  {
    value: "CO_COR",
    title: "Córdoba",
    countryId: "CO",
  },
  {
    value: "CO_CUN",
    title: "Cundinamarca",
    countryId: "CO",
  },
  {
    value: "CO_GUA",
    title: "Guainía",
    countryId: "CO",
  },
  {
    value: "CO_GUV",
    title: "Guaviare",
    countryId: "CO",
  },
  {
    value: "CO_HUI",
    title: "Huila",
    countryId: "CO",
  },
  {
    value: "CO_LAG",
    title: "La Guajira",
    countryId: "CO",
  },
  {
    value: "CO_MAG",
    title: "Magdalena",
    countryId: "CO",
  },
  {
    value: "VC_01",
    title: "Charlotte Parish",
    countryId: "VC",
  },
  {
    value: "VC_05",
    title: "Saint Patrick Parish",
    countryId: "VC",
  },
  {
    value: "VC_04",
    title: "Saint George Parish",
    countryId: "VC",
  },
  {
    value: "VC_03",
    title: "Saint David Parish",
    countryId: "VC",
  },
  {
    value: "VC_02",
    title: "Saint Andrew Parish",
    countryId: "VC",
  },
  {
    value: "VC_06",
    title: "Grenadines Parish",
    countryId: "VC",
  },
  {
    value: "LY_DR",
    title: "Derna District",
    countryId: "LY",
  },
  {
    value: "LY_SB",
    title: "Sabha District",
    countryId: "LY",
  },
  {
    value: "LY_SR",
    title: "Sirte District",
    countryId: "LY",
  },
  {
    value: "LY_TB",
    title: "Tripoli District",
    countryId: "LY",
  },
  {
    value: "LY_WD",
    title: "Wadi al Hayaa District",
    countryId: "LY",
  },
  {
    value: "LY_WS",
    title: "Wadi al Shatii District",
    countryId: "LY",
  },
  {
    value: "LY_ZA",
    title: "Zawiya District",
    countryId: "LY",
  },
  {
    value: "LY_MQ",
    title: "Murzuq District",
    countryId: "LY",
  },
  {
    value: "LY_NL",
    title: "Nalut District",
    countryId: "LY",
  },
  {
    value: "LY_NQ",
    title: "Nuqat al Khams",
    countryId: "LY",
  },
  {
    value: "LY_WA",
    title: "Al Wahat District",
    countryId: "LY",
  },
  {
    value: "LY_BA",
    title: "Benghazi",
    countryId: "LY",
  },
  {
    value: "LY_GT",
    title: "Ghat District",
    countryId: "LY",
  },
  {
    value: "LY_JA",
    title: "Jabal al Akhdar",
    countryId: "LY",
  },
  {
    value: "LY_JG",
    title: "Jabal al Gharbi District",
    countryId: "LY",
  },
  {
    value: "LY_JU",
    title: "Jufra",
    countryId: "LY",
  },
  {
    value: "LY_KF",
    title: "Kufra District",
    countryId: "LY",
  },
  {
    value: "LY_MJ",
    title: "Marj District",
    countryId: "LY",
  },
  {
    value: "LY_MI",
    title: "Misrata District",
    countryId: "LY",
  },
  {
    value: "LY_MB",
    title: "Murqub",
    countryId: "LY",
  },
  {
    value: "GN_TO",
    title: "Tougué Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_TE",
    title: "Télimélé Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_LO",
    title: "Lola Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_ML",
    title: "Mali Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_MC",
    title: "Macenta Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_N",
    title: "Nzérékoré Region",
    countryId: "GN",
  },
  {
    value: "GN_NZ",
    title: "Nzérékoré Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_DU",
    title: "Dubréka Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_DI",
    title: "Dinguiraye Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_DL",
    title: "Dalaba Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_DB",
    title: "Dabola Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_CO",
    title: "Coyah Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_C",
    title: "Conakry",
    countryId: "GN",
  },
  {
    value: "GN_B",
    title: "Boké Region",
    countryId: "GN",
  },
  {
    value: "GN_BK",
    title: "Boké Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_BF",
    title: "Boffa Prefecture",
    countryId: "GN",
  },
  {
    value: "NG_KD",
    title: "Kaduna",
    countryId: "NG",
  },
  {
    value: "GN_BE",
    title: "Beyla Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_MD",
    title: "Mandiana Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_M",
    title: "Mamou Region",
    countryId: "GN",
  },
  {
    value: "GN_KN",
    title: "Koundara Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_KO",
    title: "Kouroussa Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_LA",
    title: "Labé Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_L",
    title: "Labé Region",
    countryId: "GN",
  },
  {
    value: "GN_LE",
    title: "Lélouma Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_KB",
    title: "Koubia Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_KS",
    title: "Kissidougou Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_D",
    title: "Kindia Region",
    countryId: "GN",
  },
  {
    value: "GN_KD",
    title: "Kindia Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_KE",
    title: "Kérouané Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_K",
    title: "Kankan Region",
    countryId: "GN",
  },
  {
    value: "GN_KA",
    title: "Kankan Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_GU",
    title: "Guéckédou Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_GA",
    title: "Gaoual Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_FR",
    title: "Fria Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_FO",
    title: "Forécariah Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_SI",
    title: "Siguiri Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_PI",
    title: "Pita Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_MM",
    title: "Mamou Prefecture",
    countryId: "GN",
  },
  {
    value: "GN_YO",
    title: "Yomou Prefecture",
    countryId: "GN",
  },
  {
    value: "IT_CN",
    title: "Cuneo",
    countryId: "IT",
  },
  {
    value: "IT_CR",
    title: "Cremona",
    countryId: "IT",
  },
  {
    value: "IT_CS",
    title: "Cosenza",
    countryId: "IT",
  },
  {
    value: "IT_CO",
    title: "Como",
    countryId: "IT",
  },
  {
    value: "IT_CH",
    title: "Chieti",
    countryId: "IT",
  },
  {
    value: "IT_CZ",
    title: "Catanzaro",
    countryId: "IT",
  },
  {
    value: "IT_CT",
    title: "Catania",
    countryId: "IT",
  },
  {
    value: "IT_CE",
    title: "Caserta",
    countryId: "IT",
  },
  {
    value: "IT_CB",
    title: "Campobasso",
    countryId: "IT",
  },
  {
    value: "IT_72",
    title: "Campania",
    countryId: "IT",
  },
  {
    value: "IT_CL",
    title: "Caltanissetta",
    countryId: "IT",
  },
  {
    value: "IT_78",
    title: "Calabria",
    countryId: "IT",
  },
  {
    value: "IT_CA",
    title: "Cagliari",
    countryId: "IT",
  },
  {
    value: "IT_BS",
    title: "Brescia",
    countryId: "IT",
  },
  {
    value: "IT_BO",
    title: "Bologna",
    countryId: "IT",
  },
  {
    value: "IT_BI",
    title: "Biella",
    countryId: "IT",
  },
  {
    value: "IT_BG",
    title: "Bergamo",
    countryId: "IT",
  },
  {
    value: "IT_BN",
    title: "Benevento",
    countryId: "IT",
  },
  {
    value: "IT_BL",
    title: "Belluno",
    countryId: "IT",
  },
  {
    value: "IT_77",
    title: "Basilicata",
    countryId: "IT",
  },
  {
    value: "IT_BT",
    title: "Barletta-Andria-Trani",
    countryId: "IT",
  },
  {
    value: "IT_BA",
    title: "Bari",
    countryId: "IT",
  },
  {
    value: "IT_AV",
    title: "Avellino",
    countryId: "IT",
  },
  {
    value: "IT_AT",
    title: "Asti",
    countryId: "IT",
  },
  {
    value: "IT_AP",
    title: "Ascoli Piceno",
    countryId: "IT",
  },
  {
    value: "IT_VT",
    title: "Viterbo",
    countryId: "IT",
  },
  {
    value: "IT_VI",
    title: "Vicenza",
    countryId: "IT",
  },
  {
    value: "IT_VV",
    title: "Vibo Valentia",
    countryId: "IT",
  },
  {
    value: "IT_VR",
    title: "Verona",
    countryId: "IT",
  },
  {
    value: "IT_VB",
    title: "Verbano-Cusio-Ossola",
    countryId: "IT",
  },
  {
    value: "IT_VE",
    title: "Venice",
    countryId: "IT",
  },
  {
    value: "IT_34",
    title: "Veneto",
    countryId: "IT",
  },
  {
    value: "IT_VA",
    title: "Varese",
    countryId: "IT",
  },
  {
    value: "IT_55",
    title: "Umbria",
    countryId: "IT",
  },
  {
    value: "IT_UD",
    title: "Udine",
    countryId: "IT",
  },
  {
    value: "IT_52",
    title: "Tuscany",
    countryId: "IT",
  },
  {
    value: "IT_TO",
    title: "Turin",
    countryId: "IT",
  },
  {
    value: "IT_TS",
    title: "Trieste",
    countryId: "IT",
  },
  {
    value: "IT_TV",
    title: "Treviso",
    countryId: "IT",
  },
  {
    value: "IT_32",
    title: "Trentino-South Tyrol",
    countryId: "IT",
  },
  {
    value: "IT_TN",
    title: "Trentino",
    countryId: "IT",
  },
  {
    value: "IT_TP",
    title: "Trapani",
    countryId: "IT",
  },
  {
    value: "IT_TE",
    title: "Teramo",
    countryId: "IT",
  },
  {
    value: "IT_TA",
    title: "Taranto",
    countryId: "IT",
  },
  {
    value: "IT_BZ",
    title: "South Tyrol",
    countryId: "IT",
  },
  {
    value: "IT_SU",
    title: "South Sardinia",
    countryId: "IT",
  },
  {
    value: "IT_SO",
    title: "Sondrio",
    countryId: "IT",
  },
  {
    value: "IT_SR",
    title: "Siracusa",
    countryId: "IT",
  },
  {
    value: "IT_SI",
    title: "Siena",
    countryId: "IT",
  },
  {
    value: "IT_82",
    title: "Sicily",
    countryId: "IT",
  },
  {
    value: "IT_SV",
    title: "Savona",
    countryId: "IT",
  },
  {
    value: "IT_SS",
    title: "Sassari",
    countryId: "IT",
  },
  {
    value: "IT_88",
    title: "Sardinia",
    countryId: "IT",
  },
  {
    value: "IT_SA",
    title: "Salerno",
    countryId: "IT",
  },
  {
    value: "IT_RO",
    title: "Rovigo",
    countryId: "IT",
  },
  {
    value: "IT_RM",
    title: "Rome",
    countryId: "IT",
  },
  {
    value: "IT_RN",
    title: "Rimini",
    countryId: "IT",
  },
  {
    value: "IT_RI",
    title: "Rieti",
    countryId: "IT",
  },
  {
    value: "IT_RE",
    title: "Reggio Emilia",
    countryId: "IT",
  },
  {
    value: "IT_RC",
    title: "Reggio Calabria",
    countryId: "IT",
  },
  {
    value: "IT_RA",
    title: "Ravenna",
    countryId: "IT",
  },
  {
    value: "IT_RG",
    title: "Ragusa",
    countryId: "IT",
  },
  {
    value: "IT_PO",
    title: "Prato",
    countryId: "IT",
  },
  {
    value: "IT_PZ",
    title: "Potenza",
    countryId: "IT",
  },
  {
    value: "IT_PN",
    title: "Pordenone",
    countryId: "IT",
  },
  {
    value: "IT_PT",
    title: "Pistoia",
    countryId: "IT",
  },
  {
    value: "IT_PI",
    title: "Pisa",
    countryId: "IT",
  },
  {
    value: "IT_21",
    title: "Piedmont",
    countryId: "IT",
  },
  {
    value: "IT_PC",
    title: "Piacenza",
    countryId: "IT",
  },
  {
    value: "IT_PE",
    title: "Pescara",
    countryId: "IT",
  },
  {
    value: "IT_PU",
    title: "Pesaro and Urbino",
    countryId: "IT",
  },
  {
    value: "IT_PG",
    title: "Perugia",
    countryId: "IT",
  },
  {
    value: "IT_PV",
    title: "Pavia",
    countryId: "IT",
  },
  {
    value: "IT_PR",
    title: "Parma",
    countryId: "IT",
  },
  {
    value: "IT_PA",
    title: "Palermo",
    countryId: "IT",
  },
  {
    value: "IT_PD",
    title: "Padua",
    countryId: "IT",
  },
  {
    value: "IT_OR",
    title: "Oristano",
    countryId: "IT",
  },
  {
    value: "IT_NU",
    title: "Nuoro",
    countryId: "IT",
  },
  {
    value: "IT_NO",
    title: "Novara",
    countryId: "IT",
  },
  {
    value: "IT_NA",
    title: "Naples",
    countryId: "IT",
  },
  {
    value: "IT_MB",
    title: "Monza and Brianza",
    countryId: "IT",
  },
  {
    value: "IT_67",
    title: "Molise",
    countryId: "IT",
  },
  {
    value: "IT_MO",
    title: "Modena",
    countryId: "IT",
  },
  {
    value: "IT_MI",
    title: "Milan",
    countryId: "IT",
  },
  {
    value: "IT_ME",
    title: "Messina",
    countryId: "IT",
  },
  {
    value: "IT_VS",
    title: "Medio Campidano",
    countryId: "IT",
  },
  {
    value: "IT_MT",
    title: "Matera",
    countryId: "IT",
  },
  {
    value: "IT_MS",
    title: "Massa and Carrara",
    countryId: "IT",
  },
  {
    value: "IT_57",
    title: "Marche",
    countryId: "IT",
  },
  {
    value: "IT_MN",
    title: "Mantua",
    countryId: "IT",
  },
  {
    value: "IT_MC",
    title: "Macerata",
    countryId: "IT",
  },
  {
    value: "IT_LU",
    title: "Lucca",
    countryId: "IT",
  },
  {
    value: "IT_25",
    title: "Lombardy",
    countryId: "IT",
  },
  {
    value: "IT_LO",
    title: "Lodi",
    countryId: "IT",
  },
  {
    value: "IT_LI",
    title: "Livorno",
    countryId: "IT",
  },
  {
    value: "IT_42",
    title: "Liguria",
    countryId: "IT",
  },
  {
    value: "IT_LC",
    title: "Lecco",
    countryId: "IT",
  },
  {
    value: "IT_LE",
    title: "Lecce",
    countryId: "IT",
  },
  {
    value: "IT_62",
    title: "Lazio",
    countryId: "IT",
  },
  {
    value: "IT_LT",
    title: "Latina",
    countryId: "IT",
  },
  {
    value: "IT_SP",
    title: "La Spezia",
    countryId: "IT",
  },
  {
    value: "IT_AQ",
    title: "L'Aquila",
    countryId: "IT",
  },
  {
    value: "IT_IS",
    title: "Isernia",
    countryId: "IT",
  },
  {
    value: "IT_IM",
    title: "Imperia",
    countryId: "IT",
  },
  {
    value: "IT_65",
    title: "Abruzzo",
    countryId: "IT",
  },
  {
    value: "IT_AG",
    title: "Agrigento",
    countryId: "IT",
  },
  {
    value: "IT_AL",
    title: "Alessandria",
    countryId: "IT",
  },
  {
    value: "IT_AN",
    title: "Ancona",
    countryId: "IT",
  },
  {
    value: "IT_23",
    title: "Aosta Valley",
    countryId: "IT",
  },
  {
    value: "IT_75",
    title: "Apulia",
    countryId: "IT",
  },
  {
    value: "IT_GR",
    title: "Grosseto",
    countryId: "IT",
  },
  {
    value: "IT_GO",
    title: "Gorizia",
    countryId: "IT",
  },
  {
    value: "IT_GE",
    title: "Genoa",
    countryId: "IT",
  },
  {
    value: "IT_FR",
    title: "Frosinone",
    countryId: "IT",
  },
  {
    value: "IT_36",
    title: "Friuli–Venezia Giulia",
    countryId: "IT",
  },
  {
    value: "IT_FC",
    title: "Forlì-Cesena",
    countryId: "IT",
  },
  {
    value: "IT_FG",
    title: "Foggia",
    countryId: "IT",
  },
  {
    value: "IT_FI",
    title: "Florence",
    countryId: "IT",
  },
  {
    value: "IT_FE",
    title: "Ferrara",
    countryId: "IT",
  },
  {
    value: "IT_FM",
    title: "Fermo",
    countryId: "IT",
  },
  {
    value: "IT_EN",
    title: "Enna",
    countryId: "IT",
  },
  {
    value: "IT_45",
    title: "Emilia-Romagna",
    countryId: "IT",
  },
  {
    value: "IT_KR",
    title: "Crotone",
    countryId: "IT",
  },
  {
    value: "IQ_SD",
    title: "Saladin Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_SU",
    title: "Sulaymaniyah Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_WA",
    title: "Wasit Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_DQ",
    title: "Dhi Qar Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_BA",
    title: "Basra Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_BG",
    title: "Baghdad Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_KI",
    title: "Kirkuk Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_KA",
    title: "Karbala Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_AR",
    title: "Erbil Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_BB",
    title: "Babylon Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_QA",
    title: "Al-Qādisiyyah Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_MU",
    title: "Al Muthanna Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_AN",
    title: "Al Anbar Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_MA",
    title: "Maysan Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_NA",
    title: "Najaf Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_NI",
    title: "Nineveh Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_DA",
    title: "Dohuk Governorate",
    countryId: "IQ",
  },
  {
    value: "IQ_DI",
    title: "Diyala Governorate",
    countryId: "IQ",
  },
  {
    value: "TR_16",
    title: "Bursa",
    countryId: "TR",
  },
  {
    value: "TR_17",
    title: "Çanakkale",
    countryId: "TR",
  },
  {
    value: "TR_18",
    title: "Çankırı",
    countryId: "TR",
  },
  {
    value: "TR_75",
    title: "Ardahan",
    countryId: "TR",
  },
  {
    value: "TR_67",
    title: "Zonguldak",
    countryId: "TR",
  },
  {
    value: "TR_66",
    title: "Yozgat",
    countryId: "TR",
  },
  {
    value: "TR_77",
    title: "Yalova",
    countryId: "TR",
  },
  {
    value: "TR_30",
    title: "Hakkâri",
    countryId: "TR",
  },
  {
    value: "TR_03",
    title: "Afyonkarahisar",
    countryId: "TR",
  },
  {
    value: "TR_04",
    title: "Ağrı",
    countryId: "TR",
  },
  {
    value: "TR_68",
    title: "Aksaray",
    countryId: "TR",
  },
  {
    value: "TR_05",
    title: "Amasya",
    countryId: "TR",
  },
  {
    value: "TR_06",
    title: "Ankara",
    countryId: "TR",
  },
  {
    value: "TR_07",
    title: "Antalya",
    countryId: "TR",
  },
  {
    value: "TR_08",
    title: "Artvin",
    countryId: "TR",
  },
  {
    value: "TR_09",
    title: "Aydın",
    countryId: "TR",
  },
  {
    value: "TR_10",
    title: "Balıkesir",
    countryId: "TR",
  },
  {
    value: "TR_74",
    title: "Bartın",
    countryId: "TR",
  },
  {
    value: "TR_72",
    title: "Batman",
    countryId: "TR",
  },
  {
    value: "TR_69",
    title: "Bayburt",
    countryId: "TR",
  },
  {
    value: "TR_11",
    title: "Bilecik",
    countryId: "TR",
  },
  {
    value: "TR_12",
    title: "Bingöl",
    countryId: "TR",
  },
  {
    value: "TR_13",
    title: "Bitlis",
    countryId: "TR",
  },
  {
    value: "TR_14",
    title: "Bolu",
    countryId: "TR",
  },
  {
    value: "TR_15",
    title: "Burdur",
    countryId: "TR",
  },
  {
    value: "TR_40",
    title: "Kırşehir",
    countryId: "TR",
  },
  {
    value: "TR_39",
    title: "Kırklareli",
    countryId: "TR",
  },
  {
    value: "TR_19",
    title: "Çorum",
    countryId: "TR",
  },
  {
    value: "TR_20",
    title: "Denizli",
    countryId: "TR",
  },
  {
    value: "TR_21",
    title: "Diyarbakır",
    countryId: "TR",
  },
  {
    value: "TR_81",
    title: "Düzce",
    countryId: "TR",
  },
  {
    value: "TR_22",
    title: "Edirne",
    countryId: "TR",
  },
  {
    value: "TR_23",
    title: "Elazığ",
    countryId: "TR",
  },
  {
    value: "TR_24",
    title: "Erzincan",
    countryId: "TR",
  },
  {
    value: "TR_25",
    title: "Erzurum",
    countryId: "TR",
  },
  {
    value: "TR_26",
    title: "Eskişehir",
    countryId: "TR",
  },
  {
    value: "TR_27",
    title: "Gaziantep",
    countryId: "TR",
  },
  {
    value: "TR_28",
    title: "Giresun",
    countryId: "TR",
  },
  {
    value: "TR_29",
    title: "Gümüşhane",
    countryId: "TR",
  },
  {
    value: "TR_71",
    title: "Kırıkkale",
    countryId: "TR",
  },
  {
    value: "TR_31",
    title: "Hatay",
    countryId: "TR",
  },
  {
    value: "TR_76",
    title: "Iğdır",
    countryId: "TR",
  },
  {
    value: "TR_32",
    title: "Isparta",
    countryId: "TR",
  },
  {
    value: "TR_34",
    title: "Istanbul",
    countryId: "TR",
  },
  {
    value: "TR_35",
    title: "İzmir",
    countryId: "TR",
  },
  {
    value: "TR_46",
    title: "Kahramanmaraş",
    countryId: "TR",
  },
  {
    value: "TR_78",
    title: "Karabük",
    countryId: "TR",
  },
  {
    value: "TR_70",
    title: "Karaman",
    countryId: "TR",
  },
  {
    value: "TR_36",
    title: "Kars",
    countryId: "TR",
  },
  {
    value: "TR_37",
    title: "Kastamonu",
    countryId: "TR",
  },
  {
    value: "TR_38",
    title: "Kayseri",
    countryId: "TR",
  },
  {
    value: "TR_79",
    title: "Kilis",
    countryId: "TR",
  },
  {
    value: "TR_01",
    title: "Adana",
    countryId: "TR",
  },
  {
    value: "TR_02",
    title: "Adıyaman",
    countryId: "TR",
  },
  {
    value: "TR_65",
    title: "Van",
    countryId: "TR",
  },
  {
    value: "TR_64",
    title: "Uşak",
    countryId: "TR",
  },
  {
    value: "TR_62",
    title: "Tunceli",
    countryId: "TR",
  },
  {
    value: "TR_61",
    title: "Trabzon",
    countryId: "TR",
  },
  {
    value: "TR_60",
    title: "Tokat",
    countryId: "TR",
  },
  {
    value: "TR_59",
    title: "Tekirdağ",
    countryId: "TR",
  },
  {
    value: "TR_73",
    title: "Şırnak",
    countryId: "TR",
  },
  {
    value: "TR_58",
    title: "Sivas",
    countryId: "TR",
  },
  {
    value: "TR_57",
    title: "Sinop",
    countryId: "TR",
  },
  {
    value: "TR_56",
    title: "Siirt",
    countryId: "TR",
  },
  {
    value: "TR_63",
    title: "Şanlıurfa",
    countryId: "TR",
  },
  {
    value: "TR_55",
    title: "Samsun",
    countryId: "TR",
  },
  {
    value: "TR_54",
    title: "Sakarya",
    countryId: "TR",
  },
  {
    value: "TR_53",
    title: "Rize",
    countryId: "TR",
  },
  {
    value: "TR_80",
    title: "Osmaniye",
    countryId: "TR",
  },
  {
    value: "TR_52",
    title: "Ordu",
    countryId: "TR",
  },
  {
    value: "TR_51",
    title: "Niğde",
    countryId: "TR",
  },
  {
    value: "TR_50",
    title: "Nevşehir",
    countryId: "TR",
  },
  {
    value: "TR_49",
    title: "Muş",
    countryId: "TR",
  },
  {
    value: "TR_48",
    title: "Muğla",
    countryId: "TR",
  },
  {
    value: "TR_33",
    title: "Mersin",
    countryId: "TR",
  },
  {
    value: "TR_47",
    title: "Mardin",
    countryId: "TR",
  },
  {
    value: "TR_45",
    title: "Manisa",
    countryId: "TR",
  },
  {
    value: "TR_44",
    title: "Malatya",
    countryId: "TR",
  },
  {
    value: "TR_43",
    title: "Kütahya",
    countryId: "TR",
  },
  {
    value: "TR_42",
    title: "Konya",
    countryId: "TR",
  },
  {
    value: "TR_41",
    title: "Kocaeli",
    countryId: "TR",
  },
  {
    value: "NI_AS",
    title: "South Caribbean Coast",
    countryId: "NI",
  },
  {
    value: "NI_CO",
    title: "Chontales",
    countryId: "NI",
  },
  {
    value: "NI_ES",
    title: "Estelí",
    countryId: "NI",
  },
  {
    value: "NI_GR",
    title: "Granada",
    countryId: "NI",
  },
  {
    value: "NI_JI",
    title: "Jinotega",
    countryId: "NI",
  },
  {
    value: "NI_LE",
    title: "León",
    countryId: "NI",
  },
  {
    value: "NI_MD",
    title: "Madriz",
    countryId: "NI",
  },
  {
    value: "NI_MN",
    title: "Managua",
    countryId: "NI",
  },
  {
    value: "NI_MS",
    title: "Masaya",
    countryId: "NI",
  },
  {
    value: "NI_MT",
    title: "Matagalpa",
    countryId: "NI",
  },
  {
    value: "NI_AN",
    title: "North Caribbean Coast",
    countryId: "NI",
  },
  {
    value: "NI_NS",
    title: "Nueva Segovia",
    countryId: "NI",
  },
  {
    value: "NI_SJ",
    title: "Río San Juan",
    countryId: "NI",
  },
  {
    value: "NI_BO",
    title: "Boaco",
    countryId: "NI",
  },
  {
    value: "NI_RI",
    title: "Rivas",
    countryId: "NI",
  },
  {
    value: "NI_CA",
    title: "Carazo",
    countryId: "NI",
  },
  {
    value: "FM_PNI",
    title: "Pohnpei State",
    countryId: "FM",
  },
  {
    value: "FM_KSA",
    title: "Kosrae State",
    countryId: "FM",
  },
  {
    value: "FM_TRK",
    title: "Chuuk State",
    countryId: "FM",
  },
  {
    value: "FM_YAP",
    title: "Yap State",
    countryId: "FM",
  },
  {
    value: "SK_NI",
    title: "Nitra Region",
    countryId: "SK",
  },
  {
    value: "SK_KI",
    title: "Košice Region",
    countryId: "SK",
  },
  {
    value: "SK_BL",
    title: "Bratislava Region",
    countryId: "SK",
  },
  {
    value: "SK_BC",
    title: "Banská Bystrica Region",
    countryId: "SK",
  },
  {
    value: "SK_TC",
    title: "Trenčín Region",
    countryId: "SK",
  },
  {
    value: "SK_TA",
    title: "Trnava Region",
    countryId: "SK",
  },
  {
    value: "SK_ZI",
    title: "Žilina Region",
    countryId: "SK",
  },
  {
    value: "SK_PV",
    title: "Prešov Region",
    countryId: "SK",
  },
  {
    value: "CD_LO",
    title: "Lomami",
    countryId: "CD",
  },
  {
    value: "CD_BU",
    title: "Bas-Uélé",
    countryId: "CD",
  },
  {
    value: "CD_EQ",
    title: "Équateur",
    countryId: "CD",
  },
  {
    value: "CD_HK",
    title: "Haut-Katanga",
    countryId: "CD",
  },
  {
    value: "CD_HL",
    title: "Haut-Lomami",
    countryId: "CD",
  },
  {
    value: "CD_HU",
    title: "Haut-Uélé",
    countryId: "CD",
  },
  {
    value: "CD_IT",
    title: "Ituri",
    countryId: "CD",
  },
  {
    value: "CD_KS",
    title: "Kasaï",
    countryId: "CD",
  },
  {
    value: "CD_KC",
    title: "Kasaï Central",
    countryId: "CD",
  },
  {
    value: "CD_KE",
    title: "Kasaï Oriental",
    countryId: "CD",
  },
  {
    value: "CD_KN",
    title: "Kinshasa",
    countryId: "CD",
  },
  {
    value: "CD_BC",
    title: "Kongo Central",
    countryId: "CD",
  },
  {
    value: "CD_KG",
    title: "Kwango",
    countryId: "CD",
  },
  {
    value: "CD_KL",
    title: "Kwilu",
    countryId: "CD",
  },
  {
    value: "CD_LU",
    title: "Lualaba",
    countryId: "CD",
  },
  {
    value: "CD_MN",
    title: "Mai-Ndombe",
    countryId: "CD",
  },
  {
    value: "CD_MA",
    title: "Maniema",
    countryId: "CD",
  },
  {
    value: "CD_MO",
    title: "Mongala",
    countryId: "CD",
  },
  {
    value: "CD_NK",
    title: "Nord-Kivu",
    countryId: "CD",
  },
  {
    value: "CD_NU",
    title: "Nord-Ubangi",
    countryId: "CD",
  },
  {
    value: "CD_SA",
    title: "Sankuru",
    countryId: "CD",
  },
  {
    value: "CD_SK",
    title: "Sud-Kivu",
    countryId: "CD",
  },
  {
    value: "CD_SU",
    title: "Sud-Ubangi",
    countryId: "CD",
  },
  {
    value: "CD_TA",
    title: "Tanganyika",
    countryId: "CD",
  },
  {
    value: "CD_TO",
    title: "Tshopo",
    countryId: "CD",
  },
  {
    value: "CD_TU",
    title: "Tshuapa",
    countryId: "CD",
  },
  {
    value: "PE_LAM",
    title: "Lambayeque",
    countryId: "PE",
  },
  {
    value: "PE_LIM",
    title: "Lima",
    countryId: "PE",
  },
  {
    value: "PE_LOR",
    title: "Loreto",
    countryId: "PE",
  },
  {
    value: "PE_MDD",
    title: "Madre de Dios",
    countryId: "PE",
  },
  {
    value: "PE_MOQ",
    title: "Moquegua",
    countryId: "PE",
  },
  {
    value: "PE_PAS",
    title: "Pasco",
    countryId: "PE",
  },
  {
    value: "PE_PIU",
    title: "Piura",
    countryId: "PE",
  },
  {
    value: "PE_UCA",
    title: "Ucayali",
    countryId: "PE",
  },
  {
    value: "PE_TUM",
    title: "Tumbes",
    countryId: "PE",
  },
  {
    value: "PE_TAC",
    title: "Tacna",
    countryId: "PE",
  },
  {
    value: "PE_SAM",
    title: "San Martín",
    countryId: "PE",
  },
  {
    value: "PE_PUN",
    title: "Puno",
    countryId: "PE",
  },
  {
    value: "PE_AMA",
    title: "Amazonas",
    countryId: "PE",
  },
  {
    value: "PE_ANC",
    title: "Áncash",
    countryId: "PE",
  },
  {
    value: "PE_APU",
    title: "Apurímac",
    countryId: "PE",
  },
  {
    value: "PE_ARE",
    title: "Arequipa",
    countryId: "PE",
  },
  {
    value: "PE_AYA",
    title: "Ayacucho",
    countryId: "PE",
  },
  {
    value: "PE_CAJ",
    title: "Cajamarca",
    countryId: "PE",
  },
  {
    value: "PE_CAL",
    title: "Callao",
    countryId: "PE",
  },
  {
    value: "PE_CUS",
    title: "Cusco",
    countryId: "PE",
  },
  {
    value: "PE_HUV",
    title: "Huancavelica",
    countryId: "PE",
  },
  {
    value: "PE_HUC",
    title: "Huanuco",
    countryId: "PE",
  },
  {
    value: "PE_ICA",
    title: "Ica",
    countryId: "PE",
  },
  {
    value: "PE_JUN",
    title: "Junín",
    countryId: "PE",
  },
  {
    value: "PE_LAL",
    title: "La Libertad",
    countryId: "PE",
  },
  {
    value: "PL_ZP",
    title: "West Pomeranian Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_MZ",
    title: "Masovian Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_LD",
    title: "Łódź Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_LB",
    title: "Lubusz Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_LU",
    title: "Lublin Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_DS",
    title: "Lower Silesian Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_MA",
    title: "Lesser Poland Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_KP",
    title: "Kuyavian-Pomeranian Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_WP",
    title: "Greater Poland Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_WN",
    title: "Warmian-Masurian Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_SK",
    title: "Świętokrzyskie Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_SL",
    title: "Silesian Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_PM",
    title: "Pomeranian Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_PD",
    title: "Podlaskie Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_PK",
    title: "Podkarpackie Voivodeship",
    countryId: "PL",
  },
  {
    value: "PL_OP",
    title: "Opole Voivodeship",
    countryId: "PL",
  },
  {
    value: "TL_BA",
    title: "Baucau Municipality",
    countryId: "TL",
  },
  {
    value: "TL_AL",
    title: "Aileu municipality",
    countryId: "TL",
  },
  {
    value: "TL_VI",
    title: "Viqueque Municipality",
    countryId: "TL",
  },
  {
    value: "TL_MF",
    title: "Manufahi Municipality",
    countryId: "TL",
  },
  {
    value: "TL_MT",
    title: "Manatuto District",
    countryId: "TL",
  },
  {
    value: "TL_LI",
    title: "Liquiçá Municipality",
    countryId: "TL",
  },
  {
    value: "TL_LA",
    title: "Lautém Municipality",
    countryId: "TL",
  },
  {
    value: "TL_ER",
    title: "Ermera District",
    countryId: "TL",
  },
  {
    value: "TL_BO",
    title: "Bobonaro Municipality",
    countryId: "TL",
  },
  {
    value: "TL_CO",
    title: "Cova Lima Municipality",
    countryId: "TL",
  },
  {
    value: "TL_AN",
    title: "Ainaro Municipality",
    countryId: "TL",
  },
  {
    value: "TL_DI",
    title: "Dili municipality",
    countryId: "TL",
  },
  {
    value: "MR_07",
    title: "Adrar",
    countryId: "MR",
  },
  {
    value: "MR_03",
    title: "Assaba",
    countryId: "MR",
  },
  {
    value: "MR_05",
    title: "Brakna",
    countryId: "MR",
  },
  {
    value: "MR_08",
    title: "Dakhlet Nouadhibou",
    countryId: "MR",
  },
  {
    value: "MR_04",
    title: "Gorgol",
    countryId: "MR",
  },
  {
    value: "MR_10",
    title: "Guidimaka",
    countryId: "MR",
  },
  {
    value: "MR_01",
    title: "Hodh Ech Chargui",
    countryId: "MR",
  },
  {
    value: "MR_02",
    title: "Hodh El Gharbi",
    countryId: "MR",
  },
  {
    value: "MR_12",
    title: "Inchiri",
    countryId: "MR",
  },
  {
    value: "MR_14",
    title: "Nouakchott-Nord",
    countryId: "MR",
  },
  {
    value: "MR_13",
    title: "Nouakchott-Ouest",
    countryId: "MR",
  },
  {
    value: "MR_15",
    title: "Nouakchott-Sud",
    countryId: "MR",
  },
  {
    value: "MR_09",
    title: "Tagant",
    countryId: "MR",
  },
  {
    value: "MR_11",
    title: "Tiris Zemmour",
    countryId: "MR",
  },
  {
    value: "MR_06",
    title: "Trarza",
    countryId: "MR",
  },
  {
    value: "TD_LR",
    title: "Logone Oriental Region",
    countryId: "TD",
  },
  {
    value: "TD_MA",
    title: "Mandoul Region",
    countryId: "TD",
  },
  {
    value: "TD_ME",
    title: "Mayo-Kebbi Est Region",
    countryId: "TD",
  },
  {
    value: "TD_MO",
    title: "Mayo-Kebbi Ouest Region",
    countryId: "TD",
  },
  {
    value: "TD_EN",
    title: "Ennedi Region",
    countryId: "TD",
  },
  {
    value: "TD_BG",
    title: "Bahr el Gazel",
    countryId: "TD",
  },
  {
    value: "TD_EO",
    title: "Ennedi-Ouest",
    countryId: "TD",
  },
  {
    value: "TD_EE",
    title: "Ennedi-Est",
    countryId: "TD",
  },
  {
    value: "TD_GR",
    title: "Guéra Region",
    countryId: "TD",
  },
  {
    value: "TD_HL",
    title: "Hadjer-Lamis",
    countryId: "TD",
  },
  {
    value: "TD_KA",
    title: "Kanem Region",
    countryId: "TD",
  },
  {
    value: "TD_LC",
    title: "Lac Region",
    countryId: "TD",
  },
  {
    value: "TD_LO",
    title: "Logone Occidental Region",
    countryId: "TD",
  },
  {
    value: "TD_BA",
    title: "Batha Region",
    countryId: "TD",
  },
  {
    value: "TD_BO",
    title: "Borkou",
    countryId: "TD",
  },
  {
    value: "TD_MC",
    title: "Moyen-Chari Region",
    countryId: "TD",
  },
  {
    value: "TD_WF",
    title: "Wadi Fira Region",
    countryId: "TD",
  },
  {
    value: "TD_TI",
    title: "Tibesti Region",
    countryId: "TD",
  },
  {
    value: "TD_TA",
    title: "Tandjilé Region",
    countryId: "TD",
  },
  {
    value: "TD_SI",
    title: "Sila Region",
    countryId: "TD",
  },
  {
    value: "TD_SA",
    title: "Salamat Region",
    countryId: "TD",
  },
  {
    value: "TD_OD",
    title: "Ouaddaï Region",
    countryId: "TD",
  },
  {
    value: "TD_ND",
    title: "N'Djamena",
    countryId: "TD",
  },
  {
    value: "AF_GHO",
    title: "Ghōr",
    countryId: "AF",
  },
  {
    value: "AF_GHA",
    title: "Ghazni",
    countryId: "AF",
  },
  {
    value: "AF_FYB",
    title: "Faryab",
    countryId: "AF",
  },
  {
    value: "AF_FRA",
    title: "Farah",
    countryId: "AF",
  },
  {
    value: "AF_DAY",
    title: "Daykundi",
    countryId: "AF",
  },
  {
    value: "AF_BAM",
    title: "Bamyan",
    countryId: "AF",
  },
  {
    value: "AF_BAL",
    title: "Balkh",
    countryId: "AF",
  },
  {
    value: "AF_BGL",
    title: "Baghlan",
    countryId: "AF",
  },
  {
    value: "AF_BDG",
    title: "Badghis",
    countryId: "AF",
  },
  {
    value: "AF_LAG",
    title: "Laghman",
    countryId: "AF",
  },
  {
    value: "AF_ZAB",
    title: "Zabul",
    countryId: "AF",
  },
  {
    value: "AF_URU",
    title: "Urozgan",
    countryId: "AF",
  },
  {
    value: "AF_TAK",
    title: "Takhar",
    countryId: "AF",
  },
  {
    value: "AF_SAR",
    title: "Sar-e Pol",
    countryId: "AF",
  },
  {
    value: "AF_SAM",
    title: "Samangan",
    countryId: "AF",
  },
  {
    value: "AF_PAR",
    title: "Parwan",
    countryId: "AF",
  },
  {
    value: "AF_PAN",
    title: "Panjshir",
    countryId: "AF",
  },
  {
    value: "AF_PKA",
    title: "Paktika",
    countryId: "AF",
  },
  {
    value: "AF_PIA",
    title: "Paktia",
    countryId: "AF",
  },
  {
    value: "AF_NUR",
    title: "Nuristan",
    countryId: "AF",
  },
  {
    value: "AF_NIM",
    title: "Nimruz",
    countryId: "AF",
  },
  {
    value: "AF_NAN",
    title: "Nangarhar",
    countryId: "AF",
  },
  {
    value: "AF_LOG",
    title: "Logar",
    countryId: "AF",
  },
  {
    value: "AF_KDZ",
    title: "Kunduz Province",
    countryId: "AF",
  },
  {
    value: "AF_KNR",
    title: "Kunar",
    countryId: "AF",
  },
  {
    value: "AF_KHO",
    title: "Khost",
    countryId: "AF",
  },
  {
    value: "AF_KAP",
    title: "Kapisa",
    countryId: "AF",
  },
  {
    value: "AF_KAN",
    title: "Kandahar",
    countryId: "AF",
  },
  {
    value: "AF_KAB",
    title: "Kabul",
    countryId: "AF",
  },
  {
    value: "AF_JOW",
    title: "Jowzjan",
    countryId: "AF",
  },
  {
    value: "AF_HER",
    title: "Herat",
    countryId: "AF",
  },
  {
    value: "AF_HEL",
    title: "Helmand",
    countryId: "AF",
  },
  {
    value: "AF_BDS",
    title: "Badakhshan",
    countryId: "AF",
  },
  {
    value: "PK_JK",
    title: "Azad Kashmir",
    countryId: "PK",
  },
  {
    value: "PK_BA",
    title: "Balochistan",
    countryId: "PK",
  },
  {
    value: "PK_TA",
    title: "Federally Administered Tribal Areas",
    countryId: "PK",
  },
  {
    value: "PK_GB",
    title: "Gilgit-Baltistan",
    countryId: "PK",
  },
  {
    value: "PK_IS",
    title: "Islamabad Capital Territory",
    countryId: "PK",
  },
  {
    value: "PK_KP",
    title: "Khyber Pakhtunkhwa",
    countryId: "PK",
  },
  {
    value: "PK_PB",
    title: "Punjab",
    countryId: "PK",
  },
  {
    value: "PK_SD",
    title: "Sindh",
    countryId: "PK",
  },
  {
    value: "BS_CO",
    title: "Central Abaco",
    countryId: "BS",
  },
  {
    value: "BS_CS",
    title: "Central Andros",
    countryId: "BS",
  },
  {
    value: "BS_CE",
    title: "Central Eleuthera",
    countryId: "BS",
  },
  {
    value: "BS_CK",
    title: "Crooked Island",
    countryId: "BS",
  },
  {
    value: "BS_EG",
    title: "East Grand Bahama",
    countryId: "BS",
  },
  {
    value: "BS_EX",
    title: "Exuma",
    countryId: "BS",
  },
  {
    value: "BS_FP",
    title: "Freeport",
    countryId: "BS",
  },
  {
    value: "BS_FC",
    title: "Fresh Creek",
    countryId: "BS",
  },
  {
    value: "BS_GH",
    title: "Governor's Harbour",
    countryId: "BS",
  },
  {
    value: "BS_GC",
    title: "Grand Cay",
    countryId: "BS",
  },
  {
    value: "BS_GT",
    title: "Green Turtle Cay",
    countryId: "BS",
  },
  {
    value: "BS_HI",
    title: "Harbour Island",
    countryId: "BS",
  },
  {
    value: "BS_HR",
    title: "High Rock",
    countryId: "BS",
  },
  {
    value: "BS_HT",
    title: "Hope Town",
    countryId: "BS",
  },
  {
    value: "BS_IN",
    title: "Inagua",
    countryId: "BS",
  },
  {
    value: "BS_KB",
    title: "Kemps Bay",
    countryId: "BS",
  },
  {
    value: "BS_LI",
    title: "Long Island",
    countryId: "BS",
  },
  {
    value: "BS_MC",
    title: "Mangrove Cay",
    countryId: "BS",
  },
  {
    value: "BS_MH",
    title: "Marsh Harbour",
    countryId: "BS",
  },
  {
    value: "BS_MG",
    title: "Mayaguana District",
    countryId: "BS",
  },
  {
    value: "BS_NP",
    title: "New Providence",
    countryId: "BS",
  },
  {
    value: "BS_NB",
    title: "Nichollstown and Berry Islands",
    countryId: "BS",
  },
  {
    value: "BS_NO",
    title: "North Abaco",
    countryId: "BS",
  },
  {
    value: "BS_NS",
    title: "North Andros",
    countryId: "BS",
  },
  {
    value: "BS_NE",
    title: "North Eleuthera",
    countryId: "BS",
  },
  {
    value: "BS_RI",
    title: "Ragged Island",
    countryId: "BS",
  },
  {
    value: "BS_RS",
    title: "Rock Sound",
    countryId: "BS",
  },
  {
    value: "BS_RC",
    title: "Rum Cay District",
    countryId: "BS",
  },
  {
    value: "BS_SR",
    title: "San Salvador and Rum Cay",
    countryId: "BS",
  },
  {
    value: "BS_SS",
    title: "San Salvador Island",
    countryId: "BS",
  },
  {
    value: "BS_SP",
    title: "Sandy Point",
    countryId: "BS",
  },
  {
    value: "BS_SO",
    title: "South Abaco",
    countryId: "BS",
  },
  {
    value: "BS_SA",
    title: "South Andros",
    countryId: "BS",
  },
  {
    value: "BS_BI",
    title: "Bimini",
    countryId: "BS",
  },
  {
    value: "BS_BY",
    title: "Berry Islands",
    countryId: "BS",
  },
  {
    value: "BS_AC",
    title: "Acklins and Crooked Islands",
    countryId: "BS",
  },
  {
    value: "BS_AK",
    title: "Acklins",
    countryId: "BS",
  },
  {
    value: "BS_SE",
    title: "South Eleuthera",
    countryId: "BS",
  },
  {
    value: "BS_SW",
    title: "Spanish Wells",
    countryId: "BS",
  },
  {
    value: "WS_AA",
    title: "A'ana",
    countryId: "WS",
  },
  {
    value: "BS_WG",
    title: "West Grand Bahama",
    countryId: "BS",
  },
  {
    value: "BS_BP",
    title: "Black Point",
    countryId: "BS",
  },
  {
    value: "BT_45",
    title: "Samdrup Jongkhar District",
    countryId: "BT",
  },
  {
    value: "BT_34",
    title: "Zhemgang District",
    countryId: "BT",
  },
  {
    value: "BT_24",
    title: "Wangdue Phodrang District",
    countryId: "BT",
  },
  {
    value: "BT_21",
    title: "Tsirang District",
    countryId: "BT",
  },
  {
    value: "BT_32",
    title: "Trongsa District",
    countryId: "BT",
  },
  {
    value: "BT_41",
    title: "Trashigang District",
    countryId: "BT",
  },
  {
    value: "BT_15",
    title: "Thimphu District",
    countryId: "BT",
  },
  {
    value: "BT_31",
    title: "Sarpang District",
    countryId: "BT",
  },
  {
    value: "BT_14",
    title: "Samtse District",
    countryId: "BT",
  },
  {
    value: "BT_23",
    title: "Punakha District",
    countryId: "BT",
  },
  {
    value: "BT_43",
    title: "Pemagatshel District",
    countryId: "BT",
  },
  {
    value: "BT_11",
    title: "Paro District",
    countryId: "BT",
  },
  {
    value: "BT_42",
    title: "Mongar District",
    countryId: "BT",
  },
  {
    value: "BT_44",
    title: "Lhuntse District",
    countryId: "BT",
  },
  {
    value: "BT_13",
    title: "Haa District",
    countryId: "BT",
  },
  {
    value: "BT_GA",
    title: "Gasa District",
    countryId: "BT",
  },
  {
    value: "BT_22",
    title: "Dagana District",
    countryId: "BT",
  },
  {
    value: "BT_12",
    title: "Chukha District",
    countryId: "BT",
  },
  {
    value: "BT_33",
    title: "Bumthang District",
    countryId: "BT",
  },
  {
    value: "IR_19",
    title: "Zanjan",
    countryId: "IR",
  },
  {
    value: "IR_17",
    title: "Kohgiluyeh and Boyer-Ahmad",
    countryId: "IR",
  },
  {
    value: "IR_21",
    title: "Yazd",
    countryId: "IR",
  },
  {
    value: "IR_06",
    title: "Khuzestan",
    countryId: "IR",
  },
  {
    value: "IR_05",
    title: "Kermanshah",
    countryId: "IR",
  },
  {
    value: "IR_08",
    title: "Kerman",
    countryId: "IR",
  },
  {
    value: "IR_10",
    title: "Isfahan",
    countryId: "IR",
  },
  {
    value: "IR_16",
    title: "Ilam",
    countryId: "IR",
  },
  {
    value: "IR_22",
    title: "Hormozgan",
    countryId: "IR",
  },
  {
    value: "IR_13",
    title: "Hamadan",
    countryId: "IR",
  },
  {
    value: "IR_27",
    title: "Golestan",
    countryId: "IR",
  },
  {
    value: "IR_01",
    title: "Gilan",
    countryId: "IR",
  },
  {
    value: "IR_07",
    title: "Fars",
    countryId: "IR",
  },
  {
    value: "IR_03",
    title: "East Azerbaijan",
    countryId: "IR",
  },
  {
    value: "IR_14",
    title: "Chaharmahal and Bakhtiari",
    countryId: "IR",
  },
  {
    value: "IR_18",
    title: "Bushehr",
    countryId: "IR",
  },
  {
    value: "IR_24",
    title: "Ardabil",
    countryId: "IR",
  },
  {
    value: "IR_30",
    title: "Alborz",
    countryId: "IR",
  },
  {
    value: "IR_04",
    title: "West Azarbaijan",
    countryId: "IR",
  },
  {
    value: "IR_23",
    title: "Tehran",
    countryId: "IR",
  },
  {
    value: "IR_29",
    title: "South Khorasan",
    countryId: "IR",
  },
  {
    value: "IR_11",
    title: "Sistan and Baluchestan",
    countryId: "IR",
  },
  {
    value: "IR_20",
    title: "Semnan",
    countryId: "IR",
  },
  {
    value: "IR_09",
    title: "Razavi Khorasan",
    countryId: "IR",
  },
  {
    value: "IR_25",
    title: "Qom",
    countryId: "IR",
  },
  {
    value: "IR_26",
    title: "Qazvin",
    countryId: "IR",
  },
  {
    value: "IR_28",
    title: "North Khorasan",
    countryId: "IR",
  },
  {
    value: "IR_02",
    title: "Mazandaran",
    countryId: "IR",
  },
  {
    value: "IR_00",
    title: "Markazi",
    countryId: "IR",
  },
  {
    value: "IR_15",
    title: "Lorestan",
    countryId: "IR",
  },
  {
    value: "IR_12",
    title: "Kurdistan",
    countryId: "IR",
  },
  {
    value: "GR_04",
    title: "Euboea",
    countryId: "GR",
  },
  {
    value: "GR_13",
    title: "Achaea Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_01",
    title: "Aetolia-Acarnania Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_12",
    title: "Arcadia Prefecture",
    countryId: "GR",
  },
  {
    value: "GR_11",
    title: "Argolis Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_I",
    title: "Attica Region",
    countryId: "GR",
  },
  {
    value: "GR_03",
    title: "Boeotia Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_H",
    title: "Central Greece Region",
    countryId: "GR",
  },
  {
    value: "GR_B",
    title: "Central Macedonia",
    countryId: "GR",
  },
  {
    value: "GR_94",
    title: "Chania Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_22",
    title: "Corfu Prefecture",
    countryId: "GR",
  },
  {
    value: "GR_15",
    title: "Corinthia Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_M",
    title: "Crete Region",
    countryId: "GR",
  },
  {
    value: "GR_52",
    title: "Drama Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_A2",
    title: "East Attica Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_A",
    title: "East Macedonia and Thrace",
    countryId: "GR",
  },
  {
    value: "GR_D",
    title: "Epirus Region",
    countryId: "GR",
  },
  {
    value: "GR_51",
    title: "Grevena Prefecture",
    countryId: "GR",
  },
  {
    value: "GR_53",
    title: "Imathia Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_33",
    title: "Ioannina Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_F",
    title: "Ionian Islands Region",
    countryId: "GR",
  },
  {
    value: "GR_41",
    title: "Karditsa Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_56",
    title: "Kastoria Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_23",
    title: "Kefalonia Prefecture",
    countryId: "GR",
  },
  {
    value: "GR_57",
    title: "Kilkis Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_58",
    title: "Kozani Prefecture",
    countryId: "GR",
  },
  {
    value: "GR_16",
    title: "Laconia",
    countryId: "GR",
  },
  {
    value: "GR_42",
    title: "Larissa Prefecture",
    countryId: "GR",
  },
  {
    value: "GR_24",
    title: "Lefkada Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_59",
    title: "Pella Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_J",
    title: "Peloponnese Region",
    countryId: "GR",
  },
  {
    value: "GR_06",
    title: "Phthiotis Prefecture",
    countryId: "GR",
  },
  {
    value: "GR_34",
    title: "Preveza Prefecture",
    countryId: "GR",
  },
  {
    value: "GR_62",
    title: "Serres Prefecture",
    countryId: "GR",
  },
  {
    value: "GR_L",
    title: "South Aegean",
    countryId: "GR",
  },
  {
    value: "GR_54",
    title: "Thessaloniki Regional Unit",
    countryId: "GR",
  },
  {
    value: "GR_G",
    title: "West Greece Region",
    countryId: "GR",
  },
  {
    value: "GR_C",
    title: "West Macedonia Region",
    countryId: "GR",
  },
  {
    value: "NZ_TKI",
    title: "Taranaki Region",
    countryId: "NZ",
  },
  {
    value: "NZ_CIT",
    title: "Chatham Islands",
    countryId: "NZ",
  },
  {
    value: "NZ_CAN",
    title: "Canterbury Region",
    countryId: "NZ",
  },
  {
    value: "NZ_BOP",
    title: "Bay of Plenty Region",
    countryId: "NZ",
  },
  {
    value: "NZ_AUK",
    title: "Auckland Region",
    countryId: "NZ",
  },
  {
    value: "NZ_WKO",
    title: "Waikato Region",
    countryId: "NZ",
  },
  {
    value: "NZ_WGN",
    title: "Wellington Region",
    countryId: "NZ",
  },
  {
    value: "NZ_WTC",
    title: "West Coast Region",
    countryId: "NZ",
  },
  {
    value: "NZ_TAS",
    title: "Tasman District",
    countryId: "NZ",
  },
  {
    value: "NZ_HKB",
    title: "Hawke's Bay Region",
    countryId: "NZ",
  },
  {
    value: "NZ_MWT",
    title: "Manawatu-Wanganui Region",
    countryId: "NZ",
  },
  {
    value: "NZ_MBH",
    title: "Marlborough Region",
    countryId: "NZ",
  },
  {
    value: "NZ_NSN",
    title: "Nelson Region",
    countryId: "NZ",
  },
  {
    value: "NZ_NTL",
    title: "Northland Region",
    countryId: "NZ",
  },
  {
    value: "NZ_OTA",
    title: "Otago Region",
    countryId: "NZ",
  },
  {
    value: "NZ_STL",
    title: "Southland Region",
    countryId: "NZ",
  },
  {
    value: "NZ_GIS",
    title: "Gisborne District",
    countryId: "NZ",
  },
  {
    value: "LR_RG",
    title: "River Gee County",
    countryId: "LR",
  },
  {
    value: "LR_GG",
    title: "Grand Gedeh County",
    countryId: "LR",
  },
  {
    value: "LR_GK",
    title: "Grand Kru County",
    countryId: "LR",
  },
  {
    value: "LR_LO",
    title: "Lofa County",
    countryId: "LR",
  },
  {
    value: "LR_MG",
    title: "Margibi County",
    countryId: "LR",
  },
  {
    value: "LR_MY",
    title: "Maryland County",
    countryId: "LR",
  },
  {
    value: "LR_MO",
    title: "Montserrado County",
    countryId: "LR",
  },
  {
    value: "LR_BM",
    title: "Bomi County",
    countryId: "LR",
  },
  {
    value: "LR_BG",
    title: "Bong County",
    countryId: "LR",
  },
  {
    value: "LR_GP",
    title: "Gbarpolu County",
    countryId: "LR",
  },
  {
    value: "LR_GB",
    title: "Grand Bassa County",
    countryId: "LR",
  },
  {
    value: "LR_CM",
    title: "Grand Cape Mount County",
    countryId: "LR",
  },
  {
    value: "LR_NI",
    title: "Nimba",
    countryId: "LR",
  },
  {
    value: "LR_RI",
    title: "River Cess County",
    countryId: "LR",
  },
  {
    value: "LR_SI",
    title: "Sinoe County",
    countryId: "LR",
  },
  {
    value: "LA_PH",
    title: "Phongsaly Province",
    countryId: "LA",
  },
  {
    value: "LA_AT",
    title: "Attapeu Province",
    countryId: "LA",
  },
  {
    value: "LA_BK",
    title: "Bokeo Province",
    countryId: "LA",
  },
  {
    value: "LA_BL",
    title: "Bolikhamsai Province",
    countryId: "LA",
  },
  {
    value: "LA_CH",
    title: "Champasak Province",
    countryId: "LA",
  },
  {
    value: "LA_HO",
    title: "Houaphanh Province",
    countryId: "LA",
  },
  {
    value: "LA_KH",
    title: "Khammouane Province",
    countryId: "LA",
  },
  {
    value: "LA_LM",
    title: "Luang Namtha Province",
    countryId: "LA",
  },
  {
    value: "LA_XA",
    title: "Sainyabuli Province",
    countryId: "LA",
  },
  {
    value: "LA_VT",
    title: "Vientiane Prefecture",
    countryId: "LA",
  },
  {
    value: "LA_SL",
    title: "Salavan Province",
    countryId: "LA",
  },
  {
    value: "LA_SV",
    title: "Savannakhet Province",
    countryId: "LA",
  },
  {
    value: "LA_XE",
    title: "Sekong Province",
    countryId: "LA",
  },
  {
    value: "LA_LP",
    title: "Luang Prabang Province",
    countryId: "LA",
  },
  {
    value: "LA_VI",
    title: "Vientiane Province",
    countryId: "LA",
  },
  {
    value: "LA_XN",
    title: "Xaisomboun",
    countryId: "LA",
  },
  {
    value: "LA_XS",
    title: "Xaisomboun Province",
    countryId: "LA",
  },
  {
    value: "LA_XI",
    title: "Xiangkhouang Province",
    countryId: "LA",
  },
  {
    value: "LA_OU",
    title: "Oudomxay Province",
    countryId: "LA",
  },
  {
    value: "EE_78",
    title: "Tartu County",
    countryId: "EE",
  },
  {
    value: "EE_37",
    title: "Harju County",
    countryId: "EE",
  },
  {
    value: "EE_39",
    title: "Hiiu County",
    countryId: "EE",
  },
  {
    value: "EE_44",
    title: "Ida-Viru County",
    countryId: "EE",
  },
  {
    value: "EE_51",
    title: "Järva County",
    countryId: "EE",
  },
  {
    value: "EE_49",
    title: "Jõgeva County",
    countryId: "EE",
  },
  {
    value: "EE_57",
    title: "Lääne County",
    countryId: "EE",
  },
  {
    value: "EE_86",
    title: "Võru County",
    countryId: "EE",
  },
  {
    value: "EE_59",
    title: "Lääne-Viru County",
    countryId: "EE",
  },
  {
    value: "EE_67",
    title: "Pärnu County",
    countryId: "EE",
  },
  {
    value: "EE_65",
    title: "Põlva County",
    countryId: "EE",
  },
  {
    value: "EE_70",
    title: "Rapla County",
    countryId: "EE",
  },
  {
    value: "EE_84",
    title: "Viljandi County",
    countryId: "EE",
  },
  {
    value: "EE_82",
    title: "Valga County",
    countryId: "EE",
  },
  {
    value: "EE_74",
    title: "Saare County",
    countryId: "EE",
  },
  {
    value: "EG_FYM",
    title: "Faiyum",
    countryId: "EG",
  },
  {
    value: "EG_ALX",
    title: "Alexandria",
    countryId: "EG",
  },
  {
    value: "EG_ASN",
    title: "Aswan",
    countryId: "EG",
  },
  {
    value: "EG_AST",
    title: "Asyut",
    countryId: "EG",
  },
  {
    value: "EG_BH",
    title: "Beheira",
    countryId: "EG",
  },
  {
    value: "EG_BNS",
    title: "Beni Suef",
    countryId: "EG",
  },
  {
    value: "EG_C",
    title: "Cairo",
    countryId: "EG",
  },
  {
    value: "EG_DK",
    title: "Dakahlia",
    countryId: "EG",
  },
  {
    value: "EG_DT",
    title: "Damietta",
    countryId: "EG",
  },
  {
    value: "EG_GH",
    title: "Gharbia",
    countryId: "EG",
  },
  {
    value: "EG_GZ",
    title: "Giza",
    countryId: "EG",
  },
  {
    value: "EG_IS",
    title: "Ismailia",
    countryId: "EG",
  },
  {
    value: "EG_KFS",
    title: "Kafr el-Sheikh",
    countryId: "EG",
  },
  {
    value: "EG_LX",
    title: "Luxor",
    countryId: "EG",
  },
  {
    value: "EG_MT",
    title: "Matrouh",
    countryId: "EG",
  },
  {
    value: "EG_MN",
    title: "Minya",
    countryId: "EG",
  },
  {
    value: "EG_MNF",
    title: "Monufia",
    countryId: "EG",
  },
  {
    value: "EG_WAD",
    title: "New Valley",
    countryId: "EG",
  },
  {
    value: "EG_SIN",
    title: "North Sinai",
    countryId: "EG",
  },
  {
    value: "EG_PTS",
    title: "Port Said",
    countryId: "EG",
  },
  {
    value: "EG_KB",
    title: "Qalyubia",
    countryId: "EG",
  },
  {
    value: "EG_KN",
    title: "Qena",
    countryId: "EG",
  },
  {
    value: "EG_BA",
    title: "Red Sea",
    countryId: "EG",
  },
  {
    value: "EG_SHR",
    title: "Sharqia",
    countryId: "EG",
  },
  {
    value: "EG_SHG",
    title: "Sohag",
    countryId: "EG",
  },
  {
    value: "EG_JS",
    title: "South Sinai",
    countryId: "EG",
  },
  {
    value: "EG_SUZ",
    title: "Suez",
    countryId: "EG",
  },
  {
    value: "GD_01",
    title: "Saint Andrew Parish",
    countryId: "GD",
  },
  {
    value: "GD_02",
    title: "Saint David Parish",
    countryId: "GD",
  },
  {
    value: "GD_03",
    title: "Saint George Parish",
    countryId: "GD",
  },
  {
    value: "GD_04",
    title: "Saint John Parish",
    countryId: "GD",
  },
  {
    value: "GD_05",
    title: "Saint Mark Parish",
    countryId: "GD",
  },
  {
    value: "GD_10",
    title: "Carriacou and Petite Martinique",
    countryId: "GD",
  },
  {
    value: "GD_06",
    title: "Saint Patrick Parish",
    countryId: "GD",
  },
  {
    value: "VU_TOB",
    title: "Torba",
    countryId: "VU",
  },
  {
    value: "VU_MAP",
    title: "Malampa",
    countryId: "VU",
  },
  {
    value: "VU_PAM",
    title: "Penama",
    countryId: "VU",
  },
  {
    value: "VU_SAM",
    title: "Sanma",
    countryId: "VU",
  },
  {
    value: "VU_SEE",
    title: "Shefa",
    countryId: "VU",
  },
  {
    value: "VU_TAE",
    title: "Tafea",
    countryId: "VU",
  },
  {
    value: "XK_XKM",
    title: "Kosovska Mitrovica District",
    countryId: "XK",
  },
  {
    value: "XK_XGJ",
    title: "Gjilan District",
    countryId: "XK",
  },
  {
    value: "XK_XPI",
    title: "Pristina (Priştine)",
    countryId: "XK",
  },
  {
    value: "XK_XPR",
    title: "Prizren District",
    countryId: "XK",
  },
  {
    value: "XK_XUF",
    title: "Uroševac District (Ferizaj)",
    countryId: "XK",
  },
  {
    value: "XK_XDG",
    title: "Đakovica District (Gjakove)",
    countryId: "XK",
  },
  {
    value: "XK_XPE",
    title: "Peć District",
    countryId: "XK",
  },
  {
    value: "KE_32",
    title: "Nandi",
    countryId: "KE",
  },
  {
    value: "KE_33",
    title: "Narok",
    countryId: "KE",
  },
  {
    value: "KE_34",
    title: "Nyamira",
    countryId: "KE",
  },
  {
    value: "KE_35",
    title: "Nyandarua",
    countryId: "KE",
  },
  {
    value: "KE_36",
    title: "Nyeri",
    countryId: "KE",
  },
  {
    value: "KE_37",
    title: "Samburu",
    countryId: "KE",
  },
  {
    value: "KE_38",
    title: "Siaya",
    countryId: "KE",
  },
  {
    value: "KE_39",
    title: "Taita–Taveta",
    countryId: "KE",
  },
  {
    value: "KE_40",
    title: "Tana River",
    countryId: "KE",
  },
  {
    value: "KE_41",
    title: "Tharaka-Nithi",
    countryId: "KE",
  },
  {
    value: "KE_42",
    title: "Trans Nzoia",
    countryId: "KE",
  },
  {
    value: "KE_43",
    title: "Turkana",
    countryId: "KE",
  },
  {
    value: "KE_44",
    title: "Uasin Gishu",
    countryId: "KE",
  },
  {
    value: "KE_45",
    title: "Vihiga",
    countryId: "KE",
  },
  {
    value: "KE_46",
    title: "Wajir",
    countryId: "KE",
  },
  {
    value: "KE_47",
    title: "West Pokot",
    countryId: "KE",
  },
  {
    value: "KE_13",
    title: "Kiambu",
    countryId: "KE",
  },
  {
    value: "KE_22",
    title: "Machakos",
    countryId: "KE",
  },
  {
    value: "KE_23",
    title: "Makueni",
    countryId: "KE",
  },
  {
    value: "KE_24",
    title: "Mandera",
    countryId: "KE",
  },
  {
    value: "KE_25",
    title: "Marsabit",
    countryId: "KE",
  },
  {
    value: "KE_26",
    title: "Meru",
    countryId: "KE",
  },
  {
    value: "KE_16",
    title: "Kisii",
    countryId: "KE",
  },
  {
    value: "KE_17",
    title: "Kisumu",
    countryId: "KE",
  },
  {
    value: "KE_18",
    title: "Kitui",
    countryId: "KE",
  },
  {
    value: "KE_27",
    title: "Migori",
    countryId: "KE",
  },
  {
    value: "KE_28",
    title: "Mombasa",
    countryId: "KE",
  },
  {
    value: "KE_29",
    title: "Murang'a",
    countryId: "KE",
  },
  {
    value: "KE_30",
    title: "Nairobi City",
    countryId: "KE",
  },
  {
    value: "KE_31",
    title: "Nakuru",
    countryId: "KE",
  },
  {
    value: "KE_15",
    title: "Kirinyaga",
    countryId: "KE",
  },
  {
    value: "KE_14",
    title: "Kilifi",
    countryId: "KE",
  },
  {
    value: "KE_21",
    title: "Lamu",
    countryId: "KE",
  },
  {
    value: "KE_12",
    title: "Kericho",
    countryId: "KE",
  },
  {
    value: "KE_11",
    title: "Kakamega",
    countryId: "KE",
  },
  {
    value: "KE_10",
    title: "Kajiado",
    countryId: "KE",
  },
  {
    value: "KE_09",
    title: "Isiolo",
    countryId: "KE",
  },
  {
    value: "KE_08",
    title: "Homa Bay",
    countryId: "KE",
  },
  {
    value: "KE_07",
    title: "Garissa",
    countryId: "KE",
  },
  {
    value: "KE_01",
    title: "Baringo",
    countryId: "KE",
  },
  {
    value: "KE_02",
    title: "Bomet",
    countryId: "KE",
  },
  {
    value: "KE_03",
    title: "Bungoma",
    countryId: "KE",
  },
  {
    value: "KE_04",
    title: "Busia",
    countryId: "KE",
  },
  {
    value: "KE_05",
    title: "Elgeyo-Marakwet",
    countryId: "KE",
  },
  {
    value: "KE_06",
    title: "Embu",
    countryId: "KE",
  },
  {
    value: "KE_19",
    title: "Kwale",
    countryId: "KE",
  },
  {
    value: "KE_20",
    title: "Laikipia",
    countryId: "KE",
  },
  {
    value: "AG_06",
    title: "Saint Paul Parish",
    countryId: "AG",
  },
  {
    value: "AG_05",
    title: "Saint Mary Parish",
    countryId: "AG",
  },
  {
    value: "AG_04",
    title: "Saint John Parish",
    countryId: "AG",
  },
  {
    value: "AG_10",
    title: "Barbuda",
    countryId: "AG",
  },
  {
    value: "AG_03",
    title: "Saint George Parish",
    countryId: "AG",
  },
  {
    value: "AG_11",
    title: "Redonda",
    countryId: "AG",
  },
  {
    value: "AG_08",
    title: "Saint Philip Parish",
    countryId: "AG",
  },
  {
    value: "AG_07",
    title: "Saint Peter Parish",
    countryId: "AG",
  },
  {
    value: "KG_Y",
    title: "Issyk-Kul Region",
    countryId: "KG",
  },
  {
    value: "KG_C",
    title: "Chuy Region",
    countryId: "KG",
  },
  {
    value: "KG_J",
    title: "Jalal-Abad Region",
    countryId: "KG",
  },
  {
    value: "KG_N",
    title: "Naryn Region",
    countryId: "KG",
  },
  {
    value: "KG_GO",
    title: "Osh",
    countryId: "KG",
  },
  {
    value: "KG_O",
    title: "Osh Region",
    countryId: "KG",
  },
  {
    value: "KG_T",
    title: "Talas Region",
    countryId: "KG",
  },
  {
    value: "KG_GB",
    title: "Bishkek",
    countryId: "KG",
  },
  {
    value: "KG_B",
    title: "Batken Region",
    countryId: "KG",
  },
  {
    value: "LC_08",
    title: "Micoud Quarter",
    countryId: "LC",
  },
  {
    value: "LC_01",
    title: "Anse la Raye Quarter",
    countryId: "LC",
  },
  {
    value: "LC_12",
    title: "Canaries",
    countryId: "LC",
  },
  {
    value: "LC_02",
    title: "Castries Quarter",
    countryId: "LC",
  },
  {
    value: "LC_03",
    title: "Choiseul Quarter",
    countryId: "LC",
  },
  {
    value: "LC_04",
    title: "Dauphin Quarter",
    countryId: "LC",
  },
  {
    value: "LC_05",
    title: "Dennery Quarter",
    countryId: "LC",
  },
  {
    value: "LC_06",
    title: "Gros Islet Quarter",
    countryId: "LC",
  },
  {
    value: "LC_07",
    title: "Laborie Quarter",
    countryId: "LC",
  },
  {
    value: "LC_09",
    title: "Praslin Quarter",
    countryId: "LC",
  },
  {
    value: "LC_10",
    title: "Soufrière Quarter",
    countryId: "LC",
  },
  {
    value: "LC_11",
    title: "Vieux Fort Quarter",
    countryId: "LC",
  },
  {
    value: "BQ_BQ1",
    title: "Bonaire",
    countryId: "BQ",
  },
  {
    value: "BQ_BQ3",
    title: "Sint Eustatius",
    countryId: "BQ",
  },
  {
    value: "BQ_BQ2",
    title: "Saba",
    countryId: "BQ",
  },
  {
    value: "FJ_14",
    title: "Tailevu",
    countryId: "FJ",
  },
  {
    value: "FJ_W",
    title: "Western Division",
    countryId: "FJ",
  },
  {
    value: "FJ_12",
    title: "Rewa",
    countryId: "FJ",
  },
  {
    value: "FJ_11",
    title: "Ra",
    countryId: "FJ",
  },
  {
    value: "FJ_N",
    title: "Northern Division",
    countryId: "FJ",
  },
  {
    value: "FJ_10",
    title: "Namosi",
    countryId: "FJ",
  },
  {
    value: "FJ_09",
    title: "Naitasiri",
    countryId: "FJ",
  },
  {
    value: "FJ_08",
    title: "Nadroga-Navosa",
    countryId: "FJ",
  },
  {
    value: "FJ_07",
    title: "Macuata",
    countryId: "FJ",
  },
  {
    value: "FJ_06",
    title: "Lomaiviti",
    countryId: "FJ",
  },
  {
    value: "FJ_05",
    title: "Lau",
    countryId: "FJ",
  },
  {
    value: "FJ_01",
    title: "Ba",
    countryId: "FJ",
  },
  {
    value: "FJ_02",
    title: "Bua",
    countryId: "FJ",
  },
  {
    value: "FJ_03",
    title: "Cakaudrove",
    countryId: "FJ",
  },
  {
    value: "FJ_C",
    title: "Central Division",
    countryId: "FJ",
  },
  {
    value: "FJ_04",
    title: "Kadavu",
    countryId: "FJ",
  },
  {
    value: "FJ_E",
    title: "Eastern Division",
    countryId: "FJ",
  },
  {
    value: "FJ_R",
    title: "Rotuma",
    countryId: "FJ",
  },
  {
    value: "FJ_13",
    title: "Serua",
    countryId: "FJ",
  },
  {
    value: "MT_39",
    title: "Paola",
    countryId: "MT",
  },
  {
    value: "MT_01",
    title: "Attard",
    countryId: "MT",
  },
  {
    value: "MT_02",
    title: "Balzan",
    countryId: "MT",
  },
  {
    value: "MT_03",
    title: "Birgu",
    countryId: "MT",
  },
  {
    value: "MT_04",
    title: "Birkirkara",
    countryId: "MT",
  },
  {
    value: "MT_05",
    title: "Birżebbuġa",
    countryId: "MT",
  },
  {
    value: "MT_06",
    title: "Cospicua",
    countryId: "MT",
  },
  {
    value: "MT_07",
    title: "Dingli",
    countryId: "MT",
  },
  {
    value: "SI_178",
    title: "Selnica ob Dravi Municipality",
    countryId: "SI",
  },
  {
    value: "MT_08",
    title: "Fgura",
    countryId: "MT",
  },
  {
    value: "MT_09",
    title: "Floriana",
    countryId: "MT",
  },
  {
    value: "MT_10",
    title: "Fontana",
    countryId: "MT",
  },
  {
    value: "MT_13",
    title: "Għajnsielem",
    countryId: "MT",
  },
  {
    value: "MT_14",
    title: "Għarb",
    countryId: "MT",
  },
  {
    value: "MT_15",
    title: "Għargħur",
    countryId: "MT",
  },
  {
    value: "MT_16",
    title: "Għasri",
    countryId: "MT",
  },
  {
    value: "MT_17",
    title: "Għaxaq",
    countryId: "MT",
  },
  {
    value: "MT_11",
    title: "Gudja",
    countryId: "MT",
  },
  {
    value: "MT_12",
    title: "Gżira",
    countryId: "MT",
  },
  {
    value: "MT_18",
    title: "Ħamrun",
    countryId: "MT",
  },
  {
    value: "MT_19",
    title: "Iklin",
    countryId: "MT",
  },
  {
    value: "MT_21",
    title: "Kalkara",
    countryId: "MT",
  },
  {
    value: "MT_22",
    title: "Kerċem",
    countryId: "MT",
  },
  {
    value: "MT_23",
    title: "Kirkop",
    countryId: "MT",
  },
  {
    value: "MT_24",
    title: "Lija",
    countryId: "MT",
  },
  {
    value: "MT_25",
    title: "Luqa",
    countryId: "MT",
  },
  {
    value: "MT_26",
    title: "Marsa",
    countryId: "MT",
  },
  {
    value: "MT_27",
    title: "Marsaskala",
    countryId: "MT",
  },
  {
    value: "MT_28",
    title: "Marsaxlokk",
    countryId: "MT",
  },
  {
    value: "MT_29",
    title: "Mdina",
    countryId: "MT",
  },
  {
    value: "MT_30",
    title: "Mellieħa",
    countryId: "MT",
  },
  {
    value: "MT_31",
    title: "Mġarr",
    countryId: "MT",
  },
  {
    value: "MT_32",
    title: "Mosta",
    countryId: "MT",
  },
  {
    value: "MT_33",
    title: "Mqabba",
    countryId: "MT",
  },
  {
    value: "MT_34",
    title: "Msida",
    countryId: "MT",
  },
  {
    value: "MT_35",
    title: "Mtarfa",
    countryId: "MT",
  },
  {
    value: "MT_36",
    title: "Munxar",
    countryId: "MT",
  },
  {
    value: "MT_37",
    title: "Nadur",
    countryId: "MT",
  },
  {
    value: "MT_38",
    title: "Naxxar",
    countryId: "MT",
  },
  {
    value: "MT_40",
    title: "Pembroke",
    countryId: "MT",
  },
  {
    value: "MT_41",
    title: "Pietà",
    countryId: "MT",
  },
  {
    value: "MT_42",
    title: "Qala",
    countryId: "MT",
  },
  {
    value: "MT_43",
    title: "Qormi",
    countryId: "MT",
  },
  {
    value: "MT_44",
    title: "Qrendi",
    countryId: "MT",
  },
  {
    value: "MT_46",
    title: "Rabat",
    countryId: "MT",
  },
  {
    value: "MT_50",
    title: "Saint Lawrence",
    countryId: "MT",
  },
  {
    value: "MT_49",
    title: "San Ġwann",
    countryId: "MT",
  },
  {
    value: "MT_52",
    title: "Sannat",
    countryId: "MT",
  },
  {
    value: "MT_53",
    title: "Santa Luċija",
    countryId: "MT",
  },
  {
    value: "MT_54",
    title: "Santa Venera",
    countryId: "MT",
  },
  {
    value: "MT_20",
    title: "Senglea",
    countryId: "MT",
  },
  {
    value: "MT_55",
    title: "Siġġiewi",
    countryId: "MT",
  },
  {
    value: "MT_56",
    title: "Sliema",
    countryId: "MT",
  },
  {
    value: "MT_48",
    title: "St. Julian's",
    countryId: "MT",
  },
  {
    value: "MT_51",
    title: "St. Paul's Bay",
    countryId: "MT",
  },
  {
    value: "MT_57",
    title: "Swieqi",
    countryId: "MT",
  },
  {
    value: "MT_58",
    title: "Ta' Xbiex",
    countryId: "MT",
  },
  {
    value: "MT_59",
    title: "Tarxien",
    countryId: "MT",
  },
  {
    value: "MT_60",
    title: "Valletta",
    countryId: "MT",
  },
  {
    value: "MT_45",
    title: "Victoria",
    countryId: "MT",
  },
  {
    value: "MT_61",
    title: "Xagħra",
    countryId: "MT",
  },
  {
    value: "MT_62",
    title: "Xewkija",
    countryId: "MT",
  },
  {
    value: "MT_63",
    title: "Xgħajra",
    countryId: "MT",
  },
  {
    value: "MT_64",
    title: "Żabbar",
    countryId: "MT",
  },
  {
    value: "MT_65",
    title: "Żebbuġ Gozo",
    countryId: "MT",
  },
  {
    value: "MT_66",
    title: "Żebbuġ Malta",
    countryId: "MT",
  },
  {
    value: "MT_67",
    title: "Żejtun",
    countryId: "MT",
  },
  {
    value: "MT_68",
    title: "Żurrieq",
    countryId: "MT",
  },
  {
    value: "SS_BN",
    title: "Northern Bahr el Ghazal",
    countryId: "SS",
  },
  {
    value: "SS_EW",
    title: "Western Equatoria",
    countryId: "SS",
  },
  {
    value: "SS_BW",
    title: "Western Bahr el Ghazal",
    countryId: "SS",
  },
  {
    value: "SS_WR",
    title: "Warrap",
    countryId: "SS",
  },
  {
    value: "SS_JG",
    title: "Jonglei State",
    countryId: "SS",
  },
  {
    value: "SS_EE",
    title: "Eastern Equatoria",
    countryId: "SS",
  },
  {
    value: "SS_LK",
    title: "Lakes",
    countryId: "SS",
  },
  {
    value: "SS_EC",
    title: "Central Equatoria",
    countryId: "SS",
  },
  {
    value: "SS_NU",
    title: "Upper Nile",
    countryId: "SS",
  },
  {
    value: "SS_UY",
    title: "Unity",
    countryId: "SS",
  },
  {
    value: "BR_RN",
    title: "Rio Grande do Norte",
    countryId: "BR",
  },
  {
    value: "BR_MG",
    title: "Minas Gerais",
    countryId: "BR",
  },
  {
    value: "BR_MS",
    title: "Mato Grosso do Sul",
    countryId: "BR",
  },
  {
    value: "BR_RJ",
    title: "Rio de Janeiro",
    countryId: "BR",
  },
  {
    value: "BR_AC",
    title: "Acre",
    countryId: "BR",
  },
  {
    value: "BR_AL",
    title: "Alagoas",
    countryId: "BR",
  },
  {
    value: "BR_RR",
    title: "Roraima",
    countryId: "BR",
  },
  {
    value: "BR_AP",
    title: "Amapá",
    countryId: "BR",
  },
  {
    value: "BR_AM",
    title: "Amazonas",
    countryId: "BR",
  },
  {
    value: "SB_ML",
    title: "Malaita Province",
    countryId: "SB",
  },
  {
    value: "BR_BA",
    title: "Bahia",
    countryId: "BR",
  },
  {
    value: "BR_CE",
    title: "Ceará",
    countryId: "BR",
  },
  {
    value: "BR_DF",
    title: "Distrito Federal",
    countryId: "BR",
  },
  {
    value: "BR_ES",
    title: "Espírito Santo",
    countryId: "BR",
  },
  {
    value: "BR_PI",
    title: "Piauí",
    countryId: "BR",
  },
  {
    value: "BR_GO",
    title: "Goiás",
    countryId: "BR",
  },
  {
    value: "BR_MA",
    title: "Maranhão",
    countryId: "BR",
  },
  {
    value: "BR_PR",
    title: "Paraná",
    countryId: "BR",
  },
  {
    value: "BR_PE",
    title: "Pernambuco",
    countryId: "BR",
  },
  {
    value: "BR_PB",
    title: "Paraíba",
    countryId: "BR",
  },
  {
    value: "BR_PA",
    title: "Pará",
    countryId: "BR",
  },
  {
    value: "BR_MT",
    title: "Mato Grosso",
    countryId: "BR",
  },
  {
    value: "BR_TO",
    title: "Tocantins",
    countryId: "BR",
  },
  {
    value: "BR_SE",
    title: "Sergipe",
    countryId: "BR",
  },
  {
    value: "BR_SP",
    title: "São Paulo",
    countryId: "BR",
  },
  {
    value: "BR_SC",
    title: "Santa Catarina",
    countryId: "BR",
  },
  {
    value: "BR_RO",
    title: "Rondônia",
    countryId: "BR",
  },
  {
    value: "BR_RS",
    title: "Rio Grande do Sul",
    countryId: "BR",
  },
  {
    value: "KZ_KUS",
    title: "Kostanay Region",
    countryId: "KZ",
  },
  {
    value: "KZ_ZHA",
    title: "Jambyl Region",
    countryId: "KZ",
  },
  {
    value: "KZ_VOS",
    title: "East Kazakhstan Region",
    countryId: "KZ",
  },
  {
    value: "KZ_BAY",
    title: "Baikonur",
    countryId: "KZ",
  },
  {
    value: "KZ_ATY",
    title: "Atyrau Region",
    countryId: "KZ",
  },
  {
    value: "KZ_ALM",
    title: "Almaty Region",
    countryId: "KZ",
  },
  {
    value: "KZ_ALA",
    title: "Almaty",
    countryId: "KZ",
  },
  {
    value: "KZ_ZAP",
    title: "West Kazakhstan Province",
    countryId: "KZ",
  },
  {
    value: "KZ_YUZ",
    title: "Turkestan Region",
    countryId: "KZ",
  },
  {
    value: "KZ_AST",
    title: "Nur-Sultan",
    countryId: "KZ",
  },
  {
    value: "KZ_SEV",
    title: "North Kazakhstan Region",
    countryId: "KZ",
  },
  {
    value: "KZ_MAN",
    title: "Mangystau Region",
    countryId: "KZ",
  },
  {
    value: "KZ_KZY",
    title: "Kyzylorda Region",
    countryId: "KZ",
  },
  {
    value: "KZ_KAR",
    title: "Karaganda Region",
    countryId: "KZ",
  },
  {
    value: "KZ_AKM",
    title: "Akmola Region",
    countryId: "KZ",
  },
  {
    value: "KZ_AKT",
    title: "Aktobe Region",
    countryId: "KZ",
  },
  {
    value: "KZ_PAV",
    title: "Pavlodar Region",
    countryId: "KZ",
  },
  {
    value: "DK_85",
    title: "Region Zealand",
    countryId: "DK",
  },
  {
    value: "DK_84",
    title: "Capital Region of Denmark",
    countryId: "DK",
  },
  {
    value: "DK_83",
    title: "Region of Southern Denmark",
    countryId: "DK",
  },
  {
    value: "DK_81",
    title: "North Denmark Region",
    countryId: "DK",
  },
  {
    value: "DK_82",
    title: "Central Denmark Region",
    countryId: "DK",
  },
  {
    value: "HT_OU",
    title: "Ouest",
    countryId: "HT",
  },
  {
    value: "HT_GA",
    title: "Grand'Anse",
    countryId: "HT",
  },
  {
    value: "HT_CE",
    title: "Centre",
    countryId: "HT",
  },
  {
    value: "HT_AR",
    title: "Artibonite",
    countryId: "HT",
  },
  {
    value: "HT_SE",
    title: "Sud-Est",
    countryId: "HT",
  },
  {
    value: "HT_SD",
    title: "Sud",
    countryId: "HT",
  },
  {
    value: "HT_NO",
    title: "Nord-Ouest",
    countryId: "HT",
  },
  {
    value: "HT_NE",
    title: "Nord-Est",
    countryId: "HT",
  },
  {
    value: "HT_ND",
    title: "Nord",
    countryId: "HT",
  },
  {
    value: "HT_NI",
    title: "Nippes",
    countryId: "HT",
  },
  {
    value: "RW_01",
    title: "Kigali district",
    countryId: "RW",
  },
  {
    value: "RW_02",
    title: "Eastern Province",
    countryId: "RW",
  },
  {
    value: "RW_04",
    title: "Western Province",
    countryId: "RW",
  },
  {
    value: "RW_05",
    title: "Southern Province",
    countryId: "RW",
  },
  {
    value: "RW_03",
    title: "Northern Province",
    countryId: "RW",
  },
  {
    value: "ET_AF",
    title: "Afar Region",
    countryId: "ET",
  },
  {
    value: "ET_AM",
    title: "Amhara Region",
    countryId: "ET",
  },
  {
    value: "ET_BE",
    title: "Benishangul-Gumuz Region",
    countryId: "ET",
  },
  {
    value: "ET_SN",
    title: "Southern Nations, Nationalities, and Peoples' Region",
    countryId: "ET",
  },
  {
    value: "ET_TI",
    title: "Tigray Region",
    countryId: "ET",
  },
  {
    value: "ET_GA",
    title: "Gambela Region",
    countryId: "ET",
  },
  {
    value: "ET_DD",
    title: "Dire Dawa",
    countryId: "ET",
  },
  {
    value: "ET_HA",
    title: "Harari Region",
    countryId: "ET",
  },
  {
    value: "ET_SO",
    title: "Somali Region",
    countryId: "ET",
  },
  {
    value: "ET_OR",
    title: "Oromia Region",
    countryId: "ET",
  },
  {
    value: "ET_AA",
    title: "Addis Ababa",
    countryId: "ET",
  },
  {
    value: "NL_GE",
    title: "Gelderland",
    countryId: "NL",
  },
  {
    value: "NL_FR",
    title: "Friesland",
    countryId: "NL",
  },
  {
    value: "NL_FL",
    title: "Flevoland",
    countryId: "NL",
  },
  {
    value: "NL_DR",
    title: "Drenthe",
    countryId: "NL",
  },
  {
    value: "NL_BQ1",
    title: "Bonaire",
    countryId: "NL",
  },
  {
    value: "NL_ZE",
    title: "Zeeland",
    countryId: "NL",
  },
  {
    value: "NL_UT",
    title: "Utrecht",
    countryId: "NL",
  },
  {
    value: "NL_ZH",
    title: "South Holland",
    countryId: "NL",
  },
  {
    value: "NL_BQ3",
    title: "Sint Eustatius",
    countryId: "NL",
  },
  {
    value: "NL_BQ2",
    title: "Saba",
    countryId: "NL",
  },
  {
    value: "NL_OV",
    title: "Overijssel",
    countryId: "NL",
  },
  {
    value: "NL_NH",
    title: "North Holland",
    countryId: "NL",
  },
  {
    value: "NL_NB",
    title: "North Brabant",
    countryId: "NL",
  },
  {
    value: "NL_LI",
    title: "Limburg",
    countryId: "NL",
  },
  {
    value: "NL_GR",
    title: "Groningen",
    countryId: "NL",
  },
  {
    value: "CA_NU",
    title: "Nunavut",
    countryId: "CA",
  },
  {
    value: "CA_ON",
    title: "Ontario",
    countryId: "CA",
  },
  {
    value: "CA_BC",
    title: "British Columbia",
    countryId: "CA",
  },
  {
    value: "CA_AB",
    title: "Alberta",
    countryId: "CA",
  },
  {
    value: "CA_MB",
    title: "Manitoba",
    countryId: "CA",
  },
  {
    value: "CA_NB",
    title: "New Brunswick",
    countryId: "CA",
  },
  {
    value: "CA_NL",
    title: "Newfoundland and Labrador",
    countryId: "CA",
  },
  {
    value: "CA_NT",
    title: "Northwest Territories",
    countryId: "CA",
  },
  {
    value: "CA_NS",
    title: "Nova Scotia",
    countryId: "CA",
  },
  {
    value: "CA_PE",
    title: "Prince Edward Island",
    countryId: "CA",
  },
  {
    value: "CA_QC",
    title: "Quebec",
    countryId: "CA",
  },
  {
    value: "CA_SK",
    title: "Saskatchewan",
    countryId: "CA",
  },
  {
    value: "CA_YT",
    title: "Yukon",
    countryId: "CA",
  },
  {
    value: "MA_FQH",
    title: "Fquih Ben Salah",
    countryId: "MA",
  },
  {
    value: "MA_GUE",
    title: "Guelmim",
    countryId: "MA",
  },
  {
    value: "MA_05",
    title: "Béni Mellal-Khénifra",
    countryId: "MA",
  },
  {
    value: "MA_BEM",
    title: "Béni Mellal",
    countryId: "MA",
  },
  {
    value: "MA_10",
    title: "Guelmim-Oued Noun (EH-partial)",
    countryId: "MA",
  },
  {
    value: "MA_GUF",
    title: "Guercif",
    countryId: "MA",
  },
  {
    value: "MA_IFR",
    title: "Ifrane",
    countryId: "MA",
  },
  {
    value: "MA_INE",
    title: "Inezgane-Ait Melloul",
    countryId: "MA",
  },
  {
    value: "MA_JRA",
    title: "Jerada",
    countryId: "MA",
  },
  {
    value: "MA_AZI",
    title: "Azilal",
    countryId: "MA",
  },
  {
    value: "MA_ASZ",
    title: "Assa-Zag (EH-partial)",
    countryId: "MA",
  },
  {
    value: "MA_AOU",
    title: "Aousserd (EH)",
    countryId: "MA",
  },
  {
    value: "MA_KEN",
    title: "Kénitra",
    countryId: "MA",
  },
  {
    value: "MA_KHE",
    title: "Khémisset",
    countryId: "MA",
  },
  {
    value: "MA_KHN",
    title: "Khénifra",
    countryId: "MA",
  },
  {
    value: "MA_KHO",
    title: "Khouribga",
    countryId: "MA",
  },
  {
    value: "MA_02",
    title: "L'Oriental",
    countryId: "MA",
  },
  {
    value: "MA_LAA",
    title: "Laâyoune (EH)",
    countryId: "MA",
  },
  {
    value: "MA_11",
    title: "Laâyoune-Sakia El Hamra (EH-partial)",
    countryId: "MA",
  },
  {
    value: "MA_LAR",
    title: "Larache",
    countryId: "MA",
  },
  {
    value: "MA_MDF",
    title: "M’diq-Fnideq",
    countryId: "MA",
  },
  {
    value: "MA_MAR",
    title: "Marrakech",
    countryId: "MA",
  },
  {
    value: "MA_07",
    title: "Marrakesh-Safi",
    countryId: "MA",
  },
  {
    value: "MA_MED",
    title: "Médiouna",
    countryId: "MA",
  },
  {
    value: "MA_HAO",
    title: "Al Haouz",
    countryId: "MA",
  },
  {
    value: "MA_AGD",
    title: "Agadir-Ida-Ou-Tanane",
    countryId: "MA",
  },
  {
    value: "MA_MEK",
    title: "Meknès",
    countryId: "MA",
  },
  {
    value: "MA_MID",
    title: "Midelt",
    countryId: "MA",
  },
  {
    value: "MA_MOH",
    title: "Mohammadia",
    countryId: "MA",
  },
  {
    value: "MA_MOU",
    title: "Moulay Yacoub",
    countryId: "MA",
  },
  {
    value: "MA_NAD",
    title: "Nador",
    countryId: "MA",
  },
  {
    value: "MA_NOU",
    title: "Nouaceur",
    countryId: "MA",
  },
  {
    value: "MA_OUA",
    title: "Ouarzazate",
    countryId: "MA",
  },
  {
    value: "MA_OUD",
    title: "Oued Ed-Dahab (EH)",
    countryId: "MA",
  },
  {
    value: "MA_OUZ",
    title: "Ouezzane",
    countryId: "MA",
  },
  {
    value: "MA_OUJ",
    title: "Oujda-Angad",
    countryId: "MA",
  },
  {
    value: "MA_RAB",
    title: "Rabat",
    countryId: "MA",
  },
  {
    value: "MA_04",
    title: "Rabat-Salé-Kénitra",
    countryId: "MA",
  },
  {
    value: "MA_REH",
    title: "Rehamna",
    countryId: "MA",
  },
  {
    value: "MA_SAF",
    title: "Safi",
    countryId: "MA",
  },
  {
    value: "MA_SAL",
    title: "Salé",
    countryId: "MA",
  },
  {
    value: "MA_SEF",
    title: "Sefrou",
    countryId: "MA",
  },
  {
    value: "MA_SET",
    title: "Settat",
    countryId: "MA",
  },
  {
    value: "MA_SIB",
    title: "Sidi Bennour",
    countryId: "MA",
  },
  {
    value: "MA_SIF",
    title: "Sidi Ifni",
    countryId: "MA",
  },
  {
    value: "MA_SIK",
    title: "Sidi Kacem",
    countryId: "MA",
  },
  {
    value: "MA_SIL",
    title: "Sidi Slimane",
    countryId: "MA",
  },
  {
    value: "MA_SKH",
    title: "Skhirate-Témara",
    countryId: "MA",
  },
  {
    value: "MA_09",
    title: "Souss-Massa",
    countryId: "MA",
  },
  {
    value: "MA_TNT",
    title: "Tan-Tan (EH-partial)",
    countryId: "MA",
  },
  {
    value: "MA_TNG",
    title: "Tanger-Assilah",
    countryId: "MA",
  },
  {
    value: "MA_12",
    title: "Dakhla-Oued Ed-Dahab (EH)",
    countryId: "MA",
  },
  {
    value: "MA_08",
    title: "Drâa-Tafilalet",
    countryId: "MA",
  },
  {
    value: "MA_DRI",
    title: "Driouch",
    countryId: "MA",
  },
  {
    value: "MA_HAJ",
    title: "El Hajeb",
    countryId: "MA",
  },
  {
    value: "MA_JDI",
    title: "El Jadida",
    countryId: "MA",
  },
  {
    value: "MA_KES",
    title: "El Kelâa des Sraghna",
    countryId: "MA",
  },
  {
    value: "MA_ERR",
    title: "Errachidia",
    countryId: "MA",
  },
  {
    value: "MA_ESM",
    title: "Es-Semara (EH-partial)",
    countryId: "MA",
  },
  {
    value: "MA_ESI",
    title: "Essaouira",
    countryId: "MA",
  },
  {
    value: "MA_FAH",
    title: "Fahs-Anjra",
    countryId: "MA",
  },
  {
    value: "MA_FES",
    title: "Fès",
    countryId: "MA",
  },
  {
    value: "MA_03",
    title: "Fès-Meknès",
    countryId: "MA",
  },
  {
    value: "MA_FIG",
    title: "Figuig",
    countryId: "MA",
  },
  {
    value: "MA_01",
    title: "Tanger-Tétouan-Al Hoceïma",
    countryId: "MA",
  },
  {
    value: "MA_TAO",
    title: "Taounate",
    countryId: "MA",
  },
  {
    value: "MA_TAI",
    title: "Taourirt",
    countryId: "MA",
  },
  {
    value: "MA_TAF",
    title: "Tarfaya (EH-partial)",
    countryId: "MA",
  },
  {
    value: "MA_TAR",
    title: "Taroudannt",
    countryId: "MA",
  },
  {
    value: "MA_TAT",
    title: "Tata",
    countryId: "MA",
  },
  {
    value: "MA_TAZ",
    title: "Taza",
    countryId: "MA",
  },
  {
    value: "MA_TET",
    title: "Tétouan",
    countryId: "MA",
  },
  {
    value: "MA_TIN",
    title: "Tinghir",
    countryId: "MA",
  },
  {
    value: "MA_TIZ",
    title: "Tiznit",
    countryId: "MA",
  },
  {
    value: "MA_YUS",
    title: "Youssoufia",
    countryId: "MA",
  },
  {
    value: "MA_ZAG",
    title: "Zagora",
    countryId: "MA",
  },
  {
    value: "MA_BES",
    title: "Benslimane",
    countryId: "MA",
  },
  {
    value: "MA_BER",
    title: "Berkane",
    countryId: "MA",
  },
  {
    value: "MA_BRR",
    title: "Berrechid",
    countryId: "MA",
  },
  {
    value: "MA_BOD",
    title: "Boujdour (EH)",
    countryId: "MA",
  },
  {
    value: "MA_BOM",
    title: "Boulemane",
    countryId: "MA",
  },
  {
    value: "MA_CAS",
    title: "Casablanca",
    countryId: "MA",
  },
  {
    value: "MA_06",
    title: "Casablanca-Settat",
    countryId: "MA",
  },
  {
    value: "MA_CHE",
    title: "Chefchaouen",
    countryId: "MA",
  },
  {
    value: "MA_CHI",
    title: "Chichaoua",
    countryId: "MA",
  },
  {
    value: "MA_CHT",
    title: "Chtouka-Ait Baha",
    countryId: "MA",
  },
  {
    value: "KM_A",
    title: "Anjouan",
    countryId: "KM",
  },
  {
    value: "KM_G",
    title: "Grande Comore",
    countryId: "KM",
  },
  {
    value: "HK_HEA",
    title: "Eastern",
    countryId: "HK",
  },
  {
    value: "HK_KKC",
    title: "Kowloon City",
    countryId: "HK",
  },
  {
    value: "HK_NKT",
    title: "Kwai Tsing",
    countryId: "HK",
  },
  {
    value: "HK_NTW",
    title: "Tsuen Wan District",
    countryId: "HK",
  },
  {
    value: "HK_NTP",
    title: "Tai Po District",
    countryId: "HK",
  },
  {
    value: "HK_HSO",
    title: "Southern",
    countryId: "HK",
  },
  {
    value: "HK_KWT",
    title: "Wong Tai Sin",
    countryId: "HK",
  },
  {
    value: "HK_KSS",
    title: "Sham Shui Po",
    countryId: "HK",
  },
  {
    value: "HK_KKT",
    title: "Kwun Tong",
    countryId: "HK",
  },
  {
    value: "HK_NST",
    title: "Sha Tin",
    countryId: "HK",
  },
  {
    value: "HK_NSK",
    title: "Sai Kung District",
    countryId: "HK",
  },
  {
    value: "HK_NNO",
    title: "North",
    countryId: "HK",
  },
  {
    value: "HK_HCW",
    title: "Central and Western District",
    countryId: "HK",
  },
  {
    value: "HK_NIS",
    title: "Islands District",
    countryId: "HK",
  },
  {
    value: "HK_KYT",
    title: "Yau Tsim Mong",
    countryId: "HK",
  },
  {
    value: "HK_NYL",
    title: "Yuen Long District",
    countryId: "HK",
  },
  {
    value: "HK_HWC",
    title: "Wan Chai",
    countryId: "HK",
  },
  {
    value: "HK_NTM",
    title: "Tuen Mun",
    countryId: "HK",
  },
  {
    value: "MC_CO",
    title: "La Condamine",
    countryId: "MC",
  },
  {
    value: "MC_CL",
    title: "La Colle",
    countryId: "MC",
  },
  {
    value: "MC_MG",
    title: "Moneghetti",
    countryId: "MC",
  },
  {
    value: "IS_1",
    title: "Capital Region",
    countryId: "IS",
  },
  {
    value: "IS_8",
    title: "Southern Region",
    countryId: "IS",
  },
  {
    value: "IS_2",
    title: "Southern Peninsula Region",
    countryId: "IS",
  },
  {
    value: "IS_5",
    title: "Northwestern Region",
    countryId: "IS",
  },
  {
    value: "IS_6",
    title: "Northeastern Region",
    countryId: "IS",
  },
  {
    value: "IS_7",
    title: "Eastern Region",
    countryId: "IS",
  },
  {
    value: "IS_3",
    title: "Western Region",
    countryId: "IS",
  },
  {
    value: "IS_4",
    title: "Westfjords",
    countryId: "IS",
  },
  {
    value: "ER_GB",
    title: "Gash-Barka Region",
    countryId: "ER",
  },
  {
    value: "ER_SK",
    title: "Northern Red Sea Region",
    countryId: "ER",
  },
  {
    value: "ER_DK",
    title: "Southern Red Sea Region",
    countryId: "ER",
  },
  {
    value: "ER_AN",
    title: "Anseba Region",
    countryId: "ER",
  },
  {
    value: "ER_DU",
    title: "Debub Region",
    countryId: "ER",
  },
  {
    value: "ER_MA",
    title: "Maekel Region",
    countryId: "ER",
  },
  {
    value: "CG_2",
    title: "Lékoumou Department",
    countryId: "CG",
  },
  {
    value: "CG_5",
    title: "Kouilou Department",
    countryId: "CG",
  },
  {
    value: "CG_15",
    title: "Cuvette-Ouest Department",
    countryId: "CG",
  },
  {
    value: "CG_8",
    title: "Cuvette Department",
    countryId: "CG",
  },
  {
    value: "CG_BZV",
    title: "Brazzaville",
    countryId: "CG",
  },
  {
    value: "CG_11",
    title: "Bouenza Department",
    countryId: "CG",
  },
  {
    value: "CG_13",
    title: "Sangha Department",
    countryId: "CG",
  },
  {
    value: "CG_12",
    title: "Pool Department",
    countryId: "CG",
  },
  {
    value: "CG_16",
    title: "Pointe-Noire",
    countryId: "CG",
  },
  {
    value: "CG_14",
    title: "Plateaux Department",
    countryId: "CG",
  },
  {
    value: "CG_9",
    title: "Niari Department",
    countryId: "CG",
  },
  {
    value: "TZ_04",
    title: "Iringa",
    countryId: "TZ",
  },
  {
    value: "CG_7",
    title: "Likouala Department",
    countryId: "CG",
  },
  {
    value: "DJ_TA",
    title: "Tadjourah Region",
    countryId: "DJ",
  },
  {
    value: "DJ_OB",
    title: "Obock Region",
    countryId: "DJ",
  },
  {
    value: "DJ_DJ",
    title: "Djibouti",
    countryId: "DJ",
  },
  {
    value: "DJ_DI",
    title: "Dikhil Region",
    countryId: "DJ",
  },
  {
    value: "DJ_AS",
    title: "Ali Sabieh Region",
    countryId: "DJ",
  },
  {
    value: "DJ_AR",
    title: "Arta Region",
    countryId: "DJ",
  },
  {
    value: "GT_QZ",
    title: "Quetzaltenango Department",
    countryId: "GT",
  },
  {
    value: "GT_QC",
    title: "Quiché Department",
    countryId: "GT",
  },
  {
    value: "GT_RE",
    title: "Retalhuleu Department",
    countryId: "GT",
  },
  {
    value: "GT_SA",
    title: "Sacatepéquez Department",
    countryId: "GT",
  },
  {
    value: "GT_GU",
    title: "Guatemala Department",
    countryId: "GT",
  },
  {
    value: "GT_SR",
    title: "Santa Rosa Department",
    countryId: "GT",
  },
  {
    value: "GT_SO",
    title: "Sololá Department",
    countryId: "GT",
  },
  {
    value: "GT_SU",
    title: "Suchitepéquez Department",
    countryId: "GT",
  },
  {
    value: "GT_TO",
    title: "Totonicapán Department",
    countryId: "GT",
  },
  {
    value: "GT_HU",
    title: "Huehuetenango Department",
    countryId: "GT",
  },
  {
    value: "GT_IZ",
    title: "Izabal Department",
    countryId: "GT",
  },
  {
    value: "GT_JA",
    title: "Jalapa Department",
    countryId: "GT",
  },
  {
    value: "GT_JU",
    title: "Jutiapa Department",
    countryId: "GT",
  },
  {
    value: "GT_PE",
    title: "Petén Department",
    countryId: "GT",
  },
  {
    value: "GT_AV",
    title: "Alta Verapaz Department",
    countryId: "GT",
  },
  {
    value: "GT_BV",
    title: "Baja Verapaz Department",
    countryId: "GT",
  },
  {
    value: "GT_CM",
    title: "Chimaltenango Department",
    countryId: "GT",
  },
  {
    value: "GT_CQ",
    title: "Chiquimula Department",
    countryId: "GT",
  },
  {
    value: "GT_PR",
    title: "El Progreso Department",
    countryId: "GT",
  },
  {
    value: "GT_ES",
    title: "Escuintla Department",
    countryId: "GT",
  },
  {
    value: "SM_05",
    title: "Fiorentino",
    countryId: "SM",
  },
  {
    value: "SM_08",
    title: "Montegiardino",
    countryId: "SM",
  },
  {
    value: "SM_01",
    title: "Acquaviva",
    countryId: "SM",
  },
  {
    value: "SM_07",
    title: "San Marino",
    countryId: "SM",
  },
  {
    value: "SM_09",
    title: "Serravalle",
    countryId: "SM",
  },
  {
    value: "SM_06",
    title: "Borgo Maggiore",
    countryId: "SM",
  },
  {
    value: "SM_02",
    title: "Chiesanuova",
    countryId: "SM",
  },
  {
    value: "SM_03",
    title: "Domagnano",
    countryId: "SM",
  },
  {
    value: "SM_04",
    title: "Faetano",
    countryId: "SM",
  },
  {
    value: "AM_VD",
    title: "Vayots Dzor Region",
    countryId: "AM",
  },
  {
    value: "AM_ER",
    title: "Yerevan",
    countryId: "AM",
  },
  {
    value: "AM_AR",
    title: "Ararat Province",
    countryId: "AM",
  },
  {
    value: "AM_AV",
    title: "Armavir Region",
    countryId: "AM",
  },
  {
    value: "AM_GR",
    title: "Gegharkunik Province",
    countryId: "AM",
  },
  {
    value: "AM_LO",
    title: "Lori Region",
    countryId: "AM",
  },
  {
    value: "AM_SH",
    title: "Shirak Region",
    countryId: "AM",
  },
  {
    value: "AM_AG",
    title: "Aragatsotn Region",
    countryId: "AM",
  },
  {
    value: "AM_KT",
    title: "Kotayk Region",
    countryId: "AM",
  },
  {
    value: "AM_SU",
    title: "Syunik Province",
    countryId: "AM",
  },
  {
    value: "AM_TV",
    title: "Tavush Region",
    countryId: "AM",
  },
  {
    value: "DZ_55",
    title: "Touggourt",
    countryId: "DZ",
  },
  {
    value: "DZ_13",
    title: "Tlemcen",
    countryId: "DZ",
  },
  {
    value: "DZ_15",
    title: "Tizi Ouzou",
    countryId: "DZ",
  },
  {
    value: "DZ_38",
    title: "Tissemsilt",
    countryId: "DZ",
  },
  {
    value: "DZ_42",
    title: "Tipasa",
    countryId: "DZ",
  },
  {
    value: "DZ_37",
    title: "Tindouf",
    countryId: "DZ",
  },
  {
    value: "DZ_54",
    title: "Timimoun",
    countryId: "DZ",
  },
  {
    value: "DZ_14",
    title: "Tiaret",
    countryId: "DZ",
  },
  {
    value: "DZ_12",
    title: "Tébessa",
    countryId: "DZ",
  },
  {
    value: "DZ_11",
    title: "Tamanghasset",
    countryId: "DZ",
  },
  {
    value: "DZ_41",
    title: "Souk Ahras",
    countryId: "DZ",
  },
  {
    value: "DZ_21",
    title: "Skikda",
    countryId: "DZ",
  },
  {
    value: "DZ_22",
    title: "Sidi Bel Abbès",
    countryId: "DZ",
  },
  {
    value: "DZ_19",
    title: "Sétif",
    countryId: "DZ",
  },
  {
    value: "DZ_20",
    title: "Saïda",
    countryId: "DZ",
  },
  {
    value: "DZ_48",
    title: "Relizane",
    countryId: "DZ",
  },
  {
    value: "DZ_04",
    title: "Oum El Bouaghi",
    countryId: "DZ",
  },
  {
    value: "DZ_51",
    title: "Ouled Djellal",
    countryId: "DZ",
  },
  {
    value: "DZ_30",
    title: "Ouargla",
    countryId: "DZ",
  },
  {
    value: "DZ_31",
    title: "Oran",
    countryId: "DZ",
  },
  {
    value: "DZ_45",
    title: "Naama",
    countryId: "DZ",
  },
  {
    value: "DZ_27",
    title: "Mostaganem",
    countryId: "DZ",
  },
  {
    value: "DZ_43",
    title: "Mila",
    countryId: "DZ",
  },
  {
    value: "DZ_26",
    title: "Médéa",
    countryId: "DZ",
  },
  {
    value: "DZ_29",
    title: "Mascara",
    countryId: "DZ",
  },
  {
    value: "DZ_28",
    title: "M'Sila",
    countryId: "DZ",
  },
  {
    value: "DZ_03",
    title: "Laghouat",
    countryId: "DZ",
  },
  {
    value: "BS_CI",
    title: "Cat Island",
    countryId: "BS",
  },
  {
    value: "DZ_40",
    title: "Khenchela",
    countryId: "DZ",
  },
  {
    value: "DZ_18",
    title: "Jijel",
    countryId: "DZ",
  },
  {
    value: "DZ_57",
    title: "In Salah",
    countryId: "DZ",
  },
  {
    value: "DZ_58",
    title: "In Guezzam",
    countryId: "DZ",
  },
  {
    value: "DZ_24",
    title: "Guelma",
    countryId: "DZ",
  },
  {
    value: "DZ_47",
    title: "Ghardaïa",
    countryId: "DZ",
  },
  {
    value: "DZ_36",
    title: "El Tarf",
    countryId: "DZ",
  },
  {
    value: "DZ_39",
    title: "El Oued",
    countryId: "DZ",
  },
  {
    value: "DZ_50",
    title: "El Menia",
    countryId: "DZ",
  },
  {
    value: "DZ_49",
    title: "El M'ghair",
    countryId: "DZ",
  },
  {
    value: "DZ_32",
    title: "El Bayadh",
    countryId: "DZ",
  },
  {
    value: "DZ_17",
    title: "Djelfa",
    countryId: "DZ",
  },
  {
    value: "DZ_56",
    title: "Djanet",
    countryId: "DZ",
  },
  {
    value: "DZ_25",
    title: "Constantine",
    countryId: "DZ",
  },
  {
    value: "DZ_02",
    title: "Chlef",
    countryId: "DZ",
  },
  {
    value: "DZ_35",
    title: "Boumerdès",
    countryId: "DZ",
  },
  {
    value: "DZ_10",
    title: "Bouïra",
    countryId: "DZ",
  },
  {
    value: "DZ_34",
    title: "Bordj Bou Arréridj",
    countryId: "DZ",
  },
  {
    value: "DZ_52",
    title: "Bordj Baji Mokhtar",
    countryId: "DZ",
  },
  {
    value: "DZ_09",
    title: "Blida",
    countryId: "DZ",
  },
  {
    value: "DZ_07",
    title: "Biskra",
    countryId: "DZ",
  },
  {
    value: "DZ_53",
    title: "Béni Abbès",
    countryId: "DZ",
  },
  {
    value: "DZ_06",
    title: "Béjaïa",
    countryId: "DZ",
  },
  {
    value: "DZ_08",
    title: "Béchar",
    countryId: "DZ",
  },
  {
    value: "DZ_05",
    title: "Batna",
    countryId: "DZ",
  },
  {
    value: "DZ_23",
    title: "Annaba",
    countryId: "DZ",
  },
  {
    value: "DZ_16",
    title: "Algiers",
    countryId: "DZ",
  },
  {
    value: "DZ_46",
    title: "Aïn Témouchent",
    countryId: "DZ",
  },
  {
    value: "DZ_44",
    title: "Aïn Defla",
    countryId: "DZ",
  },
  {
    value: "DZ_01",
    title: "Adrar",
    countryId: "DZ",
  },
  {
    value: "KW_AH",
    title: "Al Ahmadi Governorate",
    countryId: "KW",
  },
  {
    value: "KW_MU",
    title: "Mubarak Al-Kabeer Governorate",
    countryId: "KW",
  },
  {
    value: "KW_HA",
    title: "Hawalli Governorate",
    countryId: "KW",
  },
  {
    value: "KW_KU",
    title: "Capital Governorate",
    countryId: "KW",
  },
  {
    value: "KW_JA",
    title: "Al Jahra Governorate",
    countryId: "KW",
  },
  {
    value: "KW_FA",
    title: "Al Farwaniyah Governorate",
    countryId: "KW",
  },
  {
    value: "JM_10",
    title: "Westmoreland Parish",
    countryId: "JM",
  },
  {
    value: "JM_06",
    title: "Saint Ann Parish",
    countryId: "JM",
  },
  {
    value: "JM_01",
    title: "Kingston Parish",
    countryId: "JM",
  },
  {
    value: "JM_12",
    title: "Manchester Parish",
    countryId: "JM",
  },
  {
    value: "JM_02",
    title: "Saint Andrew",
    countryId: "JM",
  },
  {
    value: "JM_04",
    title: "Portland Parish",
    countryId: "JM",
  },
  {
    value: "JM_07",
    title: "Trelawny Parish",
    countryId: "JM",
  },
  {
    value: "JM_03",
    title: "Saint Thomas Parish",
    countryId: "JM",
  },
  {
    value: "JM_05",
    title: "Saint Mary Parish",
    countryId: "JM",
  },
  {
    value: "JM_08",
    title: "Saint James Parish",
    countryId: "JM",
  },
  {
    value: "JM_13",
    title: "Clarendon Parish",
    countryId: "JM",
  },
  {
    value: "JM_09",
    title: "Hanover Parish",
    countryId: "JM",
  },
  {
    value: "JM_11",
    title: "Saint Elizabeth Parish",
    countryId: "JM",
  },
  {
    value: "JM_14",
    title: "Saint Catherine Parish",
    countryId: "JM",
  },
  {
    value: "VN_09",
    title: "Lạng Sơn",
    countryId: "VN",
  },
  {
    value: "VN_02",
    title: "Lào Cai",
    countryId: "VN",
  },
  {
    value: "VN_41",
    title: "Long An",
    countryId: "VN",
  },
  {
    value: "VN_67",
    title: "Nam Định",
    countryId: "VN",
  },
  {
    value: "VN_22",
    title: "Nghệ An",
    countryId: "VN",
  },
  {
    value: "VN_18",
    title: "Ninh Bình",
    countryId: "VN",
  },
  {
    value: "VN_05",
    title: "Sơn La",
    countryId: "VN",
  },
  {
    value: "VN_37",
    title: "Tây Ninh",
    countryId: "VN",
  },
  {
    value: "VN_20",
    title: "Thái Bình",
    countryId: "VN",
  },
  {
    value: "VN_69",
    title: "Thái Nguyên",
    countryId: "VN",
  },
  {
    value: "VN_21",
    title: "Thanh Hóa",
    countryId: "VN",
  },
  {
    value: "VN_34",
    title: "Khánh Hòa",
    countryId: "VN",
  },
  {
    value: "VN_66",
    title: "Hưng Yên",
    countryId: "VN",
  },
  {
    value: "VN_33",
    title: "Đắk Lắk",
    countryId: "VN",
  },
  {
    value: "VN_DN",
    title: "Đà Nẵng",
    countryId: "VN",
  },
  {
    value: "VN_04",
    title: "Cao Bằng",
    countryId: "VN",
  },
  {
    value: "VN_CT",
    title: "Cần Thơ",
    countryId: "VN",
  },
  {
    value: "VN_59",
    title: "Cà Mau",
    countryId: "VN",
  },
  {
    value: "VN_40",
    title: "Bình Thuận",
    countryId: "VN",
  },
  {
    value: "VN_58",
    title: "Bình Phước",
    countryId: "VN",
  },
  {
    value: "VN_31",
    title: "Bình Định",
    countryId: "VN",
  },
  {
    value: "VN_57",
    title: "Bình Dương",
    countryId: "VN",
  },
  {
    value: "VN_50",
    title: "Bến Tre",
    countryId: "VN",
  },
  {
    value: "VN_56",
    title: "Bắc Ninh",
    countryId: "VN",
  },
  {
    value: "VN_55",
    title: "Bạc Liêu",
    countryId: "VN",
  },
  {
    value: "VN_53",
    title: "Bắc Kạn",
    countryId: "VN",
  },
  {
    value: "TT_ARI",
    title: "Arima",
    countryId: "TT",
  },
  {
    value: "VN_54",
    title: "Bắc Giang",
    countryId: "VN",
  },
  {
    value: "VN_43",
    title: "Bà Rịa-Vũng Tàu",
    countryId: "VN",
  },
  {
    value: "VN_44",
    title: "An Giang",
    countryId: "VN",
  },
  {
    value: "VN_36",
    title: "Ninh Thuận",
    countryId: "VN",
  },
  {
    value: "VN_68",
    title: "Phú Thọ",
    countryId: "VN",
  },
  {
    value: "VN_32",
    title: "Phú Yên",
    countryId: "VN",
  },
  {
    value: "VN_52",
    title: "Sóc Trăng",
    countryId: "VN",
  },
  {
    value: "VN_25",
    title: "Quảng Trị",
    countryId: "VN",
  },
  {
    value: "VN_13",
    title: "Quảng Ninh",
    countryId: "VN",
  },
  {
    value: "VN_29",
    title: "Quảng Ngãi",
    countryId: "VN",
  },
  {
    value: "VN_27",
    title: "Quảng Nam",
    countryId: "VN",
  },
  {
    value: "VN_24",
    title: "Quảng Bình",
    countryId: "VN",
  },
  {
    value: "VN_14",
    title: "Hòa Bình",
    countryId: "VN",
  },
  {
    value: "VN_SG",
    title: "Hồ Chí Minh",
    countryId: "VN",
  },
  {
    value: "VN_73",
    title: "Hậu Giang",
    countryId: "VN",
  },
  {
    value: "VN_HP",
    title: "Hải Phòng",
    countryId: "VN",
  },
  {
    value: "VN_23",
    title: "Hà Tĩnh",
    countryId: "VN",
  },
  {
    value: "VN_61",
    title: "Hải Dương",
    countryId: "VN",
  },
  {
    value: "VN_HN",
    title: "Hà Nội",
    countryId: "VN",
  },
  {
    value: "VN_47",
    title: "Kiên Giang",
    countryId: "VN",
  },
  {
    value: "VN_26",
    title: "Thừa Thiên-Huế",
    countryId: "VN",
  },
  {
    value: "VN_46",
    title: "Tiền Giang",
    countryId: "VN",
  },
  {
    value: "VN_51",
    title: "Trà Vinh",
    countryId: "VN",
  },
  {
    value: "VN_07",
    title: "Tuyên Quang",
    countryId: "VN",
  },
  {
    value: "VN_49",
    title: "Vĩnh Long",
    countryId: "VN",
  },
  {
    value: "VN_63",
    title: "Hà Nam",
    countryId: "VN",
  },
  {
    value: "VN_03",
    title: "Hà Giang",
    countryId: "VN",
  },
  {
    value: "VN_30",
    title: "Gia Lai",
    countryId: "VN",
  },
  {
    value: "VN_45",
    title: "Đồng Tháp",
    countryId: "VN",
  },
  {
    value: "VN_39",
    title: "Đồng Nai",
    countryId: "VN",
  },
  {
    value: "VN_71",
    title: "Điện Biên",
    countryId: "VN",
  },
  {
    value: "VN_72",
    title: "Đắk Nông",
    countryId: "VN",
  },
  {
    value: "VN_70",
    title: "Vĩnh Phúc",
    countryId: "VN",
  },
  {
    value: "VN_06",
    title: "Yên Bái",
    countryId: "VN",
  },
  {
    value: "VN_28",
    title: "Kon Tum",
    countryId: "VN",
  },
  {
    value: "VN_01",
    title: "Lai Châu",
    countryId: "VN",
  },
  {
    value: "VN_35",
    title: "Lâm Đồng",
    countryId: "VN",
  },
  {
    value: "TH_13",
    title: "Pathum Thani",
    countryId: "TH",
  },
  {
    value: "TH_37",
    title: "Amnat Charoen",
    countryId: "TH",
  },
  {
    value: "TH_15",
    title: "Ang Thong",
    countryId: "TH",
  },
  {
    value: "TH_10",
    title: "Bangkok",
    countryId: "TH",
  },
  {
    value: "TH_38",
    title: "Bueng Kan",
    countryId: "TH",
  },
  {
    value: "TH_31",
    title: "Buri Ram",
    countryId: "TH",
  },
  {
    value: "TH_24",
    title: "Chachoengsao",
    countryId: "TH",
  },
  {
    value: "TH_18",
    title: "Chai Nat",
    countryId: "TH",
  },
  {
    value: "TH_36",
    title: "Chaiyaphum",
    countryId: "TH",
  },
  {
    value: "TH_22",
    title: "Chanthaburi",
    countryId: "TH",
  },
  {
    value: "TH_50",
    title: "Chiang Mai",
    countryId: "TH",
  },
  {
    value: "TH_57",
    title: "Chiang Rai",
    countryId: "TH",
  },
  {
    value: "TH_20",
    title: "Chon Buri",
    countryId: "TH",
  },
  {
    value: "TH_86",
    title: "Chumphon",
    countryId: "TH",
  },
  {
    value: "TH_46",
    title: "Kalasin",
    countryId: "TH",
  },
  {
    value: "TH_62",
    title: "Kamphaeng Phet",
    countryId: "TH",
  },
  {
    value: "TH_71",
    title: "Kanchanaburi",
    countryId: "TH",
  },
  {
    value: "TH_40",
    title: "Khon Kaen",
    countryId: "TH",
  },
  {
    value: "TH_81",
    title: "Krabi",
    countryId: "TH",
  },
  {
    value: "TH_52",
    title: "Lampang",
    countryId: "TH",
  },
  {
    value: "TH_51",
    title: "Lamphun",
    countryId: "TH",
  },
  {
    value: "TH_42",
    title: "Loei",
    countryId: "TH",
  },
  {
    value: "TH_16",
    title: "Lop Buri",
    countryId: "TH",
  },
  {
    value: "TH_58",
    title: "Mae Hong Son",
    countryId: "TH",
  },
  {
    value: "TH_44",
    title: "Maha Sarakham",
    countryId: "TH",
  },
  {
    value: "TH_49",
    title: "Mukdahan",
    countryId: "TH",
  },
  {
    value: "TH_26",
    title: "Nakhon Nayok",
    countryId: "TH",
  },
  {
    value: "TH_73",
    title: "Nakhon Pathom",
    countryId: "TH",
  },
  {
    value: "TH_48",
    title: "Nakhon Phanom",
    countryId: "TH",
  },
  {
    value: "TH_30",
    title: "Nakhon Ratchasima",
    countryId: "TH",
  },
  {
    value: "TH_60",
    title: "Nakhon Sawan",
    countryId: "TH",
  },
  {
    value: "TH_80",
    title: "Nakhon Si Thammarat",
    countryId: "TH",
  },
  {
    value: "TH_55",
    title: "Nan",
    countryId: "TH",
  },
  {
    value: "TH_96",
    title: "Narathiwat",
    countryId: "TH",
  },
  {
    value: "TH_39",
    title: "Nong Bua Lam Phu",
    countryId: "TH",
  },
  {
    value: "TH_43",
    title: "Nong Khai",
    countryId: "TH",
  },
  {
    value: "TH_12",
    title: "Nonthaburi",
    countryId: "TH",
  },
  {
    value: "TH_94",
    title: "Pattani",
    countryId: "TH",
  },
  {
    value: "TH_S",
    title: "Pattaya",
    countryId: "TH",
  },
  {
    value: "TH_82",
    title: "Phangnga",
    countryId: "TH",
  },
  {
    value: "TH_93",
    title: "Phatthalung",
    countryId: "TH",
  },
  {
    value: "TM_A",
    title: "Ahal Region",
    countryId: "TM",
  },
  {
    value: "TH_56",
    title: "Phayao",
    countryId: "TH",
  },
  {
    value: "TH_67",
    title: "Phetchabun",
    countryId: "TH",
  },
  {
    value: "TH_76",
    title: "Phetchaburi",
    countryId: "TH",
  },
  {
    value: "TH_66",
    title: "Phichit",
    countryId: "TH",
  },
  {
    value: "TH_65",
    title: "Phitsanulok",
    countryId: "TH",
  },
  {
    value: "TH_14",
    title: "Phra Nakhon Si Ayutthaya",
    countryId: "TH",
  },
  {
    value: "TH_54",
    title: "Phrae",
    countryId: "TH",
  },
  {
    value: "TH_83",
    title: "Phuket",
    countryId: "TH",
  },
  {
    value: "TH_25",
    title: "Prachin Buri",
    countryId: "TH",
  },
  {
    value: "TH_77",
    title: "Prachuap Khiri Khan",
    countryId: "TH",
  },
  {
    value: "TH_85",
    title: "Ranong",
    countryId: "TH",
  },
  {
    value: "TH_70",
    title: "Ratchaburi",
    countryId: "TH",
  },
  {
    value: "TH_21",
    title: "Rayong",
    countryId: "TH",
  },
  {
    value: "TH_45",
    title: "Roi Et",
    countryId: "TH",
  },
  {
    value: "TH_27",
    title: "Sa Kaeo",
    countryId: "TH",
  },
  {
    value: "TH_47",
    title: "Sakon Nakhon",
    countryId: "TH",
  },
  {
    value: "TH_11",
    title: "Samut Prakan",
    countryId: "TH",
  },
  {
    value: "TH_74",
    title: "Samut Sakhon",
    countryId: "TH",
  },
  {
    value: "TH_75",
    title: "Samut Songkhram",
    countryId: "TH",
  },
  {
    value: "TH_19",
    title: "Saraburi",
    countryId: "TH",
  },
  {
    value: "TH_91",
    title: "Satun",
    countryId: "TH",
  },
  {
    value: "TH_33",
    title: "Si Sa Ket",
    countryId: "TH",
  },
  {
    value: "TH_17",
    title: "Sing Buri",
    countryId: "TH",
  },
  {
    value: "TH_90",
    title: "Songkhla",
    countryId: "TH",
  },
  {
    value: "TH_64",
    title: "Sukhothai",
    countryId: "TH",
  },
  {
    value: "TH_72",
    title: "Suphan Buri",
    countryId: "TH",
  },
  {
    value: "TH_84",
    title: "Surat Thani",
    countryId: "TH",
  },
  {
    value: "TH_32",
    title: "Surin",
    countryId: "TH",
  },
  {
    value: "TH_63",
    title: "Tak",
    countryId: "TH",
  },
  {
    value: "TH_92",
    title: "Trang",
    countryId: "TH",
  },
  {
    value: "TH_23",
    title: "Trat",
    countryId: "TH",
  },
  {
    value: "TH_34",
    title: "Ubon Ratchathani",
    countryId: "TH",
  },
  {
    value: "TH_41",
    title: "Udon Thani",
    countryId: "TH",
  },
  {
    value: "TH_61",
    title: "Uthai Thani",
    countryId: "TH",
  },
  {
    value: "TH_53",
    title: "Uttaradit",
    countryId: "TH",
  },
  {
    value: "TH_95",
    title: "Yala",
    countryId: "TH",
  },
  {
    value: "TH_35",
    title: "Yasothon",
    countryId: "TH",
  },
  {
    value: "BF_09",
    title: "Hauts-Bassins Region",
    countryId: "BF",
  },
  {
    value: "BF_GOU",
    title: "Gourma Province",
    countryId: "BF",
  },
  {
    value: "BF_GNA",
    title: "Gnagna Province",
    countryId: "BF",
  },
  {
    value: "BF_HOU",
    title: "Houet Province",
    countryId: "BF",
  },
  {
    value: "BF_IOB",
    title: "Ioba Province",
    countryId: "BF",
  },
  {
    value: "BF_KAD",
    title: "Kadiogo Province",
    countryId: "BF",
  },
  {
    value: "BF_KEN",
    title: "Kénédougou Province",
    countryId: "BF",
  },
  {
    value: "BF_KMP",
    title: "Kompienga Province",
    countryId: "BF",
  },
  {
    value: "BF_KOS",
    title: "Kossi Province",
    countryId: "BF",
  },
  {
    value: "BF_KOP",
    title: "Koulpélogo Province",
    countryId: "BF",
  },
  {
    value: "BF_KOT",
    title: "Kouritenga Province",
    countryId: "BF",
  },
  {
    value: "BF_KOW",
    title: "Kourwéogo Province",
    countryId: "BF",
  },
  {
    value: "BF_LER",
    title: "Léraba Province",
    countryId: "BF",
  },
  {
    value: "BF_LOR",
    title: "Loroum Province",
    countryId: "BF",
  },
  {
    value: "BF_MOU",
    title: "Mouhoun",
    countryId: "BF",
  },
  {
    value: "BF_NAO",
    title: "Nahouri Province",
    countryId: "BF",
  },
  {
    value: "BF_NAM",
    title: "Namentenga Province",
    countryId: "BF",
  },
  {
    value: "BF_NAY",
    title: "Nayala Province",
    countryId: "BF",
  },
  {
    value: "BF_10",
    title: "Nord Region, Burkina Faso",
    countryId: "BF",
  },
  {
    value: "BF_NOU",
    title: "Noumbiel Province",
    countryId: "BF",
  },
  {
    value: "BF_OUB",
    title: "Oubritenga Province",
    countryId: "BF",
  },
  {
    value: "BF_OUD",
    title: "Oudalan Province",
    countryId: "BF",
  },
  {
    value: "BF_PAS",
    title: "Passoré Province",
    countryId: "BF",
  },
  {
    value: "BF_11",
    title: "Plateau-Central Region",
    countryId: "BF",
  },
  {
    value: "BF_PON",
    title: "Poni Province",
    countryId: "BF",
  },
  {
    value: "BF_12",
    title: "Sahel Region",
    countryId: "BF",
  },
  {
    value: "BF_SNG",
    title: "Sanguié Province",
    countryId: "BF",
  },
  {
    value: "BF_SMT",
    title: "Sanmatenga Province",
    countryId: "BF",
  },
  {
    value: "BF_SEN",
    title: "Séno Province",
    countryId: "BF",
  },
  {
    value: "BF_SIS",
    title: "Sissili Province",
    countryId: "BF",
  },
  {
    value: "BF_SOM",
    title: "Soum Province",
    countryId: "BF",
  },
  {
    value: "BF_SOR",
    title: "Sourou Province",
    countryId: "BF",
  },
  {
    value: "BF_13",
    title: "Sud-Ouest Region",
    countryId: "BF",
  },
  {
    value: "BF_TAP",
    title: "Tapoa Province",
    countryId: "BF",
  },
  {
    value: "BF_TUI",
    title: "Tuy Province",
    countryId: "BF",
  },
  {
    value: "BF_YAG",
    title: "Yagha Province",
    countryId: "BF",
  },
  {
    value: "BF_YAT",
    title: "Yatenga Province",
    countryId: "BF",
  },
  {
    value: "BF_ZIR",
    title: "Ziro Province",
    countryId: "BF",
  },
  {
    value: "UG_112",
    title: "Kayunga District",
    countryId: "UG",
  },
  {
    value: "BF_ZON",
    title: "Zondoma Province",
    countryId: "BF",
  },
  {
    value: "BF_ZOU",
    title: "Zoundwéogo Province",
    countryId: "BF",
  },
  {
    value: "BF_GAN",
    title: "Ganzourgou Province",
    countryId: "BF",
  },
  {
    value: "BF_08",
    title: "Est Region",
    countryId: "BF",
  },
  {
    value: "BF_COM",
    title: "Comoé Province",
    countryId: "BF",
  },
  {
    value: "BF_07",
    title: "Centre-Sud Region",
    countryId: "BF",
  },
  {
    value: "BF_06",
    title: "Centre-Ouest Region",
    countryId: "BF",
  },
  {
    value: "BF_05",
    title: "Centre-Nord Region",
    countryId: "BF",
  },
  {
    value: "BF_04",
    title: "Centre-Est Region",
    countryId: "BF",
  },
  {
    value: "BF_03",
    title: "Centre",
    countryId: "BF",
  },
  {
    value: "BF_02",
    title: "Cascades Region",
    countryId: "BF",
  },
  {
    value: "BF_BLG",
    title: "Boulgou",
    countryId: "BF",
  },
  {
    value: "BF_BGR",
    title: "Bougouriba Province",
    countryId: "BF",
  },
  {
    value: "BF_01",
    title: "Boucle du Mouhoun Region",
    countryId: "BF",
  },
  {
    value: "BF_BAZ",
    title: "Bazèga Province",
    countryId: "BF",
  },
  {
    value: "BF_BAN",
    title: "Banwa Province",
    countryId: "BF",
  },
  {
    value: "BF_BAM",
    title: "Bam Province",
    countryId: "BF",
  },
  {
    value: "BF_BAL",
    title: "Balé Province",
    countryId: "BF",
  },
  {
    value: "CH_AG",
    title: "Aargau",
    countryId: "CH",
  },
  {
    value: "CH_AR",
    title: "Appenzell Ausserrhoden",
    countryId: "CH",
  },
  {
    value: "CH_AI",
    title: "Appenzell Innerrhoden",
    countryId: "CH",
  },
  {
    value: "CH_BL",
    title: "Basel-Land",
    countryId: "CH",
  },
  {
    value: "CH_BS",
    title: "Basel-Stadt",
    countryId: "CH",
  },
  {
    value: "CH_BE",
    title: "Bern",
    countryId: "CH",
  },
  {
    value: "CH_FR",
    title: "Fribourg",
    countryId: "CH",
  },
  {
    value: "CH_GE",
    title: "Geneva",
    countryId: "CH",
  },
  {
    value: "CH_GL",
    title: "Glarus",
    countryId: "CH",
  },
  {
    value: "CH_GR",
    title: "Graubünden",
    countryId: "CH",
  },
  {
    value: "CH_JU",
    title: "Jura",
    countryId: "CH",
  },
  {
    value: "CH_LU",
    title: "Lucerne",
    countryId: "CH",
  },
  {
    value: "CH_NW",
    title: "Nidwalden",
    countryId: "CH",
  },
  {
    value: "CH_OW",
    title: "Obwalden",
    countryId: "CH",
  },
  {
    value: "CH_SH",
    title: "Schaffhausen",
    countryId: "CH",
  },
  {
    value: "CH_SZ",
    title: "Schwyz",
    countryId: "CH",
  },
  {
    value: "CH_SO",
    title: "Solothurn",
    countryId: "CH",
  },
  {
    value: "CH_SG",
    title: "St. Gallen",
    countryId: "CH",
  },
  {
    value: "CH_TG",
    title: "Thurgau",
    countryId: "CH",
  },
  {
    value: "CH_TI",
    title: "Ticino",
    countryId: "CH",
  },
  {
    value: "CH_UR",
    title: "Uri",
    countryId: "CH",
  },
  {
    value: "CH_VS",
    title: "Valais",
    countryId: "CH",
  },
  {
    value: "CH_VD",
    title: "Vaud",
    countryId: "CH",
  },
  {
    value: "CH_ZG",
    title: "Zug",
    countryId: "CH",
  },
  {
    value: "CH_ZH",
    title: "Zürich",
    countryId: "CH",
  },
  {
    value: "ID_PB",
    title: "Papua Barat",
    countryId: "ID",
  },
  {
    value: "ID_PA",
    title: "Papua",
    countryId: "ID",
  },
  {
    value: "ID_NT",
    title: "Nusa Tenggara Timur",
    countryId: "ID",
  },
  {
    value: "ID_NB",
    title: "Nusa Tenggara Barat",
    countryId: "ID",
  },
  {
    value: "ID_MU",
    title: "Maluku Utara",
    countryId: "ID",
  },
  {
    value: "ID_MA",
    title: "Maluku",
    countryId: "ID",
  },
  {
    value: "ID_LA",
    title: "Lampung",
    countryId: "ID",
  },
  {
    value: "ID_KR",
    title: "Kepulauan Riau",
    countryId: "ID",
  },
  {
    value: "ID_BB",
    title: "Kepulauan Bangka Belitung",
    countryId: "ID",
  },
  {
    value: "ID_KU",
    title: "Kalimantan Utara",
    countryId: "ID",
  },
  {
    value: "ID_KI",
    title: "Kalimantan Timur",
    countryId: "ID",
  },
  {
    value: "ID_KT",
    title: "Kalimantan Tengah",
    countryId: "ID",
  },
  {
    value: "ID_KS",
    title: "Kalimantan Selatan",
    countryId: "ID",
  },
  {
    value: "ID_KB",
    title: "Kalimantan Barat",
    countryId: "ID",
  },
  {
    value: "ID_JI",
    title: "Jawa Timur",
    countryId: "ID",
  },
  {
    value: "ID_JT",
    title: "Jawa Tengah",
    countryId: "ID",
  },
  {
    value: "ID_SU",
    title: "Sumatera Utara",
    countryId: "ID",
  },
  {
    value: "ID_SS",
    title: "Sumatera Selatan",
    countryId: "ID",
  },
  {
    value: "ID_SB",
    title: "Sumatera Barat",
    countryId: "ID",
  },
  {
    value: "ID_SA",
    title: "Sulawesi Utara",
    countryId: "ID",
  },
  {
    value: "ID_SG",
    title: "Sulawesi Tenggara",
    countryId: "ID",
  },
  {
    value: "ID_ST",
    title: "Sulawesi Tengah",
    countryId: "ID",
  },
  {
    value: "ID_SN",
    title: "Sulawesi Selatan",
    countryId: "ID",
  },
  {
    value: "ID_SR",
    title: "Sulawesi Barat",
    countryId: "ID",
  },
  {
    value: "ID_AC",
    title: "Aceh",
    countryId: "ID",
  },
  {
    value: "ID_BA",
    title: "Bali",
    countryId: "ID",
  },
  {
    value: "ID_BT",
    title: "Banten",
    countryId: "ID",
  },
  {
    value: "ID_BE",
    title: "Bengkulu",
    countryId: "ID",
  },
  {
    value: "ID_YO",
    title: "DI Yogyakarta",
    countryId: "ID",
  },
  {
    value: "ID_JK",
    title: "DKI Jakarta",
    countryId: "ID",
  },
  {
    value: "ID_GO",
    title: "Gorontalo",
    countryId: "ID",
  },
  {
    value: "ID_JA",
    title: "Jambi",
    countryId: "ID",
  },
  {
    value: "ID_JB",
    title: "Jawa Barat",
    countryId: "ID",
  },
  {
    value: "UG_311",
    title: "Nakapiripirit District",
    countryId: "UG",
  },
  {
    value: "ID_RI",
    title: "Riau",
    countryId: "ID",
  },
  {
    value: "MZ_Q",
    title: "Zambezia Province",
    countryId: "MZ",
  },
  {
    value: "MZ_T",
    title: "Tete Province",
    countryId: "MZ",
  },
  {
    value: "MZ_S",
    title: "Sofala Province",
    countryId: "MZ",
  },
  {
    value: "MZ_A",
    title: "Niassa Province",
    countryId: "MZ",
  },
  {
    value: "MZ_N",
    title: "Nampula Province",
    countryId: "MZ",
  },
  {
    value: "MZ_L",
    title: "Maputo Province",
    countryId: "MZ",
  },
  {
    value: "MZ_B",
    title: "Manica Province",
    countryId: "MZ",
  },
  {
    value: "MZ_I",
    title: "Inhambane Province",
    countryId: "MZ",
  },
  {
    value: "MZ_MPM",
    title: "Maputo",
    countryId: "MZ",
  },
  {
    value: "MZ_G",
    title: "Gaza Province",
    countryId: "MZ",
  },
  {
    value: "MZ_P",
    title: "Cabo Delgado Province",
    countryId: "MZ",
  },
  {
    value: "UA_35",
    title: "Kirovohradska oblast",
    countryId: "UA",
  },
  {
    value: "UA_30",
    title: "Kyiv",
    countryId: "UA",
  },
  {
    value: "UA_32",
    title: "Kyivska oblast",
    countryId: "UA",
  },
  {
    value: "UA_09",
    title: "Luhanska oblast",
    countryId: "UA",
  },
  {
    value: "UA_46",
    title: "Lvivska oblast",
    countryId: "UA",
  },
  {
    value: "UA_48",
    title: "Mykolaivska oblast",
    countryId: "UA",
  },
  {
    value: "UA_59",
    title: "Sumska oblast",
    countryId: "UA",
  },
  {
    value: "UA_61",
    title: "Ternopilska oblast",
    countryId: "UA",
  },
  {
    value: "UA_05",
    title: "Vinnytska oblast",
    countryId: "UA",
  },
  {
    value: "UA_07",
    title: "Volynska oblast",
    countryId: "UA",
  },
  {
    value: "UA_21",
    title: "Zakarpatska Oblast",
    countryId: "UA",
  },
  {
    value: "UA_23",
    title: "Zaporizka oblast",
    countryId: "UA",
  },
  {
    value: "UA_18",
    title: "Zhytomyrska oblast",
    countryId: "UA",
  },
  {
    value: "UA_51",
    title: "Odeska oblast",
    countryId: "UA",
  },
  {
    value: "UA_53",
    title: "Poltavska oblast",
    countryId: "UA",
  },
  {
    value: "UA_56",
    title: "Rivnenska oblast",
    countryId: "UA",
  },
  {
    value: "UA_43",
    title: "Autonomous Republic of Crimea",
    countryId: "UA",
  },
  {
    value: "UA_71",
    title: "Cherkaska oblast",
    countryId: "UA",
  },
  {
    value: "UA_74",
    title: "Chernihivska oblast",
    countryId: "UA",
  },
  {
    value: "UA_77",
    title: "Chernivetska oblast",
    countryId: "UA",
  },
  {
    value: "UA_12",
    title: "Dnipropetrovska oblast",
    countryId: "UA",
  },
  {
    value: "UA_14",
    title: "Donetska oblast",
    countryId: "UA",
  },
  {
    value: "UA_26",
    title: "Ivano-Frankivska oblast",
    countryId: "UA",
  },
  {
    value: "UA_63",
    title: "Kharkivska oblast",
    countryId: "UA",
  },
  {
    value: "UA_65",
    title: "Khersonska oblast",
    countryId: "UA",
  },
  {
    value: "UA_68",
    title: "Khmelnytska oblast",
    countryId: "UA",
  },
  {
    value: "LT_56",
    title: "Vilkaviškis District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_55",
    title: "Varėna District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_54",
    title: "Utena District Municipality",
    countryId: "LT",
  },
  {
    value: "BM_PAG",
    title: "Paget Parish",
    countryId: "BM",
  },
  {
    value: "LT_09",
    title: "Ignalina District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_08",
    title: "Elektrėnai municipality",
    countryId: "LT",
  },
  {
    value: "LT_07",
    title: "Druskininkai municipality",
    countryId: "LT",
  },
  {
    value: "LT_06",
    title: "Biržai District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_03",
    title: "Alytus District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_19",
    title: "Kelmė District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_20",
    title: "Klaipeda City Municipality",
    countryId: "LT",
  },
  {
    value: "LT_KL",
    title: "Klaipėda County",
    countryId: "LT",
  },
  {
    value: "LT_21",
    title: "Klaipėda District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_22",
    title: "Kretinga District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_23",
    title: "Kupiškis District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_24",
    title: "Lazdijai District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_MR",
    title: "Marijampolė County",
    countryId: "LT",
  },
  {
    value: "LT_25",
    title: "Marijampolė Municipality",
    countryId: "LT",
  },
  {
    value: "LT_18",
    title: "Kėdainiai District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_26",
    title: "Mažeikiai District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_27",
    title: "Molėtai District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_28",
    title: "Neringa Municipality",
    countryId: "LT",
  },
  {
    value: "LT_29",
    title: "Pagėgiai municipality",
    countryId: "LT",
  },
  {
    value: "LT_30",
    title: "Pakruojis District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_31",
    title: "Palanga City Municipality",
    countryId: "LT",
  },
  {
    value: "LT_32",
    title: "Panevėžys City Municipality",
    countryId: "LT",
  },
  {
    value: "LT_PN",
    title: "Panevėžys County",
    countryId: "LT",
  },
  {
    value: "LT_12",
    title: "Jurbarkas District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_11",
    title: "Joniškis District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_10",
    title: "Jonava District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_AL",
    title: "Alytus County",
    countryId: "LT",
  },
  {
    value: "LT_02",
    title: "Alytus City Municipality",
    countryId: "LT",
  },
  {
    value: "LT_01",
    title: "Akmenė District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_05",
    title: "Birštonas Municipality",
    countryId: "LT",
  },
  {
    value: "LT_UT",
    title: "Utena County",
    countryId: "LT",
  },
  {
    value: "LT_53",
    title: "Ukmergė District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_52",
    title: "Trakai District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_51",
    title: "Telšiai District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_TE",
    title: "Telšiai County",
    countryId: "LT",
  },
  {
    value: "LT_50",
    title: "Tauragė District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_TA",
    title: "Tauragė County",
    countryId: "LT",
  },
  {
    value: "LT_49",
    title: "Švenčionys District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_48",
    title: "Skuodas District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_47",
    title: "Širvintos District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_46",
    title: "Šilutė District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_45",
    title: "Šilalė District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_44",
    title: "Šiauliai District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_SA",
    title: "Šiauliai County",
    countryId: "LT",
  },
  {
    value: "LT_43",
    title: "Šiauliai City Municipality",
    countryId: "LT",
  },
  {
    value: "LT_42",
    title: "Šalčininkai District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_41",
    title: "Šakiai District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_40",
    title: "Rokiškis District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_39",
    title: "Rietavas municipality",
    countryId: "LT",
  },
  {
    value: "LT_38",
    title: "Raseiniai District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_37",
    title: "Radviliškis District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_36",
    title: "Prienai District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_35",
    title: "Plungė District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_34",
    title: "Pasvalys District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_33",
    title: "Panevėžys District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_13",
    title: "Kaišiadorys District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_14",
    title: "Kalvarija municipality",
    countryId: "LT",
  },
  {
    value: "LT_15",
    title: "Kaunas City Municipality",
    countryId: "LT",
  },
  {
    value: "LT_KU",
    title: "Kaunas County",
    countryId: "LT",
  },
  {
    value: "LT_16",
    title: "Kaunas District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_17",
    title: "Kazlų Rūda municipality",
    countryId: "LT",
  },
  {
    value: "LT_60",
    title: "Zarasai District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_59",
    title: "Visaginas Municipality",
    countryId: "LT",
  },
  {
    value: "LT_58",
    title: "Vilnius District Municipality",
    countryId: "LT",
  },
  {
    value: "LT_VL",
    title: "Vilnius County",
    countryId: "LT",
  },
  {
    value: "LT_57",
    title: "Vilnius City Municipality",
    countryId: "LT",
  },
  {
    value: "VE_V",
    title: "Zulia",
    countryId: "VE",
  },
  {
    value: "VE_U",
    title: "Yaracuy",
    countryId: "VE",
  },
  {
    value: "VE_T",
    title: "Trujillo",
    countryId: "VE",
  },
  {
    value: "VE_S",
    title: "Táchira",
    countryId: "VE",
  },
  {
    value: "VE_R",
    title: "Sucre",
    countryId: "VE",
  },
  {
    value: "VE_P",
    title: "Portuguesa",
    countryId: "VE",
  },
  {
    value: "VE_O",
    title: "Nueva Esparta",
    countryId: "VE",
  },
  {
    value: "VE_N",
    title: "Monagas",
    countryId: "VE",
  },
  {
    value: "VE_M",
    title: "Miranda",
    countryId: "VE",
  },
  {
    value: "VE_L",
    title: "Mérida",
    countryId: "VE",
  },
  {
    value: "VE_K",
    title: "Lara",
    countryId: "VE",
  },
  {
    value: "VE_X",
    title: "La Guaira",
    countryId: "VE",
  },
  {
    value: "VE_J",
    title: "Guárico",
    countryId: "VE",
  },
  {
    value: "VE_W",
    title: "Federal Dependencies of Venezuela",
    countryId: "VE",
  },
  {
    value: "VE_I",
    title: "Falcón",
    countryId: "VE",
  },
  {
    value: "VE_A",
    title: "Distrito Capital",
    countryId: "VE",
  },
  {
    value: "VE_Y",
    title: "Delta Amacuro",
    countryId: "VE",
  },
  {
    value: "VE_H",
    title: "Cojedes",
    countryId: "VE",
  },
  {
    value: "VE_G",
    title: "Carabobo",
    countryId: "VE",
  },
  {
    value: "VE_F",
    title: "Bolívar",
    countryId: "VE",
  },
  {
    value: "VE_E",
    title: "Barinas",
    countryId: "VE",
  },
  {
    value: "VE_D",
    title: "Aragua",
    countryId: "VE",
  },
  {
    value: "VE_C",
    title: "Apure",
    countryId: "VE",
  },
  {
    value: "VE_B",
    title: "Anzoátegui",
    countryId: "VE",
  },
  {
    value: "VE_Z",
    title: "Amazonas",
    countryId: "VE",
  },
  {
    value: "SA_08",
    title: "Northern Borders",
    countryId: "SA",
  },
  {
    value: "SA_07",
    title: "Tabuk",
    countryId: "SA",
  },
  {
    value: "SA_01",
    title: "Riyadh",
    countryId: "SA",
  },
  {
    value: "SA_10",
    title: "Najran",
    countryId: "SA",
  },
  {
    value: "SA_02",
    title: "Makkah",
    countryId: "SA",
  },
  {
    value: "SA_09",
    title: "Jizan",
    countryId: "SA",
  },
  {
    value: "SA_06",
    title: "Ha'il",
    countryId: "SA",
  },
  {
    value: "SA_04",
    title: "Eastern Province",
    countryId: "SA",
  },
  {
    value: "SA_05",
    title: "Al-Qassim",
    countryId: "SA",
  },
  {
    value: "SA_03",
    title: "Al Madinah",
    countryId: "SA",
  },
  {
    value: "SA_12",
    title: "Al Jawf",
    countryId: "SA",
  },
  {
    value: "SA_11",
    title: "Al Bahah",
    countryId: "SA",
  },
  {
    value: "SA_14",
    title: "'Asir",
    countryId: "SA",
  },
  {
    value: "ST_P",
    title: "Príncipe Province",
    countryId: "ST",
  },
  {
    value: "ST_S",
    title: "São Tomé Province",
    countryId: "ST",
  },
  {
    value: "BM_SOU",
    title: "Southampton Parish",
    countryId: "BM",
  },
  {
    value: "BM_WAR",
    title: "Warwick Parish",
    countryId: "BM",
  },
  {
    value: "BM_DEV",
    title: "Devonshire Parish",
    countryId: "BM",
  },
  {
    value: "BM_HA",
    title: "Hamilton Parish",
    countryId: "BM",
  },
  {
    value: "BM_PEM",
    title: "Pembroke Parish",
    countryId: "BM",
  },
  {
    value: "BM_SGE",
    title: "Saint George's Parish",
    countryId: "BM",
  },
  {
    value: "BM_SAN",
    title: "Sandys Parish",
    countryId: "BM",
  },
  {
    value: "BM_SMI",
    title: "Smith's Parish,",
    countryId: "BM",
  },
  {
    value: "LI_05",
    title: "Planken",
    countryId: "LI",
  },
  {
    value: "LI_06",
    title: "Ruggell",
    countryId: "LI",
  },
  {
    value: "LI_07",
    title: "Schaan",
    countryId: "LI",
  },
  {
    value: "LI_08",
    title: "Schellenberg",
    countryId: "LI",
  },
  {
    value: "LI_09",
    title: "Triesen",
    countryId: "LI",
  },
  {
    value: "LI_10",
    title: "Triesenberg",
    countryId: "LI",
  },
  {
    value: "LI_11",
    title: "Vaduz",
    countryId: "LI",
  },
  {
    value: "LI_03",
    title: "Gamprin",
    countryId: "LI",
  },
  {
    value: "LI_04",
    title: "Mauren",
    countryId: "LI",
  },
  {
    value: "LI_01",
    title: "Balzers",
    countryId: "LI",
  },
  {
    value: "LI_02",
    title: "Eschen",
    countryId: "LI",
  },
  {
    value: "SI_008",
    title: "Brezovica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_152",
    title: "Cankova Municipality",
    countryId: "SI",
  },
  {
    value: "SI_012",
    title: "Cerklje na Gorenjskem Municipality",
    countryId: "SI",
  },
  {
    value: "SI_013",
    title: "Cerknica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_014",
    title: "Cerkno Municipality",
    countryId: "SI",
  },
  {
    value: "SI_153",
    title: "Cerkvenjak Municipality",
    countryId: "SI",
  },
  {
    value: "SI_011",
    title: "City Municipality of Celje",
    countryId: "SI",
  },
  {
    value: "SI_085",
    title: "City Municipality of Novo Mesto",
    countryId: "SI",
  },
  {
    value: "SI_015",
    title: "Črenšovci Municipality",
    countryId: "SI",
  },
  {
    value: "SI_016",
    title: "Črna na Koroškem Municipality",
    countryId: "SI",
  },
  {
    value: "SI_017",
    title: "Črnomelj Municipality",
    countryId: "SI",
  },
  {
    value: "SI_018",
    title: "Destrnik Municipality",
    countryId: "SI",
  },
  {
    value: "SI_019",
    title: "Divača Municipality",
    countryId: "SI",
  },
  {
    value: "SI_154",
    title: "Dobje Municipality",
    countryId: "SI",
  },
  {
    value: "SI_020",
    title: "Dobrepolje Municipality",
    countryId: "SI",
  },
  {
    value: "SI_155",
    title: "Dobrna Municipality",
    countryId: "SI",
  },
  {
    value: "SI_021",
    title: "Dobrova–Polhov Gradec Municipality",
    countryId: "SI",
  },
  {
    value: "SI_156",
    title: "Dobrovnik Municipality",
    countryId: "SI",
  },
  {
    value: "SI_022",
    title: "Dol pri Ljubljani Municipality",
    countryId: "SI",
  },
  {
    value: "SI_157",
    title: "Dolenjske Toplice Municipality",
    countryId: "SI",
  },
  {
    value: "SI_023",
    title: "Domžale Municipality",
    countryId: "SI",
  },
  {
    value: "SI_024",
    title: "Dornava Municipality",
    countryId: "SI",
  },
  {
    value: "SI_025",
    title: "Dravograd Municipality",
    countryId: "SI",
  },
  {
    value: "SI_026",
    title: "Duplek Municipality",
    countryId: "SI",
  },
  {
    value: "SI_027",
    title: "Gorenja Vas–Poljane Municipality",
    countryId: "SI",
  },
  {
    value: "SI_028",
    title: "Gorišnica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_109",
    title: "Semič Municipality",
    countryId: "SI",
  },
  {
    value: "SI_183",
    title: "Šempeter–Vrtojba Municipality",
    countryId: "SI",
  },
  {
    value: "SI_117",
    title: "Šenčur Municipality",
    countryId: "SI",
  },
  {
    value: "SI_118",
    title: "Šentilj Municipality",
    countryId: "SI",
  },
  {
    value: "SI_119",
    title: "Šentjernej Municipality",
    countryId: "SI",
  },
  {
    value: "SI_120",
    title: "Šentjur Municipality",
    countryId: "SI",
  },
  {
    value: "SI_211",
    title: "Šentrupert Municipality",
    countryId: "SI",
  },
  {
    value: "SI_110",
    title: "Sevnica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_111",
    title: "Sežana Municipality",
    countryId: "SI",
  },
  {
    value: "SI_122",
    title: "Škofja Loka Municipality",
    countryId: "SI",
  },
  {
    value: "SI_112",
    title: "Slovenj Gradec City Municipality",
    countryId: "SI",
  },
  {
    value: "SI_113",
    title: "Slovenska Bistrica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_114",
    title: "Slovenske Konjice Municipality",
    countryId: "SI",
  },
  {
    value: "SI_124",
    title: "Šmarje pri Jelšah Municipality",
    countryId: "SI",
  },
  {
    value: "SI_206",
    title: "Šmarješke Toplice Municipality",
    countryId: "SI",
  },
  {
    value: "SI_125",
    title: "Šmartno ob Paki Municipality",
    countryId: "SI",
  },
  {
    value: "SI_194",
    title: "Šmartno pri Litiji Municipality",
    countryId: "SI",
  },
  {
    value: "SI_179",
    title: "Sodražica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_180",
    title: "Solčava Municipality",
    countryId: "SI",
  },
  {
    value: "SI_126",
    title: "Šoštanj Municipality",
    countryId: "SI",
  },
  {
    value: "SI_202",
    title: "Središče ob Dravi",
    countryId: "SI",
  },
  {
    value: "SI_207",
    title: "Gorje Municipality",
    countryId: "SI",
  },
  {
    value: "SI_174",
    title: "Prebold Municipality",
    countryId: "SI",
  },
  {
    value: "SI_094",
    title: "Postojna Municipality",
    countryId: "SI",
  },
  {
    value: "SI_171",
    title: "Oplotnica",
    countryId: "SI",
  },
  {
    value: "SI_173",
    title: "Polzela Municipality",
    countryId: "SI",
  },
  {
    value: "SI_200",
    title: "Poljčane Municipality",
    countryId: "SI",
  },
  {
    value: "SI_093",
    title: "Podvelka Municipality",
    countryId: "SI",
  },
  {
    value: "SI_172",
    title: "Podlehnik Municipality",
    countryId: "SI",
  },
  {
    value: "SI_092",
    title: "Podčetrtek Municipality",
    countryId: "SI",
  },
  {
    value: "SI_091",
    title: "Pivka Municipality",
    countryId: "SI",
  },
  {
    value: "SI_090",
    title: "Piran Municipality",
    countryId: "SI",
  },
  {
    value: "SI_089",
    title: "Pesnica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_088",
    title: "Osilnica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_087",
    title: "Ormož Municipality",
    countryId: "SI",
  },
  {
    value: "SI_029",
    title: "Gornja Radgona Municipality",
    countryId: "SI",
  },
  {
    value: "SI_115",
    title: "Starše Municipality",
    countryId: "SI",
  },
  {
    value: "SI_127",
    title: "Štore Municipality",
    countryId: "SI",
  },
  {
    value: "SI_203",
    title: "Straža Municipality",
    countryId: "SI",
  },
  {
    value: "SI_181",
    title: "Sveta Ana Municipality",
    countryId: "SI",
  },
  {
    value: "SI_204",
    title: "Sveta Trojica v Slovenskih Goricah Municipality",
    countryId: "SI",
  },
  {
    value: "SI_182",
    title: "Sveti Andraž v Slovenskih Goricah Municipality",
    countryId: "SI",
  },
  {
    value: "SI_116",
    title: "Sveti Jurij ob Ščavnici Municipality",
    countryId: "SI",
  },
  {
    value: "SI_210",
    title: "Sveti Jurij v Slovenskih Goricah Municipality",
    countryId: "SI",
  },
  {
    value: "SI_205",
    title: "Sveti Tomaž Municipality",
    countryId: "SI",
  },
  {
    value: "SI_184",
    title: "Tabor Municipality",
    countryId: "SI",
  },
  {
    value: "SI_010",
    title: "Tišina Municipality",
    countryId: "SI",
  },
  {
    value: "SI_128",
    title: "Tolmin Municipality",
    countryId: "SI",
  },
  {
    value: "SI_129",
    title: "Trbovlje Municipality",
    countryId: "SI",
  },
  {
    value: "SI_130",
    title: "Trebnje Municipality",
    countryId: "SI",
  },
  {
    value: "SI_185",
    title: "Trnovska Vas Municipality",
    countryId: "SI",
  },
  {
    value: "SI_131",
    title: "Tržič Municipality",
    countryId: "SI",
  },
  {
    value: "SI_186",
    title: "Trzin Municipality",
    countryId: "SI",
  },
  {
    value: "SI_132",
    title: "Turnišče Municipality",
    countryId: "SI",
  },
  {
    value: "SI_187",
    title: "Velika Polana Municipality",
    countryId: "SI",
  },
  {
    value: "SI_134",
    title: "Velike Lašče Municipality",
    countryId: "SI",
  },
  {
    value: "SI_188",
    title: "Veržej Municipality",
    countryId: "SI",
  },
  {
    value: "SI_135",
    title: "Videm Municipality",
    countryId: "SI",
  },
  {
    value: "SI_136",
    title: "Vipava Municipality",
    countryId: "SI",
  },
  {
    value: "SI_137",
    title: "Vitanje Municipality",
    countryId: "SI",
  },
  {
    value: "SI_138",
    title: "Vodice Municipality",
    countryId: "SI",
  },
  {
    value: "SI_139",
    title: "Vojnik Municipality",
    countryId: "SI",
  },
  {
    value: "SI_189",
    title: "Vransko Municipality",
    countryId: "SI",
  },
  {
    value: "SI_140",
    title: "Vrhnika Municipality",
    countryId: "SI",
  },
  {
    value: "SI_141",
    title: "Vuzenica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_142",
    title: "Zagorje ob Savi Municipality",
    countryId: "SI",
  },
  {
    value: "SI_190",
    title: "Žalec Municipality",
    countryId: "SI",
  },
  {
    value: "SI_143",
    title: "Zavrč Municipality",
    countryId: "SI",
  },
  {
    value: "SI_146",
    title: "Železniki Municipality",
    countryId: "SI",
  },
  {
    value: "SI_191",
    title: "Žetale Municipality",
    countryId: "SI",
  },
  {
    value: "SI_147",
    title: "Žiri Municipality",
    countryId: "SI",
  },
  {
    value: "SI_192",
    title: "Žirovnica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_144",
    title: "Zreče Municipality",
    countryId: "SI",
  },
  {
    value: "SI_193",
    title: "Žužemberk Municipality",
    countryId: "SI",
  },
  {
    value: "SI_097",
    title: "Puconci Municipality",
    countryId: "SI",
  },
  {
    value: "SI_099",
    title: "Radeče Municipality",
    countryId: "SI",
  },
  {
    value: "SI_100",
    title: "Radenci Municipality",
    countryId: "SI",
  },
  {
    value: "SI_101",
    title: "Radlje ob Dravi Municipality",
    countryId: "SI",
  },
  {
    value: "SI_102",
    title: "Radovljica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_103",
    title: "Ravne na Koroškem Municipality",
    countryId: "SI",
  },
  {
    value: "SI_002",
    title: "Beltinci Municipality",
    countryId: "SI",
  },
  {
    value: "SI_213",
    title: "Ankaran Municipality",
    countryId: "SI",
  },
  {
    value: "SI_001",
    title: "Ajdovščina Municipality",
    countryId: "SI",
  },
  {
    value: "SI_176",
    title: "Razkrižje Municipality",
    countryId: "SI",
  },
  {
    value: "SI_209",
    title: "Rečica ob Savinji Municipality",
    countryId: "SI",
  },
  {
    value: "SI_201",
    title: "Renče–Vogrsko Municipality",
    countryId: "SI",
  },
  {
    value: "SI_104",
    title: "Ribnica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_177",
    title: "Ribnica na Pohorju Municipality",
    countryId: "SI",
  },
  {
    value: "SI_106",
    title: "Rogaška Slatina Municipality",
    countryId: "SI",
  },
  {
    value: "SI_105",
    title: "Rogašovci Municipality",
    countryId: "SI",
  },
  {
    value: "SI_107",
    title: "Rogatec Municipality",
    countryId: "SI",
  },
  {
    value: "SI_108",
    title: "Ruše Municipality",
    countryId: "SI",
  },
  {
    value: "SI_033",
    title: "Šalovci Municipality",
    countryId: "SI",
  },
  {
    value: "SI_151",
    title: "Braslovče Municipality",
    countryId: "SI",
  },
  {
    value: "SI_007",
    title: "Brda Municipality",
    countryId: "SI",
  },
  {
    value: "SI_009",
    title: "Brežice Municipality",
    countryId: "SI",
  },
  {
    value: "SI_161",
    title: "Hodoš Municipality",
    countryId: "SI",
  },
  {
    value: "SI_162",
    title: "Horjul Municipality",
    countryId: "SI",
  },
  {
    value: "SI_034",
    title: "Hrastnik Municipality",
    countryId: "SI",
  },
  {
    value: "SI_035",
    title: "Hrpelje–Kozina Municipality",
    countryId: "SI",
  },
  {
    value: "SI_036",
    title: "Idrija Municipality",
    countryId: "SI",
  },
  {
    value: "SI_037",
    title: "Ig Municipality",
    countryId: "SI",
  },
  {
    value: "SI_039",
    title: "Ivančna Gorica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_040",
    title: "Izola Municipality",
    countryId: "SI",
  },
  {
    value: "SI_041",
    title: "Jesenice Municipality",
    countryId: "SI",
  },
  {
    value: "SI_163",
    title: "Jezersko Municipality",
    countryId: "SI",
  },
  {
    value: "SI_042",
    title: "Juršinci Municipality",
    countryId: "SI",
  },
  {
    value: "SI_043",
    title: "Kamnik Municipality",
    countryId: "SI",
  },
  {
    value: "SI_044",
    title: "Kanal ob Soči Municipality",
    countryId: "SI",
  },
  {
    value: "SI_045",
    title: "Kidričevo Municipality",
    countryId: "SI",
  },
  {
    value: "SI_046",
    title: "Kobarid Municipality",
    countryId: "SI",
  },
  {
    value: "SI_047",
    title: "Kobilje Municipality",
    countryId: "SI",
  },
  {
    value: "SI_048",
    title: "Kočevje Municipality",
    countryId: "SI",
  },
  {
    value: "SI_049",
    title: "Komen Municipality",
    countryId: "SI",
  },
  {
    value: "SI_164",
    title: "Komenda Municipality",
    countryId: "SI",
  },
  {
    value: "SI_050",
    title: "Koper City Municipality",
    countryId: "SI",
  },
  {
    value: "SI_197",
    title: "Kostanjevica na Krki Municipality",
    countryId: "SI",
  },
  {
    value: "SI_165",
    title: "Kostel Municipality",
    countryId: "SI",
  },
  {
    value: "SI_051",
    title: "Kozje Municipality",
    countryId: "SI",
  },
  {
    value: "SI_052",
    title: "Kranj City Municipality",
    countryId: "SI",
  },
  {
    value: "SI_053",
    title: "Kranjska Gora Municipality",
    countryId: "SI",
  },
  {
    value: "SI_166",
    title: "Križevci Municipality",
    countryId: "SI",
  },
  {
    value: "SI_055",
    title: "Kungota",
    countryId: "SI",
  },
  {
    value: "SI_056",
    title: "Kuzma Municipality",
    countryId: "SI",
  },
  {
    value: "SI_057",
    title: "Laško Municipality",
    countryId: "SI",
  },
  {
    value: "SI_058",
    title: "Lenart Municipality",
    countryId: "SI",
  },
  {
    value: "SI_059",
    title: "Lendava Municipality",
    countryId: "SI",
  },
  {
    value: "SI_060",
    title: "Litija Municipality",
    countryId: "SI",
  },
  {
    value: "SI_061",
    title: "Ljubljana City Municipality",
    countryId: "SI",
  },
  {
    value: "SI_062",
    title: "Ljubno Municipality",
    countryId: "SI",
  },
  {
    value: "SI_063",
    title: "Ljutomer Municipality",
    countryId: "SI",
  },
  {
    value: "SI_208",
    title: "Log–Dragomer Municipality",
    countryId: "SI",
  },
  {
    value: "SI_064",
    title: "Logatec Municipality",
    countryId: "SI",
  },
  {
    value: "SI_065",
    title: "Loška Dolina Municipality",
    countryId: "SI",
  },
  {
    value: "SI_066",
    title: "Loški Potok Municipality",
    countryId: "SI",
  },
  {
    value: "SI_167",
    title: "Lovrenc na Pohorju Municipality",
    countryId: "SI",
  },
  {
    value: "SI_067",
    title: "Luče Municipality",
    countryId: "SI",
  },
  {
    value: "SI_068",
    title: "Lukovica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_069",
    title: "Majšperk Municipality",
    countryId: "SI",
  },
  {
    value: "SI_198",
    title: "Makole Municipality",
    countryId: "SI",
  },
  {
    value: "SI_070",
    title: "Maribor City Municipality",
    countryId: "SI",
  },
  {
    value: "SI_168",
    title: "Markovci Municipality",
    countryId: "SI",
  },
  {
    value: "SI_071",
    title: "Medvode Municipality",
    countryId: "SI",
  },
  {
    value: "SI_072",
    title: "Mengeš Municipality",
    countryId: "SI",
  },
  {
    value: "SI_073",
    title: "Metlika Municipality",
    countryId: "SI",
  },
  {
    value: "SI_074",
    title: "Mežica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_169",
    title: "Miklavž na Dravskem Polju Municipality",
    countryId: "SI",
  },
  {
    value: "SI_075",
    title: "Miren–Kostanjevica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_212",
    title: "Mirna Municipality",
    countryId: "SI",
  },
  {
    value: "SI_170",
    title: "Mirna Peč Municipality",
    countryId: "SI",
  },
  {
    value: "SI_076",
    title: "Mislinja Municipality",
    countryId: "SI",
  },
  {
    value: "SI_199",
    title: "Mokronog–Trebelno Municipality",
    countryId: "SI",
  },
  {
    value: "SI_077",
    title: "Moravče Municipality",
    countryId: "SI",
  },
  {
    value: "SI_078",
    title: "Moravske Toplice Municipality",
    countryId: "SI",
  },
  {
    value: "SI_079",
    title: "Mozirje Municipality",
    countryId: "SI",
  },
  {
    value: "SI_195",
    title: "Municipality of Apače",
    countryId: "SI",
  },
  {
    value: "SI_196",
    title: "Municipality of Cirkulane",
    countryId: "SI",
  },
  {
    value: "SI_038",
    title: "Municipality of Ilirska Bistrica",
    countryId: "SI",
  },
  {
    value: "SI_054",
    title: "Municipality of Krško",
    countryId: "SI",
  },
  {
    value: "SI_123",
    title: "Municipality of Škofljica",
    countryId: "SI",
  },
  {
    value: "SI_080",
    title: "Murska Sobota City Municipality",
    countryId: "SI",
  },
  {
    value: "SI_081",
    title: "Muta Municipality",
    countryId: "SI",
  },
  {
    value: "SI_082",
    title: "Naklo Municipality",
    countryId: "SI",
  },
  {
    value: "SI_083",
    title: "Nazarje Municipality",
    countryId: "SI",
  },
  {
    value: "SI_084",
    title: "Nova Gorica City Municipality",
    countryId: "SI",
  },
  {
    value: "SI_086",
    title: "Odranci Municipality",
    countryId: "SI",
  },
  {
    value: "SI_175",
    title: "Prevalje Municipality",
    countryId: "SI",
  },
  {
    value: "SI_095",
    title: "Preddvor Municipality",
    countryId: "SI",
  },
  {
    value: "SI_006",
    title: "Bovec Municipality",
    countryId: "SI",
  },
  {
    value: "SI_005",
    title: "Borovnica Municipality",
    countryId: "SI",
  },
  {
    value: "SI_004",
    title: "Bohinj Municipality",
    countryId: "SI",
  },
  {
    value: "SI_150",
    title: "Bloke Municipality",
    countryId: "SI",
  },
  {
    value: "SI_003",
    title: "Bled Municipality",
    countryId: "SI",
  },
  {
    value: "SI_149",
    title: "Bistrica ob Sotli Municipality",
    countryId: "SI",
  },
  {
    value: "SI_148",
    title: "Benedikt Municipality",
    countryId: "SI",
  },
  {
    value: "SI_096",
    title: "Ptuj City Municipality",
    countryId: "SI",
  },
  {
    value: "SI_098",
    title: "Rače–Fram Municipality",
    countryId: "SI",
  },
  {
    value: "SI_030",
    title: "Gornji Grad Municipality",
    countryId: "SI",
  },
  {
    value: "SI_031",
    title: "Gornji Petrovci Municipality",
    countryId: "SI",
  },
  {
    value: "SI_158",
    title: "Grad Municipality",
    countryId: "SI",
  },
  {
    value: "SI_032",
    title: "Grosuplje Municipality",
    countryId: "SI",
  },
  {
    value: "SI_159",
    title: "Hajdina Municipality",
    countryId: "SI",
  },
  {
    value: "SI_160",
    title: "Hoče–Slivnica Municipality",
    countryId: "SI",
  },
  {
    value: "MN_073",
    title: "Arkhangai Province",
    countryId: "MN",
  },
  {
    value: "MN_059",
    title: "Dundgovi Province",
    countryId: "MN",
  },
  {
    value: "MN_039",
    title: "Khentii Province",
    countryId: "MN",
  },
  {
    value: "MN_043",
    title: "Khovd Province",
    countryId: "MN",
  },
  {
    value: "MN_041",
    title: "Khövsgöl Province",
    countryId: "MN",
  },
  {
    value: "MN_063",
    title: "Dornogovi Province",
    countryId: "MN",
  },
  {
    value: "MN_061",
    title: "Dornod Province",
    countryId: "MN",
  },
  {
    value: "MN_053",
    title: "Ömnögovi Province",
    countryId: "MN",
  },
  {
    value: "MN_035",
    title: "Orkhon Province",
    countryId: "MN",
  },
  {
    value: "MN_055",
    title: "Övörkhangai Province",
    countryId: "MN",
  },
  {
    value: "MN_037",
    title: "Darkhan-Uul Province",
    countryId: "MN",
  },
  {
    value: "MN_046",
    title: "Uvs Province",
    countryId: "MN",
  },
  {
    value: "MN_057",
    title: "Zavkhan Province",
    countryId: "MN",
  },
  {
    value: "MN_049",
    title: "Selenge Province",
    countryId: "MN",
  },
  {
    value: "MN_051",
    title: "Sükhbaatar Province",
    countryId: "MN",
  },
  {
    value: "MN_047",
    title: "Töv Province",
    countryId: "MN",
  },
  {
    value: "MN_067",
    title: "Bulgan Province",
    countryId: "MN",
  },
  {
    value: "MN_069",
    title: "Bayankhongor Province",
    countryId: "MN",
  },
  {
    value: "MN_064",
    title: "Govisümber Province",
    countryId: "MN",
  },
  {
    value: "MN_065",
    title: "Govi-Altai Province",
    countryId: "MN",
  },
  {
    value: "MN_071",
    title: "Bayan-Ölgii Province",
    countryId: "MN",
  },
  {
    value: "CM_EN",
    title: "Far North",
    countryId: "CM",
  },
  {
    value: "CM_CE",
    title: "Centre",
    countryId: "CM",
  },
  {
    value: "CM_SW",
    title: "Southwest",
    countryId: "CM",
  },
  {
    value: "CM_NW",
    title: "Northwest",
    countryId: "CM",
  },
  {
    value: "CM_AD",
    title: "Adamawa",
    countryId: "CM",
  },
  {
    value: "CM_SU",
    title: "South",
    countryId: "CM",
  },
  {
    value: "CM_OU",
    title: "West",
    countryId: "CM",
  },
  {
    value: "CM_NO",
    title: "North",
    countryId: "CM",
  },
  {
    value: "CM_LT",
    title: "Littoral",
    countryId: "CM",
  },
  {
    value: "CM_ES",
    title: "East",
    countryId: "CM",
  },
  {
    value: "FI_08",
    title: "Central Finland",
    countryId: "FI",
  },
  {
    value: "FI_OL",
    title: "Oulu Province",
    countryId: "FI",
  },
  {
    value: "FI_01",
    title: "Åland Islands",
    countryId: "FI",
  },
  {
    value: "FI_07",
    title: "Central Ostrobothnia",
    countryId: "FI",
  },
  {
    value: "FI_IS",
    title: "Eastern Finland Province",
    countryId: "FI",
  },
  {
    value: "FI_19",
    title: "Finland Proper",
    countryId: "FI",
  },
  {
    value: "FI_05",
    title: "Kainuu",
    countryId: "FI",
  },
  {
    value: "FI_18",
    title: "Uusimaa",
    countryId: "FI",
  },
  {
    value: "FI_06",
    title: "Tavastia Proper",
    countryId: "FI",
  },
  {
    value: "FI_04",
    title: "Southern Savonia",
    countryId: "FI",
  },
  {
    value: "FI_03",
    title: "Southern Ostrobothnia",
    countryId: "FI",
  },
  {
    value: "FI_02",
    title: "South Karelia",
    countryId: "FI",
  },
  {
    value: "FI_17",
    title: "Satakunta",
    countryId: "FI",
  },
  {
    value: "FI_11",
    title: "Pirkanmaa",
    countryId: "FI",
  },
  {
    value: "FI_09",
    title: "Kymenlaakso",
    countryId: "FI",
  },
  {
    value: "FI_LL",
    title: "Lapland",
    countryId: "FI",
  },
  {
    value: "FI_13",
    title: "North Karelia",
    countryId: "FI",
  },
  {
    value: "FI_12",
    title: "Ostrobothnia",
    countryId: "FI",
  },
  {
    value: "FI_15",
    title: "Northern Savonia",
    countryId: "FI",
  },
  {
    value: "FI_14",
    title: "Northern Ostrobothnia",
    countryId: "FI",
  },
  {
    value: "",
    title: "North Savo",
    countryId: "FI",
  },
  {
    value: "FI_16",
    title: "Päijänne Tavastia",
    countryId: "FI",
  },
  {
    value: "VI_ST",
    title: "Saint Thomas",
    countryId: "VI",
  },
  {
    value: "SY_ID",
    title: "Idlib Governorate",
    countryId: "SY",
  },
  {
    value: "SY_LA",
    title: "Latakia Governorate",
    countryId: "SY",
  },
  {
    value: "SY_QU",
    title: "Quneitra Governorate",
    countryId: "SY",
  },
  {
    value: "SY_RD",
    title: "Rif Dimashq Governorate",
    countryId: "SY",
  },
  {
    value: "SY_TA",
    title: "Tartus Governorate",
    countryId: "SY",
  },
  {
    value: "SY_DR",
    title: "Daraa Governorate",
    countryId: "SY",
  },
  {
    value: "SY_DY",
    title: "Deir ez-Zor Governorate",
    countryId: "SY",
  },
  {
    value: "SY_HM",
    title: "Hama Governorate",
    countryId: "SY",
  },
  {
    value: "SY_HI",
    title: "Homs Governorate",
    countryId: "SY",
  },
  {
    value: "SY_RA",
    title: "Al-Raqqah Governorate",
    countryId: "SY",
  },
  {
    value: "SY_HA",
    title: "Al-Hasakah Governorate",
    countryId: "SY",
  },
  {
    value: "SY_HL",
    title: "Aleppo Governorate",
    countryId: "SY",
  },
  {
    value: "SY_SU",
    title: "As-Suwayda Governorate",
    countryId: "SY",
  },
  {
    value: "SY_DI",
    title: "Damascus Governorate",
    countryId: "SY",
  },
  {
    value: "SZ_MA",
    title: "Manzini District",
    countryId: "SZ",
  },
  {
    value: "SZ_HH",
    title: "Hhohho District",
    countryId: "SZ",
  },
  {
    value: "SZ_LU",
    title: "Lubombo District",
    countryId: "SZ",
  },
  {
    value: "LS_G",
    title: "Quthing District",
    countryId: "LS",
  },
  {
    value: "LS_J",
    title: "Mokhotlong District",
    countryId: "LS",
  },
  {
    value: "LS_F",
    title: "Mohale's Hoek District",
    countryId: "LS",
  },
  {
    value: "LS_A",
    title: "Maseru District",
    countryId: "LS",
  },
  {
    value: "LS_E",
    title: "Mafeteng District",
    countryId: "LS",
  },
  {
    value: "LS_C",
    title: "Leribe District",
    countryId: "LS",
  },
  {
    value: "LS_B",
    title: "Butha-Buthe District",
    countryId: "LS",
  },
  {
    value: "LS_D",
    title: "Berea District",
    countryId: "LS",
  },
  {
    value: "LS_K",
    title: "Thaba-Tseka District",
    countryId: "LS",
  },
  {
    value: "LS_H",
    title: "Qacha's Nek District",
    countryId: "LS",
  },
  {
    value: "PW_150",
    title: "Koror",
    countryId: "PW",
  },
  {
    value: "PW_002",
    title: "Aimeliik",
    countryId: "PW",
  },
  {
    value: "PW_004",
    title: "Airai",
    countryId: "PW",
  },
  {
    value: "PW_010",
    title: "Angaur",
    countryId: "PW",
  },
  {
    value: "PW_050",
    title: "Hatohobei",
    countryId: "PW",
  },
  {
    value: "PW_100",
    title: "Kayangel",
    countryId: "PW",
  },
  {
    value: "PW_212",
    title: "Melekeok",
    countryId: "PW",
  },
  {
    value: "PW_214",
    title: "Ngaraard",
    countryId: "PW",
  },
  {
    value: "PW_218",
    title: "Ngarchelong",
    countryId: "PW",
  },
  {
    value: "PW_222",
    title: "Ngardmau",
    countryId: "PW",
  },
  {
    value: "PW_224",
    title: "Ngatpang",
    countryId: "PW",
  },
  {
    value: "PW_226",
    title: "Ngchesar",
    countryId: "PW",
  },
  {
    value: "PW_227",
    title: "Ngeremlengui",
    countryId: "PW",
  },
  {
    value: "PW_228",
    title: "Ngiwal",
    countryId: "PW",
  },
  {
    value: "PW_350",
    title: "Peleliu",
    countryId: "PW",
  },
  {
    value: "PW_370",
    title: "Sonsorol",
    countryId: "PW",
  },
  {
    value: "ML_5",
    title: "Mopti Region",
    countryId: "ML",
  },
  {
    value: "ML_4",
    title: "Ségou Region",
    countryId: "ML",
  },
  {
    value: "ML_7",
    title: "Gao Region",
    countryId: "ML",
  },
  {
    value: "ML_BKO",
    title: "Bamako",
    countryId: "ML",
  },
  {
    value: "ML_1",
    title: "Kayes Region",
    countryId: "ML",
  },
  {
    value: "ML_3",
    title: "Sikasso Region",
    countryId: "ML",
  },
  {
    value: "ML_10",
    title: "Taoudénit Region",
    countryId: "ML",
  },
  {
    value: "ML_6",
    title: "Tombouctou Region",
    countryId: "ML",
  },
  {
    value: "ML_2",
    title: "Koulikoro Region",
    countryId: "ML",
  },
  {
    value: "ML_8",
    title: "Kidal Region",
    countryId: "ML",
  },
  {
    value: "ML_9",
    title: "Ménaka Region",
    countryId: "ML",
  },
  {
    value: "LB_JL",
    title: "Mount Lebanon Governorate",
    countryId: "LB",
  },
  {
    value: "LB_BI",
    title: "Beqaa Governorate",
    countryId: "LB",
  },
  {
    value: "LB_BA",
    title: "Beirut Governorate",
    countryId: "LB",
  },
  {
    value: "LB_BH",
    title: "Baalbek-Hermel Governorate",
    countryId: "LB",
  },
  {
    value: "LB_AK",
    title: "Akkar Governorate",
    countryId: "LB",
  },
  {
    value: "LB_JA",
    title: "South Governorate",
    countryId: "LB",
  },
  {
    value: "LB_AS",
    title: "North Governorate",
    countryId: "LB",
  },
  {
    value: "LB_NA",
    title: "Nabatieh Governorate",
    countryId: "LB",
  },
  {
    value: "SO_TO",
    title: "Togdheer Region",
    countryId: "SO",
  },
  {
    value: "SO_BK",
    title: "Bakool",
    countryId: "SO",
  },
  {
    value: "SO_BN",
    title: "Banaadir",
    countryId: "SO",
  },
  {
    value: "SO_BR",
    title: "Bari",
    countryId: "SO",
  },
  {
    value: "SO_BY",
    title: "Bay",
    countryId: "SO",
  },
  {
    value: "SO_GA",
    title: "Galguduud",
    countryId: "SO",
  },
  {
    value: "SO_GE",
    title: "Gedo",
    countryId: "SO",
  },
  {
    value: "SO_HI",
    title: "Hiran",
    countryId: "SO",
  },
  {
    value: "SO_JH",
    title: "Lower Juba",
    countryId: "SO",
  },
  {
    value: "SO_SH",
    title: "Lower Shebelle",
    countryId: "SO",
  },
  {
    value: "SO_JD",
    title: "Middle Juba",
    countryId: "SO",
  },
  {
    value: "SO_SD",
    title: "Middle Shebelle",
    countryId: "SO",
  },
  {
    value: "TT_CHA",
    title: "Chaguanas",
    countryId: "TT",
  },
  {
    value: "TT_DMN",
    title: "Diego Martin Regional Corporation",
    countryId: "TT",
  },
  {
    value: "TT_ETO",
    title: "Eastern Tobago",
    countryId: "TT",
  },
  {
    value: "TT_PED",
    title: "Penal-Debe Regional Corporation",
    countryId: "TT",
  },
  {
    value: "SO_MU",
    title: "Mudug",
    countryId: "SO",
  },
  {
    value: "SO_NU",
    title: "Nugal",
    countryId: "SO",
  },
  {
    value: "SO_SA",
    title: "Sanaag Region",
    countryId: "SO",
  },
  {
    value: "SO_AW",
    title: "Awdal Region",
    countryId: "SO",
  },
  {
    value: "SV_CU",
    title: "Cuscatlán Department",
    countryId: "SV",
  },
  {
    value: "SV_CA",
    title: "Cabañas Department",
    countryId: "SV",
  },
  {
    value: "SV_AH",
    title: "Ahuachapán Department",
    countryId: "SV",
  },
  {
    value: "SV_SA",
    title: "Santa Ana Department",
    countryId: "SV",
  },
  {
    value: "SV_SV",
    title: "San Vicente Department",
    countryId: "SV",
  },
  {
    value: "SV_US",
    title: "Usulután Department",
    countryId: "SV",
  },
  {
    value: "SV_SO",
    title: "Sonsonate Department",
    countryId: "SV",
  },
  {
    value: "SV_SS",
    title: "San Salvador Department",
    countryId: "SV",
  },
  {
    value: "SV_SM",
    title: "San Miguel Department",
    countryId: "SV",
  },
  {
    value: "SV_MO",
    title: "Morazán Department",
    countryId: "SV",
  },
  {
    value: "SV_UN",
    title: "La Unión Department",
    countryId: "SV",
  },
  {
    value: "SV_PA",
    title: "La Paz Department",
    countryId: "SV",
  },
  {
    value: "SV_LI",
    title: "La Libertad Department",
    countryId: "SV",
  },
  {
    value: "SV_CH",
    title: "Chalatenango Department",
    countryId: "SV",
  },
  {
    value: "HN_VA",
    title: "Valle Department",
    countryId: "HN",
  },
  {
    value: "HN_YO",
    title: "Yoro Department",
    countryId: "HN",
  },
  {
    value: "HN_AT",
    title: "Atlántida Department",
    countryId: "HN",
  },
  {
    value: "HN_IB",
    title: "Bay Islands Department",
    countryId: "HN",
  },
  {
    value: "HN_CH",
    title: "Choluteca Department",
    countryId: "HN",
  },
  {
    value: "HN_CL",
    title: "Colón Department",
    countryId: "HN",
  },
  {
    value: "HN_CM",
    title: "Comayagua Department",
    countryId: "HN",
  },
  {
    value: "HN_CP",
    title: "Copán Department",
    countryId: "HN",
  },
  {
    value: "HN_CR",
    title: "Cortés Department",
    countryId: "HN",
  },
  {
    value: "HN_EP",
    title: "El Paraíso Department",
    countryId: "HN",
  },
  {
    value: "HN_FM",
    title: "Francisco Morazán Department",
    countryId: "HN",
  },
  {
    value: "HN_GD",
    title: "Gracias a Dios Department",
    countryId: "HN",
  },
  {
    value: "HN_IN",
    title: "Intibucá Department",
    countryId: "HN",
  },
  {
    value: "HN_LP",
    title: "La Paz Department",
    countryId: "HN",
  },
  {
    value: "HN_LE",
    title: "Lempira Department",
    countryId: "HN",
  },
  {
    value: "HN_OC",
    title: "Ocotepeque Department",
    countryId: "HN",
  },
  {
    value: "HN_OL",
    title: "Olancho Department",
    countryId: "HN",
  },
  {
    value: "HN_SB",
    title: "Santa Bárbara Department",
    countryId: "HN",
  },
  {
    value: "ES_ZA",
    title: "Zamora Province",
    countryId: "ES",
  },
  {
    value: "ES_ML",
    title: "Melilla",
    countryId: "ES",
  },
  {
    value: "ES_MC",
    title: "Murcia",
    countryId: "ES",
  },
  {
    value: "ES_NC",
    title: "Navarra",
    countryId: "ES",
  },
  {
    value: "ES_P",
    title: "Palencia Province",
    countryId: "ES",
  },
  {
    value: "ES_SA",
    title: "Salamanca Province",
    countryId: "ES",
  },
  {
    value: "ES_SG",
    title: "Segovia Province",
    countryId: "ES",
  },
  {
    value: "ES_SO",
    title: "Soria Province",
    countryId: "ES",
  },
  {
    value: "ES_VC",
    title: "Valencia",
    countryId: "ES",
  },
  {
    value: "ES_VA",
    title: "Valladolid Province",
    countryId: "ES",
  },
  {
    value: "ES_AN",
    title: "Andalusia",
    countryId: "ES",
  },
  {
    value: "ES_AR",
    title: "Aragon",
    countryId: "ES",
  },
  {
    value: "ES_AS",
    title: "Asturias",
    countryId: "ES",
  },
  {
    value: "ES_AV",
    title: "Ávila",
    countryId: "ES",
  },
  {
    value: "ES_PM",
    title: "Balearic Islands",
    countryId: "ES",
  },
  {
    value: "ES_PV",
    title: "Basque Country",
    countryId: "ES",
  },
  {
    value: "ES_BU",
    title: "Burgos Province",
    countryId: "ES",
  },
  {
    value: "ES_CN",
    title: "Canary Islands",
    countryId: "ES",
  },
  {
    value: "ES_CB",
    title: "Cantabria",
    countryId: "ES",
  },
  {
    value: "ES_CL",
    title: "Castile and León",
    countryId: "ES",
  },
  {
    value: "ES_CM",
    title: "Castilla La Mancha",
    countryId: "ES",
  },
  {
    value: "ES_CT",
    title: "Catalonia",
    countryId: "ES",
  },
  {
    value: "ES_CE",
    title: "Ceuta",
    countryId: "ES",
  },
  {
    value: "ES_EX",
    title: "Extremadura",
    countryId: "ES",
  },
  {
    value: "ES_GA",
    title: "Galicia",
    countryId: "ES",
  },
  {
    value: "ES_RI",
    title: "La Rioja",
    countryId: "ES",
  },
  {
    value: "ES_LE",
    title: "Léon",
    countryId: "ES",
  },
  {
    value: "ES_MD",
    title: "Madrid",
    countryId: "ES",
  },
  {
    value: "ZA_EC",
    title: "Eastern Cape",
    countryId: "ZA",
  },
  {
    value: "ZA_GP",
    title: "Gauteng",
    countryId: "ZA",
  },
  {
    value: "ZA_KZN",
    title: "KwaZulu-Natal",
    countryId: "ZA",
  },
  {
    value: "ZA_LP",
    title: "Limpopo",
    countryId: "ZA",
  },
  {
    value: "ZA_MP",
    title: "Mpumalanga",
    countryId: "ZA",
  },
  {
    value: "ZA_NW",
    title: "North West",
    countryId: "ZA",
  },
  {
    value: "ZA_NC",
    title: "Northern Cape",
    countryId: "ZA",
  },
  {
    value: "ZA_WC",
    title: "Western Cape",
    countryId: "ZA",
  },
  {
    value: "ZA_FS",
    title: "Free State",
    countryId: "ZA",
  },
  {
    value: "CV_MA",
    title: "Maio Municipality",
    countryId: "CV",
  },
  {
    value: "CV_B",
    title: "Barlavento Islands",
    countryId: "CV",
  },
  {
    value: "CV_BV",
    title: "Boa Vista",
    countryId: "CV",
  },
  {
    value: "CV_BR",
    title: "Brava",
    countryId: "CV",
  },
  {
    value: "CV_MO",
    title: "Mosteiros",
    countryId: "CV",
  },
  {
    value: "CV_PA",
    title: "Paul",
    countryId: "CV",
  },
  {
    value: "CV_PN",
    title: "Porto Novo",
    countryId: "CV",
  },
  {
    value: "CV_PR",
    title: "Praia",
    countryId: "CV",
  },
  {
    value: "CV_RB",
    title: "Ribeira Brava Municipality",
    countryId: "CV",
  },
  {
    value: "CV_RG",
    title: "Ribeira Grande",
    countryId: "CV",
  },
  {
    value: "CV_RS",
    title: "Ribeira Grande de Santiago",
    countryId: "CV",
  },
  {
    value: "CV_SL",
    title: "Sal",
    countryId: "CV",
  },
  {
    value: "CV_CA",
    title: "Santa Catarina",
    countryId: "CV",
  },
  {
    value: "CV_CF",
    title: "Santa Catarina do Fogo",
    countryId: "CV",
  },
  {
    value: "CV_CR",
    title: "Santa Cruz",
    countryId: "CV",
  },
  {
    value: "CV_SD",
    title: "São Domingos",
    countryId: "CV",
  },
  {
    value: "CV_SF",
    title: "São Filipe",
    countryId: "CV",
  },
  {
    value: "CV_SO",
    title: "São Lourenço dos Órgãos",
    countryId: "CV",
  },
  {
    value: "CV_SM",
    title: "São Miguel",
    countryId: "CV",
  },
  {
    value: "CV_SV",
    title: "São Vicente",
    countryId: "CV",
  },
  {
    value: "CV_S",
    title: "Sotavento Islands",
    countryId: "CV",
  },
  {
    value: "CV_TA",
    title: "Tarrafal",
    countryId: "CV",
  },
  {
    value: "CV_TS",
    title: "Tarrafal de São Nicolau",
    countryId: "CV",
  },
  {
    value: "MK_33",
    title: "Zrnovci Municipality",
    countryId: "MK",
  },
  {
    value: "MK_01",
    title: "Aerodrom Municipality",
    countryId: "MK",
  },
  {
    value: "MK_30",
    title: "Želino Municipality",
    countryId: "MK",
  },
  {
    value: "MK_32",
    title: "Zelenikovo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_31",
    title: "Zajas Municipality",
    countryId: "MK",
  },
  {
    value: "MK_16",
    title: "Vrapčište Municipality",
    countryId: "MK",
  },
  {
    value: "MK_15",
    title: "Vraneštica Municipality",
    countryId: "MK",
  },
  {
    value: "MK_14",
    title: "Vinica Municipality",
    countryId: "MK",
  },
  {
    value: "MK_12",
    title: "Vevčani Municipality",
    countryId: "MK",
  },
  {
    value: "MK_13",
    title: "Veles Municipality",
    countryId: "MK",
  },
  {
    value: "MK_11",
    title: "Vasilevo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_10",
    title: "Valandovo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_76",
    title: "Tetovo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_75",
    title: "Tearce Municipality",
    countryId: "MK",
  },
  {
    value: "MK_69",
    title: "Sveti Nikole Municipality",
    countryId: "MK",
  },
  {
    value: "MK_84",
    title: "Šuto Orizari Municipality",
    countryId: "MK",
  },
  {
    value: "MK_74",
    title: "Studeničani Municipality",
    countryId: "MK",
  },
  {
    value: "MK_73",
    title: "Strumica Municipality",
    countryId: "MK",
  },
  {
    value: "MK_72",
    title: "Struga Municipality",
    countryId: "MK",
  },
  {
    value: "MK_83",
    title: "Štip Municipality",
    countryId: "MK",
  },
  {
    value: "MK_71",
    title: "Staro Nagoričane Municipality",
    countryId: "MK",
  },
  {
    value: "MK_70",
    title: "Sopište Municipality",
    countryId: "MK",
  },
  {
    value: "MK_68",
    title: "Saraj Municipality",
    countryId: "MK",
  },
  {
    value: "MK_67",
    title: "Rosoman Municipality",
    countryId: "MK",
  },
  {
    value: "MK_66",
    title: "Resen Municipality",
    countryId: "MK",
  },
  {
    value: "MK_65",
    title: "Rankovce Municipality",
    countryId: "MK",
  },
  {
    value: "MK_64",
    title: "Radoviš Municipality",
    countryId: "MK",
  },
  {
    value: "MK_63",
    title: "Probištip Municipality",
    countryId: "MK",
  },
  {
    value: "MK_62",
    title: "Prilep Municipality",
    countryId: "MK",
  },
  {
    value: "MK_61",
    title: "Plasnica Municipality",
    countryId: "MK",
  },
  {
    value: "MK_59",
    title: "Petrovec Municipality",
    countryId: "MK",
  },
  {
    value: "MK_60",
    title: "Pehčevo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_57",
    title: "Oslomej Municipality",
    countryId: "MK",
  },
  {
    value: "MK_58",
    title: "Ohrid Municipality",
    countryId: "MK",
  },
  {
    value: "MK_56",
    title: "Novo Selo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_55",
    title: "Novaci Municipality",
    countryId: "MK",
  },
  {
    value: "MK_54",
    title: "Negotino Municipality",
    countryId: "MK",
  },
  {
    value: "MK_53",
    title: "Mogila Municipality",
    countryId: "MK",
  },
  {
    value: "MK_50",
    title: "Mavrovo and Rostuša Municipality",
    countryId: "MK",
  },
  {
    value: "MK_52",
    title: "Makedonski Brod Municipality",
    countryId: "MK",
  },
  {
    value: "MK_51",
    title: "Makedonska Kamenica Municipality",
    countryId: "MK",
  },
  {
    value: "MK_49",
    title: "Lozovo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_48",
    title: "Lipkovo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_47",
    title: "Kumanovo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_46",
    title: "Kruševo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_45",
    title: "Krivogaštani Municipality",
    countryId: "MK",
  },
  {
    value: "MK_44",
    title: "Kriva Palanka Municipality",
    countryId: "MK",
  },
  {
    value: "MK_43",
    title: "Kratovo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_41",
    title: "Konče Municipality",
    countryId: "MK",
  },
  {
    value: "MK_42",
    title: "Kočani Municipality",
    countryId: "MK",
  },
  {
    value: "MK_39",
    title: "Kisela Voda Municipality",
    countryId: "MK",
  },
  {
    value: "MK_40",
    title: "Kičevo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_36",
    title: "Kavadarci Municipality",
    countryId: "MK",
  },
  {
    value: "MK_38",
    title: "Karpoš Municipality",
    countryId: "MK",
  },
  {
    value: "MK_37",
    title: "Karbinci",
    countryId: "MK",
  },
  {
    value: "MK_35",
    title: "Jegunovce Municipality",
    countryId: "MK",
  },
  {
    value: "MK_34",
    title: "Ilinden Municipality",
    countryId: "MK",
  },
  {
    value: "MK_85",
    title: "Greater Skopje",
    countryId: "MK",
  },
  {
    value: "MK_20",
    title: "Gradsko Municipality",
    countryId: "MK",
  },
  {
    value: "MK_19",
    title: "Gostivar Municipality",
    countryId: "MK",
  },
  {
    value: "MK_29",
    title: "Gjorče Petrov Municipality",
    countryId: "MK",
  },
  {
    value: "MK_18",
    title: "Gevgelija Municipality",
    countryId: "MK",
  },
  {
    value: "MK_17",
    title: "Gazi Baba Municipality",
    countryId: "MK",
  },
  {
    value: "MK_28",
    title: "Drugovo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_27",
    title: "Dolneni Municipality",
    countryId: "MK",
  },
  {
    value: "MK_26",
    title: "Dojran Municipality",
    countryId: "MK",
  },
  {
    value: "MK_24",
    title: "Demir Kapija Municipality",
    countryId: "MK",
  },
  {
    value: "MK_25",
    title: "Demir Hisar Municipality",
    countryId: "MK",
  },
  {
    value: "MK_23",
    title: "Delčevo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_22",
    title: "Debarca Municipality",
    countryId: "MK",
  },
  {
    value: "MK_82",
    title: "Čučer-Sandevo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_81",
    title: "Češinovo-Obleševo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_78",
    title: "Centar Župa Municipality",
    countryId: "MK",
  },
  {
    value: "MK_77",
    title: "Centar Municipality",
    countryId: "MK",
  },
  {
    value: "MK_80",
    title: "Čaška Municipality",
    countryId: "MK",
  },
  {
    value: "MK_79",
    title: "Čair Municipality",
    countryId: "MK",
  },
  {
    value: "MK_09",
    title: "Butel Municipality",
    countryId: "MK",
  },
  {
    value: "MK_08",
    title: "Brvenica Municipality",
    countryId: "MK",
  },
  {
    value: "MK_07",
    title: "Bosilovo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_06",
    title: "Bogovinje Municipality",
    countryId: "MK",
  },
  {
    value: "MK_05",
    title: "Bogdanci Municipality",
    countryId: "MK",
  },
  {
    value: "MK_04",
    title: "Bitola Municipality",
    countryId: "MK",
  },
  {
    value: "MK_03",
    title: "Berovo Municipality",
    countryId: "MK",
  },
  {
    value: "MK_02",
    title: "Aračinovo Municipality",
    countryId: "MK",
  },
];

export default states;
