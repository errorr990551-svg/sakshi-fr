import json
import os

products_json_path = os.path.join(os.path.dirname(__file__), "src", "data", "products.json")

with open(products_json_path, "r", encoding="utf-8") as f:
    products = json.load(f)

# Mapping of product name / S.No / criteria to the exact 39 new image filenames
mapping_by_sno = {
    "193": "/socketweldfittings.webp",
    "194": "/threadedforgedfittingd.webp",
    "207": "/90elbow.webp",
    "208": "/45elbow.webp",
    "209": "/streetelbow.webp",
    "211": "/equaltee.webp",
    "212": "/reducingtee.webp",
    "213": "/cross.webp",
    "214": "/coupling.webp",
    "215": "/halfcoupling.webp",
    "216": "/reducingcoupling.webp",
    "217": "/fullcoupling.webp",
    "218": "/hexnipple.webp",
    "219": "/closenipple.webp",
    "220": "/barrelnipple.webp",
    "222": "/swagnippleconcentric.webp",
    "223": "/swagnippleeccentric.webp",
    "224": "/union.webp",
    "225": "/hexunion.webp",
    "226": "/reducingunion.webp",
    "227": "/pipecap.webp",
    "228": "/hexclub.webp",
    "229": "/squareheadplig.webp",
    "230": "/roundheadplug.webp",
    "231": "/bull plug.webp",
    "232": "/bushing.webp",
    "233": "/hexbushing.webp",
    "234": "/reducingbushing.webp",
    "235": "/adapter.webp",
    "236": "/male adapter.webp",
    "237": "/femaleadpater.webp",
    "238": "/boss.webp",
    "239": "/socketweldboss.webp",
    "240": "/threadedboss.webp",
    "241": "/bleedring.webp",
    "242": "/spacerring.webp",
    "243": "/lateraltee.webp",
    "244": "/branchoutlet.webp",
    "245": "/weldolet.webp"
}

updated_count = 0
for p in products:
    sno = str(p.get("S.No"))
    if sno in mapping_by_sno:
        old_img = p.get("Image")
        new_img = mapping_by_sno[sno]
        p["Image"] = new_img
        print(f"Updated S.No {sno} ({p.get('Product Name')}): {old_img} -> {new_img}")
        updated_count += 1

print(f"\nTotal products updated: {updated_count}")

# Save updated products.json
with open(products_json_path, "w", encoding="utf-8") as f:
    json.dump(products, f, indent=2, ensure_ascii=False)

print("Saved updated products.json successfully!")
