import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuidv4 } from 'uuid';
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
      totalResults: 0,
      page: 1
    };
    document.title = `${this.capitalize(this.props.category)} - Trappist News`;
  }

  updateNews = async () => {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(40)
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.updateNews()
  }

  fetchMoreNews = async () =>{
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({page: this.state.page + 1})
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  render() {
    return (
      <>
       <div className="container my-6 px-6 mx-auto">
  <section className="mb-32 text-gray-800 text-center">
            <h1 className="text-3xl font-bold text-center pb-2 mb-4">{this.capitalize(this.props.category)} - Trappist News</h1>
            
           
            {this.state.loading && <Spinner />}
           
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreNews}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
            <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
              {this.state.articles.map((element) => {
                  return (
                    <div className="mb-6 lg:mb-0">
        <div className="relative block bg-white rounded-lg shadow-lg">
                    <NewsItem
                      key={element.url + uuidv4()}
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
                      author={element.author?" by "+element.author:""}
                      source={element.source.name}
                      date={element.publishedAt}
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
