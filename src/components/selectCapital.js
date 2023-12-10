import { useState } from "react";
const SelectedCapital = ()=>{
    const [selectCuntry,setSelectedCountry] = useState("");
    const [selectCapital, setSelectedCapital] = useState("");
    const countries = [
        {
            name : "India",
            capital : "delhi"
        },
        {
            name : "UK",
            capital : "London"
        },
        {
            name : "US",
            capital : "washinggataon DC"
        },
        {
            name : "Bangladesh",
            capital : "Dhaka"
        }
    ]
    const countryHandler = (e)=>{
        let selectedCountryData = e.target.value;
        //console.log(selectedCountry)
        setSelectedCountry(selectedCountryData);
        let selectedData = countries.find(data=>data.name==selectedCountryData)
       // console.log(selectedData)

        setSelectedCapital(selectedData?selectedData.capital:"")
        console.log(selectCapital)

    }
    
   
    return(
        <div className="Main">
            <div className="countryDropdown">
                <label>country</label>
                <select onChange={countryHandler}>
                    <option>Select country</option>
                    {countries.map((country,index)=>{
                        return(
                        <option key={index}>{country.name}</option>
                        )
                    })}
                </select>
            </div>
            <div className="capitalDropdown">
            <label>capital</label>
                <select value={selectCapital}>
                    <option value={''}>Please Select contry first</option>
                    <option>{selectCapital}</option>
                </select>
            </div>
        </div>
    )
}
export default SelectedCapital;