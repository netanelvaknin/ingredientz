import axios, {AxiosResponse} from 'axios';

const instanceConfig = {
    baseURL: "/",
    headers: {
        "Content-type": "application/json",
        'Accept': 'application/json'
    }
}

const instance = axios.create(instanceConfig)

instance.interceptors.request.use(
    (config) => {
        // perform a task before the request is sent
        console.log("Request was sent")

        return config
    },
    (error) => {
        // handle the error
        return Promise.reject(error)
    }
);

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        // do something with the response data
        console.log("Response was received")

        return response
    },
    (error) => {
        // handle the response error
        return Promise.reject(error)
    }
);

export default instance
