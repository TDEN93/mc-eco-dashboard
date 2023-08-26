import axios from "axios";
import { CookBookModel, Cookbook, PartialCookBook } from "../models/CookBook.model";

export class CookBookService {
    constructor() {
        
    }

    async fetchCookBooks(): Promise<Cookbook[]> {
        const response = await axios.get(`${import.meta.env.VITE_ECO_API_URL}/cookbooks`);
        if(response.status !== 200) throw new Error('Error fetching cookbooks');
        const cookbooks: CookBookModel = response.data as CookBookModel;
        console.log('data', cookbooks.cookbooks);
        return cookbooks.cookbooks;
    }

    async addCookBook(cookbook: PartialCookBook) {
        if(!cookbook.parent) {
            delete (cookbook as any).parent;
        }
        const response = await axios.post(`${import.meta.env.VITE_ECO_API_URL}/cookbooks`, cookbook);
        if(response.status !== 200) throw new Error('Error adding cookbooks');
        console.log('response', response.status);
        return;
    }

    async editCookBook(cookbook: Cookbook) {
        const response = (await axios.patch(`${import.meta.env.VITE_ECO_API_URL}/cookbooks/${cookbook.id}`, cookbook));
        if(response.status !== 200) throw new Error('Error editing cookbooks');
        return;
    }

    async deleteCookBook(cookbook: Cookbook) {
        const response = (await axios.delete(`${import.meta.env.VITE_ECO_API_URL}/cookbooks/${cookbook.id}`));
        if(response.status !== 200) throw new Error('Error deleting cookbooks');
        return;
    }
}


