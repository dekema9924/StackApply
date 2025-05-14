import axios from 'axios';
import { Config } from '../config/Config';


export const trackUserAction = async (actionType: 'view' | 'save' | 'apply') => {
    try {
        await axios.post(
            `${Config.apiUrl}/api/track/${actionType}`,
            {},
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then((response) => {
            console.log(response)
        })
    } catch (error: any) {
        console.error('Failed to track user action:', error.response?.data || error.message);
        throw error;
    }
};
