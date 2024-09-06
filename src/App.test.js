import { render, screen } from '@testing-library/react';
import App from './App';
import { Add } from './components/Add';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test("Sum function should calculate sum of two numbers",()=>{
  render(<Add />);
  const result=Add(1,2);
    expect(result).toBe(3)


})