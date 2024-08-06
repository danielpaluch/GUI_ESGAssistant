export enum env_type {
  LOCAL = 'local',
}

export interface Env {
  AUTH0_DOMAIN: string;
  AUTH0_CLIENT_ID: string;
  AUTH0_AUDIENCE: string;
  ENV_TYPE: env_type;
  URL: string;
}

export const envBase: Env = {
  AUTH0_DOMAIN: '',
  AUTH0_CLIENT_ID: '',
  AUTH0_AUDIENCE: '',
  ENV_TYPE: env_type.LOCAL,
  URL: '',
};
