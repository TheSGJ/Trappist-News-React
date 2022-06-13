import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class Home extends Component {
  render() {
    return (
      
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <NewsItem title="Test Heading Title" description="lorem36 helo? this issue! and you are watching demo post description." />
              <NewsItem title="Test Heading Title" description="lorem36 helo? this issue! and you are watching demo post description." />
              <NewsItem title="Test Heading Title" description="lorem36 helo? this issue! and you are watching demo post description." />
              <NewsItem title="Test Heading Title" description="lorem36 helo? this issue! and you are watching demo post description." />
              <NewsItem title="Test Heading Title" description="lorem36 helo? this issue! and you are watching demo post description." />
              <NewsItem title="Test Heading Title" description="lorem36 helo? this issue! and you are watching demo post description." />
              <NewsItem title="Test Heading Title" description="lorem36 helo? this issue! and you are watching demo post description." />
            </div>
          </div>
        </section>

    );
  }
}
