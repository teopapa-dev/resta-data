import xml.etree.ElementTree as ET
import json
import urllib.request

XML_URL = "ΕΔΩ_ΒΑΛΕ_ΤΟ_LINK_ΣΟΥ_ΑΠΟ_ΤΗ_LINKWISE"

def parse_xml_to_json():
    req = urllib.request.Request(XML_URL, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        xml_data = response.read()
        
    root = ET.fromstring(xml_data)
    products = []
    
    for item in root.findall('.//product'):
        prod = {}
        for child in item:
            prod[child.tag] = child.text
        products.append(prod)
        
    if not products:
        for item in root:
            prod = {}
            for child in item:
                prod[child.tag] = child.text
            products.append(prod)

    with open('products.json', 'w', encoding='utf-8') as f:
        json.dump(products, f, ensure_ascii=False, indent=4)

if __name__ == '__main__':
    parse_xml_to_json()
