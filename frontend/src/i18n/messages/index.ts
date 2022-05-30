import en from './en.json';
import pl from './pl.json';
import flatten from 'flat';

// Flat json files to 'example.example' structure
// function flattenMessages(
//   nestedMessages:
//     | {
//         [key: string]: {
//           messages: string;
//         };
//       }
//     | string,
//   prefix = ''
// ) {
//   return Object.keys(nestedMessages).reduce((messages, key) => {
//     let value = nestedMessages[key];
//     let prefixedKey = prefix ? `${prefix}.${key}` : key;

//     if (typeof value === 'string') {
//       messages[prefixedKey] = value;
//     } else {
//       Object.assign(messages, flattenMessages(value, prefixedKey));
//     }
//     return messages;
//   }, {});
// }

export const languages: { [key: string]: Record<string, string> } = {
  en: flatten(en),
  pl: flatten(pl),
};
