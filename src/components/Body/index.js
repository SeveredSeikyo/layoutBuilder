// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-menu">
              <h1>Left Navbar Menu</h1>
              <ul>
                <div className="left-navbar-menu-div">
                  <li>
                    <p>Item 1</p>
                  </li>
                  <li>
                    <p>Item 2</p>
                  </li>
                  <li>
                    <p>Item 3</p>
                  </li>
                  <li>
                    <p>Item 4</p>
                  </li>
                </div>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-navbar-menu">
              <h1>Right Navbar</h1>
              <div className="right-navbar-menu-div">
                <div>
                  <p>Ad 1</p>
                </div>
                <div>
                  <p>Ad 2</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
