import Link from 'next/link'
import LogoutBtn from '@/components/LogoutBtn'

interface Session {
  user?: {
    name?: string;
    email?: string;
    image?: string;
  };
  expires?: string;
}
const Logout = async ({ session }: { session: Session | null }) => {
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
