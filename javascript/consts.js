import { showAlert } from './utils.js';

export const QUESTIONS = [
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
    answer: 'Mars',
  },
  {
    question: 'What is the largest organ in the human body?',
    options: ['Brain', 'Heart', 'Liver', 'Skin'],
    answer: 'Skin',
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      'Charles Dickens',
      'William Shakespeare',
      'Mark Twain',
      'Jane Austen',
    ],
    answer: 'William Shakespeare',
  },
  {
    question: 'What is the capital of Rwanda?',
    options: ['Nairobi', 'Dar es Salaam', 'Kigali', 'Kampala'],
    answer: 'Kigali',
  },
  {
    question: 'In which year did World War II end?',
    options: ['1945', '1939', '1918', '1950'],
    answer: '1945',
  },
];

export const ERROR_MESSAGES = [
  {
    msg: 'End of the quiz',
  },
  {
    msg: 'Input Required',
  },
].map((el) => ({ ...el, alert: showAlert }));
