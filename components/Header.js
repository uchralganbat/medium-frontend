import Link from 'next/link';
import LoginModal from '../components/LoginModal';  
import RegisterModal from '../components/RegisterModal';
import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';


export default function Header() {
    const { data: session } = useSession()
    const [modal, setModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);

    const Toggle = () => {
        setModal(!modal);
    }
    const ToggleRegister = () => {
        setRegisterModal(!registerModal)
    }
    
    return (
        <header className=' bg-cyan-100'>
            <div className='px-5 py-5 flex justify-between max-w-7xl mx-auto'>
                <div className='flex items-center space-x-5'>
                    <Link href='/'>
                        <img
                            className='w-44 object-contain cursor-pointer'
                            src='https://links.papareact.com/yvf'
                            alt=''
                        />
                    </Link>
                    
                </div>
                <div className='flex items-center space-x-5'>
                    { !session && <h3 onClick={() => signIn()}>Sign in</h3>}
                    <h3 onClick={Toggle} className='cursor-pointer hover:underline'>Sign in</h3>
                    <h3 onClick={ToggleRegister} className='bg-slate-900 hover:bg-black text-white rounded-full px-4 py-1 cursor-pointer'>Get started</h3>
                </div>
            </div>
            <LoginModal show={modal} toggleLogin={Toggle} toggleRegister={ToggleRegister}/>
            <RegisterModal showRegister={registerModal} toggleLogin={Toggle} toggleRegister={ToggleRegister}/>
        </header>
    )
}