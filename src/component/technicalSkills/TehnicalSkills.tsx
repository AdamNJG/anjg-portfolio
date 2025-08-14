import TechChip from '../projects/TechChip';
import './TechnicalSkills.css';

export default function TechnicalSkills () {
  return (
    <section id="" style={{ maxWidth: 700, margin: 'auto', padding: '1rem' }}>
        <h1>Technical Skills</h1>

        <p>
            Full Stack Software Engineer with nearly 4 years of experience building
            scalable, cloud-native applications. I bring a <strong>polyglot mindset</strong>,
            working across languages, frameworks, and architectures to design resilient,
            maintainable systems. My background in lean manufacturing strengthens my Agile
            and DevOps approach, ensuring engineering practices are applied in a practical,
            results-driven way.
        </p>

        <p>
            I specialize in Domain-Driven Design, Hexagonal & Clean Architecture,
            Test-Driven Development, and reactive patterns. I’m currently designing a
            cloud-native platform using Golang, Remix, AWS Fargate, DynamoDB, OpenSearch,
            and service mesh technologies.
        </p>

        <p>
            I contribute to open-source projects including
            <em> Basic Reactive Mediator</em> — an in-memory mediator pattern for clean
            architecture — and <em>proto-translator</em>, a protocol-based translation
            tool for modern development workflows.
        </p>

        <h2>Technical Skills</h2>

        <div className='tech-list'>
            <div >
                <strong>Languages:</strong>
                <ul className='tech-stack'>
                    <li><TechChip tech="Java"/></li>
                    <li><TechChip tech="C++"/></li>
                    <li><TechChip tech="C#"/></li>
                    <li><TechChip tech="TypeScript"/></li>
                    <li><TechChip tech="JavaScript"/></li>
                    <li><TechChip tech="Python"/></li>
                    <li><TechChip tech="Rust"/></li>
                    <li><TechChip tech="Go"/></li>
                </ul>
            </div>

            <div>
                <strong>Frameworks & Libraries:</strong>
                <ul className='tech-stack'>
                    <li><TechChip tech='React' logo={false}/></li>
                    <li><TechChip tech='Remix' logo={false}/></li>
                    <li><TechChip tech='Next.js' logo={false}/></li>
                    <li><TechChip tech='ASP.NET' logo={false}/></li>
                    <li><TechChip tech='Spring Boot' logo={false}/></li>
                    <li><TechChip tech='Django' logo={false}/></li>
                </ul>
            </div>

            <div>
                <strong>Cloud & DevOps:</strong>
                <ul className='tech-stack'>
                    <li><TechChip tech='AWS (Lambda, Fargate, DynamoDB, OpenSearch)' logo={false}/></li>
                    <li><TechChip tech='Docker' logo={false}/></li>
                    <li><TechChip tech='Kubernetes' logo={false}/></li>
                    <li><TechChip tech='Azure + Azure DevOps' logo={false}/></li>
                    <li><TechChip tech='GitHub Actions' logo={false}/></li>
                    <li><TechChip tech='Terraform' logo={false}/></li>
                    <li><TechChip tech='Service mesh technologies' logo={false}/></li>
                </ul>
            </div>

            <div>
                <strong>Architecture & Practices:</strong>
                <ul className='tech-stack'>
                    <li><TechChip tech='Domain-Driven Design' logo={false}/></li>
                    <li><TechChip tech='Hexagonal Architecture' logo={false}/></li>
                    <li><TechChip tech='Clean Architecture' logo={false}/></li>
                    <li><TechChip tech='Reactive Patterns' logo={false}/></li>
                    <li><TechChip tech='Agile' logo={false}/></li>
                    <li><TechChip tech='DevOps' logo={false}/></li>
                    <li><TechChip tech='TDD' logo={false}/></li>
                </ul>
            </div>

            <div>
                <strong>Testing:</strong>
                <ul className='tech-stack'>
                    <li><TechChip tech='Jest' logo={false}/></li>
                    <li><TechChip tech='JUnit' logo={false}/></li>
                    <li><TechChip tech='pytest' logo={false}/></li>
                    <li><TechChip tech='Google Test' logo={false}/></li>
                    <li><TechChip tech='Playwright' logo={false}/></li>
                    <li><TechChip tech='Vitest' logo={false}/></li>
                </ul>
            </div>

            <div>
                <strong>Machine Learning & AI:</strong>
                <ul className='tech-stack'>
                    <li><TechChip tech='Machine Learning (Coursera, Stanford, Andrew Ng)' logo={false}/></li>
                    <li><TechChip tech='Deep Learning Specialization (Coursera, DeepLearning.AI, Andrew Ng)' logo={false}/></li>
                    
                    <li><TechChip tech='TensorFlow' logo={false}/></li>
                    <li><TechChip tech='Keras' logo={false}/></li>
                    <li><TechChip tech='Pandas' logo={false}/></li>
                    <li><TechChip tech='Numpy' logo={false}/></li>
                </ul>
            </div>
        </div>
    </section>
  );
}