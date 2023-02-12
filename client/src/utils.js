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
  localStorage.setItem("localDialogues", JSON.stringify(data));
}

export function getCurrentPrompt() {
  let index = getQuestionIndexLS();
  let dialogues = JSON.parse(getLocalDialoguesLS());

  console.log(dialogues[index]);
  return dialogues[index].prompt;
}

export function getCurrentText() {
  let index = getQuestionIndexLS();
  let dialogues = JSON.parse(getLocalDialoguesLS());

  return dialogues[index].text;
}

export function isCheckCode() {
  let index = getQuestionIndexLS();
  let dialogues = JSON.parse(getLocalDialoguesLS());

  if(dialogues[index].checkCode === undefined) {
    return false;
  }
  else{
    return true;
  }
}