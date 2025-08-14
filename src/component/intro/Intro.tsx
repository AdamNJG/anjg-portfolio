import { useEffect } from 'react';
import { useNavigate, useSearchParams, NavLink } from 'react-router-dom';
import './intro.css';
import TechChip from '../projects/TechChip';

export default function Intro () {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const redirect = searchParams.get('redirect');
    if (redirect && checkRedirect(redirect)) {
      navigate(redirect, { replace: true });
    }
  }, [searchParams, navigate]);

  const checkRedirect = (redirect: string): boolean => ['/about', '/projects'].includes(redirect);

  return (<section id="home" className="home-intro">
  <div className="intro-text">
    <h1>Hi, I’m <span className="highlight">Adam Goldsmith</span></h1>
    <p>
      I’m an <strong>IBM-certified Full Stack Software Engineer</strong> with nearly 4 years of experience 
      building scalable, cloud-native applications. With a decade of experience in lean manufacturing 
      and production management, Agile and DevOps principles come naturally to me, and I 
      apply <strong>code craftsmanship</strong> and <strong>engineering practices</strong> in a balanced, practical way.
    </p>
    <p>
      I specialize in designing resilient systems with <strong>clean architecture, TDD, and reactive patterns</strong>. 
      I also contribute to open-source projects like <em>Basic Reactive Mediator</em> and <em>proto-translator</em>, 
      exploring innovative patterns and tooling for modern development.
    </p>
    <p>
      My goal is to build high-quality, maintainable software while mentoring and collaborating with teams 
      who value solid engineering practices and continuous learning.
    </p>
    <p>
      The stack I have the most commercial experience with is:
      <div className="tech-stack">
        <TechChip tech="C#" />
        <TechChip tech="TypeScript" />
        <TechChip tech="Node.js" />
        <TechChip tech="MSSQL" />
        <TechChip tech="Docker" />
        <TechChip tech="AWS" />
      </div> 
      Although I focus on this stack professionally, I enjoy supplementing my experience by exploring different 
      languages and the patterns they use. I’m particularly interested in low-level, functional-style languages, 
      as well as languages that are more suited to a cloud-native environment and you can see examples of these in my projects below.
    </p>
    <NavLink to="/projects">View My Work</NavLink>
  </div>
</section>);
}