import React from 'react'


function CurrencyRow(props) {
    const { currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount } = props

  return (
    <div className='container-cr'>
        <input type="number" className="input" value={amount} onChange={onChangeAmount} />
        <select value={selectedCurrency} onChange={onChangeCurrency}>
            {currencyOptions.map((option) => (
                <option key={option.id} value={option}> {option} </option>
            ))}
        </select>
    </div>
  )
}

export default CurrencyRow