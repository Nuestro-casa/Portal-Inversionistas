'use Client'

import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../ConfigFirebase/firebase';



export const authContext = createContext();
{/*El useAuth es un hook personalizado que al llevarlo a otros componentes tiene toda la info del contexto */}
export const useAuth = () => {
    
    const context = useContext(authContext);

    if (!context) throw new Error('useAuth debe estar dentro del proveedor');
    return context;
}

// eslint-disable-next-line react/prop-types
export  default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    //crea el usuario con el correo y la contraseña en firebase
    const singUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    //se crea la función de login para el inicio de sesión
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    //se crea la función de logout para el cierre de sesión
    const logout = () => auth.signOut(auth);

    useEffect(() => {
// se crea el observable para que firebase sepa cuando hay un cambio en el estado de la autenticación del user
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser);
           setLoading(false);
         //  console.log('user', currentUser)

        })
        return () => unsubscribe();
    }, [])


    return (
        <authContext.Provider value={{ singUp, login, user, logout, loading }}>
            {children}
        </authContext.Provider>
    )

}