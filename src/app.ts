import express, {Request,Response} from 'express';
const app = express();
const port = 3000;


app.get('/', (req : Request, res :Response) => {
 return res.send('Hello World!');
});


app.listen(port, () => {
 return console.log(`Express is listening at http://localhost:${port}`);
});
