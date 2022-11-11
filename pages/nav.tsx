import Link from 'next/link'

export default function Nav() {
    return (
        <div className='flex flex-col bg-black text-white items-center w-screen p-4'>
        <div className='flex flex-row border-b-2 '>
            <Link href='/' className='p-2 b hover:bg-slate-500'>
                Home
            </Link>
            <Link href='/resume' className='p-2  hover:bg-slate-500'>
             Resume
            </Link>
            <Link href='/projects' className='p-2  hover:bg-slate-500'>
                Projects
            </Link>
            <Link href='/awsSend' className='p-2'>Admin</Link>
            <Link href='/toyPage' className='p-2'>Toys</Link>
        </div>
        </div>
    )
}