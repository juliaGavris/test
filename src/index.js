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
      if (Array.isArray(elem)) {
        const link = "#" + elem[0]
        const items = elem
          .filter((element, index) => {
            return index !== 0
          })
          .map((element) => {
            const sublink = "#" + element
            return (
              <li className="nav__subitem" key={element}>
                <a className="nav__sublink" href={sublink}>
                  {element}
                </a>
              </li>
            )
          })
        console.warn(items)
        return (
          <li className="nav__item" key={elem[0]}>
            <a className="nav__link" href={link}>
              {elem[0]}              
            </a>
            <ul className="nav__item">
              {items}
            </ul>
          </li>
        )
      } else {
        const link = "#" + elem
        return (
          <li className="nav__item" key={elem}>
            <a className="nav__link" href={link}>
              {elem}
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


