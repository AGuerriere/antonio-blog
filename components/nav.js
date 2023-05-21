import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <div>
     <ul>
      <li>About Me</li>
      <li>My Portfolio</li>
      <li>My GitHub</li>
      <li>Contact Me</li>
      <li></li>
     </ul>
    </div>
  );
}
