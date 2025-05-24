
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SecretModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export const SecretModal = ({ isOpen, onClose, isDarkMode }: SecretModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            className={`relative p-8 rounded-lg max-w-md mx-4 ${
              isDarkMode ? 'bg-slate-900 border border-gray-700' : 'bg-white border border-gray-300'
            }`}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                🤫 Secret Revealed!
              </h3>
              <p className={`mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                "I automate teardown analytics in my free time. Let's connect."
              </p>
              <Button
                onClick={() => window.open('mailto:nirajkhadse03518@gmail.com?subject=Let\'s Connect - Teardown Analytics', '_blank')}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Let's Connect!
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
