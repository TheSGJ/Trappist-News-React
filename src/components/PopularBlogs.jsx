import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PopBlogItem from "./PopBlogItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class PopularBlogs extends Component {
  constructor() {
    super();
    // console.log("Debugging Home component constructer!")
    this.state = {
      blogArticles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    // console.log("Debugging PopularBlogs CDM!");
    this.props.setProgress(10)
    let blogApi = `https://tcnews.vercel.app/posts?per_page=${this.props.per_page}&page=1`;
    this.setState({ loading: false });
    this.props.setProgress(40)
    let result = await fetch(blogApi);
    let getResult = await result.json();
    let plGetResult = Object.keys(getResult).length
    // Loging Number Post Objects
    this.props.setProgress(100)
    this.setState({
      blogArticles: getResult,
      totalBlogResult: plGetResult,
      
      loading: false,
      
    });
  //  console.log(this.state.blogArticles.id !== null)
  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    let blogApi = `https://tcnews.vercel.app/posts?per_page=${this.props.per_page}&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let result = await fetch(blogApi);
    let getResult = await result.json();
    
    this.setState({
      
      blogArticles: this.state.blogArticles.concat(getResult),
      
      loading: false
    })
 
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
          <InfiniteScroll
          dataLength={this.state.blogArticles.length}
          next={this.fetchMoreData}
          hasMore={this.state.blogArticles.id !== null}
          loader={<Spinner/>}
        >
          
          <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            {this.state.blogArticles.map((element) => {
              return (
                <div className="mb-6 lg:mb-0">
        <div className="relative block bg-white rounded-lg shadow-lg">
                <PopBlogItem
                  key={element.id}
                  blogTitle={element.title.rendered?element.title.rendered:">>>>>>????>>>>>>"}
                  blogDetail={element.excerpt.rendered?element.excerpt.rendered:"......"}
                  blogSource="Tech Crunch"
                  blogAuthor=""
                  blogDate={element.date}
                  blogImgUrl={
                    element.jetpack_featured_media_url
                      ? element.jetpack_featured_media_url
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID8CAckRSwj7DyX1BfOOohtFSUnfcPE9hag&usqp=CAU"
                  }
                  blogUrl={element.link}
                />
                </div>
                </div>
              );
            })}
          </div>

            </InfiniteScroll>
      </section>
        </div>

      </>
    );
  }
}
