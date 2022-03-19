import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
  it('renders', () => {
    render(<About />);
  });
  
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    
    expect(asFragment()).toMatchSnapshot();
  });
})

import React from 'react';

function Gallery() {
  return (
    <section>
      <h1>NAME</h1>
      <p>DESCRIPTION</p>
    </section>
  );
}
export default Gallery;