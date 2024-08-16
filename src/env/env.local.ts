import { Env, env_type } from './env.base';
import * as base from './env.base';

export const env: Env = {
  ...base.envBase,
  AUTH0_DOMAIN: 'dev-3z3jza2t618jfs1f.us.auth0.com',
  AUTH0_CLIENT_ID: 'ypHKknZKjojf21OToqBJp8jkqYdXAeEH',
  AUTH0_AUDIENCE: '',
  ENV_TYPE: env_type.LOCAL,
  URL: '',
};
