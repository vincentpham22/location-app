"use client";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../db/firebaseConfig';
import { Button } from '@/components/ui/button';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
}

const formSchema = z.object({
    email: z.string().min(1, { message: 'ce champ est requis' }).email("format non valide").max(300, { message: "votre email doit faire moins de 300 caractères" }),
    password: z.string().min(6, { message: 'le mdp doit contenir 6 caractères' }),
    confirmPassword: z.string().min(6, { message: 'le mdp doit contenir 6 caractères' }),
}).refine(({ confirmPassword, password }) => {
    return confirmPassword === password;
}, {
    message: "les mots de passe ne correspondent pas",
    path: ["confirmPassword"]
})

async function addUserToFirestore(userId: string, email: string) {
    try {
        const userRed = doc(db, "users", userId);
        await setDoc(userRed, {
            email: email,
        });
    } catch (error) {
        console.error(error);
    }
}

export default function FormRegister() {

    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const user = userCredential.user;
            await addUserToFirestore(user.uid, values.email);
            router.push("/dashboard");
            toast.success("Inscription réussie");

        } catch (error: any) {
            toast.error(error.message);
        }
    }


    return (

        <>
            <div className="h-screen w-full flex items-center justify-center flex-col gap-8">
                <h1 className="text-4xl text-gray-700 uppercase font-black">Inscription</h1>

                <form onSubmit={handleSubmit(onSubmit)} className='max-w-[800px] flex flex-col gap-2 bg-slate-50 p-5 rounded-md shadow-md'>
                    <label className='text-slate-900'>Email</label>
                    <input {...register('email')} type="email" className='h-10 border border-slate-900 p-4 rounded-md' />
                    {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
                    <label className='text-slate-900'>Mot de passe</label>
                    <input {...register('password')} type="password" className='h-10 border border-slate-900 p-4 rounded-md' />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    <label className='text-slate-900'>Confirmer le Mot de passe</label>
                    <input {...register('confirmPassword')} type="password" className='h-10 border border-slate-900 p-4 rounded-md' />
                    {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
                    <Button type='submit' className='bg-yellow-600 px-3 py-1.5 text-white my-3 rounded-md hover:bg-yellow-700'>Inscription</Button>

                    <a href="#" onClick={() => router.push('/login')} className='text-red-500 hover:text-red-600'>Déjà un compte ? Connectez-vous</a>
                </form>
            </div>
        </>
    )
}
