import cities from "cities.json";
import * as geolib from "geolib";

const countries = [
  {
    value: "dc5f6f04-b5ee-482d-878f-df325ab5b011",
    title: "Afghanistan",
    code: "AF",
  },
  {
    value: "34beb07a-5086-4144-8217-46f70b8366b1",
    title: "Albania",
    code: "AL",
  },
  {
    value: "b78508ac-9de9-44ab-87d4-281192698056",
    title: "Algeria",
    code: "DZ",
  },
  {
    value: "12fe09fd-ef2a-44c6-aad9-00d5ec8c7602",
    title: "American Samoa",
    code: "AS",
  },
  {
    value: "1faeaa09-7bdb-456b-ba35-0ae76e1005c1",
    title: "Andorra",
    code: "AD",
  },
  {
    value: "caea7955-30b7-4073-b4f9-2a078f6b59d9",
    title: "Angola",
    code: "AO",
  },
  {
    value: "65b69682-7f7e-40aa-857b-95de93fe4526",
    title: "Anguilla",
    code: "AI",
  },
  {
    value: "b8c4af1c-411c-49a4-98bd-b9b8484c08f6",
    title: "Antarctica",
    code: "AQ",
  },
  {
    value: "55581fab-bad1-4778-a376-96723bde9df9",
    title: "Antigua and Barbuda",
    code: "AG",
  },
  {
    value: "0a6341b2-5703-4699-ac03-fe4c3bde511a",
    title: "Argentina",
    code: "AR",
  },
  {
    value: "b9778d6a-a98f-4d45-bdc3-b4e506e7797d",
    title: "Armenia",
    code: "AM",
  },
  {
    value: "c57038b2-ce79-489d-a510-60c41cb4c840",
    title: "Aruba",
    code: "AW",
  },
  {
    value: "0f989013-1d36-4220-b2c8-24ca91872e64",
    title: "Australia",
    code: "AU",
  },
  {
    value: "b5d80339-4435-470e-ae55-292adc0d4320",
    title: "Austria",
    code: "AT",
  },
  {
    value: "d3ae6728-1b6e-4a27-8812-5b561258d376",
    title: "Azerbaijan",
    code: "AZ",
  },
  {
    value: "df81dbf1-1eec-40f6-97e5-81c33ef9a11d",
    title: "Bahamas",
    code: "BS",
  },
  {
    value: "9a2fde34-b100-42c7-a3c3-c8cc343116da",
    title: "Bahrain",
    code: "BH",
  },
  {
    value: "8dc8106e-9d23-43c2-b266-0658dcbf0073",
    title: "Bangladesh",
    code: "BD",
  },
  {
    value: "8b2558c4-6011-4edc-9d05-b8715cf1ae74",
    title: "Barbados",
    code: "BB",
  },
  {
    value: "51aba07a-eec5-490d-99fe-5b286acd5a7f",
    title: "Belarus",
    code: "BY",
  },
  {
    value: "3eeef790-a5c5-43be-ba43-d546f59a4319",
    title: "Belgium",
    code: "BE",
  },
  {
    value: "eb585da9-ce2d-445c-95f1-39dcd6a7c5dc",
    title: "Belize",
    code: "BZ",
  },
  {
    value: "29438fe6-1e49-42cb-b24a-18da5cc1af63",
    title: "Benin",
    code: "BJ",
  },
  {
    value: "951e7deb-e14f-4bde-92f6-349ccd069847",
    title: "Bermuda",
    code: "BM",
  },
  {
    value: "f4886165-154a-4a7c-8e37-8523475591df",
    title: "Bhutan",
    code: "BT",
  },
  {
    value: "ae058b57-cd3a-4b36-9af7-8ee2dc168a24",
    title: "Bolivia",
    code: "BO",
  },
  {
    value: "33ffec56-b65c-40b3-9994-71615985474d",
    title: "Bosnia and Herzegovina",
    code: "BA",
  },
  {
    value: "9120ae00-9e5e-441a-8098-b2dd923660d3",
    title: "Botswana",
    code: "BW",
  },
  {
    value: "ddf6aade-bff6-4f35-8d7b-741ab7d496ee",
    title: "Bouvet Island",
    code: "BV",
  },
  {
    value: "a6057742-9886-460b-b4a9-aca23bdd22d1",
    title: "Brazil",
    code: "BR",
  },
  {
    value: "f379287f-1c36-4ea8-985b-0b7f8e149433",
    title: "British Indian Ocean Territory",
    code: "IO",
  },
  {
    value: "89d6b298-dee1-4686-941f-cd5a98af755e",
    title: "Brunei Darussalam",
    code: "BN",
  },
  {
    value: "951a71f6-adbc-406e-a1f5-2d311513f7a2",
    title: "Bulgaria",
    code: "BG",
  },
  {
    value: "508efba9-0e0a-4322-aa6a-0d1dc9070b6a",
    title: "Burkina Faso",
    code: "BF",
  },
  {
    value: "444eb8e5-2539-4925-a725-c0e0cd81beb0",
    title: "Burundi",
    code: "BI",
  },
  {
    value: "95a64126-d836-48a0-9192-0709c0a8d80f",
    title: "Cambodia",
    code: "KH",
  },
  {
    value: "76d8e4f7-9b04-4ebd-bf63-7adff0f0ff44",
    title: "Cameroon",
    code: "CM",
  },
  {
    value: "6aa18367-2ba9-48ea-b6e4-da3ca39952a0",
    title: "Canada",
    code: "CA",
  },
  {
    value: "f0b0675f-a4e9-4041-8e40-c06fee1eac52",
    title: "Cape Verde",
    code: "CV",
  },
  {
    value: "3b4de818-221d-4afd-a605-e6c8f1630bf1",
    title: "Cayman Islands",
    code: "KY",
  },
  {
    value: "67925226-69f2-4b21-ba08-bb3725db0ca5",
    title: "Central African Republic",
    code: "CF",
  },
  {
    value: "d356ba4c-76e7-4565-8cfd-7c124283da24",
    title: "Chad",
    code: "TD",
  },
  {
    value: "d2edc4fb-dcca-400a-bf05-cb4b63c51454",
    title: "Chile",
    code: "CL",
  },
  {
    value: "aa111f34-5fed-425e-9d5e-0fb3671b41ff",
    title: "China",
    code: "CN",
  },
  {
    value: "a9c5b7d1-0952-499a-be69-012b82c2bbca",
    title: "Christmas Island",
    code: "CX",
  },
  {
    value: "bff29bdd-0417-4043-807e-04c04183fa0f",
    title: "Cocos (Keeling) Islands",
    code: "CC",
  },
  {
    value: "f1dfb70f-be77-44b8-b388-5c14e8bfd1fb",
    title: "Colombia",
    code: "CO",
  },
  {
    value: "c7e8275a-2fc3-467e-ac01-1fda876a77d3",
    title: "Comoros",
    code: "KM",
  },
  {
    value: "bfbe0272-ef3f-475a-beb6-3deca858dfe0",
    title: "Congo",
    code: "CG",
  },
  {
    value: "ac31749d-8511-4a52-a0a9-8d78b5b423d4",
    title: "Congo, The Democratic Republic of the",
    code: "CD",
  },
  {
    value: "dd9ff781-f4cd-4693-946b-eb81481fe270",
    title: "Cook Islands",
    code: "CK",
  },
  {
    value: "facdb3f5-cf89-4ff8-8162-e700d10aedc9",
    title: "Costa Rica",
    code: "CR",
  },
  {
    value: "a67d8d50-baad-4d79-af04-200cbbc38820",
    title: "Cote D'Ivoire",
    code: "CI",
  },
  {
    value: "a92b175c-5aac-454b-a982-d0172d24c4c7",
    title: "Croatia",
    code: "HR",
  },
  {
    value: "2f909720-2b46-41f7-8ee6-8e2e062efd53",
    title: "Cuba",
    code: "CU",
  },
  {
    value: "6ae71a2f-9948-45f4-b9a1-1b30b256693f",
    title: "Cyprus",
    code: "CY",
  },
  {
    value: "2c4a09a9-888a-42cb-bdae-f900ac787ed1",
    title: "Czech Republic",
    code: "CZ",
  },
  {
    value: "2ebd9d10-cfcc-43c5-8e5b-8f4a2a6e88d4",
    title: "Denmark",
    code: "DK",
  },
  {
    value: "6a9a4f68-1fcb-4124-bcab-abe8485129b9",
    title: "Djibouti",
    code: "DJ",
  },
  {
    value: "a6130d8d-9c11-4b55-bb09-372291da06db",
    title: "Dominica",
    code: "DM",
  },
  {
    value: "d3ae2e85-7697-4eda-88d0-1ec8c6f3d58d",
    title: "Dominican Republic",
    code: "DO",
  },
  {
    value: "e015609a-0fd3-457f-9f01-9be04621672f",
    title: "Ecuador",
    code: "EC",
  },
  {
    value: "bbc74467-62c5-4f5a-8711-8b08323bd84a",
    title: "Egypt",
    code: "EG",
  },
  {
    value: "0d3258d5-95bf-4d4b-8aec-7db7e290257e",
    title: "El Salvador",
    code: "SV",
  },
  {
    value: "789ecbd5-269e-41f5-b8b8-48742335fbe0",
    title: "Equatorial Guinea",
    code: "GQ",
  },
  {
    value: "e298ec74-8d66-43d0-8ba3-eb11f5ddda79",
    title: "Eritrea",
    code: "ER",
  },
  {
    value: "dc3a900e-439c-45fb-803c-be60ef4f36e1",
    title: "Estonia",
    code: "EE",
  },
  {
    value: "b8d24906-5aeb-43f9-9f50-01035f2d59bf",
    title: "Ethiopia",
    code: "ET",
  },
  {
    value: "898fcb84-2c28-4029-87d3-63b637970032",
    title: "Falkland Islands",
    code: "FK",
  },
  {
    value: "4499b631-6b96-41ac-a0de-5411d1d98fff",
    title: "Faroe Islands",
    code: "FO",
  },
  {
    value: "496b7086-73b9-4729-b977-ed53fefa0235",
    title: "Fiji",
    code: "FJ",
  },
  {
    value: "a0fbbabe-26cd-47e5-b9ad-88b72f06ac45",
    title: "Finland",
    code: "FI",
  },
  {
    value: "0e63e7cd-a82e-4179-8d65-fb6c70f6e2e5",
    title: "France",
    code: "FR",
  },
  {
    value: "42a2872e-71b5-45fa-b9e5-71aa6ef266cb",
    title: "French Guiana",
    code: "GF",
  },
  {
    value: "92d5d30f-517a-4ef8-8f48-c04911d96da7",
    title: "French Polynesia",
    code: "PF",
  },
  {
    value: "ad8cde20-58a3-44ca-af5b-d352d75f81ae",
    title: "French Southern Territories",
    code: "TF",
  },
  {
    value: "e0df9f5d-39c1-490e-9fa7-f5938397d5ef",
    title: "Gabon",
    code: "GA",
  },
  {
    value: "c8035c98-8e67-43ac-b5c1-607578b50e25",
    title: "Gambia",
    code: "GM",
  },
  {
    value: "3e63b59b-a829-4e1c-b871-19099461ccfc",
    title: "Georgia",
    code: "GE",
  },
  {
    value: "6482ef8f-5cee-4cb5-8393-d3c33f949578",
    title: "Germany",
    code: "DE",
  },
  {
    value: "d829dab7-89d0-4ff1-bd33-74dc84bce3cd",
    title: "Ghana",
    code: "GH",
  },
  {
    value: "eb85a07e-caa3-4e31-8fc8-20b4fc0c9bfd",
    title: "Gibraltar",
    code: "GI",
  },
  {
    value: "7b853a64-7810-4203-baed-7088507ee903",
    title: "Greece",
    code: "GR",
  },
  {
    value: "c4659505-5063-40fa-bb20-9a37f53e41ee",
    title: "Greenland",
    code: "GL",
  },
  {
    value: "aed5c241-767d-4107-85b5-ad5403a68006",
    title: "Grenada",
    code: "GD",
  },
  {
    value: "4ba69570-fa80-4183-8abc-91feaeaee544",
    title: "Guadeloupe",
    code: "GP",
  },
  {
    value: "428bd57b-a18b-47ba-8806-4483d91f3a01",
    title: "Guam",
    code: "GU",
  },
  {
    value: "2e79a827-b090-4581-a2eb-af81844758f1",
    title: "Guatemala",
    code: "GT",
  },
  {
    value: "c9a30074-67a3-4bd6-9f2f-114da8b58793",
    title: "Guernsey",
    code: "GG",
  },
  {
    value: "732f181a-1c80-4706-9d7b-00eb401ee120",
    title: "Guinea",
    code: "GN",
  },
  {
    value: "108d2d47-26d2-4cd6-8b14-b46fc956e1a2",
    title: "Guinea-Bissau",
    code: "GW",
  },
  {
    value: "f3a91f1d-175a-45bd-afa9-d75ecaeaa17a",
    title: "Guyana",
    code: "GY",
  },
  {
    value: "412f0a13-47ac-4dda-a456-55b00866e9b5",
    title: "Haiti",
    code: "HT",
  },
  {
    value: "df08a805-20d2-41e7-864e-d862dd6cac49",
    title: "Heard Island and Mcdonald Islands",
    code: "HM",
  },
  {
    value: "9aad167f-4d62-4671-9c00-8287e71c3115",
    title: "Holy See (Vatican City State)",
    code: "VA",
  },
  {
    value: "bbea25d7-6a08-4912-9d52-265cca5c4804",
    title: "Honduras",
    code: "HN",
  },
  {
    value: "219683b0-4295-4b33-966c-58e898413598",
    title: "Hong Kong",
    code: "HK",
  },
  {
    value: "df814d6b-c633-439f-bb3c-9562c6ad9055",
    title: "Hungary",
    code: "HU",
  },
  {
    value: "09b2cf54-2308-4103-964f-54c810ca63b8",
    title: "Iceland",
    code: "IS",
  },
  {
    value: "9c38408f-b899-45a3-a07c-43d53f068369",
    title: "India",
    code: "IN",
  },
  {
    value: "ca17d50e-b82a-4b50-a8c9-d9b6238107ec",
    title: "Indonesia",
    code: "ID",
  },
  {
    value: "99adbdfa-81d2-4876-a70b-71f10d8a4179",
    title: "Iran, Islamic Republic Of",
    code: "IR",
  },
  {
    value: "d5e25533-f3d5-42f2-a316-c6eade879ba0",
    title: "Iraq",
    code: "IQ",
  },
  {
    value: "55e5d9b9-9e0f-41c6-a0be-bcefc1170063",
    title: "Ireland",
    code: "IE",
  },
  {
    value: "61084ce5-38d3-4c6b-b1a6-b5365a728a9f",
    title: "Isle of Man",
    code: "IM",
  },
  {
    value: "32b744e4-2a80-418f-9684-21d13cc6172e",
    title: "Israel",
    code: "IL",
  },
  {
    value: "9579abdf-f8b7-450f-a084-66b165eab2d8",
    title: "Italy",
    code: "IT",
  },
  {
    value: "25f2eb1f-7a7a-4108-8f0d-61e1de530a8e",
    title: "Jamaica",
    code: "JM",
  },
  {
    value: "f32557f8-3c01-4ced-bdc2-a4a6965247d8",
    title: "Japan",
    code: "JP",
  },
  {
    value: "561eb8c9-ec5d-4720-ac0d-2bbd0942f16f",
    title: "Jersey",
    code: "JE",
  },
  {
    value: "650f3bf7-8348-41fd-b0f4-28d78a92ce93",
    title: "Jordan",
    code: "JO",
  },
  {
    value: "26a6b4de-a663-45db-af78-fe6c653b4e1a",
    title: "Kazakhstan",
    code: "KZ",
  },
  {
    value: "5a0c8ca9-76c2-4608-8a37-3e789c6aa126",
    title: "Kenya",
    code: "KE",
  },
  {
    value: "0b23f3a1-17a6-4193-9998-44391cef91e5",
    title: "Kiribati",
    code: "KI",
  },
  {
    value: "e89d16e9-868f-40f9-955b-7b14c68a7d3b",
    title: "Korea, Democratic People's Republic of (North)",
    code: "KP",
  },
  {
    value: "cfb2e13b-3d34-4c40-87e1-25a1d7c6ddfc",
    title: "Korea, Republic of (South)",
    code: "KR",
  },
  {
    value: "3c77fb7b-29f0-4f6e-baa8-a2b509e82e02",
    title: "Kuwait",
    code: "KW",
  },
  {
    value: "1576568d-8a8f-4c57-930d-78aa7ee3b8a8",
    title: "Kyrgyzstan",
    code: "KG",
  },
  {
    value: "611e79c6-cc61-4569-a0f7-d45e60a40739",
    title: "Lao, People's Democratic Republic of",
    code: "LA",
  },
  {
    value: "c7ece002-6e8d-4b24-be4a-79cf74534241",
    title: "Latvia",
    code: "LV",
  },
  {
    value: "e2bc297c-bdbf-4ff7-8bea-9442c1cd92bd",
    title: "Lebanon",
    code: "LB",
  },
  {
    value: "c058680e-8713-4d96-90c1-9979ce074758",
    title: "Lesotho",
    code: "LS",
  },
  {
    value: "b242ba73-6e28-4bb2-8b11-01845f74f116",
    title: "Liberia",
    code: "LR",
  },
  {
    value: "4bf4d0f9-5f2c-4d93-9423-23a4eb47bc3d",
    title: "Libyan Arab Jamahiriya",
    code: "LY",
  },
  {
    value: "18156f02-0bf6-4ed6-992c-1308a6bd2fe2",
    title: "Liechtenstein",
    code: "LI",
  },
  {
    value: "1371530e-96ac-4a04-8767-777df69be614",
    title: "Lithuania",
    code: "LT",
  },
  {
    value: "c95958f6-5e8a-455d-b5a7-9bd054ee079e",
    title: "Luxembourg",
    code: "LU",
  },
  {
    value: "ab715fdb-0853-43f8-9724-6163c4f3df7a",
    title: "Macao",
    code: "MO",
  },
  {
    value: "0c1876c8-f66d-40f4-8b7f-66bfc6ff4ffc",
    title: "Macedonia, The Former Yugoslav Republic of",
    code: "MK",
  },
  {
    value: "01f36d29-1810-4f91-b825-a6ced7ce3b32",
    title: "Madagascar",
    code: "MG",
  },
  {
    value: "5ff2b76f-563e-44be-994a-045071bbd7be",
    title: "Malawi",
    code: "MW",
  },
  {
    value: "d125ea3c-f15c-4555-8dfe-3be8993668dd",
    title: "Malaysia",
    code: "MY",
  },
  {
    value: "885158f4-d662-4fce-b467-ac5068955cf3",
    title: "Maldives",
    code: "MV",
  },
  {
    value: "e7e1c783-a3d5-4e52-800b-2de8dec4388d",
    title: "Mali",
    code: "ML",
  },
  {
    value: "1a2eb77f-3ec7-45d9-9dad-d20d3ab43d5b",
    title: "Malta",
    code: "MT",
  },
  {
    value: "94413181-5a60-4159-aca3-ae98cc854e2c",
    title: "Marshall Islands",
    code: "MH",
  },
  {
    value: "e829e970-8927-48d4-9b5c-b6a7ec2c863c",
    title: "Martinique",
    code: "MQ",
  },
  {
    value: "ea620434-814b-4a38-8c4b-545f485af33f",
    title: "Mauritania",
    code: "MR",
  },
  {
    value: "20172204-e0a1-4ad5-9c0a-56bb131fc2fa",
    title: "Mauritius",
    code: "MU",
  },
  {
    value: "315f3297-3bda-433c-a3cc-33cde32d44b3",
    title: "Mayotte",
    code: "YT",
  },
  {
    value: "b5260eb1-61f8-4993-8e4c-3831805e8ada",
    title: "Mexico",
    code: "MX",
  },
  {
    value: "5806b0d2-7a32-481b-baff-e59d41e56eb9",
    title: "Micronesia, Federated States of",
    code: "FM",
  },
  {
    value: "49080985-5849-4ead-a5c4-9cd41ce3aecd",
    title: "Moldova, Republic of",
    code: "MD",
  },
  {
    value: "6a44201f-2861-4b61-b806-52235b996a82",
    title: "Monaco",
    code: "MC",
  },
  {
    value: "09c3adb5-9d84-47d2-abfc-e65f98367705",
    title: "Mongolia",
    code: "MN",
  },
  {
    value: "de55346c-c563-4015-ae18-72589566a564",
    title: "Montserrat",
    code: "MS",
  },
  {
    value: "ec664333-f664-4c91-9048-657451ccade9",
    title: "Morocco",
    code: "MA",
  },
  {
    value: "117bb0f1-7b72-4c52-9083-52d6064eca33",
    title: "Mozambique",
    code: "MZ",
  },
  {
    value: "3533a156-48fb-4de5-8df3-77537745de09",
    title: "Myanmar",
    code: "MM",
  },
  {
    value: "d9a504dc-9d00-4c9b-a489-eb070cdd24b4",
    title: "Namibia",
    code: "NA",
  },
  {
    value: "0b76ba93-4039-4145-91d8-44ae177e0245",
    title: "Nauru",
    code: "NR",
  },
  {
    value: "c7153663-05be-4a3f-9d2c-10d59a8b25b6",
    title: "Nepal",
    code: "NP",
  },
  {
    value: "09ef0e41-f79d-442d-a028-f7910554537e",
    title: "Netherlands",
    code: "NL",
  },
  {
    value: "58a509d9-8d2b-4d22-beff-5ff8c77b9ea3",
    title: "Netherlands Antilles",
    code: "AN",
  },
  {
    value: "8956b9fc-5d48-49f5-8aca-8a6dbd1628ad",
    title: "New Caledonia",
    code: "NC",
  },
  {
    value: "6608d95b-ef81-4e03-8d34-1abab828d3bb",
    title: "New Zealand",
    code: "NZ",
  },
  {
    value: "2e6130f8-686f-492a-9165-eda87ecc41fd",
    title: "Nicaragua",
    code: "NI",
  },
  {
    value: "705c5fda-9539-40bb-9792-e739fdf4c522",
    title: "Niger",
    code: "NE",
  },
  {
    value: "e94d0fed-c746-4a43-aeff-e1acbd0300d7",
    title: "Nigeria",
    code: "NG",
  },
  {
    value: "189da2c0-6acf-4118-ae04-920724af654d",
    title: "Niue",
    code: "NU",
  },
  {
    value: "3f2eeb38-cd01-4900-8067-c6b1251a9e69",
    title: "Norfolk Island",
    code: "NF",
  },
  {
    value: "581b704d-49b3-43ab-b1eb-9eb90b3102c2",
    title: "Northern Mariana Islands",
    code: "MP",
  },
  {
    value: "df1d0028-e749-451a-9321-55482b37cdf1",
    title: "Norway",
    code: "NO",
  },
  {
    value: "3f2c9153-218c-4bd8-8662-018bf605fce5",
    title: "Oman",
    code: "OM",
  },
  {
    value: "62276b04-6bac-4ab9-999e-01b436e687b3",
    title: "Pakistan",
    code: "PK",
  },
  {
    value: "4ce7bec9-6b31-4344-b71f-9e7d0a01bc1f",
    title: "Palau",
    code: "PW",
  },
  {
    value: "2e0f74ff-b71a-4642-b922-4840179b978f",
    title: "Palestine, State of",
    code: "PS",
  },
  {
    value: "aad984b4-f570-43e8-87e1-91efdf602d0f",
    title: "Panama",
    code: "PA",
  },
  {
    value: "319ead40-2b3f-4661-9b68-6a72a6c84aee",
    title: "Papua New Guinea",
    code: "PG",
  },
  {
    value: "cf418274-1637-4a48-8f81-bd2f853aa16d",
    title: "Paraguay",
    code: "PY",
  },
  {
    value: "2bef3960-68b3-4338-81a7-dd1e360eb11b",
    title: "Peru",
    code: "PE",
  },
  {
    value: "589ca8ba-635a-4b3a-974b-55d587e8ea89",
    title: "Philippines",
    code: "PH",
  },
  {
    value: "64e0bf35-a074-4bf3-9694-5b132a8cc3c1",
    title: "Pitcairn",
    code: "PN",
  },
  {
    value: "5951d20f-4722-49d5-90ee-74d3c28835e4",
    title: "Poland",
    code: "PL",
  },
  {
    value: "da910902-d954-448b-984b-ec328e0f74c0",
    title: "Portugal",
    code: "PT",
  },
  {
    value: "1ac7fe4e-d602-4b0f-9166-3cb6d85534d6",
    title: "Puerto Rico",
    code: "PR",
  },
  {
    value: "a6937857-279e-4933-9b3c-2abf08d81246",
    title: "Qatar",
    code: "QA",
  },
  {
    value: "73c61f81-9c00-4f89-895a-c77f77eec564",
    title: "Reunion",
    code: "RE",
  },
  {
    value: "05285362-a9f1-4ddd-af03-6b7b5206fb98",
    title: "Romania",
    code: "RO",
  },
  {
    value: "6645a7ea-1c6c-4185-9def-e7ae5806cf1a",
    title: "Russian Federation",
    code: "RU",
  },
  {
    value: "6368b1c0-42f6-453a-afa1-ad2e6b44213a",
    title: "Rwanda",
    code: "RW",
  },
  {
    value: "8aae1726-f7d7-4438-978f-61565f9f329d",
    title: "Saint Helena",
    code: "SH",
  },
  {
    value: "dc7ae3cd-37ca-4b80-a550-e8a7080f419d",
    title: "Saint Kitts and Nevis",
    code: "KN",
  },
  {
    value: "cce06ab9-616f-4b01-9395-1db817b00e0e",
    title: "Saint Lucia",
    code: "LC",
  },
  {
    value: "657019f6-e058-4bd5-8816-b16d13b10146",
    title: "Saint Pierre and Miquelon",
    code: "PM",
  },
  {
    value: "1714578a-507f-4845-a8a3-2fd5ee4386a2",
    title: "Saint Vincent and the Grenadines",
    code: "VC",
  },
  {
    value: "5f4dfdf6-5b23-433a-bc38-01e7d3c15207",
    title: "Samoa",
    code: "WS",
  },
  {
    value: "eb069709-0fd9-4cf6-bbe5-6090563eda24",
    title: "San Marino",
    code: "SM",
  },
  {
    value: "af975c07-4d6e-465b-8ef1-63c929d127a6",
    title: "Sao Tome and Principe",
    code: "ST",
  },
  {
    value: "fceab2e1-e7a6-4dff-8491-c3c8d787c3ed",
    title: "Saudi Arabia",
    code: "SA",
  },
  {
    value: "c0e0ad02-b6e4-4f9c-996b-bd344d07c01c",
    title: "Senegal",
    code: "SN",
  },
  {
    value: "f65ce922-f631-4663-9830-461fd54e48cb",
    title: "Serbia and Montenegro",
    code: "CS",
  },
  {
    value: "f9dbbb95-2317-4460-8fc8-8b4bbc9d2839",
    title: "Seychelles",
    code: "SC",
  },
  {
    value: "2ddc8578-ad49-4fff-ab85-f34fcb8947c1",
    title: "Sierra Leone",
    code: "SL",
  },
  {
    value: "fbb18331-dfc9-4f4c-a5fa-5235360484db",
    title: "Singapore",
    code: "SG",
  },
  {
    value: "6240e305-f947-4734-a70b-529317db5cc2",
    title: "Slovakia",
    code: "SK",
  },
  {
    value: "2c313cba-1812-4859-a2b9-d3124abf28a9",
    title: "Slovenia",
    code: "SI",
  },
  {
    value: "5fa2aa5a-46cf-4a27-bd3c-35e6f3b6f25e",
    title: "Solomon Islands",
    code: "SB",
  },
  {
    value: "97a1c775-3222-439a-ba8f-65f85e273ddb",
    title: "Somalia",
    code: "SO",
  },
  {
    value: "7fde7bdb-9764-4cab-9763-a5250a5e4ddb",
    title: "South Africa",
    code: "ZA",
  },
  {
    value: "f1063d01-5111-4a3a-8684-7bca83ba42fc",
    title: "South Georgia and the South Sandwich Islands",
    code: "GS",
  },
  {
    value: "3aadcd56-cfac-4d75-9d8c-ed7418895f35",
    title: "Spain",
    code: "ES",
  },
  {
    value: "fb6c64c1-acb7-465c-b885-4981914b54cd",
    title: "Sri Lanka",
    code: "LK",
  },
  {
    value: "a15a0739-e410-4ed4-a1f1-06d3d919e48a",
    title: "Sudan",
    code: "SD",
  },
  {
    value: "738901c1-949a-45fe-b2de-0ee9074f68a8",
    title: "Suriname",
    code: "SR",
  },
  {
    value: "62bae44f-b443-405d-bc36-c04330761079",
    title: "Svalbard and Jan Mayen",
    code: "SJ",
  },
  {
    value: "9d22d0d9-c304-472e-9b03-e019e781fa2f",
    title: "Swaziland",
    code: "SZ",
  },
  {
    value: "e0001f40-4a49-4652-b9f2-c77b37db38f5",
    title: "Sweden",
    code: "SE",
  },
  {
    value: "fb6f32b8-1182-4a37-a737-447b63e4aa4d",
    title: "Switzerland",
    code: "CH",
  },
  {
    value: "76b1c23d-6a6a-43e7-95b5-86969b8ebde6",
    title: "Syrian Arab Republic",
    code: "SY",
  },
  {
    value: "ab355cf7-fb85-4fbc-9719-0e340cbfff0c",
    title: "Taiwan, Republic of China",
    code: "TW",
  },
  {
    value: "eea67289-0f34-4ede-bb37-8702f7598b02",
    title: "Tajikistan",
    code: "TJ",
  },
  {
    value: "19a71f9c-fac9-40ca-b13a-bcb07aa4e85f",
    title: "Tanzania, United Republic of",
    code: "TZ",
  },
  {
    value: "e772fc5a-187f-4f34-ab3f-46ff613b7def",
    title: "Thailand",
    code: "TH",
  },
  {
    value: "8b32383f-50f9-4419-81ba-5a37542126a5",
    title: "Timor-Leste",
    code: "TL",
  },
  {
    value: "d9ae9086-e287-4e70-bde4-92565b8e27b8",
    title: "Togo",
    code: "TG",
  },
  {
    value: "0e551a91-82a3-4d32-adf0-2f51613c66a2",
    title: "Tokelau",
    code: "TK",
  },
  {
    value: "bfaf89c4-ab2a-4f49-b3a5-7d3874350846",
    title: "Tonga",
    code: "TO",
  },
  {
    value: "ef69d418-6d5f-47d0-9941-fae100731077",
    title: "Trinidad and Tobago",
    code: "TT",
  },
  {
    value: "33e02806-6047-4b30-912b-198c1fee1bc4",
    title: "Tunisia",
    code: "TN",
  },
  {
    value: "2b3f3c2d-7ff7-4027-b633-ab0eb89a82d1",
    title: "Turkey",
    code: "TR",
  },
  {
    value: "b3c0e09c-6424-405d-a530-27cee20d284f",
    title: "Turkmenistan",
    code: "TM",
  },
  {
    value: "b7c08f5f-b4c3-40a0-9463-9f847c4cb44b",
    title: "Turks and Caicos Islands",
    code: "TC",
  },
  {
    value: "d7258e81-65c5-4820-b494-ce26570ec8cf",
    title: "Tuvalu",
    code: "TV",
  },
  {
    value: "524ede44-c4d6-46e5-beae-f688491eff09",
    title: "Uganda",
    code: "UG",
  },
  {
    value: "cafe4043-fefd-41f7-8713-8ad5b4c89558",
    title: "Ukraine",
    code: "UA",
  },
  {
    value: "52e08c84-355c-4312-b584-7848fb7ca89b",
    title: "United Arab Emirates",
    code: "AE",
  },
  {
    value: "27890fdc-43cd-4bfa-9a30-b5464c02821a",
    title: "United Kingdom",
    code: "GB",
  },
  {
    value: "321d7c76-2234-415a-878b-7768d9ceecdd",
    title: "United States",
    code: "US",
  },
  {
    value: "64b1b00f-78da-439b-baa6-26af1d1ec5fa",
    title: "United States Minor Outlying Islands",
    code: "UM",
  },
  {
    value: "6f2b5091-c635-45da-8685-d530880a1d53",
    title: "Uruguay",
    code: "UY",
  },
  {
    value: "4549c058-5f2b-4acc-9ba5-88e5f78a41b1",
    title: "Uzbekistan",
    code: "UZ",
  },
  {
    value: "159a9073-83f6-44e8-a4c4-fb79c80ef937",
    title: "Vanuatu",
    code: "VU",
  },
  {
    value: "fbf178a7-89ad-49af-b42f-b6f90f85b0a8",
    title: "Venezuela",
    code: "VE",
  },
  {
    value: "9de81ac8-ba62-41f8-8c0c-505349876f7c",
    title: "Viet Nam",
    code: "VN",
  },
  {
    value: "a23e8829-6a90-4768-9c0b-1487654a2804",
    title: "Virgin Islands, British",
    code: "VG",
  },
  {
    value: "c9eaf02c-21cc-4817-b8bb-2d8569c738d8",
    title: "Virgin Islands, U.S.",
    code: "VI",
  },
  {
    value: "2ea3f9aa-1f06-4713-925a-84cd84a980f0",
    title: "Wallis and Futuna",
    code: "WF",
  },
  {
    value: "48096016-1a7a-4127-9d30-3866ee24e6d4",
    title: "Western Sahara",
    code: "EH",
  },
  {
    value: "042a558a-0648-4037-81e6-a7bd01efa48f",
    title: "Yemen",
    code: "YE",
  },
  {
    value: "8e39585e-83e7-41e7-88f1-6b8438971e81",
    title: "Zambia",
    code: "ZM",
  },
  {
    value: "267d7852-b117-4619-a959-b236caff05ed",
    title: "Zimbabwe",
    code: "ZW",
  },
  {
    value: "ea33fc36-05f5-4f5f-ae3f-210d41e416db",
    title: "Åland Islands",
    code: "AX",
  },
];

export function getDistance(from, to) {
  const fromCountry = countries.find(
    (country) => country.value === from.country
  )?.code;
  const toCountry = countries.find(
    (country) => country.value === to.country
  )?.code;

  const fromLocation = cities.find(
    (city) => city.country === fromCountry && city.name === from.locality
  );
  const toLocation = cities.find(
    (city) => city.country === toCountry && city.name === to.locality
  );
  return geolib.getDistance(fromLocation, toLocation);
}

export default countries;
