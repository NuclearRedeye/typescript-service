import { Add, Divide, Multiply, Subtract } from '@nuclearredeye/typescript-library';
import { Application, Request, Response } from 'express';
import express from 'express';

export const app: Application = express();

app.use(express.json());

app.post('/add', (req: Request, res: Response) => {
    console.log('add')
    const a: number = req.body.a || 0;
    const b: number = req.body.b || 0;
    const result = {
        result: Add(a, b),
    };
    res.status(200).json(result);
});

app.post('/subtract', (req: Request, res: Response) => {
    const a: number = req.body.a || 0;
    const b: number = req.body.b || 0;
    const result = {
        result: Subtract(a, b),
    };
    res.status(200).json(result);
});

app.post('/multiply', (req: Request, res: Response) => {
    const a: number = req.body.a || 0;
    const b: number = req.body.b || 0;
    const result = {
        result: Multiply(a, b),
    };
    res.status(200).json(result);
});

app.post('/divide', (req: Request, res: Response) => {
    const a: number = req.body.a || 0;
    const b: number = req.body.b || 1;
    const result = {
        result: Divide(a, b),
    };
    res.status(200).json(result);
});
