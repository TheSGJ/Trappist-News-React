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
    let blogApi = `https://techcrunch.com/wp-json/wp/v2/posts?per_page=${this.props.per_page}&context=embed&page=1`;
    this.setState({ loading: true });
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
    let blogApi = `https://techcrunch.com/wp-json/wp/v2/posts?per_page=${this.props.per_page}&context=embed&page=${this.state.page + 1}`;
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
      <section id="BlogMenu" style={{maxWidth: "70rem"}} className="text-gray-600 body-font">
        <div className="px-5 py-4">
        <h1 className="text-3xl font-bold text-center pb-2 mb-4">Latest Top Tech - Trappist News</h1>
        {this.state.loading && <Spinner />}
          <InfiniteScroll
          style={{maxWidth: "70rem"}}
          dataLength={this.state.blogArticles.length}
          next={this.fetchMoreData}
          hasMore={this.state.blogArticles.id !== null}
          loader={<Spinner/>}
        >
          
          <div style={{maxWidth: "70rem"}} className="flex flex-wrap -m-4">
            {this.state.blogArticles.map((element) => {
              return (
                <PopBlogItem
                  key={element.id}
                  blogTitle={element.title.rendered}
                  blogDetail={element.excerpt.rendered}
                  blogSource={element.parsely.meta.publisher.name}
                  
                  blogAuthor={element.parsely.meta.creator}
                  blogDate={element.date}
                  blogImgUrl={
                    element.jetpack_featured_media_url
                      ? element.jetpack_featured_media_url
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID8CAckRSwj7DyX1BfOOohtFSUnfcPE9hag&usqp=CAU"
                  }
                  blogUrl={element.link}
                />
              );
            })}
          </div>

            </InfiniteScroll>
        </div>
      </section>

      </>
    );
  }
}
