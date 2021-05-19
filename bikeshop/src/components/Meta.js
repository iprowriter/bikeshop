import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
            
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to BikeShop Europe',
    description: 'save the earth and buy bike',
    keywords: 'bike-for-sale, sustainability, Europe'
}

export default Meta
