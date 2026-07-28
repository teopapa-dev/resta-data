import xml.etree.ElementTree as ET
import json
import urllib.request

XML_URL = "https://affiliate.linkwi.se/feeds/1.2/CD28438/programs-joined/columns-product_id,model_name,product_name,description,category,brand_name,tracking_url,thumb_url,image_url,in_stock,availability,valid_from,valid_to,on_sale,currency,price,full_price,discount,city,times_bought,longitude,latitude,address,size,colour,custom,extra_images,variations/catinc-5,45,69,75,77/catex-0/proginc-14153-2805/progex-0/feed.xml"

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
