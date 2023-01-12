import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PopBlogItem from "./PopBlogItem";
import Spinner from "./Spinner";

export default class PopularBlogs extends Component {
  constructor() {
    super();
    // console.log("Debugging Home component constructer!")
    this.state = {
      blogArticles: [],
      loading: true,
    };
  }
  async componentDidMount() {
    // console.log("Debugging PopularBlogs CDM!");
    this.props.setProgress(10)
    let blogApi = 'https://timesofindia.indiatimes.com/rssfeeds/-2128838597.cms?feedtype=sjson';
    this.setState({ loading: true });
    this.props.setProgress(40)
    let result = await fetch(blogApi);
    let getResult = await result.json();
    let plGetResult = Object.keys(getResult).length
    // Loging Number Post Objects
    this.props.setProgress(100)
    this.setState({
      blogArticles: getResult.channel.item,
      totalBlogResult: plGetResult,
      
      loading: false,
      
    });
  //  console.log(this.state.blogArticles.id !== null)
  }

  
  render() {
    return (
      <>
      <Helmet>
        <title>Latest News - Trappist News</title>
      </Helmet>
      <div className="container my-6 px-6 mx-auto">
  <section className="mb-32 text-gray-800 text-center">
        <h1 className="text-3xl font-bold text-center pb-2 mb-4">Latest Top Tech - Trappist News</h1>
          {this.state.loading && <Spinner />}
          
          <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            {this.state.blogArticles.map((element) => {
              return (
                <div className="mb-6 lg:mb-0">
        <div className="relative block bg-white rounded-lg shadow-lg">
                <PopBlogItem
                  key={element.id}
                  blogTitle={element.title?element.title:""}
                  blogDetail={element.description?element.description:"...."}
                  blogSource='TOI'
                  
                  blogAuthor="Times Of India"
                  blogDate={element.pubDate?element.pubDate:"???"}
                  blogImgUrl={
                    element.enclosure.@url
                      ? element.enclosure.@url
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID8CAckRSwj7DyX1BfOOohtFSUnfcPE9hag&usqp=CAU"
                  }
                  blogUrl={element.link?element.link:"/"}
                />
                </div>
                </div>
              );
            })}
          </div>

      </section>
        </div>

      </>
    );
  }
}
