import React from 'react'
import { Link } from 'react-router-dom'



const SamplePage = () => {
    return (
        <>
            <h3>Hi! Welcome to Sample Page</h3>

            <p>Thanks for checking out this page, Be sure to check all the features of this sample ecommerce website</p>

            <p>This site was designed my Martin Oputa using React, Express, NodeJS and MongoDB</p>


            <Link to='/' className='btn btn-light'>Click Here Go Back</Link>
        </>



    )
}

export default SamplePage
