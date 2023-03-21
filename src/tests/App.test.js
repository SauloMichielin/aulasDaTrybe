import React from 'react';
import { screen, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';
// import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import renderWithRouter from './helpers/renderWithRouter';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Cadastro de clientes', () => {
  test('Verifica se a tela Home é renderizada corretamente', () => {
    renderWithRouter(<App />);

    const titleElement = screen.getByRole('heading', { level: 3, name: /cadastro de clientes/i });
    const linkElement = screen.getByRole('link', { name: /faça seu login/i });

    expect(titleElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });

  test('Verifica se a tela de Login é renderizada corretamente', () => {
    const history = createMemoryHistory({ initialEntries: ['/login'] });
    const store = createStore(rootReducer);
    render(
      <Provider store={ store }>
        <Router history={ history }>
          <App />
        </Router>
      </Provider>
    );

    const titleElement = screen.getByRole('heading', { level: 3, name: /login/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('Verifica se a tela Customers mostra "Login não efetuado"', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/customers'] });

    const titleElement = screen.getByRole('heading', { level: 1, name: /login não efetuado!/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('Verifica se a tela Customers renderiza "Nenhum cliente cadastrado"', () => {
    renderWithRouterAndRedux(<App />, {
      initialEntries: ['/customers'],
      initialState: {
        customers: [],
        login: {
          email: 'procopio@email.com',
          password: '123456'
        }
      }
    });

    const titleElement = screen.getByRole('heading', { level: 1, name: /nenhum cliente cadastrado/i });
    expect(titleElement).toBeInTheDocument();
  });


  test('Verifica se a tela Customers renderiza os customers', () => {
    renderWithRouterAndRedux(<App />, {
      initialEntries: ['/customers'],
      initialState: {
        customers: [
          {
            name: 'Procopio',
            age: '25',
            email: 'procopio@email.com'
          }
        ],
        login: {
          email: 'procopio@email.com',
          password: '123456'
        }
      }
    });

    const nameText = screen.getByText(/Nome:Procopio/i);
    expect(nameText).toBeInTheDocument();

    const ageText = screen.getByText(/Idade:25/i);
    expect(ageText).toBeInTheDocument();

    const emailText = screen.getByText(/Email:procopio@email.com/i);
    expect(emailText).toBeInTheDocument();
  });
});
