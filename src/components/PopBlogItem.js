import React, { Component } from 'react'

export default class PopBlogItem extends Component {
  render() {
    let {blogTitle, blogDetail, blogImgUrl, blogUrl} = this.props;
    return (
        <div className="p-2 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={blogImgUrl}
            alt="blog"
          />
          <div className="p-6">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {blogTitle}
            </h1>
            <p className="leading-relaxed mb-3">
              {blogDetail}...
            </p>
            <div className="flex items-center flex-wrap ">
              <a href={blogUrl} rel="noreferrer" target="_blank" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
