export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const formatData = (data) => {
  const arr = Object.keys(data);
  let str = "";
  if (!data || arr.length < 1) {
    return null;
  }
  Object.keys(data).forEach((key, index) => {
    if (index < arr.length - 1) {
      str = str.concat(`${key}=${typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key]}&`);
    } else {
      str = str.concat(`${key}=${typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key]}`);
    }
  });
  return str;
};
