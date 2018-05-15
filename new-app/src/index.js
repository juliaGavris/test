import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const data = [ 
  "Abstract", 
  ["History", "European contact", "Major century", "The revolution"], 
  "Governance", 
  ["Geography", "Subdivisions", "Mount pelee", "Geopolitics"], 
  "Economics",
  "Demographics",
  "Culture",
  "References",
]

class WikiPage extends React.Component {
  constructor(props) {
    super(props)
  }

  renderNav () {
    const navItems = data.map((elem, index) => {
      console.warn(elem)
      if (1 === 1) {
        return (
          <li className="nav__item" key={elem}>
            <a className="nav__link" href="#">
              {elem[0]}
            </a>
          </li>
        )
      } else {
        return (
          <li className="nav__item" key={elem}>
            <a className="nav__link" href="#">
              elem
            </a>
          </li>
        )
      }
    })
    return (
      <ul className="nav">
        {navItems}
      </ul>
    )
  }

  render() {
    return (
      <div className="page">
        <div className="header">
          Полосочка
        </div>
        {this.renderNav()}
        <div className="article">
          Контент
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <WikiPage />,
  document.getElementById('root')
);


