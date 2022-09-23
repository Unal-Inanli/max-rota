import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContactForm from '../page_components/contact/ContactForm';

const Contact = () => {
    return (
        <MainLayout title={"RotaCapital - Contact"}>
            <ContactForm />            
        </MainLayout>
    );
}

export default Contact;
