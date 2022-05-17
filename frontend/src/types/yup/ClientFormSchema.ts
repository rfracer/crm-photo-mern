import * as yup from 'yup';

export const ClientFormSchema = yup
  .object({
    name: yup.string().required(),
    category: yup.string().required(),
    value: yup.number().min(0).required(),
    alreadyPaid: yup.number().min(0).required(),
    address: yup.string().required(),
    date: yup.date(),
  })
  .required();
