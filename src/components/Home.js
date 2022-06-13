import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class Home extends Component {
  
  articles = [
    {
      "source": { "id": "reddit-r-all", "name": "Reddit /r/all" },
      "author": null,
      "title": "Paramount+ Canada - Watch TV Shows, Movies, Originals and More",
      "description": "Try Paramount+ Canada free for 7 days. Watch thousands of hours of the world's best entertainment, including your favourite shows, movies, originals and exclusives commercial-free and at a great price.",
      "url": "https://alb.reddit.com/cr?z=gAAAAABipSckLIFoD7sckuxBDCwq9sdad6rVSTpUQ2GY2MqwSwU3hmjNYfVa_njeB1nn5EcG9Pn23iSK8Jk2l5puhjOLEKxUgo5FY8K9hn1GLtHlQ6EcveLXV_yq5ZD1MVkJjxWVmc1e3SKXtmVtei-E7Wup-v4IeEw1LuIRg-CdSJ212HFsxIjHnIbQaPRxt549gj5dy9WCWBk4tZJ12-2tdlWkjDPbVk3il0Ne26hSc2hQujREut8HQPge_VHZvhz7G_ZUHMTEDIpDmUwWYygalYac7UvqgR7w1PLtucclyPfcb_gCEdOOBTgwQeEPuvoZpf5ahi4eE-8jjza_a4OQv79_9XdxeLUIoqadRRKUbckqzU37INSA3j7OviugZz6nM84hf9CEWGXK5AeJ-JcTwYZdRpuWoQekL15XG1Vcbl9RAg0qMR-wDcOAMCeP3Tx4EyVZwgeLjzkamAmRnOaRMC3nQ-2PFfbAtDR9xRRG2bei6Tz5hASV5b8BYBW8VKvxi4feA-cy_AOz0IezfjhdbmJoIMX9niYE7RC4BPswsEyx2kIxA_suqnmY24qQu31ctt_ZmwUnMWqWSZmQ_43nAv5de2stKqmcHoZm0lRDaDXCyh1J5eA78CBJf5-9s5BgsuRCFYmTjMX5ltJkUzE4PemfV-NgBsUsJqJTudHpsJtSsJJ4LPgJLHKblk1KOIOoNtzviMb31Pc7uklMOLzyzR1cSsLLWFXaQVkfLzej3G9a2U7Xm0PH8tTWvrKTg8Cs3Z0ew3XXvEzOX7yT6XzNHZR66wYifkoRNqojMZGVx1uGr2wCh2qYEOXhYsKVyTlq000lV0GefR6fMt5JXS0Q3mtLjGiugU079zpbY1HHAhmkhRB-PWYw-F_GD2Ah_6cy_I8fGpSPgZoBSwW37SPrKVnVVxSPsG_ZOqAo_Q9cwWzcInP-P2fd8N-5-i2wsq9WlZCEwJc6hCqFZQXgTPe36_yf3PyvaR-F4tsIQeTuJ_g4u11QD3TLtHLeMITVyiGl61Ti0Kbh_R5nnjv1JI6uRaoYjVCkeROSqoeXVteE3gYXEkN487J_r23K6dEiuyVQsyBxJkp-O5wll7SeBJ4UF9EuKMBbnoLGg2SslwCw1abnC0h7xu8Ph5mFFPcE0b1olhwRkfTKkZxsghn7OdNPDmeudZKl6lSq3ZaXfICQaGwgwRVw4d-M8iM90NCdMMhGQiOLpgHmUNp7DYOVsaVAeGRei_otB5w0mV1MBbex03TWBQA9FgTAbcTUx5ufT-vFkCEtm3r7Nj7tsqu9M4trR4pLs713W8NnbJ4H1l0WEmCHxFErrXiwGH5tSpX-hyIEWcv-R75oaii5uqMzfex1_GfZo-VWdEjQuMkj7nv86dYRxcvIIBInfSR1fC5TAmNMgV3aSSYvQYPakOdREFEx9LYOmZmloHQaa7m7aW2jaaBj9CAjkJnwZ5bWb8aMHkctIlyfPDoCJzOlh9hJQbvXf0lJbi5eX-8H-EAWtqe-pZcVBeW3mdNAfQqHxqVm1ljf9Fb1QeiFZRYXX90NaVJPHdj7hz4IbXa1SiGV_7fe_4JGaKRSpO1guu-McJVha-ytPIbh_zPzDMM86bUdFHy4mSZv2wxN4xcBVSoF5mRW8zSv6pE_GNVDTy_pGPvbNZxUpPQXBxLYGoP31ri7VgHgYXOAm0whmbbG0VixUTNAkO2pMTsfm_KCgRjVwzr57uZ4u9Ofd24NgreYa9rS-kUkn84zZ2RtI41_h8ZBQq9g-wzmw3KSClqUXMnuIg-D7UOvqTK2DgDfHYNTcS1SiKk-bMkYSbz0s0AjIO6jVT5MDEMbB0IUtPb4zt8icE_apRa0KCt6HekXKb_8gpZkFpj4aVQFV4teu8spRbkUqjhakx_Szj106F035DXkoaJzR_icTHhBgfPenkozn8-I9XbHVc4w2IB-qaZoBbAbBnRs16mf6vHbzD9o5L9B8n1H255iP61TcRTHHsU_jyuqX-zdPmZJ9e66p_AkbkdKxKW0XQmdYEc-BHz7k0Q0azR_-Agwhi0ybMWyRYP_NLth6dqmqJQ45C3-NUufxIREVP4QTlqvlyEhsHWVUarTv8DQScY0Ea39ux6kUj5roJUa3ZUoYRjwBoVAcucS-bXdqINRnHl_yjeWvaBTNy_LOWuboHKwN0nvsczfxqrfU6BEQ3C00cdaE0TA8qsgvSLoMXeM83Hk5rl2FNh6N3z0wp7_aHKxkj1y7LXaDwqCaCvMUHZK1JJcLo1ZgFKOee0C3zS4gKnBjVKJpWYFj7AgDmN88wABiJmSNO7CgBftuJYF-ycy41V2kdYUtjFgpqR1zp5_4nJTRwjdYmTaXlObPXyVHC1jzc-tUafU7G52UW01e5tVZG5c8hTurtzA8SpHlZYJMTZn9uCdqMSOXr7G9VKfTsYncD6xgXqpm9iLnzzkDkUtjmRDv0CzXovLiyt8B33EzFCLYC2iaEKV5Oleg6M0SBfxS7LZZjRVWFnuFtV3cL-yzGAtQuqpd45krmvs7RlNizQL1pS004OarkcA9bwp8SFw_DmvuwGLnZPjT-PYqcmpzNAKuoinVQqEaJR0NjNrOSCvRGrdSZzU-7HejOclr1Y5VCVwJlleJ_Sds9uEz-O22tkUWxg45igMjpnWs_lL4njAczfvxc0sbK8NLSub8HnHUWA_QnSXMGUxCe0KxijtCFvAYWV47dBWJYKna2QQ7DqDVbiCo-ZuTOXmVM_pVaKTtqxAY_7a",
      "urlToImage": "https://www.paramountplus.com/assets/pplus/PPlus_Logo_1200x630_BLUE.png",
      "publishedAt": "2022-06-11T23:37:44.5281797Z",
      "content": null
    },
    {
      "source": { "id": "ign", "name": "IGN" },
      "author": "Carlos Morales",
      "title": "Jurassic World: Fallen Kingdom Is the Sequel the Jurassic Franchise Always Needed - IGN",
      "description": "In the latest entry of our retrospective on the Jurassic Park movies, we look at how Jurassic World: Fallen Kingdom is the sequel the Jurassic franchise always needed.",
      "url": "https://www.ign.com/articles/jurassic-world-fallen-kingdom-is-the-sequel-the-jurassic-franchise-always-needed",
      "urlToImage": "https://assets-prd.ignimgs.com/2022/06/09/jp-05-blogroll-1654802183848.jpg?width=1280",
      "publishedAt": "2022-06-10T15:05:32Z",
      "content": "The smash-hit success of Jurassic World quickly led to the greenlighting of two additional sequels. Unlike the original three films which feel far more standalone in comparison, this new trilogy fits… [+8518 chars]"
    },
    {
      "source": { "id": "techradar", "name": "TechRadar" },
      "author": "Axel Metz",
      "title": "8 new movies and TV shows on Netflix, Prime Video, HBO Max and more this weekend (June 10)",
      "description": "Peaky Blinders and Ms. Marvel lead this week’s arrivals",
      "url": "https://www.techradar.com/news/8-new-movies-and-tv-shows-on-netflix-prime-video-hbo-max-and-more-this-weekend-june-10-2022",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/xz4H7SUWBDS2wLFtE6VsU-1200-80.png",
      "publishedAt": "2022-06-10T14:00:00Z",
      "content": "Like clockwork, another slew of huge new movies and TV shows has arrived on streaming services to clog up your already stacked watchlist for 2022. \r\nThis weekend is a particularly unique case, mind y… [+7383 chars]"
    },
    {
      "source": { "id": "usa-today", "name": "USA Today" },
      "author": null,
      "title": "Daily Briefing",
      "description": "The day's top stories, from sports to movies to politics to world events.",
      "url": "https://profile.usatoday.com/newsletters/daily-briefing/",
      "urlToImage": "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
      "publishedAt": "2021-08-15T15:35:07+00:00",
      "content": "The day's top stories, from sports to movies to politics to world events."
    }
  ]
  constructor(){
    super();
    console.log("Debugging Home component constructer!")
    this.state = {
      articles: this.articles,
      loading: false,
    }
  }
  async componentDidMount(){
    console.log("Debugging CDM!");
    let url = "/sample_data.json";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {this.state.articles.map((element)=>{
                return <NewsItem key={element.url} title={element.title} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage?element.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID8CAckRSwj7DyX1BfOOohtFSUnfcPE9hag&usqp=CAU"} newsUrl={element.url} />
              })}
            </div>
          </div>
        </section>

    );
  }
}
