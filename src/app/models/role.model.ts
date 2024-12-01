import { PermissionModel } from '@app/models/permission.model';

export interface RoleModel {
    id?: number;
    name: string;
    description?: string;
    permissions: PermissionModel[];
}
