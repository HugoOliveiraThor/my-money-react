import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <label htmlFor={props.name}>{props.label}</label>
        <input {...props.input} className='form-control'
            placeholder={props.placeholder}
            readOnly={props.readOnly} type={props.type}/>
    </Grid>
)
