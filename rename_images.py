import os

base_dir = "public/assets/projects-screenshots"

for root, dirs, files in os.walk(base_dir):
    counter = 1
    # Sort files to rename them consistently
    files.sort()
    for file in files:
        if file.startswith("."):
            continue
        
        # Don't rename old projects or already well-named files unless they have spaces
        if " " in file or "img" in file.lower() or "twenty-four" in file.lower() or len(file) > 10:
            ext = file.split(".")[-1]
            
            # Find next available number
            while os.path.exists(os.path.join(root, f"{counter}.{ext}")):
                counter += 1
                
            old_path = os.path.join(root, file)
            new_path = os.path.join(root, f"{counter}.{ext}")
            
            os.rename(old_path, new_path)
            print(f"Renamed: {old_path} -> {new_path}")
            counter += 1
