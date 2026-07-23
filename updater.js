const fs = require('fs');

const STORES_DATA = [
    {
        name: "Apple iPhone 15 Pro 128GB",
        store: "Public",
        price: "1.049 €",
        badge: "🔥 Hot Deal",
        image: "https://picsum.photos/id/160/200/200", // Σταθερή εικόνα κινητού/gadget
        link: "https://www.public.gr"
    },
    {
        name: "Apple iPhone 15 Pro 128GB",
        store: "Plaisio",
        price: "1.029 €",
        badge: "⚡ Best Price",
        image: "https://picsum.photos/id/160/200/200",
        link: "https://www.plaisio.gr"
    },
    {
        name: "Sony PlayStation 5 Slim Digital",
        store: "Public",
        price: "449 €",
        badge: "✨ Προσφορά",
        image: "https://picsum.photos/id/96/200/200", // Σταθερή εικόνα τεχνολογίας
        link: "https://www.public.gr"
    },
    {
        name: "Sony PlayStation 5 Slim Digital",
        store: "Plaisio",
        price: "439 €",
        badge: "⚡ Best Price",
        image: "https://picsum.photos/id/96/200/200",
        link: "https://www.plaisio.gr"
    }
];

function generateUnifiedDatabase() {
    fs.writeFileSync('products.json', JSON.stringify(STORES_DATA, null, 2));
    console.log(`🤖 Η βάση δεδομένων ενημερώθηκε επιτυχώς με ${STORES_DATA.length} προϊόντα!`);
}

generateUnifiedDatabase();
