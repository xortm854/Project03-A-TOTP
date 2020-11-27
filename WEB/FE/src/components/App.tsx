import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Pages from '@pages/index';
import { PrivateRoute } from '@components/route/PrivateRoute';
import ComfirmEmail from '@components/confirmEmail/index';
import { Modal } from './common/Modal';

interface AppProps {}

const NotFound = () => <>Page Not Found</>;

const Hello = () => (
  <>
    <Modal>
      <Link to='/signup'>Sign Up</Link>
    </Modal>
  </>
);

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Hello} />
        <Route exact path='/confirm-email' component={ComfirmEmail} />
        <Route exact path='/signup' component={Pages.SignUpPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export { App };
