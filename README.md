# Vartig Website

Vue 3 + Vite + Tailwind CSS + Vue Router multi-page business website for Vartig metal manufacturing company.

## Project Structure

```
vartig/
├── index.html                  # App entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.js                 # App bootstrap
    ├── App.vue                 # Root layout (Navbar + RouterView + Footer)
    ├── assets/
    │   ├── main.css            # Global styles + Tailwind
    │   ├── machines/           # ← Put machine photos here
    │   └── projects/           # ← Put project photos here
    ├── router/
    │   └── index.js            # Vue Router (all 5 routes)
    ├── components/
    │   ├── GearIcon.vue        # Reusable gear SVG icon
    │   ├── PageHeader.vue      # Reusable page header block
    │   ├── TheNavbar.vue       # Sticky top navigation
    │   └── TheFooter.vue       # Site footer
    └── pages/
        ├── Home.vue            # / 
        ├── Services.vue        # /services
        ├── MachinesPark.vue    # /machines-park
        ├── About.vue           # /about
        └── Contact.vue         # /contact
```

## Routes

| Page          | URL              |
|---------------|------------------|
| Home          | `/`              |
| Our Services  | `/services`      |
| Machines Park | `/machines-park` |
| About         | `/about`         |
| Contact       | `/contact`       |

## Setup & Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Adding Photos

### Machine photos (Machines Park page)
1. Place images in `src/assets/machines/`
2. Open `src/pages/MachinesPark.vue`
3. At the top of the `<script setup>` block, import your images:
   ```js
   import lathe from '@/assets/machines/lathe.jpg'
   import milling from '@/assets/machines/milling.jpg'
   ```
4. Set the `image` field in the `machines` array:
   ```js
   { name: 'CNC Lathe', image: lathe, ... }
   ```

### Project photos (About page)
1. Place images in `src/assets/projects/`
2. Open `src/pages/About.vue`
3. Import and fill the `projectPhotos` array:
   ```js
   import photo1 from '@/assets/projects/project1.jpg'
   const projectPhotos = [photo1, ...]
   ```

## Contact Form

The form currently simulates a submission (1.2s delay → success state).  
To wire it to a real backend, edit the `submit()` function in `src/pages/Contact.vue`:

**Option A – EmailJS (no backend needed):**
```js
import emailjs from '@emailjs/browser'
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
```

**Option B – Formspree:**
```js
fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form)
})
```

**Option C – Your own API endpoint:**
```js
fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
```

## Customisation

- **Colors** → `tailwind.config.js` → `theme.extend.colors`
- **Fonts** → `tailwind.config.js` + `index.html` Google Fonts link
- **Company info** (address, phone, email) → `TheFooter.vue` and `Contact.vue`
- **Working hours** → `Contact.vue` → `workingHours` array
- **Services list** → `Services.vue` → `services` array
- **Machine specs** → `MachinesPark.vue` → `machines` array
