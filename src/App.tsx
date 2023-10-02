import React from 'react';
import { Container, Tabs } from 'chex-layout-component';
import styled from 'styled-components';

const App = () => (
  <>
    <h1>React without CRA...</h1>
    <S.Button>hot pink button</S.Button>
    <Tabs defaultTabPanelId="item1" direction="horizontal" primaryColor="#6495ed">
      <Tabs.List>
        <Tabs.Tab tabPanelId="item1">ITEM ONE</Tabs.Tab>
        <Tabs.Tab tabPanelId="item2">ITEM TWO</Tabs.Tab>
        <Tabs.Tab tabPanelId="item3">ITEM THREE</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="item1">
        <Container css={{ width: '200px', margin: '2rem', textAlign: 'center' }}>👀</Container>
      </Tabs.Panel>
      <Tabs.Panel id="item2">
        <Container css={{ width: '200px', margin: '2rem', textAlign: 'center' }}>🐾</Container>
      </Tabs.Panel>
      <Tabs.Panel id="item3">
        <Container css={{ width: '200px', margin: '2rem', textAlign: 'center' }}>🐕</Container>
      </Tabs.Panel>
    </Tabs>
  </>
);

export default App;

const S = {
  Button: styled.button`
    color: hotpink;
  `,
};
