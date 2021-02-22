import * as network from '../../network'

import { useHistory } from "react-router-dom"

import LoginForm from '../../components/LoginForm'

export default function LoginPage({setToken}) {
  const history = useHistory()

  async function login(details) {
    let result 
    if (details.type === "login") {
      result = await network.login(details)
    }
    if (details.type === "signUp") {
      result = await network.signUp(details)
    }

    // Store the JWT into local storage
    setToken(result.accessToken)
    history.push("/")
  }

  return (
    <LoginForm
    onSubmit={login}
    onClose={() => history.push("/")}
    ></LoginForm>
  )
}