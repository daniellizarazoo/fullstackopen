import Form from "./Form"

const LoginForm = ({
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password,
    rememberMe,
    setRememberMe
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
      <input type="checkbox" checked={rememberMe} onChange={setRememberMe}/>
      remember me?
    </label>
    </>
    )
}

export default LoginForm