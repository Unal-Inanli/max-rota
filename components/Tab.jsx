import React from 'react';
import { motion } from "framer-motion"
const Tab = ({ tabId, content }) => {

    return (
        <motion.div initial={{ opacity: 0, translateY: -50 }} animate={{ opacity: 1, translateY: 0 }}>

            <div dangerouslySetInnerHTML={{ __html: content }} className="tab-pane fade active show" id="profile" aria-labelledby="profile-tab"></div>
        </motion.div>
    );
}

export default Tab;
