import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const data = [
  {
    "title": "Abstract",
    "content": [
      { 
        "subtitle": null, 
        "text": "whatever", 
        "img": null 
      }
    ]
  },
  {
    "title": "History",
    "content": [
      { 
        "subtitle": "European contact", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ultricies sapien. Maecenas placerat cursus ipsum, vel molestie est pulvinar eget. Phasellus quis placerat mauris, non tempus leo. Nulla accumsan mauris metus, eu volutpat neque sagittis eu. Proin finibus iaculis tellus. Morbi suscipit a elit at dictum. Praesent volutpat vulputate sagittis. Sed pharetra massa lectus, ac placerat felis pulvinar sed. Integer at egestas nulla. Vivamus placerat eros velit, et pharetra nulla auctor vitae. Sed magna neque, porta ut turpis sed, vulputate bibendum enim.", 
        "img": null 
      },
      { 
        "subtitle": "Major century", 
        "text": "whatever", 
        "img": null 
      },
      { 
        "subtitle": "The revolution", 
        "text": "whatever", 
        "img": null 
      }
    ]
  },
  {
    "title": "Governance",
    "content": [
      { 
        "subtitle": null, 
        "text": "whatever", 
        "img": null 
      }
    ]
  },
  {
    "title": "Geography",
    "content": [
      { 
        "subtitle": "Subdivisions", 
        "text": "whatever", 
        "img": null 
      },
      { 
        "subtitle": "Mount pelee", 
        "text": "whatever", 
        "img": null 
      },
      { 
        "subtitle": "Geopolitics", 
        "text": "whatever", 
        "img": null 
      }
    ]
  },
  {
    "title": "Economics",
    "content": [
      { 
        "subtitle": null, 
        "text": "whatever", 
        "img": null 
      }
    ]
  },
  {
    "title": "Demographics",
    "content": [
      { 
        "subtitle": null, 
        "text": "whatever", 
        "img": null 
      }
    ]
  },
  {
    "title": "Culture",
    "content": [
      { 
        "subtitle": null, 
        "text": "whatever", 
        "img": null 
      }
    ]
  },
  {
    "title": "References",
    "content": [
        { 
          "subtitle": null, 
          "text": "whatever", 
          "img": null 
        }
    ]
  }
]

class WikiPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="page">
        <div className="header">
          Полосочка
        </div>
        <div className="nav">
          Меню
        </div>
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


