import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>

<Container fluid style={{backgroundColor:'#233848', color:'#AAB7B8'}}   expand="lg" collapseOnSelect>
<Row bg="dark">
<Col className='sm-4'>
<h3 style={{color:'#F7F9F9' }}>Get To Know Us</h3>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >About BikeShop EU</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Our History</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Our Locations in EU</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Current Job Offers</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Our Membership</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Read Reviews by Our Customers</Link></p>
</Col>

<Col className='sm-4'>
<h3 style={{color:'#F7F9F9' }}>Find a Bike</h3>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Bike Finder</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >E-Bikes</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >New Bike Alert</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Adult Bike</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Bike for Teenagers</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Bike for Toddlers</Link></p>
</Col>

<Col className='sm-4'>
<h3 style={{color:'#F7F9F9' }}>Our Locations</h3>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Germany</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Austria</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >United States</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Singapore</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >China</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Nigeria</Link></p>
</Col>

<Col className='sm-4'>
<h3 style={{color:'#F7F9F9' }}>Support</h3>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Chat with Our Agent</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >How to Buy</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Refund Policy</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Our Fees</Link></p>
<p><Link to='/samplepage' style={{color:'#AAB7B8'}} >Shipping Policy</Link></p>
</Col>
</Row>
</Container>

<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Contact Us</Navbar.Brand>
					</LinkContainer>
					
				</Container> 
			</Navbar>




            <Container>
                <Row>
                    <Col className='text-center py-3'>Copyright &copy; BikeShop</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
