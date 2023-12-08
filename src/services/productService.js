import axios from 'axios';

class ProductService {
    static getAllProducts = () => axios.get('/products');
    static getProductByCategory = (category) => axios.get(`/products/category/${category}`);
}

export default ProductService;