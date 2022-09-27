
import React from 'react';
import { motion } from "framer-motion";

const FailedModal = ({ remove, title, body }) => {

    const modalRef = React.useRef(null);

    React.useEffect(() => {
        modalRef.current.focus();
    }, []);

    return (
        <motion.div ref={modalRef} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0, scale: 0 }} className='custom_modal' tabIndex={-1} onBlur={remove}>
            <div className='custom_modal__close-btn' onClick={remove}>X</div>
            <div className='custom_modal__icon custom_modal__icon--failed'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h1 className='custom_modal__title'>{title}</h1>
            <p className='custom_modal__body'>{body}</p>
        </motion.div>
    );
}

export default FailedModal;
