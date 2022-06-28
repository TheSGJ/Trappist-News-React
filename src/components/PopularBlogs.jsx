import React, { Component } from "react";
import PopBlogItem from "./PopBlogItem";

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
    let blogApi = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed&page=1";
    let result = await fetch(blogApi);
    let getResult = await result.json();
    let plGetResult = Object.keys(getResult).length
    // Loging Number Post Objects
    console.log("Total Posts: "+plGetResult+" [Results]")
    console.log(getResult);
    this.setState({ blogArticles: getResult, totalBlogResult: plGetResult });
  }
  handlePreClick = async () =>{
    window.scrollTo(0, 0); 
    let blogApi = `https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed&page=${this.state.page - 1}`;
    let result = await fetch(blogApi);
    let getResult = await result.json();
    console.log(getResult);
    this.setState({
      page: this.state.page - 1,
      blogArticles: getResult,
    })
    console.log("Previous Page")
  }
  handleNxtClick = async () =>{

    if (this.state.blogArticles.id === null ){

    }
    else{
        window.scrollTo(0, 0); 
        let blogApi = `https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed&page=${this.state.page + 1}`;
        let result = await fetch(blogApi);
        let getResult = await result.json();
        console.log(getResult);
        this.setState({
          page: this.state.page + 1,
          blogArticles: getResult,
        })
        console.log("Next Page")
  }
  }
  render() {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {this.state.blogArticles.map((element) => {
              return (
                <PopBlogItem
                  key={element.id}
                  blogTitle={element.title.rendered}
                  blogDetail={element.excerpt.rendered}
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
        <div className="container">
          <>
            <button
              disabled={this.state.page<=1}
              onClick={this.handlePreClick}
              className="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
            
             &larr; Previous
            </button>
            <button
              onClick={this.handleNxtClick}
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next &rarr;
            </button>
          </>
        </div>
      </section>
    );
  }
}
