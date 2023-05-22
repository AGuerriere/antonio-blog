import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta property="og:title" content={postData.title} />
        {/* <meta property="og:url" content={"https://www.imdb.com/title/tt0117500/"} /> */}
        <meta property="og:image" content={`https://antonio-blog.netlify.app${postData.coverImage}`} />
      </Head>
      <article>
      <div className={utilStyles.imageContainer}>
      <Image
        priority
        src={postData.coverImage}
        // className={utilStyles.borderCircle}
        layout="fill" 
        className={utilStyles.image}
        />
      </div>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div>
        <Link href="/">← Back to home</Link>
      </div>
    </Layout>
  );
}
