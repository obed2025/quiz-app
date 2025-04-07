import { getQuestions } from './utils.js';
import { ERROR_MESSAGES } from './consts.js';

const questions = getQuestions();
document.addEventListener('DOMContentLoaded', generateCard);

const validateAnswer = (userInput, answer) => userInput === answer;

function generateCard() {
  try {
    const result = questions.next().value;

    if (!result) {
      setTimeout(() => (document.location = ''), 2e3);
      throw new Error(ERROR_MESSAGES[0].msg);
    }

    const {
      question: { question, options, answer },
      totalQuestions,
      index,
    } = result;

    document.body.querySelector('#app').innerHTML = `
      <div class="card">
        <div class="progress-bar">
          <div class="progress"></div>
        </div>
        <div class="question-container">${question}</div>
        <form class="options">
          ${options
            .map(
              (option, i) => `
            <label class="option" for="option-${i}">
              <input type="radio" name="option" id="option-${i}" value="${option}">
              ${option}
            </label>
          `
            )
            .join('')}
          <button type="submit" class="submit">
            ${index < totalQuestions - 1 ? 'Next' : 'Submit'}
          </button>
        </form>
      </div>
    `;

    const form = document.querySelector('form.options');

    document.querySelector('.progress').style.width = `${
      ((index + 1) / totalQuestions) * 100
    }%`;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const checkedInputEl = form.querySelector('label input:checked');

      if (!checkedInputEl) {
        ERROR_MESSAGES[1].alert(
          `
            <h1 style="margin-bottom: 1rem;">Input required</h1>
            <p>You have to choose a correct answer.</p>
          `,
          'error'
        );
        return;
      }

      form.querySelector('button.submit').style.display = 'none';

      const musicLocation = validateAnswer(checkedInputEl.value, answer)
        ? '../assets/correct.mp3'
        : '../assets/wrong_5.mp3';
      const music = new Audio(musicLocation);

      music.play();

      music.addEventListener('ended', generateCard);
    });
  } catch (e) {
    const { message } = e;

    if (message === ERROR_MESSAGES[0].msg)
      ERROR_MESSAGES[0].alert(
        `
          <h1 style="margin-bottom: 1rem;">END!</h1>
          <p>This is the end of the quiz</p>
        `,
        'info'
      );
  }
}
