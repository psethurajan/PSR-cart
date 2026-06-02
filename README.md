Premium E-Commerce Website

A modern e-commerce frontend project built with HTML, CSS, Bootstrap, and JavaScript.

Folder Structure

PSRCart/


│
├── index.html          ← Home page
├── products.html       ← Products page with filters
├── cart.html           ← Shopping cart page
├── wishlist.html       ← Wishlist page
├── login.html          ← Login form page
│
├── css/
│   ├── style.css       ← Common styles (navbar, cards, buttons)
│   ├── home.css        ← Styles only for home page
│   ├── products.css    ← Styles only for products page
│   ├── cart.css        ← Styles for cart and login page
│   └── responsive.css  ← Mobile and tablet responsive styles
│
└── js/
    ├── data.js         ← All product data (like a mini database)
    ├── cart.js         ← Cart logic (add, remove, update, localStorage)
    ├── wishlist.js     ← Wishlist logic (toggle, localStorage)
    ├── app.js          ← Home page logic (featured products, countdown)
    ├── products.js     ← Products page (filter, search, sort, modal)
    ├── cartpage.js     ← Cart page rendering and total calculation
    ├── wishlistpage.js ← Wishlist page rendering
    └── login.js        ← Login form validation

 Pages Overview

 1. Home Page (`index.html`)
- Hero section with heading, description, and CTA buttons
- Featured products (first 6 from data.js)
- Category showcase cards
- Limited drop banner with live countdown timer
- Testimonials section
- Newsletter section
- Footer with links and social icons

 2. Products Page (`products.html`)
- Search bar — live filtering as you type
- Category filter buttons (All, Sneakers, Gaming, Audio, Gadgets)
- Sort dropdown (price low-high, high-low, top rated)
- Product grid — 4 columns on desktop, 2 on tablet, 1 on mobile
- Click any product → opens a modal with full details
- Add to cart and wishlist on every product card

 3. Cart Page (`cart.html`)
- All cart items fetched from localStorage
- Increase / decrease quantity buttons
- Remove items from cart
- Auto-calculated subtotal, shipping, and total
- Empty state shown if cart is empty

 4. Wishlist Page (`wishlist.html`)
- Shows all saved wishlist products from localStorage
- Remove from wishlist button
- Add to cart directly from wishlist
- Empty state if wishlist is empty

 5. Login Page (`login.html`)
- Email and password input
- Show/hide password toggle
- Form validation (empty fields, invalid email, short password)
- Success message on valid submit

 JavaScript Concepts Used

| Concept | Where it's used |

| Arrays | Product data, cart array, wishlist array |
| Objects | Each product is an object with id, title, price etc |
| Loops (forEach) | Rendering product cards dynamically |
| Functions | addToCart(), removeFromCart(), renderProducts() etc |
| DOM Manipulation | Updating HTML using innerHTML, textContent |
| Event Handling | onclick, oninput, onchange on buttons and inputs |
| Filtering (.filter) | Category filter and search |
| Sorting (.sort) | Price and rating sort |
| localStorage | Cart and wishlist persist after page refresh |
| Conditional Logic | If product exists in cart → increase qty, else add new |
| setInterval | Countdown timer updates every 1 second |
| String methods | .includes() for search, .toLowerCase() for case-insensitive |
| Spread operator | {...product, quantity: 1} when adding to cart |
| Array.find | Finding specific product by id |
| Array.some | Checking if product is in wishlist |
| Array.reduce | Calculating total price in cart |

 How the Project Was Built — Step by Step

Phase 1 — Project Setup
- Created the folder structure
- Set up all HTML files with Bootstrap and font links
- Connected CSS and JS files properly

Phase 2 — Product Data
- Created `data.js` with an array of 12 product objects
- Each object has: id, title, category, price, rating, image, description, specs

Phase 3 — Home Page
- Built the hero section with text and image
- Used `app.js` to loop through products and display 6 featured ones
- Added category cards, limited banner, testimonials, newsletter, footer

Phase 4 — Products Page
- Built filter bar with search input, category buttons, sort dropdown
- `products.js` filters and re-renders products on every user action
- Clicking a product opens a Bootstrap modal with full details

Phase 5 — Cart System
- `cart.js` handles add, remove, increase/decrease quantity
- All cart data saved to localStorage as a JSON string
- `cartpage.js` reads localStorage and renders cart items
- Total calculated using `.reduce()` method

 Phase 6 — Wishlist System
- `wishlist.js` toggles product in/out of wishlist
- Heart icon turns red when added, grey when removed
- `wishlistpage.js` renders all saved wishlist products

 Phase 7 — Login Page
- Built login form with glassmorphism-style card
- `login.js` validates email and password before allowing login
- Show/hide password toggle using DOM type change

 Phase 8 — Responsive Design
- `responsive.css` has media queries for 992px, 768px, 480px
- Hero stacks vertically on mobile
- Product grid goes from 4 → 2 → 1 columns
- Filter bar stacks on small screens

 Tech Stack

- HTML — Page structure
- CSS — Styling and animations
- Bootstrap — Grid, navbar, modal, responsive layout
- Bootstrap Icons — All icons used
- JavaScript — All logic (no jQuery, no React)
- Google Fonts (Outfit) — Typography
- localStorage — Data persistence

Future Improvements

- Add backend with Node.js and MongoDB for real login
- Add payment gateway integration
- Add product image gallery in modal
- Add dark/light mode toggle
- Add recently viewed products section
