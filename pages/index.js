/* eslint-disable @next/next/no-page-custom-font */
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);

  const title = searchParams.get('title');
  const subtitle = searchParams.get('subtitle');
  const tags = searchParams.get('tags');

  const [params, setParams] = useState({
    title: null,
    subtitle: null || '',
    tags: null || '',
  });

  useEffect(() => {
    setParams({
      title,
      subtitle,
      tags: tags || '',
    });
  }, [title, subtitle, tags]);

  return (
    <div className={'container'}>
      <Head>
        <title>Rishi Goutam</title>
      </Head>

      <div className="content">
        <h1>{params.title}</h1>
        <h2><em>{params.subtitle}</em></h2>
        <div className="tags">
          {params.tags.split(',').map((tag) => {
            return <span key={tag}>#{tag}</span>;
          })}
        </div>
      </div>
      <div className="logo">
        <Image src="/memoji.png" alt="logo" width="100%" height="100%" />
        <div className="handle">@rishigoutam</div>
      </div>
    </div>
  );
}
