import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const ModalLayout = ({ children, title, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-gray-800 rounded-2xl w-full max-w-lg shadow-ios-large relative overflow-hidden"
      >
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1 rounded-lg"
            >
              <FiX className="text-xl" />
            </button>
          </div>
        </div>
        
        <div className="p-5">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModalLayout;