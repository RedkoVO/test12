import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import styles from './styles'

const GameComments = ({ classes, comments }) => (
  <div className={classes.root}>
    {comments.map(item => (
      <div className={cn(classes.commentItem, classes[`comment${item.id}`])} key={item.id}>
        <Link to="/" className={classes.commentUser}>
          <img src={item.avatar} alt="" className={classes.commentUserPhoto} />
        </Link>
        <div className={classes.commentTitle}>
          <span className={classes.commentTitleText}>{item.title} says:</span>
          <time dateTime="2018-05-22 13:30" className={classes.commentDate}>{item.time}</time>
        </div>
        <p className={classes.commentText}>{item.text}</p>
        <Link to="/" className={classes.commentLike}> <span className={classes.likeValue}>{item.like}</span> Like</Link>
        <Link to="/" className={classes.subComment}><span className={classes.commentValue}>{item.comment}</span> Comment</Link>
      </div>
    ))}
  </div>
)

GameComments.propTypes = {
  classes: PropTypes.object,
  comment: PropTypes.array
}

export default withStyles(styles)(GameComments)