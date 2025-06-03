import {collection, addDoc} from "firebase/firestore";
import {NextResponse} from "next/server";
import {db} from "../../../db/firebaseConfig";

export async function POST(request: Request) { //creation et ajout d'un nouvel utilisateur dans firebase
    try{
        const {email, password} = await request.json();
        const bcrypt = require("bcryptjs");
        const hashedPassword = await bcrypt.hash(password, 10);
        const userCollection = collection(db, "users");
        const userRef = await addDoc(userCollection, {
            email: email,
            password: hashedPassword,
        });
       
        return NextResponse.json({succes: "compte ajouté", userId: userRef.id});

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}