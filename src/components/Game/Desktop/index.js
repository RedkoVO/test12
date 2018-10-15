import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import MenuNavigation from '../../Header/components/MenuNavigation'

// import GameRollImg from '../../../assets/images/gameRollImg.png'
// import SliderItemImg1 from '../../../assets/images/sliderItem1.png'
// import SliderItemImg2 from '../../../assets/images/sliderItem2.png'
// import SliderItemImg3 from '../../../assets/images/sliderItem3.png'
// import SliderItemImg4 from '../../../assets/images/sliderItem4.png'
import GameRollImg from '../../../assets/images/slider_slot_4clover_m.jpg'
import SliderItemImg1 from '../../../assets/images/slider_slot_4clover.png'
import SliderItemImg2 from '../../../assets/images/slider_slot_4clover_m.jpg'
import SliderItemImg3 from '../../../assets/images/slider_slot_4clover_m.jpg'
import SliderItemImg4 from '../../../assets/images/slider_slot_4clover_m.jpg'
import UserImg from '../../../assets/images/user.png'

import styles from './styles'

const Game = ({ classes, handlePlayNow, isShowIframe, address }) => {
  // const url = `http://34.212.109.62:3333/en/web/fourclover/?sid=${address}`
  const url = "http://34.212.109.62:3333/en/web/fourclover/?sid=dcb_1y7u83jps7j1aqzgekqhwi6pr4z35dqz1icjegrkfcfqwmtzcrzk3abxgrdx#"

  return (
    <div className={classes.root}>
      <div className={classes.containerGame}>
        <header className={classes.headerGame}>
          <MenuNavigation page="game" />

          <div className={classes.gameHeaderMain}>
            <div className={classes.gameRollTop}>
              <div className={classes.gameRollImg}>
                <img src={GameRollImg} alt="" />
              </div>
              <div className={classes.gameRollInf}>
                <div className={classes.gameUser}>
                  <div className={classes.gameUserBlock}>
                    <p className={classes.gameUserHello}> Hello, Ben A <br />
                      <span className={classes.gameUserVerification}>KYC VERIFICATED</span>
                    </p>
                    <div className={classes.gameUserPhoto}>
                      <img src={UserImg} alt="" />
                    </div>
                    <p className={classes.gameUserBallance}> 764.23 CPT <br />
                      <span className={classes.gameUserBallDescr}>YOUR BALANCE</span>
                    </p>
                  </div>
                </div>
                <div className={classes.gameRollNext}>
                  <p>next roll in: <span className={classes.gameRollNextCounter}>00:00:23.12</span></p>
                </div>
                <div className={classes.gameRollDescr}>
                  <div className={classes.gameRollDescrleft}>
                    <div className={classes.gameRollTitleBlock}>
                      <p className={classes.gameRollTitle}>4Clover</p>
                      <span className={classes.gameRollOnline}>online: 234</span><br />
                      <span className={classes.gameRollCompany}>by Fall Inc.</span>
                    </div>
                    <div className={classes.gameRollText}>
                      <p>Integer tempor semper sapien sit amet bibendum. Etiam ornare teInteger tempor semper sapien sit amet bibendum. Etiam ornare te et bibendum. Etiam ornare te</p>
                    </div>
                    <div className={classes.gameRollTags}>
                      <p>#ROLLED #BESTCRYPTO #ETH </p>
                    </div>
                  </div>
                  <div className={classes.gameRollRating}>
                    <p className={classes.ratingValue}>
                      <span className={classes.ratingValueNum}>6.5</span>
                      <span className={classes.ratingValueFull}>/7</span>
                    </p>
                    <div className={classes.ratingStars}>
                      <div className={classes.fullStars}></div>
                      <div className={classes.halfStars}></div>
                    </div>
                    <span className={classes.ratingCategory}>DICE CATEGORY</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.gameRollBottom}>
              <div className={classes.gameRollActions}>
                <div className={classes.playNowBtn} onClick={() => handlePlayNow()}>Play Now</div>
                <Link to="/" className={classes.addBtn}>Add to favorites</Link>
              </div>

              <div className={classes.gameRollSlider} id="scrollSlider" tabIndex="5000">
                <Link to="/" className={classes.sliderItem}>
                  <img src={SliderItemImg1} alt="" className={classes.sliderItemPhoto} />
                </Link>
                <Link to="/" className={classes.sliderItem}>
                  <img src={SliderItemImg2} alt="" className={classes.sliderItemPhoto} />
                </Link>
                <Link to="/" className={classes.sliderItem}>
                  <img src={SliderItemImg3} alt="" className={classes.sliderItemPhoto} />
                </Link>
                <Link to="/" className={classes.sliderItem}>
                  <img src={SliderItemImg4} alt="" className={classes.sliderItemPhoto} />
                </Link>
                <Link to="/" className={classes.sliderItem}>
                  <img src={SliderItemImg1} alt="" className={classes.sliderItemPhoto} />
                </Link>
                <Link to="/" className={classes.sliderItem}>
                  <img src={SliderItemImg3} alt="" className={classes.sliderItemPhoto} />
                </Link>
                <Link to="/" className={classes.sliderItem}>
                  <img src={SliderItemImg4} alt="" className={classes.sliderItemPhoto} />
                </Link>
                <Link to="/" className={classes.sliderItem}>
                  <img src={SliderItemImg2} alt="" className={classes.sliderItemPhoto} />
                </Link>
                <Link to="/" className={classes.sliderItem}>
                  <img src={SliderItemImg1} alt="" className={classes.sliderItemPhoto} />
                </Link>
              </div>
            </div>
          </div>
        </header>



        <main className={classes.gameMain}>
          <div className={classes.gameCounter}>
            <div className={classes.counterWins}>
              <p className={classes.counterBiggestWin}>
                <span className={classes.counterValue}>4666.78 dcb</span> <br /> BIGGEST WIN <br /> FOR ALL TIME</p>
            </div>
            <div className={classes.counterHours}>
              <p className={classes.counterHoursVolume}>
                <span className={classes.counterValue}>167.12 dcb</span> <br /> VOLUME OF <br />24 HOURS</p>
            </div>
            <div className={classes.counterContracts}>
              <p className={classes.counterContractsVolume}>
                <span className={classes.counterValue}>20243.12 dcb</span> <br /> ALL VOLUME OF <br /> SMART CONTRACT</p><br />
              <Link to="/" className={classes.counterContractsLink}>0x7fdcd2a1e52f10c28cb7732f46393e297ecadda1</Link>
            </div>
          </div>
          <div className={classes.comments}>
            <div className={cn(classes.commentItem, classes.comment1)}>
              <Link to="/" className={classes.commentUser}>
                <img src={UserImg} alt="" className={classes.commentUserPhoto} />
              </Link>
              <div className={classes.commentTitle}>
                <span className={classes.commentTitleText}>Ben F. says:</span>
                <time dateTime="2018-05-22 13:30" className={classes.commentDate}> 22 May 2018 12:03 </time>
              </div>
              <p className={classes.commentText}>Curabitur tincidunt orci quis odio aliquet placerat. Nullam laoreet justo eros, quis semper turpis gravida eget. Ut ullamcorper nibho a massa tincidunt malesuada. In nunc velit basank. s semper turpis gravida eget. Ut ullamcorper nibho a massa tincidunt malesuada. In nunc velit basank.</p>
              <Link to="/" className={classes.commentLike}> <span className={classes.likeValue}>5</span> Like</Link>
              <Link to="/" className={classes.subComment}><span className={classes.commentValue}>7</span> Comment</Link>
            </div>
            <div className={cn(classes.commentItem, classes.comment2)}>
              <Link to="/" className={classes.commentUser}>
                <img src={UserImg} alt="" className={classes.commentUserPhoto} />
              </Link>
              <div className={classes.commentTitle}>
                <span className={classes.commentTitleText}>Thomas D. says:</span>
                <time dateTime="2018-05-22 13:30" className={classes.commentDate}> 22 May 2018 12:03 </time>
              </div>

              <p className={classes.commentText}>Nulla non pellentesque sem, sed aliquet justo. Praesent egestas purus et bibendum tempus.Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <Link to="/" className={classes.commentLike}> <span className={classes.likeValue}>5</span> Like</Link>
              <Link to="/" className={classes.subComment}><span className={classes.commentValue}>7</span> Comment</Link>
            </div>
            <div className={cn(classes.commentItem, classes.comment3)}>
              <Link to="/" className={classes.commentUser}>
                <img src={UserImg} alt="" className={classes.commentUserPhoto} />
              </Link>
              <div className={classes.commentTitle}>
                <span className={classes.commentTitleText}>Thomas D. says:</span>
                <time dateTime="2018-05-22 13:30" className={classes.commentDate}> 22 May 2018 12:03 </time>
              </div>

              <p className={classes.commentText}>Nulla non pellentesque sem, sed aliquet justo. Praesent egestas purus et bibendum tempus.</p>
              <Link to="/" className={classes.commentLike}> <span className={classes.likeValue}>5</span> Like</Link>
              <Link to="/" className={classes.subComment}><span className={classes.commentValue}>7</span> Comment</Link>
            </div>
          </div>
        </main>
      </div>

      {isShowIframe && (
        <div>
          <div className={classes.overlayIframe} onClick={() => handlePlayNow()} />
          <div className={classes.wrIframe}>
            <iframe
              id="gameFrame"
              className={classes.gameIframe}
              title="game"
              src={url}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default withStyles(styles)(Game)