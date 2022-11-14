import axios from "axios";

export const GetProjectsAPI = async (id) => {
    try {
        const { data } = await axios.get(`https://cms.121latam.com/api/projects/`);
        return data;
    } catch (error) {
        console.log(error);
    }
}