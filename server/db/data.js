db.quizes.drop();
db.quizes.insert({
    name: 'IrelandQuiz',
    icon: 'quizz1/quizz1.jpg',
    keywords: ['ireland', 'europe'],
    questions: [{
        question: 'In which city is Guinness beer factory?',
        video: null,
        txtAnswers: ["Dublin", "Cork", "Dundalk", "Athlonem"],
        imgAnswers: [],
        solutions: [0],
        points: 3
    },
    {
        question: 'A savoury blood pudding with a blend of onions, pork fat, oatmeal and pigs blood is called:',
        video: null,
        txtAnswers: ["uster fry", "black pudding", "sandwich", "english breakfast"],
        imgAnswers: [],
        solutions: [1],
        points: 3
    },
    {
        question: 'When Irish dance born?',
        video: null,
        txtAnswers: ["1888", "1893", "1889", "1906"],
        imgAnswers: [],
        solutions: [1],
        points: 3
    },
    {
        question: 'Where is Eyre Square?',
        video: null,
        txtAnswers: ["Donegal", "Carlingford", "Dublin", "Galway"],
        imgAnswers: [],
        solutions: [3],
        points: 3
    }]
})
