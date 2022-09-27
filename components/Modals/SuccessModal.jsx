
import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

const SuccessModal = ({ remove, title, body }) => {

    const modalRef = React.useRef(null);

    React.useEffect(() => {
        modalRef.current.focus();
    }, []);

    return (
        <motion.div ref={modalRef} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0, scale: 0 }} className='custom_modal' tabIndex={-1} onBlur={remove}>
            <div className='custom_modal__close-btn' onClick={remove}>X</div>
            <div className='custom_modal__icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h1 className='custom_modal__title'>{title}</h1>
            <p className='custom_modal__body'>{body}</p>
        </motion.div>
    );
}

export default SuccessModal;
