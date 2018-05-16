import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const dataSet = [ 
  {
    name: "Abstract",
    children: null
  },
  {
    name: "History",
    children: [
      {
        name: "European contact",
        children: null
      },
      {
        name: "Major century",
        children: null
      },
      {
        name: "The revolution",
        children: null
      }
    ]
  },
  {
    name: "Governance",
    children: null
  },
  {
    name: "Geography",
    children: [
      {
        name: "Subdivisions",
        children: null
      },
      {
        name: "Mount pelee",
        children: null
      },
      {
        name: "Geopolitics",
        children: null
      }
    ]
  },  
  {
    name: "Economics",
    children: null
  },
  {
    name: "Demographics",
    children: null
  },
  {
    name: "Culture",
    children: null
  },
  {
    name: "References",
    children: null
  }
]

const mainTitle = "Martinique"
const hint = "Whatever it's said. You could press here anyway"
const fakeContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut ullamcorper leo. Sed id elit a lorem tempor eleifend nec et augue. Donec eget tortor ut ligula ultrices auctor quis ut massa. Pellentesque semper metus lacus, eget sollicitudin urna volutpat nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum vehicula eu augue ac varius. Nunc id lectus nisi. Maecenas vitae orci semper, ornare purus a, mattis enim. Donec facilisis eu mi vel tristique. Aenean lectus enim, mattis non lorem vel, vestibulum dignissim turpis. Aliquam a turpis sodales, mattis dolor non, tristique nibh. In bibendum magna ac orci dapibus commodo."

class WikiPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: dataSet[0].name
    }
  }

  renderNav2 () {
    const navTitle = "contents"
    const navItems = dataSet.map((elem, index) => {
      if (elem.children) {
        const link = "#" + elem.name
        const items = elem.children
          .map((element) => {
            const sublink = "#" + element.name
            return (
              <li className="nav-list__item" key={element.name}>
                <a className="nav-list__link" href={sublink}>
                  {element.name}
                </a>
              </li>
            )
          })
        return (
          <li className="nav__item" key={elem.name}>
            <a className="nav__link" href={link}>
              {elem.name}              
            </a>
            <ul className="nav-list">
              {items}
            </ul>
          </li>
        )
      } else {
        const link = "#" + elem.name
        return (
          <li className="nav__item" key={elem.name}>
            <a className="nav__link" href={link}>
              {elem.name}
            </a>
          </li>
        )
      }
    })
    return (
      <ul className="nav">
        <li className="nav__item nav__item_title">
          {navTitle.toUpperCase()}
        </li>        
        {navItems}
      </ul>
    )
  }

  renderArticle2 () {
    const mainArticle = dataSet.map((elem, index) => {
      if (elem.children) {
        const items = elem.children
          .map((element) => {
            return (
              <div className="subarticle" key={element.name}>
                <div className="article-wrap__subtitle" id={element.name}>
                  {element.name}
                </div>
                <div className="article-wrap__content">
                  {fakeContent}
                </div>
              </div>
            )
          })
        return (
          <div className="article-wrap" key={elem.name}>
            <div className="article-wrap__title" id={elem.name}>
              {elem.name}
            </div>
            {items}
          </div>   
        )
      } else {
        return (
          <div className="article-wrap" key={elem.name}>
            <div className="article-wrap__title" id={elem.name}>
              {index === 0 ? mainTitle : elem.name}
            </div>
            {index === 0 &&
              <div className="article-wrap__hint" id={elem}>
                {hint}
              </div>
            }
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
        {this.renderNav2()}
        {this.renderArticle2()}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <WikiPage />,
  document.getElementById('root')
);


