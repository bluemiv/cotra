import lodash from 'lodash';

/**
 * snake_case를 camelCase로 변경하여 반환한다.
 * @param word snake_case 문자열
 */
export const camelize = (word: string) => word.replace(/_([a-z])/g, (_, w) => w.toUpperCase());

/**
 * camelCase를 snake_case로 변경하여 반환한다.
 * @param word camelCase 문자열
 */
export const decamelize = (word: string) =>
  word.replace(/([a-z])([A-Z])/g, (_, w1, w2) => `${w1}_${w2.toLowerCase()}`);

/**
 * 재귀적으로 snake_case 형태의 json 값을 camelCase 형태의 json 값으로 변환한다.
 * @param jsonObject 변환할 json 값
 */
export const recursiveCamelize: any = (jsonObject: any) => {
  if (['string', 'number', 'boolean'].includes(typeof jsonObject) || lodash.isNil(jsonObject)) {
    return jsonObject;
  }

  if (Array.isArray(jsonObject)) {
    return jsonObject.map((arrItem) => recursiveCamelize(arrItem));
  }

  return Object.entries(jsonObject).reduce((acc, entry) => {
    const [key, value] = entry;
    return { ...acc, [camelize(key)]: recursiveCamelize(value) };
  }, {});
};

/**
 * 재귀적으로 camelCase 형태의 json 값을 snake_case 형태의 json 값으로 변환한다.
 * @param jsonObject 변환할 json 값
 */
export const recursiveDecamelize: any = (jsonObject: any) => {
  if (['string', 'number', 'boolean'].includes(typeof jsonObject) || lodash.isNil(jsonObject)) {
    return jsonObject;
  }

  if (Array.isArray(jsonObject)) {
    return jsonObject.map((arrItem) => recursiveDecamelize(arrItem));
  }

  return Object.entries(jsonObject).reduce((acc, entry) => {
    const [key, value] = entry;
    return { ...acc, [decamelize(key)]: recursiveDecamelize(value) };
  }, {});
};
