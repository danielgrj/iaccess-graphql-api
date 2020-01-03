import { extractFragmentReplacements } from 'prisma-binding';

import Query from './Query';
import Mutation from './Mutation';
import Subscription from './Subscription';
import Appartament from './Appartament';

const appartamentResolvers = {
  Query,
  Mutation,
  Subscription,
  Appartament
};

const appartamentFragmentReplacements = extractFragmentReplacements(appartamentResolvers);

export { appartamentResolvers, appartamentFragmentReplacements };
