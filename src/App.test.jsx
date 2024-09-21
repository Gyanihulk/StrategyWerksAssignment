import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it, expect } from 'vitest';
import App from './App';
import { store } from './redux/store'; // Adjust the path if needed

describe('App', () => {
  it('renders the App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // screen.debug(); // prints out the JSX in the App component
    // Add assertions here, for example:
   
    // Test that user profile details are rendered
    expect(screen.getByText('@AdamyaKumar')).toBeInTheDocument();
    expect(screen.getByText('Practice & Master')).toBeInTheDocument();
    expect(
      screen.getByText(/Proficient in a wide range of programming languages/i)
    ).toBeInTheDocument();

    // Test that Pokemon Trainer Red card is rendered
    expect(screen.getByText('Pokemon Trainer Red')).toBeInTheDocument();
    expect(screen.getByText('Legendary Trainer')).toBeInTheDocument();
    expect(screen.getByText(/Red is known for his silence/i)).toBeInTheDocument();

    // Test that Champion Cynthia card is rendered
    expect(screen.getByText('Champion Cynthia')).toBeInTheDocument();
    expect(screen.getByText('Sinnoh Champion')).toBeInTheDocument();
    expect(screen.getByText(/Cynthia is the Champion of the Sinnoh region/i)).toBeInTheDocument();

  });
});
