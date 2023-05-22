import Head from 'next/head';
import styles from './layout.module.css';
import AsideNav from './aside-nav';
import SiteHead from './site-head';

// export const siteTitle = 'Antonio\' blog';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <meta
          name="description"
          content="A blog about Artificial Intelligence, Software Development, and Technology"
        />
        {/* <meta name="og:title" content={siteTitle} /> */}
        <meta property="og:site_name " content="Antonio's Blog" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SiteHead></SiteHead>
      <div className={styles.contentContainer}>
      <AsideNav></AsideNav>
        <main>{children}</main>
      </div>
    </div>
  );
}
