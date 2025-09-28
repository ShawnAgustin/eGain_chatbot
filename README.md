# 💻 eGain Laptop Advisor Chatbot

A sophisticated customer service chatbot designed for helping customers choose the perfect laptop based on their specific needs and preferences.

## 🎯 Project Overview

This project is a take-home assignment submission for eGain's Analyst I, Solution Success position. The chatbot demonstrates advanced conversation flow design, intelligent user interaction handling, and professional UI/UX implementation.

## �📋 Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/ShawnAgustin/eGain_chatbot.git
   cd egain_chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to interact with the chatbot

## � Approach

The eGain Laptop Advisor follows a two-phase recommendation approach:

### **Phase 1: User Profile Collection**
The chatbot systematically gathers information about the user through a structured conversation flow:
- **Purpose Identification**: Determines primary use case (Work, Gaming, Student, Creative)
- **Gaming Specialization**: For gaming users, identifies casual vs. high-end gaming preferences
- **Budget Assessment**: Captures price range preferences across four tiers
- **Profile Building**: Constructs a comprehensive user profile with all collected criteria

### **Phase 2: Data-Driven Recommendations**
Using the collected user profile, the system:
- **Dataset Matching**: Queries our curated laptop database (`laptopData.json`) containing 16 laptop models
- **Criteria Filtering**: Matches laptops based on exact purpose and budget criteria
- **Personalized Results**: Delivers tailored recommendations with detailed specifications
- **Contextual Presentation**: Shows CPU, RAM, GPU, storage, and pricing information

This approach ensures that every recommendation is precisely matched to the user's stated needs and preferences, providing relevant and actionable laptop suggestions.

## �🖼️ App Screenshots

Below are screenshots showcasing the eGain Laptop Advisor Chatbot in action:

| Home Screen                | Chatbot Conversation Flow      |
|----------------------------|-------------------------------|
| ![Home Screen](./screenshots/app.png) | ![Chatbot Conversation](./screenshots/flowchart.png) |


**Shawn Agustin**  
Candidate for eGain Analyst I, Solution Success Position

