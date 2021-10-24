import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Retroshark</title>
      </Head>
      <Hero />
    </div>
  )
};
