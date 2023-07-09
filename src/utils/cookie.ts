export const getCookie = (key: string) => {
  const isKeyExist = document.cookie
    .split("; ")
    .map((c) => c.split("="))
    .find(([cookieKey]) => cookieKey === key)
    ?.at(1);

  return isKeyExist || null;
};
