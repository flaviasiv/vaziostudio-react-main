// A abertura roda uma vez por sessão e nunca com movimento reduzido.
const KEY = 'vazio-loader-seen';

export function loaderSeen() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
  try {
    return sessionStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}

export function markLoaderSeen() {
  try {
    sessionStorage.setItem(KEY, '1');
  } catch {
    /* ignora */
  }
}
