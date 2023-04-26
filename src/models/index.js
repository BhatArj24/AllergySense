// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Allergy } = initSchema(schema);

export {
  User,
  Allergy
};