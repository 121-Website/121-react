import axios from 'axios';

export const postLeadsAPI = async (body = PrototypeBody) => {
    try {
        const { data } = await axios.post(
            `https://121-admin-production.up.railway.app/api/leads`,
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};

const PrototypeBody = {
    data: {
        email: 'test@domain.com',
        name: 'jhon doe 2',
        phone: '123456789',
        message: 'hola 2',
    },
};
