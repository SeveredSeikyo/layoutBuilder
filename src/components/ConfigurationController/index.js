// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeToggleShowContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const changeToggleShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const changeToggleShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }
      return (
        <div className="configuration-container">
          <h1>Layout</h1>
          <div className="configuration-container-div">
            <div>
              <input
                type="checkbox"
                id="content"
                checked={showContent}
                onChange={changeToggleShowContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="leftnav"
                checked={showLeftNavbar}
                onChange={changeToggleShowLeftNavbar}
              />
              <label htmlFor="leftnav">Left Navbar</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="rightnav"
                checked={showRightNavbar}
                onChange={changeToggleShowRightNavbar}
              />
              <label htmlFor="rightnav">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
