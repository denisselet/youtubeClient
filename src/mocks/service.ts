

mock.onPost('https://www.googleapis.com/youtube/v3/videos?id=vw1sNInhS4Q,n4bQL3DxWdY,x6D51-pz2A4,7D4K9oi7oBM,DHV9ED5D_-I,JT0MmZcJ2Vw,o0IsBUaoTrQ,R-7fpak6wIo,-K0AMR0xJr8,ldzSTtvRiJg,niZKysMXzfI,Mxbdqz-kTzk,FapmFlhASHw,iT4sd1oYO3g,p03TIGqEc8o&part=snippet,statistics&key=AIzaSyBtvd_0ahfOAYQr9ZI6Lu7bgp5in9QDXsU').reply(async (config) => {

  try {
    if (!user || user.password !== password) {
      return [
        400,
        { message: 'Verify that your email and password are correct' }
      ];
    }


    return [
      200,
      {
        "kind": "youtube#videoListResponse",
        "etag": "Y5Kle_j8TvYvcQ24ahUktO_g7fI",
        "items": [
          {
            "kind": "youtube#video",
            "etag": "LRqgj4Rjslo7Jm-sRZsgaXQIYBQ",
            "id": "vw1sNInhS4Q",
            "snippet": {
              "publishedAt": "2024-03-24T11:25:24Z",
              "channelId": "UCR60_HSQe4sNvH53qbRxTQw",
              "title": "🌈 ULTIMATE ART CHALLENGE 😻 Drawing Hacks🎨 📚 Type of Students By 123 GO! TRENDS",
              "description": "How would you add rainbows🌈 to your room? Let us know in the comments! And don’t forget to share this video with your friends, like, and subscribe to our channel for more great videos like this one!\r\n\r\n#123go #rainbow #parenting\r\n\r\n\nHey guys! Do you like our videos? ❤️ Then like and share this video with your friends! We will be very pleased! \r\n\r\nSUBSCRIBE TO OUR CHANNEL \r\n⭐https://www.youtube.com/channel/UCR60_HSQe4sNvH53qbRxTQw⭐\r\n\r\n▶️ TheSoul Music:\r\n https://www.music.thesoul-publishing.com\r\n◉ Our Spotify: https://sptfy.com/TheSoulMusic\r\n◉ TikTok: https://www.tiktok.com/@thesoul.music\r\n◉ YouTube: https://m.youtube.com/channel/UCPo7CKRiDGn4h-H0RK5JdfA \r\n\r\nMusic by Epidemic Sound: https://www.epidemicsound.com/\r\nStock materials: https://www.depositphotos.com https://www.shutterstock.com\r\n\r\nThis video is made for entertainment purposes. We do not make any warranties about the completeness, safety and reliability. Any action you take upon the information on this video is strictly at your own risk, and we will not be liable for any damages or losses. It is the viewer's responsibility to use judgment, care and precautions if one plans to replicate.\r\n\r\nThe following video might feature activity performed by our actors within controlled environment - please use judgment, care, and precaution if you plan to replicate.\r\n\r\nAll product and company names shown in the video are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/vw1sNInhS4Q/default_live.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/vw1sNInhS4Q/mqdefault_live.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/vw1sNInhS4Q/hqdefault_live.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/vw1sNInhS4Q/sddefault_live.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/vw1sNInhS4Q/maxresdefault_live.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "123 GO! TRENDS",
              "tags": [
                "#123go"
              ],
              "categoryId": "26",
              "liveBroadcastContent": "live",
              "localized": {
                "title": "🌈 ULTIMATE ART CHALLENGE 😻 Drawing Hacks🎨 📚 Type of Students By 123 GO! TRENDS",
                "description": "How would you add rainbows🌈 to your room? Let us know in the comments! And don’t forget to share this video with your friends, like, and subscribe to our channel for more great videos like this one!\r\n\r\n#123go #rainbow #parenting\r\n\r\n\nHey guys! Do you like our videos? ❤️ Then like and share this video with your friends! We will be very pleased! \r\n\r\nSUBSCRIBE TO OUR CHANNEL \r\n⭐https://www.youtube.com/channel/UCR60_HSQe4sNvH53qbRxTQw⭐\r\n\r\n▶️ TheSoul Music:\r\n https://www.music.thesoul-publishing.com\r\n◉ Our Spotify: https://sptfy.com/TheSoulMusic\r\n◉ TikTok: https://www.tiktok.com/@thesoul.music\r\n◉ YouTube: https://m.youtube.com/channel/UCPo7CKRiDGn4h-H0RK5JdfA \r\n\r\nMusic by Epidemic Sound: https://www.epidemicsound.com/\r\nStock materials: https://www.depositphotos.com https://www.shutterstock.com\r\n\r\nThis video is made for entertainment purposes. We do not make any warranties about the completeness, safety and reliability. Any action you take upon the information on this video is strictly at your own risk, and we will not be liable for any damages or losses. It is the viewer's responsibility to use judgment, care and precautions if one plans to replicate.\r\n\r\nThe following video might feature activity performed by our actors within controlled environment - please use judgment, care, and precaution if you plan to replicate.\r\n\r\nAll product and company names shown in the video are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them."
              },
              "defaultAudioLanguage": "en-US"
            },
            "statistics": {
              "viewCount": "7890",
              "likeCount": "56",
              "favoriteCount": "0",
              "commentCount": "0"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "4t8OKdDEQphA4aoYkwLTjyrKIDs",
            "id": "n4bQL3DxWdY",
            "snippet": {
              "publishedAt": "2024-03-07T13:47:25Z",
              "channelId": "UCRqs0TZOqe5nrwP-BrdnCjg",
              "title": "Pati hua kidnap 😂😂 || jaanvi Patel #shorts",
              "description": "",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/n4bQL3DxWdY/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/n4bQL3DxWdY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/n4bQL3DxWdY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/n4bQL3DxWdY/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/n4bQL3DxWdY/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "jaanvi patel",
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Pati hua kidnap 😂😂 || jaanvi Patel #shorts",
                "description": ""
              }
            },
            "statistics": {
              "viewCount": "33130224",
              "likeCount": "987279",
              "favoriteCount": "0",
              "commentCount": "836"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "2XzLW_zpX125KdBoK-ap8PbGHiI",
            "id": "x6D51-pz2A4",
            "snippet": {
              "publishedAt": "2019-06-05T12:35:02Z",
              "channelId": "UCI5iQEzvqILjpJ4dEiPlM0w",
              "title": "Learn 1 to 10 Numbers & Fruit Names | 123 Number Names | 1234 Counting for Kids | Cartoon Video",
              "description": "Learn 1 to 10 Numbers & Fruit Names | 123 Number Names | 1234 Counting for Kids | Cartoon Video\n\nThis video is a kids cartoon which will help them learn numbers 1 to 10. Visuals in the form of colorful cartoons is a treat for the kids. Toddlers & babies love colors hence we have used colourful colourful numbers & fruits to create this numbers video. We produce very simple and fun loving straight forward videos for children & kids so that learning becomes easy. Our 3D & 2D animated videos have lots of colours so that kids get engrossed and learn from the educational videos we produce. We also use sounds for comic effects accompanied with background music which again makes the video more interesting for kids. Parents, teachers, kindergarten schools, preschools, Montessori going toddlers, babies, kids and children will surely enjoy the elearning baby videos that we have created.\n\nOur collection of Nursery Rhyme Songs, Children Songs, Kids Songs, Baby Songs, Nursery Songs, ABC Songs will surely help your kids learn quick with entertainment and good music. Preschool & Kindergarten School Teachers can show our channel which has 3D animation videos to toddlers & babies to teach them basics like ABCD Songs & rhymes. Making learning & education fun is our passion. Hope you like the content we create. Please don’t forget to like & share. Loads of Love – Teddy & Timmy Poems For Kids.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/x6D51-pz2A4/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/x6D51-pz2A4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/x6D51-pz2A4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/x6D51-pz2A4/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/x6D51-pz2A4/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Teddy & Timmy Edutainment - Education & Kids Songs",
              "tags": [
                "numbers",
                "number",
                "count",
                "counting",
                "123",
                "1234",
                "12345",
                "0 1 2 3 4 5 6 7 8 9 10",
                "1 to 10",
                "10",
                "100",
                "1000",
                "one",
                "ten",
                "hundred",
                "kids",
                "children",
                "cartoon",
                "cartoons",
                "preschool",
                "kindergarten",
                "abc",
                "abcs",
                "abcd",
                "poems for kids",
                "nursery rhymes",
                "rhyme",
                "learn",
                "learning",
                "education",
                "elearning",
                "baby",
                "number song",
                "number names",
                "video",
                "song",
                "animation",
                "toddlers"
              ],
              "categoryId": "27",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Learn 1 to 10 Numbers & Fruit Names | 123 Number Names | 1234 Counting for Kids | Cartoon Video",
                "description": "Learn 1 to 10 Numbers & Fruit Names | 123 Number Names | 1234 Counting for Kids | Cartoon Video\n\nThis video is a kids cartoon which will help them learn numbers 1 to 10. Visuals in the form of colorful cartoons is a treat for the kids. Toddlers & babies love colors hence we have used colourful colourful numbers & fruits to create this numbers video. We produce very simple and fun loving straight forward videos for children & kids so that learning becomes easy. Our 3D & 2D animated videos have lots of colours so that kids get engrossed and learn from the educational videos we produce. We also use sounds for comic effects accompanied with background music which again makes the video more interesting for kids. Parents, teachers, kindergarten schools, preschools, Montessori going toddlers, babies, kids and children will surely enjoy the elearning baby videos that we have created.\n\nOur collection of Nursery Rhyme Songs, Children Songs, Kids Songs, Baby Songs, Nursery Songs, ABC Songs will surely help your kids learn quick with entertainment and good music. Preschool & Kindergarten School Teachers can show our channel which has 3D animation videos to toddlers & babies to teach them basics like ABCD Songs & rhymes. Making learning & education fun is our passion. Hope you like the content we create. Please don’t forget to like & share. Loads of Love – Teddy & Timmy Poems For Kids."
              },
              "defaultAudioLanguage": "en"
            },
            "statistics": {
              "viewCount": "84076430",
              "likeCount": "223575",
              "favoriteCount": "0",
              "commentCount": "0"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "otmOE-bz70zeOce899ZZFnQc1Dw",
            "id": "7D4K9oi7oBM",
            "snippet": {
              "publishedAt": "2015-03-27T10:00:00Z",
              "channelId": "UCLsooMJoIpl_7ux2jvdPB-Q",
              "title": "Top 10 Counting Songs | Learn To Count | Super Simple Songs",
              "description": "More great Super Simple videos in the Super Simple App for iOS ► http://apple.co/2nW5hPd\n\nWe love counting! Counting down. Counting up. Counting to 5. Counting to 20. Counting  potatoes. Counting bananas. Counting teddy bears. Counting monkeys. This is a collection of ten of our favorite counting songs. Let's get started with some counting!\n\nListen to Super Simple Songs on Spotify: https://spoti.fi/2ofnaZg\nListen to Super Simple Songs on Apple Music: https://apple.co/2pBcg0j\nOr, just ask your smart speaker to play Super Simple Songs!\nPARENTS AND TEACHERS: Thank you so much for watching Super Simple Songs with your families and/or students. If your young ones are watching without supervision, we recommend some of the following viewing options:\n► SUPER SIMPLE APP -- http://bit.ly/SuperSimpleApp\nBe the first to watch new Super Simple videos in the Super Simple App! Ad-free and designed for young learners.\n► DOWNLOAD -- http://bit.ly/SuperSimpleShop\nVideos from all Super Simple channels are available for purchase at the Super Simple online shop. You can also find some DVDs there.\n► YOUTUBE KIDS -- http://bit.ly/You-Tube-Kids\nDesigned to make it safer and simpler for young ones to watch online video, YouTube Kids includes a suite of parental controls so you can tailor the experience to suit your family’s needs.\n► AMAZON VIDEO\nAre you an Amazon Prime member? Watch Super Simple videos ad-free on Amazon Prime Video. Just search for “Super Simple.”\n► KHAN ACADEMY KIDS -- http://bit.ly/KhanKids-App\nSuper Simple has partnered with Khan Academy on their latest app designed for preschoolers. You’ll find Super Simple Songs worked into the curriculum throughout the app.\n► PLAYKIDS -- http://bit.ly/Play-Kids\nDo you have the PlayKids app? You can find many of our Super Simple Songs and programs in the app!\n\nFREE SUPER SIMPLE TEACHING RESOURCES: http://bit.ly/SSFree-Resources\n\nSOCIAL MEDIA:\nSuper Simple Newsletter Sign Up: http://bit.ly/SuperSimpleSignUp\nFacebook: http://bit.ly/SuperSimpleFacebook\nInstagram: http://bit.ly/SuperSimpleInsta\nTwitter: http://bit.ly/SuperSimpleTwitter\nPinterest: http://bit.ly/SuperSimplePinterest\n\nHere are the songs in this collection:\nCount And Move\nCounting Bananas\nOne Potato, Two Potatoes\nFive Little Monkeys\nTen In The Bed\nSeven Steps\n10 Little Elves\nFive Creepy Spiders\nOne For You, One For Me\nCount Down And Move\n\nAll original and adapted songs, and all arrangements, copyright Super Simple Learning.\n\n******\nGet FREE resources like coloring sheets, games, flashcards, and worksheets for most of these songs in the Super Simple Learning Resource Center:\nhttp://supersimplelearning.com/resource-center/\n\n******\nSuper Simple Songs® and Super Simple Learning® are registered trademarks of Super Simple Learning, Inc.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/7D4K9oi7oBM/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/7D4K9oi7oBM/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/7D4K9oi7oBM/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/7D4K9oi7oBM/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/7D4K9oi7oBM/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Super Simple Songs - Kids Songs",
              "tags": [
                "www.supersimplelearning.com",
                "Five Little Monkeys",
                "nursery",
                "kindergarten",
                "Preschool",
                "Nursery Rhyme (Literature Subject)",
                "Super Simple Learning",
                "Counting songs for kids",
                "Ten In The Bed",
                "One Potato Two Potatoes",
                "Top",
                "toddlerific",
                "Counting songs",
                "counting songs for preschool",
                "counting songs for kindergarten",
                "Best",
                "Super Simple Songs",
                "rhymes",
                "English songs for kids"
              ],
              "categoryId": "27",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "Top 10 Counting Songs | Learn To Count | Super Simple Songs",
                "description": "More great Super Simple videos in the Super Simple App for iOS ► http://apple.co/2nW5hPd\n\nWe love counting! Counting down. Counting up. Counting to 5. Counting to 20. Counting  potatoes. Counting bananas. Counting teddy bears. Counting monkeys. This is a collection of ten of our favorite counting songs. Let's get started with some counting!\n\nListen to Super Simple Songs on Spotify: https://spoti.fi/2ofnaZg\nListen to Super Simple Songs on Apple Music: https://apple.co/2pBcg0j\nOr, just ask your smart speaker to play Super Simple Songs!\nPARENTS AND TEACHERS: Thank you so much for watching Super Simple Songs with your families and/or students. If your young ones are watching without supervision, we recommend some of the following viewing options:\n► SUPER SIMPLE APP -- http://bit.ly/SuperSimpleApp\nBe the first to watch new Super Simple videos in the Super Simple App! Ad-free and designed for young learners.\n► DOWNLOAD -- http://bit.ly/SuperSimpleShop\nVideos from all Super Simple channels are available for purchase at the Super Simple online shop. You can also find some DVDs there.\n► YOUTUBE KIDS -- http://bit.ly/You-Tube-Kids\nDesigned to make it safer and simpler for young ones to watch online video, YouTube Kids includes a suite of parental controls so you can tailor the experience to suit your family’s needs.\n► AMAZON VIDEO\nAre you an Amazon Prime member? Watch Super Simple videos ad-free on Amazon Prime Video. Just search for “Super Simple.”\n► KHAN ACADEMY KIDS -- http://bit.ly/KhanKids-App\nSuper Simple has partnered with Khan Academy on their latest app designed for preschoolers. You’ll find Super Simple Songs worked into the curriculum throughout the app.\n► PLAYKIDS -- http://bit.ly/Play-Kids\nDo you have the PlayKids app? You can find many of our Super Simple Songs and programs in the app!\n\nFREE SUPER SIMPLE TEACHING RESOURCES: http://bit.ly/SSFree-Resources\n\nSOCIAL MEDIA:\nSuper Simple Newsletter Sign Up: http://bit.ly/SuperSimpleSignUp\nFacebook: http://bit.ly/SuperSimpleFacebook\nInstagram: http://bit.ly/SuperSimpleInsta\nTwitter: http://bit.ly/SuperSimpleTwitter\nPinterest: http://bit.ly/SuperSimplePinterest\n\nHere are the songs in this collection:\nCount And Move\nCounting Bananas\nOne Potato, Two Potatoes\nFive Little Monkeys\nTen In The Bed\nSeven Steps\n10 Little Elves\nFive Creepy Spiders\nOne For You, One For Me\nCount Down And Move\n\nAll original and adapted songs, and all arrangements, copyright Super Simple Learning.\n\n******\nGet FREE resources like coloring sheets, games, flashcards, and worksheets for most of these songs in the Super Simple Learning Resource Center:\nhttp://supersimplelearning.com/resource-center/\n\n******\nSuper Simple Songs® and Super Simple Learning® are registered trademarks of Super Simple Learning, Inc."
              },
              "defaultAudioLanguage": "en"
            },
            "statistics": {
              "viewCount": "63467451",
              "likeCount": "91981",
              "favoriteCount": "0",
              "commentCount": "0"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "yuSEfHCgYM0o5PAtZcipMZH6hX4",
            "id": "DHV9ED5D_-I",
            "snippet": {
              "publishedAt": "2019-01-02T13:15:17Z",
              "channelId": "UCI5iQEzvqILjpJ4dEiPlM0w",
              "title": "Number Song | 123 Numbers | Number Names | 1 To 10 | Counting for Kids | Learn to Count Video",
              "description": "Number Song | 123 Numbers | Number Names | 1 To 10 | Counting for Kids | Learn to Count Video\n\nThis video is a kids cartoon which will help them learn numbers 1 to 10. Visuals in the form of colorful cartoons is a  treat for the kids. Toddlers & babies love colors hence we have used colourful balls to create numbers. We produce very simple and fun loving straight forward videos for children & kids so that learning becomes easy. Our 3D & 2D animated videos have lots of colours so that kids get engrossed and learn from the educational videos we produce. We also use sounds for comic effects accompanied with background music which again makes the video more interesting for kids. Parents, teachers, kindergarten schools, preschools, Montessori going toddlers, babies, kids and children will surely enjoy the elearning baby videos that we have created.\n\nOur collection of Nursery Rhyme Songs, Children Songs, Kids Songs, Baby Songs, Nursery Songs, ABC Songs will surely help your kids learn quick with entertainment and good music. Preschool & Kindergarten School Teachers can show our channel which has 3D animation videos to toddlers & babies to teach them basics like ABCD Songs & rhymes. Making learning & education fun is our passion. Hope you like the content we create. Please don’t forget to like & share. Loads of Love – Teddy & Timmy Poems For Kids.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/DHV9ED5D_-I/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/DHV9ED5D_-I/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/DHV9ED5D_-I/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/DHV9ED5D_-I/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/DHV9ED5D_-I/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Teddy & Timmy Edutainment - Education & Kids Songs",
              "tags": [
                "numbers",
                "number",
                "count",
                "counting",
                "123",
                "1234",
                "12345",
                "0 1 2 3 4 5 6 7 8 9 10",
                "1 to 10",
                "10",
                "100",
                "1000",
                "one",
                "ten",
                "hundred",
                "kids",
                "children",
                "cartoon",
                "cartoons",
                "preschool",
                "kindergarten",
                "abc",
                "abcs",
                "abcd",
                "poems for kids",
                "nursery rhymes",
                "rhyme",
                "learn",
                "learning",
                "education",
                "elearning",
                "baby",
                "number song",
                "number names",
                "video",
                "song",
                "animation",
                "toddlers"
              ],
              "categoryId": "27",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Number Song | 123 Numbers | Number Names | 1 To 10 | Counting for Kids | Learn to Count Video",
                "description": "Number Song | 123 Numbers | Number Names | 1 To 10 | Counting for Kids | Learn to Count Video\n\nThis video is a kids cartoon which will help them learn numbers 1 to 10. Visuals in the form of colorful cartoons is a  treat for the kids. Toddlers & babies love colors hence we have used colourful balls to create numbers. We produce very simple and fun loving straight forward videos for children & kids so that learning becomes easy. Our 3D & 2D animated videos have lots of colours so that kids get engrossed and learn from the educational videos we produce. We also use sounds for comic effects accompanied with background music which again makes the video more interesting for kids. Parents, teachers, kindergarten schools, preschools, Montessori going toddlers, babies, kids and children will surely enjoy the elearning baby videos that we have created.\n\nOur collection of Nursery Rhyme Songs, Children Songs, Kids Songs, Baby Songs, Nursery Songs, ABC Songs will surely help your kids learn quick with entertainment and good music. Preschool & Kindergarten School Teachers can show our channel which has 3D animation videos to toddlers & babies to teach them basics like ABCD Songs & rhymes. Making learning & education fun is our passion. Hope you like the content we create. Please don’t forget to like & share. Loads of Love – Teddy & Timmy Poems For Kids."
              },
              "defaultAudioLanguage": "en"
            },
            "statistics": {
              "viewCount": "256065529",
              "likeCount": "626738",
              "favoriteCount": "0",
              "commentCount": "0"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "gAVF9jiH-0Q9HDxohwOQhw5mChM",
            "id": "JT0MmZcJ2Vw",
            "snippet": {
              "publishedAt": "2020-01-03T11:00:06Z",
              "channelId": "UCBnZ16ahKA2DZ_T5W0FPUXg",
              "title": "ChuChu TV Classics - Numbers Song - Learn to Count from 1 to 10 | Nursery Rhymes and Kids Songs",
              "description": "This song is available to listen on all music streaming platforms.- https://orcd.co/chuchutvhits\n\nHave fun listening to ChuChu TV's songs on Spotify: https://chuchu.me/Spotify\n.\n.\n. Please Subscribe to our channel - https://bit.ly/32NxN7y\n\nNEW 3D Animated Nursery Rhymes with Baby Taku from ChuChu TV:\n\nBaby goes to Old MacDonald’s Farm - https://www.youtube.com/watch?v=mBgOlyGpKrw\nBaby Loves Stargazing - Twinkle Twinkle Little Star - https://www.youtube.com/watch?v=s1DtPUYby94\nBaby is Sick Song - https://www.youtube.com/watch?v=NjIEhuRG0Ks\nPat A Cake Song - https://www.youtube.com/watch?v=XuLy-llv3sU\nChuChu's Baa Baa Black Sheep - https://www.youtube.com/watch?v=0FxhksvgHcw\nThe Boo Boo Song - https://www.youtube.com/watch?v=Tmqbbt-yyUQ\nBaby's Humpty Dumpty Song - https://www.youtube.com/watch?v=x8oinWzA0Fs\nBaby's First Steps Song - https://www.youtube.com/watch?v=sWkiwlFQ7cQ\nBath Song 2 - https://www.youtube.com/watch?v=Qs_ll8GwhIE\nBaby Care and Share Song - https://www.youtube.com/watch?v=UYMm_zgAGaQ\nNo No Brush My Teeth Song - https://www.youtube.com/watch?v=fyI_eCTPT_A\nThe Muffin Man - https://www.youtube.com/watch?v=ZjbvlfxTgQw\nNo No Milk Song - https://www.youtube.com/watch?v=kgRF3qhXlqI\nColor Song - The Wheels On The Bus - https://www.youtube.com/watch?v=C4hvMJOvXWo\nHello Song - https://www.youtube.com/watch?v=El9VkQCh4sg\nABC Song with ChuChu Toy Train - https://www.youtube.com/watch?v=Nkmarl4ynRM\nDoctor Checkup Song - https://www.youtube.com/watch?v=R3XAfpxqfqQ\nYes Yes Fruits Song - https://www.youtube.com/watch?v=nKm0g1boEhE\nWheels on the Bus Song - Baby Starts Crying - https://www.youtube.com/watch?v=0FwA-1hMAb4\nBaa Baa Black Sheep Song - Colors of the Rainbow - https://www.youtube.com/watch?v=_OuH7Ihbf-c\nBaby Goes Swimming Song - https://www.youtube.com/watch?v=YvKHNShAaa4\nHickory Dickory Dock - https://www.youtube.com/watch?v=Z2jRSAOdwx0\nJohny Johny Yes Papa - Grandparents Version - https://www.youtube.com/watch?v=GAtj5v27heE\nNo No Yes Yes Go to School Song - https://www.youtube.com/watch?v=4GcLWywzQXY\nYes Yes Wake Up Song - https://www.youtube.com/watch?v=V7si2KRHLls\n\nNursery rhymes in English,Piosenki dla dzieci po angielsku, canciones en inglés para niños,เพลงภาษาอังกฤษสำหรับเด็ก, Comptines en anglais,Kinderlieder in Englisch, Lagu-lagu anak berbahasa Inggeris, Musik Untuk Anak,Engelse kinderliedjes, Músicas em inglês para crianças, Gyerekzene, barnvisorna på engelska, 英文兒歌, Písničky v angličtině, أناشيد أطفال باللغة الإنجليزية, अंग्रेजी में नर्सरी कविताएं, Barnerim på engelsk, Canzoni per bambini in inglese \n\n===============================================\nVideo: Copyright 2020 ChuChu TV® Studios\nMusic and Lyrics: Copyright 2020 ChuChu TV® Studios\nChuChu TV ®, Cutians ®, all the characters and logos \nused are the registered trademarks of ChuChu TV Studios\n===============================================\n\n#ChuChuTV #NurseryRhymes",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/JT0MmZcJ2Vw/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/JT0MmZcJ2Vw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/JT0MmZcJ2Vw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/JT0MmZcJ2Vw/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/JT0MmZcJ2Vw/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "ChuChu TV Nursery Rhymes & Kids Songs",
              "tags": [
                "chuchu tv songs 2019",
                "chuchu tv",
                "chuchutv",
                "children songs",
                "baby songs",
                "best nursery rhymes",
                "babies videos",
                "toddler songs",
                "songs for babies",
                "children's story",
                "kindergarten songs",
                "videos for babies",
                "sing-along",
                "children learning",
                "education",
                "kid songs",
                "babies songs",
                "Nursery Rhymes",
                "kids video songs",
                "sing-along songs",
                "best kids songs",
                "kids videos",
                "kids song",
                "Numbers Song",
                "Learn to Count from 1 to 10"
              ],
              "categoryId": "27",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "ChuChu TV Classics - Numbers Song - Learn to Count from 1 to 10 | Nursery Rhymes and Kids Songs",
                "description": "This song is available to listen on all music streaming platforms.- https://orcd.co/chuchutvhits\n\nHave fun listening to ChuChu TV's songs on Spotify: https://chuchu.me/Spotify\n.\n.\n. Please Subscribe to our channel - https://bit.ly/32NxN7y\n\nNEW 3D Animated Nursery Rhymes with Baby Taku from ChuChu TV:\n\nBaby goes to Old MacDonald’s Farm - https://www.youtube.com/watch?v=mBgOlyGpKrw\nBaby Loves Stargazing - Twinkle Twinkle Little Star - https://www.youtube.com/watch?v=s1DtPUYby94\nBaby is Sick Song - https://www.youtube.com/watch?v=NjIEhuRG0Ks\nPat A Cake Song - https://www.youtube.com/watch?v=XuLy-llv3sU\nChuChu's Baa Baa Black Sheep - https://www.youtube.com/watch?v=0FxhksvgHcw\nThe Boo Boo Song - https://www.youtube.com/watch?v=Tmqbbt-yyUQ\nBaby's Humpty Dumpty Song - https://www.youtube.com/watch?v=x8oinWzA0Fs\nBaby's First Steps Song - https://www.youtube.com/watch?v=sWkiwlFQ7cQ\nBath Song 2 - https://www.youtube.com/watch?v=Qs_ll8GwhIE\nBaby Care and Share Song - https://www.youtube.com/watch?v=UYMm_zgAGaQ\nNo No Brush My Teeth Song - https://www.youtube.com/watch?v=fyI_eCTPT_A\nThe Muffin Man - https://www.youtube.com/watch?v=ZjbvlfxTgQw\nNo No Milk Song - https://www.youtube.com/watch?v=kgRF3qhXlqI\nColor Song - The Wheels On The Bus - https://www.youtube.com/watch?v=C4hvMJOvXWo\nHello Song - https://www.youtube.com/watch?v=El9VkQCh4sg\nABC Song with ChuChu Toy Train - https://www.youtube.com/watch?v=Nkmarl4ynRM\nDoctor Checkup Song - https://www.youtube.com/watch?v=R3XAfpxqfqQ\nYes Yes Fruits Song - https://www.youtube.com/watch?v=nKm0g1boEhE\nWheels on the Bus Song - Baby Starts Crying - https://www.youtube.com/watch?v=0FwA-1hMAb4\nBaa Baa Black Sheep Song - Colors of the Rainbow - https://www.youtube.com/watch?v=_OuH7Ihbf-c\nBaby Goes Swimming Song - https://www.youtube.com/watch?v=YvKHNShAaa4\nHickory Dickory Dock - https://www.youtube.com/watch?v=Z2jRSAOdwx0\nJohny Johny Yes Papa - Grandparents Version - https://www.youtube.com/watch?v=GAtj5v27heE\nNo No Yes Yes Go to School Song - https://www.youtube.com/watch?v=4GcLWywzQXY\nYes Yes Wake Up Song - https://www.youtube.com/watch?v=V7si2KRHLls\n\nNursery rhymes in English,Piosenki dla dzieci po angielsku, canciones en inglés para niños,เพลงภาษาอังกฤษสำหรับเด็ก, Comptines en anglais,Kinderlieder in Englisch, Lagu-lagu anak berbahasa Inggeris, Musik Untuk Anak,Engelse kinderliedjes, Músicas em inglês para crianças, Gyerekzene, barnvisorna på engelska, 英文兒歌, Písničky v angličtině, أناشيد أطفال باللغة الإنجليزية, अंग्रेजी में नर्सरी कविताएं, Barnerim på engelsk, Canzoni per bambini in inglese \n\n===============================================\nVideo: Copyright 2020 ChuChu TV® Studios\nMusic and Lyrics: Copyright 2020 ChuChu TV® Studios\nChuChu TV ®, Cutians ®, all the characters and logos \nused are the registered trademarks of ChuChu TV Studios\n===============================================\n\n#ChuChuTV #NurseryRhymes"
              },
              "defaultAudioLanguage": "en"
            },
            "statistics": {
              "viewCount": "433610736",
              "likeCount": "1169972",
              "favoriteCount": "0",
              "commentCount": "0"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "tLaxF_iiIX5ssUrGJp07_anuCoQ",
            "id": "o0IsBUaoTrQ",
            "snippet": {
              "publishedAt": "2021-04-22T17:37:00Z",
              "channelId": "UCx96yiXiRJwjDutYUYqk8FQ",
              "title": "123 Song | Learn Counting & Numbers | Count to 10 | 123",
              "description": "123 Song for Kids | Learn Counting & Numbers | Count to 10 Nursery Rhyme\n\nCounting from 1 to 10 has never been easier with this 123 Song for Kids by Mega Fun Kids Songs & Nursery Rhymes!\n\n------- More of our videos to check out:\nPhonics Song with Two Words + ABC Song - https://youtu.be/HIRLdT9SGTM\nOld MacDonald Had a Farm - https://youtu.be/A4ofeZGnYIk\nABC Song - https://youtu.be/ezmsrB59mj8\nCount to 10 Song - https://youtu.be/rYO_NFsIavE\n\nOne Two Three Song - One to Ten Counting Song - 123\n\n#Counting #Numbers #1to10",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/o0IsBUaoTrQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/o0IsBUaoTrQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/o0IsBUaoTrQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/o0IsBUaoTrQ/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/o0IsBUaoTrQ/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Mega Fun Kids Songs & Nursery Rhymes",
              "tags": [
                "23 song",
                "count to 10",
                "counting",
                "numbers",
                "123",
                "count to 10 song",
                "1 to 10",
                "1 to 10 song",
                "1234 song",
                "1234",
                "counting song",
                "numbers song",
                "for kids",
                "learn counting",
                "learn numbers",
                "learn 123",
                "kids",
                "children",
                "nursery rhymes",
                "education",
                "educational",
                "mega fun kids songs",
                "count from 1 to 10",
                "counting to 10",
                "123 counting",
                "123 numbers",
                "mega fun",
                "one two three song",
                "one",
                "two",
                "three"
              ],
              "categoryId": "27",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "123 Song | Learn Counting & Numbers | Count to 10 | 123",
                "description": "123 Song for Kids | Learn Counting & Numbers | Count to 10 Nursery Rhyme\n\nCounting from 1 to 10 has never been easier with this 123 Song for Kids by Mega Fun Kids Songs & Nursery Rhymes!\n\n------- More of our videos to check out:\nPhonics Song with Two Words + ABC Song - https://youtu.be/HIRLdT9SGTM\nOld MacDonald Had a Farm - https://youtu.be/A4ofeZGnYIk\nABC Song - https://youtu.be/ezmsrB59mj8\nCount to 10 Song - https://youtu.be/rYO_NFsIavE\n\nOne Two Three Song - One to Ten Counting Song - 123\n\n#Counting #Numbers #1to10"
              },
              "defaultAudioLanguage": "en-GB"
            },
            "statistics": {
              "viewCount": "18849330",
              "likeCount": "16378",
              "favoriteCount": "0",
              "commentCount": "0"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "xxFyGEpWaZqRdbICSfTXtlQjnXs",
            "id": "R-7fpak6wIo",
            "snippet": {
              "publishedAt": "2022-09-28T13:00:14Z",
              "channelId": "UCI5iQEzvqILjpJ4dEiPlM0w",
              "title": "Learn To Count Numbers | 123 Counting | 1234 Number Train | Preschool & Kindergarten Education",
              "description": "#numbers #number #123 \n\nThis #video is a kids #cartoon which will help them #learn Numbers & Animal Names with the help of everyday objects. Visuals in the form of colorful cartoons is a treat for the kids. #Toddlers & #babies love #colors hence we have used colourful balls to create this entertaining video for children. We produce very simple and fun loving straight forward videos for #children & kids so that learning becomes easy. Our 3D & 2D animated videos have lots of colours so that kids get engrossed and learn from the #educational videos we produce. We also use sounds for comic effects accompanied with background music which again makes the video more interesting for kids. Parents, teachers, #kindergarten schools, preschools, Montessori going toddlers, babies, kids and children will surely enjoy the elearning #baby videos that we have created.\n\nOur collection of Nursery Rhyme Songs, Children Songs, Kids Songs, Baby Songs, Nursery Songs, #ABC Songs will surely help your kids learn quick with entertainment and good music. #Preschool & Kindergarten School Teachers can show our channel which has 3D animation videos to toddlers & babies to teach them basics like #ABCD Songs & rhymes. Making learning & education fun is our passion. Hope you like the content we create. Please don’t forget to like & share. Loads of Love – Teddy & Timmy Edutainment – Education & Kids Songs.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/R-7fpak6wIo/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/R-7fpak6wIo/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/R-7fpak6wIo/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/R-7fpak6wIo/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/R-7fpak6wIo/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Teddy & Timmy Edutainment - Education & Kids Songs",
              "tags": [
                "numbers",
                "number",
                "count",
                "counting",
                "123",
                "1234",
                "12345",
                "0 1 2 3 4 5 6 7 8 9 10",
                "1 to 10",
                "10",
                "100",
                "1000",
                "one",
                "ten",
                "hundred",
                "kids",
                "children",
                "cartoon",
                "cartoons",
                "preschool",
                "kindergarten",
                "abc",
                "abcs",
                "abcd",
                "poems for kids",
                "nursery rhymes",
                "rhyme",
                "learn",
                "learning",
                "education",
                "elearning",
                "baby",
                "number song",
                "number names",
                "video",
                "song",
                "animation",
                "toddlers",
                "10000",
                "thousand"
              ],
              "categoryId": "27",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "Learn To Count Numbers | 123 Counting | 1234 Number Train | Preschool & Kindergarten Education",
                "description": "#numbers #number #123 \n\nThis #video is a kids #cartoon which will help them #learn Numbers & Animal Names with the help of everyday objects. Visuals in the form of colorful cartoons is a treat for the kids. #Toddlers & #babies love #colors hence we have used colourful balls to create this entertaining video for children. We produce very simple and fun loving straight forward videos for #children & kids so that learning becomes easy. Our 3D & 2D animated videos have lots of colours so that kids get engrossed and learn from the #educational videos we produce. We also use sounds for comic effects accompanied with background music which again makes the video more interesting for kids. Parents, teachers, #kindergarten schools, preschools, Montessori going toddlers, babies, kids and children will surely enjoy the elearning #baby videos that we have created.\n\nOur collection of Nursery Rhyme Songs, Children Songs, Kids Songs, Baby Songs, Nursery Songs, #ABC Songs will surely help your kids learn quick with entertainment and good music. #Preschool & Kindergarten School Teachers can show our channel which has 3D animation videos to toddlers & babies to teach them basics like #ABCD Songs & rhymes. Making learning & education fun is our passion. Hope you like the content we create. Please don’t forget to like & share. Loads of Love – Teddy & Timmy Edutainment – Education & Kids Songs."
              },
              "defaultAudioLanguage": "en"
            },
            "statistics": {
              "viewCount": "9812014",
              "likeCount": "20534",
              "favoriteCount": "0",
              "commentCount": "0"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "clhbUizMcXPIvtPssRxGySgbH-I",
            "id": "-K0AMR0xJr8",
            "snippet": {
              "publishedAt": "2020-09-15T02:25:37Z",
              "channelId": "UCsCe7SNQckiRJ6y563SIupg",
              "title": "Numbers Song for Children - 1 to 20 Number Train | 123s |  Nursery Rhymes for Babies | Jugnu Kids",
              "description": "Numbers Song for Children - 1 to 20 Number Train | 123s |  Nursery Rhymes for Babies | Jugnu Kids\nJohny johny yes papa - https://www.youtube.com/watch?v=3ECXo_DJ8BM\nMusic Song | Raing | Rain Rain Go Away - https://www.youtube.com/watch?v=ZwIprCglckw\nHappy Birthday Song for kids - https://www.youtube.com/watch?v=6WsyyAeDkEc\nPhonic Song - Alphabet Song for kids - https://www.youtube.com/watch?v=je2_qSZLb1Q\nRinga Ringa Roses - https://www.youtube.com/watch?v=XtDmLPPOde4\nHaunted house - https://www.youtube.com/watch?v=A7bSNac7DDY\nThe Wheels on the bus - https://www.youtube.com/watch?v=u4A07iFgM3o&t=435s\nApples and Bananas - https://www.youtube.com/watch?v=waWukw1vf0M&t=290s\nDon’t get sick - https://www.youtube.com/watch?v=2DcL7V_uvP4&t=69s\nABC Song | Alphabet Song - https://www.youtube.com/watch?v=w7poDqKrmOY\nChubby Cheeks - https://www.youtube.com/watch?v=9cJmdsBur98&t=1349s\nBaby Shark Doo doo doo - https://www.youtube.com/watch?v=k-9QyfSnh1s&t=6s\n\nA new compilation video, including one of our most recent songs,  \n\nSee more nursery rhymes in playlist \n\n+More Nursery Rhymes & Kids Songs - ABCs and 123s\nhttps://www.youtube.com/playlist?list=PLixG27jLUjdAEYjAMApzIwlg6C7xWEHHk\n\nJugnu Kids Nursery Rhymes and Baby Songs | The Wheels on the Bus\nhttps://www.youtube.com/watch?v=JtxxUg4Ev-8&list=PLixG27jLUjdAuA0QdR56uFdrVV9v4wIBk\n\nBest Job & Occupation Songs for Kids | What Do You Want to Be | Kids Pretend Play | Nursery Rhymes\nhttps://www.youtube.com/watch?v=MFUlWNpXw_o&list=PLixG27jLUjdDsmIvc7vslyZ2Tnmy8BxnN\n\n\nTop Nursery Rhymes and Kids Songs Collection\nhttps://www.youtube.com/watch?v=slyV4fTpx7U&list=PLixG27jLUjdBCx_ecDSMw7rWRwwfq0EE4\n\n\nNursery Rhymes for Kids\nhttps://www.youtube.com/watch?v=sIujib-JJGc&list=PLixG27jLUjdBYLlBNvTykc0NyFlraPNBq\n\nNursery rhymes - Educational and learning video collection for kids\nhttps://www.youtube.com/watch?v=_5BU70hIAZc&list=PLixG27jLUjdCHBG26-AwBJPW-11ZhHu8G\n\nNursery Rhymes and Baby Songs in 3D \nhttps://www.youtube.com/playlist?list=PLixG27jLUjdAEYjAMApzIwlg6C7xWEHHk\n\nJugnu kids world Where kids can be happy and Safe\n\nAt Jugnu kids, we are dedicated to creating quality, educational videos for kids aged 2 - 5 by creating classic nursery rhymes, kids songs and stories with 2D & 3D animations with the help of singing and dancing cute characters, which can help kids learn all about letters, numbers, shapes, colors, animals, and so much more!\n\nJugnu kids is a one stop solution for kids education like kindergarten where parents find fun, quality and educational content to teach and play with their kids. \nYour kids will love our friendly characters and colorful animated videos while seeing  ABC, Wheels on the Bus, Cars Show and more daily routine video like Bath Song, Sleeping Song, Brushing Songs and so on. \n\nJugnu Kids Make Videos for - \nTeaching good habits and responsibility for kids \nTeach your children good manners and communication skills\nThink Independently \nExplore the Beautiful World\n\nNursery rhymes in English,Piosenki dla dzieci po angielsku, canciones en inglés para niños,เพลงภาษาอังกฤษสำหรับเด็ก, Comptines en anglais,Kinderlieder in Englisch, Lagu-lagu anak berbahasa Inggeris, Musik Untuk Anak,Engelse kinderliedjes, Músicas em inglês para crianças, Gyerekzene, barnvisorna på engelska, 英文兒歌, Písničky v angličtině, أناشيد أطفال باللغة الإنجليزية, अंग्रेजी में नर्सरी कविताएं, Barnerim på engelsk, Canzoni per bambini in inglese          \n\n#nurseryrhymes #kidssongs #babysongs  #jugnukids #youtubecartoon #kidsvideos #cartoonforkids \n\n\nnursery rhymes,songs for children,children learning,playground song,बेबी गाने,kids song,kindergarten songs,education,best nursery rhymes,बच्चे के गाने सीखना,sing-along,영어동요 모음,kids video songs,toddler songs,rhyme,children songs,kid songs,yes yes playground song,boo boo song,little baby bum,yes yes playground,sing-along songs,best kids songs,rhymes for children",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/-K0AMR0xJr8/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/-K0AMR0xJr8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/-K0AMR0xJr8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/-K0AMR0xJr8/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/-K0AMR0xJr8/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Jugnu Kids - Nursery Rhymes and Best Baby Songs",
              "tags": [
                "nursery rhymes",
                "songs for children",
                "children learning",
                "playground song",
                "बेबी गाने",
                "kids song",
                "kindergarten songs",
                "education",
                "best nursery rhymes",
                "बच्चे के गाने सीखना",
                "sing-along",
                "영어동요 모음",
                "kids video songs",
                "toddler songs",
                "rhyme",
                "children songs",
                "kid songs",
                "yes yes playground song",
                "boo boo song",
                "yes yes playground",
                "sing-along songs",
                "best kids songs",
                "rhymes for children",
                "number song",
                "123s",
                "123 number",
                "learn 123",
                "learn numbers for kids",
                "learn numbers 1 to 100",
                "jugnu kids"
              ],
              "categoryId": "27",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Numbers Song for Children - 1 to 20 Number Train | 123s |  Nursery Rhymes for Babies | Jugnu Kids",
                "description": "Numbers Song for Children - 1 to 20 Number Train | 123s |  Nursery Rhymes for Babies | Jugnu Kids\nJohny johny yes papa - https://www.youtube.com/watch?v=3ECXo_DJ8BM\nMusic Song | Raing | Rain Rain Go Away - https://www.youtube.com/watch?v=ZwIprCglckw\nHappy Birthday Song for kids - https://www.youtube.com/watch?v=6WsyyAeDkEc\nPhonic Song - Alphabet Song for kids - https://www.youtube.com/watch?v=je2_qSZLb1Q\nRinga Ringa Roses - https://www.youtube.com/watch?v=XtDmLPPOde4\nHaunted house - https://www.youtube.com/watch?v=A7bSNac7DDY\nThe Wheels on the bus - https://www.youtube.com/watch?v=u4A07iFgM3o&t=435s\nApples and Bananas - https://www.youtube.com/watch?v=waWukw1vf0M&t=290s\nDon’t get sick - https://www.youtube.com/watch?v=2DcL7V_uvP4&t=69s\nABC Song | Alphabet Song - https://www.youtube.com/watch?v=w7poDqKrmOY\nChubby Cheeks - https://www.youtube.com/watch?v=9cJmdsBur98&t=1349s\nBaby Shark Doo doo doo - https://www.youtube.com/watch?v=k-9QyfSnh1s&t=6s\n\nA new compilation video, including one of our most recent songs,  \n\nSee more nursery rhymes in playlist \n\n+More Nursery Rhymes & Kids Songs - ABCs and 123s\nhttps://www.youtube.com/playlist?list=PLixG27jLUjdAEYjAMApzIwlg6C7xWEHHk\n\nJugnu Kids Nursery Rhymes and Baby Songs | The Wheels on the Bus\nhttps://www.youtube.com/watch?v=JtxxUg4Ev-8&list=PLixG27jLUjdAuA0QdR56uFdrVV9v4wIBk\n\nBest Job & Occupation Songs for Kids | What Do You Want to Be | Kids Pretend Play | Nursery Rhymes\nhttps://www.youtube.com/watch?v=MFUlWNpXw_o&list=PLixG27jLUjdDsmIvc7vslyZ2Tnmy8BxnN\n\n\nTop Nursery Rhymes and Kids Songs Collection\nhttps://www.youtube.com/watch?v=slyV4fTpx7U&list=PLixG27jLUjdBCx_ecDSMw7rWRwwfq0EE4\n\n\nNursery Rhymes for Kids\nhttps://www.youtube.com/watch?v=sIujib-JJGc&list=PLixG27jLUjdBYLlBNvTykc0NyFlraPNBq\n\nNursery rhymes - Educational and learning video collection for kids\nhttps://www.youtube.com/watch?v=_5BU70hIAZc&list=PLixG27jLUjdCHBG26-AwBJPW-11ZhHu8G\n\nNursery Rhymes and Baby Songs in 3D \nhttps://www.youtube.com/playlist?list=PLixG27jLUjdAEYjAMApzIwlg6C7xWEHHk\n\nJugnu kids world Where kids can be happy and Safe\n\nAt Jugnu kids, we are dedicated to creating quality, educational videos for kids aged 2 - 5 by creating classic nursery rhymes, kids songs and stories with 2D & 3D animations with the help of singing and dancing cute characters, which can help kids learn all about letters, numbers, shapes, colors, animals, and so much more!\n\nJugnu kids is a one stop solution for kids education like kindergarten where parents find fun, quality and educational content to teach and play with their kids. \nYour kids will love our friendly characters and colorful animated videos while seeing  ABC, Wheels on the Bus, Cars Show and more daily routine video like Bath Song, Sleeping Song, Brushing Songs and so on. \n\nJugnu Kids Make Videos for - \nTeaching good habits and responsibility for kids \nTeach your children good manners and communication skills\nThink Independently \nExplore the Beautiful World\n\nNursery rhymes in English,Piosenki dla dzieci po angielsku, canciones en inglés para niños,เพลงภาษาอังกฤษสำหรับเด็ก, Comptines en anglais,Kinderlieder in Englisch, Lagu-lagu anak berbahasa Inggeris, Musik Untuk Anak,Engelse kinderliedjes, Músicas em inglês para crianças, Gyerekzene, barnvisorna på engelska, 英文兒歌, Písničky v angličtině, أناشيد أطفال باللغة الإنجليزية, अंग्रेजी में नर्सरी कविताएं, Barnerim på engelsk, Canzoni per bambini in inglese          \n\n#nurseryrhymes #kidssongs #babysongs  #jugnukids #youtubecartoon #kidsvideos #cartoonforkids \n\n\nnursery rhymes,songs for children,children learning,playground song,बेबी गाने,kids song,kindergarten songs,education,best nursery rhymes,बच्चे के गाने सीखना,sing-along,영어동요 모음,kids video songs,toddler songs,rhyme,children songs,kid songs,yes yes playground song,boo boo song,little baby bum,yes yes playground,sing-along songs,best kids songs,rhymes for children"
              },
              "defaultAudioLanguage": "en"
            },
            "statistics": {
              "viewCount": "5483577",
              "likeCount": "15030",
              "favoriteCount": "0",
              "commentCount": "0"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "gIad_RPY6r20_fOo-YyX4yvbauo",
            "id": "ldzSTtvRiJg",
            "snippet": {
              "publishedAt": "2024-03-22T13:31:27Z",
              "channelId": "UCpCVVGz-2XCYmXWzsNf5tpw",
              "title": "REVENGE PRANK WARS! || Crazy DIY Pranks! Back to School Hacks and Amazing Ideas by 123 GO! Series",
              "description": "Pranks for every mood and moment! Get ready to LOL, cringe, and maybe even get some sweet revenge with these hilarious pranks for any situation. Whether it's with friends, family, or classmates, these tricks will keep you entertained and mischievous. 😂🙃 \r\n\r\n#123go #pranks #hacks #DIY #funny\nSubscribe to 123 Go! Series 💙 https://www.youtube.com/channel/UCpCVVGz-2XCYmXWzsNf5tpw\r\n \r\n▶️ TheSoul Music: https://www.music.thesoul-publishing.com \r\n◉ Our Spotify: https://sptfy.com/TheSoulMusic \r\n◉ TikTok: https://www.tiktok.com/@thesoul.music \r\n◉ YouTube: https://m.youtube.com/channel/UCPo7CKRiDGn4h-H0RK5JdfA \r\nMusic by Epidemic Sound: https://www.epidemicsound.com/ \r\nStock materials: https://www.depositphotos.com https://www.shutterstock.com\r\n \r\nThis video is made for entertainment purposes. We do not make any warranties about the completeness, safety and reliability. Any action you take upon the information on this video is strictly at your own risk, and we will not be liable for any damages or losses. It is the viewer's responsibility to use judgment, care and precautions if one plans to replicate. The following video might feature activity performed by our actors within controlled environment - please use judgment, care, and precaution if you plan to replicate. All product and company names shown in the video are trademarks™️ or registered®️ trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/ldzSTtvRiJg/default_live.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/ldzSTtvRiJg/mqdefault_live.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/ldzSTtvRiJg/hqdefault_live.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/ldzSTtvRiJg/sddefault_live.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/ldzSTtvRiJg/maxresdefault_live.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "123 GO! Series",
              "categoryId": "26",
              "liveBroadcastContent": "live",
              "localized": {
                "title": "REVENGE PRANK WARS! || Crazy DIY Pranks! Back to School Hacks and Amazing Ideas by 123 GO! Series",
                "description": "Pranks for every mood and moment! Get ready to LOL, cringe, and maybe even get some sweet revenge with these hilarious pranks for any situation. Whether it's with friends, family, or classmates, these tricks will keep you entertained and mischievous. 😂🙃 \r\n\r\n#123go #pranks #hacks #DIY #funny\nSubscribe to 123 Go! Series 💙 https://www.youtube.com/channel/UCpCVVGz-2XCYmXWzsNf5tpw\r\n \r\n▶️ TheSoul Music: https://www.music.thesoul-publishing.com \r\n◉ Our Spotify: https://sptfy.com/TheSoulMusic \r\n◉ TikTok: https://www.tiktok.com/@thesoul.music \r\n◉ YouTube: https://m.youtube.com/channel/UCPo7CKRiDGn4h-H0RK5JdfA \r\nMusic by Epidemic Sound: https://www.epidemicsound.com/ \r\nStock materials: https://www.depositphotos.com https://www.shutterstock.com\r\n \r\nThis video is made for entertainment purposes. We do not make any warranties about the completeness, safety and reliability. Any action you take upon the information on this video is strictly at your own risk, and we will not be liable for any damages or losses. It is the viewer's responsibility to use judgment, care and precautions if one plans to replicate. The following video might feature activity performed by our actors within controlled environment - please use judgment, care, and precaution if you plan to replicate. All product and company names shown in the video are trademarks™️ or registered®️ trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them."
              },
              "defaultAudioLanguage": "en-US"
            },
            "statistics": {
              "viewCount": "136407",
              "likeCount": "415",
              "favoriteCount": "0",
              "commentCount": "0"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "GoeRFeZIMLG9mN2t1odbdQS-FMc",
            "id": "niZKysMXzfI",
            "snippet": {
              "publishedAt": "2022-11-18T20:03:35Z",
              "channelId": "UCrC_ZFYISEAUuCu00y52Evg",
              "title": "Sofia Reyes - 1, 2, 3 (Lyrics) ft. Jason Derulo, De La Ghetto",
              "description": "🎵 Sofia Reyes - 1, 2, 3 (Lyrics) ft. Jason Derulo, De La Ghetto\n⬇️ Download / Stream:  https://spoti.fi/2SJsUcZ\n🔔 Turn on notifications to stay updated with new uploads!\n \n👉  Sofia Reyes:\nhttps://mobile.twitter.com/sofiareyes\nhttps://facebook.com/SoSofiaReyes\nhttps://instagram.com/sofiareyes\n\n........\n🎤 Lyrics: Sofia Reyes - 1, 2, 3 ft. Jason Derulo, De La Ghetto\n\n[Intro: Jason Derulo & De La Ghetto]\nHmm\nSofía, feature his dear\n¡De La!\n\n[Verso 1: Sofía Reyes & De La Ghetto]\nOh, baby, I'm thinkin' maybe\nThat you were always a piece of sh...\nYou're rubbin' your dirt on everyone's skirt\nYou know how to be a d...\n¿D-dónde están tus modales?\n¿Que no aprendiste ni a saludar? (Jajaja)\nParece que hoy me gustas un poco más (Okay)\nHola, comment allez, allez-vous?\nSo nice to meet ya\nYou say we should go and get a room, mm (No)\n[Pre-Coro: Sofía Reyes]\nIf you wanna turn it on\nGo, get a lightbulb, después hablamos (Woo)\nIf you wanna turn it on\nGo, get a lighter, después bailamos\n\n[Coro: Sofía Reyes]\nOh, un, dos, tres, un, dos, tres\nSi te doy un beso ya estás a mis pies\nDime, un, dos, tres, un, dos, tres\nLa, la, la, la, la (La, la, la, la, la)\n\n[Post-Coro]\nLa, la, la, la, la, la, la, hmm\nLa, la, la, la, la, la, la, hmm\nLa, la, la, la, la, la, la, la\nLa, la, la, la, la, la, la, la\n(La, la, la, la, la, la, la, la, la, la)\nLa, la, la, la, la (La, la, la, la, la)\n(La, la, la, la, la, la, la, la)\nLa, la, la, la, la, la, la, la\n\n[Verso 2: Jason Derulo & Sofía Reyes]\nBaby, just hush the talkin'\nAnd let my lovin' ease your mind\nIf love's a game\nLet's play a million times (Mm-hmm)\nBaby, give it to me\nI'll be good company\nBaby, mi nombre es\nJason Derulo, oh\n[Pre-Coro: Sofía Reyes & Jason Derulo]\nIf you wanna turn it on\nGo, get a lightbulb, después hablamos (Hey)\nIf you wanna turn it on\nGo, get a lighter, después bailamos (Ya, ya)\n\n[Coro: Sofia Reyes]\nOh, un, dos, tres, un, dos, tres\nSi te doy un beso ya estás a mis pies\nDime, un, dos, tres (Un, dos, tres), un, dos, tres\nLa, la, la, la, la (La, la, la, la, la)\n\n[Post-Coro]\nLa, la, la, la, la, la, la, hmm\nLa, la, la, la, la, la, la, hmm\nLa, la, la, la, la, la, la, la\nLa, la, la, la, la, la, la, la\n(La, la, la, la, la, la, la, la, la, la)\nLa, la, la, la, la (la, la, la, la, la)\n(La, la, la, la, la, la, la, la)\nLa, la, la, la, la, la, la, la\n\n[Verso 3: De La Ghetto]\nDe La Geezy, baby\nDisculpe la ignorancia, nunca quise lastimarte\nLo que quiero es transformarte en mi diosa, mi obra de arte (ok)\nDime si tú quiere' averiguar cómo se hace\nPrendemo' to'a la noche y a las nubes voy a llevarte\nQuiero yo enseñarte mucha' cosa' interesante' (De La)\nConvertirte en mi dama, en la cama amarrarte (Ok)\nBesarte arriba, abajo, pa' ponerlo interesante (Tú sabe')\nDespués de todo esto nunca vas a olvidarte (Geezy)\n[Puente: Sofía Reyes, Jason Derulo & De La Ghetto]\nHola, comment allez, allez-vous? (Sofía)\n(Wassup, De La, Jason Derulo)\nIt's 'bout time we go and get a room\nOoh, babe\n\n[Pre-Coro: Sofía Reyes & Jason Derulo]\nIf you wanna turn it on (Turn it on)\nGo, get a lightbulb, después hablamos (Hey)\nIf you wanna turn it on\nGo, get a lighter, después bailamos (Yeah, yeah)\n\n[Coro: Sofía Reyes & Jason Derulo]\nOh, un, dos, tres, un, dos, tres\nSi te doy un beso ya estás a mis pies\nDime, un, dos, tres, un, dos, tres\nLa, la, la, la, la\nLa, la, la, la, la\n\n[Outro: Sofía Reyes & Jason Derulo, Jason Derulo, De La Ghetto]\nUn, dos, tres, un, dos, tres\nCare for me, uno, dos, tres\nUn, dos, tres, un, dos, tres\nLove how you count it out for me, babe\nUn, dos, tres, i'ma make you a freak, uh\nCare for me, uno, dos, tres (Con los chulitos, homie)\nUn, dos, tres (Hey), un, dos, tres (Hey)\nLove how you count it out for me, babe\n\n\n.........\n📷 Background: https://unsplash.com/\n.........\n📪 Contact / Demo Submissions: helloroyalmusic@gmail.com\n.........\n💌 Demos / Music Submissions: https://royalmusic.edmdistrict.com\n.........\n\n\n#SofiaReyes #123 #Lyrics #JasonDerulo #DeLaGhetto",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/niZKysMXzfI/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/niZKysMXzfI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/niZKysMXzfI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/niZKysMXzfI/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/niZKysMXzfI/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Royal Music",
              "tags": [
                "123",
                "123 lyrics",
                "lyrics 123",
                "1 2 3 lyrics",
                "lyrics 1 2 3",
                "un dos tres",
                "un dos tres lyrics",
                "sofia reyes",
                "lyrics",
                "jason derulo",
                "dela ghetto",
                "sofia reyes 123",
                "123 sofia reyes",
                "sofia reyes 123 lyrics",
                "lyrics sofia reyes 123",
                "sofia reyes lyrics",
                "lyrics sofia reyes",
                "sofia reyes lyrics 123",
                "123 lyrics sofia reyes",
                "lyrics 123 sofia reyes",
                "123 sofia reyes lyrics",
                "jason derulo 123",
                "jason derulo 123 lyrics",
                "sofia reyes jason derulo 123 lyrics",
                "hola comment allez vous",
                "123 tiktok"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Sofia Reyes - 1, 2, 3 (Lyrics) ft. Jason Derulo, De La Ghetto",
                "description": "🎵 Sofia Reyes - 1, 2, 3 (Lyrics) ft. Jason Derulo, De La Ghetto\n⬇️ Download / Stream:  https://spoti.fi/2SJsUcZ\n🔔 Turn on notifications to stay updated with new uploads!\n \n👉  Sofia Reyes:\nhttps://mobile.twitter.com/sofiareyes\nhttps://facebook.com/SoSofiaReyes\nhttps://instagram.com/sofiareyes\n\n........\n🎤 Lyrics: Sofia Reyes - 1, 2, 3 ft. Jason Derulo, De La Ghetto\n\n[Intro: Jason Derulo & De La Ghetto]\nHmm\nSofía, feature his dear\n¡De La!\n\n[Verso 1: Sofía Reyes & De La Ghetto]\nOh, baby, I'm thinkin' maybe\nThat you were always a piece of sh...\nYou're rubbin' your dirt on everyone's skirt\nYou know how to be a d...\n¿D-dónde están tus modales?\n¿Que no aprendiste ni a saludar? (Jajaja)\nParece que hoy me gustas un poco más (Okay)\nHola, comment allez, allez-vous?\nSo nice to meet ya\nYou say we should go and get a room, mm (No)\n[Pre-Coro: Sofía Reyes]\nIf you wanna turn it on\nGo, get a lightbulb, después hablamos (Woo)\nIf you wanna turn it on\nGo, get a lighter, después bailamos\n\n[Coro: Sofía Reyes]\nOh, un, dos, tres, un, dos, tres\nSi te doy un beso ya estás a mis pies\nDime, un, dos, tres, un, dos, tres\nLa, la, la, la, la (La, la, la, la, la)\n\n[Post-Coro]\nLa, la, la, la, la, la, la, hmm\nLa, la, la, la, la, la, la, hmm\nLa, la, la, la, la, la, la, la\nLa, la, la, la, la, la, la, la\n(La, la, la, la, la, la, la, la, la, la)\nLa, la, la, la, la (La, la, la, la, la)\n(La, la, la, la, la, la, la, la)\nLa, la, la, la, la, la, la, la\n\n[Verso 2: Jason Derulo & Sofía Reyes]\nBaby, just hush the talkin'\nAnd let my lovin' ease your mind\nIf love's a game\nLet's play a million times (Mm-hmm)\nBaby, give it to me\nI'll be good company\nBaby, mi nombre es\nJason Derulo, oh\n[Pre-Coro: Sofía Reyes & Jason Derulo]\nIf you wanna turn it on\nGo, get a lightbulb, después hablamos (Hey)\nIf you wanna turn it on\nGo, get a lighter, después bailamos (Ya, ya)\n\n[Coro: Sofia Reyes]\nOh, un, dos, tres, un, dos, tres\nSi te doy un beso ya estás a mis pies\nDime, un, dos, tres (Un, dos, tres), un, dos, tres\nLa, la, la, la, la (La, la, la, la, la)\n\n[Post-Coro]\nLa, la, la, la, la, la, la, hmm\nLa, la, la, la, la, la, la, hmm\nLa, la, la, la, la, la, la, la\nLa, la, la, la, la, la, la, la\n(La, la, la, la, la, la, la, la, la, la)\nLa, la, la, la, la (la, la, la, la, la)\n(La, la, la, la, la, la, la, la)\nLa, la, la, la, la, la, la, la\n\n[Verso 3: De La Ghetto]\nDe La Geezy, baby\nDisculpe la ignorancia, nunca quise lastimarte\nLo que quiero es transformarte en mi diosa, mi obra de arte (ok)\nDime si tú quiere' averiguar cómo se hace\nPrendemo' to'a la noche y a las nubes voy a llevarte\nQuiero yo enseñarte mucha' cosa' interesante' (De La)\nConvertirte en mi dama, en la cama amarrarte (Ok)\nBesarte arriba, abajo, pa' ponerlo interesante (Tú sabe')\nDespués de todo esto nunca vas a olvidarte (Geezy)\n[Puente: Sofía Reyes, Jason Derulo & De La Ghetto]\nHola, comment allez, allez-vous? (Sofía)\n(Wassup, De La, Jason Derulo)\nIt's 'bout time we go and get a room\nOoh, babe\n\n[Pre-Coro: Sofía Reyes & Jason Derulo]\nIf you wanna turn it on (Turn it on)\nGo, get a lightbulb, después hablamos (Hey)\nIf you wanna turn it on\nGo, get a lighter, después bailamos (Yeah, yeah)\n\n[Coro: Sofía Reyes & Jason Derulo]\nOh, un, dos, tres, un, dos, tres\nSi te doy un beso ya estás a mis pies\nDime, un, dos, tres, un, dos, tres\nLa, la, la, la, la\nLa, la, la, la, la\n\n[Outro: Sofía Reyes & Jason Derulo, Jason Derulo, De La Ghetto]\nUn, dos, tres, un, dos, tres\nCare for me, uno, dos, tres\nUn, dos, tres, un, dos, tres\nLove how you count it out for me, babe\nUn, dos, tres, i'ma make you a freak, uh\nCare for me, uno, dos, tres (Con los chulitos, homie)\nUn, dos, tres (Hey), un, dos, tres (Hey)\nLove how you count it out for me, babe\n\n\n.........\n📷 Background: https://unsplash.com/\n.........\n📪 Contact / Demo Submissions: helloroyalmusic@gmail.com\n.........\n💌 Demos / Music Submissions: https://royalmusic.edmdistrict.com\n.........\n\n\n#SofiaReyes #123 #Lyrics #JasonDerulo #DeLaGhetto"
              },
              "defaultAudioLanguage": "en"
            },
            "statistics": {
              "viewCount": "2729253",
              "likeCount": "23522",
              "favoriteCount": "0",
              "commentCount": "502"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "XUb2tkXPeTE0_-XlEjrWGeY-4Cw",
            "id": "Mxbdqz-kTzk",
            "snippet": {
              "publishedAt": "2023-06-16T12:30:17Z",
              "channelId": "UCI5iQEzvqILjpJ4dEiPlM0w",
              "title": "Learn Numbers From 1 To 10 | 12345 Counting for Kids | 123 Number Names | 1234 Numbers Song",
              "description": "Learn Numbers From 1 To 10 | 12345 Counting for Kids | 123 Number Names | 1234 Numbers Song\n\nThis video is a kids cartoon which will help them learn numbers 1 to 10. Visuals in the form of colorful cartoons is a  treat for the kids. Toddlers & babies love colors hence we have used colourful balls to create numbers. We produce very simple and fun loving straight forward videos for children & kids so that learning becomes easy. Our 3D & 2D animated videos have lots of colours so that kids get engrossed and learn from the educational videos we produce. We also use sounds for comic effects accompanied with background music which again makes the video more interesting for kids. Parents, teachers, kindergarten schools, preschools, Montessori going toddlers, babies, kids and children will surely enjoy the elearning baby videos that we have created.\n\nOur collection of Nursery Rhyme Songs, Children Songs, Kids Songs, Baby Songs, Nursery Songs, ABC Songs will surely help your kids learn quick with entertainment and good music. Preschool & Kindergarten School Teachers can show our channel which has 3D animation videos to toddlers & babies to teach them basics like ABCD Songs & rhymes. Making learning & education fun is our passion. Hope you like the content we create. Please don’t forget to like & share. Loads of Love – Teddy & Timmy Poems For Kids.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/Mxbdqz-kTzk/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/Mxbdqz-kTzk/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/Mxbdqz-kTzk/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/Mxbdqz-kTzk/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/Mxbdqz-kTzk/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Teddy & Timmy Edutainment - Education & Kids Songs",
              "tags": [
                "counting",
                "123",
                "1234",
                "12345",
                "0 1 2 3 4 5 6 7 8 9 10",
                "1 to 10",
                "10",
                "100",
                "1000",
                "one",
                "ten",
                "hundred",
                "kids",
                "children",
                "cartoon",
                "cartoons",
                "preschool",
                "kindergarten",
                "abc",
                "abcs",
                "abcd",
                "poems for kids",
                "nursery rhymes",
                "rhyme",
                "learn",
                "learning",
                "education",
                "elearning",
                "baby",
                "number song",
                "number names",
                "video",
                "song",
                "animation",
                "toddlers"
              ],
              "categoryId": "27",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "Learn Numbers From 1 To 10 | 12345 Counting for Kids | 123 Number Names | 1234 Numbers Song",
                "description": "Learn Numbers From 1 To 10 | 12345 Counting for Kids | 123 Number Names | 1234 Numbers Song\n\nThis video is a kids cartoon which will help them learn numbers 1 to 10. Visuals in the form of colorful cartoons is a  treat for the kids. Toddlers & babies love colors hence we have used colourful balls to create numbers. We produce very simple and fun loving straight forward videos for children & kids so that learning becomes easy. Our 3D & 2D animated videos have lots of colours so that kids get engrossed and learn from the educational videos we produce. We also use sounds for comic effects accompanied with background music which again makes the video more interesting for kids. Parents, teachers, kindergarten schools, preschools, Montessori going toddlers, babies, kids and children will surely enjoy the elearning baby videos that we have created.\n\nOur collection of Nursery Rhyme Songs, Children Songs, Kids Songs, Baby Songs, Nursery Songs, ABC Songs will surely help your kids learn quick with entertainment and good music. Preschool & Kindergarten School Teachers can show our channel which has 3D animation videos to toddlers & babies to teach them basics like ABCD Songs & rhymes. Making learning & education fun is our passion. Hope you like the content we create. Please don’t forget to like & share. Loads of Love – Teddy & Timmy Poems For Kids."
              },
              "defaultAudioLanguage": "en"
            },
            "statistics": {
              "viewCount": "5999438",
              "likeCount": "6461",
              "favoriteCount": "0",
              "commentCount": "0"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "CTsgYO92JaQr-nG6RhEPTCMM9aw",
            "id": "FapmFlhASHw",
            "snippet": {
              "publishedAt": "2022-06-02T22:00:06Z",
              "channelId": "UCPlwvN0w4qFSP1FllALB92w",
              "title": "Count 1 to 5! | Numberblocks 1 Hour Compilation | 123 - Numbers Cartoon For Kids",
              "description": "Learning to count is easy with the Numberblocks! Let's learn to count from 1 to 5 with our fabulous number friends as they explore Numberland!\nNumberblocks COMPILATIONS Playlist: https://youtube.com/playlist?list=PL9swKX1PviEqjP8g3GOY6xRNyyMmABJYs\n\n---\n\nNumberblocks CHRISTMAS Playlist: \nhttps://youtube.com/playlist?list=PL9swKX1PviErxtvAq4PkJQKURyYlSgiVK\n\nNumberblocks Season 5 Playlist:\nhttps://youtube.com/playlist?list=PL9swKX1PviEph7heoMnLEfW2y28kwLNZw\n\nNumberblocks Play-Doh Playlist:\nhttps://youtube.com/playlist?list=PL9swKX1PviEr2p9ynQj3TzvYa4tThkBg4\n\nNumberblocks Back To School Playlist:\nhttps://youtube.com/playlist?list=PL9swKX1PviEqj2z-73QH5WGZHpGcs__Q2\n\nNumberblocks How To Draw Playlist:\nhttps://youtube.com/playlist?list=PL9swKX1PviEr9W44B6aZBWdSm8njKqbdq\n\nNumberblocks Mathlink Cubes Playlist:\nhttps://youtube.com/playlist?list=PL9swKX1PviErQums7EovmGOmfD-ALDxud\n\nMeet The Numberblocks! Playlist:\nhttps://youtube.com/playlist?list=PL9swKX1PviEpG8tTLc4CxhNurFn_cOxra\n\n\nSubscribe for more Numberblocks: https://goo.gl/rF32S8\n\n---\n\nWelcome to Numberland!\n\nBAFTA award-winning Numberblocks helps children to see how numbers really work − and master a new key maths skill with every adventure. It’s a story of friends who can always count on each other − but, most of all, Numberblocks is about having fun with numbers.\n\nEach episode has been carefully crafted with the help of the NCETM (National Centre for Excellence in the Teaching of Mathematics) and brought to life by Blue Zoo Animation Studio.\nWe work closely with the NCETM to make sure Numberblocks delivers the essential numeracy skills that build good number sense and a solid foundation for a lifetime of maths success.\n\u200d\nGet ready for an animated adventure and some number magic that you can count on to help your child learn maths in the most exciting way.\n1, 2, 3 − Let’s go!\n\nNumberblocks has been nominated for the prestigious BAFTA, Prix Jeunesse and The Japan Prize Audiovisual Pre-school awards, and received a BAFTA for Children's Preschool Animation in 2019. Numberblocks is also featured among the DfE's recommended resources for home learning and is part of BBC Bitesize Daily.\n\nWhere to watch Numberblocks\n\nNumberblocks is designed so your child can just press play and have fun while learning essential number skills. 90 episodes take them from number names and counting to a deep understanding of how addition, subtraction, multiplication and division work, via a host of key concepts in between. You can find your favourite characters and episodes on TV, BBC iPlayer, DVD or the Numberblocks YouTube channels\n\n---\n\nWhat happens when numbers come to life?\n\nDive into a world of number fun with the hit CBeebies show, Numberblocks. Award-winning characters + big adventures + singalong songs = the best way to get children excited about everything numbers can do!\n\nIt's easy when you see it!\n\nMaths is SO much easier when you can see how it works. 90 episodes bring hundreds of essential number skills to life with big visuals and amazing animation, from your first encounter with One to mini-musicals, classic comedy, song-and-dance numbers and a nail-biting escape from the double dungeon of doom!\n\nA comprehensive learning journey\n\nThe learning goals behind Numberblocks support maths curricula from around the world, taking young learners step by step through the key topics and skills they need to master for a confident start and a lifelong love of numbers.\n\nPlay and learn\n\nBrilliant Numberblocks apps help children take the learning into their own hands.\n\nGet hands-on\n\nTake the learning further with the Numberblocks Maths Programme − three bumper magazines packed with stickers, colouring and step-by-step hands-on learning activities, plus a special set of Numberblocks blocks.\n\nLet's stay in touch!\n\nWe love to hear from you − your ideas, questions and your little ones’ fantastic creations. Keep up to date with the latest Numberblocks news by following us @Numberblocks on Facebook, Instagram and Twitter and signing up to the Numberblocks Newsletter. Every Monday we share some of your home and school creations, artwork and bakes on Facebook and Instagram so please send us your photos!\n\n---\n\n#Numberblocks #Compilation #LearnToCount #MathForKids #Math #Maths #Numbers #123 #12345 #Kids #KidsVideo #KidsCartoon #PreSchool #1To5 #Counting \n\n---",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/FapmFlhASHw/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/FapmFlhASHw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/FapmFlhASHw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/FapmFlhASHw/sddefault.jpg",
                  "width": 640,
                  "height": 480
                }
              },
              "channelTitle": "Numberblocks",
              "tags": [
                "number blocks",
                "numberblocks",
                "cbeebies",
                "learn to count",
                "learn maths",
                "maths for kids",
                "learning cartoons for kids",
                "cartoons for kids",
                "basic maths",
                "sums for kids",
                "easy sums",
                "numbers for kids",
                "numbers",
                "numbers cartoon for kids",
                "count to ten",
                "count to five",
                "numberblocks compilation",
                "compilation",
                "12345",
                "counting",
                "123456789",
                "1 to 10",
                "1 to 20",
                "counting to ten",
                "60 minutes compilation",
                "1 hour compilation",
                "count to 5",
                "1 to 5",
                "learn 1 to 5",
                "count 1 to 5"
              ],
              "categoryId": "27",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Count 1 to 5! | Numberblocks 1 Hour Compilation | 123 - Numbers Cartoon For Kids",
                "description": "Learning to count is easy with the Numberblocks! Let's learn to count from 1 to 5 with our fabulous number friends as they explore Numberland!\nNumberblocks COMPILATIONS Playlist: https://youtube.com/playlist?list=PL9swKX1PviEqjP8g3GOY6xRNyyMmABJYs\n\n---\n\nNumberblocks CHRISTMAS Playlist: \nhttps://youtube.com/playlist?list=PL9swKX1PviErxtvAq4PkJQKURyYlSgiVK\n\nNumberblocks Season 5 Playlist:\nhttps://youtube.com/playlist?list=PL9swKX1PviEph7heoMnLEfW2y28kwLNZw\n\nNumberblocks Play-Doh Playlist:\nhttps://youtube.com/playlist?list=PL9swKX1PviEr2p9ynQj3TzvYa4tThkBg4\n\nNumberblocks Back To School Playlist:\nhttps://youtube.com/playlist?list=PL9swKX1PviEqj2z-73QH5WGZHpGcs__Q2\n\nNumberblocks How To Draw Playlist:\nhttps://youtube.com/playlist?list=PL9swKX1PviEr9W44B6aZBWdSm8njKqbdq\n\nNumberblocks Mathlink Cubes Playlist:\nhttps://youtube.com/playlist?list=PL9swKX1PviErQums7EovmGOmfD-ALDxud\n\nMeet The Numberblocks! Playlist:\nhttps://youtube.com/playlist?list=PL9swKX1PviEpG8tTLc4CxhNurFn_cOxra\n\n\nSubscribe for more Numberblocks: https://goo.gl/rF32S8\n\n---\n\nWelcome to Numberland!\n\nBAFTA award-winning Numberblocks helps children to see how numbers really work − and master a new key maths skill with every adventure. It’s a story of friends who can always count on each other − but, most of all, Numberblocks is about having fun with numbers.\n\nEach episode has been carefully crafted with the help of the NCETM (National Centre for Excellence in the Teaching of Mathematics) and brought to life by Blue Zoo Animation Studio.\nWe work closely with the NCETM to make sure Numberblocks delivers the essential numeracy skills that build good number sense and a solid foundation for a lifetime of maths success.\n\u200d\nGet ready for an animated adventure and some number magic that you can count on to help your child learn maths in the most exciting way.\n1, 2, 3 − Let’s go!\n\nNumberblocks has been nominated for the prestigious BAFTA, Prix Jeunesse and The Japan Prize Audiovisual Pre-school awards, and received a BAFTA for Children's Preschool Animation in 2019. Numberblocks is also featured among the DfE's recommended resources for home learning and is part of BBC Bitesize Daily.\n\nWhere to watch Numberblocks\n\nNumberblocks is designed so your child can just press play and have fun while learning essential number skills. 90 episodes take them from number names and counting to a deep understanding of how addition, subtraction, multiplication and division work, via a host of key concepts in between. You can find your favourite characters and episodes on TV, BBC iPlayer, DVD or the Numberblocks YouTube channels\n\n---\n\nWhat happens when numbers come to life?\n\nDive into a world of number fun with the hit CBeebies show, Numberblocks. Award-winning characters + big adventures + singalong songs = the best way to get children excited about everything numbers can do!\n\nIt's easy when you see it!\n\nMaths is SO much easier when you can see how it works. 90 episodes bring hundreds of essential number skills to life with big visuals and amazing animation, from your first encounter with One to mini-musicals, classic comedy, song-and-dance numbers and a nail-biting escape from the double dungeon of doom!\n\nA comprehensive learning journey\n\nThe learning goals behind Numberblocks support maths curricula from around the world, taking young learners step by step through the key topics and skills they need to master for a confident start and a lifelong love of numbers.\n\nPlay and learn\n\nBrilliant Numberblocks apps help children take the learning into their own hands.\n\nGet hands-on\n\nTake the learning further with the Numberblocks Maths Programme − three bumper magazines packed with stickers, colouring and step-by-step hands-on learning activities, plus a special set of Numberblocks blocks.\n\nLet's stay in touch!\n\nWe love to hear from you − your ideas, questions and your little ones’ fantastic creations. Keep up to date with the latest Numberblocks news by following us @Numberblocks on Facebook, Instagram and Twitter and signing up to the Numberblocks Newsletter. Every Monday we share some of your home and school creations, artwork and bakes on Facebook and Instagram so please send us your photos!\n\n---\n\n#Numberblocks #Compilation #LearnToCount #MathForKids #Math #Maths #Numbers #123 #12345 #Kids #KidsVideo #KidsCartoon #PreSchool #1To5 #Counting \n\n---"
              },
              "defaultAudioLanguage": "en-GB"
            },
            "statistics": {
              "viewCount": "6774499",
              "likeCount": "9661",
              "favoriteCount": "0"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "VtPcEJwxCttuGBy6EVTHo9ceHHI",
            "id": "iT4sd1oYO3g",
            "snippet": {
              "publishedAt": "2017-12-11T10:00:26Z",
              "channelId": "UChlkPjERAQQ-FB8D8haT2xw",
              "title": "NAMONE - 1 2 3 (ft. BIL G)",
              "description": "NAMONE - 1 2 3 (ft. BIL G) \n\nSong written by : NAMONE\nMusic arranged by : BIL G\nMixed & mastered by : TUANA\nVideo by : MAARAG\nRecorded at HYPEMAN\n\n©2017 HYPEMAN\n\n#NAMONE #123",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/iT4sd1oYO3g/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/iT4sd1oYO3g/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/iT4sd1oYO3g/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/iT4sd1oYO3g/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/iT4sd1oYO3g/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "HYP CHANNEL",
              "tags": [
                "namone",
                "namuunaa",
                "namuna",
                "hypeman",
                "bilguudei",
                "123",
                "1 2 3",
                "soul o",
                "buhnees deeguur",
                "orange entertainment",
                "hypeman entertainment",
                "tuana",
                "mongol pop",
                "mongolian music",
                "mongolian female singer",
                "MAARAG"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "NAMONE - 1 2 3 (ft. BIL G)",
                "description": "NAMONE - 1 2 3 (ft. BIL G) \n\nSong written by : NAMONE\nMusic arranged by : BIL G\nMixed & mastered by : TUANA\nVideo by : MAARAG\nRecorded at HYPEMAN\n\n©2017 HYPEMAN\n\n#NAMONE #123"
              }
            },
            "statistics": {
              "viewCount": "5843759",
              "likeCount": "24041",
              "favoriteCount": "0",
              "commentCount": "551"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "zSX5AQ49T8idOF0V-z1BfnVZJN4",
            "id": "p03TIGqEc8o",
            "snippet": {
              "publishedAt": "2018-02-16T05:00:02Z",
              "channelId": "UCxnuocYtHU8Sxo14SOOGveg",
              "title": "Sofia Reyes - 1, 2, 3 (feat. Jason Derulo & De La Ghetto) [Official Video]",
              "description": "Official Video for Sofia Reyes - 1, 2, 3 (feat. Jason Derulo & De La Ghetto) \n\nSuscríbete al canal: http://bit.ly/SofiaReyesYT\n\nAvailable on all digital platforms: https://SofiaReyes.lnk.to/123\n\nFollow Sofia Reyes on social media\nFB: Sosofiareyes\nTwitter: sofiareyes\nIG: sofiareyesp\n\n\nLyrics:\nSofia, Music history, DELA!\nSOFIA\nOh baby I’m thinking maybe that you were always a piece of\nshhh…\nYou’re rubbing your dirt on everyone’s skirt you know how to\nbe a ddd…\nDonde están tus modales, que no aprendiste ni a saludar\nParece que hoy me gustas un poco más\nPre-Coro\nHola comment allez, allez-vous\nSo nice to meet you\nYou say we should go and get a room\nuhmm…\nNo\n\nCoro:\nIf you wanna turn it on\nGo get a lightbulb, después hablamos\nIf you wanna turn it on\nGo get a lighter, después bailamos\nOhhh 123, 123\nSi te doy un beso ya estas a mis pies\nDime 123, 123\nLa la la- la la la\n\nJASON\nOh baby just hush the talking\nAnd let my loving ease your mind\nIf love’s the game let’s play a million times\nBaby give it to me\nI’ll be good company\nBaby mi nombre es Jason Derulo\n\nSOFIA - Coro\nIf you wanna turn it on\nGo get a lightbulb, después hablamos\nIf you wanna turn it on\nGo get a lighter, después bailamos\nOhhhh 123, 123\nSi te doy un beso ya estás a mis pies\nDime 123, 123\nLa la la – la la la\n\nDE LA GHETTO\nDisculpe la ignorancia nunca quise lastimarte\nLo que quiero es transformarte en mi Diosa mi obra de arte\nDime si tu quiere me da igual cómo se hace\nPrendemos toda la noche y a las nubes voy a llevarte\nQuiero yo enseñarte mucha’ cosa’ interesante\nConvertirte en mi dama, en la cama amarrarte\nBesarte de arriba a abajo pa’ ponerlo interesante\nDespués de todo esto nunca vas a olvidarte\n\nSOFIA\nHola comment allez, allez-vous…\n\nJASON\nIt’s ‘bout time we go and get a room…\n\nSOFIA\nIf you wanna turn it on\nGo get a lightbulb, después hablamos\nIf you wanna turn it on\nGo get a lighter, después bailamos\nOhh 123, 123\nSi te doy un beso ya estas a mis pies\nDime 123, 123\nLa la la – la la la\n\nSOFIA, JASON, DLG\nLa la la – la la la (todos)\n123 123\nCare for me 123 (Jason)\n123 123\nLove how you counted out for me babe (Jason)\n123 i’mma make you a freak girl…(todos)\nCare for me 123 (Jason)\n123 123\nLove how you counted out for me babe… (Jason)\n\n\n\n\n\n\n\n\n\n\n\n#SofiaReyes  #123 \n\n\nwmlatinapop",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/p03TIGqEc8o/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/p03TIGqEc8o/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/p03TIGqEc8o/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/p03TIGqEc8o/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/p03TIGqEc8o/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Sofia Reyes",
              "tags": [
                "Sofia Reyes",
                "sofia reyes videos",
                "hola",
                "pop music",
                "pop latino",
                "tiktok song",
                "musica de tiktok",
                "123 tiktok",
                "sofia reyes tiktok",
                "jason derulo tiktok",
                "sofia reyes 123",
                "sofia reyes un dos tres",
                "sofia reyes sped up",
                "123 sped up",
                "de la ghetto",
                "jason derulo",
                "123",
                "un dos tres",
                "lightbulb",
                "get a lighter",
                "de la geezy",
                "if you wanna turn it on",
                "cancion de target",
                "sofia reyes canciones",
                "musica de sofia reyes",
                "sofia reyes music",
                "un dos tres target",
                "cancion de jeep comercial",
                "wmlatinapop"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Sofia Reyes - 1, 2, 3 (feat. Jason Derulo & De La Ghetto) [Official Video]",
                "description": "Official Video for Sofia Reyes - 1, 2, 3 (feat. Jason Derulo & De La Ghetto) \n\nSuscríbete al canal: http://bit.ly/SofiaReyesYT\n\nAvailable on all digital platforms: https://SofiaReyes.lnk.to/123\n\nFollow Sofia Reyes on social media\nFB: Sosofiareyes\nTwitter: sofiareyes\nIG: sofiareyesp\n\n\nLyrics:\nSofia, Music history, DELA!\nSOFIA\nOh baby I’m thinking maybe that you were always a piece of\nshhh…\nYou’re rubbing your dirt on everyone’s skirt you know how to\nbe a ddd…\nDonde están tus modales, que no aprendiste ni a saludar\nParece que hoy me gustas un poco más\nPre-Coro\nHola comment allez, allez-vous\nSo nice to meet you\nYou say we should go and get a room\nuhmm…\nNo\n\nCoro:\nIf you wanna turn it on\nGo get a lightbulb, después hablamos\nIf you wanna turn it on\nGo get a lighter, después bailamos\nOhhh 123, 123\nSi te doy un beso ya estas a mis pies\nDime 123, 123\nLa la la- la la la\n\nJASON\nOh baby just hush the talking\nAnd let my loving ease your mind\nIf love’s the game let’s play a million times\nBaby give it to me\nI’ll be good company\nBaby mi nombre es Jason Derulo\n\nSOFIA - Coro\nIf you wanna turn it on\nGo get a lightbulb, después hablamos\nIf you wanna turn it on\nGo get a lighter, después bailamos\nOhhhh 123, 123\nSi te doy un beso ya estás a mis pies\nDime 123, 123\nLa la la – la la la\n\nDE LA GHETTO\nDisculpe la ignorancia nunca quise lastimarte\nLo que quiero es transformarte en mi Diosa mi obra de arte\nDime si tu quiere me da igual cómo se hace\nPrendemos toda la noche y a las nubes voy a llevarte\nQuiero yo enseñarte mucha’ cosa’ interesante\nConvertirte en mi dama, en la cama amarrarte\nBesarte de arriba a abajo pa’ ponerlo interesante\nDespués de todo esto nunca vas a olvidarte\n\nSOFIA\nHola comment allez, allez-vous…\n\nJASON\nIt’s ‘bout time we go and get a room…\n\nSOFIA\nIf you wanna turn it on\nGo get a lightbulb, después hablamos\nIf you wanna turn it on\nGo get a lighter, después bailamos\nOhh 123, 123\nSi te doy un beso ya estas a mis pies\nDime 123, 123\nLa la la – la la la\n\nSOFIA, JASON, DLG\nLa la la – la la la (todos)\n123 123\nCare for me 123 (Jason)\n123 123\nLove how you counted out for me babe (Jason)\n123 i’mma make you a freak girl…(todos)\nCare for me 123 (Jason)\n123 123\nLove how you counted out for me babe… (Jason)\n\n\n\n\n\n\n\n\n\n\n\n#SofiaReyes  #123 \n\n\nwmlatinapop"
              }
            },
            "statistics": {
              "viewCount": "837100221",
              "likeCount": "5038337",
              "favoriteCount": "0",
              "commentCount": "121511"
            }
          }
        ],
        "pageInfo": {
          "totalResults": 15,
          "resultsPerPage": 15
        }
      }

    ];
  } catch (err) {
    console.error('Error: ', err);
    return [500, { message: 'Encountered a server error' }];
  }
});
