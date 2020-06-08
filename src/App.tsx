import React from 'react';
import { Container } from './components/Container/Container'
import { data, columns } from './dataMock/dataMock';
import { Header, AppStyles } from './style/style';

function App() {
  return (
    <AppStyles>
      <Header>
        <p>
          My Table component
        </p>
      </Header>

      <Container Columns={columns} Data={data}></Container>
    </AppStyles>
  );
}

export default App;
