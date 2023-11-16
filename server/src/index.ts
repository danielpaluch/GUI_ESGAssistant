// Server modules
// Apollo Server
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
// Express
import cors from "cors";
import express from "express";
import { createServer } from "http";
// MongoDB
import "dotenv/config";
import connectDB from "./db/connect";
const PORT = 5000;

// Schema
import { schema } from "./schema";

const startServer = async () => {
  const app = express();
  const httpServer = createServer(app);

  const apollo = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await apollo.start();

  app.use(cors());
  app.use(
    "/graphql",
    cors<cors.CorsRequest>({ origin: "http://localhost:4200" }),
    express.json(),
    expressMiddleware(apollo)
  );

  connectDB();

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
};

startServer();
