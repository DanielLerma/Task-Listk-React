import PropTypes from 'prop-types';
import Button from './Button';

const Header = (props) => {

    return (        
        <header className="header">
            <h1>{props.title}</h1>
            <Button text={props.showAdd ? "Close" : "Add"} color={props.showAdd ? "red" : "green"} onClick={props.onAdd}></Button>
        </header>                    
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,

}

export default Header
