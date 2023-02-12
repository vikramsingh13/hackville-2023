export function getQuestionIndexLS() {
  if (localStorage.getItem("questionIndex") !== null) {
    return localStorage.getItem("questionIndex");
  } else {
    localStorage.setItem("questionIndex", 0);
    return 0;
  }
};

export default function setQuestionIndexLS(index) {
  localStorage.setItem("questionIndex", index);
}

export function getLocalDialoguesLS() {
  if (localStorage.getItem("localDialogues") !== null) {
    return localStorage.getItem("localDialogues");
  } else {
    return new Error("No local dialogues found you stupid mf, go fetch some");
  }
}

export function setLocalDialoguesLS(data) {
  localStorage.setItem("localDialogues", data);
}

export function getCurrentPrompt() {
  let index = getQuestionIndexLS();
  let dialogues = getLocalDialoguesLS();
}