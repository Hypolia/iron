import { type PermissionEntity } from '../entities'
import { type MetaState} from '@hypolia/contracts'
export interface PermissionsResponse {
  data: PermissionEntity[]
  meta: MetaState
}
