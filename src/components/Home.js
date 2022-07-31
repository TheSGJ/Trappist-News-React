import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export default class Home extends Component {
  static defaultProps = {
    pageSize: 5,
    country: "in",
    category: "general",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalize(this.props.category)} - Trappist News`;
  }

  updateNews = async () => {
    window.scrollTo(0, 0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&${this.state.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
   
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&${this.state.api}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
    
  
  handleHomePreClick = async () => {
    
    await this.setState({
      page: this.state.page - 1
    });
    this.updateNews()
    
  };
  handleHomeNxtClick = async () => {
 
      await this.setState({
        page: this.state.page + 1
      });
      this.updateNews()
      
    
  };
  
  render() {
    return (
      <><section className="text-gray-600 body-font">
          <div className="container px-5 py-4 mx-auto">
            <h1 className="text-3xl font-bold text-center pb-2 mb-4">{this.capitalize(this.props.category)} - Trappist News</h1>
            
            <div className="my-4">
            {this.state.loading && <Spinner />}
            </div>
            <div className="flex flex-wrap -m-4">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <NewsItem
                      key={element.url}
                      title={element.title}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID8CAckRSwj7DyX1BfOOohtFSUnfcPE9hag&usqp=CAU"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      source={element.source.name}
                      date={element.publishedAt}
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
                onClick={this.handleHomePreClick}
                className="h-10 px-5 mx-1 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded focus:shadow-outline hover:bg-indigo-100"
              >
               &larr; Previous
              </button>
            </li>
            <li>
              <button
                onClick={this.handleHomeNxtClick}
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
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
