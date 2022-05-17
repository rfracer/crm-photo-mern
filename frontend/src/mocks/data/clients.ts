import { Client } from 'types/types';

export const clients: Client[] = [
  {
    _id: '1',
    name: 'Kinga',
    category: 'event',
    date: '2021-11-20T12:05:45',
    value: 4000,
    alreadyPaid: 100,
    status: 'completed',
    address: 'Kalisz, czestochowska 69/62',
    info: 'To sa dodatkowe informacje',
  },
  {
    _id: '2',
    name: 'August',
    category: 'wedding',
    date: '2022-11-20T12:05:45',
    value: 3000,
    alreadyPaid: 200,
    status: 'lead',
    address: 'Ostrów, czestochowska 69/62',
    info: 'To sa dodatkowe informacje',
  },
];
