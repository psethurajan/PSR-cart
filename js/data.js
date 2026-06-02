const products = [
  {
    id: 1,
    title: "Nike Air Max 270",
    category: "Sneakers",
    price: 7999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    description: "Lightweight and stylish sneaker with air cushion sole. Perfect for everyday wear and casual outings.",
    specs: ["Size: UK 6-12", "Material: Mesh + Rubber", "Color: Black/White", "Weight: 310g"]
  },
  {
    id: 2,
    title: "Adidas Ultraboost 22",
    category: "Sneakers",
    price: 9499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    description: "High-performance running shoe with Boost midsole technology. Responsive and comfortable.",
    specs: ["Size: UK 6-12", "Material: Primeknit", "Color: White/Blue", "Weight: 280g"]
  },
  {
    id: 7,
    title: "Puma RS-X Bold",
    category: "Sneakers",
    price: 6499,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    description: "Chunky retro-inspired sneaker with bold colorways. OG Running System sole.",
    specs: ["Size: UK 6-12", "Material: Leather + Mesh", "Color: Multi", "Weight: 350g"]
  },
  {
    id: 12,
    title: "Skechers Go Walk 6",
    category: "Sneakers",
    price: 4299,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
    description: "Ultra-comfortable walking shoe with responsive ULTRA GO cushioning.",
    specs: ["Size: UK 6-12", "Material: Knit", "Sole: ULTRA GO", "Weight: 230g"]
  },
  {
    id: 13,
    title: "Reebok Classic Leather",
    category: "Sneakers",
    price: 5499,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop",
    description: "Iconic leather sneaker with soft garment leather upper. A timeless classic design.",
    specs: ["Size: UK 6-12", "Material: Leather", "Color: White", "Weight: 290g"]
  },
  {
    id: 14,
    title: "iPhone 15 Pro",
    category: "Mobiles",
    price: 134900,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    description: "Apple iPhone 15 Pro with A17 Pro chip, titanium design, and 48MP camera system.",
    specs: ["Display: 6.1 OLED", "Chip: A17 Pro", "Camera: 48MP", "Storage: 128GB-1TB"]
  },
  {
    id: 15,
    title: "Samsung Galaxy S24",
    category: "Mobiles",
    price: 79999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
    description: "Samsung Galaxy S24 with Galaxy AI, 50MP camera, and Snapdragon 8 Gen 3.",
    specs: ["Display: 6.2 Dynamic AMOLED", "Chip: Snapdragon 8 Gen 3", "Camera: 50MP", "Battery: 4000mAh"]
  },
  {
    id: 16,
    title: "OnePlus 12",
    category: "Mobiles",
    price: 64999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop",
    description: "OnePlus 12 with Hasselblad camera, 100W SUPERVOOC charging and 5400mAh battery.",
    specs: ["Display: 6.82 AMOLED", "Chip: Snapdragon 8 Gen 3", "Camera: 50MP", "Charging: 100W"]
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    category: "Audio",
    price: 24999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    description: "Industry-leading noise cancelling headphones. 30 hours battery life with crystal clear sound.",
    specs: ["Battery: 30 hrs", "Driver: 30mm", "Connectivity: Bluetooth 5.2", "Weight: 250g"]
  },
  {
    id: 8,
    title: "JBL Flip 6",
    category: "Audio",
    price: 9999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    description: "Portable waterproof Bluetooth speaker. Powerful bass and 12 hours playtime.",
    specs: ["Battery: 12 hrs", "Waterproof: IP67", "Power: 30W", "Weight: 550g"]
  },
  {
    id: 11,
    title: "Boat Rockerz 550",
    category: "Audio",
    price: 2499,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "Over-ear wireless headphones with 20 hours battery and deep bass. Budget-friendly.",
    specs: ["Battery: 20 hrs", "Driver: 40mm", "Connectivity: BT 5.0", "Mic: Built-in"]
  },
  {
    title: "Apple AirPods Pro 2",
    category: "Audio",
    price: 24900,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop",
    description: "Apple AirPods Pro with Active Noise Cancellation, Transparency mode, and H2 chip.",
    specs: ["ANC: Active", "Battery: 6 hrs + 24 case", "Chip: H2", "Water: IPX4"]
  },
  {
    id: 4,
    title: "Razer BlackShark V2",
    category: "Gaming",
    price: 8999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=400&h=400&fit=crop",
    description: "Pro gaming headset with THX Spatial Audio. Detachable mic for competitive gaming.",
    specs: ["Driver: 50mm", "Frequency: 12Hz-28kHz", "Mic: Detachable", "Cable: 2.5m"]
  },
  {
    id: 5,
    title: "Logitech G Pro X Mouse",
    category: "Gaming",
    price: 11999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    description: "Professional gaming mouse used by esports athletes. HERO sensor with 25K DPI.",
    specs: ["DPI: 100-25600", "Buttons: 8", "Weight: 61g", "Cable: Braided"]
  },
  {
    id: 9,
    title: "Mechanical Keyboard RGB",
    category: "Gaming",
    price: 4999,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    description: "TKL mechanical keyboard with Cherry MX switches and full RGB backlighting.",
    specs: ["Switch: Cherry MX Red", "Layout: TKL", "Backlight: RGB", "Cable: Detachable"]
  },
  {
    id: 6,
    title: "Apple Watch Series 9",
    category: "Gadgets",
    price: 41900,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    description: "Advanced smartwatch with health monitoring, GPS, and Always-On Retina display.",
    specs: ["Display: 45mm OLED", "Battery: 18 hrs", "Water: 50m", "Chip: S9"]
  },
  {
    title: "Noise ColorFit Pro 4",
    category: "Gadgets",
    price: 3499,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
    description: "Feature-packed smartwatch with SpO2 monitoring and 100+ sports modes.",
    specs: ["Display: 1.78 AMOLED", "Battery: 7 days", "Sensors: SpO2, HR", "IP: IP68"]
  },
  {
    id: 18,
    title: "Nike Dri-FIT T-Shirt",
    category: "Fashion",
    price: 1799,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "Nike Dri-FIT technology moves sweat away from your body. Lightweight and breathable.",
    specs: ["Material: 100% Polyester", "Fit: Standard", "Care: Machine Wash", "Sizes: S-XXL"]
  },
  {
    id: 19,
    title: "Adidas Track Jacket",
    category: "Fashion",
    price: 3999,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
    description: "Classic Adidas track jacket with 3-stripe design. Comfortable tricot fabric.",
    specs: ["Material: Tricot", "Fit: Regular", "Closure: Full Zip", "Sizes: S-XL"]
  },
  {
    id: 20,
    title: "Puma Cargo Joggers",
    category: "Fashion",
    price: 2499,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
    description: "Relaxed cargo joggers with multiple pockets and elastic cuffs. Streetwear ready.",
    specs: ["Material: Cotton Blend", "Fit: Relaxed", "Pockets: 4", "Sizes: S-XXL"]
  }
];
