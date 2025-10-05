import { use, useState } from "react";
import Input from "./components/Input";
import {ApiHandler} from "./hooks/api";

function App() {
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [Amount,setAmount] = useState(0)
  const [convertedAmount,setconvertedAmount] = useState(0)

  const GetCurrency = ApiHandler(from);
  const options = Object.keys(GetCurrency);

  const ConvertAmount = () =>{
    setconvertedAmount(Amount*GetCurrency[to])
  }

  const SwapCurrency = ()=>{
    setfrom(to)
    setto(from)
    setAmount(convertedAmount)
    setconvertedAmount(Amount)
  }

  return (
    <div
      className="sm:flex flex-col flex sm:h-screen h-screen items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/7299506/pexels-photo-7299506.jpeg)`,
      }}
    >
      <div className=" flex-col justify-center items-center sm:p-20 p-10 bg-white/20 backdrop-blur-lg rounded-2xl shadow-4xl">
        <h1 className="text-white sm:text-6xl text-xl sm:mb-2 hover:text-purple-300 hover:duration-300 ">CoinSwap</h1>
        <h1 className="text-white/70 sm:text-2xl text-sm sm:mb-8 sm:ml-2 mb-2 ">Convert Your Currency Rates</h1>

        <div className="sm:flex justify-center items-center">
          <form onSubmit={(e)=>{
            e.preventDefault()
            ConvertAmount()
          }}>
            <div>
              <Input 
               Label="From"
               options={options}
               selectedCurrency={from}
               amount = {Amount}
               onAmountChange={(value)=>setAmount(value)}
               OnCurrencyChange={(currency)=>setfrom(currency)}
               />
            </div>

            <div className="flex justify-center">
              <button
                className="border text-white px-10 py-2 my-2 relative bg-white/20 backdrop-opacity-5 hover:bg-black rounded-md hover:duration-300"
                onClick= {(e)=>{
                  e.preventDefault()
                  SwapCurrency()
                }}
              >
                Swap
              </button>
            </div>

            <div>
              <Input 
              Label="To" 
              options={options} 
              amount = {convertedAmount}
              OnCurrencyChange={(currency)=>setto(currency)}
              selectedCurrency={to}
              AmountDisabled
              />
            </div>

            <div className="">
              <button 
              className="w-full bg-white/20 backdrop-opacity-10 text-white py-4 rounded-md mt-10 flex items-center justify-center hover:bg-black hover:duration-300 ease-in-out"
              type="submit"
              >
                Convert
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
