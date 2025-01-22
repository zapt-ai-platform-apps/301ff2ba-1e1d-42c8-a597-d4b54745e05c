import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const ModalLayout = ({ children, title, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-2xl w-full max-w-lg shadow-xl relative overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 smooth-transition cursor-pointer p-1 rounded-lg hover:bg-gray-50"
            >
              <FiX className="text-2xl" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModalLayout;