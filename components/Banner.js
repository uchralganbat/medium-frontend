import Link from 'next/link';

export default function Banner(){
    return (
        <div className=' bg-cyan-100'>
            <div className='max-w-7xl mx-auto flex items-center'>
                <div className='my-20 mx-10 space-x-3 items-center'>
                    <h1 className='text-7xl font-serif'>Stay curious.</h1>
                    <p className='text-gray-800 text-xl w-96 py-8'>Discover stories, thinking and expertise from writers on any topic.</p>
                    <Link href='/'>
                    <h1 className='text-white bg-slate-900 hover:bg-black rounded-full px-3 py-2 text-xl text-center w-44 cursor-pointer'>Start reading</h1>
                    </Link>
                </div>
                <img
                    className='hidden md:inline-flex h-32 lg:h-full' 
                    src='https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png'
                    alt=""
                />
            </div>
        </div>
    )     
}