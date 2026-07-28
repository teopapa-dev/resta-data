import xml.etree.ElementTree as ET
import json
import urllib.request

# Το XML URL σου από τη Linkwise
XML_URL = "https://affiliate.linkwi.se/feeds/1.2/CD28438/programs-joined/columns-product_id,model_name,product_name,description,category,brand_name,tracking_url,thumb_url,image_url,in_stock,availability,valid_from,valid_to,on_sale,currency,price,full_price,discount,city,times_bought,longitude,latitude,address,size,colour,custom,extra_images,variations/catinc-0/catex-0/proginc-0/progex-0/feed.xml"

def parse_xml_to_json():
    print("Κατέβασμα XML από Linkwise...")
    try:
        req = urllib.request.Request(
            XML_URL, 
            headers={'User-Agent': 'Mozilla/5.0'}
        )
        with urllib.request.urlopen(req) as response:
            xml_data = response.read()
            
        print("Ανάλυση XML...")
        root = ET.fromstring(xml_data)
        
        products = []
        # Συνήθως στα feeds της Linkwise τα προϊόντα είναι μέσα σε ετικέτες όπως <product>
        # (Αν δεις ότι δεν βγάζει τίποτα, θα τσεκάρουμε πώς τα ονομάζει ακριβώς το XML)
        for item in root.findall('.//product'):
            prod = {}
            for child in item:
                prod[child.tag] = child.text
            products.append(prod)
            
        # Αν η δομή είναι διαφορετική και δεν βρει 'product', θα το προσαρμόσουμε άμεσα.
        if not products:
            # Εναλλακτική αναζήτηση αν η Linkwise χρησιμοποιεί άλλη ονομασία στοιχείου
            for item in root:
                prod = {}
                for child in item:
                    prod[child.tag] = child.text
                products.append(prod)

        # Αποθήκευση σε αρχείο JSON για το site σου
        with open('products.json', 'w', encoding='utf-8') as f:
            json.dump(products, f, ensure_ascii=False, indent=4)
            
        print(f"Επιτυχία! Αποθηκεύτηκαν {len(products)} προϊόντα στο products.json")

    except Exception as e:
        print(f"Σφάλμα κατά την ενημέρωση: {e}")

if __name__ == '__main__':
    parse_xml_to_json()
