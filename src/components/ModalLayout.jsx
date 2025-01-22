import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const ModalLayout = ({ children, title, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="bg-white rounded-xl w-full max-w-lg p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <FiX size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ModalLayout;