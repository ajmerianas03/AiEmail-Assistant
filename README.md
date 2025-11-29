# AiEmail-Assistant

A **Smart AI-powered Email Assistant** built using **Spring Boot** and **Google Gemini API**, with a **Chrome Extension** for real-time email suggestions, rewriting, and tone improvement directly inside Gmail.

---

## ✅ Phase 1 — Completed

### ✔ Backend (Spring Boot)
- Fully configured REST API  
- Google Gemini integration using WebClient  
- Clean architecture (Controller, DTO, Service)  
- CORS configured  
- Externalized API keys with `application.yaml`

### ✔ Frontend (React + MUI)
- Modern chat-style UI  
- Message bubbles for user & AI  
- Persistent chat input  
- Global Snackbar  
- Custom MUI theme  
- Clean folder structure  
- `useEmailGenerator` hook with conversation support

---

## 🚀 Features

- **AI Email Suggestions** – Generate fast, professional replies  
- **Tone Editing** – Casual, professional, friendly, etc.  
- **Real-time Gmail Enhancer** via Chrome extension (coming soon)  
- **Spring Boot Backend** with structured APIs  
- **Gemini 2.5 Flash** for fast generation  
- **React Frontend** with chat interface  

---

## 🛠️ Tech Stack

### Backend
- Spring Boot 3.x  
- Java 21  
- Spring WebFlux  
- Maven  

### AI
- Google Gemini API

### Frontend
- React 19  
- Material UI (MUI v7)  
- Axios  

### Extension
- Chrome Extension (planned)

---

## 📁 Project Structure

---

## 🔹 **Backend – Spring Boot (aiemail-assistant-sb)**

aiemail-assistant-sb/
│   pom.xml
│   mvnw
│   mvnw.cmd
│   application.yaml
│
├── src/main/java/com/aiemail_assistant_sb
│   ├── AiemailAssistantSbApplication.java
│   ├── config
│   │    ├── WebClientConfig.java
│   │    └── WebConfig.java
│   ├── controller
│   │    └── EmailGeneratorController.java
│   ├── dto
│   │    └── EmailRequest.java
│   └── service
│        └── EmailGeneratorService.java
│
└── src/main/resources
    ├── application.yaml
    ├── static/
    └── templates/



---

## 🔹 **Frontend – React (aiemail-assistant-fe/src)**



aiemail-assistant-fe/src/
│   App.jsx
│   App.css
│   index.css
│   main.jsx
│   theme.js
│
├── api/
│     emailService.js
│
├── assets/
│     react.svg
│
├── components/
│   ├── layout/
│   │     AppLayout.jsx
│   │     Header.jsx
│   │
│   ├── chat/
│   │     ChatContainer.jsx
│   │     ChatInput.jsx
│   │     MessageBubble.jsx
│   │
│   ├── pages/
│   │     EmailAssistantPage.jsx
│   │
│   └── ui/
│         GlobalSnackbar.jsx
│         LoaderIcon.jsx
│
├── context/
│     SnackbarContext.jsx
│
└── hooks/
      useEmailGenerator.js



---

## 🚦 Next Steps (Phase 2)
- Chrome extension integration  
- Improved message animations  
- Chat history persistence  
- User authentication (optional)  
- Export to Gmail  

---

## 📄 License
MIT (or add your own)

---

If you want, I can also add:

✅ Setup Instructions  
✅ API Endpoints section  
✅ Screenshots section  
✅ Chrome Extension docs  

Just tell me **“add setup section”** or **“add screenshots”**.
