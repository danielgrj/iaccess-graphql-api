import { extractFragmentReplacements } from 'prisma-binding';

import Query from './Query';
import Mutation from './Mutation';
import Subscription from './Subscription';
import Complex from './Complex';

const complexResolvers = {
  Query,
  Mutation,
  Subscription,
  Complex
};

const complexFragmentReplacements = extractFragmentReplacements(complexResolvers);

export { complexResolvers, complexFragmentReplacements };
