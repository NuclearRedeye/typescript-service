import { Add, Divide, Multiply, Subtract } from '@joelsummerfield/experiment.typescript-library';
import bodyParser = require('body-parser');
import { Request, Response, Application } from 'express';
import express = require('express');

const app: Application = express();
const port = 8080;

app.use(bodyParser.json());

app.post('/add', (req : Request, res : Response) => {
    const a: number = req.body.a || 0;
    const b: number = req.body.b || 0;
    const result = {
        "result": Add(a, b)
    };
    res.status(200).send(JSON.stringify(result));
});

app.post('/subtract', (req : Request, res : Response) => {
    const a: number = req.body.a || 0;
    const b: number = req.body.b || 0;
    const result = {
        "result": Subtract(a, b)
    };
    res.status(200).send(JSON.stringify(result));
});

app.post('/multiply', (req : Request, res : Response) => {
    const a: number = req.body.a || 0;
    const b: number = req.body.b || 0;
    const result = {
        "result": Multiply(a, b)
    };
    res.status(200).send(JSON.stringify(result));
});

app.post('/divide', (req : Request, res : Response) => {
    const a: number = req.body.a || 0;
    const b: number = req.body.b || 1;
    const result = {
        "result": Divide(a, b)
    };
    res.status(200).send(JSON.stringify(result));
});

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});