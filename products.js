const categories = [
    { name: "Clay beads bracelet", icon: "fas fa-ring" },
    { name: "Mobile charm", icon: "fas fa-mobile-alt" },
    { name: "Resin earrings", icon: "fas fa-gem" },
    { name: "Key rings", icon: "fas fa-key" },
    { name: "Couple Combo", icon: "fas fa-heart" },
    { name: "Bracelets for boys", icon: "fas fa-male" },
    { name: "Anime collection", icon: "fas fa-gamepad" },
    { name: "Bracelets for girls", icon: "fas fa-female" },
    { name: "Necklace", icon: "fas fa-gem" },
    { name: "Customised Phone cover", icon: "fas fa-mobile" },
    { name: "Sanrio collections", icon: "fas fa-star" },
    { name: "Unisex Bracelets", icon: "fas fa-users" },
    { name: "Webseries collections", icon: "fas fa-film" }
];
const products = [
    {
        id: 1,
        name: "Glass Beads Bracelet - Rainbow bracelet",
        category: "Bracelets for girls",
        price: 60,
        image: 'products/Rainbow-Bracelet.jpg',
        description: "Handcrafted glass beads bracelet with rainbow tones. Each bead is carefully shaped and painted by hand. This unique piece is lightweight and comfortable for everyday wear.",
        isFeatured: false
    },
    {
        id: 2,
        name: "Glass Cracked Beads Bracelet - Astro Galaxy Evil eye planetary bracelet",
        category: "Unisex Bracelets",
        price: 60,
        image: 'products/Astro-Bracelet.jpg',
        description: "Handcrafted glass beads bracelet with galaxy planetary tones. Each bead is carefully shaped and cracked carefully by hand and even double coated. This unique piece is lightweight and comfortable for everyday wear.",
        isFeatured: false
    },
    {
        id: 3,
        name: "Glass Beads Bracelet- Sanrio 5 besties Collection Combo",
        category: "Sanrio collections",
        price: 330,
        image: 'products/Sanrio-5-bestie.jpg',
        description: "Handcrafted glass beads bracelet Sanrio themed. Each Sanrio character is carefully matched with the glass beads. This high quality bracelets is a very good combo .This unique piece is lightweight and comfortable for everyday wear.",
        isFeatured: true
    },
    {
        id: 4,
        name: "Glass Cracked Beads Bracelet - Sanrio kuromi",
        category: "Sanrio collections",
        price: 70,
        image: 'products/Bracelet-Sanrio-kuromi.jpg',
        description: "Handcrafted glass beads bracelet Sanrio kuromi. The Sanrio character is carefully matched with the glass beads. This high quality bracelets is  very good  .This unique piece is lightweight and comfortable for everyday wear.",
        isFeatured: false
    },
    {
        id: 5,
        name: "Glass Cracked Beads Bracelet - Sanrio HelloKitty",
        category: "Sanrio collections",
        price: 70,
        image: 'products/Sanrio-HelloKitty.jpg',
        description: "Handcrafted glass beads bracelet Sanrio themed. The Sanrio Character is carefully matches with the glass beads . This high quality bracelet is a very good. This unique is lightweight and comfortable for everyday wear.",
        isFeatured: false
    },
    {
        id: 6,
        name: "Glass Cracked Beads Bracelet - Sanrio my Melody",
        category: "Sanrio collections",
        price: 70,
        image: 'products/Sanrio-my-Melody.jpg',
        description: "Handcrafted glass beads bracelet Sanrio my melody. The Sanrio character is carefully matched with the glass beads. These high quality bracelets are  very good  .This unique piece is lightweight and comfortable for everyday wear.",
        isFeatured: false
    },
    {
        id: 7,
        name: "Glass Cracked Beads Bracelet - Sanrio Cinmoroll",
        category: "Sanrio collections",
        price: 70,
        image: 'products/Sanrio-Cinmoroll.jpg',
        description: "Handcrafted glass beads bracelet Sanrio Cinmaroll. The Sanrio character is carefully matched with the glass beads. These high quality bracelets are  very good  .This unique piece is lightweight and comfortable for everyday wear.",
        isFeatured: false
    },
    {
        id: 8,
        name: "Glass Cracked Beads Bracelet - Sanrio Purin",
        category: "Sanrio collections",
        price: 70,
        image: 'products/Sanrio-Purin.jpg',
        description: "Handcrafted glass beads bracelet Sanrio Purin. The Sanrio character is carefully matched with the glass beads. These high quality bracelets are  very good  .This unique piece is lightweight and comfortable for everyday wear.",
        isFeatured: false
    },
    {
        id: 9,
        name: "Glass Cracked Beads Bracelet - Moon Bunny Galaxy Bracelet",
        category: "Bracelets for girls",
        price: 70,
        image: 'products/Moon-Bunny-Galaxy-Bracelet.jpg',
        description: "Handcrafted glass beads Moon Bunny Galaxy Bracelet. The bracelet features a charming design with round beads in pastel shades of blue, pink, and purple, accented by gold star-shaped spacers. A cute charm of a white bunny sleeping on a crescent moon, holding a yellow star, adds a whimsical touch. The bracelet is displayed on a soft, green fuzzy surface with a yellow border, enhancing its playful and dreamy aesthetic. . These high quality bracelets are  very good  .This unique piece is lightweight and comfortable for everyday wear.",
        isFeatured: false
    },
    {
        id: 10,
        name: "Glass Beads Bracelet - Lock & key Couple combo Bracelet",
        category: "Couple Combo",
        price: 130,
        image: 'products/Lock-&-key-Couple-combo-Bracelet.jpg',
        description: "Handcrafted glass beads couple lock & key Bracelet. One bracelet has white beads with black speckles and a tiny silver key charm 🔑. The other has black beads with a single white speckled bead and a silver padlock 🔒 .It symbolizes how two people fit together like a key unlocking a lock 🔓💕. It's a sweet representation of a couple's connection or bond 💗 .This unique piece is lightweight and comfortable for everyday wear.",
        isFeatured: false
    },
    {
        id: 11,
        name: "Clay beads bracelet - Conrad shell Bracelet",
        category: "Webseries collections",
        price: 60,
        image: 'products/Conrad-shell-Bracelet.jpg',
        description: "This bracelet is LIT .It's got a super cute combo of pastel blues, greens, and whites with pearls and cowrie shells vibes. The beads spell out \"CONRAD\" Its a webseries character .It is lightweight and comfortable for daily wear",
        isFeatured: false
    },
    {
        id: 12,
        name: "Glass Cracked Beads Bracelet - Mini mouse bracelet",
        category: "Bracelets for girls",
        price: 60,
        image: 'products/Mini-mouse-bracelet.jpg',
        description: "This bracelet is a cute and quirky accessory featuring a mix of blue, white, and crack beads in various textures and finishes. The beads are strung together to create a playful look, and a charm in the shape of Mini Mouse's head adds a fun Disney touch. It is lightweight and comfortable for daily wear",
        isFeatured: false
    },
    {
        id: 13,
        name: "Glass Beads Bracelet - Silver shell Bracelet",
        category: "Unisex Bracelets",
        price: 60,
        image: 'products/Silver-shell-Bracelet.jpg',
        description: "This bracelet is a stylish mix of black and white beads with a cool silver charm. The beads are round and have a matte finish, alternating between black and white for a sleek, contrasting look. A silver shell-shaped charm dips down from the bracelet.The Bracelet's got a minimalist yet trendy feel to it .It is lightweight and comfortable for daily wear",
        isFeatured: false
    },
    {
        id: 14,
        name: "Glass Beads Necklace - White and black clock necklace",
        category: "Necklace",
        price: 120,
        image: 'products/White-and-black-clock-necklace.jpg',
        description: "This necklace is a cute mix of white beads with black speckles and a tiny gold clock charm. The beads are round and have a glossy finish with those fun black spots kinda like paint splashes on them. A small gold clock with a white face and Roman numerals hangs from the bracelet, adding a quirky touch. The clock's hands are set at a particular time, but it's not like it's telling actual time - more like it's a stylish detail.. Overall, it's a playful and stylish piece with a unique clock charm.",
        isFeatured: false
    },
    {
        id: 15,
        name: "Glass Beads Bracelet - Leapord Bracelet",
        category: "Unisex Bracelets",
        price: 60,
        image: 'products/Leapord-Bracelet.jpg',
        description: " This bracelet is a vibrant mix of beads in various textures and colors. It's made up of mostly black beads with accents of white beads that have black speckles, colorful beads with swirls of pink, green, blue, and orange, and gold spacer beads. A silver charm shaped leopard head adds a sigma touch. The bracelet is being held in the palm of a hand, showcasing its unique design..It is lightweight and comfortable for daily wear",
        isFeatured: false
    },
    {
        id: 16,
        name: "Glass Beads Bracelet - Skull Bracelet",
        category: "Bracelets for boys",
        price: 60,
        image: 'products/Skull-Bracelet.jpg',
        description: "This bracelet is a unique blend of edgy and stylish elements. It's made of black beads with a mix of white beads featuring black speckles, adding a touch of contrast. The standout piece is a silver skull charm at the top, giving the bracelet a bold, alternative vibe. There's also a hint of gold accents adding a bit of sophistication. The bracelet is placed on a soft, green fuzzy surface with yellow trim, which adds a cozy touch to the overall look. ",
        isFeatured: false
    },
    {
        id: 17,
        name: "Glass Beads Bracelet- Starfish evil eye Bracelet",
        category: "Bracelet for girls",
        price: 60,
        image: 'products/Starfish-evil-eye-Bracelet.jpg',
        description: "This bracelet is a cute mix of blue and white beads with a fun twist! 🛍 It's got two evil eye beads in the middle, which are kinda like protective charms in some cultures. 💫 Hanging from it is a tiny blue starfish charm with gold accents - it's like a little piece of beachy vibe! Overall, it's a pretty chill and quirky accessory.",
        isFeatured: false
    },
    {
        id: 18,
        name: "Glass Beads Necklace-Crystal heart love necklace and earrings set",
        category: "Necklace",
        price: 200,
        image: 'products/Crystal-heart-love-necklace-and-earrings-set.jpg',
        description: "This necklace is a beautiful blend of coastal charm and whimsical design. It's adorned with a mix of pink, blue, and white beads, along with white cowrie shells hanging from it. The centerpiece of the necklace features a delicate silver charm with wings and a heart pendant, adding a touch of elegance and playfulness. The combination of beads and shells gives the necklace a bohemian vibe, perfect for a casual, beachy look. This necklace set is perfect for gifting.",
        isFeatured: true
    },
    {
        id: 19,
        name: "Clay Beads Bracelet-Sea beach vibe bracelet",
        category: "Clay beads Bracelet",
        price: 60,
        image: 'products/Sea-beach-vibe-bracelet.jpg',
        description: "These best friend bracelets are a super cute pair. They're made with colorful beads and have some fun charms hangin'off'em. One bracelet's got brown beads with a star charm, and the other's got a mix of pink, blue, white, green, and red beads with a cowrie shell charm. BFFs would totally rock these!💖. These Bracelets are lightweight and comfortable for daily wear.",
        isFeatured: true
    },
    {
        id: 20,
        name: "Clay Beads Bracelet- Seashell bff combo bracelet",
        category: "Clay beads Bracelet",
        price: 100,
        image: 'products/Seashell-bff-combo-bracelet.jpg',
        description: "They're couple and best friend vibes rolled into one!💖 The two bracelets are laid out on a super cozy green fuzzy fabric with yellow lines kinda like a chill beachy vibe🌊. The bracelet on the left's got these pastel blue, purple, and white heishi beads with some pearls and a teal seashell charm 💎🐚.The one on the right's got pink heishi beads with pearls too, and it says jane on it with a lil smiley face 😊 plus a silver seashell charm 💫. They are  meant for two people who're super close – besties or a cute couple 💕 sharing a beachy, boho~ style. The shells and pearls give them that coastal, laid-back feel. These Bracelets are Lightweight and comfortable for daily wear.",
        isFeatured: false
    },
    {
        id: 21,
        name: "Glass Beads Bracelet-Demon Slayer themed bracelet",
        category: "Anime Collection",
        price: 60,
        image: 'products/Demon-Slayer-themed-bracelet.jpg',
        description: "These are Demon Slayer themed beaded bracelets! Each bracelet features colorful beads in various shades like pink, green, purple, and more, with letter beads spelling out the name of a character from the anime -Nezuko, Shinobu, Tanjiro, Mitsuri, and Muichiro. Cute chibi-style illustrations of each character are placed next to their respective bracelets. These are a cool merch for Demon Slayer fans! The bracelets are lightweight and comfortable for everyday wear.",
        isFeatured: false
    },
    {
        id: 22,
        name: "Clay Beads Bracelet-Stranger things themed bracelet",
        category: "Webseries Collections",
        price: 60,
        image: 'products/Stranger-things-themed-bracelet.jpg',
        description: "These are custom Stranger Things themed bracelets! Each bracelet is made with colorful beads and has a character's name spelled out in letter beads. There's Will, El & Max, Mike, Lucas, and Dustin - all main characters from the show. They're arranged with pics of the characters in the middle of each bracelet circle. The design's got a fun, playful vibe with the mix of colors and the Stranger Things logo in the middle of the layout. Let us know which one you want through our WhatsApp or Instagram messages.",
        isFeatured: true
    },
    {
        id: 23,
        name: "Resin Keychain-Resin Name Initial Keychain",
        category: "Key rings",
        price: 50,
        image: 'products/Resin-Name-Initial-Keychain.jpg',
        description: "These resin keychains are a stylish accessory featuring letters filled with gold, silver, and red flakes. The letters are clear resin with a mix of gold flakes and other metallic accents suspended inside, giving them a sparkly look. They're attached to metal key rings and custom-made, with initials. Contact my WhatsApp number or instagram dm within one hour of the order with your first name initial.",
        isFeatured: true 
    },
    {
        id: 24,
        name: "Glass Beads mobile charm-Black white cracked beads mobile charm",
        category: "Mobile Charm",
        price: 90,
        image: 'products/Black-white-cracked-beads-mobile-charm.jpg',
        description: "This mobile charm is a cute and quirky accessory made of various beads in black, white, and pearl shades. It's got a mix of shapes like hearts, bows, stars, and round beads with some having black speckles. The combo of shapes and textures gives it a playful, kawaii vibe 😊. The bracelet is lightweight and comfortable for daily wear.",
        isFeatured: true
    },
    {
        id: 25,
        name: "Glass Beads Bracelet-Cracked Beads Sanrio Cinmoroll Bracelet",
        category: "Bracelet for girls",
        price: 70,
        image: 'products/Cracked-Beads-Sanrio-Cinmoroll-Bracelet.jpg',
        description: "This bracelet is a cute and colorful accessory. It's made up of round beads in shades of blue, pink, and clear with sparkly bits inside some of them. There are also a couple of heart-shaped beads adding a sweet touch. Hanging from the bracelet is a tiny charm of a smiling character wearing a blue hat. The combo of pastel colors and the adorable charm makes this bracelet look super kawaii! The bracelet is lightweight and comfortable for daily wear.",
        isFeatured: false
    },
    {
        id: 26,
        name: "Glass Beads Bracelet-Cracked Beads Sanrio kuromi themed Bracelet",
        category: "Bracelet for girls",
        price: 70,
        image: 'products/Cracked-Beads-Sanrio-kuromi-themed-Bracelet.jpg',
        description: "This bracelet is a cute and colorful accessory. It's made up of round beads in shades of blue, pink, and clear with sparkly bits inside some of them. There are also a couple of bow-shaped beads adding a sweet touch. Hanging from the bracelet is a tiny charm of a smiling character. The combo of pastel colors and the adorable charm makes this bracelet look super kawaii! The bracelet is lightweight and comfortable for daily wear.",
        isFeatured: false
    },
    {
        id: 27,
        name: "Glass Beads Bracelet-Sanrio bestie Bracelets",
        category: "Couple Combo",
        price: 120,
        image: 'products/Sanrio-bestie-Bracelets.jpg',
        description: "The bracelet is made of sparkly beads in shades of blue, purple, and pink, with cute charms of pastel-colored hanging from them. The beads are a mix of transparent and matte finishes, giving them a playful vibe. Looks like they're perfect for a matching pair 💕, The Bracelets are lightweight and comfortable for daily wear.",
        isFeatured: false
    },
    {
        id: 28,
        name: "Glass Beads Bracelet-Disney Mickey and Minnie Mouse Couple Bracelet",
        category: "Couple Combo",
        price: 150,
        image: 'products/Disney-Mickey-and-Minnie-Mouse-Couple-Bracelet.jpg',
        description: "The couple bracelets are so cute! They're made of beaded charms featuring Mickey and Minnie Mouse. One bracelet has black beads mixed with sparkly blue/pink crack beads and a Minnie Mouse charm with a red bow. The other has black beads mixed with blue/white gradient beads and a Mickey Mouse charm. They look like perfect matching couple accessories for Disney fans! 💖. Lightweight and comfortable for daily wear.",
        isFeatured: false
    },
    {
        id: 29,
        name: "Glass Beads Bracelet-White Blue themed Bracelet",
        category: "Unisex Bracelet",
        price: 60,
        image: 'products/White-Blue-themed-Bracelet.jpg',
        description: "This bracelet is made of small, round beads that are mostly light blue and white, with one black bead. The beads are strung together in a circular pattern, forming a simple yet cute accessory. The bracelet is a handmade minimalist piece. Lightweight and comfortable for daily wear.",
        isFeatured: false
    },
    {
        id: 30,
        name: "Beads Necklace-Daisy Pearl Necklace",
        category: "Necklace",
        price: 90,
        image: 'products/Daisy-Pearl-Necklace.jpg',
        description: "This necklace is a delicate and charming piece featuring small white pearls and a few slightly larger yellow beads. A cute white flower charm with a yellow center adds a playful touch to the design. The necklace is laid out on a rich red fabric background with a rose pattern, giving it a stylish and elegant look.",
        isFeatured: false
    },
    {
        id: 31,
        name: "Glass Beads Necklace-Purple themed Necklace",
        category: "Necklace",
        price: 150,
        image: 'products/Purple-themed-Necklace.jpg',
        description: "This necklace is a pretty lilac and pearl combo! It's got lilac beads, pearls, and some clear beads mixed in for extra sparkle. There's a lilac flower charm in the middle with a lilac drop pendant hanging down. The necklace has a silver chain detail too. Super cute accessory!. Perfect for gifting.",
        isFeatured: false
    },
    
    
];


























