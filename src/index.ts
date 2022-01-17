import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { apiRouter } from './routes/api.routes'
import { extRouter } from './routes/external.routes'
import cors from 'cors'
import serverless from 'serverless-http'

dotenv.config();

const app = express();

const allowedOrigins = ['http//localhost:3000']
const options: cors.CorsOptions = {
    origin: allowedOrigins
}
app.use(cors(options))

app.use(express.json());
app.use(apiRouter);
app.use(extRouter);

const ENV_VARS = {
    port: process.env.PORT,
    mongoURI: process.env.MONGO_URI,
    token_secret: process.env.TOKEN_SECRET
}

/* app.listen(ENV_VARS.port, async () => {
    console.log('Server funcionando na porta: ', ENV_VARS.port);

    if (ENV_VARS.mongoURI) {
        mongoose.connect(ENV_VARS.mongoURI);
    } else {
        console.log('Erro na conexão com DB.');
    }
}); */

export const handler = serverless(app,  { callbackWaitsForEmptyEventLoop: false })

export { ENV_VARS }