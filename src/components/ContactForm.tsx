
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  isDarkMode: boolean;
}

export const ContactForm = ({ isDarkMode }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "✅ Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <motion.div
      className={`p-8 rounded-lg ${
        isDarkMode 
          ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
          : 'bg-white border border-gray-200 shadow-lg'
      }`}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Input 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={`${
              isDarkMode 
                ? 'bg-white/5 border-white/20 text-white placeholder:text-gray-400' 
                : 'bg-gray-50 border-gray-300 text-black placeholder:text-gray-500'
            }`}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Input 
            type="email" 
            placeholder="Your Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`${
              isDarkMode 
                ? 'bg-white/5 border-white/20 text-white placeholder:text-gray-400' 
                : 'bg-gray-50 border-gray-300 text-black placeholder:text-gray-500'
            }`}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Textarea 
            placeholder="Your Message" 
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={`${
              isDarkMode 
                ? 'bg-white/5 border-white/20 text-white placeholder:text-gray-400' 
                : 'bg-gray-50 border-gray-300 text-black placeholder:text-gray-500'
            }`}
          />
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full ${
              isDarkMode 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};
