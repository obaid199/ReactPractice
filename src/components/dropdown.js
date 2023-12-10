import { useState } from "react"
const DropDown = ()=>{
    let colorArray = [
        {
            name : "Red",
            value :"red"
        },
        {
            name : "Blue",
            value :"blue"
        },
        {
            name : "Green",
            value :"green"
        },
        {
            name : "Yelow",
            value :"yellow"
        }
    ]
    const [color,setColor] = useState("red")
    const onChangeHandler = (e)=>{
        setColor(e.target.value)
    }
    return(
        <div className="container">
            <div className="box1" style={{backgroundColor:color}}></div>
            <div className="colorDropdown">
                <select onChange={onChangeHandler}>
                    {
                        colorArray.map((item ,index)=>{
                            return(
                                    <option className="option" key={index}>{item.value}</option>      
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}
export default DropDown