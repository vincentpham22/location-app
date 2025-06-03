"use client"

import { SessionProvider } from "next-auth/react"; 

const SessionWrapper = ({children}: {children: React.ReactNode}) => {//composant qui englobe l'app pour la gestion de session avec next-auth
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default SessionWrapper;