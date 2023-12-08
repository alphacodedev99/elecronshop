import axios from "axios";

class CategoryService {
    static getAllCategory = () => axios.get('/products/categories');
}

export default CategoryService;