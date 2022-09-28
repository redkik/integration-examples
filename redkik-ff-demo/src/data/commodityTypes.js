const commodities = [
    {
        "value": "-1",
        "title": "Other/Unknown"
    },
    {
        "value": "01",
        "title": "Cosmetics"
    },
    {
        "value": "010",
        "title": "Pharmaceuticals"
    },
    {
        "value": "02",
        "title": "Kitchenwares"
    },
    {
        "value": "03",
        "title": "Lumber"
    },
    {
        "value": "04",
        "title": "Vehicles"
    },
    {
        "value": "05",
        "title": "Products of animal origin, not elsewhere specified or included"
    },
    {
        "value": "06",
        "title": "Live trees and other plants; bulbs, roots and the like; cut flowers and ornamental foliage"
    },
    {
        "value": "07",
        "title": "Edible vegetables and certain roots and tubers"
    },
    {
        "value": "08",
        "title": "Edible fruit and nuts; peel of citrus fruit or melons"
    },
    {
        "value": "09",
        "title": "Coffee, tea, maté and spices"
    },
    {
        "value": "10",
        "title": "Cereals"
    },
    {
        "value": "101",
        "title": "New Machinery"
    },
    {
        "value": "102",
        "title": "Used Machinery"
    },
    {
        "value": "103",
        "title": "Airplane engines new"
    },
    {
        "value": "104",
        "title": "Textiles"
    },
    {
        "value": "105",
        "title": "Dry Food"
    },
    {
        "value": "106",
        "title": "Server Racks"
    },
    {
        "value": "107",
        "title": "Used Aircraft Engines"
    },
    {
        "value": "108",
        "title": "Bank Notes, Coins and Negotiable Instruments"
    },
    {
        "value": "109",
        "title": "Jewellers’ Block"
    },
    {
        "value": "11",
        "title": "Products of the milling industry; malt; starches; inulin; wheat gluten"
    },
    {
        "value": "110",
        "title": "Desktop Computers and Laptops"
    },
    {
        "value": "111",
        "title": "Integrated Circuits Chips"
    },
    {
        "value": "112",
        "title": "Sensitive Precision Machineries and Eqipment"
    },
    {
        "value": "113",
        "title": "Livestocks and Bloodstocks"
    },
    {
        "value": "114",
        "title": "Cargo shipped in Bulk Shipments"
    },
    {
        "value": "115",
        "title": "Coal"
    },
    {
        "value": "116",
        "title": "Radioactive Goods and Substances"
    },
    {
        "value": "117",
        "title": "Project Cargo requiring special handling & movement"
    },
    {
        "value": "118",
        "title": "Mobile Phones, Handheld devices and the Likes"
    },
    {
        "value": "119",
        "title": "Dangerous or Hazardous Goods as per IMDG Codes"
    },
    {
        "value": "12",
        "title": "Oil seeds and oleaginous fruits; miscellaneous grains, seeds and fruit; industrial or medicinal plants; straw and fodder"
    },
    {
        "value": "120",
        "title": "Restricted or Controlled items"
    },
    {
        "value": "121",
        "title": "Any Exhibition Risks"
    },
    {
        "value": "122",
        "title": "Aircraft engine tools"
    },
    {
        "value": "123",
        "title": "Antennas and antenna reflectors of all kinds; parts suitable for use therewith"
    },
    {
        "value": "13",
        "title": "Lac; gums, resins and other vegetable saps and extracts"
    },
    {
        "value": "14",
        "title": "Vegetable plaiting materials; vegetable products not elsewhere specified or included"
    },
    {
        "value": "15",
        "title": "Animal or vegetable fats and oils and their cleavage products; prepared edible fats; animal or vegetable waxes"
    },
    {
        "value": "16",
        "title": "Preparations of meat, of fish or of crustaceans, molluscs or other aquatic invertebrates"
    },
    {
        "value": "17",
        "title": "Sugars and sugar confectionery"
    },
    {
        "value": "18",
        "title": "Cocoa and cocoa preparations"
    },
    {
        "value": "19",
        "title": "Preparations of cereals, flour, starch or milk; pastrycooks' products"
    },
    {
        "value": "20",
        "title": "Preparations of vegetables, fruit, nuts or other parts of plants"
    },
    {
        "value": "21",
        "title": "Miscellaneous edible preparations"
    },
    {
        "value": "22",
        "title": "Beverages, spirits and vinegar"
    },
    {
        "value": "23",
        "title": "Residues and waste from the food industries; prepared animal fodder"
    },
    {
        "value": "24",
        "title": "Tobacco and manufactured tobacco substitutes"
    },
    {
        "value": "25",
        "title": "Salt; sulphur; earths and stone; plastering materials, lime and cement"
    },
    {
        "value": "26",
        "title": "Ores, slag and ash"
    },
    {
        "value": "27",
        "title": "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes"
    },
    {
        "value": "28",
        "title": "Inorganic chemicals; organic or inorganic compounds of precious metals, of rare-earth metals, of radioactive elements or of isotopes"
    },
    {
        "value": "29",
        "title": "Organic chemicals"
    },
    {
        "value": "30",
        "title": "Pharmaceutical products"
    },
    {
        "value": "31",
        "title": "Fertilisers"
    },
    {
        "value": "32",
        "title": "Tanning or dyeing extracts; tannins and their derivatives; dyes, pigments and other colouring matter; paints and varnishes; putty and other mastics; inks"
    },
    {
        "value": "33",
        "title": "Essential oils and resinoids; perfumery, cosmetic or toilet preparations"
    },
    {
        "value": "34",
        "title": "Soap, organic surface-active agents, washing preparations, lubricating preparations, artificial waxes, prepared waxes, polishing or scouring preparations, candles and similar articles, modelling pastes, ‘dental waxes’ and dental preparations with a basis of plaster"
    },
    {
        "value": "35",
        "title": "Albuminoidal substances; modified starches; glues; enzymes"
    },
    {
        "value": "36",
        "title": "Explosives; pyrotechnic products; matches; pyrophoric alloys; certain combustible preparations"
    },
    {
        "value": "37",
        "title": "Photographic or cinematographic goods"
    },
    {
        "value": "38",
        "title": "Miscellaneous chemical products"
    },
    {
        "value": "39",
        "title": "Plastics and articles thereof"
    },
    {
        "value": "40",
        "title": "Rubber and articles thereof"
    },
    {
        "value": "41",
        "title": "Raw hides and skins (other than furskins) and leather"
    },
    {
        "value": "42",
        "title": "Articles of leather; saddlery and harness; travel goods, handbags and similar containers; articles of animal gut (other than silkworm gut)"
    },
    {
        "value": "43",
        "title": "Furskins and artificial fur; manufactures thereof"
    },
    {
        "value": "44",
        "title": "Wood and articles of wood; wood charcoal"
    },
    {
        "value": "45",
        "title": "Cork and articles of cork"
    },
    {
        "value": "46",
        "title": "Manufactures of straw, of esparto or of other plaiting materials; basketware and wickerwork"
    },
    {
        "value": "47",
        "title": "Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard"
    },
    {
        "value": "48",
        "title": "Paper and paperboard; articles of paper pulp, of paper or of paperboard"
    },
    {
        "value": "49",
        "title": "Printed books, newspapers, pictures and other products of the printing industry; manuscripts, typescripts and plans"
    },
    {
        "value": "50",
        "title": "Silk"
    },
    {
        "value": "51",
        "title": "Wool, fine or coarse animal hair; horsehair yarn and woven fabric"
    },
    {
        "value": "52",
        "title": "Cotton"
    },
    {
        "value": "53",
        "title": "Other vegetable textile fibres; paper yarn and woven fabrics of paper yarn"
    },
    {
        "value": "54",
        "title": "Man-made filaments; strip and the like of man-made textile materials"
    },
    {
        "value": "55",
        "title": "Man-made staple fibres"
    },
    {
        "value": "56",
        "title": "Wadding, felt and nonwovens; special yarns; twine, cordage, ropes and cables and articles thereof"
    },
    {
        "value": "57",
        "title": "Carpets and other textile floor coverings"
    },
    {
        "value": "58",
        "title": "Special woven fabrics; tufted textile fabrics; lace; tapestries; trimmings; embroidery"
    },
    {
        "value": "59",
        "title": "Impregnated, coated, covered or laminated textile fabrics; textile articles of a kind suitable for industrial use"
    },
    {
        "value": "60",
        "title": "Knitted or crocheted fabrics"
    },
    {
        "value": "61",
        "title": "Articles of apparel and clothing accessories, knitted or crocheted"
    },
    {
        "value": "62",
        "title": "Articles of apparel and clothing accessories, not knitted or crocheted"
    },
    {
        "value": "63",
        "title": "Other made-up textile articles; sets; worn clothing and worn textile articles; rags"
    },
    {
        "value": "64",
        "title": "Footwear, gaiters and the like; parts of such articles"
    },
    {
        "value": "65",
        "title": "Headgear and parts thereof"
    },
    {
        "value": "66",
        "title": "Umbrellas, sun umbrellas, walking sticks, seat-sticks, whips, riding-crops and parts thereof"
    },
    {
        "value": "67",
        "title": "Prepared feathers and down and articles made of feathers or of down; artificial flowers; articles of human hair"
    },
    {
        "value": "68",
        "title": "Articles of stone, plaster, cement, asbestos, mica or similar materials"
    },
    {
        "value": "69",
        "title": "Ceramic products"
    },
    {
        "value": "70",
        "title": "Glass and glassware"
    },
    {
        "value": "71",
        "title": "Natural or cultured pearls, precious or semi-precious stones, precious metals, metals clad with precious metal, and articles thereof; imitation jewellery; coin",
        "active": false
    },
    {
        "value": "72",
        "title": "Iron and steel"
    },
    {
        "value": "73",
        "title": "Articles of iron or steel"
    },
    {
        "value": "74",
        "title": "Copper and articles thereof"
    },
    {
        "value": "75",
        "title": "Nickel and articles thereof"
    },
    {
        "value": "76",
        "title": "Aluminium and articles thereof"
    },
    {
        "value": "78",
        "title": "Lead and articles thereof"
    },
    {
        "value": "79",
        "title": "Zinc and articles thereof"
    },
    {
        "value": "80",
        "title": "Tin and articles thereof"
    },
    {
        "value": "81",
        "title": "Other base metals; cermets; articles thereof"
    },
    {
        "value": "82",
        "title": "Tools, implements, cutlery, spoons and forks, of base metal; parts thereof of base metal"
    },
    {
        "value": "83",
        "title": "Miscellaneous articles of base metal"
    },
    {
        "value": "84",
        "title": "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
        "active": false
    },
    {
        "value": "85",
        "title": "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles"
    },
    {
        "value": "87",
        "title": "Vehicles other than railway or tramway rolling stock, and parts and accessories thereof"
    },
    {
        "value": "88",
        "title": "Aircraft, spacecraft, and parts thereof"
    },
    {
        "value": "89",
        "title": "Ships, boats and floating structures"
    },
    {
        "value": "90",
        "title": "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof"
    },
    {
        "value": "91",
        "title": "Clocks and watches and parts thereof"
    },
    {
        "value": "92",
        "title": "Musical instruments; parts and accessories of such articles"
    },
    {
        "value": "93",
        "title": "Arms and ammunition; parts and accessories thereof"
    },
    {
        "value": "94",
        "title": "Furniture; bedding, mattresses, mattress supports, cushions and similar stuffed furnishings; lamps and lighting fittings, not elsewhere specified or included; illuminated signs, illuminated nameplates and the like; prefabricated buildings"
    },
    {
        "value": "95",
        "title": "Toys, games and sports requisites; parts and accessories thereof"
    },
    {
        "value": "96",
        "title": "Miscellaneous manufactured articles"
    },
    {
        "value": "97",
        "title": "Works of art, collectors' pieces and antiques"
    },
    {
        "value": "98",
        "title": "Complete industrial plant"
    },
    {
        "value": "99",
        "title": "Special combined nomenclature codes"
    }
];

export default commodities;