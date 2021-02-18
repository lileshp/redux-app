import './App.css';
import Navbar from './components/elements/Navbar';
import ContactPage from './components/elements/ContactPage';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddContact from './components/elements/AddContact';
import EditContact from './components/elements/EditContact';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Navbar />
        <Switch>
          <Route exact path="/" component={ContactPage}/>
          <Route exact path="/contacts/add" component={AddContact}/>
          <Route exact path="/contacts/edit/:id" component={EditContact}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
