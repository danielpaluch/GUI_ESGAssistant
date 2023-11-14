import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
const port = 5000;

export const server = new ApolloServer({
  schema,
});

// 2
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
