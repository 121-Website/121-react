import axios from 'axios';

export const GetLeadsAPI = async (limit = 100) => {
    try {
        const { data } = await axios.get(
            `https://121-admin-production.up.railway.app/api/leads?pagination[limit]=${limit}`
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};
