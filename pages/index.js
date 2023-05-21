import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home( {allPostsData} ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, intro, coverImage }) => (
            <li className={utilStyles.listItem} key={id}>
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            <br />
            <Link className={utilStyles.headingXl } href={`/posts/${id}`}>{title}</Link>
            <Image
              priority
              src={coverImage}
              // className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="excerpt banner"
            />
            <p>{intro}</p>
          </li>        
          ))}
        </ul>
      </section>
    </Layout>
  );
}
