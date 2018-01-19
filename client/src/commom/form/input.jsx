import React from 'react'
// Redux form distrubui no spread operator todas os itens que fazem parte do meu input
export default props => (
    <input {...props.input}
            className='form-control'
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            type={props.type}/>
)