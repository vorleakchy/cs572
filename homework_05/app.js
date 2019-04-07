const axios = require('axios');
const express = require('express');
const app = express();

app.disable('x-powered-by');
app.disable('etag');
app.enable('case sensitive routing');
app.enable('strict routing');
app.enable('trust proxy');
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

const userAPI = 'https://randomuser.me/api/?results=10';

app.get('/users', (req, res) => {
    fetchUserData(res);
});

async function fetchUserData(res) {
    try {
        const usersResponse = await axios.get(userAPI);
        sendUserData(usersResponse, res);
    } catch (error) {
        res.status(500).send({ 
            "error": {
                "code": 500,
                "message": error
            } 
        });
    }
}

function sendUserData(usersResponse, res) {
    const page = usersResponse.data.info.page;
    res.set({ 
        'Content-Type': 'application/json',
        'Cache-Control': 'private, max-age=86400',
        'Last-Modified': new Date()
    });
    res.links(buildPaging(page));
    res.send(usersResponse.data);
}

function buildPaging(page) {
    const firstUrl = `${userAPI}&page=1`;
    const prevUrl = `${userAPI}&page=${page - 1}`;
    const nextUrl = `${userAPI}&page=${page + 1}`;
    const lastUrl = `${userAPI}&page=100`;
    const paging = {
        first:firstUrl,
        next: nextUrl,
        last: lastUrl
    };

    if (page > 1) paging.prev = prevUrl;

    return paging;
}

app.listen(port, () => console.log(`Listening to ${port}`));