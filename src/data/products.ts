export interface Product {
  name: string;
  slug: string;
  image: string;
  category: string;
  brand: string;
  moq: string;
  price: number | null;
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    "name": "Antiseptic Liquid 100ml",
    "slug": "antiseptic-liquid-100ml",
    "image": "/products/00b9062b-d381-4473-a4ee-9e48823632bd.jpg",
    "category": "Personal Care",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Food Takeaway Containers",
    "slug": "food-takeaway-containers",
    "image": "/products/03da356c-5510-43d6-94be-7d5f7f691f37.jpg",
    "category": "Disposable Items",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Straw Broom",
    "slug": "straw-broom",
    "image": "/products/046dbaf2-bc2f-45b7-aec7-7d9433057ada.jpg",
    "category": "Cleaning Products",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 290,
    "inStock": true
  },
  {
    "name": "Colorful Paper Napkins",
    "slug": "colorful-paper-napkins",
    "image": "/products/0850fdc9-7367-466e-bd96-f1d97ec45de0.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Hi-jeen Tissues (Rose Petal)",
    "slug": "hi-jeen-tissues-rose-petal",
    "image": "/products/1083fd45-8b0f-4208-8af7-e30a14eed5a1.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Sweep Liquid Cleaner 1200ml Fresh Lemon",
    "slug": "sweep-liquid-cleaner-1200ml-fresh-lemon",
    "image": "/products/118712e4-11a6-451d-83ff-89823a258a5c.jpg",
    "category": "Cleaning Products",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 510,
    "inStock": true
  },
  {
    "name": "Microfiber Mop Head",
    "slug": "microfiber-mop-head",
    "image": "/products/1216e609-8944-4e4a-9eda-38a5502cb2c1.jpg",
    "category": "Washroom Supplies",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 945,
    "inStock": true
  },
  {
    "name": "Commode Brush",
    "slug": "commode-brush",
    "image": "/products/19138fec-d08c-4773-8718-2b84e24831ec.jpg",
    "category": "Washroom Supplies",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Pop-Up Tissues Ultra Soft",
    "slug": "rose-petal-pop-up-tissues-ultra-soft",
    "image": "/products/1f3020be-5360-43d0-ba6e-0d42a06ee7bd.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Family Deal",
    "slug": "family-deal",
    "image": "/products/1f772c54-9795-4461-b7a0-7982e0b1f3e0.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Hi-jeen Jumbo Roll",
    "slug": "hi-jeen-jumbo-roll",
    "image": "/products/27067f9e-47ec-41d2-8a62-0ed2a03f429e.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Hi-jeen Tissues",
    "slug": "hi-jeen-tissues",
    "image": "/products/2fdda938-c4cf-480d-b359-8e3e8fa4c668.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Floor Broom",
    "slug": "floor-broom",
    "image": "/products/33fe1a9c-3c2c-4e19-9248-45aeddc708ff.jpg",
    "category": "Cleaning Products",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 365,
    "inStock": true
  },
  {
    "name": "Scouring Sponge",
    "slug": "scouring-sponge",
    "image": "/products/350fc6f2-c4c0-4820-813c-8610c340a0d7.jpg",
    "category": "Cleaning Products",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Clear PET Cups with Dome Lids",
    "slug": "clear-pet-cups-with-dome-lids",
    "image": "/products/35ee928a-1f93-408c-997e-e88e41e76988.jpg",
    "category": "Disposable Items",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Perfumed Tissues",
    "slug": "rose-petal-perfumed-tissues",
    "image": "/products/39fde44d-13fc-4f48-a105-e35dbed51943.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Perfumed Tissues 200 Sheets",
    "slug": "rose-petal-perfumed-tissues-200-sheets",
    "image": "/products/3a6e42a6-c141-46a2-b4d1-5b535fe8acb5.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "White Microfiber Cloths",
    "slug": "white-microfiber-cloths",
    "image": "/products/3f1e5dd5-ebc8-4270-a04f-4b92b57040d2.jpg",
    "category": "Washroom Supplies",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Cling Film Roll",
    "slug": "cling-film-roll",
    "image": "/products/4034ce74-1155-45e7-8036-af8558544160.jpg",
    "category": "Disposable Items",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Blue Microfiber Cloths",
    "slug": "blue-microfiber-cloths",
    "image": "/products/4422277b-4583-4ecf-853d-69179758357e.jpg",
    "category": "Washroom Supplies",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Garbage Bags",
    "slug": "garbage-bags",
    "image": "/products/57815928-0eee-4c80-a2cb-c68a17caad90.jpg",
    "category": "Disposable Items",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 510,
    "inStock": true
  },
  {
    "name": "Party White",
    "slug": "party-white",
    "image": "/products/6ad2345f-1182-42fb-84f5-e82c8fc2539f.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "PopUp",
    "slug": "popup",
    "image": "/products/8e70831d-7c2f-41ce-a718-884de9247dd0.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Paper Coffee Cups",
    "slug": "paper-coffee-cups",
    "image": "/products/b124c95f-f5e3-448d-8c09-432e05a2d462.jpg",
    "category": "Disposable Items",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Aluminum Foil Containers",
    "slug": "aluminum-foil-containers",
    "image": "/products/bd0893be-1954-49a7-ac3c-6c4915864113.jpg",
    "category": "Disposable Items",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "White Paper Napkins Bulk Pack",
    "slug": "white-paper-napkins-bulk-pack",
    "image": "/products/473e796c-df93-47bf-8b4e-4df25d9a6d8a.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Zzoop Maxi Roll",
    "slug": "rose-petal-zzoop-maxi-roll",
    "image": "/products/47e9fd7c-bb31-4e1b-ab00-089ce210fe5b.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Hand Towel",
    "slug": "rose-petal-hand-towel",
    "image": "/products/4a68b0f9-f60f-4b66-8d51-48cf66896704.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Aluminum Foil Roll",
    "slug": "aluminum-foil-roll",
    "image": "/products/53351c12-ded2-43c0-a30a-f3ba92c01864.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Maxob Toilet Roll 8+2 Offer",
    "slug": "rose-petal-maxob-toilet-roll-8-2-offer",
    "image": "/products/535ca8e5-e823-4ca1-8597-effca4811888.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Luxury Tissues",
    "slug": "rose-petal-luxury-tissues",
    "image": "/products/53ba4c66-c83a-49b5-b620-9a73ad964829.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Disposable Paper Plates",
    "slug": "disposable-paper-plates",
    "image": "/products/560a7d3e-a041-4a09-b926-560ec81d9113.jpg",
    "category": "Disposable Items",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Flu Pack Tissues",
    "slug": "rose-petal-flu-pack-tissues",
    "image": "/products/56a03dfa-232b-4bf8-b0eb-a16d5d0cade5.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Essential Tissues",
    "slug": "rose-petal-essential-tissues",
    "image": "/products/56c583ad-a50a-4d08-a35c-0c5f93cf364b.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Dettol Floor Cleaner Lemon Fresh 1000ml",
    "slug": "dettol-floor-cleaner-lemon-fresh-1000ml",
    "image": "/products/5764be5a-0d2a-41c5-8fb5-93f13911ebe4.jpg",
    "category": "Cleaning Products",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 510,
    "inStock": true
  },
  {
    "name": "Rose Petal Pocket Pack",
    "slug": "rose-petal-pocket-pack",
    "image": "/products/57d21fe4-0a5b-4ec3-b4cf-f768e2f93603.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Hand Towel Economy Pack",
    "slug": "rose-petal-hand-towel-economy-pack",
    "image": "/products/5e4c6643-f82c-44c5-bce1-3a57ff0a9b0b.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Pocket Pack Blue",
    "slug": "rose-petal-pocket-pack-blue",
    "image": "/products/6301d152-4b94-4d8d-85e2-e1bb6ec05a62.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Multicolor Tissues",
    "slug": "rose-petal-multicolor-tissues",
    "image": "/products/67267e8f-b78c-4da7-875a-c4bb78c839b2.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Occasions Tissues",
    "slug": "rose-petal-occasions-tissues",
    "image": "/products/6854a28b-4bcc-4526-bf10-d88bd7dbe517.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Black Garbage Bags",
    "slug": "black-garbage-bags",
    "image": "/products/693f3b02-02a0-4c0a-bd4e-eb0751080013.jpg",
    "category": "Disposable Items",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 435,
    "inStock": true
  },
  {
    "name": "Bonus Detergent",
    "slug": "bonus-detergent",
    "image": "/products/694528fb-b330-4aef-81d3-5acd2adc60c9.jpg",
    "category": "Cleaning Products",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 850,
    "inStock": true
  },
  {
    "name": "Rose Petal Pocket Pack White",
    "slug": "rose-petal-pocket-pack-white",
    "image": "/products/7e1347f0-f4f9-4f8e-8fa9-0d44f47bb354.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Zzoop Kitchen Towel",
    "slug": "rose-petal-zzoop-kitchen-towel",
    "image": "/products/7e707d53-99e0-4281-b042-b60dc0736316.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Blue Nitrile Gloves",
    "slug": "blue-nitrile-gloves",
    "image": "/products/84633e17-93f8-4c6c-ae60-9c999117ec20.jpg",
    "category": "Personal Care",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 65,
    "inStock": true
  },
  {
    "name": "Glint Glass Cleaner 500ml",
    "slug": "glint-glass-cleaner-500ml",
    "image": "/products/90810e46-bfb2-4003-ab7f-fd8d34726634.jpg",
    "category": "Cleaning Products",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 365,
    "inStock": true
  },
  {
    "name": "Rose Petal Ciblure Tissues",
    "slug": "rose-petal-ciblure-tissues",
    "image": "/products/91c566d7-b9ef-444b-b0fd-6a8cfe390a14.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Air Freshener Fresh Linen 300ml",
    "slug": "air-freshener-fresh-linen-300ml",
    "image": "/products/92b646b5-8b8d-4554-86df-d9000b0039cf.jpg",
    "category": "Cleaning Products",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 290,
    "inStock": true
  },
  {
    "name": "Disposable Cutlery Set",
    "slug": "disposable-cutlery-set",
    "image": "/products/9379e6bc-d0ae-40fa-b50e-973fe9df4268.jpg",
    "category": "Disposable Items",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Party Pack Napkins",
    "slug": "rose-petal-party-pack-napkins",
    "image": "/products/96be6cbb-584a-4db4-a585-8a6a9823de93.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Pocket Pack Teal",
    "slug": "rose-petal-pocket-pack-teal",
    "image": "/products/977b0683-f90f-4917-a762-288eeb5e87b8.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Perfumed Tissues Red",
    "slug": "rose-petal-perfumed-tissues-red",
    "image": "/products/9b62b985-ba85-40b2-a924-c5818d3e65f1.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Large Steel Wiper",
    "slug": "large-steel-wiper",
    "image": "/products/9d455623-5344-43f9-8a3e-2a544571f0a3.jpg",
    "category": "Washroom Supplies",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 510,
    "inStock": true
  },
  {
    "name": "Paper Coffee Cups with Lids",
    "slug": "paper-coffee-cups-with-lids",
    "image": "/products/a9a2a002-6d8b-4f0e-b4d2-44a5b7abbefb.jpg",
    "category": "Disposable Items",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Essential Tissues Peach",
    "slug": "rose-petal-essential-tissues-peach",
    "image": "/products/ad5f57f1-33d0-4e0b-886d-6c2e9bc9e803.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Harpic Power Plus 10X Toilet Cleaner 450ml",
    "slug": "harpic-power-plus-10x-toilet-cleaner-450ml",
    "image": "/products/b135a8bf-aec0-40f2-b0e2-8e6baaa52326.jpg",
    "category": "Cleaning Products",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 725,
    "inStock": true
  },
  {
    "name": "Diluted Phenyl 2.75 L",
    "slug": "diluted-phenyl-2-75-l",
    "image": "/products/b1fecd16-1b91-4606-8cc5-8c54a5f5f7f3.jpg",
    "category": "Cleaning Products",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 230,
    "inStock": true
  },
  {
    "name": "Romi Bathroom Tiki",
    "slug": "romi-bathroom-tiki",
    "image": "/products/c26de9ec-c078-47b0-89c5-d27a8bce448e.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Vim Dishwashing Powder 430g",
    "slug": "vim-dishwashing-powder-430g",
    "image": "/products/d7b99157-2e5d-4b3c-93ad-20425ec2e774.jpg",
    "category": "Cleaning Products",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 510,
    "inStock": true
  },
  {
    "name": "Rose Petal Wet Wipes Rose-Scent Freshen Up",
    "slug": "rose-petal-wet-wipes-rose-scent-freshen-up",
    "image": "/products/db2f3bc5-c28b-452a-8392-fb81b32767ae.jpg",
    "category": "Personal Care",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Disposable Paper Plates Fluted",
    "slug": "disposable-paper-plates-fluted",
    "image": "/products/dcb91384-973e-4732-be8c-dcf1ccc0255e.jpg",
    "category": "Disposable Items",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Disposable Plastic Plates Wrapped",
    "slug": "disposable-plastic-plates-wrapped",
    "image": "/products/e21bc403-4d64-4a0e-a8da-b8d6c8296570.jpg",
    "category": "Disposable Items",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Party Pack Multipurpose Tissue",
    "slug": "rose-petal-party-pack-multipurpose-tissue",
    "image": "/products/ec2fcda2-aed6-4b37-a441-38bc48b0029a.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Dry Dust Mop Blue",
    "slug": "dry-dust-mop-blue",
    "image": "/products/f082bf43-952c-4455-9b04-8fbcaaee44d1.jpg",
    "category": "Washroom Supplies",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": 655,
    "inStock": true
  },
  {
    "name": "Rose Petal Party Pack",
    "slug": "rose-petal-party-pack",
    "image": "/products/f0d3daf5-69e1-481b-83ce-bdfd2224be9c.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  },
  {
    "name": "Rose Petal Pocket Pack Purple",
    "slug": "rose-petal-pocket-pack-purple",
    "image": "/products/f291be22-0e41-425f-8dc8-3a7d65aa1b5f.jpg",
    "category": "Tissue & Paper Wholesale",
    "brand": "Pak Multilinks",
    "moq": "1 carton",
    "price": null,
    "inStock": true
  }
];
export const CATEGORIES = [
  { name: "Tissue & Paper Wholesale", slug: "tissue-paper", description: "Facial tissues, toilet rolls, napkins, kitchen towels and hand towels in bulk cartons." },
  { name: "Washroom Supplies", slug: "washroom-supplies", description: "Mops, wipers, brushes, cloths and washroom essentials for commercial spaces." },
  { name: "Cleaning Products", slug: "cleaning-products", description: "Floor cleaners, glass cleaners, phenyl, bleach, detergents and dishwash supplies." },
  { name: "Personal Care", slug: "personal-care", description: "Hand wash, sanitizers, antiseptics, wet wipes, gloves and masks." },
  { name: "Disposable Items", slug: "disposable-items", description: "Cups, plates, cutlery, containers, foil, cling film and garbage bags." },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}
