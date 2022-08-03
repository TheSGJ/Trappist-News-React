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
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.updateNews()
  }

  fetchMoreNews = async () =>{
    this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
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
      <><section className="text-gray-600 body-font">
          <div className="container px-5 py-4 mx-auto">
            <h1 className="text-3xl font-bold text-center pb-2 mb-4">{this.capitalize(this.props.category)} - Trappist News</h1>
            
            <div className="my-4">
            {this.state.loading && <Spinner />}
            </div>
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreNews}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
            <div className="flex flex-wrap -m-4">
              {this.state.articles.map((element) => {
                  return (
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
                      author={element.author}
                      source={element.source.name}
                      date={element.publishedAt}
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
