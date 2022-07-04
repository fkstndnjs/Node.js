import express from 'express'
const app = express();

app.use(express.json());

app.route('/posts')
    .get((req, res, next) => {
        res.status(200).send('GET: /posts');
    })
    .post((req, res) => {
        console.log(req.body);
        res.status(201).send('POST: /posts');
    });

app.listen(8080);