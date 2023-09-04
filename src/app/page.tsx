import Layout from '@/components/Layout';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import ProfileImage from './../../public/images/profile/developer-pic-1.png';

export default function Home() {
  return (
    <main className='flex items-center text-dark w-full min-h-screen'>
      <Layout>
        <div className="flex items-center justify-between w-full">
          <div>
            <Image src={ProfileImage} alt='Profile Image' className='w-full h-auto' />
          </div>
        </div>
      </Layout>
    </main>
  )
}
