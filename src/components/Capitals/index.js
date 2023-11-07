import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeTabCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({
      activeTabCapitalId: event.target.value,
    })
  }

  getCountry = () => {
    const {activeTabCapitalId} = this.state

    const activeCapitalAndCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeTabCapitalId,
    )

    return activeCapitalAndCountry ? activeCapitalAndCountry.country : ''
  }

  render() {
    const {activeTabCapitalId} = this.state
    const country = this.getCountry()

    return (
      <div className="app-container">
        <div className="capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              className="select-capital"
              onChange={this.onChangeCapital}
              value={activeTabCapitalId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <div>
              <p className="description">is capital of which country</p>
            </div>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
