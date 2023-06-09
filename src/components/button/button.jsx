import './button.css';

const Button = ({ text, onClick }) => {
    return (
        <button className="login-button" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
