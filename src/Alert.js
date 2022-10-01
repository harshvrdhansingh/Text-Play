import React from 'react'

 function Alert(props) {
  const capitalise =(word) => {
    const lower = word.lowerCase();
    return lower.charAt(0).toUpperCase ()+ lower.slice(1);
  }
  return (
<div style = {{height: '50px'}}>
        {props.alert && <div className = {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       {props.alert.type}: {props.alert.msg}
  
</div>}
</div>

  )
}
export default Alert
