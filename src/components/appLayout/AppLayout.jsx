import { Outlet } from 'react-router-dom';
import { Header, Layout, StyledLink } from './AppLayoutStyles';
import { Suspense } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';

const AppLayout = () => {
  return (
    <Layout>
      <header>
        <Header>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </Header>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
    </Layout>
  );
};

export default AppLayout;
