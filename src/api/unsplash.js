import axios from 'axios';

export default axios.create({
    baseURL = 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID FTjwDjxgLTDjR3UfxDV_lqPv8o9Tf_s9PTbOOnoZ7Xc' 
    }
});