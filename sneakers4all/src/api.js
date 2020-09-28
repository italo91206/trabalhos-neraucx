import axios from 'axios';

export default axios.create({
    baseURL: `https://sneakers4all-api.000webhostapp.com/API`,
    headers: {
        'Content-Type': 'text/html'
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true
});