import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};


export default function LoginModal({ show , toggleRegister, toggleLogin }) {
    
    return (
        <Modal
            isOpen={show}
            onAfterOpen={() => console.log('popup has opened')}
            onRequestClose={toggleLogin}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
        <div className='w-full max-w-md m-auto bg-white rounded-lg shadow-default py-10 px-16'>
            <h3 className='text-xl text-center pb-5'>Welcome back.</h3>
            <div className='items-center'>
                <form>
                    <div>
                        <input 
                            name='username'
                            placeholder='Username'
                            className='w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
                        />
                    </div>
                    <div>
                        <input
                            name='password'
                            placeholder='Password'
                            className='w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='text-white bg-green-600 rounded-full px-3 py-2 w-44 hover:bg-green-700'>Sign in</button>
                    </div>
                </form>
                {/* <div>
                    <button onClick={() => signIn()}>Sign in</button>
                </div> */}
                <div>
                    <h3 className='text-center pt-5'>No account? <button className='text-green-600 hover:text-green-700 font-medium' onClick={() => { toggleLogin(); toggleRegister();}}>Create one</button></h3>
                </div>
                <div>
                    <p className='text-gray-600 text-xs text-center pt-10'>Click “Sign In” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
                </div>
            </div>
        </div>
        </Modal>
    )
}