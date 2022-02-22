import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
/**
 *
 * @returns Landing page
 */
export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/posts');
  }, []);
  return (
    <Head>
      <title>NextJS Blog</title>
    </Head>
  );
}
