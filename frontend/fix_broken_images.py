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
                p["Image"] = "/90elbow.webp"
            elif "45° elbow" in pname or "45 elbow" in pname:
                p["Image"] = "/45elbow.webp"
            elif "equal tee" in pname:
                p["Image"] = "/equaltee.webp"
            elif "reducing tee" in pname:
                p["Image"] = "/reducingtee.webp"
            elif "lateral tee" in pname:
                p["Image"] = "/lateraltee.webp"
            elif "cross" in pname:
                p["Image"] = "/cross.webp"
            elif "barrel nipple" in pname:
                p["Image"] = "/barrelnipple.webp"
            elif "hex nipple" in pname:
                p["Image"] = "/hexnipple.webp"
            elif "swage nipple" in pname:
                p["Image"] = "/swagnippleconcentric.webp"
            elif "union" in pname:
                p["Image"] = "/union.webp"
            elif "half coupling" in pname:
                p["Image"] = "/halfcoupling.webp"
            elif "full coupling" in pname:
                p["Image"] = "/fullcoupling.webp"
            elif "reducing coupling" in pname:
                p["Image"] = "/reducingcoupling.webp"
            elif "coupling" in pname:
                p["Image"] = "/coupling.webp"
            elif "female adapter" in pname:
                p["Image"] = "/femaleadpater.webp"
            elif "male adapter" in pname:
                p["Image"] = "/male adapter.webp"
            elif "adapter" in pname:
                p["Image"] = "/adapter.webp"
            elif "blind cap" in pname or "end cap" in pname:
                p["Image"] = "/pipecap.webp"
            elif "hex plug" in pname:
                p["Image"] = "/hexclub.webp"
            elif "square plug" in pname:
                p["Image"] = "/squareheadplig.webp"
            elif "hex bushing" in pname:
                p["Image"] = "/hexbushing.webp"
            elif "bushing" in pname:
                p["Image"] = "/bushing.webp"
            elif "weldolet" in pname:
                p["Image"] = "/weldolet.webp"
            elif "sockolet" in pname or "threadolet" in pname or "elbolet" in pname or "olet" in pname:
                p["Image"] = "/branchoutlet.webp"
            elif "electropolish" in pname:
                p["Image"] = "/electropolish_pipes.webp"
            elif "pipe" in pname or "seamless" in pname:
                p["Image"] = "/flanges_pipes.webp"
            else:
                p["Image"] = "/Stainless Steel Pipe Fittings.webp"

with open(products_json_path, "w", encoding="utf-8") as f:
    json.dump(products, f, indent=2, ensure_ascii=False)

print("Finished fixing broken image paths!")
