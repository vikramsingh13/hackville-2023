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
  if(dialogues[index] !== undefined && dialogues[index].prompt !== undefined){
    console.log("PROMPT: " + dialogues[index].prompt);
    return dialogues[index].prompt;
  } else {
    return false;
  }
}

export function getCurrentText() {
  let index = getQuestionIndexLS();
  let dialogues = JSON.parse(getLocalDialoguesLS());

  if(dialogues[index] !== undefined && dialogues[index].text !== undefined){
    return dialogues[index].text;
  } else {
    return "";
  }
}

export function isCheckCode() {
  let index = getQuestionIndexLS();
  let dialogues = JSON.parse(getLocalDialoguesLS());

  if(dialogues[index] === undefined) {
    return false;
  }
  else if(dialogues[index].checkCode === undefined){
    return false;
  } else {
    return true;
  }
}