import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <div>
     <ul>
      <li><Link href={`/about-me`}>About Me</Link></li>
      <li><a href="https://www.antonioguerriere.com">My Portfolio</a></li>
      <li><Link href={`/`}>My GitHub</Link></li>
      <li><Link href={`/`}>Contact </Link></li>
      <li>My Portfolio</li>
      <li>My GitHub</li>
      <li>Contact Me</li>
      <li></li>
     </ul>
    </div>
  );
}
