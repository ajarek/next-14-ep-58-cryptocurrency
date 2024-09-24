import PaymentForm from '@/components/FormPayment'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const Payment = async () => {
  
  const session = await auth()
  const { user } = (session as any) || {}
  
  if (!user) {
    redirect('/register')
  }
  return (
    <>
      <PaymentForm  />
    </>
  )
}
export default Payment