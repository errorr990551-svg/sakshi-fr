import json
import os

public_dir = os.path.join(os.path.dirname(__file__), "public")
products_json_path = os.path.join(os.path.dirname(__file__), "src", "data", "products.json")

with open(products_json_path, "r", encoding="utf-8") as f:
    products = json.load(f)

# Existing files in public
existing_files = set(os.listdir(public_dir))

# Map electropolished items to png fitting images if matched, otherwise fallback to existing
for p in products:
    img = p.get("Image")
    if img:
        filename = img.lstrip("/")
        if filename not in existing_files:
            pname = p.get("Product Name", "").lower()
            
            # Try to match new png images first
            if "90° elbow" in pname or "90 elbow" in pname:
                p["Image"] = "/90elbow.png"
            elif "45° elbow" in pname or "45 elbow" in pname:
                p["Image"] = "/45elbow.png"
            elif "equal tee" in pname:
                p["Image"] = "/equaltee.png"
            elif "reducing tee" in pname:
                p["Image"] = "/reducingtee.png"
            elif "lateral tee" in pname:
                p["Image"] = "/lateraltee.png"
            elif "cross" in pname:
                p["Image"] = "/cross.png"
            elif "barrel nipple" in pname:
                p["Image"] = "/barrelnipple.png"
            elif "hex nipple" in pname:
                p["Image"] = "/hexnipple.png"
            elif "swage nipple" in pname:
                p["Image"] = "/swagnippleconcentric.png"
            elif "union" in pname:
                p["Image"] = "/union.png"
            elif "half coupling" in pname:
                p["Image"] = "/halfcoupling.png"
            elif "full coupling" in pname:
                p["Image"] = "/fullcoupling.png"
            elif "reducing coupling" in pname:
                p["Image"] = "/reducingcoupling.png"
            elif "coupling" in pname:
                p["Image"] = "/coupling.png"
            elif "female adapter" in pname:
                p["Image"] = "/femaleadpater.png"
            elif "male adapter" in pname:
                p["Image"] = "/male adapter.png"
            elif "adapter" in pname:
                p["Image"] = "/adapter.png"
            elif "blind cap" in pname or "end cap" in pname:
                p["Image"] = "/pipecap.png"
            elif "hex plug" in pname:
                p["Image"] = "/hexclub.png"
            elif "square plug" in pname:
                p["Image"] = "/squareheadplig.png"
            elif "hex bushing" in pname:
                p["Image"] = "/hexbushing.png"
            elif "bushing" in pname:
                p["Image"] = "/bushing.png"
            elif "weldolet" in pname:
                p["Image"] = "/weldolet.png"
            elif "sockolet" in pname or "threadolet" in pname or "elbolet" in pname or "olet" in pname:
                p["Image"] = "/branchoutlet.png"
            elif "electropolish" in pname:
                p["Image"] = "/electropolish_pipes.webp"
            elif "pipe" in pname or "seamless" in pname:
                p["Image"] = "/flanges_pipes.webp"
            else:
                p["Image"] = "/Stainless Steel Pipe Fittings.webp"

with open(products_json_path, "w", encoding="utf-8") as f:
    json.dump(products, f, indent=2, ensure_ascii=False)

print("Finished fixing broken image paths!")
