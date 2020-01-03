import { Prisma } from 'prisma-binding';

import { complexFragmentReplacements } from './Complex';
import { appartamentFragmentReplacements } from './Appartament';
import { userFragmentReplacements } from './User';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  fragmentReplacements: {
    ...complexFragmentReplacements,
    ...appartamentFragmentReplacements,
    ...userFragmentReplacements
  }
});

export default prisma;
