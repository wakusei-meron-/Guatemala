import React from 'react'
import Footer from './Footer'
import SearchImage from '../containers/SearchImage'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <SearchImage />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
