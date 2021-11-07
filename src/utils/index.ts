import { useEffect, useState } from "react";

export const isFalsy = (value: any) => (value === 0 ? false : !value);

export const cleanObject = (object: any) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const formatData = (data: any) => {
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

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// export const debouce = (func, delay) => {
//   let timeout;
//   return () => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       func();
//     }, delay);
//   };
// };

// export const debounce = (func, delay) => {
//   let timeout;
//   return () => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       func();
//     }, delay);
//   };
// };
interface params<T>{
  param: T;
  delay?: number;
}
export const useDebounce = <T>({ param, delay }: params<T>): T=> {
  const [theParam, setTheParam] = useState(param);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTheParam({ ...param });
    }, delay);
    return () => clearTimeout(timeout);
  }, [param, delay]);
  return theParam;
};

export const useArray =  <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T)=> setValue([...value, item]),
    clear: ()=> setValue([]),
    removeIndex: (index: number)=>{
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    }
  }
}