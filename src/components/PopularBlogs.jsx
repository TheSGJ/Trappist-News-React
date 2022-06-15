import React, { Component } from 'react'
import PopBlogItem from './PopBlogItem';

export default class PopularBlogs extends Component {
  constructor(){
    super();
    // console.log("Debugging Home component constructer!")
    this.state = {
      blogArticles: [],
      loading: false,
    }
  }
  async componentDidMount(){
    // console.log("Debugging PopularBlogs CDM!");
    let blogApi = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed";
    let result = await fetch(blogApi);
    let getResult = await result.json()
    console.log(getResult);
    this.setState({blogArticles: getResult})
  }
  render() {
    return (
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {this.state.blogArticles.map((element)=>{
            return <PopBlogItem key={element.id} blogTitle={element.title.rendered} blogDetail={element.excerpt.rendered} blogImgUrl={element.jetpack_featured_media_url?element.jetpack_featured_media_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID8CAckRSwj7DyX1BfOOohtFSUnfcPE9hag&usqp=CAU"} blogUrl={element.link} />
          })}
        </div>
      </div>
    </section>
    )
  }
}
