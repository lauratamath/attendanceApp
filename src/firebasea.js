/* eslint-disable import/no-extraneous-dependencies */
import firebase from 'firebase/app'
import 'firebase/firestore'

const configFirebase = {
  apiKey: 'AIzaSyBjYCgZ9AXq7-OGKyHondjdrUvvrFenlX4',
  authDomain: 'assistenceapp.firebaseapp.com',
  databaseURL: 'https://assistenceapp-default-rtdb.firebaseio.com',
  projectId: 'assistenceapp',
  storageBucket: 'assistenceapp.appspot.com',
  messagingSenderId: '106722925767',
  appId: '1:106722925767:web:7de8a978daef1b2557b2e2',
  measurementId: 'G-9QM6QN2HSK',
}

const fireDB = firebase.initializeApp(configFirebase)
export default fireDB
