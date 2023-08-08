const getFactorial = async (number: number) => { 
  if (Number(number) === Number(0)) {
    return 1;
  }
  let calcResult = number;
  for (let i = number-1; i > 1; i--) {
    calcResult = calcResult * i;
  }
  return calcResult;
}

interface Params {
  params: { number: number};
}

export default async function Page({ params }: Params) {  
  const factorial = await getFactorial(params.number);

  return (        
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-8 max-w-md mx-auto bg-lime-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-10 p-4">
          <div className="text-3xl text-black font-semibold flex items-center justify-center">
          {Number.isInteger(Number(factorial)) ? (
            <h1>Factorial of <strong>{params.number}!</strong></h1>
          ) : (
            <h1 className="text-red-600 mb-4">ERROR: Value is not a integer</h1>
          )}           
          </div>
          <div className="block mt-1 text-9xl leading-tight font-medium text-black flex items-center justify-center">
            {Number.isInteger(Number(factorial)) && factorial}
          </div>
          <a href="http://localhost:3000" type="button" className="w-full text-center py-3 px-4 bg-lime-500 hover:bg-lime-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            HOME
          </a>
        </div>        
      </div>
  )
}