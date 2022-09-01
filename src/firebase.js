import {initializeApp} from 'firebase/app';
import {getFirestore, getDocs, collection, doc, getDoc, query, orderBy} from 'firebase/firestore';
import {sortTypes} from './Components/Catalog/CategoryNav/sortType';

const firebaseConfig = {
    apiKey: 'AIzaSyBOu4cddgXYCzpbKA7_TOuajkNPtkzfm7I',
    authDomain: 'pizzastore-b64cb.firebaseapp.com',
    databaseURL: 'https://pizzastore-b64cb-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'pizzastore-b64cb',
    storageBucket: 'pizzastore-b64cb.appspot.com',
    messagingSenderId: '633548974249',
    appId: '1:633548974249:web:6fc20f6abfee5d945be1b8'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getCategories = async () => {
    const docRef = doc(db, 'categories', 'categories');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log('No such document!');
    }
};

export const loadPage = async (sortType) => {
    let q;

    switch (sortType) {
        case sortTypes[0] : {
            q = query(collection(db, 'pizzas'), orderBy('picture'));
            break;
        }
        case sortTypes[1] : {
            q = query(collection(db, 'pizzas'), orderBy('price'));
            break;
        }
        case sortTypes[2] : {
            q = query(collection(db, 'pizzas'), orderBy('name'));
            break;
        }
        default: {
            q = query(collection(db, 'pizzas'));
            break;
        }
    }

    const documentSnapshots = await getDocs(q);
    return documentSnapshots.docs.map(doc => doc.data());
};
