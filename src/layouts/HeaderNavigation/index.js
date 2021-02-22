import PageHeader from '../../components/PageHeader'

import { useHistory } from "react-router-dom"


export default function HeaderNavigation({user, setToken}) {
  const history = useHistory()

  const signOut = () => {
    // Remove the token from local storage
    setToken("")
    history.push("/")
  }

  return (<PageHeader
    title="Social Something"
    titleClicked={() => history.push("/")}
    user={user}
    newPost={() => history.push("/newPost")}
    profile={() => history.push("/profile")}
    login={() => history.push("/login")}
    signOut={signOut}
    ></PageHeader>)
}