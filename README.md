# 🍽️ EoEats AI Frontend  

The **EoEats AI Frontend** is a **Vue.js 3** application that allows restaurant owners to efficiently manage their restaurant menus, including categories, dishes, prices, availability, and characteristics.  

It integrates with the **EoEats AI Backend** to provide a seamless restaurant administration experience.  

---  

## 🚀 Key Features  

### 🏢 Restaurant Management Dashboard  

- 📌 **Manage categories** (create, update, delete)  
- 🍽️ **Manage dishes** (add, edit, remove)  
- 🏷️ **Set dish characteristics** (description, allergens, extras)  
- 💰 **Update pricing** dynamically  
- ✅ **Enable or disable dish availability**  

---  

## 🏗️ Tech Stack  

- **Frontend:** Vue.js 3 ⚡  
- **State Management:** Pinia 🌿  
- **UI Framework:** Vuetify / Tailwind CSS 🎨  
- **Routing:** Vue Router 🛤️  
- **API Handling:** Axios 🌐  

---  

## 🛠️ Project Setup  

### 📦 Install Dependencies  

**npm install**  

### 🚀 Run Development Server  

**npm run dev**  

### 🏗️ Build for Production  

**npm run build**  

---  

## 🔗 API Integration  

The frontend communicates with the backend using **Axios**. Example request:  

**Updating Dish Availability:**  

**JavaScript**
**import axios from "axios";**  

**const API_URL = "https://api.eoeats.com";**  

**export const updateDishAvailability = async (dishId, isAvailable) => {**  
&nbsp;&nbsp;**return axios.put(`${API_URL}/dishes/${dishId}/availability`, {**  
&nbsp;&nbsp;&nbsp;&nbsp;**isAvailable**  
&nbsp;&nbsp;**});**  
**};**  

## 🔧 Environment Variables  

Create a `.env` file in the root directory and configure the API endpoint:  

**VITE_API_BASE_URL=https://api.eoeats.com**  

---  

## 🛠️ Additional Notes  

- 🚀 **Optimized for performance** with lazy loading and caching  
- 📌 **Follows Vue.js best practices**  
- 🌍 **Future enhancements** include analytics for dish popularity  

👨‍💻 Built with ❤️ using Vue.js to empower restaurant owners!  

---  

### 📜 License  

This project is licensed under the **MIT License**. 
