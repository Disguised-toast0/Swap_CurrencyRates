import React, { useState } from 'react'

const Input = ({
    Label,
    options=[],
    amount,
    onAmountChange,
    OnCurrencyChange,
    selectedCurrency = "usd",
    AmountDisabled = false,
    currencyDisabled = false,
    className = ""
}) => {
  

  return (
    <>
      <div className='sm:flex sm:justify-center sm:items-center border-4 border-white/40 border-solid rounded-md text-white' >
        <div className='ml-2 mt-1'>
            <label className='text-white/50'> {Label}</label>
            <div>
            <input
                className="outline-none sm:w-50 md:w-150 bg-transparent py-4 text-xl px-2 rounded-md"
                type='number'
                value={Math.round(amount*100)/100}
                disabled = {AmountDisabled}
                onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                placeholder='Amount'
                />
            </div>
        </div>
        <div className='sm:flex flex-col mr-2 w-1/2 ml-2'>
            <p className='mb-5 text-white/50'>Currency Type</p>
            <select 
            className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedCurrency}
            onChange={(e)=> OnCurrencyChange && OnCurrencyChange(e.target.value)}
            disabled={currencyDisabled}
             >
               {options.map((currency)=>(
                <option 
                className='bg-black/30 backdrop-blur-md text-white'
                key={currency} value={currency}>{currency}</option>
               ))}
            </select>
        </div>
      </div>
    </>
  )
}

export default Input
