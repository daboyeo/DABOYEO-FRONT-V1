export const delay = (ms: number) => {
  setTimeout(() => {
    return;
  }, ms);
};

export const logOut = () => {
  localStorage.clear();
  window.location.reload();
};
