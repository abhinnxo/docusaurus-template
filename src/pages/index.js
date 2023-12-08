import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import myImageUrl from "../../static/img/docusaurus.png";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img src={myImageUrl} width="100px" alt="Example banner" />;
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://docusaurus-template.abhinn.xyz/"
          >
            View Live Preview 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.instructions} style={{ marginTop: "2rem" }}>
          <Heading as="h2">Installation</Heading>
          <p>
            <strong>Important:</strong> Before proceeding, ensure you have
            Node.js and npm installed.
          </p>
          <p>Follow these steps to install the project:</p>
          <ol>
            <li>
              Clone the repository:
              <pre>git clone https://github.com/your-repo.git</pre>
            </li>
            <li>
              Navigate to the cloned directory:
              <pre>cd your-repo</pre>
            </li>
            <li>
              Install dependencies:
              <pre>npm install</pre>
            </li>
            <p>
              <strong>Optional:</strong> During installation, you might
              encounter warnings regarding optional dependencies. Installing
              them can provide additional functionality.
            </p>
          </ol>
          <Heading as="h2">Running the Project</Heading>
          <p>Once installation is complete, you can run the project:</p>
          <ol>
            <li>
              Start the development server:
              <pre>npm start</pre>
            </li>
          </ol>
          <strong>Note:</strong> This will start the development server on
          <code> http://localhost:3000</code>. You can access the project at
          this address in your web browser.
          <p>
            Additional information and configuration options can be found in the
            project documentation.
          </p>
        </div>
      </main>
    </Layout>
  );
}
