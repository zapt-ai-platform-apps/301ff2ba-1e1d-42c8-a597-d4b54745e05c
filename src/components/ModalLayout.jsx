import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const ModalLayout = ({ children, title, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-iosLight rounded-2xl w-full max-w-lg shadow-ios-large relative overflow-hidden"
      >
        <div className="p-5 border-b border-gray-200/80">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-iosDark">{title}</h2>
            <button
              onClick={onClose}
              className="text-iosGray hover:text-iosDark transition-colors cursor-pointer p-1 rounded-lg"
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