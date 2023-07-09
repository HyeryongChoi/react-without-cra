import React from 'react';
import styled from 'styled-components';

const App = () => (
  <>
    <h1>React without CRA...</h1>
    <S.Button>hot pink button</S.Button>
  </>
);

export default App;

const S = {
  Button: styled.button`
    color: hotpink;
  `,
};
