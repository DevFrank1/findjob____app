import Image from 'next/image';
import HomeBoard from './(site)/home/page';
import './page.css';

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <HomeBoard />
    </div>
  )
}
