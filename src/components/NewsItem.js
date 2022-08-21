import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
    return (
      
      <>
      <div className="flex">
              <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img alt={author} src={imgUrl}/>
                <a href={newsUrl} rel="noreferrer" target="_blank">
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
      </div>
            <div className="p-6">
              <a href={newsUrl} target="_blank" rel="noopener noreferrer"><h5 className="font-bold text-lg mb-3">{title}</h5></a>
              <span className="bg-indigo-100 mt-1/6 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">{source}</span>
              <p className="text-gray-500 mb-4">
                <small>Published on <u>{new Date(date).toUTCString()}</u>
                  <span className="text-gray-900">{author}</span></small>
              </p>
              <p className="mb-4 pb-2">{description}...</p>
              <a href={newsUrl} rel="noreferrer" target="_blank" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
                more</a>
            </div>
    </>
    )
  }
}

export default NewsItem