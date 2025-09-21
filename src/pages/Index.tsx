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
  const [isDarkMode, setIsDarkMode] = useState(false);
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
    window.open('https://drive.google.com/drive/u/0/folders/1m5l6_wkEARqRZbLbno5FIbxyxTofuqgY', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/nirajkhadse', '_blank');
  };

  const projects = [
    {
      title: "US Strategic Workshop",
      period: "Mar '25–May '25",
      description: "Conducted workshop in US Strategic Projects & optimized Feature Sets by removing legacy parts that costed premium even being not that useful and introducing low cost high impact features",
      impact: "$4.5M",
      metric: "Saved",
      subtitle: "Feature Optimization",
      tags: ["Workshop", "Strategy", "Features"],
      icon: Lightbulb,
      color: "from-yellow-400 to-orange-400",
      bgPattern: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)"
    },
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
      role: "Senior Engineer, GTEC",
      company: "Whirlpool Corporation",
      period: "Jul '25–Present",
      achievements: [
        "Led U.S. workshop for cooking product leadership; optimized feature sets, removing over-engineered elements and adding low-cost, high-impact differentiators",
        "Led the electronics cost modeling team, setting strategy for cost architecture, supplier alignment, and sourcing initiatives",
        "Designed sourcing and architecture strategies influencing product roadmaps and C-suite investment decisions",
        "Served as the Global Strategy Lead for Electronic Competitive Insights, delivering data driven recommendations to leadership on market positioning, cost structures, and strategic differentiation"
      ]
    },
    {
      role: "Specialist Engineer, GTEC",
      company: "Whirlpool Corporation",
      period: "Aug '23–Jun '25",
      achievements: [
        "Built competitive intelligence & cost models shaping multi-million-dollar procurement and architecture decisions",
        "Automated cost analysis workflows, cutting turnaround time by 60% and enabling real-time leadership dashboards",
        "Partnered with EVPs to align sourcing, design, and portfolio strategies with market trends and cost targets",
        "Led competitive market analysis and strategic cost optimization, identifying $24.2M+ in savings through targeted procurement strategies, supplier optimization, and operational efficiency improvements",
        "Developed a Cross-Category Strategic Roadmap, driving standardization of electronic components across multiple business units, resulting in $9.5M+ in cost reductions, optimized sourcing strategies, and enhanced supply chain resilience",
        "Owned electronic component trend analysis across product categories, enabling standardization and sourcing strategy for global teams"
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
      title: "Technical Champion Award",
      year: "2025",
      description: "Technical leadership in SES Subsystem, leading the team and achieving multi-million cost savings",
      icon: "🏆",
      color: "from-yellow-400 to-orange-400"
    },
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
    <div className={`min-h-screen transition-all duration-500 cursor-custom ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white' 
        : 'light bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff] text-gray-900'
    }`}>
      <Navigation isDarkMode={isDarkMode} />
      
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
        {/* Advanced Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              x: [0, -80, 0],
              y: [0, 60, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Floating Geometric Shapes */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute ${
                i % 4 === 0 ? 'w-6 h-6 border-2 border-cyan-400/30 rounded-full' :
                i % 4 === 1 ? 'w-8 h-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg' :
                i % 4 === 2 ? 'w-4 h-4 border-2 border-emerald-400/40' :
                'w-10 h-10 bg-gradient-to-r from-pink-400/15 to-orange-400/15 rounded-full'
              }`}
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${15 + (i * 12)}%`,
                clipPath: i % 4 === 2 ? "polygon(50% 0%, 0% 100%, 100% 100%)" : undefined
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left side - Enhanced Text content */}
            <motion.div 
              className="flex-1 text-left space-y-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              >
                <Badge className="mb-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white border-0 px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <div>
                    <Zap className="w-4 h-4 mr-3" />
                  </div>
                  Strategic Engineer & Electronics Specialist
                </Badge>
              </motion.div>
              
              {/* Main Title with Advanced Typography */}
              <motion.h1 
                className="text-6xl lg:text-8xl font-black leading-[0.9]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <motion.span 
                  className="block gradient-text"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Niraj
                </motion.span>
                <motion.span 
                  className="block gradient-text"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Khadse
                </motion.span>
              </motion.h1>
              
              {/* Enhanced Description */}
              <motion.p 
                className="text-2xl lg:text-3xl leading-relaxed font-medium text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I build business-aligned electronics strategies powered by{' '}
                <motion.span 
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  technology, data, and AI-driven insights
                </motion.span>
                !
              </motion.p>

              <motion.p 
                className={`text-lg lg:text-xl ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Engineering + Strategy + Intelligence = Impactful Decisions
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={openLinkedIn}
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white px-10 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group"
                  >
                    <div className="mr-3">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    Connect on LinkedIn
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    onClick={downloadResume}
                    className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-10 py-4 text-xl font-bold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
                  >
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="mr-3"
                    >
                      <Download className="w-6 h-6" />
                    </motion.div>
                    Download Resume
                  </Button>
                </motion.div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-6 mt-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {[
                  { value: "$15M+", label: "Cost Savings", color: "text-cyan-400" },
                  { value: "5", label: "Projects Led", color: "text-blue-400" },
                  { value: "2+", label: "Years of Experience", color: "text-purple-400" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className={`text-center p-4 rounded-2xl ${
                      isDarkMode ? 'bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20' : 'bg-white/80 backdrop-blur-sm border border-cyan-200 shadow-lg'
                    }`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side - Enhanced 3D Headshot */}
            <motion.div 
              className="flex-1 relative w-full max-w-lg aspect-square"
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            >
              <div className="relative w-full h-full perspective-1000">
                {/* Outer Glow Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-20 blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Main Image Container */}
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
                  whileHover={{ 
                    rotateY: 15,
                    rotateX: 5,
                    scale: 1.08,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src="/niraj-portfolio/profile.jpg"
                    alt="Niraj Khadse"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x400?text=Niraj+Khadse';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-transparent to-blue-500/30 rounded-full" />
                  
                  {/* Animated Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                {/* Enhanced Floating Elements */}
                {[
                  { size: "w-12 h-12", color: "from-cyan-400 to-blue-500", position: "-top-6 -right-6", delay: 0 },
                  { size: "w-8 h-8", color: "from-purple-400 to-pink-500", position: "-bottom-6 -left-6", delay: 1 },
                  { size: "w-6 h-6", color: "from-emerald-400 to-teal-500", position: "top-1/2 -left-12", delay: 0.5 },
                  { size: "w-10 h-10", color: "from-orange-400 to-red-500", position: "top-1/4 -right-12", delay: 1.5 }
                ].map((element, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${element.size} ${element.position} bg-gradient-to-r ${element.color} rounded-full opacity-80 shadow-lg`}
                    animate={{ 
                      y: [0, -15, 0],
                      x: [0, 10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: element.delay
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <motion.div 
            className="mt-16 cursor-pointer"
            whileHover={{ scale: 1.2, y: -5 }}
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className={`text-sm font-medium ${
                isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
              }`}>
                Scroll to explore
              </span>
              <ChevronDown className={`h-8 w-8 ${
                isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
              }`} />
            </div>
          </motion.div>
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
                      <div className="text-2xl mb-2">
                        {stat.icon}
                      </div>
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
                    className="h-[400px]"
                  >
                    <div className="skill-card h-full">
                      <Card className={`h-full ${
                        isDarkMode 
                          ? 'bg-slate-800/90 border-cyan-400/20' 
                          : 'bg-white/95 border-cyan-200 shadow-md'
                      }`}>
                        <CardHeader className="text-center pb-4">
                          <motion.div
                            className="text-4xl mb-4 text-cyan-500 icon"
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
                        </CardHeader>
                        <CardContent className="card-content">
                          <ul className="space-y-3">
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
                                <div className={`w-1.5 h-1.5 rounded-full ${
                                  isDarkMode ? 'bg-cyan-500' : 'bg-cyan-400'
                                } flex-shrink-0`} />
                                <span className="text-sm">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Strategic Projects */}
      <section id="projects" className={`py-32 relative overflow-hidden ${
        isDarkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
      }`}>
        {/* Minimalistic Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-r from-purple-400/5 to-pink-500/5 rounded-full blur-2xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
              >
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-6 py-3 text-lg font-semibold shadow-lg">
                  <Target className="w-4 h-4 mr-2" />
                  Strategic Projects
                </Badge>
              </motion.div>
              
              <motion.h2 
                className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Impact Through Data
              </motion.h2>
              
              <motion.p 
                className={`text-xl max-w-3xl mx-auto leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Driving measurable business impact through strategic engineering initiatives and data-driven decision making
              </motion.p>
            </div>
          </AnimatedSection>

        {/* Animated Project Statistics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: "$15M+", label: "Total Cost Savings", color: "from-cyan-400 to-blue-500", icon: DollarSign },
            { value: "5", label: "Strategic Projects Led", color: "from-blue-400 to-purple-500", icon: Target },
            { value: "2+", label: "Years of Experience", color: "from-purple-400 to-pink-500", icon: Calendar }
          ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`text-center p-6 rounded-2xl ${
                  isDarkMode ? 'bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 shadow-xl' : 'bg-white/80 backdrop-blur-sm border border-cyan-200 shadow-xl'
                }`}
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <motion.div
                  className={`w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 }
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1, type: "spring" }}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </motion.div>
                <motion.div 
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <motion.div 
                  className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Redesigned Project Grid */}
          <div className="max-w-8xl mx-auto">
            {/* First Row - 2 Projects */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {projects.slice(0, 2).map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={index}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                    className="relative cursor-pointer group"
                    initial={{ opacity: 0, y: 80, rotateX: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 2,
                      z: 50
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Card className={`h-full transition-all duration-700 overflow-hidden ${
                      hoveredProject !== null && hoveredProject !== index 
                        ? 'opacity-40 scale-95 blur-sm' 
                        : 'opacity-100 scale-100'
                    } ${
                      isDarkMode 
                        ? 'bg-slate-800/90 backdrop-blur-lg border-cyan-400/30 shadow-2xl shadow-slate-900/50' 
                        : 'bg-white/95 backdrop-blur-lg border-cyan-200/50 shadow-2xl shadow-cyan-500/10'
                    } group-hover:shadow-3xl group-hover:shadow-cyan-500/30 group-hover:border-cyan-400/50`}>
                      
                      {/* Enhanced Header */}
                      <div 
                        className={`h-6 bg-gradient-to-r ${project.color} relative overflow-hidden`}
                        style={{ clipPath: project.bgPattern }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/40"
                          animate={{
                            x: hoveredProject === index ? ["-100%", "100%"] : "-100%"
                          }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: hoveredProject === index ? ["-200%", "200%"] : "-200%"
                          }}
                          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                        />
                      </div>
                      
                      <CardHeader className="relative p-6">
                        <div className="flex items-start justify-between mb-4">
                          <motion.div 
                            className={`p-3 rounded-2xl bg-gradient-to-r ${project.color} bg-opacity-20 relative group-hover:bg-opacity-30 transition-all duration-500`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.8 }}
                          >
                            <IconComponent className="h-6 w-6 text-white relative z-10" />
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-80 rounded-2xl`} />
                            <motion.div
                              className="absolute inset-0 bg-white/30 rounded-2xl"
                              animate={{
                                opacity: hoveredProject === index ? [0, 1, 0] : 0
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                          
                          <motion.div
                            className={`text-xs px-3 py-1 rounded-full font-semibold ${
                              isDarkMode ? 'bg-cyan-900/50 text-cyan-300 border border-cyan-400/40' : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                            }`}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {project.period}
                          </motion.div>
                        </div>
                        
                        <CardTitle className={`text-xl font-bold mb-3 ${
                          isDarkMode ? 'text-white' : 'text-black'
                        } group-hover:text-cyan-400 transition-colors duration-300`}>
                          {project.title}
                        </CardTitle>
                        
                        <CardDescription className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        } group-hover:text-gray-500 transition-colors duration-300`}>
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-6 pt-0">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.div
                              key={tag}
                              whileHover={{ scale: 1.05, y: -2 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Badge variant="outline" className={`text-xs px-2 py-1 ${
                                isDarkMode 
                                  ? 'border-cyan-500/60 text-cyan-300 bg-cyan-900/40 hover:bg-cyan-800/60' 
                                  : 'border-cyan-500/60 text-cyan-600 bg-cyan-50 hover:bg-cyan-100'
                              } transition-all duration-300 font-medium`}>
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                        
                        <motion.div 
                          className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} bg-opacity-25 relative overflow-hidden group-hover:bg-opacity-35 transition-all duration-500`}
                          whileHover={{ scale: 1.02 }}
                          style={{ clipPath: project.bgPattern }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                            animate={{
                              x: hoveredProject === index ? ["-100%", "100%"] : "-100%"
                            }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                          />
                          <div className="relative z-10 text-center">
                            <motion.div 
                              className="text-2xl font-bold text-white mb-1"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            >
                              {project.impact}
                            </motion.div>
                            <div className="text-sm opacity-90 text-white font-semibold mb-1">{project.metric}</div>
                            <div className="text-xs text-white/90 font-medium">{project.subtitle}</div>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Second Row - 2 Projects */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {projects.slice(2, 4).map((project, index) => {
                const IconComponent = project.icon;
                const actualIndex = index + 2;
                return (
                  <motion.div
                    key={actualIndex}
                    onMouseEnter={() => setHoveredProject(actualIndex)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => setSelectedProject(selectedProject === actualIndex ? null : actualIndex)}
                    className="relative cursor-pointer group"
                    initial={{ opacity: 0, y: 80, rotateX: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: (actualIndex) * 0.2, ease: "easeOut" }}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 2,
                      z: 50
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Card className={`h-full transition-all duration-700 overflow-hidden ${
                      hoveredProject !== null && hoveredProject !== actualIndex 
                        ? 'opacity-40 scale-95 blur-sm' 
                        : 'opacity-100 scale-100'
                    } ${
                      isDarkMode 
                        ? 'bg-slate-800/90 backdrop-blur-lg border-cyan-400/30 shadow-2xl shadow-slate-900/50' 
                        : 'bg-white/95 backdrop-blur-lg border-cyan-200/50 shadow-2xl shadow-cyan-500/10'
                    } group-hover:shadow-3xl group-hover:shadow-cyan-500/30 group-hover:border-cyan-400/50`}>
                      
                      {/* Enhanced Header */}
                      <div 
                        className={`h-6 bg-gradient-to-r ${project.color} relative overflow-hidden`}
                        style={{ clipPath: project.bgPattern }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/40"
                          animate={{
                            x: hoveredProject === actualIndex ? ["-100%", "100%"] : "-100%"
                          }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: hoveredProject === actualIndex ? ["-200%", "200%"] : "-200%"
                          }}
                          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                        />
                      </div>
                      
                      <CardHeader className="relative p-6">
                        <div className="flex items-start justify-between mb-4">
                          <motion.div 
                            className={`p-3 rounded-2xl bg-gradient-to-r ${project.color} bg-opacity-20 relative group-hover:bg-opacity-30 transition-all duration-500`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.8 }}
                          >
                            <IconComponent className="h-6 w-6 text-white relative z-10" />
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-80 rounded-2xl`} />
                            <motion.div
                              className="absolute inset-0 bg-white/30 rounded-2xl"
                              animate={{
                                opacity: hoveredProject === actualIndex ? [0, 1, 0] : 0
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                          
                          <motion.div
                            className={`text-xs px-3 py-1 rounded-full font-semibold ${
                              isDarkMode ? 'bg-cyan-900/50 text-cyan-300 border border-cyan-400/40' : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                            }`}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {project.period}
                          </motion.div>
                        </div>
                        
                        <CardTitle className={`text-xl font-bold mb-3 ${
                          isDarkMode ? 'text-white' : 'text-black'
                        } group-hover:text-cyan-400 transition-colors duration-300`}>
                          {project.title}
                        </CardTitle>
                        
                        <CardDescription className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        } group-hover:text-gray-500 transition-colors duration-300`}>
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-6 pt-0">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.div
                              key={tag}
                              whileHover={{ scale: 1.05, y: -2 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Badge variant="outline" className={`text-xs px-2 py-1 ${
                                isDarkMode 
                                  ? 'border-cyan-500/60 text-cyan-300 bg-cyan-900/40 hover:bg-cyan-800/60' 
                                  : 'border-cyan-500/60 text-cyan-600 bg-cyan-50 hover:bg-cyan-100'
                              } transition-all duration-300 font-medium`}>
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                        
                        <motion.div 
                          className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} bg-opacity-25 relative overflow-hidden group-hover:bg-opacity-35 transition-all duration-500`}
                          whileHover={{ scale: 1.02 }}
                          style={{ clipPath: project.bgPattern }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                            animate={{
                              x: hoveredProject === actualIndex ? ["-100%", "100%"] : "-100%"
                            }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                          />
                          <div className="relative z-10 text-center">
                            <motion.div 
                              className="text-2xl font-bold text-white mb-1"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            >
                              {project.impact}
                            </motion.div>
                            <div className="text-sm opacity-90 text-white font-semibold mb-1">{project.metric}</div>
                            <div className="text-xs text-white/90 font-medium">{project.subtitle}</div>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Third Row - 1 Project (Full Width) */}
            {projects.length > 4 && (
              <div className="w-full">
                {projects.slice(4).map((project, index) => {
                  const IconComponent = project.icon;
                  const actualIndex = index + 4;
                  return (
                    <motion.div
                      key={actualIndex}
                      onMouseEnter={() => setHoveredProject(actualIndex)}
                      onMouseLeave={() => setHoveredProject(null)}
                      onClick={() => setSelectedProject(selectedProject === actualIndex ? null : actualIndex)}
                      className="relative cursor-pointer group"
                      initial={{ opacity: 0, y: 80, rotateX: -15 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: actualIndex * 0.2, ease: "easeOut" }}
                      whileHover={{ 
                        scale: 1.01,
                        rotateY: 1,
                        z: 50
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Card className={`h-full transition-all duration-700 overflow-hidden ${
                        hoveredProject !== null && hoveredProject !== actualIndex 
                          ? 'opacity-40 scale-95 blur-sm' 
                          : 'opacity-100 scale-100'
                      } ${
                        isDarkMode 
                          ? 'bg-slate-800/90 backdrop-blur-lg border-cyan-400/30 shadow-2xl shadow-slate-900/50' 
                          : 'bg-white/95 backdrop-blur-lg border-cyan-200/50 shadow-2xl shadow-cyan-500/10'
                      } group-hover:shadow-3xl group-hover:shadow-cyan-500/30 group-hover:border-cyan-400/50`}>
                        
                        {/* Enhanced Header */}
                        <div 
                          className={`h-8 bg-gradient-to-r ${project.color} relative overflow-hidden`}
                          style={{ clipPath: project.bgPattern }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/40"
                            animate={{
                              x: hoveredProject === actualIndex ? ["-100%", "100%"] : "-100%"
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: hoveredProject === actualIndex ? ["-200%", "200%"] : "-200%"
                            }}
                            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                          />
                        </div>
                        
                        <CardHeader className="relative p-6">
                          <div className="flex items-start justify-between mb-4">
                            <motion.div 
                              className={`p-3 rounded-2xl bg-gradient-to-r ${project.color} bg-opacity-20 relative group-hover:bg-opacity-30 transition-all duration-500`}
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.8 }}
                            >
                              <IconComponent className="h-6 w-6 text-white relative z-10" />
                              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-80 rounded-2xl`} />
                              <motion.div
                                className="absolute inset-0 bg-white/30 rounded-2xl"
                                animate={{
                                  opacity: hoveredProject === actualIndex ? [0, 1, 0] : 0
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </motion.div>
                            
                            <motion.div
                              className={`text-xs px-3 py-1 rounded-full font-semibold ${
                                isDarkMode ? 'bg-cyan-900/50 text-cyan-300 border border-cyan-400/40' : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                              }`}
                              whileHover={{ scale: 1.05, rotate: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {project.period}
                            </motion.div>
                          </div>
                          
                          <CardTitle className={`text-xl font-bold mb-3 ${
                            isDarkMode ? 'text-white' : 'text-black'
                          } group-hover:text-cyan-400 transition-colors duration-300`}>
                            {project.title}
                          </CardTitle>
                          
                          <CardDescription className={`text-sm leading-relaxed ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          } group-hover:text-gray-500 transition-colors duration-300`}>
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="p-6 pt-0">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                              <motion.div
                                key={tag}
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ duration: 0.3 }}
                              >
                                <Badge variant="outline" className={`text-xs px-2 py-1 ${
                                  isDarkMode 
                                    ? 'border-cyan-500/60 text-cyan-300 bg-cyan-900/40 hover:bg-cyan-800/60' 
                                    : 'border-cyan-500/60 text-cyan-600 bg-cyan-50 hover:bg-cyan-100'
                                } transition-all duration-300 font-medium`}>
                                  {tag}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                          
                          <motion.div 
                            className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} bg-opacity-25 relative overflow-hidden group-hover:bg-opacity-35 transition-all duration-500`}
                            whileHover={{ scale: 1.02 }}
                            style={{ clipPath: project.bgPattern }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                              animate={{
                                x: hoveredProject === actualIndex ? ["-100%", "100%"] : "-100%"
                              }}
                              transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <div className="relative z-10 text-center">
                              <motion.div 
                                className="text-2xl font-bold text-white mb-1"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                              >
                                {project.impact}
                              </motion.div>
                              <div className="text-sm opacity-90 text-white font-semibold mb-1">{project.metric}</div>
                              <div className="text-xs text-white/90 font-medium">{project.subtitle}</div>
                            </div>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            )}
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="h-[180px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="flip-card h-full">
                  <div className="flip-card-inner h-full">
                    <div className="flip-card-front">
                      <Card className={`h-full ${
                        isDarkMode 
                          ? 'bg-slate-800/90 border-cyan-400/20' 
                          : 'bg-white border-cyan-200 shadow-md'
                      }`}>
                        <CardHeader className="text-center p-4">
                          <motion.div
                            className="text-3xl mb-3"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {award.icon}
                          </motion.div>
                          <CardTitle className={`text-sm font-bold ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {award.title}
                          </CardTitle>
                          <CardDescription className={`text-xs font-semibold ${
                            isDarkMode ? 'text-cyan-300' : 'text-cyan-600'
                          }`}>
                            {award.year}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>

                    <div className="flip-card-back">
                      <Card className={`h-full ${
                        isDarkMode 
                          ? 'bg-slate-800/90 border-cyan-400/20' 
                          : 'bg-white border-cyan-200 shadow-md'
                      }`}>
                        <CardContent className="flex items-center justify-center h-full p-3">
                          <p className={`text-xs text-center ${
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
