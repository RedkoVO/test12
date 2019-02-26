import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import styles from './styles'

const StreamLive = ({ classes, streamLive }) => (
  <div className={classes.root}>
    {streamLive.map(item => (
      <div className={classes.streamLiveItem} key={item.id}>
        <div
          className={cn(classes.streamLiveItemDate, {
            [classes.itemDateLive]: item.isLive
          })}
        >
          {item.isLive ? (
            item.title
          ) : (
            <React.Fragment>
              {item.time} <br />
              <span className={classes.dateDay}>{item.date}</span>
            </React.Fragment>
          )}
        </div>
        <div className={cn(classes.streamLiveItemTeam, classes.team1)}>
          <img src={item.image1} className={classes.teamImg} alt="" />
          <div className={classes.teamName}>{item.team1}</div>
          <div className={cn(classes.teamCountry, classes.country1)}>
            <img
              src={item.imageCountry1}
              alt=""
              className={classes.teamCountryImg}
            />
            {item.country1}
          </div>
        </div>
        <div className={classes.streamLiveItemScore}>{item.score1}</div>
        <div className={classes.streamLiveItemVs}>VS</div>
        <div className={classes.streamLiveItemScore}>{item.score2}</div>
        <div className={cn(classes.streamLiveItemTeam, classes.team2)}>
          <img src={item.image2} className={classes.teamImg} alt="" />
          <div className={classes.teamName}>{item.team2}</div>
          <div className={cn(classes.teamCountry, classes.country2)}>
            <img
              src={item.imageCountry2}
              alt=""
              className={classes.teamCountryImg}
            />
            {item.country2}
          </div>
        </div>
        <div className={classes.streamLiveItemEvent}>
          EVENT
          <img
            src={item.imageEvent}
            alt=""
            className={classes.streamLiveItemEventImg}
          />
        </div>
        <div className={classes.streamLiveItemLink} />
      </div>
    ))}
  </div>
)

StreamLive.propTypes = {
  classes: PropTypes.object,
  streamLive: PropTypes.array
}

export default withStyles(styles)(StreamLive)
