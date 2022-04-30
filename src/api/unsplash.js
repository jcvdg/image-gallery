import axios from 'axios';

// 1st approach: const searchImages = (term) => {...}

// 2nd approach: creates an instace of the axios client w/ a couple of defaulted properties.  create a customize copy of axios to customized to making request to some specific url with specified headers 
export default axios.create( {  
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID P1Cl8x5kTQ1fESEn584r9Acm-yUV78LhLrulCGeXWHQ'
    }
});