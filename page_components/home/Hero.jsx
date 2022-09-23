import React from 'react';
import { motion } from "framer-motion";
import InviteForm from '../../components/InviteForm';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Link from 'next/link';

const Hero = () => {
    return (
        <motion.div initial={{ position: "relative", left: "-10%", opacity: 0 }} whileInView={{ left: 0, opacity: 1, transition: { duration: 0.5 } }} viewport={{ once: true }} className="hm_section_one">
            <div className="row">
                <div className="col-md-6">
                    <div className="section_one_text">
                        <h4>Dünya Piyasalarına <br />
                            Açılan Kapıyız!</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                            et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</p>
                        <Link href={"/new"}>
                            <PrimaryButton>
                                Hesap Oluştur
                            </PrimaryButton>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="section_one_form">
                        <InviteForm />
                    </div>
                </div>
            </div>
        </motion.div >
    );
}

export default Hero;
