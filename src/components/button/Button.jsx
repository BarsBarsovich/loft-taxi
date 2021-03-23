import './Button.css'

const Button = ({title}) => {
    return (
        <button className='button' type='submit'>
            {title}
        </button>
    );
};

export default Button;

