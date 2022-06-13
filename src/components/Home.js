import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class Home extends Component {
  render() {
    return (
      
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <NewsItem />
              <NewsItem />
              <NewsItem />
              <NewsItem />
              <NewsItem />
              <NewsItem />
              <NewsItem />
            </div>
          </div>
        </section>

    );
  }
}
