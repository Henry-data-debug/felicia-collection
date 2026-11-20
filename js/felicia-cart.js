/**
 * Felicia Collections - E-Commerce Engine
 * Interactive Cart, Slide-out Drawer, and Product Details Modal
 */

(function() {
  // Comprehensive Product Catalog
  const products = [
    // --- Handbags (1-21) ---
    {
      id: 1,
      name: "The Victoria Quilted Shoulder Bag",
      image: "images/05e25ad039e66492824b437e828571f6.jpg",
      category: "Shoulder Bags",
      price: 6500,
      priceFormatted: "KSh 6,500",
      badge: "Bestseller",
      description: "Directly imported from Milan. Features luxurious diamond quilting, polished gold-tone sliding chain strap, turn-lock closure, and dual interior compartments lined in premium satin.",
      specs: ["Material: Premium Imported Leatherette", "Hardware: Polished Gold-Tone", "Dimensions: 28cm x 18cm x 9cm", "Closure: Metallic Turn-Lock"]
    },
    {
      id: 2,
      name: "The Kensington Croc-Embossed Crossbody",
      image: "images/0b958184287aa3df7714433d45dcdc85.jpg",
      category: "Crossbody Bags",
      price: 5800,
      priceFormatted: "KSh 5,800",
      badge: "Imported Luxury",
      description: "Structured high-gloss croc-embossed silhouette imported for modern elegance. Includes an adjustable shoulder strap, reinforced base, and secure zippered pocket.",
      specs: ["Material: Textured Croc Embossed", "Hardware: High-Shine Gold", "Dimensions: 24cm x 16cm x 8cm", "Strap: Adjustable Crossbody"]
    },
    {
      id: 3,
      name: "The Milan Classic Structured Satchel",
      image: "images/115f1f995ab19e3888ed734284390042.jpg",
      category: "Designer Satchels",
      price: 7200,
      priceFormatted: "KSh 7,200",
      badge: "Signature",
      description: "A timeless architectural satchel imported from international fashion hubs. Features structured top handles, detachable crossbody strap, and protective bottom feet.",
      specs: ["Material: Structured Luxury Finish", "Hardware: Brushed Gold", "Dimensions: 30cm x 22cm x 12cm", "Dual carry: Top Handle & Shoulder"]
    },
    {
      id: 4,
      name: "The Riviera Petite Evening Clutch",
      image: "images/160609fca8ee891a797d82502d29b693.jpg",
      category: "Evening Clutches",
      price: 4500,
      priceFormatted: "KSh 4,500",
      badge: "New Arrival",
      description: "Petite, minimalist evening clutch crafted for galas and dinners. Features a detachable delicate snake-chain strap and built-in credit card slots.",
      specs: ["Material: Sleek Imported Finish", "Hardware: Champagne Gold", "Dimensions: 22cm x 13cm x 5cm", "Chain: Detachable 110cm"]
    },
    {
      id: 5,
      name: "The Florence Chain-Strap Crossbody",
      image: "images/1d4d63b91374edd54220bb9ed2acd576.jpg",
      category: "Crossbody Bags",
      price: 6200,
      priceFormatted: "KSh 6,200",
      badge: "Popular",
      description: "Refined Italian-inspired silhouette featuring interwoven gold chain strap, magnetic snap closure, and multi-tier internal organization.",
      specs: ["Material: Soft-Touch Imported Leatherette", "Hardware: Interwoven Chain Gold", "Dimensions: 26cm x 17cm x 8cm", "Closure: Dual Magnetic Snap"]
    },
    {
      id: 6,
      name: "The Sovereign Executive Luxury Tote",
      image: "images/275eecf5570e69c7487aad7771a700c2.jpg",
      category: "Totes & Shoppers",
      price: 8500,
      priceFormatted: "KSh 8,500",
      badge: "Bestseller",
      description: "Generously proportioned executive tote designed for modern business women. Accommodates up to a 14-inch laptop, tablet, planners, and personal cosmetics.",
      specs: ["Material: Heavyweight Textured Import", "Hardware: Reinforced Antique Gold", "Dimensions: 38cm x 28cm x 14cm", "Laptop Sleeve: Fits up to 14\""]
    },
    {
      id: 7,
      name: "The Monte Carlo Structured Handbag",
      image: "images/449db1f4fe9c0ad7899d9f6b4604804f.jpg",
      category: "Designer Satchels",
      price: 7800,
      priceFormatted: "KSh 7,800",
      badge: "Imported Luxury",
      description: "Iconic trapezoid shape featuring brushed gold turn-lock, dual structured handles, and protective metal studs. An unmistakable status symbol.",
      specs: ["Material: Imported Fine Grain", "Hardware: Brushed Gold", "Dimensions: 32cm x 24cm x 13cm", "Base: 4 Metal Protective Studs"]
    },
    {
      id: 8,
      name: "The Bellagio Monogram Flap Bag",
      image: "images/4e9889b9004931b2709ec9929594050f.jpg",
      category: "Shoulder Bags",
      price: 6900,
      priceFormatted: "KSh 6,900",
      badge: "New Arrival",
      description: "Designer flap bag with contrast edge detailing and double chain-link strap. Transitions seamlessly from daytime workwear to night-out glamour.",
      specs: ["Material: Coated Designer Finish", "Hardware: Double Chain Link", "Dimensions: 27cm x 18cm x 9cm", "Lining: Jacquard Fabric"]
    },
    {
      id: 9,
      name: "The Duchess Quilted Crossbody",
      image: "images/5e3fce41b1cb3e6c554e3b3a06c3fe3a.jpg",
      category: "Crossbody Bags",
      price: 5500,
      priceFormatted: "KSh 5,500",
      badge: "Bestseller",
      description: "Diamond-quilted imported leatherette with metallic turn-lock, compact yet surprisingly roomy with center zippered partition.",
      specs: ["Material: Diamond Quilted", "Hardware: Polished Gold", "Dimensions: 23cm x 16cm x 8cm", "Partition: Center Zip Divider"]
    },
    {
      id: 10,
      name: "The Grand Palais Everyday Tote",
      image: "images/73338b9b9a82f2c5d7f2ec83f620b96f.jpg",
      category: "Totes & Shoppers",
      price: 8900,
      priceFormatted: "KSh 8,900",
      badge: "Premium",
      description: "Generous everyday luxury shopper tote with magnetic snap closure, inner zip pocket, water-resistant luxury lining, and matching key fob.",
      specs: ["Material: High-Durability Import", "Hardware: Gold Accent Rings", "Dimensions: 40cm x 30cm x 15cm", "Handles: Comfortable 25cm Drop"]
    },
    {
      id: 11,
      name: "The Elysée Gold-Hardware Shoulder Bag",
      image: "images/85da2d04d264cf4d048b2a5e83ce491c.jpg",
      category: "Shoulder Bags",
      price: 6800,
      priceFormatted: "KSh 6,800",
      badge: "Imported Luxury",
      description: "Graceful curved silhouette with statement high-shine gold buckle, smooth matte touch, and comfortable ergonomic shoulder fit.",
      specs: ["Material: Matte Smooth Finish", "Hardware: Statement Gold Buckle", "Dimensions: 29cm x 19cm x 7cm", "Strap: Ergonomic Curve"]
    },
    {
      id: 12,
      name: "The Capri Minimalist Crossbody",
      image: "images/8eb70be5a7f6d72e6b8251fa7c7d5155.jpg",
      category: "Crossbody Bags",
      price: 5200,
      priceFormatted: "KSh 5,200",
      badge: "Trending",
      description: "Clean architectural lines with adjustable shoulder strap and smooth-glide zip closure for cosmopolitan city life.",
      specs: ["Material: Fine Grain Leatherette", "Hardware: Sleek Minimalist Gold", "Dimensions: 21cm x 15cm x 6cm", "Weight: Ultra Lightweight"]
    },
    {
      id: 13,
      name: "The Versailles Convertible Satchel",
      image: "images/9f517df911942a3c68060df0414422ac.jpg",
      category: "Designer Satchels",
      price: 7500,
      priceFormatted: "KSh 7,500",
      badge: "Signature",
      description: "Convertible top-handle satchel with dual zipped compartments, embossed designer emblem, and removable tassel ornament.",
      specs: ["Material: Embossed Fine Texture", "Hardware: Polished Gold Accents", "Dimensions: 31cm x 23cm x 12cm", "Compartments: Dual Zipped"]
    },
    {
      id: 14,
      name: "The Chelsea Everyday Luxury Shopper",
      image: "images/ba971fbf79e3d92a002446cdb85b4d7f.jpg",
      category: "Totes & Shoppers",
      price: 8200,
      priceFormatted: "KSh 8,200",
      badge: "Bestseller",
      description: "Spacious, lightweight shopper crafted from durable textured imported material. Includes a matching detachable accessory pouch.",
      specs: ["Material: Textured Luxury Saffiano Style", "Hardware: Minimalist Gold", "Dimensions: 36cm x 28cm x 13cm", "Bonus: Detachable Zipper Pouch"]
    },
    {
      id: 15,
      name: "The St. Tropez Lock-Flap Bag",
      image: "images/bbdcc8862a2ebff276d6936aca9a2d38.jpg",
      category: "Shoulder Bags",
      price: 6400,
      priceFormatted: "KSh 6,400",
      badge: "New Arrival",
      description: "Chic front flap with designer padlock pendant and sliding chain for versatile shoulder or crossbody wear.",
      specs: ["Material: Structured Luxury Finish", "Hardware: Padlock Pendant Gold", "Dimensions: 25cm x 17cm x 8cm", "Strap: Sliding Chain"]
    },
    {
      id: 16,
      name: "The Manhattan Dual-Tone Satchel",
      image: "images/c550d390c03a1f46efee391ec4519b4e.jpg",
      category: "Designer Satchels",
      price: 7900,
      priceFormatted: "KSh 7,900",
      badge: "Imported Luxury",
      description: "Two-tone designer palette with reinforced base and structured silhouette, engineered for high-profile business meetings.",
      specs: ["Material: Dual-Tone Imported Material", "Hardware: Metallic Gold Finishes", "Dimensions: 33cm x 25cm x 12cm", "Base: Reinforced Stiffener"]
    },
    {
      id: 17,
      name: "The Mayfair Evening Wristlet Clutch",
      image: "images/c98dc4843efe9af4e792de2e2dcba7f4.jpg",
      category: "Evening Clutches",
      price: 4800,
      priceFormatted: "KSh 4,800",
      badge: "Signature",
      description: "Sleek zip-top clutch with detachable wristlet, phone pocket, and gold metallic zipper. Perfect companion for special evenings.",
      specs: ["Material: Smooth Metallic Glow", "Hardware: Smooth Glide Gold Zip", "Dimensions: 23cm x 14cm x 4cm", "Strap: Detachable Wristlet Loop"]
    },
    {
      id: 18,
      name: "The Parisian Chic Envelope Bag",
      image: "images/c99bbd4bd18112337aadeb8a9e01322e.jpg",
      category: "Crossbody Bags",
      price: 6100,
      priceFormatted: "KSh 6,100",
      badge: "Bestseller",
      description: "Classic envelope magnetic flap with gold edge piping and chain, embodying Parisian high-fashion sophistication.",
      specs: ["Material: Fine Grain Finish", "Hardware: Gold Metallic Edge Trim", "Dimensions: 26cm x 16cm x 7cm", "Closure: Magnetic Snap"]
    },
    {
      id: 19,
      name: "The Felicia Signature Heritage Tote",
      image: "images/d9ea7b0f924a6059c04134fa5bf24ef8.jpg",
      category: "Totes & Shoppers",
      price: 9500,
      priceFormatted: "KSh 9,500",
      badge: "Iconic",
      description: "Our flagship imported luxury tote featuring distinctive gold FC monogram charm, spacious capacity, and protective dustbag.",
      specs: ["Material: Ultra-Durable Heritage Texture", "Hardware: Custom Gold FC Monogram Charm", "Dimensions: 42cm x 31cm x 15cm", "Includes: Felicia Luxury Dustbag"]
    },
    {
      id: 20,
      name: "The Monaco Chain Minaudière Clutch",
      image: "images/e6c63cc0fdbcc779d3d45ad49b31d897.jpg",
      category: "Evening Clutches",
      price: 5600,
      priceFormatted: "KSh 5,600",
      badge: "Luxury Import",
      description: "Hard-shell evening minaudière with rhinestone clasp for red carpet events, weddings, and high-profile celebrations.",
      specs: ["Material: Hard-Shell Luxury Box", "Hardware: Rhinestone Crystal Clasp", "Dimensions: 19cm x 11cm x 5cm", "Chain: Hideable Fine Link Gold Chain"]
    },
    {
      id: 21,
      name: "The Verona Compact Crossbody",
      image: "images/eaa4d1f38caedceb167e5dafd2e0016b.jpg",
      category: "Crossbody Bags",
      price: 4950,
      priceFormatted: "KSh 4,950",
      badge: "New Arrival",
      description: "Compact everyday crossbody for essentials with smooth-glide zipper and scratch-resistant finish for busy days.",
      specs: ["Material: Scratch-Resistant Finish", "Hardware: Polished Gold Accents", "Dimensions: 20cm x 14cm x 6cm", "Strap: Adjustable Comfort Strap"]
    },

        // --- Women Wear (101-110) ---
    {
      id: 101,
      name: "The Emerald Grecian Draped One-Shoulder Dress",
      image: "images/women-dress-1.jpg",
      category: "Cocktail & Evening",
      price: 8500,
      priceFormatted: "KSh 8,500",
      badge: "Bestseller",
      description: "Directly imported luxury cocktail dress sculpted from premium rich emerald stretch crepe. Features an architectural Grecian draped one-shoulder neckline, flattering ruching across the bodice, and an elegant side leg slit.",
      specs: ["Material: Heavyweight Stretch Scuba Crepe", "Neckline: Draped One-Shoulder", "Length: Midi (115cm)", "Closure: Concealed Side Zip", "Origin: Imported Luxury"]
    },
    {
      id: 102,
      name: "The Rose Blossom Floral Lace Off-Shoulder Dress",
      image: "images/women-dress-2.jpg",
      category: "Cocktail & Party",
      price: 9200,
      priceFormatted: "KSh 9,200",
      badge: "New Arrival",
      description: "Chic blush pink cocktail dress with delicate floral corded lace bodice, crossover off-the-shoulder neckline, satin waist sash with bow, and a flowing chiffon A-line skirt.",
      specs: ["Material: Corded Lace & Chiffon", "Waist: Satin Ribbon Tie Belt", "Silhouette: A-Line Midi", "Lining: Full Soft Breathable Lining", "Origin: Imported Luxury"]
    },
    {
      id: 103,
      name: "The Bordeaux Bolero & Cami Midi Two-Piece Set",
      image: "images/women-dress-3.jpg",
      category: "Midi & Sets",
      price: 10800,
      priceFormatted: "KSh 10,800",
      badge: "Signature Set",
      description: "Sophisticated imported two-piece set featuring a geometric Greek-key print camisole dress with pleated flounce skirt and a matching tailored burgundy cropped long-sleeve bolero jacket.",
      specs: ["Set Includes: Cami Dress + Cropped Bolero", "Fabric: Premium Stretch Cotton-Polyester Blend", "Pattern: Geometric Greek-Key Accent", "Closure: Adjustable Spaghetti Straps & Belt", "Origin: Imported Luxury"]
    },
    {
      id: 104,
      name: "The Lilac Crystal Shimmer Mermaid Gala Gown",
      image: "images/women-dress-4.jpg",
      category: "Gala & Red Carpet",
      price: 16500,
      priceFormatted: "KSh 16,500",
      badge: "Haute Couture",
      description: "A breathtaking imported red-carpet gown in shimmering lavender liquid satin. Features a hand-embellished crystal sequin bustier, pleated cross-draped waist, side slit adorned with crystal trim, and a dramatic mermaid train.",
      specs: ["Material: Liquid Duchess Satin & Crystals", "Bust: Boned Corset Bustier with Sequins", "Silhouette: Sculpted Mermaid with Train", "Care: Professional Dry Clean Only", "Origin: Imported Luxury"]
    },
    {
      id: 105,
      name: "The Bronze Papillon Flutter-Sleeve Ballgown",
      image: "images/women-dress-5.jpg",
      category: "Evening & Ballgowns",
      price: 18500,
      priceFormatted: "KSh 18,500",
      badge: "Imported Luxury",
      description: "Magnificent imported floor-length evening ballgown in rich copper bronze duchess satin. Features a clean square neckline, voluminous flutter butterfly sleeves, sculpted waist, and an expansive pleated ballgown skirt.",
      specs: ["Material: Ultra-Heavyweight Duchess Satin", "Sleeves: Flutter Butterfly Sleeves", "Neckline: Structured Square Neck", "Skirt: Full Floor-Length Flare (145cm)", "Origin: Imported Luxury"]
    },
    {
      id: 106,
      name: "The Royal Burgundy Puff-Sleeve Gala Gown",
      image: "images/women-dress-6.jpg",
      category: "Evening & Ballgowns",
      price: 17800,
      priceFormatted: "KSh 17,800",
      badge: "Grand Gala",
      description: "Regal deep wine burgundy satin gala ballgown imported for Nairobi black-tie events. Sculpted with dramatic puff shoulders, sweetheart neckline, satin waist cincher, and an opulent floor-sweeping pleated gown skirt.",
      specs: ["Material: Premium Silk-Finish Heavy Satin", "Neckline: Sweetheart with Puff Shoulders", "Length: Floor Length Gala Silhouette", "Closure: Invisible Back Zipper with Hook", "Origin: Imported Luxury"]
    },
    {
      id: 107,
      name: "The Crimson Siren Split Mermaid Gown",
      image: "images/women-dress-7.jpg",
      category: "Gala & Red Carpet",
      price: 13500,
      priceFormatted: "KSh 13,500",
      badge: "Trending",
      description: "Sculpted deep crimson red mermaid evening gown. Highlights an asymmetrical wrap crossover sweetheart neckline, tailored short puff sleeves, body-contouring hourglass fit, and a bold front leg slit.",
      specs: ["Material: Structural Stretch Crepe", "Fit: Hourglass Mermaid Silhouette", "Neckline: Crossover Sweetheart", "Slit: Elegant Center-Front Slit", "Origin: Imported Luxury"]
    },
    {
      id: 108,
      name: "The Midnight Empress Cape Foyer Gown",
      image: "images/women-dress-8.jpg",
      category: "Gala & Red Carpet",
      price: 19800,
      priceFormatted: "KSh 19,800",
      badge: "Royal Edition",
      description: "An exquisite high-fashion evening gown featuring a swirling midnight navy and crimson dot pattern, dramatic kimono wing sleeves, satin belt with sculpted rose rosette, and an asymmetrical flowing satin side sash.",
      specs: ["Material: Printed Duchess Satin & Heavy Silk", "Sleeves: Dramatic Draped Wing Cape", "Waist: Sculpted 3D Rose Flower Sash", "Occasion: Diplomatic Dinners & Galas", "Origin: Imported Luxury"]
    },
    {
      id: 109,
      name: "The Savannah Emerald Pleated Flounce Dress",
      image: "images/women-dress-9.jpg",
      category: "Cocktail & Party",
      price: 11800,
      priceFormatted: "KSh 11,800",
      badge: "New Season",
      description: "Chic modern luxury A-line midi dress tailored from rich bottle green stretch fabric. Features structured tiered ruffle cap sleeves with golden fan motifs, sweetheart neckline, and pleated skirt with contrast patterned panels.",
      specs: ["Material: Rich Forest Green Stretch Crepe", "Sleeves: Tiered Sculpted Fan Ruffles", "Silhouette: Pleated Fit-and-Flare Midi", "Pattern: Gold & Black Mosaic Insets", "Origin: Imported Luxury"]
    },
    {
      id: 110,
      name: "The Olive Bow-Tie Pleated Atelier Midi Dress",
      image: "images/women-dress-10.jpg",
      category: "Midi & Sets",
      price: 11200,
      priceFormatted: "KSh 11,200",
      badge: "Atelier Chic",
      description: "Timeless Parisian-inspired olive green midi dress with statement pussy-bow necktie, short puffed sleeves with banded cuffs, covered front button placket, cinched waist, and deep accordion pleats.",
      specs: ["Material: Fine Double-Knit Crepe", "Details: Pussy-Bow Tie & Covered Buttons", "Sleeves: Victorian Puff with Cuffs", "Length: Elegant Tea-Length Midi (125cm)", "Origin: Imported Luxury"]
    },

    // --- Beddings (201-210) ---
    {
      id: 201,
      name: "The Starlight Celestial Navy & White Duvet Cover Set",
      image: "images/bedding-item-1.jpg",
      category: "Duvet Sets",
      price: 11800,
      priceFormatted: "KSh 11,800",
      badge: "Celestial Silk-Touch",
      description: "Whimsical yet sophisticated imported luxury duvet set in deep midnight navy and pure crisp white, adorned with constellation stars and shooting comets. Woven from breathable high-density microfiber with a silky sateen finish for cooling night-time comfort.",
      specs: ["Thread Count: 800TC Sateen Weave", "Pieces: 1 Duvet Cover + 4 Pillowcases + 1 Cushion Cover", "Sizes: 6x6 Queen & 7x7 King Beds", "Closure: Hidden Zipper with Corner Ties", "Origin: Directly Imported Luxury Bedding"]
    },
    {
      id: 202,
      name: "The Monochrome Ribbon Wave Luxury Bedding Set",
      image: "images/bedding-item-2.jpg",
      category: "Duvet Sets",
      price: 12500,
      priceFormatted: "KSh 12,500",
      badge: "Modern Atelier",
      description: "Contemporary graphic luxury duvet ensemble featuring fluid ribbon-like wave motions in charcoal grey, obsidian black, and brilliant white. Reversible solid black underside with matching tailored envelope pillow shams.",
      specs: ["Material: Ultra-Soft Double-Brushed Microfiber", "Pieces: 1 Duvet Cover + 4 Pillow Shams", "Sizes: 6x6 Queen & 7x7 King Fit", "Care: Machine Washable, Fade-Resistant", "Origin: Directly Imported Luxury Bedding"]
    },
    {
      id: 203,
      name: "The Grand Chandelier Mocha Geometric Rings Duvet Set",
      image: "images/bedding-item-3.jpg",
      category: "Comforter Sets",
      price: 14800,
      priceFormatted: "KSh 14,800",
      badge: "Presidential Suite",
      description: "Five-star hotel suite luxury bedding crafted from high-luster Egyptian cotton blend. Features bold overlapping concentric rings in rich espresso mocha, warm caramel, and ivory on a crisp white ground, creating grand bedroom presence.",
      specs: ["Material: 1000TC Long-Staple Cotton Blend", "Pieces: 1 Grand Duvet Cover + 4 Pillowcases + 1 Breakfast Sham", "Sizes: 6x6 Queen & 7x7 King Beds", "Finish: Lustrous Silky Sheen", "Origin: Directly Imported Luxury Bedding"]
    },
    {
      id: 204,
      name: "The Royale Emerald Confetti Sphere Luxury Duvet Set",
      image: "images/bedding-item-4.jpg",
      category: "Duvet Sets",
      price: 13900,
      priceFormatted: "KSh 13,900",
      badge: "Royal Emerald",
      description: "Deep jewel-toned bottle green luxury duvet set sprinkled with vibrant circular confetti spheres in gold, crimson, and ivory. Tailored for plush master bedrooms desiring rich color and opulent hotel-grade texture.",
      specs: ["Fabric: Heavy Cotton-Sateen Blend", "Pieces: 1 Duvet Cover + 4 Pillowcases + 1 Bolster Case", "Sizes: 6x6 Queen & 7x7 King Beds", "Color: Deep Emerald Green with Gold Accents", "Origin: Directly Imported Luxury Bedding"]
    },
    {
      id: 205,
      name: "The Nordic Cross Minimalist Caramel Bedding Set",
      image: "images/bedding-item-5.jpg",
      category: "Duvet Sets",
      price: 11500,
      priceFormatted: "KSh 11,500",
      badge: "Nordic Minimalist",
      description: "Warm minimalist Scandinavian-inspired bed set in earthy chocolate caramel with crisp white and mustard cross-hatch grid accents. Tailored from pre-washed breathable cotton sateen for relaxed elegance.",
      specs: ["Material: Washed Cotton Sateen (Breathable)", "Pieces: 1 Duvet Cover + 4 Pillowcases", "Sizes: 6x6 Queen & 7x7 King", "Hypoallergenic: Dust-Mite Resistant Weave", "Origin: Directly Imported Luxury Bedding"]
    },
    {
      id: 206,
      name: "The Imperial Gold Botanical Ginkgo Jacquard Bed Set",
      image: "images/bedding-item-6.jpg",
      category: "Comforter Sets",
      price: 19800,
      priceFormatted: "KSh 19,800",
      badge: "24K Gold Jacquard",
      description: "The crown jewel of bedroom opulence. Woven on precision jacquard looms in shimmering spun champagne gold silk-sateen, featuring delicate botanical ginkgo leaf motifs that catch bedroom chandelier light from every angle.",
      specs: ["Fabric: Spun Silk & Long-Staple Sateen Jacquard", "Pieces: 1 Duvet Cover + 4 Oxford Flanged Pillowcases + 1 Accent Cushion", "Sizes: 6x6 Queen & 7x7 King", "Finish: High-Shine Metallic Gold Lustre", "Origin: Directly Imported Luxury Bedding"]
    },
    {
      id: 207,
      name: "Hotel-Grade 1000TC Satin-Stripe Sheet Set (4 Colorways)",
      image: "images/bedding-item-7.jpg",
      category: "Sheets & Linens",
      price: 8500,
      priceFormatted: "KSh 8,500",
      badge: "Hotel 1000TC",
      description: "Genuine 1000-thread-count long-staple cotton luxury hotel sheet set with distinctive alternating damask sateen stripes. Available in Charcoal Grey, Mauve Rose, Crisp Cream White, and Imperial Burgundy.",
      specs: ["Weave: 1000TC Egyptian Cotton Damask Stripe", "Set Includes: 1 Deep-Pocket Fitted Sheet + 1 Flat Sheet + 4 Pillowcases", "Mattress Fit: Extra-Deep 16\" (40cm) Elasticized Skirt", "Colors: Charcoal, Mauve, Cream, Burgundy", "Origin: Directly Imported Hotel Linens"]
    },
    {
      id: 208,
      name: "CloudComfort Hotel Plush Down-Alternative Pillow Set (Pack of 4)",
      image: "images/bedding-item-8.jpg",
      category: "Pillows & Accessories",
      price: 7800,
      priceFormatted: "KSh 7,800",
      badge: "Pack of 4 Pillows",
      description: "Four plush, high-resilience pillows filled with hypoallergenic micro-cluster down-alternative fibers. Wrapped in 300-thread-count breathable 100% cotton shells with double-stitched piped cord edges for neck and spinal support.",
      specs: ["Includes: 4 Full-Size Luxury Pillows (50x75cm)", "Filling: 1200g Cloud Down-Alternative Fiber", "Shell: 100% Breathable Cotton Percale", "Support: Medium-Firm Ergonomic Alignment", "Origin: Directly Imported Luxury Bedding"]
    },
    {
      id: 209,
      name: "The Kyoto Slate Circle Mosaic Fitted Bedspread Set",
      image: "images/bedding-item-9.jpg",
      category: "Sheets & Linens",
      price: 9500,
      priceFormatted: "KSh 9,500",
      badge: "Japandi Living",
      description: "Zen Japandi-inspired luxury bedspread and fitted sheet collection in heather slate grey, accented with circular ink-wash mosaic stones and modern linear strokes. Includes coordinating bolster covers and tailored shams.",
      specs: ["Fabric: Brushed Peach-Skin Microfiber Crepe", "Pieces: 1 Fitted Bedspread + 2 Pillow Shams + 2 Accent Cushion Cases", "Sizes: 6x6 Queen & 7x7 King Fit", "Care: Non-Iron, Anti-Wrinkle & Color-Lock", "Origin: Directly Imported Luxury Bedding"]
    },
    {
      id: 210,
      name: "The Royal Sapphire Botanical Trellis Duvet Cover Set",
      image: "images/bedding-item-10.jpg",
      category: "Duvet Sets",
      price: 13500,
      priceFormatted: "KSh 13,500",
      badge: "Royal Sapphire",
      description: "Classic majestic bedroom collection in rich sapphire navy and snow white. Features an intricate floral branch trellis center flanked by horizontal striped navy borders and Oxford-flanged pillowcases.",
      specs: ["Material: 100% High-Density Long-Staple Sateen", "Pieces: 1 Duvet Cover + 4 Pillowcases + 1 Bolster Sham", "Sizes: 6x6 Queen & 7x7 King Beds", "Details: Royal Navy Contrast Border Panels", "Origin: Directly Imported Luxury Bedding"]
    },
    {
      id: 211,
      name: "Fluffy bedside mat",
      image: "images/Fluffy bedside mat.jpg",
      images: [
        "images/Fluffy bedside mat.jpg",
        "images/Fluffy bedside mat 2.jpg",
        "images/Fluffy bedside mat 3.jpg",
        "images/Fluffy bedside mat 4.jpg"
      ],
      category: "Bedside Runners & Mats",
      price: 2200,
      priceFormatted: "KSh 2,200",
      badge: "⚜️ 60x180cm",
      description: "⚜️ 60x180cm luxury ultra-soft faux fur plush fluffy bedside runner mat. Thick anti-slip grip backing, supreme comfort and warmth for master bedroom bedsides.",
      specs: [
        "Dimensions: ⚜️ 60cm x 180cm (Bedside Runner Length)",
        "Material: High-Density Ultra-Soft Plush Faux Fur",
        "Backing: Anti-Slip Grip Texture",
        "Care: Easy Care & Machine Washable Gentle Cycle",
        "Origin: Directly Imported Luxury Bedding"
      ]
    },
    {
      id: 212,
      name: "High quality sleeping bag",
      image: "images/High quality sleeping bag.jpg",
      images: [
        "images/High quality sleeping bag.jpg",
        "images/High quality sleeping bag 2.jpg",
        "images/High quality sleeping bag 3.jpg"
      ],
      category: "Pillows & Accessories",
      price: 2500,
      priceFormatted: "KSh 2,500",
      badge: "Envelope Style",
      description: "Generic envelope style high quality sleeping bag designed with an attached comfort hood and all-round dual-slider zipper. Features premium insulated thermal lining for cozy warmth during outdoor travel, camping, or relaxed indoor lounging.",
      specs: [
        "Style: Generic Envelope Style Cut",
        "Features: Attached Comfort Hood",
        "Zipper: Heavy-Duty All-Round Dual Zipper",
        "Material: Water-Resistant Ripstop Nylon Outer Shell",
        "Price: KSh 2,500"
      ]
    },
    {
      id: 213,
      name: "Coloured binded duvets",
      image: "images/coloured binded duvets.jpg",
      images: [
        "images/coloured binded duvets.jpg",
        "images/coloured binded duvets 2.jpg",
        "images/coloured binded duvets 3.jpg",
        "images/coloured binded duvets 4.jpg",
        "images/coloured binded duvets 5.jpg"
      ],
      category: "Duvet Cover Sets",
      price: 3400,
      priceFormatted: "KSh 3,400",
      badge: "⚜️ 6x7 Set",
      description: "🔅🔅 Coloured binded duvets set in Honey G design. Includes 1 pc high-loft duvet, 1 pc coordinating bedsheet, and 2 pcs matching pillow cases tailored for ⚜️ 6x7 beds. Finished with durable bound edge binding.",
      specs: [
        "Dimensions: ⚜️ 6x7 Bed Size",
        "Set Includes: 1 pc Duvet + 1 pc Bedsheet + 2 pcs Pillow Cases",
        "Pattern: Honey G Coloured Bound Piping",
        "Fabric: Ultra-Soft Breathable Cotton-Microfiber Blend",
        "Price: KSh 3,400"
      ]
    },
    {
      id: 214,
      name: "6 Pc mix and match bedsheets",
      image: "images/6 Pc mix and match bedsheets.jpg",
      images: [
        "images/6 Pc mix and match bedsheets.jpg",
        "images/6 Pc mix and match bedsheets 2.jpg",
        "images/6 Pc mix and match bedsheets 3.jpg",
        "images/6 Pc mix and match bedsheets 4.jpg"
      ],
      category: "Sheets & Linens",
      price: 2200,
      priceFormatted: "KSh 2,200",
      badge: "6-Piece Set (6x7)",
      description: "6 Pc mix and match bedsheets luxury ensemble. Carefully coordinated set featuring 1 pc elegant pattern bedsheet, 1 pc solid plain fitted bedsheet with deep elasticized corners, and 4 pcs matching pillow cases in 6x7 size.",
      specs: [
        "Size: 6x7 Bed Fit",
        "Total Pieces: 6-Piece Mix & Match Complete Set",
        "Includes: 1 pc Pattern Bedsheet + 1 pc Plain Fitted Bedsheet + 4 pcs Pillow Cases",
        "Material: Breathable High-Density Cotton Percale",
        "Price: KSh 2,200"
      ]
    },
    {
      id: 215,
      name: "2 Stand Rail Net Mosquito Net",
      image: "images/Rail net mosquito net.jpg",
      images: [
        "images/Rail net mosquito net.jpg",
        "images/Rail net mosquito net 2.jpg",
        "images/Rail net mosquito net 3.jpg",
        "images/Rail net mosquito net 4.jpg"
      ],
      category: "Pillows & Accessories",
      price: 4000,
      priceFormatted: "KSh 4,000",
      badge: "All Sizes @4,000",
      description: "2 stand/Rail net mosquito net for master bedrooms. Engineered with smooth-sliding rail gliders. Available for 4x6, 5x6, and 6x6 bed sizes in Pink, Purple, Cream, and White. ☀️ All sizes and all colours available at the same price of KSh 4,000.",
      specs: [
        "Sizes Supported: 4x6, 5x6, and 6x6 (All sizes same price)",
        "Colours: Pink, Purple, Cream, and White",
        "Mechanism: Dual-Track Stainless Steel Smooth-Glide Rails",
        "Mesh: High-Density Tear-Resistant Micro-Knit",
        "Price: KSh 4,000"
      ]
    },
    {
      id: 216,
      name: "Mattress protector",
      image: "images/Mattress protector.jpg",
      images: [
        "images/Mattress protector.jpg",
        "images/Mattress protector  2.jpg",
        "images/Mattress protector 3.jpg",
        "images/Mattress protector 4.jpg",
        "images/Mattress protector 5.jpg"
      ],
      category: "Sheets & Linens",
      price: 2000,
      priceFormatted: "From KSh 2,000",
      badge: "From KSh 2,000",
      description: "Quilted waterproof & dust-mite repellent mattress protector. Protects your mattress from spills, stains, and daily wear. Available in White, Blue, Beige & Grey. Sizing: 4×6 @ KSh 2,000 | 5×6 @ KSh 2,100 | 6×6 @ KSh 2,200.",
      specs: [
        "Pricing by Size: 4×6 @ KSh 2,000 | 5×6 @ KSh 2,100 | 6×6 @ KSh 2,200",
        "Available Colours: White, Blue, Beige & Grey",
        "Barrier: 100% Waterproof & Breathable Hypoallergenic TPU Membrane",
        "Skirt: 360° Elasticized Deep-Pocket Snug Fit",
        "Starting Price: KSh 2,000"
      ]
    },
    {
      id: 217,
      name: "Quilted water proof pillow protector",
      image: "images/Quilted water proof pillow protector.jpg",
      images: [
        "images/Quilted water proof pillow protector.jpg",
        "images/Quilted water proof pillow protector 2.jpg"
      ],
      category: "Pillows & Accessories",
      price: 1200,
      priceFormatted: "KSh 1,200",
      badge: "Diamond Quilted",
      description: "Quilted waterproof pillow protector featuring an elegant diamond stitch pattern and secure zippered closure. Breathable, ultra-soft, and cozy hypoallergenic shield protecting pillows from liquids, perspiration, and dust mites.",
      specs: [
        "Pattern: Elegant Diamond Stitch Quilted Pattern",
        "Closure: Secure Concealed Zippered Enclosure",
        "Texture: Ultra-Soft, Cozy & Breathable Hypoallergenic Shield",
        "Protection: 100% Waterproof Barrier Against Liquids & Stains",
        "Price: KSh 1,200"
      ]
    },
    {
      id: 218,
      name: "Silk duvet",
      image: "images/Silk duvet.jpg",
      images: [
        "images/Silk duvet.jpg",
        "images/Silk duvet  2.jpg",
        "images/Silk duvet  3.jpg",
        "images/Silk duvet 4.jpg",
        "images/Silk duvet  5.jpg"
      ],
      category: "Duvet Cover Sets",
      price: 4800,
      priceFormatted: "KSh 4,800",
      badge: "Tc Brand (6x7)",
      description: "Luxury Tc Brand Silk Duvet ensemble in 6×7 size. Includes 1 pc premium silk duvet, 1 pc warm fleece bedsheet, 2 matching pillow cases, and 2 decorative throw pillow cases for an opulent master bedroom look.",
      specs: [
        "Brand: Authentic Tc Brand Luxury Bedding",
        "Size: 6×7 Bed Dimensions",
        "Set Includes: 1 pc Duvet + 1 pc Fleece Bedsheet + 2 Pillow Cases + 2 Throw Pillow Cases",
        "Material: Spun Silk Sateen Shell with Ultra-Plush Thermal Filling",
        "Price: KSh 4,800"
      ]
    },
    {
      id: 219,
      name: "Plain fleece blanket",
      image: "images/Plain fleece blanket.jpg",
      images: [
        "images/Plain fleece blanket.jpg",
        "images/Plain fleece blanket  2.jpg",
        "images/Plain fleece blanket 3.jpg",
        "images/Plain fleece blanket 4.jpg",
        "images/Plain fleece blanket 5.jpg"
      ],
      category: "Comforter & Jacquard Sets",
      price: 1500,
      priceFormatted: "KSh 1,500",
      badge: "6x6 Soft Fleece",
      description: "Ultra-soft cotton rich plain fleece blanket in 6x6 size. Lightweight yet delightfully warm, breathable, and lint-resistant for year-round cozy lounging and bedroom layering.",
      specs: [
        "Size: 6x6 Bed Size",
        "Material: Ultra-Soft Breathable Cotton-Fleece Blend",
        "Texture: Plush Lightweight Thermal Fleece",
        "Care: Machine Washable, Fade & Pill Resistant",
        "Price: KSh 1,500"
      ]
    },
    {
      id: 220,
      name: "Fleece velvet",
      image: "images/Fleece velvet.jpg",
      images: [
        "images/Fleece velvet.jpg",
        "images/Fleece velvet 2.jpg",
        "images/Fleece velvet 3.jpg",
        "images/Fleece velvet 4.jpg"
      ],
      category: "Comforter & Jacquard Sets",
      price: 1300,
      priceFormatted: "From KSh 1,300",
      badge: "From KSh 1,300",
      description: "High-quality heavy fleece velvet luxury blanket in 6x6 size. Opulent velvety texture, heavy weight for chilly nights. Available in Plain 6x6 @ KSh 1,300 and Pure White 6x6 @ KSh 1,350.",
      specs: [
        "Weight & Quality: Heavyweight Premium Dense Pile Velvet Fleece",
        "Options: Plain 6x6 @ KSh 1,300 | White 6x6 @ KSh 1,350",
        "Dimensions: 6x6 Fit",
        "Finish: High-Luster Velvet Sheen with Satin Edge Binding",
        "Starting Price: KSh 1,300"
      ]
    },
    {
      id: 221,
      name: "Pure white, cotton compressed pillow",
      image: "images/Pure white, cotton compressed pillow.jpg",
      images: [
        "images/Pure white, cotton compressed pillow.jpg",
        "images/Pure white, cotton compressed pillow 2.jpg"
      ],
      category: "Pillows & Accessories",
      price: 1200,
      priceFormatted: "From KSh 1,200",
      badge: "Pure Fibre @1,200",
      description: "Pure white cotton compressed luxury pillow stuffed with 100% pure virgin micro-cluster fiber. Encased in a breathable 100% cotton percale shell for ergonomic neck support. Available in 750gm @ KSh 1,200 and 1000gm @ KSh 1,400.",
      specs: [
        "Filling: 100% Pure Virgin Micro-Cluster Fiber (Hypoallergenic)",
        "Available Weights: 750gm @ KSh 1,200 | 1000gm @ KSh 1,400",
        "Shell: 100% Breathable Crisp Cotton Percale",
        "Packaging: Vacuum Compressed for Hygiene and Freshness",
        "Starting Price: KSh 1,200"
      ]
    },
    {
      id: 222,
      name: "Sharper fleece woolen blanket",
      image: "images/Sharper fleece woolen blanket.jpg",
      images: [
        "images/Sharper fleece woolen blanket.jpg",
        "images/Sharper fleece woolen blanket 2.jpg",
        "images/Sharper fleece woolen blanket 3.jpg",
        "images/Sharper fleece woolen blanket 4.jpg",
        "images/Sharper fleece woolen blanket 5.jpg"
      ],
      category: "Comforter & Jacquard Sets",
      price: 2200,
      priceFormatted: "KSh 2,200",
      badge: "6x7 Woolen Fleece",
      description: "Ultra-plush sharper fleece woolen luxury blanket in 6x7 size. Heavy thermal warmth, rich fluffy hand-feel, and enduring softness for master bedroom comfort.",
      specs: [
        "Size: 6x7 Bed Fit",
        "Material: Heavy Sharper Woolen Fleece Blend",
        "Features: Dual-Sided Extra Warm Sherpa Loft",
        "Care: Machine Washable Gentle Cycle",
        "Price: KSh 2,200"
      ]
    },
    {
      id: 223,
      name: "Tufted duvet",
      image: "images/Tufted duvet.jpg",
      images: [
        "images/Tufted duvet.jpg",
        "images/Tufted duvet 2.jpg",
        "images/Tufted duvet  3.jpg",
        "images/Tufted duvet 4.jpg",
        "images/Tufted duvet 5.jpg"
      ],
      category: "Duvet Cover Sets",
      price: 4200,
      priceFormatted: "KSh 4,200",
      badge: "6-Piece Set (6x7)",
      description: "Opulent tufted duvet luxury bedding ensemble in 6x7 size. Complete 6-piece set including 1 high-loft tufted duvet, 1 matching bedsheet, and 4 coordinating pillow cases. Distinctive textured tufting adds regal boutique dimension to any bedroom.",
      specs: [
        "Dimensions: 6x7 Bed Size",
        "Set: 6-Piece Set (1 Duvet + 1 Bedsheet + 4 Pillow Cases)",
        "Craftsmanship: Geometric Pinch & Tufted Stitching",
        "Material: Breathable Long-Staple Sateen Cotton Blend",
        "Price: KSh 4,200"
      ]
    },
    {
      id: 224,
      name: "Velvet duvet",
      image: "images/Velvet duvet.jpg",
      images: [
        "images/Velvet duvet.jpg"
      ],
      category: "Duvet Cover Sets",
      price: 3900,
      priceFormatted: "KSh 3,900",
      badge: "TC Brand Corduroy",
      description: "TC Brand luxury velvet duvet ensemble with distinctive corduroy ribbed texture. Features 1 pc velvet duvet, 1 pc warm fleece bedsheet, and 2 pcs matching pillow cases for sumptuous warmth and contemporary elegance.",
      specs: [
        "Brand: Authentic TC Brand Luxury Line",
        "Texture: Corduroy Ribbed Velvet Texture",
        "Set: Complete Bedding Set (1 Velvet Duvet + 1 Fleece Bedsheet + 2 Pillow Cases)",
        "Fabric: High-Density Crushed Velvet with Fleece Lining",
        "Price: KSh 3,900"
      ]
    },
    {
      id: 225,
      name: "Foldable Clothes Storage Box",
      image: "images/Foldable Clothes Storage Box.jpg",
      images: [
        "images/Foldable Clothes Storage Box.jpg",
        "images/Foldable Clothes Storage Box 2.jpg",
        "images/Foldable Clothes Storage Box 3.jpg"
      ],
      category: "Pillows & Accessories",
      price: 450,
      priceFormatted: "KSh 450",
      badge: "45x28x20cm @450",
      description: "Foldable clothes storage box and wardrobe organizer for jeans, pants, sweaters, and linens. Structured compartments keep shelves and drawers neat and accessible. Dimensions: 45 cm by 28 cm by 20 cm.",
      specs: [
        "Dimensions: 45 cm by 28 cm by 20 cm",
        "Functionality: Clothes Organizer for Jeans, Pants, Sweaters & Linens",
        "Features: Collapsible / Foldable Structure with Reinforced Handles",
        "Material: Eco-Friendly Breathable Non-Woven Fabric with Rigid Dividers",
        "Price: KSh 450"
      ]
    },
    {
      id: 226,
      name: "Foldable / Portable Clothes Drying And Hanging Rack",
      image: "images/Portable Clothes Drying rack.jpg",
      images: [
        "images/Portable Clothes Drying rack.jpg",
        "images/Portable Clothes Drying rack 2.jpg",
        "images/Portable Clothes Drying rack 3.jpg",
        "images/Portable Clothes Drying rack 4.jpg"
      ],
      category: "Pillows & Accessories",
      price: 2400,
      priceFormatted: "KSh 2,400",
      badge: "Available in 5 Colors",
      description: "Foldable/portable clothes drying and hanging rack engineered with multi-tier drying bars and wing hangers. Available in Grey, Pink, Blue, Black, and Purple. Folds flat effortlessly for compact bedroom or balcony storage.",
      specs: [
        "Features: Heavy-Duty Multi-Tier Foldable Drying & Hanging Frame",
        "Available Colours: Grey, Pink, Blue, Black, and Purple",
        "Design: Space-Saving Fold-Flat Structure with Locking Joints",
        "Material: Rust-Proof Coated Stainless Steel / High-Impact Polymer",
        "Price: KSh 2,400"
      ]
    },
    {
      id: 227,
      name: "Pom Laced Design Duvet cover set",
      image: "images/Pom Laced Design Duvet cover set.jpg",
      images: [
        "images/Pom Laced Design Duvet cover set.jpg",
        "images/Pom Laced Design Duvet cover set 2.jpg",
        "images/Pom Laced Design Duvet cover set 3.jpg",
        "images/Pom Laced Design Duvet cover set 4.jpg",
        "images/Pom Laced Design Duvet cover set 5.jpg"
      ],
      category: "Duvet Cover Sets",
      price: 3500,
      priceFormatted: "KSh 3,500",
      badge: "Bohemian Microfibre",
      description: "Pom-Pom laced design duvet cover set crafted from bohemian microfibre. Luxury soft and lightweight quilt cover tailored for modern comfort.",
      specs: [
        "Size: 6x6 / 6x7",
        "Material: Bohemian Microfibre, Luxury Soft & Lightweight Quilt Cover",
        "Includes: 1 Duvet Cover, 2 Pillowcases",
        "Design: Elegant Pom-Pom Laced Border Detail",
        "Price: KSh 3,500"
      ]
    },
    {
      id: 228,
      name: "Bowknot Tufted Duvet cover set",
      image: "images/Bowknot Tufted Duvet cover set.jpg",
      images: [
        "images/Bowknot Tufted Duvet cover set.jpg",
        "images/Bowknot Tufted Duvet cover set 2.jpg",
        "images/Bowknot Tufted Duvet cover set 3.jpg",
        "images/Bowknot Tufted Duvet cover set 4.jpg"
      ],
      category: "Duvet Cover Sets",
      price: 3700,
      priceFormatted: "KSh 3,700",
      badge: "Tufted Bowknot",
      description: "Bowknot tufted duvet cover set fashioned from ultra luxury soft cotton microfibre material. Features elegant bowknot tufted embroidery accents.",
      specs: [
        "Size: 6x6 / 6x7",
        "Material: Ultra Luxury Soft Cotton Microfibre Material",
        "Includes: 1 Duvet Cover, 2 Pillowcases",
        "Detailing: Elegant Bowknot Tufted Texturing",
        "Price: KSh 3,700"
      ]
    },
    {
      id: 229,
      name: "Pinch Pleat Cross Pintuck Duvet Cover set",
      image: "images/Pinch Pleat Cross Pintuck Duvet Cover set.jpg",
      images: [
        "images/Pinch Pleat Cross Pintuck Duvet Cover set.jpg",
        "images/Pinch Pleat Cross Pintuck Duvet Cover set 2.jpg",
        "images/Pinch Pleat Cross Pintuck Duvet Cover set 3.jpg",
        "images/Pinch Pleat Cross Pintuck Duvet Cover set 4.jpg",
        "images/Pinch Pleat Cross Pintuck Duvet Cover set 5.jpg",
        "images/Pinch Pleat Cross Pintuck Duvet Cover set 6.jpg"
      ],
      category: "Duvet Cover Sets",
      price: 3300,
      priceFormatted: "KSh 3,300",
      badge: "Cross Pintuck",
      description: "Pinch pleat cross pintuck duvet cover set featuring luxurious diamond pintuck geometric tailoring. Crafted for plush elegance and five-star bedroom comfort.",
      specs: [
        "Size: 6x6 / 6x7",
        "Material: Premium Soft Breathable Microfibre / Cotton Blend",
        "Includes: 1 Duvet Cover, 2 Pillowcases",
        "Pattern: Cross Pintuck / Diamond Pinch Pleat",
        "Price: KSh 3,300"
      ]
    },
    {
      id: 230,
      name: "Luxury Mulberry Silk Duvet cover set",
      image: "images/Luxury  Mulberry Silk Duvet cover set.jpg",
      images: [
        "images/Luxury  Mulberry Silk Duvet cover set.jpg",
        "images/Luxury  Mulberry Silk Duvet cover set 2.jpg",
        "images/Luxury  Mulberry Silk Duvet cover set 3.jpg",
        "images/Luxury  Mulberry Silk Duvet cover set 4.jpg",
        "images/Luxury  Mulberry Silk Duvet cover set 5.jpg",
        "images/Luxury  Mulberry Silk Duvet cover set 6.jpg"
      ],
      category: "Duvet Cover Sets",
      price: 3500,
      priceFormatted: "KSh 3,500",
      badge: "100% Mulberry Silk",
      description: "Luxury 100% Mulberry silk duvet cover set. Exquisitely smooth, skin-friendly, and naturally temperature-regulating for high-end hotel luxury.",
      specs: [
        "Size: 6x6 / 6x7",
        "Material: 100% Pure Mulberry Silk Luster",
        "Set Includes: 1 Duvet Cover, 1 Bedsheet, 2 Pillowcases",
        "Features: Ultra-Silky Texture, Naturally Breathable & Hypoallergenic",
        "Price: KSh 3,500"
      ]
    },
    {
      id: 231,
      name: "Luxury Cotton Satin Striped Duvet cover set",
      image: "images/Luxury Cotton Satin Duvet cover.jpg",
      images: [
        "images/Luxury Cotton Satin Duvet cover.jpg",
        "images/Luxury Cotton Satin Duvet cover 2.jpg",
        "images/Luxury Cotton Satin Duvet cover 3.jpg",
        "images/Luxury Cotton Satin Duvet cover 4.jpg",
        "images/Luxury Cotton Satin Duvet cover 5.jpg"
      ],
      category: "Duvet Cover Sets",
      price: 2900,
      priceFormatted: "From KSh 2,900",
      badge: "Satin Stripe",
      description: "Luxury cotton satin striped duvet cover set featuring classic high-end hotel damask stripes. Available in 6x6/6x7 (KSh 2,900) and 7x8 (KSh 3,200).",
      specs: [
        "Sizes: 6x6 / 6x7 (KSh 2,900) and 7x8 (KSh 3,200)",
        "Material: 100% Luxury Cotton Satin Weave with Damask Stripe",
        "Includes: 1 Duvet Cover, 1 Bedsheet, 2 Pillowcases",
        "Design: Classic Five-Star Hotel Satin Stripe Finish",
        "Price: From KSh 2,900"
      ]
    },
    {
      id: 232,
      name: "Plain Double sided color Cotton Duvet cover set",
      image: "images/Plain Double sided color Cotton Duvet.jpg",
      images: [
        "images/Plain Double sided color Cotton Duvet.jpg",
        "images/Plain Double sided color Cotton Duvet 2.jpg",
        "images/Plain Double sided color Cotton Duvet 3.jpg",
        "images/Plain Double sided color Cotton Duvet 4.jpg"
      ],
      category: "Duvet Cover Sets",
      price: 2600,
      priceFormatted: "KSh 2,600",
      badge: "Reversible Double-Sided",
      description: "Plain double-sided color cotton duvet cover set. Features two coordinating solid tones on reverse sides, crafted from breathable cotton for versatile bedroom styling.",
      specs: [
        "Size: 6x6 & 5x6",
        "Material: 100% Breathable Soft Cotton",
        "Includes: 1 Duvet Cover, 1 Bedsheet, 2 Pillowcases",
        "Design: Double-Sided Two-Tone Reversible Colorway",
        "Price: KSh 2,600"
      ]
    },
    {
      id: 233,
      name: "Knitted tassel throw blankets",
      image: "images/Knitted tassel throw blankets.jpg",
      images: [
        "images/Knitted tassel throw blankets.jpg",
        "images/Knitted tassel throw blankets 2.jpg",
        "images/Knitted tassel throw blankets 4.jpg",
        "images/Knitted tassel throw blankets 6.jpg"
      ],
      category: "Comforter & Jacquard",
      price: 2400,
      priceFormatted: "KSh 2,400",
      badge: "Acrylic Cashmere",
      description: "Knitted tassel throw blanket crafted from ultra-soft acrylic cashmere. Premium decorative sofa or bed throw and jacquard knitted shawl with delicate fringe tassels.",
      specs: [
        "Size: 163 x 183 cm + 12 cm Tassels",
        "Material: Premium Acrylic Cashmere Jacquard Knit",
        "Usage: Decorative Sofa Throw, Bed Coverlet, or Cozy Shawl",
        "Features: Lightweight Warmth, Elegant Fringed Edging",
        "Price: KSh 2,400"
      ]
    },
    {
      id: 234,
      name: "Luxury Cotton Flat Stripped Bedsheet",
      image: "images/Luxury Cotton Flat Stripped Bedsheet.jpg",
      images: [
        "images/Luxury Cotton Flat Stripped Bedsheet.jpg",
        "images/Luxury Cotton Flat Stripped Bedsheet2.jpg",
        "images/Luxury Cotton Flat Stripped Bedsheet 3.jpg",
        "images/Luxury Cotton Flat Stripped Bedsheet 4.jpg"
      ],
      category: "Sheets & Linens",
      price: 2700,
      priceFormatted: "KSh 2,700",
      badge: "Flat Sheet 6-Pc Set",
      description: "Luxury cotton flat striped bedsheets tailored in generous 7x8 and 8x8 dimensions to fit all mattress sizes. Includes 2 flat bedsheets and 4 pillowcases with classic hotel satin stripes.",
      specs: [
        "Size: 7x8 / 8x8 (Generously Sized to Fit All Bed Sizes)",
        "Material: High-Thread-Count Luxury Cotton Satin Stripe",
        "Includes: 2 Flat Bedsheets, 4 Pillowcases",
        "Pattern: Classic Five-Star Hotel Embossed Stripe",
        "Price: KSh 2,700"
      ]
    },
    {
      id: 235,
      name: "Themed Binded Cartoon Duvet",
      image: "images/Themed Binded Cartoon Duvet.jpg",
      images: [
        "images/Themed Binded Cartoon Duvet.jpg",
        "images/Themed Binded Cartoon Duvet 2.jpg",
        "images/Themed Binded Cartoon Duvet 3.jpg",
        "images/Themed Binded Cartoon Duvet 4.jpg",
        "images/Themed Binded Cartoon Duvet 5.jpg"
      ],
      category: "Duvet Cover Sets",
      price: 3400,
      priceFormatted: "KSh 3,400",
      badge: "Kids & Teens Edition",
      description: "Themed binded cartoon duvet ensemble crafted in 4x6 single/twin size. Includes 1 plush padded duvet, coordinating bedsheet, and matching pillowcase with reinforced bound edges.",
      specs: [
        "Size: 4x6",
        "Material: Soft Microfibre / Cotton with Bound Edge Hemming",
        "Includes: 1 Duvet, 1 Bedsheet, 1 Pillowcase",
        "Features: Playful Themed Character Prints, Bound Trim",
        "Price: KSh 3,400"
      ]
    },
    {
      id: 236,
      name: "6pc Luxury designs Velvet plush Fluffy Duvet set",
      image: "images/6pc Luxury designs Velvet Duvet.jpg",
      images: [
        "images/6pc Luxury designs Velvet Duvet.jpg",
        "images/6pc Luxury designs  Duvet.jpg",
        "images/6pc Luxury designs  Duvet 2.jpg",
        "images/6pc Luxury designs  Duvet 3.jpg",
        "images/6pc Luxury designs  Duvet 4.jpg"
      ],
      category: "Duvet Cover Sets",
      price: 4300,
      priceFormatted: "KSh 4,300",
      badge: "Velvet Plush Fluffy",
      description: "6-Piece luxury designs velvet plush fluffy duvet set. Tailored in 6x6/6x7 sizes featuring ultra-cozy fluffy fleece duvet, matching fleece bedsheet, and 4 coordinating pillowcases.",
      specs: [
        "Size: 6x6 / 6x7",
        "Material: Velvet Plush Fluffy Fleece Fabric",
        "Includes: 1 Fluffy Fleece Duvet, 1 Fleece Bedsheet, 4 Pillowcases",
        "Features: Thick High-Pile Fluffy Texture, Superior Heat Retention",
        "Price: KSh 4,300"
      ]
    },

    // --- Kitchen Items (301-310) ---
    {
      id: 301,
      name: "Mayer & Boch Imperial Stainless Steel 12-Piece Cookware Set",
      image: "images/kitchen-item-1.jpg",
      category: "Cookware Sets",
      price: 18500,
      priceFormatted: "KSh 18,500",
      badge: "Premium Multi-Ply",
      description: "Imported luxury multi-ply 18/10 stainless steel cookware collection. Features heavy-duty capsule thermal base for rapid, even heat distribution, mirror-polished exterior with decorative satin bands, tempered glass moisture-retaining lids, and ergonomic heat-resistant rose-gold accented handles. Suitable for all stovetops including induction.",
      specs: ["Pieces: 12-Piece Complete Chef Set (4 Casserole Pots, 1 Saucepan, 1 Skillet, 6 Tempered Lids)", "Material: Heavy-Gauge 18/10 Surgical Stainless Steel", "Handles: Ergonomic Riveted Stay-Cool Rose Gold Accents", "Stovetop Compatibility: Induction, Gas, Electric, Ceramic", "Origin: Directly Imported Luxury Cookware"]
    },
    {
      id: 302,
      name: "Riviera Teal Non-Stick Cookware & Bakeware 14-Piece Set",
      image: "images/kitchen-item-2.jpg",
      category: "Cookware Sets",
      price: 16800,
      priceFormatted: "KSh 16,800",
      badge: "Bestseller Set",
      description: "Vibrant turquoise teal cookware and bakeware ensemble imported for modern Nairobi kitchens. Hard-anodized aluminum construction provides superior durability and warp resistance, with toxin-free PFOA-free non-stick interiors, dual-riveted comfort-grip silicone handles, shatter-resistant glass lids, heavy-duty rimmed baking sheet, and coordinating silicone cooking tools.",
      specs: ["Pieces: 14 Pieces (2 Frying Pans, 3 Covered Pots, 1 Baking Sheet, 2 Heat-Safe Silicone Tools)", "Coating: Platinum-Grade Non-Stick (PFOA, Lead & Cadmium Free)", "Color: Rich Riviera Teal with Stainless Rims", "Oven Safe: Up to 200°C (Cookware) / 230°C (Bakeware)", "Origin: Directly Imported Luxury Cookware"]
    },
    {
      id: 303,
      name: "Maxkon Pro-Grade 2200W Commercial High-Speed Blender",
      image: "images/kitchen-item-3.jpg",
      category: "Kitchen Appliances",
      price: 14500,
      priceFormatted: "KSh 14,500",
      badge: "Commercial 2200W",
      description: "Heavy-duty commercial-grade 2200W vortex blender engineered for silky smoothies, nut butters, crushing solid ice blocks in seconds, and hot gourmet soups. Features Japanese hardened stainless steel 6-point aircraft-grade blades, variable stepless speed dial, instant pulse toggle, and an extra-large 2.5L shatterproof BPA-free tritan pitcher.",
      specs: ["Power: 2,200 Watts Peak Performance Pure Copper Motor", "Capacity: 2.5 Litres BPA-Free Tritan Impact Pitcher", "Blade Assembly: 6-Blade Multi-Directional Stainless Steel", "Control: Stepless Variable Speed + One-Touch Pulse", "Safety: Overheat Protection & Safety Lid Interlock"]
    },
    {
      id: 304,
      name: "Deluxe Multi-Function Electric Countertop Convection & Baking Oven",
      image: "images/kitchen-item-4.jpg",
      category: "Kitchen Appliances",
      price: 15200,
      priceFormatted: "KSh 15,200",
      badge: "Chef Convection",
      description: "Compact yet high-capacity imported countertop convection toaster oven. Features dual-stage heating quartz elements with convection fan circulation for golden crusts, precision 60-minute auto-shutoff timer, independent upper and lower heating controls up to 250°C, tempered double-wall glass door, and interior halogen viewing light.",
      specs: ["Functionality: Bake, Toast, Roast, Broil & Warm", "Heating: Turbo Convection Air Circulation System", "Temperature Range: 100°C to 250°C Precision Thermostat", "Accessories: Enameled Baking Pan, Wire Grilling Rack, Crumb Tray", "Origin: Directly Imported Kitchen Appliance"]
    },
    {
      id: 305,
      name: "Dual-Burner Shatterproof Tempered Glass Auto-Ignition Gas Cooker",
      image: "images/kitchen-item-5.jpg",
      category: "Kitchen Appliances",
      price: 9800,
      priceFormatted: "KSh 9,800",
      badge: "Auto-Ignition",
      description: "Sleek contemporary dual-burner tabletop gas stove crafted with premium 7mm toughened explosion-proof black tempered glass. Features energy-saving swirl vortex blue-flame brass burner heads, zero-battery automatic piezoelectric ignition, heavy cast-iron pan support trivets, and non-slip rubber feet for effortless daily cooking.",
      specs: ["Surface: 7mm High-Strength Toughened Tempered Glass", "Burners: Dual Heavy Brass Vortex Flame Cores", "Ignition: Built-in Piezo Electric Automatic (No Matches/Batteries Needed)", "Gas Type: LPG Compatible with Low Gas Consumption Regulator", "Cleaning: Wipe-Clean Stain-Resistant Glass Surface"]
    },
    {
      id: 306,
      name: "ChefGrade Stainless Steel Temperature-Controlled Electric Deep Fryer",
      image: "images/kitchen-item-6.jpg",
      category: "Kitchen Appliances",
      price: 10500,
      priceFormatted: "KSh 10,500",
      badge: "ChefGrade 3.5L",
      description: "Restaurant-quality brushed stainless steel electric deep fryer designed for quick, crispy fries, golden chicken, samosas, and pastries with minimal oil absorption. Equipped with an immersed rapid-recovery heating element, variable temperature regulator (130°C to 190°C), cool-touch fold-down basket handle, odor-filtering lid with viewing window, and removable enamel oil basin for effortless cleaning.",
      specs: ["Capacity: 3.5 Litres Family & Party Size", "Power: 2,000W Immersed High-Efficiency Element", "Body: Brushed Grade-304 Stainless Steel Housing", "Filter: Multi-Layer Washable Anti-Odor Charcoal Filter Lid", "Safety: Cool-Touch Handles & Automatic Thermal Cutoff"]
    },
    {
      id: 307,
      name: "Elite Multi-Speed Turbo Electric Hand & Stand Mixer Set",
      image: "images/kitchen-item-7.jpg",
      category: "Kitchen Appliances",
      price: 7200,
      priceFormatted: "KSh 7,200",
      badge: "5-Speed Turbo",
      description: "Versatile high-torque kitchen mixer system crafted for baking connoisseurs. Features 5 speed settings plus instant Turbo boost, lightweight ergonomic contour grip, dual balloon wire whisks, heavy stainless steel dough kneading hooks, and a sleek compact storage dock that neatly holds the unit and all beaters on your countertop.",
      specs: ["Motor: 500W High-Torque Pure Copper Motor", "Speeds: 5 Variable Speed Levels + Instant Turbo Burst", "Attachments: 2 Heavy Dough Hooks, 2 Chrome Wire Beaters, 2 Balloon Whisks", "Storage: Custom Countertop Organizer Dock Included", "Eject Button: Quick-Release Safety Beater Ejector"]
    },
    {
      id: 308,
      name: "Kyoto Two-Tone Crimson & Obsidian Ramen Bowl & Spoon Set",
      image: "images/kitchen-item-8.jpg",
      category: "Dinnerware & Porcelain",
      price: 5800,
      priceFormatted: "KSh 5,800",
      badge: "Asian Tableware",
      description: "Imported Japanese-inspired lacquer-finish dining set crafted in striking two-tone obsidian black and vibrant crimson red. Includes deep stackable bowls designed for steaming ramen, pho, noodles, or hearty soups, paired with traditionally sculpted ergonomic soup ladles. High heat resistance, chip-resistant, and dishwasher safe.",
      specs: ["Set Includes: 4 Deep Ramen Bowls + 4 Matching Contoured Soup Spoons", "Colorway: Gloss Crimson Red Interior / Obsidian Black Exterior", "Material: Restaurant-Grade Melamine & Glazed Ceramic Compound", "Heat Resistance: -20°C to 120°C (Dishwasher Safe)", "Origin: Directly Imported Asian Tableware"]
    },
    {
      id: 309,
      name: "Tuscan Scarlet Porcelain Shallow Pasta & Salad Bowl Set (Set of 7)",
      image: "images/kitchen-item-9.jpg",
      category: "Dinnerware & Porcelain",
      price: 8900,
      priceFormatted: "KSh 8,900",
      badge: "Scarlet Glaze",
      description: "Set of 7 restaurant-grade wide shallow rimmed bowls crafted from durable high-fired vitreous porcelain. Coated in a deep Tuscan scarlet red high-gloss glaze that resists cutlery scratching and chipping. Wide, gently flared rim makes it ideal for serving pastas, risotto, salads, stews, and gourmet family-style banquets.",
      specs: ["Set Includes: 7 Wide Shallow Rimmed Bowls (22cm Diameter)", "Material: High-Fired Non-Porous Vitrified Porcelain", "Finish: High-Gloss Scratch-Proof Scarlet Red Glaze", "Safety: Microwave, Dishwasher, Oven & Freezer Safe", "Origin: Directly Imported Italian-Style Tableware"]
    },
    {
      id: 310,
      name: "Royal Auburn Swirl 60-Piece Fine Porcelain Dinner & Tea Service Set",
      image: "images/kitchen-item-10.jpg",
      category: "Dinnerware & Porcelain",
      price: 28500,
      priceFormatted: "KSh 28,500",
      badge: "Banquet 60-Piece",
      description: "Comprehensive imported banquet dining service set for 12 guests. Crafted from pristine high-fired white porcelain, accented with fluid artistic auburn crimson ribbon flourishes. Complete with square-contoured dinner plates, deep soup plates, dessert plates, side saucers, and matching tea/coffee cups.",
      specs: ["Total Pieces: 60-Piece Complete Banquet Service (Serves 12 Guests)", "Contents: 12 Dinner Plates, 12 Soup Bowls, 12 Dessert Plates, 12 Cups, 12 Saucers", "Material: High-Fired Translucent Vitreous Porcelain", "Design: Modern Curved Square Silhouette with Auburn Ribbon Inset", "Origin: Directly Imported Fine Porcelain Dinnerware"]
    }
  ];

  // Helper to find a product by ID
  window.feliciaGetProduct = function(id) {
    return products.find(p => p.id === parseInt(id));
  };

  // --- Cart State Management (localStorage) ---
  const CART_KEY = 'felicia_cart_items';

  function getCart() {
    try {
      const stored = localStorage.getItem(CART_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {}
    updateCartUI();
  }

  window.addToCart = function(productId, qty) {
    qty = qty || 1;
    const p = feliciaGetProduct(productId);
    if (!p) return;

    let cart = getCart();
    const existing = cart.find(item => item.id === p.id);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        id: p.id,
        name: p.name,
        image: p.image,
        category: p.category,
        price: p.price,
        priceFormatted: p.priceFormatted,
        qty: qty
      });
    }

    saveCart(cart);

    // Provide immediate visual feedback on the clicked button
    const btn = event && event.target && event.target.closest ? event.target.closest('.felicia-btn-add-to-cart') : null;
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = '✓ ADDED TO BAG';
      btn.style.background = '#0E3B13';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
      }, 1200);
    }

    // Open Cart Drawer automatically
    toggleCartDrawer(true);
  };

  window.updateCartQty = function(productId, delta) {
    let cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
      }
    }
    saveCart(cart);
  };

  window.removeFromCart = function(productId) {
    let cart = getCart().filter(i => i.id !== productId);
    saveCart(cart);
  };

  window.clearCart = function() {
    saveCart([]);
  };

  // --- Cart Drawer Injection & UI ---
  function injectCartDrawer() {
    if (document.getElementById('felicia-cart-drawer')) return;

    const drawerHtml = `
      <div id="felicia-cart-drawer" class="felicia-drawer-overlay" onclick="handleDrawerOverlayClick(event)">
        <div class="felicia-drawer-panel">
          
          <!-- Drawer Header -->
          <div class="felicia-drawer-header">
            <div style="display: flex; align-items: center; gap: 8px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5A059" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <h3 style="margin: 0; font-family: 'Playfair Display', Georgia, serif; font-size: 1.25rem; color: #141416;">
                Shopping Bag (<span id="cart-drawer-count">0</span>)
              </h3>
            </div>
            <button type="button" class="felicia-drawer-close" onclick="toggleCartDrawer(false)" aria-label="Close Bag">
              &times;
            </button>
          </div>

          <!-- Drawer Body / Items List -->
          <div class="felicia-drawer-body" id="cart-drawer-items">
            <!-- Dynamic items rendered here -->
          </div>

          <!-- Drawer Footer / Totals & Checkout -->
          <div class="felicia-drawer-footer" id="cart-drawer-footer">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px;">
              <span style="font-size: 0.92rem; color: #666; text-transform: uppercase; letter-spacing: 1px;">Estimated Total</span>
              <span style="font-size: 1.4rem; font-weight: 700; color: #141416;" id="cart-drawer-subtotal">KSh 0</span>
            </div>
            <p style="margin: 0 0 18px 0; font-size: 0.8rem; color: #777;">
              Taxes included. Fast rider delivery in Nairobi and courier shipping across Kenya.
            </p>
            
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <!-- WhatsApp Checkout -->
              <button type="button" class="felicia-btn-whatsapp" onclick="checkoutWhatsApp()" style="width: 100%; padding: 13px; font-size: 0.9rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.96L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.016-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.707 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                Complete Order via WhatsApp
              </button>

              <!-- M-Pesa Checkout Button -->
              <button type="button" class="felicia-btn-mpesa" onclick="openMpesaModal()" style="width: 100%; padding: 12px; font-size: 0.88rem; font-weight: 700; background: #00A859; color: #FFF; border: none; border-radius: 4px; cursor: pointer; text-transform: uppercase; letter-spacing: 1px;">
                Pay with M-Pesa
              </button>

              <button type="button" onclick="toggleCartDrawer(false)" style="background: none; border: none; color: #888; font-size: 0.85rem; padding: 6px; cursor: pointer; text-decoration: none;">
                Continue Browsing
              </button>
            </div>
          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', drawerHtml);
  }

  window.handleDrawerOverlayClick = function(e) {
    if (e.target.id === 'felicia-cart-drawer') {
      toggleCartDrawer(false);
    }
  };

  window.toggleCartDrawer = function(open) {
    const drawer = document.getElementById('felicia-cart-drawer');
    if (!drawer) return;
    if (open) {
      updateCartUI();
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  function updateCartUI() {
    const cart = getCart();
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Update Header Counter
    document.querySelectorAll('.felicia-cart-counter').forEach(el => {
      el.textContent = totalCount;
      el.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    const drawerCountEl = document.getElementById('cart-drawer-count');
    if (drawerCountEl) drawerCountEl.textContent = totalCount;

    const drawerSubtotalEl = document.getElementById('cart-drawer-subtotal');
    if (drawerSubtotalEl) {
      drawerSubtotalEl.textContent = 'KSh ' + subtotal.toLocaleString();
    }

    const drawerBody = document.getElementById('cart-drawer-items');
    const drawerFooter = document.getElementById('cart-drawer-footer');

    if (!drawerBody) return;

    if (cart.length === 0) {
      drawerBody.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; color: #888;">
          <div style="font-size: 3rem; margin-bottom: 16px; opacity: 0.4;">🛍️</div>
          <h4 style="font-family: 'Playfair Display', serif; font-size: 1.2rem; color: #141416; margin: 0 0 10px 0;">Your Bag is Empty</h4>
          <p style="font-size: 0.88rem; color: #666; margin-bottom: 24px;">Discover our imported luxury handbags and curated essentials.</p>
          <a href="handbags.html" class="felicia-btn-primary" onclick="toggleCartDrawer(false)" style="display: inline-block;">Shop Handbags</a>
        </div>
      `;
      if (drawerFooter) drawerFooter.style.display = 'none';
    } else {
      if (drawerFooter) drawerFooter.style.display = 'block';

      drawerBody.innerHTML = cart.map(item => `
        <div class="felicia-drawer-item">
          <div class="felicia-drawer-item-img">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="felicia-drawer-item-info">
            <div style="font-size: 0.7rem; color: #C5A059; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">${item.category}</div>
            <a href="javascript:void(0)" onclick="openProductModal(${item.id}); toggleCartDrawer(false);" style="font-family: 'Playfair Display', serif; font-size: 0.98rem; font-weight: 600; color: #141416; text-decoration: none; margin: 2px 0 6px 0; display: block; line-height: 1.3;">
              ${item.name}
            </a>
            <div style="font-size: 1rem; font-weight: 700; color: #141416; margin-bottom: 8px;">
              ${item.priceFormatted}
            </div>
            
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div class="felicia-qty-control">
                <button type="button" onclick="updateCartQty(${item.id}, -1)">&minus;</button>
                <span>${item.qty}</span>
                <button type="button" onclick="updateCartQty(${item.id}, 1)">&plus;</button>
              </div>
              <button type="button" onclick="removeFromCart(${item.id})" class="felicia-item-remove" title="Remove item">
                Remove
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // --- Product Details Modal ("when i click on that i can read about the product") ---
  function injectProductModal() {
    if (document.getElementById('felicia-product-modal')) return;

    const modalHtml = `
      <div id="felicia-product-modal" class="felicia-modal-overlay" onclick="handleModalOverlayClick(event)">
        <div class="felicia-modal-container">
          <button type="button" class="felicia-modal-close" onclick="closeProductModal()" aria-label="Close Product View">&times;</button>
          
          <div class="felicia-modal-grid">
            <!-- Modal Image Gallery with Slideshow & Thumbnails -->
            <div class="felicia-modal-img-col">
              <div class="felicia-modal-img-wrap">
                <img id="modal-product-img" src="" alt="">
                <img id="modal-product-crossfade-img" class="felicia-modal-crossfade-img" src="" alt="" aria-hidden="true">
                <span id="modal-product-badge" class="felicia-badge"></span>
                <button type="button" class="felicia-modal-gallery-arrow felicia-modal-gallery-prev" onclick="changeModalImage(-1)" aria-label="Previous view">&#10094;</button>
                <button type="button" class="felicia-modal-gallery-arrow felicia-modal-gallery-next" onclick="changeModalImage(1)" aria-label="Next view">&#10095;</button>
              </div>
              <div id="modal-product-thumbs" class="felicia-modal-thumbs"></div>
            </div>

            <!-- Modal Product Details -->
            <div class="felicia-modal-details-col">
              <div id="modal-product-category" style="font-size: 0.75rem; color: #C5A059; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; margin-bottom: 6px;"></div>
              <h2 id="modal-product-title" style="font-family: 'Playfair Display', Georgia, serif; font-size: 1.7rem; color: #141416; margin: 0 0 12px 0; line-height: 1.25;"></h2>
              
              <div id="modal-product-price" style="font-size: 1.5rem; font-weight: 700; color: #141416; margin-bottom: 16px;"></div>
              
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 18px; font-size: 0.85rem; color: #2E7D32;">
                <span style="width: 8px; height: 8px; background: #2E7D32; border-radius: 50%; display: inline-block;"></span>
                <span>In Stock &bull; Nairobi Showroom Ready</span>
              </div>

              <div style="border-top: 1px solid #EFEFEF; border-bottom: 1px solid #EFEFEF; padding: 16px 0; margin-bottom: 20px;">
                <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: #141416; margin: 0 0 8px 0;">Description</h4>
                <p id="modal-product-desc" style="font-size: 0.92rem; color: #555; line-height: 1.7; margin: 0;"></p>
              </div>

              <!-- Product Specifications -->
              <div style="margin-bottom: 24px;">
                <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: #141416; margin: 0 0 8px 0;">Key Specifications</h4>
                <ul id="modal-product-specs" style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: #666; line-height: 1.6;">
                </ul>
              </div>

              <!-- Quantity Selector & Actions -->
              <div style="display: flex; gap: 14px; align-items: center; margin-bottom: 16px; flex-wrap: wrap;">
                <div class="felicia-qty-control" style="height: 46px;">
                  <button type="button" onclick="adjustModalQty(-1)" style="font-size: 1.2rem; width: 36px;">&minus;</button>
                  <span id="modal-qty" style="font-size: 1rem; width: 36px; text-align: center; font-weight: 600;">1</span>
                  <button type="button" onclick="adjustModalQty(1)" style="font-size: 1.2rem; width: 36px;">&plus;</button>
                </div>

                <button type="button" class="felicia-btn-add-to-cart" id="modal-add-btn" onclick="addModalProductToCart()" style="flex-grow: 1; height: 46px; font-size: 0.92rem;">
                  ADD TO CART
                </button>
              </div>

              <!-- Fast Direct WhatsApp order -->
              <a href="javascript:void(0)" id="modal-wa-btn" class="felicia-btn-whatsapp" target="_blank" rel="noopener" style="width: 100%; height: 44px;">
                Instant Order via WhatsApp
              </a>

              <div style="margin-top: 18px; font-size: 0.8rem; color: #888; text-align: center;">
                🚀 Fast delivery in Nairobi (Same/Next Day) &bull; Nationwide Kenya courier available
              </div>

            </div>
          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  let activeModalProductId = null;
  let activeModalQty = 1;
  let modalSlideshowInterval = null;
  let modalActiveImgIdx = 0;
  let modalCurrentImages = [];
  let modalTransitionTimer = null;

  window.changeModalImage = function(direction) {
    if (!modalCurrentImages || modalCurrentImages.length <= 1) return;
    modalActiveImgIdx = (modalActiveImgIdx + direction + modalCurrentImages.length) % modalCurrentImages.length;
    setModalImage(modalActiveImgIdx);
    resetModalInterval();
  };

  window.selectModalImage = function(index) {
    if (!modalCurrentImages || index < 0 || index >= modalCurrentImages.length) return;
    modalActiveImgIdx = index;
    setModalImage(modalActiveImgIdx);
    resetModalInterval();
  };

  function setModalImage(idx, immediate = false) {
    const baseImg = document.getElementById('modal-product-img');
    const crossImg = document.getElementById('modal-product-crossfade-img');
    if (!baseImg || !modalCurrentImages[idx]) return;

    const targetSrc = modalCurrentImages[idx];

    // Highlight thumbnail immediately
    document.querySelectorAll('.felicia-modal-thumb-btn').forEach((btn, i) => {
      btn.classList.toggle('active', i === idx);
    });

    if (immediate || !crossImg) {
      if (modalTransitionTimer) clearTimeout(modalTransitionTimer);
      baseImg.src = targetSrc;
      if (crossImg) {
        crossImg.style.transition = 'none';
        crossImg.style.opacity = '0';
        crossImg.src = targetSrc;
      }
      return;
    }

    // Preload for perfectly smooth crossfade
    const preloader = new Image();
    preloader.onload = () => {
      if (modalTransitionTimer) clearTimeout(modalTransitionTimer);

      crossImg.src = targetSrc;
      crossImg.alt = baseImg.alt || '';
      crossImg.style.transition = 'none';
      crossImg.style.opacity = '0';

      void crossImg.offsetWidth; // Force reflow

      // Gentle luxury crossfade dissolve over 0.75s
      crossImg.style.transition = 'opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1)';
      crossImg.style.opacity = '1';

      modalTransitionTimer = setTimeout(() => {
        baseImg.src = targetSrc;
        crossImg.style.transition = 'none';
        crossImg.style.opacity = '0';
        modalTransitionTimer = null;
      }, 780);
    };
    preloader.src = targetSrc;
  }

  function resetModalInterval() {
    if (modalSlideshowInterval) clearInterval(modalSlideshowInterval);
    if (modalCurrentImages && modalCurrentImages.length > 1) {
      modalSlideshowInterval = setInterval(() => {
        modalActiveImgIdx = (modalActiveImgIdx + 1) % modalCurrentImages.length;
        setModalImage(modalActiveImgIdx);
      }, 4000);
    }
  }

  window.openProductModal = function(productId) {
    const p = feliciaGetProduct(productId);
    if (!p) return;

    activeModalProductId = p.id;
    activeModalQty = 1;

    modalCurrentImages = (p.images && p.images.length > 0) ? p.images : [p.image];
    modalActiveImgIdx = 0;

    // Preload all gallery images immediately
    modalCurrentImages.forEach(src => {
      const mImg = new Image();
      mImg.src = src;
    });

    const modalImg = document.getElementById('modal-product-img');
    modalImg.src = modalCurrentImages[0];
    modalImg.alt = p.name;
    modalImg.style.opacity = '1';

    const crossImg = document.getElementById('modal-product-crossfade-img');
    if (crossImg) {
      crossImg.style.transition = 'none';
      crossImg.style.opacity = '0';
      crossImg.src = modalCurrentImages[0];
    }

    // Attach hover/touch pause handlers to modal image wrap
    const modalImgWrap = document.querySelector('.felicia-modal-img-wrap');
    if (modalImgWrap && !modalImgWrap.dataset.pauseAttached) {
      modalImgWrap.dataset.pauseAttached = 'true';
      modalImgWrap.addEventListener('mouseenter', () => {
        if (modalSlideshowInterval) clearInterval(modalSlideshowInterval);
      });
      modalImgWrap.addEventListener('mouseleave', () => {
        resetModalInterval();
      });
      modalImgWrap.addEventListener('touchstart', () => {
        if (modalSlideshowInterval) clearInterval(modalSlideshowInterval);
      }, { passive: true });
      modalImgWrap.addEventListener('touchend', () => {
        setTimeout(resetModalInterval, 3000);
      }, { passive: true });
    }

    document.getElementById('modal-product-badge').textContent = p.badge;
    document.getElementById('modal-product-category').textContent = p.category;
    document.getElementById('modal-product-title').textContent = p.name;
    document.getElementById('modal-product-price').textContent = p.priceFormatted;
    document.getElementById('modal-product-desc').textContent = p.description;
    document.getElementById('modal-qty').textContent = '1';

    // Multi-Image Gallery & Auto-Interval Setup
    const thumbsContainer = document.getElementById('modal-product-thumbs');
    const prevBtn = document.querySelector('.felicia-modal-gallery-prev');
    const nextBtn = document.querySelector('.felicia-modal-gallery-next');

    if (modalCurrentImages.length > 1) {
      if (prevBtn) prevBtn.style.display = 'flex';
      if (nextBtn) nextBtn.style.display = 'flex';
      if (thumbsContainer) {
        thumbsContainer.style.display = 'flex';
        thumbsContainer.innerHTML = modalCurrentImages.map((imgSrc, i) => `
          <button type="button" class="felicia-modal-thumb-btn ${i === 0 ? 'active' : ''}" onclick="selectModalImage(${i})" aria-label="View photo ${i + 1}">
            <img src="${imgSrc}" alt="${p.name} view ${i + 1}">
          </button>
        `).join('');
      }
      resetModalInterval();
    } else {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      if (thumbsContainer) {
        thumbsContainer.style.display = 'none';
        thumbsContainer.innerHTML = '';
      }
      if (modalSlideshowInterval) {
        clearInterval(modalSlideshowInterval);
        modalSlideshowInterval = null;
      }
    }

    const specsList = document.getElementById('modal-product-specs');
    if (specsList && p.specs) {
      specsList.innerHTML = p.specs.map(s => `<li>${s}</li>`).join('');
    }

    const waBtn = document.getElementById('modal-wa-btn');
    if (waBtn) {
      waBtn.href = `https://wa.me/254701721809?text=${encodeURIComponent('Hello Felicia Collections, I would like to order: ' + p.name + ' (' + p.priceFormatted + ')')}`;
    }

    const modal = document.getElementById('felicia-product-modal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeProductModal = function() {
    if (modalSlideshowInterval) {
      clearInterval(modalSlideshowInterval);
      modalSlideshowInterval = null;
    }
    const modal = document.getElementById('felicia-product-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  window.handleModalOverlayClick = function(e) {
    if (e.target.id === 'felicia-product-modal') {
      closeProductModal();
    }
  };

  window.adjustModalQty = function(delta) {
    activeModalQty = Math.max(1, activeModalQty + delta);
    document.getElementById('modal-qty').textContent = activeModalQty;
  };

  window.addModalProductToCart = function() {
    if (!activeModalProductId) return;
    addToCart(activeModalProductId, activeModalQty);
    closeProductModal();
  };

  // --- Checkout Handlers ---
  window.checkoutWhatsApp = function() {
    const cart = getCart();
    if (cart.length === 0) {
      alert('Your shopping bag is empty.');
      return;
    }

    let text = "Hello Felicia Collections, I would like to place an order from your website:\n\n";
    let subtotal = 0;
    cart.forEach((item, idx) => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;
      text += `${idx + 1}. ${item.name} (${item.qty}x @ ${item.priceFormatted}) = KSh ${itemTotal.toLocaleString()}\n`;
    });

    text += `\nTotal: KSh ${subtotal.toLocaleString()}\n\nPlease confirm availability and arrange delivery to my location in Kenya.`;

    const waUrl = `https://wa.me/254701721809?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  window.openMpesaModal = function() {
    const cart = getCart();
    if (cart.length === 0) {
      alert('Your bag is empty.');
      return;
    }
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    alert(`M-PESA CHECKOUT INSTRUCTIONS:\n\n1. Go to M-Pesa on your phone\n2. Select Lipa na M-Pesa -> Buy Goods and Services\n3. Enter Till Number: 554433 (Felicia Collections)\n4. Enter Amount: KSh ${subtotal.toLocaleString()}\n5. Enter your PIN and confirm\n\nOnce complete, please forward the confirmation SMS to WhatsApp (+254 701 721 809) with your delivery address.`);
  };

  // --- CSS Injection for Cart & Modal ---
  function injectCartStyles() {
    const style = document.createElement('style');
    style.id = 'felicia-cart-engine-styles';
    style.innerHTML = `
      /* Cart Trigger in Header */
      .felicia-cart-trigger {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
      }
      .felicia-cart-counter {
        position: absolute;
        top: -4px;
        right: -6px;
        background: #C5A059;
        color: #141416;
        font-size: 0.72rem;
        font-weight: 700;
        min-width: 19px;
        height: 19px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 4px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.25);
      }

      /* Card Title Link */
      .felicia-product-title-link {
        font-family: 'Playfair Display', Georgia, serif;
        font-size: 1.15rem;
        font-weight: 600;
        color: #1A1A1A;
        text-decoration: none !important;
        line-height: 1.35;
        margin: 0 0 10px 0;
        display: inline-block;
        transition: color 0.2s ease, text-decoration-color 0.2s ease;
        cursor: pointer;
      }
      .felicia-product-title-link:hover {
        color: #0b66c2;
        text-decoration-color: #0b66c2;
      }

      /* ADD TO CART Button (Matches Reference Image) */
      .felicia-btn-add-to-cart {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: #1E5631; /* Deep rich forest green as in user's image */
        color: #FFFFFF !important;
        padding: 12px 16px;
        font-weight: 700;
        font-size: 0.88rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
        text-decoration: none !important;
        margin-top: auto;
      }
      .felicia-btn-add-to-cart:hover {
        background: #144023;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(30, 86, 49, 0.35);
      }
      .felicia-btn-add-to-cart:active {
        transform: translateY(0);
      }

      /* Slide-out Cart Drawer */
      .felicia-drawer-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0, 0, 0, 0.55);
        z-index: 9999;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        backdrop-filter: blur(2px);
      }
      .felicia-drawer-overlay.active {
        opacity: 1;
        visibility: visible;
      }
      .felicia-drawer-panel {
        position: absolute;
        top: 0; right: -420px;
        width: 100%;
        max-width: 420px;
        height: 100%;
        background: #FFFFFF;
        box-shadow: -4px 0 25px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .felicia-drawer-overlay.active .felicia-drawer-panel {
        right: 0;
      }
      .felicia-drawer-header {
        padding: 18px 24px;
        border-bottom: 1px solid #EAEAEA;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #FAF9F6;
      }
      .felicia-drawer-close {
        background: none;
        border: none;
        font-size: 1.8rem;
        line-height: 1;
        color: #141416;
        cursor: pointer;
        padding: 0 4px;
      }
      .felicia-drawer-body {
        padding: 20px 24px;
        overflow-y: auto;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 18px;
      }
      .felicia-drawer-footer {
        padding: 20px 24px;
        border-top: 1px solid #EAEAEA;
        background: #FAF9F6;
      }

      .felicia-drawer-item {
        display: flex;
        gap: 14px;
        padding-bottom: 16px;
        border-bottom: 1px solid #F0F0F0;
        align-items: center;
      }
      .felicia-drawer-item-img {
        width: 72px;
        height: 72px;
        flex-shrink: 0;
        border-radius: 4px;
        overflow: hidden;
        background: #141416;
      }
      .felicia-drawer-item-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .felicia-drawer-item-info {
        flex-grow: 1;
      }
      .felicia-qty-control {
        display: inline-flex;
        align-items: center;
        border: 1px solid #DDD;
        border-radius: 4px;
        background: #FFF;
      }
      .felicia-qty-control button {
        background: none;
        border: none;
        padding: 4px 10px;
        font-size: 1rem;
        cursor: pointer;
        color: #333;
      }
      .felicia-qty-control span {
        padding: 0 8px;
        font-size: 0.88rem;
        font-weight: 600;
      }
      .felicia-item-remove {
        background: none;
        border: none;
        color: #999;
        font-size: 0.78rem;
        text-decoration: none !important;
        cursor: pointer;
        padding: 0;
      }
      .felicia-item-remove:hover {
        color: #C00;
      }

      /* Product Details Modal Overlay */
      .felicia-modal-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0, 0, 0, 0.65);
        z-index: 10000;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        backdrop-filter: blur(3px);
      }
      .felicia-modal-overlay.active {
        opacity: 1;
        visibility: visible;
      }
      .felicia-modal-container {
        position: relative;
        background: #FFFFFF;
        width: 100%;
        max-width: 860px;
        max-height: 90vh;
        border-radius: 8px;
        overflow-y: auto;
        box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        animation: feliciaModalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes feliciaModalIn {
        from { transform: scale(0.95); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      .felicia-modal-close {
        position: absolute;
        top: 14px;
        right: 18px;
        background: rgba(255, 255, 255, 0.8);
        border: none;
        font-size: 2rem;
        line-height: 1;
        color: #141416;
        cursor: pointer;
        z-index: 10;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .felicia-modal-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 749px) {
        .felicia-modal-container {
          max-width: 95% !important;
          max-height: 92vh !important;
          margin: 10px auto !important;
        }
        .felicia-modal-grid { grid-template-columns: 1fr !important; }
        .felicia-modal-img-col {
          min-height: 240px !important;
          max-height: 290px !important;
        }
        .felicia-modal-details-col {
          padding: 20px 18px !important;
        }
      }
      .felicia-modal-img-col {
        position: relative;
        background: #141416;
        min-height: 380px;
        display: flex;
        flex-direction: column;
      }
      .felicia-modal-img-wrap {
        position: relative;
        width: 100%;
        flex-grow: 1;
        min-height: 320px;
        background: #FAF9F6;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .felicia-modal-img-wrap img {
        width: 100%;
        height: 100%;
        max-height: 440px;
        object-fit: contain;
        display: block;
        transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: opacity;
      }
      .felicia-modal-crossfade-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 440px;
        object-fit: contain;
        display: block;
        pointer-events: none;
        opacity: 0;
        z-index: 2;
        transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: opacity;
      }
      .felicia-modal-img-wrap .felicia-badge {
        z-index: 6;
      }
      .felicia-modal-gallery-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: rgba(20, 20, 22, 0.82);
        border: 1px solid rgba(212, 175, 55, 0.6);
        color: #FFFFFF;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 7;
        font-size: 1rem;
        transition: all 0.2s ease;
        line-height: 1;
      }
      .felicia-modal-gallery-arrow:hover {
        background: #C5A059;
        color: #141416;
      }
      .felicia-modal-gallery-prev { left: 10px; }
      .felicia-modal-gallery-next { right: 10px; }
      .felicia-modal-thumbs {
        display: none;
        gap: 8px;
        padding: 10px 14px;
        background: #181716;
        overflow-x: auto;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgba(255,255,255,0.08);
      }
      .felicia-modal-thumb-btn {
        width: 48px;
        height: 48px;
        border-radius: 4px;
        border: 2px solid transparent;
        padding: 2px;
        background: #FFFFFF;
        cursor: pointer;
        flex-shrink: 0;
        transition: all 0.2s ease;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .felicia-modal-thumb-btn.active {
        border-color: #D4AF37;
        box-shadow: 0 0 8px rgba(212, 175, 55, 0.6);
      }
      .felicia-modal-thumb-btn img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .felicia-modal-details-col {
        padding: 36px 30px;
        display: flex;
        flex-direction: column;
      }
    `;
    document.head.appendChild(style);
  }

  
  // Mobile Navigation Drawer Handlers
  window.toggleMobileDrawer = function(open) {
    const drawer = document.getElementById('felicia-mobile-drawer');
    if (!drawer) return;
    if (open) {
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  window.handleMobileDrawerClick = function(e) {
    if (e.target.id === 'felicia-mobile-drawer') {
      toggleMobileDrawer(false);
    }
  };

  // Init on DOM ready
  function init() {
    injectCartStyles();
    injectCartDrawer();
    injectProductModal();
    updateCartUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
