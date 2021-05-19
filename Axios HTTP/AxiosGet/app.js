const axios = require('axios');
const getRequest = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/3');
        console.log(response.data);
    } catch (err) {
        console.error(err);
    }
};

getRequest()
