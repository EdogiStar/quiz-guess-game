import { useState } from 'react'
import questions from '../data/questions'

function QuestionCard(){ 
    // selected option 
    const [selectedOption, setSelectedOption] = useState(null);
    
    // quiz completed or not
    const [ quizCompleted, setQuizCompleted ] = useState(false);
    
    // score state
    const [currentScore, setCurrentScore] = useState(0);
    
    // State for current question index
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    
    //current question 
    const currentQuestion = questions[currentQuestionIndex];
    
    // Handle answer click
    const handleAnswerClick = (selectedOption) => {
          setSelectedOption(selectedOption);
      
    };
    // Handle next question 
    const handleNextQuestion = () => 
        {
            // update score
            if (selectedOption === currentQuestion.answer) {
              setCurrentScore(prev => prev + 1);
            }
            setSelectedOption(null);
    
            if(currentQuestionIndex < questions.length - 1){
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            }else{
                setQuizCompleted(true);
            }
        }
        // restart quiz
    const handleRestartQuiz = () =>{
        setCurrentQuestionIndex(0);
        setCurrentScore(0);
        setQuizCompleted(false);
    }
        
        if (quizCompleted) {
          return (
            <div className="pt-10 text-center text-2xl font-bold">
               Quiz Completed 🎉
               <br />
               Score: {currentScore} / {questions.length }
               <br />
               <button onClick={handleRestartQuiz} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                 Restart
               </button>
            </div>
          );
        }
        
    return (
        <>
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 space-y-6 md:mx-auto">
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 leading-snug">
                {currentQuestion.question}
              </h2>
            </div>
            
            <div className="flex flex-col gap-4">
              {currentQuestion.options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerClick(option)} className={`w-full text-left p-3 rounded-lg transition duration-200
                  ${
                     selectedOption === option ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white"
                  }`}
                    > {option}
                </button>
           ))}
            </div>
            <button onClick={handleNextQuestion} className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200">
              Next Question
            </button>
          </div>
        </>
    )
}

export default QuestionCard;