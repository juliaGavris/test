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

const mainTitle = "Martinique"
const hint = "Whatever it's said. You could press here anyway"
const fakeContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut ullamcorper leo. Sed id elit a lorem tempor eleifend nec et augue. Donec eget tortor ut ligula ultrices auctor quis ut massa. Pellentesque semper metus lacus, eget sollicitudin urna volutpat nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum vehicula eu augue ac varius. Nunc id lectus nisi. Maecenas vitae orci semper, ornare purus a, mattis enim. Donec facilisis eu mi vel tristique. Aenean lectus enim, mattis non lorem vel, vestibulum dignissim turpis. Aliquam a turpis sodales, mattis dolor non, tristique nibh. In bibendum magna ac orci dapibus commodo."

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
              <li className="nav-list__item" key={element}>
                <a className="nav-list__link" href={sublink}>
                  {element}
                </a>
              </li>
            )
          })
        return (
          <li className="nav__item" key={elem[0]}>
            <a className="nav__link" href={link}>
              {elem[0]}              
            </a>
            <ul className="nav-list">
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

  renderArticle () {
    const mainArticle = data.map((elem, index) => {
      if (Array.isArray(elem)) {
        const items = elem
          .filter((element, index) => {
            return index !== 0
          })
          .map((element) => {
            return (
              <div className="subarticle" id={element}>
                <div className="article-wrap__subtitle">
                  {element}
                </div>
                <div className="article-wrap__content">
                  {fakeContent}
                </div>
              </div>
            )
          })
        return (
          <div className="article-wrap">
            <div className="article-wrap__title" id={elem[0]}>
              {elem[0]}
            </div>
            {items}
          </div>   
        )
      } else {
        return (
          <div className="article-wrap">
            <div className="article-wrap__title" id={elem}>
              {index === 0 ? mainTitle : elem}
            </div>
            <div className="article-wrap__hint" id={elem}>
              {index === 0 ? hint : null}
            </div>
            <div className="article-wrap__content">
              {fakeContent}
            </div>
          </div>          
        )
      }
    })
    return (
      <div className="article">
        {mainArticle}
      </div>
    )

  }

  render() {
    return (
      <div className="page">
        {this.renderNav()}
        {this.renderArticle()}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <WikiPage />,
  document.getElementById('root')
);


