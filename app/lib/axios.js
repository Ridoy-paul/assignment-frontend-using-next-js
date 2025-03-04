import Axios from 'axios'

const axiosInstance  = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true,
});

// Set the Bearer auth token.
const setBearerToken = token => {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export { axiosInstance, setBearerToken }