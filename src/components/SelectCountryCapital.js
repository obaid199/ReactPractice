import React, { useState } from 'react';

const CountryDropdown = () => {
  // Sample data for countries and capitals
  const countries = [
    { name: 'USA', capital: 'Washington, D.C.' },
    { name: 'Canada', capital: 'Ottawa' },
    { name: 'United Kingdom', capital: 'London' },
    // Add more countries and capitals as needed
  ];

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCapital, setSelectedCapital] = useState('');

  const handleCountryChange = (event) => {
    const selectedCountryName = event.target.value;
    setSelectedCountry(selectedCountryName);

    // Find the capital for the selected country
    const selectedCountryData = countries.find(country => country.name === selectedCountryName);
    if (selectedCountryData) {
      setSelectedCapital(selectedCountryData.capital);
    } else {
      setSelectedCapital('Capital not found');
    }
  };

  return (
    <div>
      <label htmlFor="countryDropdown">Select a Country:</label>
      <select id="countryDropdown" onChange={handleCountryChange} value={selectedCountry}>
        <option value="" disabled>Select a country</option>
        {countries.map(country => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      <div>
        <label htmlFor="capitalDropdown">Capital:</label>
        <select id="capitalDropdown" value={selectedCapital} disabled>
        <option value="" disabled>No country is selected</option>
          <option value={selectedCapital}>{selectedCapital}</option>
        </select>
      </div>
    </div>
  );
};

export default CountryDropdown;
