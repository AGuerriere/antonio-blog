import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Antonio Guerriere';

export default function SiteHead({ children, home }) {
  return (
    <header className={styles.header}>
    <Link href="/">
            <Image
              priority
              src="/images/profile1.jpg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt=""
            />
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/" className={utilStyles.colorInherit}>
              {name}
            </Link>
          </h2>
    </header>
  );
}
