import {
  findKey,
  forEach,
  get,
  has,
  isArray,
  isPlainObject,
  isString,
  set,
} from "lodash";
import { snakeCase } from "./string";

export function formatSalary(salary: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(salary);
}

export function snakeCaseObj(
  obj: Record<string, any>,
  removeWhitespace = true
) {
  if (!isPlainObject(obj)) {
    return obj;
  }
  const res: Record<string, any> = {};
  Object.keys(obj).forEach((property) => {
    let value = obj[property];
    if (isArray(value)) {
      value = value.map((item) => snakeCaseObj(item));
    } else if (isPlainObject(value)) {
      value = snakeCaseObj(value);
    }
    if (removeWhitespace) {
      if (isString(value)) {
        value = value.replace(/\\t$/, "").trim();
      }
    }
    res[snakeCase(property)] = value;
  });

  return res;
}

export function parseFormDataToObj(formData: FormData) {
  const object: Record<string, any> = {};
  // @ts-ignore
  for (const [key, value] of formData.entries()) {
    if (!(value instanceof File)) {
      object[key] = value;
    }
  }
  return object;
}

export function serializeQueryString(
  obj: Record<string, any>,
  { encode = true, snakeKey = false } = {}
) {
  if (!obj) {
    return "";
  }
  return `?${Object.keys(obj)
    .reduce((a, k) => {
      if (Array.isArray(obj[k]) && obj[k].length > 0) {
        obj[k].forEach((val: any) => {
          const key = snakeKey ? snakeCase(k) : k;
          let value = val;
          if (isString(value)) {
            value = value.replace(/\\t$/, "").trim();
          }
          value = encode ? encodeURIComponent(value) : value;

          // @ts-ignore
          a.push(`${key}[]=${value}`);
        });
      } else if (obj[k] !== null && obj[k] !== undefined) {
        const key = snakeKey ? snakeCase(k) : k;
        let value = obj[k];
        if (isString(value)) {
          value = value.replace(/\\t$/, "").trim();
        }
        value = encode ? encodeURIComponent(value) : value;
        // @ts-ignore
        a.push(`${key}=${value}`);
      }
      return a;
    }, [])
    .join("&")}`;
}

export function findValuePath(obj: object, needle = "default"): string[] {
  const matchKey = findKey(obj, (v) => v === needle);
  if (matchKey) {
    return [matchKey];
  }
  const res: string[] = [];
  forEach(obj, (v, k) => {
    if (typeof v === "object") {
      const valuePath = findValuePath(v, needle);
      if (valuePath.length) {
        res.push(...(isArray(valuePath) ? valuePath : [valuePath]), k);
      }
    }
  });
  return res;
}

export function ensureSafeChaining(
  object: Object,
  path: string | string[],
  defaultValue?: any
) {
  // Ensure the path is existed first
  if (!has(object, path)) {
    set(object, path, undefined);
  }
  // Set default value if you want to. (defaultValue !== undefined)
  if (defaultValue !== undefined && get(object, path) === undefined) {
    set(object, path, defaultValue);
  }
}

export function firstObjValue(obj: Record<any, any>) {
  // eslint-disable-next-line no-restricted-syntax
  for (const k in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(k)) {
      return obj[k];
    }
  }
  return undefined;
}

export function getObjNthItem(obj: Record<any, any>, nth: number) {
  if (!obj) {
    return undefined;
  }
  const index = nth - 1;
  const objKeys = Object.keys(obj);
  const targetKey = objKeys && objKeys[index];
  return obj[targetKey];
}

export const move = (array: any[], fromIndex: number, toIndex: number) => {
  const cloneArray = [...array];
  cloneArray.splice(toIndex, 0, cloneArray.splice(fromIndex, 1)[0]);
  return cloneArray;
};

export const randomTrueOrFalse = () => {
  return Math.floor(Math.random() * 2);
};

export const randomNumberRanges = (target: number) => {
  return Math.floor(Math.random() * target);
};

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const isStringOrNumber = (value: any) => {
  const typeOfChildren = typeof value;
  if (typeOfChildren === "string" || typeOfChildren === "number") {
    return true;
  }
  return false;
};
