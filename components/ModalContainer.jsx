import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import AppStateContext from '../context/AppStateContext';
import DispatchContext from '../context/DispatchContext';
import SuccessModal from './Modals/SuccessModal';

const ModalContainer = () => {

    const { modalContext } = React.useContext(AppStateContext);
    const { modalDispatch } = React.useContext(DispatchContext);


    React.useEffect(() => {


    }, [modalContext.type]);

    const removeModal = () => {
        modalDispatch({
            type: "remove"
        })
    }

    const renderModal = (context) => {

        if (!context.type) return null

        const modals = {
            "success": <SuccessModal remove={removeModal} title={context.title} body={context.body} />,
            "failed": ""
        }

        return modals[context.type]
    }

    return (
        <>
            <AnimatePresence>
                {renderModal(modalContext)}
            </AnimatePresence>
        </>
    );
}

export default ModalContainer;
