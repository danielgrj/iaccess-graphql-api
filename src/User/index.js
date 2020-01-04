import { extractFragmentReplacements } from 'prisma-binding';
import Query from './Query';
import Mutation from './Mutation';
import Subscription from './Subscription';
import User from './User';

const userResolvers = {
  Query,
  Mutation,
  // Subscription,
  User
};

const userFragmentReplacements = extractFragmentReplacements(userResolvers);

export { userResolvers, userFragmentReplacements };
