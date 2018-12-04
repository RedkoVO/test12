import compose from 'recompose/compose'
import { withProps, pure } from 'recompose'

import AsyncStreamDesktop from '../../components/Stream/Desktop/AsyncStreamDesktop'

import Team1Img from '../../assets/images/NRG+Logo+Light+Background.png'
import Team2Img from '../../assets/images/Team_LDLC_Logo.png'
import Country1Img from '../../assets/images/france.png'
import Country2Img from '../../assets/images/spain.png'
import EventImg from '../../assets/images/event.png'

const tmpStreamLive = [
  {
    id: 1,
    isLive: true,
    title: 'Live',
    team1: 'NRG',
    team2: 'LDLC',
    image1: Team1Img,
    image2: Team2Img,
    imageCountry1: Country1Img,
    imageCountry2: Country2Img,
    imageEvent: EventImg,
    country1: 'France',
    country2: 'Spain',
    score1: '6.14',
    score2: '1.25'
  },
  {
    id: 2,
    isLive: false,
    title: '',
    time: '12:30 PM',
    date: '7/12/2018',
    team1: 'NRG',
    team2: 'LDLC',
    image1: Team1Img,
    image2: Team2Img,
    imageCountry1: Country1Img,
    imageCountry2: Country2Img,
    imageEvent: EventImg,
    country1: 'France',
    country2: 'Spain',
    score1: '6.14',
    score2: '1.25'
  },
  {
    id: 3,
    isLive: true,
    title: 'Live',
    team1: 'NRG',
    team2: 'LDLC',
    image1: Team1Img,
    image2: Team2Img,
    imageCountry1: Country1Img,
    imageCountry2: Country2Img,
    imageEvent: EventImg,
    country1: 'France',
    country2: 'Spain',
    score1: '6.14',
    score2: '1.25'
  },
  {
    id: 4,
    isLive: false,
    title: '',
    time: '12:30 PM',
    date: '7/12/2018',
    team1: 'NRG',
    team2: 'LDLC',
    image1: Team1Img,
    image2: Team2Img,
    imageCountry1: Country1Img,
    imageCountry2: Country2Img,
    imageEvent: EventImg,
    country1: 'France',
    country2: 'Spain',
    score1: '6.14',
    score2: '1.25'
  },
  {
    id: 5,
    isLive: true,
    title: 'Live',
    team1: 'NRG',
    team2: 'LDLC',
    image1: Team1Img,
    image2: Team2Img,
    imageCountry1: Country1Img,
    imageCountry2: Country2Img,
    imageEvent: EventImg,
    country1: 'France',
    country2: 'Spain',
    score1: '6.14',
    score2: '1.25'
  },
  {
    id: 6,
    isLive: false,
    title: '',
    time: '12:30 PM',
    date: '7/12/2018',
    team1: 'NRG',
    team2: 'LDLC',
    image1: Team1Img,
    image2: Team2Img,
    imageCountry1: Country1Img,
    imageCountry2: Country2Img,
    imageEvent: EventImg,
    country1: 'France',
    country2: 'Spain',
    score1: '6.14',
    score2: '1.25'
  },
  {
    id: 7,
    isLive: true,
    title: 'Live',
    team1: 'NRG',
    team2: 'LDLC',
    image1: Team1Img,
    image2: Team2Img,
    imageCountry1: Country1Img,
    imageCountry2: Country2Img,
    imageEvent: EventImg,
    country1: 'France',
    country2: 'Spain',
    score1: '6.14',
    score2: '1.25'
  },
  {
    id: 8,
    isLive: false,
    title: '',
    time: '12:30 PM',
    date: '7/12/2018',
    team1: 'NRG',
    team2: 'LDLC',
    image1: Team1Img,
    image2: Team2Img,
    imageCountry1: Country1Img,
    imageCountry2: Country2Img,
    imageEvent: EventImg,
    country1: 'France',
    country2: 'Spain',
    score1: '6.14',
    score2: '1.25'
  },
  {
    id: 9,
    isLive: true,
    title: 'Live',
    team1: 'NRG',
    team2: 'LDLC',
    image1: Team1Img,
    image2: Team2Img,
    imageCountry1: Country1Img,
    imageCountry2: Country2Img,
    imageEvent: EventImg,
    country1: 'France',
    country2: 'Spain',
    score1: '6.14',
    score2: '1.25'
  },
  {
    id: 10,
    isLive: false,
    title: '',
    time: '12:30 PM',
    date: '7/12/2018',
    team1: 'NRG',
    team2: 'LDLC',
    image1: Team1Img,
    image2: Team2Img,
    imageCountry1: Country1Img,
    imageCountry2: Country2Img,
    imageEvent: EventImg,
    country1: 'France',
    country2: 'Spain',
    score1: '6.14',
    score2: '1.25'
  }
]

export default compose(
  withProps(() => ({ streamLive: tmpStreamLive })),
  pure
)(AsyncStreamDesktop)
