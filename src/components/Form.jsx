import React from "react"
import Input from "./Input"

const Form = ({ labels, inputs,onClick}) => {
    const dataForm = labels.map((label, index) => {
        return (
            <React.Fragment key={index}>
                <label>{label}:</label>
                <Input
                    placeholder={inputs[index].placeholder}
                    value={inputs[index].value}
                    onChange={inputs[index].onChange}
                />
            </React.Fragment>
        )
    })

    return (
        <form>
            {dataForm}
            <button type='submit' onClick={onClick}>Send Form</button>
        </form>
    )
}

export default Form