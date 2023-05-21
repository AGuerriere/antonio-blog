import Link from 'next/link';
import asideStyles from './aside-nav.module.css'

export default function AsideNav() {
  return (
    <div className={asideStyles.aside}>
      <h3>Resources</h3>
     <ul>
      <li><Link href={`/about-me`}>About Me</Link></li>
      <li><a href="https://www.antonioguerriere.com">My Portfolio</a></li>
      <li><Link href={`/`}>My GitHub</Link></li>
      <li><Link href={`/`}>Contact Me</Link></li>
      <li></li>
     </ul>
     <ul>
      <li>📱 Subscribe in a reader</li>
      <li>📧 Subscribe to newsletter</li>
     </ul>
     <p>Blog started in 2023</p>
    </div>
  );
}
