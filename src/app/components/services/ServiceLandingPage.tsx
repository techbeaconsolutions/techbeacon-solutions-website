
type ServiceLandingPageProps = {
  title: string;
  intro: string;
  sections: {
    heading: string;
    description: string;
  }[];
};

export default function ServiceLandingPage({
  title,
  intro,
  sections,
}: ServiceLandingPageProps) {
  return (
    <main>
      <section>
        <h1>{title}</h1>
        <p>{intro}</p>

        {sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.description}</p>
          </section>
        ))}

        <section>
          <h2>Let's Discuss Your Project</h2>
          <p>
            Contact TechBeacon Solutions to discuss your business
            requirements and explore the right solution.
          </p>
          <a href="/contact/">Get in Touch</a>
        </section>
      </section>
    </main>
  );
}
