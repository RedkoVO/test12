import compose from 'recompose/compose'
import { withProps, withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import BigNumber from 'bignumber.js'

import { getWork, getBalance, sendMoney } from '../../redux/actions/balance'
import { getBalanceSelector } from '../../selectors/balance'

import Crypto from '../../crypto/crypto'
import validate from './validate'
import { getBigNumberAmount } from '../../utils/math'
import { clearStorageForlogout } from '../../utils/localStorageUtils'

import AsyncDashboardDesktop from '../../components/Dashboard/Desktop/AsyncDashboardDesktop'

import BestGameLogo from '../../assets/images/best-shop.png'
import BestShopLogo from '../../assets/images/best-shop.png'
import GameLogo from '../../assets/images/loto-game.png'
import CloverLogo from '../../assets/images/sim_game_icon_4clover.png'

const tmpTransactionCollection = [
  { id: 1, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 2, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 3, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 4, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 5, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 6, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 7, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 8, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 9, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 10, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 11, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' }
]
const tmpBestAdsCollection = [
  { id: 1, title: 'Games', img: BestGameLogo, titleLink: 'Game of the day', nameLink: 'Smash Champs' },
  { id: 2, title: 'Shop', img: BestShopLogo, titleLink: 'Product of the day', nameLink: 'Blue cool Jelly' }
]
const gameCategories = [
  {
    id: 1,
    game: [
      { id: 1, title: 'Most popular', name: '4Clover', img: CloverLogo, bundle: '4clover' },
      { id: 2, title: 'Most popular', name: 'Dice games', img: GameLogo, bundle: '4clover' },
      { id: 3, title: 'For children', name: 'Word games', img: GameLogo, bundle: '4clover' },
      { id: 4, title: 'For children', name: 'Funny games', img: GameLogo, bundle: '4clover' },
      { id: 5, title: 'For children', name: 'Word games', img: GameLogo, bundle: '4clover' },
      { id: 6, title: 'For children', name: 'Word games', img: GameLogo, bundle: '4clover' }
    ]
  },
  {
    id: 2,
    game: [
      { id: 1, title: 'Most popular', name: 'Loto games', img: GameLogo, bundle: '4clover' },
      { id: 2, title: 'Most popular', name: 'Dice games', img: GameLogo, bundle: '4clover' },
      { id: 3, title: 'For children', name: 'Word games', img: GameLogo, bundle: '4clover' },
      { id: 4, title: 'For children', name: 'Funny games', img: GameLogo, bundle: '4clover' },
      { id: 5, title: 'For children', name: 'Word games', img: GameLogo, bundle: '4clover' },
      { id: 6, title: 'For children', name: 'Word games', img: GameLogo, bundle: '4clover' }
    ]
  }
]

const FORM_NAME = 'sendMoney'

const mapStateToProps = state => ({
  // balance: state.balance
  balance: getBalanceSelector(state)
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withState('isDisabledButton', 'setDisabledButton', false),
  withHandlers({
    handleLogout: ({ history }) => () => {
      clearStorageForlogout()
      history.push('/')
    },

    onSubmit: ({ handleSubmit, setDisabledButton, isDisabledButton, dispatch, balance }) =>
      handleSubmit(variables => {
        if (!isDisabledButton) {
          setDisabledButton(!isDisabledButton)

          dispatch(getWork({ hash: localStorage.getItem('lastBlock') }))
            .then(res => {
              const acc = {
                publicKey: localStorage.getItem('publicKey'),
                secretKey: localStorage.getItem('secretKey'),
                address: localStorage.getItem('address'),
                representative: localStorage.getItem('representative'),
                lastBlock: localStorage.getItem('lastBlock'),
                balance: new BigNumber(balance.balance),
              }
              const toAddress = variables.addressKey
              const amount = getBigNumberAmount(variables.amount)
              const work = res.work
              const getCryptoBlock = Crypto.sign.formSendBlock(acc, toAddress, amount, work)

              const data = {
                block: JSON.stringify(getCryptoBlock)
              }

              dispatch(sendMoney(data))
                .then(res => {
                  if (res.hash) {
                    const isSecretKey = localStorage.getItem("secretKey")
                    const getCryptoInfo = Crypto.account.accountFromSecret(isSecretKey)

                    if (isSecretKey) {
                      const data = {
                        address: getCryptoInfo.address
                      }
                      dispatch(getBalance(data))
                    }

                    localStorage.setItem('lastBlock', res.hash)
                    dispatch(reset('sendMoney'))

                    setDisabledButton(false)
                  }

                })
                .catch(err => { console.log('err registration:', err) })
            })
            .catch(err => { console.log('err registration:', err) })
        }
      })
  }),
  withProps({
    transactions: tmpTransactionCollection,
    bestAds: tmpBestAdsCollection,
    gameCategories: gameCategories
  }),
  pure
)(AsyncDashboardDesktop)