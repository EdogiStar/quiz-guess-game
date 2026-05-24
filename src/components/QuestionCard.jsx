import { useState } from 'react'
import questions from '../data/questions'

function QuestionCard(){
    // State for current question index
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    //current question 
    const currentQuestion = questions[currentQuestionIndex];
    
    // Handle answer click
    const handleAnswerClick = (selectedOption) => {
    console.log(selectedOption);

    // Temporary testing
    alert(`You selected: ${selectedOption}`);
    
    // Handle next question 
    const handleNextQuestion = () => 
        {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };
    return (
        <>
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 space-y-6">
            
            <div>
            { /* Questions  */}
              <h2 className="text-2xl font-semibold text-gray-800 leading-snug">
                {currentQuestion.question}
              </h2>
            </div>
            { /* Options */}
            <div className="flex flex-col gap-4">
              {
                  currentQuestion.options.map((option, index ) => (
                      <button key={index} onClick={() => handleAnswerClick(option)} className="w-full text-left bg-gray-100 p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200">
                        {option}
                      </button>
                  ))
              }
            </div>
            { /*  Next Question  */}
            <button onClick={handleNextQuestion} className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200">
              Next Question
            </button>
          </div>
        </>
    )
}

export default QuestionCard;