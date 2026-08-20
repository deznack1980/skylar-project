SKYLAR'S HOPE FOR CHANGE — Image Asset Guide
=============================================
This folder is where all photos and images should be stored.

CRITICAL PHOTOS NEEDED
-----------------------

1. hero-background.jpg
   Usage: Homepage full-width hero background
   Location in code: index.html — .hero-bg element (see HTML comment)
   Recommended: Phoenix landscape at sunrise/dusk, a mobile outreach van,
                community volunteers in action, or a meaningful symbol of hope.
   Size: Minimum 1920x1080px, compressed for web (under 500KB ideally)

2. skylar-portrait.jpg (OR skylar-photo.jpg)
   Usage: About page and homepage "Story" section
   Location in code: about.html and index.html — .photo-placeholder elements
   IMPORTANT: Only add with explicit family permission.
   Recommended: A warm, personal photo that represents who Skylar was.
   Size: Minimum 800x1000px (portrait ratio preferred), under 300KB

3. john-archer.jpg
   Usage: About page — Founder section
   Location in code: about.html — placeholder box in the founder section
   Recommended: A candid or portrait photo that conveys warmth and authenticity.
   Size: Minimum 600x600px, under 200KB

OPTIONAL BUT IMPACTFUL
------------------------

4. outreach-van.jpg
   Mobile dental/medical outreach vehicle
   Can be used on Programs page or hero backgrounds

5. outreach-team.jpg
   Volunteers during an outreach run
   Good for Get Involved and Programs pages

6. community-outreach.jpg
   General community support imagery
   Good for homepage and social sharing (OG image)

HOW TO ADD A REAL PHOTO
------------------------
Each placeholder in the HTML is clearly labeled with a comment like:
  <!-- PHOTO PLACEHOLDER: ... -->

Replace the entire <div class="photo-placeholder"> block with:
  <img src="assets/images/YOUR-FILENAME.jpg"
       alt="Descriptive alt text for accessibility"
       style="border-radius: var(--radius-lg); width: 100%; object-fit: cover;" />

For the hero background (index.html), find the .hero-bg class in style.css
and add:
  background-image: url('assets/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
Remove the gradient-only background declarations above it.

ACCESSIBILITY NOTE
------------------
Always write meaningful alt text for every image:
  - Good: alt="John Archer, founder of Skylar's Hope For Change"
  - Bad:  alt="photo" or alt="image"

IMAGE OPTIMIZATION
------------------
Before uploading, compress images at:
  - squoosh.app (free, excellent quality)
  - tinypng.com (fast and easy)
Target: Under 300KB per photo for fast page loads.
