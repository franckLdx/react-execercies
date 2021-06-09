import * as React from 'react';

import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Login } from './Login';

describe('<Login/>', () => {
  it('Should display login & password fields', () => {
    render(
      <RecoilRoot>
        <Login />
      </RecoilRoot>,
    );
  });
});
