import PageContainer from './page-container';
import Header from './header';

export default function Page({
  title,
  description = undefined,
  sticky = undefined,
  children,
  hideHeader
}) {
  return (
    <PageContainer title={title} description={description}>
      {!hideHeader && <Header sticky={sticky} />}
      {children}
    </PageContainer>
  );
}
