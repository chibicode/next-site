import Page from '../components/page';
import Screen from '../components/screen';
import Footer from '../components/footer';

import Contact from '../components/enterprise/contact';

export default () => (
  <Page title="Enterprise | Next.js">
    <Screen offset={64 + 400}>
      <Contact />
    </Screen>
    <Footer />
  </Page>
);

export const config = {
  amp: true
};
