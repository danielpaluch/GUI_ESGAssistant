import { Env } from './env.base';
import * as fromLocal from './env.local';

export const { env }: { env: Env } = fromLocal;
