import { QUESTIONS } from './consts.js';

export function* getQuestions() {
  let index = 0;
  const totalQuestions = QUESTIONS.length;

  while (index < totalQuestions) {
    yield { question: QUESTIONS[index], totalQuestions, index };
    index++;
  }
}

export function showAlert(content, type) {
  const popover = document.body.querySelector('#mypopover');
  const popoverContent = popover.querySelector('#mypopover-content');
  popoverContent.innerHTML = content;
  popover.className = type;
  popover.showPopover();
}
