# 💻 eGain Laptop Advisor Chatbot

A sophisticated customer service chatbot designed for helping customers choose the perfect laptop based on their specific needs and preferences.

## 🎯 Project Overview

This project is a take-home assignment submission for eGain's Analyst I, Solution Success position. The chatbot demonstrates advanced conversation flow design, intelligent user interaction handling, and professional UI/UX implementation.

## 🚀 Features

### Core Functionality
- **Intelligent Conversation Flow**: Multi-step decision tree guiding users through laptop selection
- **Dynamic Suggestion Bubbles**: Context-aware quick options that change based on conversation stage
- **Smart Input Processing**: Handles both click selections and free-text input with keyword matching
- **Professional UI**: Modern, responsive design with gradient backgrounds and smooth animations
- **Real-time Feedback**: Typing indicators and message timestamps for natural interaction

### Advanced Capabilities
- **Error Handling**: Robust handling of unexpected inputs with helpful guidance
- **Conversation State Management**: Tracks user preferences throughout the interaction
- **Personalized Recommendations**: Generates tailored laptop suggestions based on collected data
- **Progressive Disclosure**: Information is gathered step-by-step to avoid overwhelming users

## 🛠️ Technical Implementation

### Technology Stack
- **Frontend**: React.js with functional components and hooks
- **Styling**: Custom CSS with modern design principles
- **State Management**: React useState for conversation flow and user data
- **User Experience**: Responsive design with animations and micro-interactions

### Architecture Highlights
- **Modular Conversation Flow**: Easily extensible decision tree structure
- **Intelligent Parsing**: Natural language processing for free-text inputs
- **Error Boundaries**: Graceful handling of edge cases and unexpected scenarios
- **Performance Optimized**: Efficient rendering and state updates

## 📋 Setup Instructions

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

## 💬 Conversation Flow Design

### Step-by-Step Process
1. **Purpose Identification** → What will you use the laptop for?
2. **Budget Assessment** → What's your price range?
3. **Brand Preferences** → Any specific brand preferences?
4. **Size Requirements** → What size/portability do you need?
5. **Personalized Recommendations** → Tailored suggestions based on inputs

### Decision Tree Logic
```
Purpose Selection
├── Work & Productivity → Budget → Brand → Size → Business Laptop Recommendations
├── Gaming & Entertainment → Budget → Brand → Size → Gaming Laptop Recommendations
├── Student & Education → Budget → Brand → Size → Student Laptop Recommendations
├── Creative Work → Budget → Brand → Size → Creative Laptop Recommendations
└── Basic Tasks → Budget → Brand → Size → Budget Laptop Recommendations
```

## 🎨 Design Choices

### User Experience Principles
- **Progressive Disclosure**: Information gathered step-by-step
- **Visual Hierarchy**: Clear distinction between user and bot messages
- **Accessibility**: High contrast colors and readable typography
- **Responsive Design**: Works seamlessly across different screen sizes

### Visual Design
- **Modern Gradient Background**: Professional purple-to-blue gradient
- **Card-based Layout**: Clean white chat container with rounded corners
- **Message Differentiation**: Bot messages (left, white) vs User messages (right, gradient)
- **Interactive Elements**: Hover effects and smooth transitions

## 🔧 Error Handling Examples

### Example 1: Unexpected Input During Purpose Selection
**User Input**: "I need something for my grandmother"
**Bot Response**: "I understand you have specific needs! Could you help me by selecting one of the categories above, or tell me more about what you'll mainly use the laptop for?"

### Example 2: Off-topic Input During Budget Selection
**User Input**: "What's the weather like?"
**Bot Response**: "I want to find options in your price range! Could you select a budget range above, or let me know your approximate budget?"

## 🚀 Future Improvements

Given more time, the following enhancements would be implemented:

### Technical Enhancements
- **Database Integration**: Store conversation history and user preferences
- **API Integration**: Real-time laptop inventory and pricing
- **Machine Learning**: Improve recommendation accuracy over time
- **Multi-language Support**: Serve customers in different languages

### Feature Additions
- **Detailed Specifications**: In-depth technical comparisons
- **Price Alerts**: Notify users when preferred laptops go on sale
- **Expert Consultation**: Escalation to human agents for complex queries
- **Integration Options**: Connect with e-commerce platforms for direct purchasing

## 📊 Testing Scenarios

### Conversation Path Testing
1. **Happy Path**: Work laptop, $1000-$1500 budget, no brand preference, balanced size
2. **Gaming Enthusiast**: Gaming laptop, over $2500 budget, ASUS preference, desktop replacement
3. **Budget Student**: Education use, under $500 budget, no preference, ultra-portable
4. **Creative Professional**: Creative work, $1500-$2500 budget, Apple preference, balanced size

### Error Handling Testing
1. **Free-text input**: "I need a computer for my business"
2. **Irrelevant input**: "What time is it?"
3. **Empty input**: Pressing send with no text
4. **Mixed input**: Combining suggestions with additional text

## 🏆 Key Achievements

- ✅ **Sophisticated Conversation Design**: Multi-step decision tree with intelligent routing
- ✅ **Professional UI/UX**: Modern, accessible design with smooth interactions
- ✅ **Robust Error Handling**: Graceful handling of unexpected inputs with helpful guidance
- ✅ **Scalable Architecture**: Easily extensible for additional features and conversation paths
- ✅ **Performance Optimized**: Fast, responsive interface with smooth animations
- ✅ **Comprehensive Documentation**: Detailed setup instructions and implementation explanations

## 👨‍💻 Developer

**Shawn Agustin**  
Candidate for eGain Analyst I, Solution Success Position

---

*This project demonstrates proficiency in React development, UX design principles, conversation flow design, and customer service chatbot implementation.*
