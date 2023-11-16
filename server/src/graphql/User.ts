import { extendType, nonNull, objectType, stringArg } from "nexus";
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

export const UserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createUser", {
      type: "User",
      args: {
        name: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },

      resolve: (parent, args, context) => {
        const newUser = {
          id: users.length + 1,
          name: args.name,
          email: args.email,
          password: args.password,
        };
        users.push(newUser);
        return newUser;
      },
    });
  },
});
