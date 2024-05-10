import Fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

export default async (req: any, res: any) => {
  await app.ready();
  app.server.emit('request', req, res);
}
