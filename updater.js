const fs = require('fs');

// 1. Εδώ ορίζουμε τα "Feeds" των καταστημάτων. 
// Στο μέλλον θα βάλεις τα επίσημα Affiliate XML links της Linkwise.
// Για το παράδειγμα, φτιάχνουμε μια προσομοίωση για Public & Πλαίσιο.
const STORES_DATA = {
    "Public": [
        { name: "Apple iPhone 15 Pro 128GB", price: "1049€", link: "https://www.public.gr/product/apple-iphone-15-pro" },
        { name: "Sony PlayStation 5 Slim", price: "479€", link: "https://www.public.gr/product/sony-playstation-5" }
    ],
    "Plaisio": [
        { name: "Apple iPhone 15 Pro 128GB", price: "1029€", link: "https://www.plaisio.gr/apple-iphone-15-pro" },
        { name: "Sony PlayStation 5 Slim", price: "469€", link: "https://www.plaisio.gr/sony-playstation-5" }
    ]
};

// 2. Συνάρτηση που μαζεύει όλα τα προϊόντα σε μια ενιαία λίστα
function generateUnifiedDatabase() {
    let finalProductsList = [];

    // Διαβάζουμε κάθε κατάστημα και παίρνουμε τα προϊόντα του
    for (const [storeName, products] of Object.entries(STORES_DATA)) {
        products.forEach(item => {
            finalProductsList.push({
                name: `${item.name} (${storeName})`, // Προσθέτουμε το όνομα του καταστήματος στον τίτλο
                price: item.price,
                link: item.link // Εδώ στο μέλλον θα μπαίνει αυτόματα το affiliate tracking link
            });
        });
    }

    // 3. Αποθήκευση στο products.json
    fs.writeFileSync('products.json', JSON.stringify(finalProductsList, null, 2));
    console.log(`🤖 Η βάση δεδομένων ενημερώθηκε επιτυχώς με ${finalProductsList.length} προϊόντα!`);
}

// Εκκίνηση της διαδικασίας
generateUnifiedDatabase();
