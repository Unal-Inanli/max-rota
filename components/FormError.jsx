import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

const FormError = ({ children, condition }) => {

    return (
        <AnimatePresence>
            {condition && <motion.div initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0 }} className='form-popup-error'>
                {children}
            </motion.div>}
        </AnimatePresence>
    );
}

export default FormError;
