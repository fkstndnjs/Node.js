import express from 'express'
const app = express();

app.get('/', (req, res, next)=>{

    console.log(req.path);
    console.log(req.headers);
    console.log(req.params);
    console.log(req.query);

    res.send('test');
});

app.get('/sky/:id', (req, res, next)=>{

    console.log(req.params);
    console.log(req.params.id);

    console.log(req.query);
    console.log(req.query.keyword);

    //res.send('test');
    //res.json({name: 'ysh'});
    //res.sendStatus(200);
    res.setHeader('name', 'ysh');
    res.status(204).send('created');
});

app.listen(8080);

app.get('/', (req, res, next)=>{
    
    console.log(req.path);
    console.log(req.headers);
    console.log(req.params);
    console.log(req.query);

    res.send('test');
});

app.get('/:id', (req, res, next)=>{

    console.log(req.params);
    console.log(req.params.id);

    console.log(req.query);
    console.log(req.query.keyword);


    res.send('test');  
    res.json({name: 'hsj'});
    res.setHeader('name', 'uys');
    res.status(200).send('fll;;');
});


