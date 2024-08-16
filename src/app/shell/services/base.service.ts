import { Observable } from 'rxjs';
import { PreService } from './pre.service';
import { BaseCrudService } from '../models/base-service.model';

export abstract class BaseService<T>
  extends PreService<T>
  implements BaseCrudService<T>
{
  abstract getAll(): Observable<T[]>;
}
