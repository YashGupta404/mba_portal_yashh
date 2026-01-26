"use client"

import React, { useState } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import axios from "axios";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message,setMessage]=useState("");
  const [chat,setChat]=useState([
    {
        id: 1,
        text: "Hello! I'm here to help you with information about our MBA programs. How can I assist you today?",
        sender: 'bot'
      }
  ])


  const handleChange=(e)=>{
    const {name,value}=e.target;
    console.log(name,value);
    setMessage(value);
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    if(!message){
        console.log("Kindly enter a message");
    }
    
    setChat(prev=>[...prev,{
        id:prev.length+1,
        text:message,
        sender:"user"
    }]);
    setMessage("");
    try{
        const result=await axios.post("http://localhost:5000/api/chatbot",{message},{
            headers: {
              "Content-Type": "application/json",
    
            },
            withCredentials: true,
          });
          const {success,response}=result.data;
          if(success)
          {
            setChat(prev=>[...prev,{
                id:prev.length+1,
                text:response,
                sender:"bot"
            }])
          }
          
    }
    catch(err){
        console.log("Error with chatbot from api...",err);
        alert("Error with chatbot from api...");
    }
  }

  // Static sample messages for display


  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Open chatbot"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-96 h-[600px] bg-background border border-border rounded-lg shadow-2xl flex flex-col animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="bg-accent text-accent-foreground p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            <h3 className="font-semibold">MBA Assistant</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-accent/80 rounded-full p-1 transition-colors"
            aria-label="Close chatbot"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
          {chat.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.sender === 'bot' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-background border border-border text-foreground'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              {message.sender === 'user' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-border">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              name="message"
              onChange={handleChange}
              required
              className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-accent text-accent-foreground p-2 rounded-lg hover:bg-accent/90 transition-colors"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
        </div>
      )}
    </>
  )
}
