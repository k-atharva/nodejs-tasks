const axios = require('axios');

const putRequest = async () => {
    const updatedTodo = {
        id: 1,
        userId: 1,
        title: 'fugiat veniam minus',
        completed: true
    }

    try {
        const resp = await axios.put('https://jsonplaceholder.typicode.com/todos/3', updatedTodo);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
}

putRequest()