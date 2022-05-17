export interface Client {
  _id?: string;
  name: string;
  category: string;
  date: Date | string;
  value: number;
  alreadyPaid: number;
  // eslint-disable-next-line no-restricted-globals
  status: ClientStatus;
  address: string;
  info: string;
}

export type ClientStatus = 'lead' | 'contract' | 'completed';

export interface Task {
  _id?: string;
  // eslint-disable-next-line no-restricted-globals
  name: string;
  priority: TaskPriority;
  checked: boolean;
}

export type TaskPriority = 'low' | 'medium' | 'high';

export interface User {
  id: string;
  email: string;
  password: string;
}

export type TaskFilter = 'completed' | 'uncompleted' | 'all';

export interface UserRegister extends User {
  confirmPassword: string;
}

export type FetchCustomError = {
  status: number;
  data: {
    error: {
      message?: string;
      status?: number;
    };
  };
  custom: string;
};

export type PasswordChangeType = {
  password: string;
  confirmPassword: string;
};
