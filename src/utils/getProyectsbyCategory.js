
import axios from "axios";

export const GetProjectsByCategoryAPI = async (id) => {
    try {
        const { data } = await axios.get(`https://121-admin-production.up.railway.app/api/categories/${id}?populate=%2A`);
        return data;
    } catch (error) {
        console.log(error);
    }
}   