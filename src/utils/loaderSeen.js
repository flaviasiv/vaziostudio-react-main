export const SEEN_KEY = 'vazio-loader-seen';

export const loaderAlreadySeen = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
};

export const markLoaderSeen = () => {
  try {
    sessionStorage.setItem(SEEN_KEY, '1');
  } catch {
    /* sem sessionStorage: o loading volta na próxima visita */
  }
};
