import React from 'react'
import SearchImage from '../containers/SearchImage'
import { Grid, Row, Navbar, Nav, NavItem } from 'react-bootstrap'

const App = () => (
  <div>
    <Navbar default fixedTop={false}>
      <Navbar.Header>
        <Navbar.Brand>
          Guatemala ~画像タグ付けWEBアプリケーション~
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
    <Grid>
      <Row>
        <SearchImage />
      </Row>
    </Grid>
    <Navbar default fixedBottom={true}>
      <Nav>
        <NavItem href="https://github.com/wakusei-meron-/Guatemala" target="_blank">
          Created by <img src="https://github.com/favicon.ico" width="12" alt=""/> wakusei-meron- with ReactJS
      </NavItem>
    </Nav>
  </Navbar>
</div>
)

export default App
