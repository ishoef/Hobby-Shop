# 🎨 HobbyHub - Local Hobby Group Organizer

![HobbyHub Banner](https://i.ibb.co/RT550GjZ/Chat-GPT-Image-May-23-2025-08-21-41-AM.png)

## 🛠 Installed Packages

| Package | Version |
| ------- | ------- |
| TailwindCSS | `@tailwindcss/vite: ^4.1.7` |
| React | `react: ^19.1.0` |
| React DOM | `react-dom: ^19.1.0` |
| React Icons | `react-icons: ^5.5.0` |
| DaisyUI | `tailwindcss: ^4.1.7` |
| React Router | `react-router: ^7.6.0` |
| Firebase | `firebase: ^11.8.1` |
| SweetAlert2 | `sweetalert2: ^11.21.2` |

---

## 🌟 Design Principles

- **Modern & Clean UI**: Minimal clutter, effective white space.  
- **Consistent Design System**: Unified colors, fonts, spacing.  
- **Mobile-First**: Start with mobile layout, then scale up.  
- **Unique Look**: Avoid copying from tutorials/projects.  
- **Dark/Light Theme Toggle**: Switchable color modes.

---

## 🧰 Recommended Stack

- **Frontend**: React + Tailwind CSS  
- **Routing**: React Router DOM  
- **UI Components**: DaisyUI / Shadcn / Chakra UI (optional)  
- **Icons**: React Icons or Lucide Icons  

---

## 🧭 Page-by-Page UI Details

### 1️⃣ Navbar
- **Sticky top bar** with:
  - Left: Logo ([Link](https://i.ibb.co/QxPKXTh/logo.png)) & App Name  
  - Right: Navigation links, Login/Register or Avatar + Dropdown  
- **Mobile**: Hamburger menu

### 2️⃣ Home Page
- **Hero/Banner Slider**: 3 slides with CTA  
  - Banner Images:  
    - [Slide 1](https://i.ibb.co/RT550GjZ/Chat-GPT-Image-May-23-2025-08-21-41-AM.png)  
    - [Slide 2](https://i.ibb.co/Fkymc7mH/Chat-GPT-Image-May-26-2025-12-28-17-PM.png)
- **Featured Groups**: 6 highlighted groups with cards  
- **How It Works**: 3 steps with icons  
- **Testimonials/Benefits**: Static content or reviews

### 3️⃣ Login Page
- Centered card with:
  - Email, Password  
  - Login button  
  - Google/GitHub OAuth  
  - Link to Register  

### 4️⃣ Register Page
- Fields: Name, Email, Photo URL, Password (with validation)  
- Submit button + login link  

### 5️⃣ Create Group Page (`/createGroup`)
- Form fields:
  - Name, Category, Description, Location, Max Members, Start Date, Image URL  
  - Readonly: User Name, Email  
  - "Create Group" button  

### 6️⃣ Group Details Page (`/group/:id`)
- Banner image + Info card  
- Join Group button (disabled if expired)

### 7️⃣ All Groups Page (`/groups`)
- Cards or table view with:
  - Image, Name, Category, Start Date  
  - “See More” → `/group/:id`

### 8️⃣ My Groups Page (`/myGroups`)
- Table format with:
  - Name, Category, Start Date  
  - Update/Delete buttons (confirmation modal)

### 9️⃣ Update Group Page (`/updateGroup/:id`)
- Full form or modal for inline editing  
- Toast notification on success

### 🔟 404 Page
- Friendly “Page Not Found 😢”  
- Button to return Home

---

## 🔄 Loading Spinner
- Global animated loader (e.g., Lottie) while fetching data

## 🌙 Dark/Light Theme Toggle
- Switch in Navbar or Footer  
- Saves preference in `localStorage` or context

---

## 📦 Bonus Libraries

| Library | Usage Example |
| ------- | ------------- |
| `Lottie React` | Animated illustrations (Hero, Empty State, Success) |
| `React Simple Typewriter` | Typewriter effect in Hero Banner |
| `React Awesome Reveal` | Fade/slide animations for sections/cards |
| `React Tooltip` | Tooltip for Avatar, Form labels |

---

## 📱 Responsive Design
- Tailwind responsive classes: `sm:`, `md:`, `lg:`, `xl:`  
- Vertical stacking on mobile  
- Hamburger menu for navigation  

---

### 🖼 Images

- **Banner 1**: ![Banner 1](https://i.ibb.co/RT550GjZ/Chat-GPT-Image-May-23-2025-08-21-41-AM.png)  
- **Banner 2**: ![Banner 2](https://i.ibb.co/Fkymc7mH/Chat-GPT-Image-May-26-2025-12-28-17-PM.png)  
- **Logo**: ![Logo](https://i.ibb.co/QxPKXTh/logo.png)
