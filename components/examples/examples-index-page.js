import { Fragment } from 'react';
import Link from 'next/link';
import Feedback from '../docs/feedback';
import DocsLayout from '../docs/docs-layout';
import sidebarCategories from '../../lib/examples/sidebarCategories';
import examplesManifest from '../../lib/examples/manifest.json';

function ExamplesIndexPage() {
  return (
    <DocsLayout>
      <h1>Examples</h1>
      <p>
        Take a look at our community examples to learn about all the different ways you can use
        Next.js.
      </p>
      <p>Here are some of the featured examples:</p>
      <div className="examples">
        {sidebarCategories.map(({ title, featured }) => (
          <Fragment key={title}>
            {featured && featured.length > 0 && (
              <>
                <h3>{title}</h3>
                <ul className="inline-buttons">
                  {featured.map(slug => (
                    <li key={slug}>
                      <Link href={`/examples/${slug}`}>
                        <a>{examplesManifest[slug].name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Fragment>
        ))}
      </div>
      <hr className="hr" />
      <Feedback />
      <style jsx>{`
        .examples {
          margin-bottom: 4rem;
        }

        h3 {
          margin-top: 3rem;
        }
      `}</style>
    </DocsLayout>
  );
}

export default ExamplesIndexPage;
