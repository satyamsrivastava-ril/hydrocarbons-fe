import React from 'react'

const Article = () => {
  return (
    <div>
      <img src={props.src} alt={props.alt}>
      </img>
      <div>
        <div>
          {props.articleName}
        </div>
        <div>
          <span></span>{" "} {props.status}
        </div>
      </div>
    </div>
  )
}

export default Article;
