import React, { useState } from 'react';
import './app.css';


const TemperatureConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('Celsius');
  const [convertedValue, setConvertedValue] = useState('');

  const convertTemperature = () => {
    let result;
    const temperature = parseFloat(inputValue);

    switch (selectedUnit) {
      case 'Fahrenheit':
        result = (temperature * 9/5) + 32;
        break;
      case 'Kelvin':
        result = temperature + 273.15;
        break;
     
      default:
        result = temperature;
    }

    setConvertedValue(result.toFixed(2));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUnitChange = (e) => {
    setSelectedUnit(e.target.value);
  };

  const handleConvert = () => {
    convertTemperature();
  };

  return (
    <div className="converter">
      <h2>Temperature Converter</h2>
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter temperature"
        />
        <select value={selectedUnit} onChange={handleUnitChange}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
          {/* Diğer sıcaklık birimleri için option'ları buraya ekleyebilirsiniz */}
        </select>
      </div>
      <button onClick={handleConvert}>Convert</button>
      {convertedValue && (
        <div className="result">
          <p>Converted Value: {convertedValue}</p>
        </div>
      )}
    </div>
  );
};

export default TemperatureConverter;
