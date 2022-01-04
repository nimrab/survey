import {
    surveyReducer,
    changeSurveyItem,
    switchSetAnswer,
    changeCorrectAnswerCount,
    InitialStateType, changeIsChosenAnswer
} from "./surveyReducer";


let startState: InitialStateType

beforeEach(() => {

    startState = {
        surveyQuestions: [
            {
                id: 1,
                question_sub_1: 'What is the recommended amount of one trade, according to the basic rule of money management?',
                question_color: '',
                question_sub_2: ''
            }
        ],
        surveyAnswers: [
            {
                id: 1,
                answers: [
                    {id: 1, answer: '3%', isCorrect: false, isChosen: false},
                    {id: 2, answer: '5%', isCorrect: true, isChosen: false},
                    {id: 3, answer: '10%', isCorrect: false, isChosen: false},
                ]
            }
        ],
        currentSurveyItem: 0,
        answerIsSet: false,
        correctAnswerCount: 0
    }
})


test('survey screen number should be changed', () => {

    const action = changeSurveyItem(1)
    const endState = surveyReducer(startState, action)

    expect(endState.currentSurveyItem).toBe(1)

})
test('answerIsSet should change the value', () => {

    const action = switchSetAnswer(true)
    const endState = surveyReducer(startState, action)

    expect(endState.answerIsSet).toBe(true)
})
test('correct answer count should be changed', () => {

    const action = changeCorrectAnswerCount(4)
    const endState = surveyReducer(startState, action)

    expect(endState.correctAnswerCount).toBe(4)

})
test('isChosen answer should change the value', () => {

    const action = changeIsChosenAnswer(1, 1,true)
    const endState = surveyReducer(startState, action)

    expect(endState.surveyAnswers[0].answers[0].isChosen).toBe(true)
    expect(endState.surveyAnswers[0].answers[1].isChosen).toBe(false)

})