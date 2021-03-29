export default function filterDataAttribute(attributes) {
  return Object.keys(attributes)
    .filter(key => key.startsWith('data-'))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: attributes[key],
      };
    }, {});
}
