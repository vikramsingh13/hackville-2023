const getLocalStorage = () => {
  if (localStorage.getItem("questionIndex")) {
    return localStorage.getItem("questionIndex");
  } else {
    localStorage.setItem("questionIndex", 0);
    return 0;
  }
};

return getLocalStorage();
