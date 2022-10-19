import axios from "axios";

export const GetProjectAPI = async (id) => {
    try {
        const { data } = await axios.get(`https://121-admin-production.up.railway.app/api/projects/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}