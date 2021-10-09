import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';


const onClick = ()=>{
    console.log("from Onclick");
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Button color="red" text="ADD" onClick={onClick} />
        </div>
    )
}
// Header.defaultProps = {
//     title : "task tracker"
// }
// const headingStyle = {
//     color : 'red'
// }
Header.propTypes = {
    title : PropTypes.string
}

export default Header
