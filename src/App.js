import './App.css';
import React from 'react';
import laptopData from './laptopData.json';

function App() {
  const [messages, setMessages] = React.useState([
    { text: "Hello! What will you primarily use this laptop for?", sender: "bot" }
  ]);
  const [input, setInput] = React.useState("");
  const [conversationStep, setConversationStep] = React.useState("purpose");
  const [userProfile, setUserProfile] = React.useState({});

  // Simple conversation flow structure
  const conversationFlow = {
    purpose: {
      suggestions: ["Work", "Gaming", "Student", "Creative"],
      responses: {
        "Work": "Great! What's your budget range?",
        "Gaming": "Awesome! What type of gaming are you interested in?",
        "Student": "Perfect! What's your budget range?",
        "Creative": "Excellent! What's your budget for creative work?"
      },
      nextStep: function(userInput, profile) {
        return userInput === "Gaming" ? "gamingType" : "budget";
      }
    },
    gamingType: {
      suggestions: ["Casual Gaming", "High-End Gaming"],
      responses: {
        "Casual Gaming": "Perfect for casual gaming! What's your budget range?",
        "High-End Gaming": "Excellent choice for serious gaming! What's your budget range?"
      },
      nextStep: "budget"
    },
    budget: {
      suggestions: ["Under $500", "$500-$1000", "$1000-$1500", "Over $1500"],
      responses: {
        "Under $500": "Good budget! Here are some recommendations.",
        "$500-$1000": "Great range! Here are some recommendations.",
        "$1000-$1500": "Excellent budget! Here are some recommendations.",
        "Over $1500": "Premium budget! Here are some recommendations."
      },
      nextStep: "complete"
    },
    complete: {
      suggestions: ["Yes, search again", "No, I'm done"],
      responses: {
        "Yes, search again": "Great! Let's find another laptop for you. What will you primarily use this laptop for?",
        "No, I'm done": "Perfect! Thanks for using the laptop advisor. Have a great day!"
      },
      nextStep: "purpose"
    }
  };

  const generateRecommendation = (profile) => {
    const { purpose, budget, gamingType } = profile;
    const recommendations = laptopData[purpose]?.[budget] || [];
    
    if (recommendations.length === 0) {
      return `Sorry, no recommendations found for ${purpose} laptops in the ${budget} range.`;
    }
    
    let response = `Based on your choices:\n• Purpose: ${purpose}`;
    if (gamingType) {
      response += `\n• Gaming Type: ${gamingType}`;
    }
    response += `\n• Budget: ${budget}\n\nHere are my top recommendations:\n\n`;
    
    recommendations.forEach((laptop, index) => {
      response += `${index + 1}. **${laptop.name}** - $${laptop.price}\n`;
      response += `   • CPU: ${laptop.cpu}\n`;
      response += `   • RAM: ${laptop.ram}GB\n`;
      if (laptop.gpu) {
        response += `   • GPU: ${laptop.gpu}\n`;
      }
      response += `   • Storage: ${laptop.storage}\n\n`;
    });
    
    response += `Would you like to search for a different laptop?`;
    
    return response;
  };

  const restartConversation = () => {
    setMessages([
      { text: "Hello! What will you primarily use this laptop for?", sender: "bot" }
    ]);
    setConversationStep("purpose");
    setUserProfile({});
    setInput("");
  };

  const handleSend = () => {
    if (input.trim() === "") return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, sender: "user" }]);
    
    const currentFlow = conversationFlow[conversationStep];
    let botResponse = "";
    
    // Check if input matches a suggestion
    if (currentFlow?.suggestions?.includes(input)) {
      botResponse = currentFlow.responses[input];
      
      // Update user profile
      setUserProfile(prev => ({
        ...prev,
        [conversationStep]: input
      }));
      
      // Move to next step or complete
      if (currentFlow.nextStep === "complete") {
        const finalProfile = { ...userProfile, [conversationStep]: input };
        botResponse = generateRecommendation(finalProfile);
        setConversationStep("complete");
      } else if (conversationStep === "complete") {
        if (input === "Yes, search again") {
          restartConversation();
          return;
        } else if (input === "No, I'm done") {
          setConversationStep("finished");
        }
      } else {
        // Handle dynamic nextStep (can be function or string)
        const nextStep = typeof currentFlow.nextStep === "function" 
          ? currentFlow.nextStep(input, userProfile)
          : currentFlow.nextStep;
        setConversationStep(nextStep);
      }
    } else {
      botResponse = "Please select one of the options above.";
    }
    
    // Add bot response
    setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
    setInput("");
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="chat-header">
          <h3>Laptop Advisor</h3>
        </div>
        
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div className={`message ${msg.sender}`} key={idx}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        
        {conversationStep !== "finished" && conversationFlow[conversationStep] && (
          <div className="suggestion-bubbles">
            {conversationFlow[conversationStep].suggestions.map((suggestion, idx) => (
              <button 
                key={idx} 
                className="suggestion-bubble"
                onClick={() => setInput(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
        
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
