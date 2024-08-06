import { Env, env_type } from './env.base';
import * as base from './env.base';

export const env: Env = {
  ...base.envBase,
  AUTH0_DOMAIN: 'dev-oxkc8b4lxtyqee1q.us.auth0.com',
  AUTH0_CLIENT_ID: 'TSH6o560WmMCQbSq4UoNFYWDOA9CUIZQ',
  AUTH0_AUDIENCE: '',
  ENV_TYPE: env_type.LOCAL,
  URL: '',
};
