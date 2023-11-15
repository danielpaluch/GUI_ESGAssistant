// Import necessary modules
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import { createServer } from "http";
import { schema } from "./schema";
require("dotenv").config();
const PORT = 5000;

const app = express();
const serverHttp = createServer(app);

app.use(cors());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

const apollo = new ApolloServer({
  schema,
});
apollo.applyMiddleware({ app });
console.log(process.env.MONGODB_URI);

serverHttp.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});
