import { RoleModel } from '@app/models/role.model';

export interface UserModel {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    role?: RoleModel;
}
