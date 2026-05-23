

function QuestionCard(){
    return (
        <>
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 space-y-6">
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 leading-snug">
                What is the capital of France?
              </h2>
            </div>
            
            <div className="flex flex-col gap-4">
              <button className="w-full text-left bg-gray-100 p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200">
                London
              </button>
              <button className="w-full text-left bg-gray-100 p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200">
                Abuja
              </button>
              <button className="w-full text-left bg-gray-100 p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200">
                Paris
              </button>
              <button className="w-full text-left bg-gray-100 p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200">
                Madrid
              </button>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200">
              Next Question
            </button>
          </div>
        </>
    )
}

export default QuestionCard;