import defaultAxios from 'axios';
import { ENV } from './env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiProvider = defaultAxios.create({
    baseURL: ENV.API,
    withCredentials: false
});

// Request interceptor
const interceptorsFunc = async (config) => {
    // const token = localStorage.getItem();
    const token = await AsyncStorage.getItem(ENV.AUTH_TOKEN);

    const newConfig = config;

    // When a 'token' is available set as token.
    if (token) {
        newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};

apiProvider.interceptors.request.use(interceptorsFunc, (err) => Promise.reject(err));

export { apiProvider }
