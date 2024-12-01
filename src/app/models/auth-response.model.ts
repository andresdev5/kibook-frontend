import { UserModel } from '@app/models/user.model';

export interface AuthResponseModel {
    token: string;
    user: UserModel;
}
