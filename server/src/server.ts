import Fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from "./routes";

const app = Fastify()
const port = parseInt(process.env.PORT || '3333', 10);

app.register(cors, { origin: true }); // Permitir todas as origens como teste
app.register(appRoutes)


app.listen({
  port: port,
  host: '0.0.0.0',

}).then(() => {
  console.log('HTTP Server Runnning !')
})