export default function ({
  route, redirect, error, store, app: { router },
}) {
  if (process.server) return;
  if (window.sessionStorage.toslabUser) {
    store.commit('user/setUser', JSON.parse(window.sessionStorage.toslabUser));
  }
  return true;
}
