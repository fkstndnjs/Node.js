// -------- express -------

import express from 'express'
import fsAsync from 'fs/promises'
import {} from 'express-async-errors' // 프로미스 에러 핸들러
const app = express();



// -------- app.get --------

app.get('/', (req, res, next)=>{
    console.log(req.path);

    const {host} = req.headers;
    console.log(host);

    console.log('first');

    next();
    // next(new Error('error')); - 첫 번째 콜백함수에서밖에 안 던져짐
}, (req, res, next)=>{ // 한 url에 여러 콜백함수를 넣을 수 있음
    console.log('first2');

    next('route'); // 다음 콜백함수는 넘어감
}, (req, res, next)=>{ // 한 url에 여러 콜백함수를 넣을 수 있음
    console.log('first3');
});

app.get('/', (req, res, next)=>{ // 한 url에 대해서 다른 app.get으로 받을 수 있음
    console.log('second');

    res.send('GET test'); // 같은 url에 대해서 처음으로 send를 한 함수까지 미들웨어 체인이 실행됨
})

app.get('/sky/:id', (req, res, next)=> {
    // /sky/1998
    console.log(req.params); // { get: '1998' }
    console.log(req.params.id); // 1998

    // /sky/1998/?key=fkstndjns || sky/1998?key=fkstndnjs
    console.log(req.query); // { key: 'fkstndnjs' }
    console.log(req.query.key); // fkstndnjs

    //res.send('test');
    //res.json({name: 'ysh'});
    res.setHeader('name', 'ysh');
    res.status(200).send(JSON.stringify({id: 1, name: 'Yu SeokHyun'}));
});

app.get('/a', (req, res, next)=> {
    // /a 다음에 url 주소 더 입력하면 404에러 발생
    console.log(req.params); // {}
    console.log(req.params.id); // undefined

    // /a 다음에 위처럼 쿼리를 입력하면 똑같이 출력되고 아니면 params랑 똑같이 출력됨
    console.log(req.query);
    console.log(req.query.id);

    res.status(201).send(JSON.stringify({id: 2, name: 'Yu SeokHyun'}));
});


// -------- app.get(Promise error handle) --------

app.get('/file', (req, res, next) => {
    return fsAsync.readFile('./file.txt');
})



// -------- app.post --------

app.use(express.json()); // json 형식으로 보내는 모든 req를 바꿔줌

app.post('/', (req, res, next) => {
    console.log(typeof(req.body));
    console.log(req.body);
})



// -------- app.all, app.use --------

// /all에 대해서 어떤 method든 다 실행하지만 그 뒤의 경로는 실행안됨
app.all('/all', (req, res, next) => {
    console.log('all');
    res.send('all');
});
// /use 뒤에 어떤 경로라도 다 실행됨
app.use('/use', (req, res, next) => {
    console.log('use');
    res.send('use');
})

// 어떤 경로에 대해 어떤 미들웨어도 받아주지 않을 경우 받는 미들웨어
app.use((req, res, next) => {
    res.status(404).send('Not found');
})

// 에러가 발생하면 받는 미들웨어
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('Sorry, try later!');
})



// -------- express -------

app.listen(8080);