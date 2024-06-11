import { Fragment } from "react"
import Input from "./Input"

const Form = ({ labels, inputs,onClick}) => {
    const dataForm = labels.map((label, index) => {
        return (
            <Fragment key={index}>
                <label>{label}:</label>
                <Input
                    type = {inputs[index].type}
                    placeholder={inputs[index].placeholder}
                    value={inputs[index].value}
                    onChange={inputs[index].onChange}
                />
            </Fragment>
        )
    })

    return (
        <form>
            {dataForm}
            <button type='submit' onClick={onClick}>Login</button>
        </form>
    )
}

export default Form