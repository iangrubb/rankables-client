import React from 'react';

import styled from 'styled-components'

import ListMutationPage from './pages/admin/listMutation'

function App() {
  return (
    <Site>
      <ListMutationPage>


      </ListMutationPage>
    </Site>
  );
}

export default App;

const Site = styled.div`
  background: #aaa;

  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;

`
