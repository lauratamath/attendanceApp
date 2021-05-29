import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import fireDB from './firebasea'
import '@firebase/auth'
import './css/Home.css'

const Button = ({ option, onClick }) => (
  <button type="button" onClick={onClick}>{option}</button>
)

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

const HomePage = () => {
  const history = useHistory()
  const actualUsername = localStorage.getItem('actualUsername')
  const db = fireDB.firestore()
  const kim = db.collection('students').doc('18324')
  /* const julian = db.collection('students').doc('19343')
  const june = db.collection('students').doc('19234') */

  kim.onSnapshot((response) => {
    document.getElementById('students').append(
      <ul id="studients">
        <li
        /* onClick={cameToClass} */>
          $
          {response.data().name}
          $
          {response.data().surname}
          $
          {response.data().assistance ? '&check;' : '&times'}
        </li>
      </ul>,
    )
  })

  Window.cameToClass = () => {
    kim.update({ assistance: true })
  }

  return (
    <div>
      <h1>
        Welcome &nbsp;
        { actualUsername}
      </h1>
      <h2>Asistencia de Salud pública</h2>
      <ul id="studients" />
      <Button option="❌" onClick={() => history.push('/')}>
        firebase.auth().signOut()
      </Button>
    </div>
  )
}

export default HomePage
