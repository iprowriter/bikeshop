import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col } from 'react-bootstrap';
import { listProducts } from '../reduxFiles/actions/productActions';
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
//import axios from 'axios';


{/*const HomeScreen = () => {
    //Also import axios
    //use this commented function when you don't want to use Redux for management
    //Remember to import useState before you run this function.
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('api/products')

            setProducts(data)
        }
        fetchProducts()
    }, [])*/}

    const HomeScreen = ({ match }) => {
        const keyword = match.params.keyword

        const pageNumber = match.params.pageNumber || 1

        const dispatch = useDispatch()

        const productList = useSelector(state => state.productList)
        const { loading, error, products, page, pages } = productList
      
        
        useEffect(() => {
            dispatch(listProducts(keyword, pageNumber))
        }, [dispatch, keyword, pageNumber])



    return (
        <>
        <Meta />
        {!keyword ? ( 
        <ProductCarousel/>
        ) : (
            <Link to='/' className='btn btn-light'>
                Go Back
            </Link>
        )}
        <h1> Latest Products </h1>
        {loading ? (<Loader />) : error ? <Message variant='danger'>{error}</Message>:
        (
            <>
             <Row>
         {products.map(product => (
             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                 <Product product={product} />
             </Col>
         ))}
     </Row>
     <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
            </>
        )}  
        </>
    )
}

export default HomeScreen
