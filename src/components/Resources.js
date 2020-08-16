import React from'react';
import {Helmet} from 'react-helmet';

export default class Resources extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>
        <Helmet>
          <title>Story Korean - Resources for Learning Korean</title>
          <meta name="description" content={`Resources for Learning Korean`} />
          <meta name="keywords" content={`Resources for Learning Korean, 
          Korean stories, 전래동화, Korean folk tales, Korean books, read Korean, Korean fairy tales, Korean translations,
           StoryKorean.com, beginner korean, easy Korean, learn Korean, study Korean`} />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="StoryKorean.com" />
          {/* Twitter */}
          <meta name="twitter:card" value={`Resources for Learning Korean`}/>
          {/* Open Graph */}
          <meta property="og:title" content={`Resources for Learning Korean`} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://www.storykorean.com/resources`} />
          <meta property="og:description" content={`Resources for Learning Korean`} /> 
        </Helmet>

        <header className="headerTitle">
          <h1>Resources</h1>
        </header>

        <div className="resources">

          <div className="resourcesBox">
            <h2>Reading</h2>
              <div className="resourcesSection"> 
                <h3>Beginner</h3>
                <ul>
                  <li><a href="https://talktomeinkorean.com/products/list/book">Talk To Me In Korean Books</a></li>
                  <li><a href="http://kids.donga.com/">Kids Donga - Simplified News Reports</a></li>
                </ul>
              </div>

              <div className="resourcesSection"> 
                <h3>Intermediate</h3>
                <ul>
                  <li><a href="http://calper.la.psu.edu/Korean_Language">Penn State PDFs</a></li>
                  <li><a href="http://www.koreatimes.co.kr/www/sublist_740.html">Korea Times - Bilingual news reports</a></li>
                </ul>
              </div>

              <div className="resourcesSection"> 
              <h3>Advanced</h3>
                <ul>
                  <li><a href="https://koreajoongangdaily.joins.com/section/bilingualNews">Korea JoongAng Daily - Bilingual news reports</a></li>
                </ul>
              </div>
          </div>

          <div className="resourcesBox" id="resourcesGrammar">
            <h2>Grammar</h2>
            <h3>All Levels</h3>
              <ul>
                <li><a href="https://kiipgrammar.com">KIIPGrammar</a></li>
                <li><a href="http://koreangrammaticalforms.com/index.php">Korean Grammar Dictionary</a></li>
                <li><a href="https://www.howtostudykorean.com/">How to Study Korean</a></li>
                <li><a href="https://www.verbix.com/languages/korean.html">Verbix - Verb conjugator</a></li>
                <li><a href="https://koreanverb.app/?search=%ED%95%98%EB%8B%A4">Dongsa - Verb conjugator</a></li>
              </ul>
              
              <div className="resourcesSection"> 
                <h3>Beginner</h3>
                <ul>
                  <li><a href="https://kiipgrammar.com">KIIPGrammar</a></li>
                  <li><a href="http://koreangrammaticalforms.com/index.php">Korean Grammar Dictionary</a></li>
                  <li><a href="https://keytokorean.com/grammar-blog/beginner/grammar-points-covered-in-beginner-classes/">Key To Korean Grammar - Beginner</a></li>
                  <li><a href="https://www.howtostudykorean.com/unit1/">How To Study Korean - Basic</a></li>
                </ul>
              </div>

              <div className="resourcesSection"> 
                <h3>Intermediate</h3>
                <ul>
                  <li><a href="https://kiipgrammar.com">KIIPGrammar</a></li>
                  <li><a href="http://www.language.berkeley.edu/korean/10/index.htm">University of California, Berkeley Intermediate Korean</a></li>
                  <li><a href="http://koreangrammaticalforms.com/index.php">Korean Grammar Dictionary</a></li>
                  <li><a href="https://keytokorean.com/grammar-blog/intermediate/grammar-points-covered-in-intermediate-classes/">Key To Korean Grammar - Intermediate</a></li>
                  <li><a href="https://www.howtostudykorean.com/unit-3-intermediate-korean-grammar/">How To Study Korean - Intermediate</a></li>
                </ul>
              </div>

              <div className="resourcesSection"> 
              <h3>Advanced</h3>
                <ul>
                  <li><a href="https://www.howtostudykorean.com/unit-6/">How To Study Korean - Advanced</a></li>
                </ul>
              </div>
          </div>

          <div className="resourcesBox">
            <h2>Vocabulary</h2>
              <ul>
                <li><a href="https://www.verbix.com/languages/korean.html">Verbix - Verb conjugator</a></li>
                <li><a href="https://koreanverb.app/?search=%ED%95%98%EB%8B%A4">Dongsa - Verb conjugator</a></li>
                <li><a href="https://en.wiktionary.org/wiki/%EA%B0%80%EB%8B%A4">Wiktionary</a></li>
              </ul>

            <h2>Study Tools</h2>
              <ul>
                <li><a href="https://apps.ankiweb.net/">Anki - Make your own flashcards</a></li>
                <li><a href="http://www.studytopik.go.kr/sub-1/link_url.asp?ma_url=sub_1#">StudyTOPIK - See previous TOPIK exams</a></li>
                <li><a href="https://www.hellotalk.com/">HelloTalk - Message native speakers</a></li>
                <li><a href="https://tadaktadak.co.kr/taja/jari.html?type=0">Tadaktadak - Learn how to type in Hangul</a></li>
                <li><a href="https://play.typeracer.com/?universe=lang_ko">Type Racer - Practice your typing skills</a></li>
              </ul>
             
          </div>

          <div className="resourcesBox" id="resourcesMore">
            <h2>More</h2>
              <div className="resourcesSection"> 
                <h3>Videos</h3>
                <ul>
                  <li><a href="https://www.youtube.com/channel/UCV525XuJAN8Wnk7RSzc45OQ">Prof. Yoon's Language Class</a></li>
                  <li><a href="https://talktomeinkorean.com/lessons/l1l1">Talk To Me In Korean Videos</a></li>
                  <li><a href="https://www.youtube.com/playlist?list=PLUa1FE1E3AYs975HVvtSJbAGvHT0FwhlB">바른 한국어</a></li>
                  <li><a href="https://ko.zerotohero.ca/#/youtube/browse">Korean Zero To Hero Youtube Subtitles</a></li>
                  <li><a href="https://www.youtube.com/channel/UCBpRNdkIp4LSUCgXOcp1NSQ">Motivate Korean</a></li>
                  <li><a href="https://www.youtube.com/user/seemile">seemile Korean 씨마일 한국어</a></li>
                  <li><a href="https://www.youtube.com/GoBillyKorean">Learn Korean with GO! Billy Korean</a></li>

                </ul>
              </div>

              <div className="resourcesSection"> 
                <h3>Dictionaries</h3>
                <ul>
                  <li><a href="https://papago.naver.com/">Papago Translator</a></li>
                  <li><a href="https://endic.naver.com/?sLn=en">Naver Dictionary</a></li>
                  <li><a href="https://krdict.korean.go.kr/eng/mainAction?nation=eng">National Institute of Korean Language Dictionary</a></li>
                  <li><a href="https://small.dic.daum.net/index.do?dic=eng">Daum Dictionary</a></li>
                </ul>
              </div>

              <div className="resourcesSection"> 
                <h3>Korean Search Engines</h3>
                <ul>
                  <li><a href="https://www.naver.com/">Naver</a></li>
                  <li><a href="https://www.daum.net/">Daum</a></li>
                  <li><a href="https://www.nate.com/">Nate</a></li>
                </ul>
              </div>

              <div className="resourcesSection"> 
                <h3>Free Online Classes</h3>
                <ul>
                  <li><a href="https://www.coursera.org/learn/learn-korean">Coursera - First Step Korean (Yonsei)</a></li>
                  <li><a href="http://www.sejonghakdang.org/sjcu/home/main.do">King Sejong Institute</a></li>
                </ul>
              </div>


          </div>
          <div className="resourcesBox">
            <h2>KIIP</h2>
              <div className="resourcesSection"> 
                <h3>KIIP Registration Guide</h3>
                <ul>
                  <li><a href="https://www.koreantopik.com/2018/05/how-to-apply-for-kiip-level-test.html">KoreanTopik KIIP Guide</a></li>
                  <li><a href="https://www.slideshare.net/keytokorean/how-to-register-for-the-free-kiip-korean-class"> Slideshare Guide</a></li>
                  <li><a href="https://keytokorean.com/fun/tech/how-to-register-for-the-free-kiip-korean-class/">Key to Korean Guide</a></li>
                </ul>
              </div>

              <div className="resourcesSection"> 
                <h3>2020 Level Test Dates</h3>
                <ul>
                  <li><del>January 11 - Results: January 23</del></li>
                  <li><del>January 18 - Results: January 31</del></li>
                  <li><del>June 20 - Results: July 3</del></li>
                  <li><del>July 11 - Results: July 24</del></li>
                  <li><del>July 25 - Results: August 7</del></li>
                  <li><del>August 8 - Results: August 21</del></li>
                  <li>August 29 - Results: September 11</li>
                  <li>September 19 - Results: October 7</li>
                  <li>October 17 - Results: October 30</li>
                  <li>October 31 - Results: November 13</li>
                  <li>November 14 - Results: November 27</li>
                  <li>December 5 - Results: December 18</li>
                  <li>January 8 - Results: January 17</li>
                </ul>
                <p>Note: The registration period for the level test is 2-3 weeks before the exam, and lasts for 1 week</p>
              </div>

              <div className="resourcesSection"> 
                <h3>KIIP Grammar</h3>
                <ul>
                  <li><a href="https://kiipgrammar.com">KIIPGrammar - All levels</a></li>
                  <li><a href="http://koreangrammaticalforms.com/index.php">Korean Grammar Dictionary - All levels </a></li>
                  <li><a href="https://www.howtostudykorean.com/">How to Study Korean.com - All levels</a></li>
                  <li><a href="https://keytokorean.com/">Key to Korean.com - All levels</a></li>
                  <li><a href="https://www.lingodeer.com/">Lingo Deer - Level 1</a></li>
                  <li><a href="https://www.koreantopik.com/2018/09/kiip-level-3-grammars-review-by-korean.html">Korean Topik - Level 3 </a></li>
                  <li><a href="https://www.koreantopik.com/2018/04/kiip-level-4-grammar-review-tong-hop.html">Korean Topik - Level 4</a></li>
                  <li><a href="http://www.language.berkeley.edu/korean/10/index.htm">University of California, Berkeley - Levels 4-5</a></li>
                </ul>
              </div>

              <div className="resourcesSection"> 
              <h3>KIIP Vocabulary</h3>
                <ul>
                  <li><a href="https://www.memrise.com/course/632447/kiip-beginner-level-1/">KIIP Level 1 - Memrise</a></li>
                  <li><a href="https://www.memrise.com/course/577895/kiip-beginner-2/">KIIP Level 2 - Memrise</a></li>
                  <li><a href="https://www.memrise.com/course/1109073/kiip-2016-level-3-junggeub1-no-typing/">KIIP Level 3 - Memrise</a></li>
                  <li><a href="https://www.memrise.com/course/1186405/kiip-2016-level-4-junggeub2-no-typing/">KIIP Level 4 - Memrise</a></li>
                  <li><a href="https://www.memrise.com/course/1947294/kiip-level-5-hangug-sahoe-ihae-2018/">KIIP Level 5 - Memrise</a></li>
                </ul>
              </div>
          </div>


        </div>
      </div>
    )
  }
}