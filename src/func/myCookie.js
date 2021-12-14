// 设置cookie 名称，值，过期时间
export const setCookie = (cname, cvalue, deadDays) => {
  let date = new Date();
  date.setTime(date.getTime() + deadDays * 24 * 60 * 60 * 1000);
  document.cookie = `${cname}=${cvalue};expires=${date.toGMTString()};`;
};

export const getCookie = (cname) => {
  let arr = document.cookie.split(";");
  arr.forEach((item) => {
    if (cname === item.trim().split("=")[0]) {
      return item.trim().split("=")[1];
    }
  });
  return undefined;
};
