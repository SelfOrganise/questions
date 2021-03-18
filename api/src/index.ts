import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { getOrCreateUser } from "./repository/users";
import { schema } from "./schemas";
import * as jwt from "express-jwt";
import * as jwksRsa from "jwks-rsa";

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://boiculese.auth0.com/.well-known/jwks.json`,
  }),
  issuer: `https://boiculese.auth0.com/`,
  audience: `https://bogdbo-questions-api.herokuapp.com`,
  algorithms: ["RS256"],
});

const app = express();
app.use(checkJwt);

const server = new ApolloServer({
  schema,
  tracing: process.env.NODE_ENV !== "production",
  context: async ({ req }) => {
    const bearerHeader = req.headers["authorization"];
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];

    let currentUserId = -1;
    if (req.user.sub) {
      currentUserId = await getOrCreateUser(req.user.sub, bearerToken);
    }

    return { currentUserId, user: req.user };
  },
});
server.applyMiddleware({ app });

const port = process.env.PORT || 4000;
app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
