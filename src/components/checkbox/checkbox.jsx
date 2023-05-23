import './checkbox.css';

const Checkbox = ({ label, isChecked, onCheckboxChange }) => {
    return (
        <div className="checkbox-wrapper">
            <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={onCheckboxChange} 
                className="checkbox-input"
            />
            <label className="checkbox-label">{label}</label>
        </div>
    );
}

export default Checkbox;
