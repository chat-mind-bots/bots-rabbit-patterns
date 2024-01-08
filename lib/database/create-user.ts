import { CreateUserDto } from '@chat-mind-bots/bots-models';

export const CREATE_USER = 'CREATE_USER';

export type ICreateUserPayload = CreateUserDto & {
  botLogin: string;
};
