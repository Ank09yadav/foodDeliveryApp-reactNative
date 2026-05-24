# Assignment : chaiCode mobile Dev cohort
## video DEMO  👇
[youtubeShort](https://www.youtube.com/shorts/fk7S3XHeztM) 
Welcome to the **Food Delivery App** — a premium, high-fidelity React Native application built with **Expo**, **React Navigation (v7)**, and **TypeScript**. 

Designed to deliver a state-of-the-art mobile experience, this app features smooth navigation flows, a warm and modern visual design language (utilizing vibrant coral-orange gradients and clean drop-shadow micro-cards), dynamic order management using global Context APIs, and solid cross-platform safety.

---

## 📱 Project Overview & Analysis

This application represents a comprehensive, end-to-end design and functional system simulating a modern food delivery marketplace. Key architecture pillars include:

### 1. **Robust Navigation Architecture**
The application implements a secure, state-aware navigation hierarchy using **React Navigation**:
*   **Root Stack (`RootNavigator.tsx`)**: Controls access based on the user's login state (`isLoggedIn`). Unauthorized users are funneled through `Onboarding` -> `Auth` (Sign In / Sign Up) -> `ForgotPassword` flow. Authorized users are directed to the main app dashboard.
*   **Drawer Navigation (`drawerNavigation.tsx`)**: Integrates custom drawer menus for profile info, dynamic past orders tracker, system settings, and secure support links.
*   **Bottom Tab Navigator (`HomePageNavigation.tsx`)**: Governs primary screen routing under the home tab dashboard: Home, Search, Orders, and Profile.

### 2. **State Management & Dynamic Ordering**
Rather than relying on stale static data assets, the app features a reactive state synchronization pipeline:
*   `AuthProvider`: Controls session logins, credential handling, and profile information globally.
*   `OrderProvider`: Directs active and past order arrays. Any order placed in the **Order Customize Detail Screen** immediately fires a dispatch event that updates the past orders array, which instantly re-renders inside the **Orders Tracker** without static reloads.

### 3. **Premium Visual Styling System**
- Maximum control over visual layout using **Vanilla React Native Styles**.
- Curated color palettes with warm, high-end accents (`#FF4500` and `#FF5E36`) to emulate leading apps like Zomato/Swiggy.
- Beautiful custom-built quantity selectors, transparent headers, rating bubbles, and dynamic receipt cards.
- Integrated, cross-platform friendly vector icons from `@expo/vector-icons` (`MaterialCommunityIcons`).

---

## 📂 File Directory Structure

Below is the clean and organized directory map detailing the file structure of this project:

```text
fooddeliveryapp-reactnative/
├── App.tsx                   # Main app entry point wrapping global contexts and navigators
├── app.json                  # Expo configurations, metadata, and splash definitions
├── tsconfig.json             # TypeScript rules and compilation parameters
├── package.json              # Dependency manifests, packages, and startup scripts
├── assets/                   # Static app assets, splash screens, and icons
└── src/                      # Main Source Code Folder
    ├── components/           # Custom, reusable core UI layout widgets
    ├── constants/            # Hardcoded mocks, profile models, and listings
    │   └── contants.ts       # Central source of initial listings, user models, and menus
    ├── provider/             # React Context Providers for global state
    │   ├── authProvider.tsx  # Manage login sessions and auth actions
    │   └── orderProvider.tsx # Manage active orders list and custom additions
    ├── navigation/           # Routing navigation systems
    │   ├── RootNavigator.tsx  # Root stack switcher (Auth vs Home)
    │   ├── drawerNavigation.tsx # Customized drawer panels with support & logout
    │   └── HomePageNavigation.tsx # Bottom tab bar layouts (Home, Search, Orders, Profile)
    └── screens/              # Core screen modules
        ├── OnboardingScreen.tsx # Beautiful greeting pages with vector assets
        ├── AuthScreen.tsx       # Secure credentials entry gate
        ├── ForgotPasswordScreen.tsx # Credentials reset console
        ├── HomeScreen.tsx       # Dashboard with banner ads, categories, trending dishes, & restaurants
        ├── SearchScreen.tsx     # Multi-keyword food directory and selection page
        ├── Order.tsx            # Customize quantities, live subtotal receipt, & place order screen
        ├── OrdersScreen.tsx     # Dynamic past deliveries list & active tracker progress bar
        └── ProfileScreen.tsx    # User coordinate details & options screen
```

---

## ⚙️ How to Setup & Run the Project

Follow these simple steps to download, install, and execute the mobile application locally on your machine or physical mobile device:

### 1. Pre-requisites
- Ensure you have **Node.js** installed (v18.0.0 or higher is highly recommended).
- Install **Git** on your machine.
- Install the **Expo Go** application on your physical iOS or Android device from the App Store or Google Play Store, OR set up standard simulators/emulators (Android Studio for Android, Xcode for macOS/iOS).

### 2. Installation Steps
Clone the project repository and install the NPM packages:

```bash
# Clone the repository
git clone https://github.com/Ank09yadav/foodDeliveryApp-reactNative.git

# Navigate into the project folder
cd fooddeliveryapp-reactnative

# Install required dependencies
npm install
```

### 3. Run the Development Server
Execute the start script to fire up the local bundler:

```bash
# Start the Expo developer bundler
npm start
```

### 4. Testing Platforms
Once the Expo console starts up in your terminal, you can direct it using the keyboard shortcuts:
- **Scan QR Code**: Open the camera (iOS) or the **Expo Go** app (Android) and scan the QR code printed in the terminal to load the app directly on your physical phone!
- **Run on Android Emulator**: Press `a` in the terminal prompt.
- **Run on iOS Simulator**: Press `i` in the terminal prompt.
- **Run on Web Browser**: Press `w` in the terminal prompt.

---
### ScrenShots 
<img width="720" height="1600" alt="ss-1 (2)" src="https://github.com/user-attachments/assets/844cee89-ca9d-4fb6-9d46-e8bf9490d569" />
<img width="720" height="1600" alt="ss-1 (3)" src="https://github.com/user-attachments/assets/158f0f34-00e6-4fd6-9e46-22e7d71400ae" />
<img width="720" height="1600" alt="ss-1 (4)" src="https://github.com/user-attachments/assets/83a2719c-7545-40ea-85da-b0ff0497584c" />
<img width="720" height="1600" alt="ss-1 (5)" src="https://github.com/user-attachments/assets/0a31d30f-335d-41e6-8c4b-8b7102008a35" />
<img width="720" height="1600" alt="ss-1 (6)" src="https://github.com/user-attachments/assets/5dd922b8-9222-44be-827b-70ed61fc0f90" />
<img width="720" height="1600" alt="ss-1 (7)" src="https://github.com/user-attachments/assets/7c1c9de3-3adf-4628-8046-235164cd9998" />
<img width="720" height="1600" alt="ss-1 (8)" src="https://github.com/user-attachments/assets/a5da090b-ba96-4317-b380-82a8b8295f28" />
<img width="720" height="1600" alt="ss-1 (9)" src="https://github.com/user-attachments/assets/f8f8b39e-12ba-446a-bf34-be283e1c97d0" />
<img width="720" height="1600" alt="ss-1 (10)" src="https://github.com/user-attachments/assets/247282ac-8aaf-4a76-89a4-90ceb66c4358" />
<img width="720" height="1600" alt="ss-1 (11)" src="https://github.com/user-attachments/assets/08343a27-5f81-4385-9bc3-6e7368c7b43e" />
<img width="720" height="1600" alt="ss-1 (1)" src="https://github.com/user-attachments/assets/878882b9-5cec-44a3-8f85-5e0d62fbb431" />


## 👤 Contacts & Social Channels

Feel free to connect and follow my work through any of the social channels below:

*   **📺 YouTube Channel**: [@ank09yadav](https://www.youtube.com/@ank09yadav)
*   **💼 LinkedIn**: [Ankur Yadav on LinkedIn](https://www.linkedin.com/in/ank09yadav)
*   **🐦 X (Twitter)**: [@ank09yadav](https://x.com/ank09yadav)
*   **✍️ Hashnode**: [@ank09yadav](https://hashnode.com/@ank09yadav)
*   **💻 GitHub**: [Ank09yadav on GitHub](https://github.com/Ank09yadav)
*   **📸 Instagram**: [@ank09yadav](https://instagram.com/ank09yadav)
