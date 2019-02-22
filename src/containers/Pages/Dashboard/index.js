import compose from 'recompose/compose'
import { withProps, withHandlers, withState, lifecycle, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import isEqual from 'lodash/isEqual'
import BigNumber from 'bignumber.js'

import {
  getWork,
  getAllBalanceInfo,
  sendMoney
} from '../../../redux/actions/balance'
import { getAllBalanceInfoSelector } from '../../../selectors/balance'

import Crypto from '../../../crypto/crypto'
import validate from './validate'
import { getBigNumberAmount } from '../../../utils/math'

import AsyncDashboardDesktop from '../../../components/Pages/Dashboard/Desktop/AsyncDashboardDesktop'

// import BestGameLogo from '../../assets/images/exchange.jpg'
import BestShopLogo from '../../../assets/images/shop.jpg'
import CSGOLogo from '../../../assets/images/csgo.jpg'
import CasesLogo from '../../../assets/images/cases.jpg'
import GameLogo from '../../../assets/images/loto-game.png'
import CloverLogo from '../../../assets/images/sim_game_icon_4clover.png'
import JungleImg2 from '../../../assets/images/jungle_game2.png'

const tmpBestAdsCollection = [
  {
    id: 1,
    title: '',
    img: BestShopLogo,
    link: '/',
    titleLink: 'Stream of the day',
    nameLink: 'Blue cool Jelly'
  },
  {
    id: 2,
    title: '',
    img: CSGOLogo,
    link: '/skins',
    titleLink: 'Cases of the day',
    nameLink: 'Blue cool Jelly'
  },
  {
    id: 3,
    title: '',
    img: CasesLogo,
    link: '/cases',
    titleLink: 'Cases of the day',
    nameLink: 'Blue cool Jelly'
  }
]
const gameCategories = [
  {
    id: 1,
    game: [
      {
        id: 1,
        title: 'Most popular',
        name: '4Clover',
        img: CloverLogo,
        bundle: '4clover'
      },
      {
        id: 2,
        title: 'Most popular',
        name: 'Jungle Treasure',
        img: JungleImg2,
        bundle: 'jungle'
      },
      {
        id: 3,
        title: 'For children',
        name: 'Word games',
        img: GameLogo,
        bundle: '4clover'
      },
      {
        id: 4,
        title: 'For children',
        name: 'Funny games',
        img: GameLogo,
        bundle: '4clover'
      },
      {
        id: 5,
        title: 'For children',
        name: 'Word games',
        img: GameLogo,
        bundle: '4clover'
      },
      {
        id: 6,
        title: 'For children',
        name: 'Word games',
        img: GameLogo,
        bundle: '4clover'
      }
    ]
  },
  {
    id: 2,
    game: [
      {
        id: 1,
        title: 'Most popular',
        name: 'Loto games',
        img: GameLogo,
        bundle: '4clover'
      },
      {
        id: 2,
        title: 'Most popular',
        name: 'Dice games',
        img: GameLogo,
        bundle: '4clover'
      },
      {
        id: 3,
        title: 'For children',
        name: 'Word games',
        img: GameLogo,
        bundle: '4clover'
      },
      {
        id: 4,
        title: 'For children',
        name: 'Funny games',
        img: GameLogo,
        bundle: '4clover'
      },
      {
        id: 5,
        title: 'For children',
        name: 'Word games',
        img: GameLogo,
        bundle: '4clover'
      },
      {
        id: 6,
        title: 'For children',
        name: 'Word games',
        img: GameLogo,
        bundle: '4clover'
      }
    ]
  }
]

const FORM_NAME = 'sendMoney'

const mapStateToProps = state => ({
  allBalance: getAllBalanceInfoSelector(state)
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withState('isDisabledButton', 'setDisabledButton', false),
  withState('curencySelectValue', 'setCurencySelectValue', {}),
  withState('textToCopy', 'setTextToCopy', false),
  withState('isSubscribeCheckbox', 'setisSubscribeCheckbox', true),
  withHandlers({
    handleChangeBalance: ({ setCurencySelectValue, allBalance }) => value => {
      setCurencySelectValue({
        currency: value,
        code: allBalance.result[value].code
      })
    },

    onCopyKey: ({ setTextToCopy, textToCopy }) => () => {
      setTextToCopy(!textToCopy)
    },

    handleSubscribeCheckbox: ({
      setisSubscribeCheckbox,
      isSubscribeCheckbox
    }) => () => {
      setisSubscribeCheckbox(!isSubscribeCheckbox)
    },

    onSubmit: ({
      handleSubmit,
      curencySelectValue,
      setDisabledButton,
      isDisabledButton,
      dispatch,
      allBalance
    }) =>
      handleSubmit(variables => {
        if (!isDisabledButton) {
          setDisabledButton(!isDisabledButton)

          dispatch(
            getWork({
              hash: allBalance.result[curencySelectValue.currency].lastBlock
            })
          )
            .then(res => {
              if (res.success) {
                const acc = {
                  publicKey: localStorage.getItem('publicKey'),
                  secretKey: localStorage.getItem('secretKey'),
                  address: localStorage.getItem('address')
                }
                const toAddress = variables.addressKey
                const amount = getBigNumberAmount(variables.amount)
                const work = res.result.work
                const currencyInfo = {
                  code: curencySelectValue.code,
                  currency: curencySelectValue.currency,
                  lastBlock:
                    allBalance.result[curencySelectValue.currency].lastBlock,
                  balance: new BigNumber(
                    allBalance.result[curencySelectValue.currency].balance
                  )
                }
                const getCryptoBlock = Crypto.sign.formSendBlock(
                  acc,
                  toAddress,
                  amount,
                  work,
                  currencyInfo
                )

                const data = {
                  block: getCryptoBlock
                }

                dispatch(sendMoney(data))
                  .then(res => {
                    if (res.result.hash) {
                      const getCryptoInfo = Crypto.account.accountFromSecret(
                        localStorage.getItem('secretKey')
                      )

                      if (localStorage.getItem('secretKey')) {
                        const data = {
                          address: getCryptoInfo.address
                        }
                        dispatch(getAllBalanceInfo(data))
                      }

                      dispatch(reset('sendMoney'))
                      setDisabledButton(false)
                    }
                  })
                  .catch(err => {
                    console.log('ERROR send money:', err)
                  })
              }
            })
            .catch(err => {
              console.log('ERROR get work:', err)
            })
        }
      })
  }),
  lifecycle({
    componentDidMount() {
      const { allBalance, setCurencySelectValue } = this.props
      if (!!allBalance) {
        setCurencySelectValue({
          code: allBalance.result['DCB'].code,
          currency: allBalance.result['DCB'].currency
        })
      }
    },
    componentDidUpdate(prevProps) {
      const {
        allBalance,
        setCurencySelectValue,
        curencySelectValue
      } = this.props
      if (!isEqual(prevProps.allBalance, allBalance)) {
        const curency = curencySelectValue.currency
          ? curencySelectValue.currency
          : 'DCB'

        if (!!allBalance.result[curency]) {
          setCurencySelectValue({
            code: allBalance.result[curency].code,
            currency: allBalance.result[curency].currency
          })
        }
      }
    }
  }),
  withProps(() => ({
    bestAds: tmpBestAdsCollection,
    gameCategories: gameCategories,
    addressKey: localStorage.getItem('address')
  })),
  pure
)(AsyncDashboardDesktop)
