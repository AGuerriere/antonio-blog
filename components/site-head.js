import Image from 'next/image';
import siteHeadStyles from './site-head.module.css'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function SiteHead({ children, home }) {
  return (
    <header className={siteHeadStyles.header}>
    <Link href="/" className={siteHeadStyles.logoContainer}>
            <Image
              priority
              src="/images/logo1.png"
              className={utilStyles.logo}
              height={108}
              width={108}
              alt=""
            />
          </Link>
          <div className={siteHeadStyles.headDescription}>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                Antonio Guerriere
              </Link>
            </h2>
            <p>Programming, AI and the latest Technology</p>
          </div>
    </header>
  );
}
