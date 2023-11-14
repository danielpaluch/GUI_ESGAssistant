import { extendType, objectType } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
    t.nonNull.string("email");
    t.nonNull.string("password");
  },
});

let users: NexusGenObjects["User"][] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
    password: "123456",
  },
  {
    id: 2,
    name: "Kevin Samoei",
    email: "kevin@samoei.com",
    password: "123456",
  },
];

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "User",
      resolve: () => users,
    });
  },
});
