export default function About () {
  return (
    <>
        <section style={{ maxWidth: 700, margin: 'auto', padding: '1rem' }}>
            <h1>About Me</h1>

            <p>
                Hi, I’m Adam Goldsmith, an IBM-certified Full Stack Software Engineer with nearly 4 years of experience building scalable, maintainable applications across a wide range of languages and frameworks.
            </p>

            <p>
                I’m proficient in Java, C, C++, C#, TypeScript, JavaScript, Python, and Rust—bringing a polyglot 
                mindset to design resilient, high-performance software. I specialize in Domain-Driven Design, 
                Hexagonal & Clean Architecture, and Test-Driven Development, and I’m passionate about Lean, 
                Agile, and DevOps practices.
            </p>

            <p>
                Currently, I’m designing a cloud-native platform leveraging Golang, Remix, AWS Fargate,
                DynamoDB, OpenSearch, and service mesh technologies. I also contribute open-source projects,
                including an in-memory mediator pattern implementation for clean architecture.
            </p>

            <p>
                I’m a lifelong learner with recent certifications in Full Stack Development, Machine Learning,
                and Deep Learning. I’m passionate about mentoring, modern software architecture, and building
                resilient, testable systems.
            </p>

            <h2>Technical Skills</h2>
            <ul>
                <li><strong>Languages:</strong> Java, C, C++, C#, TypeScript, JavaScript, Python, Rust, Golang</li>
                <li><strong>Frameworks & Libraries:</strong> React, Remix, Next.js, ASP.NET, Spring Boot, Actix-web, DJango</li>
                <li><strong>Tools & DevOps:</strong> Docker, Kubernetes, AWS (Lambda, Fargate, DynamoDB), Azure DevOps, GitHub Actions, Terraform</li>
                <li><strong>Testing & Practices:</strong> TDD, Jest, JUnit, pytest, Google Test, Clean Architecture, Agile, DevOps</li>
            </ul>
        </section>
        <section style={{ maxWidth: 700, margin: 'auto', padding: '1rem' }}>
            <h2>Current Position: Backend Software Engineer at LiveNation</h2>

            <p>
                Since February 2024, I’ve been working as a Backend Software Engineer at LiveNation, focusing on building robust, scalable backend services using .NET and Umbraco CMS.
            </p>

            <p>
                My work involves collaborating closely with front-end engineers to support a recursive composition-based Next.js frontend, ensuring efficient multi-tenant support by isolating data and configurations per tenant.
            </p>

            <p>
                I help to optimize backend performance by refining database queries, applying caching strategies such as Fastly, and enhancing system scalability. Additionally, I automate deployment processes through CI/CD pipelines to ensure smooth, reliable updates.
            </p>

            <p>
                Following Test-Driven Development (TDD) principles in both Mockist and Classicist styles, I contribute to maintaining high code quality and system reliability. I also proactively monitor and log system performance to keep applications healthy and responsive.
            </p>
        </section>
    </>
  );
}