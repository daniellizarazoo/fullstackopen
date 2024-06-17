import Form from "./Form"

const loginForm = ({
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => {
    return(
        <>
        <Form 
      labels={["Username","Password"]}
      inputs={[
        {
          placeholder: "username or email",
          value: {username},
          onChange:{handleUsernameChange}
        },
        {
          type:"password",
          placeholder: "password",
          value: {password},
          onChange: {handlePasswordChange}
        }
      ]}
      onClick = {handleSubmit}
    />
    <label>
      <input type="checkbox" checked={rememberMe} onChange={(event) =>{setRememberMe(event.target.checked)}}/>
      remember me?
    </label>
    </>
    )
}