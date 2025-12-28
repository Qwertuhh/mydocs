import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    description: (
      <>
        Easy to use and understand all of my projects on GitHub and their functionality is also easy to understand.
      </>
    ),
  },
  {
    title: "Open Source Contributions",
    description: (
      <>
        All of my projects are open-source and available on GitHub. Any contributions are welcome, and to maintain quality, this documentation matters.
      </>
    ),
  },
  {
    title: "Team Collaboration",
    description: (
      <>
        Enhance team collaboration with shared knowledge and documentation that
        evolves with your projects and processes.
      </>
    ),
  },
  {
    title: "Search & Discover",
    description: (
      <>
        Quickly find what you need with powerful search capabilities and
        well-organized documentation structure.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={styles.featureItem}>
      <div className="text--left">
        <Heading as="h3" className="margin-bottom--sm">
          {title}
        </Heading>
        <p className="margin-bottom--none">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresContainer}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
