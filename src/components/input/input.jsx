import "./input.css"
import { useState } from "react";

const Input = ({fieldLabel, isPassword,onChange}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const handleInputChange = (event) => {
        onChange(event.target.value);
    };
    return (
        <div className="input-wrapper">
            <label htmlFor="myInput" className="input-label">{fieldLabel}</label>
            <div className="input-group">
                <input 
                    id="myInput" 
                    type={isPassword && !isPasswordVisible ? "password" : "text"} 
                    className="text-input" 
                    onChange={handleInputChange}
                />
                {isPassword && (
                    <div onClick={togglePasswordVisibility} className="password-toggle">
                        {isPasswordVisible ? 'X' : '👁'}
                    </div>
                )}
            </div>
        </div>  
    )
}
export default Input;
