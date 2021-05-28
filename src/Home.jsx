import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import PropTypes from 'prop-types'
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
  const db = firebase.firestore()
  const collection = db.collection('clases')
  const [clases, setClases] = useState([])

  useEffect(() => {
    collection.onSnapshot((snapshot) => {
      const allClases = []
      snapshot.forEach((item) => {
        const datos = item.data()
        datos.id = item.id
        allClases.push(datos)
      })

      setClases(allClases)
    })
  }, [])

  const actualClass = (students) => {
    localStorage.setItem('actualCourse', students)
    history.push('/assistance')
  }

  return (
    <div>
      <h1>
        Welcome
        { actualUsername}
      </h1>

      {clases.map((result) => (
        <Button
          option={result.students}
          key={result.id}
          onClick={() => actualClass(result.students)}
        />
      ))}

      <Button option="❌" onClick={() => history.push('/')} />
    </div>
  )
}

export default HomePage
