import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ServicesSection from '../page_components/services/ServicesSection';

const Services = () => {
    return (
        <MainLayout title={"RotaCapital - Consultancy Services"}>
            <ServicesSection />
        </MainLayout>
    );
}

export default Services;
