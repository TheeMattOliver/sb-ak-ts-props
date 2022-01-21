export const get = (obj, key, def, p, undef) => {
  key = key && key.split ? key.split(".") : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};

export const themeGet =
  (path, fallback = null) =>
  (props) =>
    get(props.theme, path, fallback);
export default themeGet;
