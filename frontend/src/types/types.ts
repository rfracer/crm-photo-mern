export interface Client {
  _id?: string;
  name: string;
  category: string;
  date: Date;
  value: number;
  alreadyPaid: number;
  // eslint-disable-next-line no-restricted-globals
  status: 'lead' | 'contract' | 'completed';
  address: string;
  info: string;
}

export interface Task {
  _id?: string;
  // eslint-disable-next-line no-restricted-globals
  name: string;
  priority: 'low' | 'medium' | 'high';
  checked: boolean;
}

export interface User {
  id: string;
  email: string;
  password: string;
}

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
