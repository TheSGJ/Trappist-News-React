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
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    // console.log("Debugging PopularBlogs CDM!");
    let blogApi = `https://techcrunch.com/wp-json/wp/v2/posts?per_page=${this.props.per_page}&context=embed&page=1`;
    this.setState({ loading: true });
    let result = await fetch(blogApi);
    let getResult = await result.json();
    let plGetResult = Object.keys(getResult).length
    // Loging Number Post Objects
  
    this.setState({
      blogArticles: getResult,
      totalBlogResult: plGetResult,
      
      loading: false,
      
    });
   
  }
  handlePreClick = async () =>{
    window.scrollTo(0, 0); 
    let blogApi = `https://techcrunch.com/wp-json/wp/v2/posts?per_page=${this.props.per_page}&context=embed&page=${this.state.page - 1}`;
    let result = await fetch(blogApi);
    let getResult = await result.json();

    this.setState({
      page: this.state.page - 1,
      blogArticles: getResult,
      
    })
    
  }
  handleNxtClick = async () =>{

    if (!(this.state.blogArticles.id === null)){
        window.scrollTo(0, 0); 
        let blogApi = `https://techcrunch.com/wp-json/wp/v2/posts?per_page=${this.props.per_page}&context=embed&page=${this.state.page + 1}`;
        this.setState({ loading: true });
        let result = await fetch(blogApi);
        let getResult = await result.json();
        
        this.setState({
          page: this.state.page + 1,
          blogArticles: getResult,
          
          loading: false
        })
        
  }
  }

  render() {
    return (
      <>
      <Helmet>
        <title>Latest News - Trappist News</title>
      </Helmet>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
        <h1 className="text-3xl font-bold text-center pb-2 mb-4">Latest Top Tech - Trappist News</h1>
        {this.state.loading && <Spinner />}
          <div className="flex flex-wrap -m-4">
            {!this.state.loading && this.state.blogArticles.map((element) => {
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
        </div>
      </section>
      <nav className="my-3" aria-label="Page navigation">
          <ul className="inline-flex">
            <li>
              <button
                disabled={this.state.page <= 1}
                onClick={this.handlePreClick}
                className="h-10 px-5 mx-1 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded focus:shadow-outline hover:bg-indigo-100"
              >
               &larr; Previous
              </button>
            </li>
            <li>
              <button
                onClick={this.handleNxtClick}
                disabled={this.state.blogArticles.id === null}
                className="h-10 px-5 mx-1 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded focus:shadow-outline hover:bg-indigo-100"
              >
                Next &rarr;
              </button>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
