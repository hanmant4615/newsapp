import React, { Component } from 'react'
import Newcontent from './Newcontent'
export class News extends Component {
  articles = [
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Manish Singh",
        "title": "Google-backed Glance acquires gaming platform Gambit in NFT push",
        "description": "Glance has acquired India’s Gambit as the Google-backed firm looks to supercharge its mobile games offerings and introduce NFTs to its Gen-Z users, TechCrunch has learned and confirmed. Piyush Shah, co-founder of InMobi Group and COO of Glance, confirmed the …",
        "url": "https://techcrunch.com/2022/03/24/google-backed-glance-acquires-gaming-platform-gambit-in-nft-push/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/02/glance-jio-platforms-india.jpg?w=593",
        "publishedAt": "2022-03-25T04:46:00Z",
        "content": "Glance has acquired India’s Gambit as the Google-backed firm looks to supercharge its mobile games offerings and introduce NFTs to its Gen-Z users, TechCrunch has learned and confirmed.\r\nPiyush Shah,… [+346 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Taylor Hatmaker",
        "title": "Former TikTok content moderators file lawsuit over 'psychological trauma'",
        "description": "A pair of former TikTok content reviewers is suing the company, alleging that it failed to adequately support them as they engaged in the deeply disturbing work of removing objectionable videos from the social network. NPR first reported the lawsuit, which wa…",
        "url": "https://techcrunch.com/2022/03/24/former-tiktok-content-moderators-file-lawsuit-over-psychological-trauma/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/03/GettyImages-1238371359.jpeg?w=600",
        "publishedAt": "2022-03-25T04:17:35Z",
        "content": "A pair of former TikTok content reviewers is suing the company, alleging that it failed to adequately support them as they engaged in the deeply disturbing work of removing objectionable videos from … [+2421 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Natasha Lomas",
        "title": "Europe says yes to messaging interoperability as it agrees major new regime for big tech",
        "description": "Late Thursday the European Union secured agreement on the detail of a major competition reform that will see the most powerful, intermediating tech platforms subject to a set of up-front rules on how they can and cannot operate — with the threat of fines of u…",
        "url": "https://techcrunch.com/2022/03/24/dma-political-agreement/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-519417096.jpg?w=600",
        "publishedAt": "2022-03-25T00:48:01Z",
        "content": "Late Thursday the European Union secured agreement on the detail of a major competition reform that will see the most powerful, intermediating tech platforms subject to a set of up-front rules on how… [+8885 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Alex Wilhelm, Haje Jan Kamps",
        "title": "Daily Crunch: Wearable health tracker Oura has sold more than a million rings",
        "description": "Hello friends and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
        "url": "https://techcrunch.com/2022/03/24/daily-crunch-wearable-health-tracker-oura-has-sold-more-than-a-million-rings/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/11/CMC_0713.jpg?w=600",
        "publishedAt": "2022-03-24T22:48:29Z",
        "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PT, subscribe here.\r\nHello and welcome to Daily Crunch for Thursday, March 24, 2022! I a… [+6047 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Connie Loizos",
        "title": "Too much email? Try Gated, which asks unknown senders to make a donation first",
        "description": "If you aren’t drowning in email these days, you either don’t have an email account or you are a very young person who marketers haven’t discovered quite yet (they will!). To push back against the assault, a 10-month-old, Bay Area-based startup called Gated ha…",
        "url": "https://techcrunch.com/2022/03/24/too-much-email-try-gated-which-asks-unknown-senders-to-make-a-donation-first/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-675974744.jpg?w=518",
        "publishedAt": "2022-03-24T21:12:58Z",
        "content": "If you aren’t drowning in email these days, you either don’t have an email account or you are a very young person who marketers haven’t discovered quite yet (they will!).\r\nTo push back against the as… [+3808 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Andrew Tarantola",
        "title": "Polestar's long range single motor Polestar 2 arrives in the US",
        "description": "Following the release of its dual-motor variant late last year, Polestar announced that the 270-mile long range, single-motor version of its Polestar 2 EV is now available for sale in the US.",
        "url": "https://techcrunch.com/2022/03/24/polestars-long-range-single-motor-polestar-2-arrives-in-the-us/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/04/polestar-2.jpg?w=533",
        "publishedAt": "2022-03-24T20:55:24Z",
        "content": "More posts by this contributor\r\nFollowing the release of its dual-motor variant late last year, Polestar announced on Wednesday that the 270-mile long range, single-motor version of its Polestar 2 EV… [+1081 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Aisha Malik",
        "title": "Netflix adds two more games, will release its first first-person shooter title soon",
        "description": "Streaming service Netflix is expanding its gaming lineup once again with the launch of two more titles, which went live on Tuesday. The new games are called “Shatter Remastered” and “This is A True Story.” The two new titles are now available for iOS and Andr…",
        "url": "https://techcrunch.com/2022/03/24/netflix-adds-games-release-first-person-shooter-game/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/03/shattered-remastered.jpeg?w=711",
        "publishedAt": "2022-03-24T20:46:18Z",
        "content": "Streaming service Netflix is expanding its gaming lineup once again with the launch of two more titles, which went live on Tuesday. The new games are called “Shatter Remastered” and “This is A True S… [+2760 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Brian Heater",
        "title": "Such great heights",
        "description": "The old Gmail inbox is overflowing with agtech pitches, and frankly I only have myself to blame after bringing it up the last two newsletters (damn, just did it again, didn’t?). As for where this whole thing started? I blame the fact that spring officially sp…",
        "url": "https://techcrunch.com/2022/03/24/such-great-heights/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/03/Skyline_Robotics_photo2.jpg?w=482",
        "publishedAt": "2022-03-24T18:30:00Z",
        "content": "The old Gmail inbox is overflowing with agtech pitches, and frankly I only have myself to blame after bringing it up the last two newsletters (damn, just did it again, didnt?). As for where this whol… [+6099 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Manish Singh",
        "title": "Ola to acquire fintech Avail Finance",
        "description": "Ola to acquire fintech Avail Finance as the ride-hailing giant looks to expand its financial services offerings",
        "url": "https://techcrunch.com/2022/03/24/ola-avail-finance-family-game/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/03/ola-acquires-avail-finance.jpg?w=764",
        "publishedAt": "2022-03-24T18:24:04Z",
        "content": "Ola said on Thursday evening it has reached an agreement to acquire Avail Finance, a financial services startup that serves the blue-collar workforce, as the ride-hailing giant looks to expand its fi… [+1507 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Lucas Matney, Anita Ramaswamy",
        "title": "TechCrunch debuts ‘Chain Reaction,’ a new podcast about the wild world of web3",
        "description": "Few topics in tech are more confusing or intimidating than crypto.  The industry has attracted trillions in investment, but it can still be tough to even buy tokens or NFTs, let alone understand what these things actually do. As a result, crypto has courted a…",
        "url": "https://techcrunch.com/2022/03/24/techcrunch-debuts-chain-reaction-a-new-podcast-about-the-wild-world-of-web3/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/03/7A74CAB3-A994-457F-BB7A-09C3FD52B85A-1096-000000688608C2F9.jpg?w=600",
        "publishedAt": "2022-03-24T18:15:20Z",
        "content": "Few topics in tech are more confusing or intimidating than crypto. \r\nThe industry has attracted trillions in investment, but it can still be tough to even buy tokens or NFTs, let alone understand wha… [+1533 chars]"
    }
]
  constructor()
  {
    super();
    this.state=
    {
      articles :  this.articles,
    loading :false
    }
  }

  render() {
    return (
      <div className='container'>
        <h2>
          Top-Headlines
        </h2>
      <div className="row">
        {this.state.articles.map((Element)=>{
          return <div className='col-md-4' key ={Element.url} >
          <Newcontent title ={Element.title} description ={Element.description}
          Imageurl={Element.urlToImage} url = {Element.url} />
          </div>
        })}
      
      </div>
     
    </div>

    )
  }
}

export default News