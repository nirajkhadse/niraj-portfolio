import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, MapPin, Calendar, Award, User, Briefcase, Github, Linkedin, Sun, Moon, MessageCircle, ExternalLink, Phone, Zap, Cog, TrendingUp, DollarSign, Star, Target, BarChart3, Lightbulb, BarChart, Settings, Layers, CheckCircle, Code, BarChart2, Database, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/Navigation';
import { AnimatedSection, FadeInUpAnimation, ScaleInAnimation } from '@/components/AnimatedSection';
import { SecretModal } from '@/components/SecretModal';
import { ContactForm } from '@/components/ContactForm';
import { ChatBot } from '@/components/ChatBot';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showSecretModal, setShowSecretModal] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredAward, setHoveredAward] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/nirajkhadse', '_blank');
  };

  const projects = [
    {
      title: "MCU Strategy & Sourcing",
      period: "Sep '24–Feb '25",
      description: "Portfolio-wide microcontroller optimization across business units",
      impact: "$9.5M+",
      metric: "Saved",
      subtitle: "EVP Advisory & Cost Optimization",
      tags: ["Strategy", "MCU", "Sourcing"],
      icon: Zap,
      color: "from-emerald-400 to-cyan-400",
      bgPattern: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)"
    },
    {
      title: "EVP Advisory & Optimization",
      period: "Dec '23–Feb '24",
      description: "Cross-functional supplier footprint analysis for executives",
      impact: "Data-driven",
      metric: "Insights",
      subtitle: "Executive Strategy",
      tags: ["Executive", "Strategy"],
      icon: TrendingUp,
      color: "from-blue-400 to-purple-400",
      bgPattern: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)"
    },
    {
      title: "Refrigeration Launch",
      period: "Jul '24–Aug '24",
      description: "Fast-track high-impact product launch optimization",
      impact: "$1.5M",
      metric: "Saved",
      subtitle: "Launch Acceleration",
      tags: ["Launch", "Assets"],
      icon: Cog,
      color: "from-purple-400 to-pink-400",
      bgPattern: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"
    },
    {
      title: "HMI Strategy – Premium",
      period: "Feb '25–Apr '25",
      description: "Premium wall oven HMI cost & integration analysis",
      impact: "Global",
      metric: "Alignment",
      subtitle: "Cost Optimization",
      tags: ["HMI", "Premium"],
      icon: Target,
      color: "from-orange-400 to-red-400",
      bgPattern: "polygon(20% 0, 100% 0, 80% 100%, 0% 100%)"
    }
  ];

  const timeline = [
    {
      role: "Specialist Engineer, GTEC",
      company: "Whirlpool Corporation",
      period: "Aug '23–Present",
      achievements: [
        "Led competitive market analysis and strategic cost optimization, identifying $24.2M+ in savings via supplier and process optimization",
        "Built a Cross-Category Strategic Roadmap yielding $9.5M+ in savings through electronic component standardization and sourcing strategies",
        "SPOC for Electronic Competitive Insights: delivered leadership guidance on positioning, cost, and differentiation",
        "Ran risk-based cost analyses and improved supplier collaboration for long-term savings",
        "Championed global collaboration to align compliance and processes, reducing time-to-market by 15%",
        "Designed business intelligence tools improving accuracy by 50% and cutting decision-making time by 20%"
      ]
    },
    {
      role: "Intern, Engineering, GTEC",
      company: "Whirlpool Corporation",
      period: "Jan '23–Jul '23",
      achievements: [
        "$2.19M cost savings via competitive analysis",
        "Electronics subsystem benchmarking"
      ]
    }
  ];

  const awards = [
    {
      title: "Star Award",
      year: "2024",
      description: "133 parts complexity reduction",
      icon: "⭐",
      color: "from-yellow-400 to-orange-400"
    },
    {
      title: "Stellar of the Year",
      year: "2024", 
      description: "Electronics architecture leadership",
      icon: "🌟",
      color: "from-blue-400 to-purple-400"
    },
    {
      title: "Constellation ×2",
      year: "2024",
      description: "$9.5M+ sourcing strategy",
      icon: "✨",
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Blackbox Impact",
      year: "2025",
      description: "Competitive benchmarking excellence",
      icon: "🎯",
      color: "from-emerald-400 to-cyan-400"
    },
    {
      title: "Google PM Cert",
      year: "2024",
      description: "Project management expertise",
      icon: "📋",
      color: "from-cyan-400 to-blue-400"
    },
    {
      title: "Learning Champion",
      year: "2023",
      description: "Proved myself as effective and quick learner and demonstrated impressive technical depth and project management capabilities",
      icon: "🎓",
      color: "from-indigo-400 to-purple-400"
    },
    {
      title: "Super Team Award",
      year: "2024",
      description: "Spearheaded critical projects, drove collaboration and innovation workshops, and delivered business-impacting recommendations",
      icon: "🚀",
      color: "from-red-400 to-orange-400"
    },
    {
      title: "Innovation Excellence",
      year: "2024",
      description: "Led breakthrough initiatives in cost optimization and process improvement",
      icon: "💡",
      color: "from-green-400 to-teal-400"
    },
    {
      title: "Strategic Impact",
      year: "2024",
      description: "Delivered transformative business strategies and market insights",
      icon: "🎯",
      color: "from-pink-400 to-rose-400"
    },
    {
      title: "Leadership Excellence",
      year: "2024",
      description: "Demonstrated exceptional leadership in cross-functional team management",
      icon: "👑",
      color: "from-amber-400 to-yellow-400"
    }
  ];

  const collegeProjects = [
    {
      title: "Farm Fertilizing Robot",
      skills: "Fusion 360 Manufacturing",
      description: "Rocker-bogie enabled automation for precise agricultural spraying with health safety focus.",
      icon: "🤖",
      highlight: "Six geared motors + Bluetooth control"
    },
    {
      title: "Electric Micromobility",
      teamSize: "4",
      skills: "Manufacturing",
      description: "Indian commuter-focused solution with fleet-sharing pricing. MIT scholarship awarded.",
      icon: "⚡",
      highlight: "Scholarship from MIT ADT University"
    }
  ];

  const skills = [
    {
      title: "Strategic Skills",
      icon: Target,
      items: [
        "Business Strategy",
        "Market Entry & Growth",
        "Competitive Benchmarking",
        "SWOT",
        "Business Case Development"
      ]
    },
    {
      title: "Analytics & Ops",
      icon: BarChart2,
      items: [
        "Operational Efficiency",
        "Change Management",
        "Financial Modeling",
        "Cost Optimization",
        "Revenue Forecasting",
        "Consumer Insights"
      ]
    },
    {
      title: "Tools & Tech",
      icon: Code,
      items: [
        "Data Dashboards",
        "Predictive Analytics",
        "Google Apps Scripts",
        "RCA",
        "Google Workspace"
      ]
    },
    {
      title: "Communication",
      icon: MessageCircle,
      items: [
        "C-Suite Communication",
        "Executive Presentations",
        "Cross-functional Collaboration",
        "Stakeholder Management"
      ]
    },
    {
      title: "Leadership",
      icon: Users,
      items: [
        "Team Leadership",
        "Strategic Planning",
        "Project Management",
        "Decision Making",
        "Risk Management"
      ]
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      items: [
        "Process Innovation",
        "Digital Transformation",
        "Problem Solving",
        "Creative Thinking",
        "Continuous Improvement"
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-white via-gray-50 to-white text-gray-900'
    }`}>
      <Navigation />
      
      {/* Theme Toggle - Bottom Left */}
      <motion.button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isDarkMode ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5 text-white" />
          ) : (
            <Moon className="h-5 w-5 text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-20 h-20 border-2 border-cyan-400/30 rounded-full floating-animation"
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg floating-animation"
            animate={{ 
              rotate: -360, 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-32 left-40 w-12 h-12 border-2 border-emerald-400/40 floating-animation"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            animate={{ 
              scale: [1, 1.5, 1], 
              rotate: 360,
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="gradient-text">Niraj Khadse</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Strategic Business Leader & Technology Innovator
            </motion.p>

            <motion.p 
              className={`text-base md:text-lg mb-8 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Engineering + Strategy + Intelligence = Impactful Decisions
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                onClick={downloadResume}
                className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div 
              className="mt-12 cursor-pointer interactive-element"
              whileHover={{ scale: 1.2, y: -5 }}
              onClick={() => scrollToSection('about')}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className={`h-8 w-8 mx-auto ${
                isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
              }`} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section with Infographics */}
      <section id="about" className={`py-20 ${
        isDarkMode ? 'bg-slate-800/50' : 'bg-gray-50/50'
      }`}>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Stats Section */}
            <AnimatedSection>
              <div className="space-y-8">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="text-6xl font-bold gradient-text mb-2"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    $24M+
                  </motion.div>
                  <motion.div 
                    className="text-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Cost Savings Delivered
                  </motion.div>
                </motion.div>
                
                <motion.p 
                  className={`text-lg leading-relaxed text-center ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Strategic Engineer at Whirlpool • Electronics Cost Models • Sourcing Strategy • Executive Insights
                </motion.p>

                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { icon: "💡", value: "EVP", label: "Level Impact" },
                    { icon: "🎯", value: "3", label: "Components Strategy Developed" },
                    { icon: "🏆", value: "10", label: "Awards Won" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className={`p-4 rounded-lg card-hover ${
                        isDarkMode ? 'bg-slate-700/50' : 'bg-white/50'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -2, 2, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div 
                        className="text-2xl mb-2"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {stat.icon}
                      </motion.div>
                      <motion.div 
                        className="text-xl font-bold gradient-text"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                      >
                        {stat.value}
                      </motion.div>
                      <motion.div 
                        className="text-sm opacity-75"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                      >
                        {stat.label}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Skills Section */}
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Comprehensive technical and leadership capabilities
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-[300px]"
                  >
                    <div className="flip-card h-full">
                      <div className="flip-card-inner">
                        {/* Front of card */}
                        <div className="flip-card-front">
                          <Card className={`h-full ${
                            isDarkMode 
                              ? 'bg-slate-800/90 border-cyan-400/20' 
                              : 'bg-white border-cyan-200 shadow-md'
                          }`}>
                            <CardHeader className="text-center">
                              <motion.div
                                className="text-4xl mb-4 text-cyan-500"
                                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                              >
                                {category.icon && <category.icon className="w-12 h-12 mx-auto" />}
                              </motion.div>
                              <CardTitle className={`text-xl ${
                                isDarkMode ? 'text-white' : 'text-gray-900'
                              }`}>
                                {category.title}
                              </CardTitle>
                              <CardDescription className={`text-sm ${
                                isDarkMode ? 'text-cyan-300' : 'text-cyan-600'
                              }`}>
                                Click to see details
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        </div>

                        {/* Back of card */}
                        <div className="flip-card-back">
                          <Card className={`h-full ${
                            isDarkMode 
                              ? 'bg-slate-800/90 border-cyan-400/20' 
                              : 'bg-white border-cyan-200 shadow-md'
                          }`}>
                            <CardContent className="flex flex-col h-full p-6">
                              <h3 className={`text-lg font-semibold mb-4 ${
                                isDarkMode ? 'text-white' : 'text-gray-900'
                              }`}>
                                {category.title}
                              </h3>
                              <ul className="space-y-2 flex-grow">
                                {category.items.map((item, itemIndex) => (
                                  <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                                    className={`flex items-center gap-2 ${
                                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                                    <span className="text-sm">{item}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Strategic Projects */}
      <section id="projects" className={`py-20 ${
        isDarkMode ? 'bg-slate-900/50' : 'bg-white'
      }`}>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Strategic Projects</h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                  className="relative cursor-pointer group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className={`h-full transition-all duration-500 overflow-hidden ${
                    hoveredProject !== null && hoveredProject !== index 
                      ? 'opacity-40 scale-95 blur-sm' 
                      : 'opacity-100 scale-100'
                  } ${
                    isDarkMode 
                      ? 'bg-slate-800/90 backdrop-blur-sm border-cyan-400/20' 
                      : 'bg-white border-cyan-200 shadow-lg'
                  } group-hover:shadow-2xl group-hover:shadow-cyan-500/25`}>
                    
                    {/* Animated header */}
                    <div 
                      className={`h-3 bg-gradient-to-r ${project.color} relative overflow-hidden`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{
                          x: hoveredProject === index ? ["-100%", "100%"] : "-100%"
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </div>
                    
                    <CardHeader className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div 
                          className={`p-3 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-10 relative`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="h-6 w-6 text-white relative z-10" />
                          <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-90 rounded-lg`} />
                        </motion.div>
                        
                        <motion.div
                          className={`text-sm px-3 py-1 rounded-full ${
                            isDarkMode ? 'bg-cyan-900/30 text-cyan-300' : 'bg-cyan-100 text-cyan-700'
                          }`}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                        >
                          {project.period}
                        </motion.div>
                      </div>
                      
                      <CardTitle className={`text-xl font-semibold mb-3 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>
                        {project.title}
                      </CardTitle>
                      
                      <CardDescription className={`text-sm leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.div
                            key={tag}
                            whileHover={{ scale: 1.1, y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge variant="outline" className={`text-xs ${
                              isDarkMode 
                                ? 'border-cyan-600 text-cyan-300 bg-cyan-900/20' 
                                : 'border-cyan-600 text-cyan-600 bg-cyan-50'
                            }`}>
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.div 
                        className={`p-4 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-10 relative overflow-hidden`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          animate={{
                            x: hoveredProject === index ? ["-100%", "100%"] : "-100%"
                          }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />
                        <div className="relative z-10 text-center">
                          <div className="text-2xl font-bold text-white">{project.impact}</div>
                          <div className="text-sm opacity-75 text-white">{project.metric}</div>
                          <div className="text-sm mt-2 text-white/80">{project.subtitle}</div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className={`py-20 ${
        isDarkMode ? 'bg-slate-800/50' : 'bg-gray-50/50'
      }`}>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div 
                  className="relative"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="absolute left-0 top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.5 }}
                  />
                  
                  {index < timeline.length - 1 && (
                    <div className={`absolute left-2 top-10 w-0.5 h-32 bg-gradient-to-b ${
                      isDarkMode ? 'from-cyan-400/50 to-transparent' : 'from-cyan-300 to-transparent'
                    }`}></div>
                  )}
                  
                  <div className="ml-8 pb-8">
                    <Card className={`${
                      isDarkMode 
                        ? 'bg-slate-800/90 backdrop-blur-sm border-cyan-400/20' 
                        : 'bg-white border-cyan-200'
                    } hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 group`}>
                      <CardHeader>
                        <CardTitle className={`text-xl ${
                          isDarkMode ? 'text-white' : 'text-black'
                        }`}>{item.role}</CardTitle>
                        <CardDescription className={`font-medium text-lg ${
                          isDarkMode ? 'text-cyan-300' : 'text-cyan-600'
                        }`}>
                          {item.company} • {item.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-3">
                          {item.achievements.map((achievement, i) => (
                            <motion.div 
                              key={i} 
                              className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${
                                isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-50'
                              }`}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              whileHover={{ x: 10, scale: 1.01 }}
                            >
                              <motion.div 
                                className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"
                                whileHover={{ scale: 1.5 }}
                              />
                              <span className={`text-sm leading-relaxed ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                              }`}>{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className={`py-20 ${
        isDarkMode ? 'bg-slate-900/50' : 'bg-white'
      }`}>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Awards & Recognition</h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="h-[200px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flip-card h-full">
                  <div className="flip-card-inner">
                    {/* Front of card */}
                    <div className="flip-card-front">
                      <Card className={`h-full ${
                        isDarkMode 
                          ? 'bg-slate-800/90 border-cyan-400/20' 
                          : 'bg-white border-cyan-200 shadow-md'
                      }`}>
                        <CardHeader className="text-center">
                          <motion.div
                            className="text-4xl mb-4"
                            whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            {award.icon}
                          </motion.div>
                          <CardTitle className={`text-lg ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {award.title}
                          </CardTitle>
                          <CardDescription className={`font-semibold ${
                            isDarkMode ? 'text-cyan-300' : 'text-cyan-600'
                          }`}>
                            {award.year}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>

                    {/* Back of card */}
                    <div className="flip-card-back">
                      <Card className={`h-full ${
                        isDarkMode 
                          ? 'bg-slate-800/90 border-cyan-400/20' 
                          : 'bg-white border-cyan-200 shadow-md'
                      }`}>
                        <CardContent className="flex items-center justify-center h-full p-6">
                          <p className={`text-sm text-center ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {award.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 ${
        isDarkMode ? 'bg-slate-800/50' : 'bg-gray-50/50'
      }`}>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
          </AnimatedSection>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {/* University Education */}
            <ScaleInAnimation>
              <Card className={`${
                isDarkMode 
                  ? 'bg-slate-800/90 backdrop-blur-sm border-cyan-400/20' 
                  : 'bg-white border-cyan-200'
              } text-center relative overflow-hidden group`}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-400/5"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <CardHeader className="relative z-10">
                  <CardTitle className={`text-2xl ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>
                    MIT School of Engineering
                  </CardTitle>
                  <CardDescription className={`text-lg ${
                    isDarkMode ? 'text-cyan-300' : 'text-cyan-600'
                  }`}>
                    B.Tech (Mechatronics & Automation) • GPA: 8.20
                  </CardDescription>
                  <CardDescription className={`${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Pune, India • June 2019 - August 2023
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScaleInAnimation>

            {/* College Projects */}
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8 text-cyan-400">College Projects</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {collegeProjects.map((project, index) => (
                  <ScaleInAnimation key={index} delay={index * 0.2}>
                    <Card className={`h-full relative overflow-hidden group ${
                      isDarkMode 
                        ? 'bg-slate-800/90 backdrop-blur-sm border-cyan-400/20' 
                        : 'bg-white border-cyan-200'
                    } hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300`}>
                      
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5"
                        whileHover={{ scale: 1.02, opacity: 0.8 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <CardHeader className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div 
                            className="text-3xl"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {project.icon}
                          </motion.div>
                          <CardTitle className={`text-lg flex-1 ${
                            isDarkMode ? 'text-white' : 'text-black'
                          }`}>
                            {project.title}
                          </CardTitle>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className={`${
                            isDarkMode 
                              ? 'border-cyan-600 text-cyan-300' 
                              : 'border-cyan-600 text-cyan-600'
                          }`}>
                            {project.skills}
                          </Badge>
                          {project.teamSize && (
                            <Badge variant="outline" className={`${
                              isDarkMode 
                                ? 'border-emerald-600 text-emerald-300' 
                                : 'border-emerald-600 text-emerald-600'
                            }`}>
                              Team: {project.teamSize}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="relative z-10">
                        <p className={`text-sm leading-relaxed mb-3 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {project.description}
                        </p>
                        
                        <motion.div 
                          className={`p-3 rounded-lg ${
                            isDarkMode ? 'bg-cyan-900/20' : 'bg-cyan-50'
                          } text-sm font-medium text-cyan-400`}
                          whileHover={{ scale: 1.02 }}
                        >
                          🎯 {project.highlight}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </ScaleInAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${
        isDarkMode ? 'bg-slate-900/50' : 'bg-white'
      }`}>
        <div className="container mx-auto px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-center mb-16">Let's Connect</h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection>
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                  <p className={`mb-8 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Ready to discuss R&D strategy, cost modeling, or electronics innovation? 
                    Let's create value together.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: Mail, text: "nirajkhadse03518@gmail.com", action: null },
                      { icon: Phone, text: "+91 877961767", action: null },
                      { icon: Linkedin, text: "linkedin.com/in/nirajkhadse", action: openLinkedIn }
                    ].map((contact, index) => {
                      const IconComponent = contact.icon;
                      return (
                        <motion.div 
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-400/5 transition-colors cursor-pointer"
                          whileHover={{ x: 10, scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          onClick={contact.action}
                        >
                          <IconComponent className="h-5 w-5 text-cyan-400" />
                          <span>{contact.text}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={downloadResume}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-full"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </motion.div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <ContactForm isDarkMode={isDarkMode} />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${
        isDarkMode ? 'bg-slate-900 border-cyan-800' : 'bg-gray-50 border-cyan-200'
      }`}>
        <div className="container mx-auto px-6 text-center">
          <motion.p 
            className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © 2025 Niraj Khadse — Strategy in Design. Intelligence in Execution.
          </motion.p>
        </div>
      </footer>

      {/* Secret Modal */}
      <SecretModal isOpen={showSecretModal} onClose={() => setShowSecretModal(false)} isDarkMode={isDarkMode} />
      
      {/* ChatBot */}
      <ChatBot isDarkMode={isDarkMode} />
      
      {/* Secret Hover Area */}
      <motion.div
        className="fixed bottom-6 right-24 z-40 p-3 text-sm opacity-70 hover:opacity-100 cursor-pointer bg-cyan-500/20 rounded-lg backdrop-blur-sm border border-cyan-400/30"
        onClick={() => setShowSecretModal(true)}
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-cyan-400">Want a secret? 🤫</span>
      </motion.div>
    </div>
  );
};

export default Index;
