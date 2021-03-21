import './Button.css'

const Button = (props) => {
    return (
        <button className='button' type='submit'>
            {props.title}
        </button>
    );
};

export default Button;

