import { useState } from 'react'



import InputBox from './components/Inputbox'
import UseCurrencyInfo from './customhook/UseCurrencyInfo'

function App() {
    const [amount,setAmount]=useState("")
    const [from,setFrom]=useState("dkk")
    const [to,setTo]=useState("npr")
    
    const[convertedamount,setConvertedAmount]=useState(0)
    const currencyInfo=UseCurrencyInfo(from)
    const option=Object.keys(currencyInfo)
    

    const convert=()=>setConvertedAmount((amount*currencyInfo[to]).toFixed(3))

    const swap=()=>{
        setFrom(to)
        setTo(from)
        setAmount(convertedamount)
        setConvertedAmount(amount)
    }
  
    

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/17804518/pexels-photo-17804518/free-photo-of-lake-in-mountains-in-switzerland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyDefault={from}
                            currencyOptions={option}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            onAmountChange={(amount)=>setAmount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            currencyOptions={option}
                            currencyDefault={to}
                            amount={convertedamount}
                            onCurrencyChange={(currency)=>setTo(currency)}
                
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}
export default App
