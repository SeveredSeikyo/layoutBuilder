import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  toggleShowContent = showContent => {
    this.setState({showContent})
  }

  toggleShowLeftNavbar = showLeftNavbar => {
    console.log('leftnavbar clicked', showLeftNavbar)
    this.setState({showLeftNavbar})
  }

  toggleShowRightNavbar = showRightNavbar => {
    this.setState({showRightNavbar})
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.toggleShowContent,
          onToggleShowLeftNavbar: this.toggleShowLeftNavbar,
          onToggleShowRightNavbar: this.toggleShowRightNavbar,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
