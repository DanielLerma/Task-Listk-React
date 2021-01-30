import PropTypes from 'prop-types';

const Button = (props) => {
    
    const onClick = () => {
        console.log("x");
    }

    return (
        
        <button className="btn" style={{backgroundColor:props.color}}
        onClick={props.onClick}>
            {props.text}
        </button>            
        
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string, 
    onClick: PropTypes.func
}

export default Button
