import firebase from 'firebase'

const config = {
        apiKey: "AIzaSyAMY7eQYb7DAH2py-XBQmTrON4czqne1VU",
        authDomain: "gameboss-69d98.firebaseapp.com",
        databaseURL: "https://gameboss-69d98.firebaseio.com",
        projectId: "gameboss-69d98",
        storageBucket: "gameboss-69d98.appspot.com",
        messagingSenderId: "740681776586",
        appId: "1:740681776586:web:dc7205998bff36d0cae333",
        measurementId: "G-J1C8ZZ4SB0"
}
const fire = firebase.initializeApp(config)
export default fire;