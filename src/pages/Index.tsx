
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, MapPin, Calendar, Award, User, Briefcase, Github, Linkedin, Sun, Moon, MessageCircle, ExternalLink, Phone, Zap, Cog, TrendingUp, DollarSign, Star, Target, BarChart3, Lightbulb } from 'lucide-react';
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

  const openResume = () => {
    window.open('https://drive.google.com/drive/u/0/folders/1m5l6_wkEARqRZbLbno5FIbxyxTofuqgY', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://linkedin.com/in/niraj-khadse', '_blank');
  };

  const projects = [
    {
      title: "MCU Strategy & Sourcing",
      period: "Sep '24–Feb '25",
      description: "Portfolio-wide microcontroller optimization across business units",
      impact: "$9.5M+",
      metric: "Saved",
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
        "PCB cost driver analysis across products",
        "Electronic component cost models & benchmarks",
        "Global sourcing strategy & standardization",
        "AI automation tools for business intelligence",
        "Strategic insights for EVPs & stakeholders"
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
    { name: "aPriori", icon: BarChart3, level: 95 },
    { name: "Cost Modeling", icon: DollarSign, level: 90 },
    { name: "Looker Studio", icon: TrendingUp, level: 88 },
    { name: "HMI Architecture", icon: Cog, level: 85 },
    { name: "Automation", icon: Zap, level: 92 },
    { name: "Strategy", icon: Target, level: 94 }
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
      <motion.section 
        id="hero" 
        className="relative flex items-center justify-center min-h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-20 h-20 border-2 border-cyan-400/30 rounded-full"
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg"
            animate={{ 
              rotate: -360, 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-32 left-40 w-12 h-12 border-2 border-emerald-400/40"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            animate={{ 
              scale: [1, 1.5, 1], 
              rotate: 360,
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-6 text-center z-10">
          <FadeInUpAnimation delay={0.2}>
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Niraj</span>
            </motion.h1>
          </FadeInUpAnimation>
          
          <FadeInUpAnimation delay={0.5}>
            <motion.p 
              className="text-2xl md:text-3xl mb-4 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I build business-aligned electronics strategies.
            </motion.p>
          </FadeInUpAnimation>

          <FadeInUpAnimation delay={0.7}>
            <motion.p 
              className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Engineering + Strategy + Intelligence = Impactful Decisions
            </motion.p>
          </FadeInUpAnimation>
          
          <FadeInUpAnimation delay={0.9}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)"
                }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={openResume}
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300"
                >
                  <Download className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2
                }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={openLinkedIn}
                  variant="outline" 
                  size="lg"
                  className={`border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-full transition-all duration-300 ${
                    isDarkMode ? 'hover:text-cyan-300' : 'hover:text-cyan-600'
                  }`}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </motion.div>
            </div>
          </FadeInUpAnimation>
          
          <motion.div 
            className="cursor-pointer"
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
      </motion.section>

      {/* About Section with Infographics */}
      <section id="about" className={`py-20 ${
        isDarkMode ? 'bg-slate-800/50' : 'bg-gray-50/50'
      }`}>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="space-y-8">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-6xl font-bold text-cyan-400 mb-2">$24M+</div>
                  <div className="text-xl">Cost Savings Delivered</div>
                </motion.div>
                
                <motion.p 
                  className={`text-lg leading-relaxed text-center ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  whileHover={{ scale: 1.01 }}
                >
                  Strategic Engineer at Whirlpool • Electronics Cost Models • Sourcing Strategy • Executive Insights
                </motion.p>

                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { icon: "🎯", value: "133", label: "Parts Reduced" },
                    { icon: "🏆", value: "5", label: "Awards Won" },
                    { icon: "💡", value: "EVP", label: "Level Impact" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className={`p-4 rounded-lg ${
                        isDarkMode ? 'bg-slate-700/50' : 'bg-white/50'
                      }`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -2, 2, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-xl font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-sm opacity-75">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Core Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        className={`p-4 rounded-lg ${
                          isDarkMode ? 'bg-slate-700/50' : 'bg-white/50'
                        } flex items-center gap-4`}
                        whileHover={{ 
                          x: 10,
                          scale: 1.02,
                          boxShadow: "0 10px 20px rgba(34, 211, 238, 0.2)"
                        }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <IconComponent className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-cyan-400">{skill.level}%</span>
                          </div>
                          <div className={`h-2 rounded-full ${isDarkMode ? 'bg-slate-600' : 'bg-gray-200'}`}>
                            <motion.div
                              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
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
                          <div className="text-2xl font-bold text-cyan-400">{project.impact}</div>
                          <div className="text-sm opacity-75">{project.metric}</div>
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
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredAward(index)}
                onMouseLeave={() => setHoveredAward(null)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`transition-all duration-500 ${
                  hoveredAward !== null && hoveredAward !== index 
                    ? 'opacity-30 scale-95 blur-sm' 
                    : 'opacity-100 scale-100'
                }`}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  z: 50
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className={`text-center h-full transition-all duration-500 relative overflow-hidden ${
                  isDarkMode 
                    ? 'bg-slate-800/90 backdrop-blur-sm border-cyan-400/20' 
                    : 'bg-white border-cyan-200 shadow-lg'
                } hover:shadow-2xl hover:shadow-cyan-500/30`}>
                  
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-5`}
                    animate={{
                      scale: hoveredAward === index ? 1.2 : 1,
                      opacity: hoveredAward === index ? 0.1 : 0.05
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <CardHeader className="relative z-10">
                    <motion.div
                      className="text-4xl mb-4"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {award.icon}
                    </motion.div>
                    <CardTitle className={`text-lg ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}>
                      {award.title}
                    </CardTitle>
                    <CardDescription className={`font-semibold ${
                      isDarkMode ? 'text-cyan-300' : 'text-cyan-600'
                    }`}>
                      {award.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {award.description}
                    </p>
                  </CardContent>
                </Card>
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
                      { icon: Linkedin, text: "linkedin.com/in/niraj-khadse", action: openLinkedIn }
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
                      onClick={openResume}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-full"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      View Resume
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
