// Firebase config

import { initializeApp } from 'firebase';

const app = initializeApp({

    apiKey: "AIzaSyCuFaF_D3QUJilGKHPScS7p1YJUNxhE86Y",
    authDomain: "vue-contact-list-639f8.firebaseapp.com",
    databaseURL: "https://vue-contact-list-639f8.firebaseio.com",
    projectId: "vue-contact-list-639f8",
    storageBucket: "",
    messagingSenderId: "274984235994"
})

export const db = app.database();

export const namesRef = db.ref('names');