import axios from "axios";

export const GetProjectAPI = async (id) => {
    try {
        const { data } = await axios.get(`https://cms.121latam.com/api/projects/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}