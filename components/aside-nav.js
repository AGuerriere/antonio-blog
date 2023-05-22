import Link from 'next/link';
import asideStyles from './aside-nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

export default function AsideNav() {
  return (
    <div className={asideStyles.aside}>
      <h3>Resources</h3>
     <ul>
      <li><Link href={`/about-me`}>About Me</Link></li>
      <li><a href="https://www.antonioguerriere.com">My Portfolio</a></li>
      <li><a href="https://github.com/AGuerriere">My GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/antonioguerriere/">Contact Me</a></li>
     </ul>
     <ul>
      <li className={asideStyles.rss}><span><FontAwesomeIcon icon={faRss} className={asideStyles.icon} /></span> Subscribe in a reader</li>
      <li className={asideStyles.newsLetter}><span><FontAwesomeIcon icon={faEnvelopeOpen} className={asideStyles.icon} /></span> Subscribe to newsletter</li>
     </ul>
     <p className={asideStyles.blogStart}>Antonio's blog started in 2023</p>
     <p className={asideStyles.copyright}>Copyright Antonio Guerriere 2023</p>
    </div>
  );
}
