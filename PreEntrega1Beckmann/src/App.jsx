import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Container } from 'react-bootstrap'


function App() {
  return (
    <>
      <NavBar/>
      <Container>
        <ItemListContainer greeting={'Hola User'}/>
      </Container>
    </>
  )
}

export default App
