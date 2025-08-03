import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const rate = 0.011;
    const result = (parseFloat(rupees) * rate).toFixed(2);
    setEuro(result);
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro && <p>Converted Amount in Euro: €{euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;
