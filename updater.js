const fs = require('fs');

// Προσομοίωση δεδομένων με εικόνες, badges και καταστήματα
const STORES_DATA = [
    {
        name: "Apple iPhone 15 Pro 128GB",
        store: "Public",
        price: "1.049 €",
        badge: "🔥 Hot Deal",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=200&q=80",
        link: "https://www.public.gr"
    },
    {
        name: "Apple iPhone 15 Pro 128GB",
        store: "Plaisio",
        price: "1.029 €",
        badge: "⚡ Best Price",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=200&q=80",
        link: "https://www.plaisio.gr"
    },
    {
        name: "Sony PlayStation 5 Slim Digital",
        store: "Public",
        price: "449 €",
        badge: "✨ Προσφορά",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=200&q=80",
        link: "https://www.public.gr"
    },
    {
        name: "Sony PlayStation 5 Slim Digital",
        store: "Plaisio",
        price: "439 €",
        badge: "⚡ Best Price",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=200&q=80",
        link: "https://www.plaisio.gr"
    }
];

function generateUnifiedDatabase() {
    fs.writeFileSync('products.json', JSON.stringify(STORES_DATA, null, 2));
    console.log(`🤖 Η βάση δεδομένων ενημερώθηκε επιτυχώς με ${STORES_DATA.length} προϊόντα!`);
}

generateUnifiedDatabase();
