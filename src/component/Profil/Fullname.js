import React from 'react'
import PropsTypes from 'prop-types'

const Fullname = (props,style,alert) => {
    return ( 
        <div >
          <h3>{props.name}</h3>
       {alert(props.name)}
      <p className="fst-italic" style={style}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      
</div>
     );
}
Fullname.defaultProps={name:"bk"}
Fullname.propsTypes={name:PropsTypes.string}
 
export default Fullname;