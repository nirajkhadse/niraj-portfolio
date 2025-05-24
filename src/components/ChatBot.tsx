
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ChatBotProps {
  isDarkMode: boolean;
}

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatBot = ({ isDarkMode }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help you learn about Niraj. Ask me about his projects, experience, or achievements!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const quickQuestions = [
    "What are Niraj's biggest wins?",
    "What is teardown benchmarking?",
    "What projects has he led?",
    "What does he do at Whirlpool?"
  ];

  const getResponse = (question: string): string => {
    const lowerQ = question.toLowerCase();
    
    if (lowerQ.includes('biggest wins') || lowerQ.includes('achievements')) {
      return "Niraj's biggest wins include: $24M+ in cost savings delivered, leading a $9.5M+ microcontroller sourcing optimization, reducing component complexity by 133 parts, and receiving multiple awards including Star Award, Stellar of the Year, and Constellation Awards!";
    }
    
    if (lowerQ.includes('teardown') || lowerQ.includes('benchmarking')) {
      return "Teardown benchmarking is Niraj's specialty! He conducts detailed analysis of competitor products by physically disassembling them to understand cost drivers, design efficiencies, and identify optimization opportunities. This helps Whirlpool make strategic decisions about their own product architecture.";
    }
    
    if (lowerQ.includes('projects') || lowerQ.includes('led')) {
      return "Niraj has led several key projects: Microcontroller Strategy ($9.5M+ savings), EVP Advisory & Cost Optimization, Refrigeration Launch Acceleration ($1.5M saved), and HMI Strategy for Premium Cooking Products. Each project involved cross-functional collaboration and delivered significant business impact.";
    }
    
    if (lowerQ.includes('whirlpool') || lowerQ.includes('work') || lowerQ.includes('job')) {
      return "At Whirlpool, Niraj works as a Specialist Engineer in GTEC, where he builds cost models for electronic components, drives sourcing strategy, develops automation tools using AI and Google Apps Script, and delivers strategic insights to EVPs and stakeholders.";
    }
    
    if (lowerQ.includes('skills') || lowerQ.includes('expertise')) {
      return "Niraj's core expertise includes aPriori cost modeling, Google Apps Script automation, Looker Studio analytics, electronics architecture, competitive analysis, and strategic communication. He bridges engineering and business strategy.";
    }
    
    if (lowerQ.includes('education') || lowerQ.includes('background')) {
      return "Niraj graduated from MIT School of Engineering, Pune with a B.Tech in Mechatronics & Automation (GPA: 8.20). He also holds a Google Project Management Professional Certificate.";
    }
    
    return "That's a great question! Niraj is a Strategic Engineer at Whirlpool who specializes in electronics cost modeling, teardown analytics, and sourcing strategy. Feel free to ask about his specific projects, achievements, or technical expertise!";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: getResponse(input),
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInput('');
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: question,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: getResponse(question),
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
  };

  return (
    <>
      {/* Chat Toggle Button - Fixed positioning to avoid overlaps */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white' 
            : 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white'
        }`}
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)" }}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: isOpen ? 180 : 0,
          backgroundColor: isOpen ? "#ef4444" : undefined
        }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed bottom-24 right-6 z-40 w-80 md:w-96 max-h-[70vh]"
          >
            <Card className={`h-full ${
              isDarkMode 
                ? 'bg-slate-900/95 border-cyan-400/30 backdrop-blur-sm' 
                : 'bg-white/95 border-cyan-300 backdrop-blur-sm'
            }`}>
              <CardHeader className="pb-3">
                <CardTitle className={`flex items-center gap-2 text-lg ${
                  isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  <Bot className="h-5 w-5" />
                  Ask Me About Niraj
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Messages */}
                <div className="h-64 overflow-y-auto space-y-3 pr-2">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isBot
                          ? isDarkMode 
                            ? 'bg-cyan-900/30 text-cyan-100 border border-cyan-400/30' 
                            : 'bg-cyan-100 text-cyan-900 border border-cyan-300'
                          : isDarkMode
                            ? 'bg-slate-700 text-white'
                            : 'bg-gray-200 text-gray-900'
                      }`}>
                        {message.text}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Questions */}
                <div className="space-y-2">
                  <p className={`text-xs font-medium ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Quick questions:
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {quickQuestions.map((question, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className={`text-left text-xs p-2 rounded border transition-colors ${
                          isDarkMode
                            ? 'border-cyan-400/30 text-cyan-300 hover:bg-cyan-900/30'
                            : 'border-cyan-300 text-cyan-700 hover:bg-cyan-50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about Niraj..."
                    className={`flex-1 text-sm ${
                      isDarkMode
                        ? 'bg-slate-800 border-cyan-400/30 text-white placeholder:text-gray-400'
                        : 'bg-white border-cyan-300 text-black placeholder:text-gray-500'
                    }`}
                  />
                  <Button
                    onClick={handleSend}
                    size="sm"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
