// Import routes
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';

// Import dependencies
import express, {NextFunction, Request, Response} from 'express';
import helmet from 'helmet';
import {router} from './routes/dbRoutes';

// Set default port for express app
const PORT = process.env.PORT || 4001;

// Create express app
const app = express();

// Apply middleware
// Note: Keep this at the top, above router
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Implement trivia route
app.use('/trivia', router);

// Implement 500 error route
app.use(function (err: { stack: any }, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);
    res.status(500).send('Something is broken.');
});

// Implement 404 error route
app.use(function (req: Request, res: Response, next: NextFunction) {
    res.status(404).send('Sorry we could not find that.');
});

// Start express app
app.listen(PORT, function () {
    console.log(`Server is running on: ${PORT}`);
});
