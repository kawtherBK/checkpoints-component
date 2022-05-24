import React from 'react'
import PropsTypes from 'prop-types'

const Fullname = ({alertme,style,name}) => {
    return ( 
        <div >
          <h3>{name}</h3>
       {alertme(name)}
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