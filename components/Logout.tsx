import Link from 'next/link'
import LogoutBtn from '@/components/LogoutBtn'
import { Session } from 'next-auth'

const Logout = async ({ session }: Session) => {
  return (
    <>
      {session ? (
        <LogoutBtn />
      ) : (
        <Link
          className='px-4 py-2 bg-primary text-primary-foreground rounded-sm'
          href={'/register'}
        >
          Login
        </Link>
      )}
      {session && (
        <span className='px-4 max-lg:hidden'>{session.user?.email}</span>
      )}
    </>
  )
}

export default Logout
