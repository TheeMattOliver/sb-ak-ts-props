import { themeGet } from "./utils/theme-get";
import * as styledSystem from "./utils/theme-get";
import theme from "./theme";

const { get: getKey } = styledSystem;

export const get = (key: string) => themeGet(key, getKey(theme, key));
