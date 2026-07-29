import json
import os

products_json_path = os.path.join(os.path.dirname(__file__), "src", "data", "products.json")

with open(products_json_path, "r", encoding="utf-8") as f:
    products = json.load(f)

# Mapping of product name / S.No / criteria to the exact 39 new image filenames
mapping_by_sno = {
    "193": "/socketweldfittings.png",
    "194": "/threadedforgedfittingd.png",
    "207": "/90elbow.png",
    "208": "/45elbow.png",
    "209": "/streetelbow.png",
    "211": "/equaltee.png",
    "212": "/reducingtee.png",
    "213": "/cross.png",
    "214": "/coupling.png",
    "215": "/halfcoupling.png",
    "216": "/reducingcoupling.png",
    "217": "/fullcoupling.png",
    "218": "/hexnipple.png",
    "219": "/closenipple.png",
    "220": "/barrelnipple.png",
    "222": "/swagnippleconcentric.png",
    "223": "/swagnippleeccentric.png",
    "224": "/union.png",
    "225": "/hexunion.png",
    "226": "/reducingunion.png",
    "227": "/pipecap.png",
    "228": "/hexclub.png",
    "229": "/squareheadplig.png",
    "230": "/roundheadplug.png",
    "231": "/bull plug.png",
    "232": "/bushing.png",
    "233": "/hexbushing.png",
    "234": "/reducingbushing.png",
    "235": "/adapter.png",
    "236": "/male adapter.png",
    "237": "/femaleadpater.png",
    "238": "/boss.png",
    "239": "/socketweldboss.png",
    "240": "/threadedboss.png",
    "241": "/bleedring.png",
    "242": "/spacerring.png",
    "243": "/lateraltee.png",
    "244": "/branchoutlet.png",
    "245": "/weldolet.png"
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
