import { GraphQLServer, PubSub } from 'graphql-yoga';

import { complexResolvers, complexFragmentReplacements } from './Complex';
import { appartamentResolvers, appartamentFragmentReplacements } from './Appartament';
import { userResolvers, userFragmentReplacements } from './User';

import prisma from './prisma';

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    ...complexResolvers,
    ...appartamentResolvers,
    ...userResolvers
  },
  context(request) {
    return {
      pubsub,
      prisma,
      request
    };
  },
  fragmentReplacements: {
    ...complexFragmentReplacements,
    ...appartamentFragmentReplacements,
    ...userFragmentReplacements
  }
});

export default server;
