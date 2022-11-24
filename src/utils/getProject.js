import axios from "axios";

export const GetProjectAPI = async (route) => {
    try {
        const { data } = await axios.get(`https://121-admin-production.up.railway.app/api/projects?filters[route][$eq]=${route}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}