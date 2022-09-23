import React from 'react';
import EmailIcon from '../../components/Icons/EmailIcon';
import LocationIcon from '../../components/Icons/LocationIcon';
import PhoneIcon from '../../components/Icons/PhoneIcon';
import IconWithText from '../../components/IconWithText';
import InviteForm from '../../components/InviteForm';

const ContactForm = () => {
    return (
        <>
            <div className="contact_top_section">
                <div className="container">
                    <h1>Contact Details</h1>
                    <span>You can contact us about customer or corporate affairs at any time.</span>

                    <div className="contact_list">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="contact_item">
                                    <IconWithText icon={<PhoneIcon />}>
                                        + 90 850 459 68 54
                                    </IconWithText>
                                    <IconWithText icon={<PhoneIcon />} >
                                        +90 556 442 54 87
                                    </IconWithText>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact_item">
                                    <IconWithText icon={<EmailIcon />}>
                                        customer@mail.com
                                    </IconWithText>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact_item">
                                    <IconWithText title={"Headquarters"} icon={<LocationIcon />}>
                                        Suite 15, 1st Floor, Oliaji Trade Centre, Francis Rachel Street, Victoria, Mahe, P.O. Box 1004
                                    </IconWithText>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="context_bot_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="con_bot_top">
                                <h3>JOIN WORLD BRANDS <br />
                                    with <label>RotaCapital!</label></h3>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                <InviteForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
