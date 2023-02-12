export function getQuestionIndexLS() {
  if (localStorage.getItem("questionIndex")) {
    return localStorage.getItem("questionIndex");
  } else {
    localStorage.setItem("questionIndex", 0);
    return 0;
  }
};

export default function setQuestionIndexLS(index) {
  localStorage.setItem("questionIndex", index);
}