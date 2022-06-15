import React, { useEffect, useState } from 'react';
import PopBlogItem from './PopBlogItem';
export default function PopBlogsFunc() {
  
  const [ blogData, setBlogData ] = useState([]);
  
  useEffect( ()=> {
    getBlogData();
  }, [])

  async function getBlogData(){
    const blogApi = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed"
    const result = await fetch(blogApi);
    const getResult = await result.json();
    setBlogData(getResult)
  
  }
  // uncomment the console log to log blogData, it'll give a array.
  // console.log(blogData)
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {blogData.map((element)=>{
          return <PopBlogItem key={element.id} blogTitle={element.title.rendered} blogDetail={element.excerpt.rendered} blogImgUrl={element.jetpack_featured_media_url?element.jetpack_featured_media_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID8CAckRSwj7DyX1BfOOohtFSUnfcPE9hag&usqp=CAU"} blogUrl={element.link} />
        })}
      </div>
    </div>
  </section>
  )
}
