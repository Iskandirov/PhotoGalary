import axios from "axios";

export default class ProductService {
    static getListData() {
        return axios.get('https://localhost:44368/api/product/search')
    };
}