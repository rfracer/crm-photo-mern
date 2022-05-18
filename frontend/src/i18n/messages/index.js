import en from './en.json';
import pl from './pl.json';

// Flat json files to 'example.example' structure
function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }
    return messages;
  }, {});
}

export const languages = {
  en: flattenMessages(en),
  pl: flattenMessages(pl),
};

console.log(languages);
