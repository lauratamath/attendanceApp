import React from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import PropTypes from 'prop-types'
import '@firebase/auth'
import './css/Login.css'

const Button = ({ option, onClick }) => (
  <button type="button" onClick={onClick}>{option}</button>
)

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

const LogIn = () => {
  const history = useHistory()

  const login = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(googleAuthProvider).then((response) => {
      const actualUsername = response.user.displayName
      localStorage.setItem('actualUsername', actualUsername)

      history.push('/clasestaught')
    })
  }
  return (
    <div>
      <h1>Welcome to this AttendanceApp</h1>
      <Button option="Login with Google account" onClick={login} />
    </div>
  )
}

export default LogIn
