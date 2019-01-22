import compose from 'recompose/compose'
import { withProps, withHandlers, pure } from 'recompose'
import { clearStorageForLogout } from '../../utils/localStorageUtils'

import AsyncCaseDesktop from '../../components/Case/Desktop/AsyncCaseDesktop'

import GunCase from '../../assets/images/GunCase.png'
import CaseX from '../../assets/images/caseX.png'

const caseItems = [
  { id: 1, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 2, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 3, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 4, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 5, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 6, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 7, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 8, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 9, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 10, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 11, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 12, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 13, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 14, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 15, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 16, title: 'Good Weapon2 1.2', img: GunCase }
]
const relaredItems = [
  { id: 1, title: 'Good Weapon2 1.2', img: CaseX },
  { id: 2, title: 'Good Weapon2 1.2', img: CaseX },
  { id: 3, title: 'Good Weapon2 1.2', img: CaseX },
  { id: 4, title: 'Good Weapon2 1.2', img: CaseX },
  { id: 5, title: 'Good Weapon2 1.2', img: CaseX },
  { id: 6, title: 'Good Weapon2 1.2', img: CaseX }
]

export default compose(
  withProps(() => ({ caseItems, relaredItems })),
  withHandlers({
    handleLogout: ({ history }) => () => {
      clearStorageForLogout()
      history.push('/')
    }
  }),
  pure
)(AsyncCaseDesktop)
