import Link from 'next/link';
import asideStyles from './aside-nav.module.css'

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
      <li className={asideStyles.rss}> Subscribe in a reader</li>
      <li className={asideStyles.newsLetter}>Subscribe to newsletter</li>
     </ul>
     <p>Blog started in 2023</p>
    </div>
  );
}
