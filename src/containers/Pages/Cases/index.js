import compose from 'recompose/compose'
import { withProps, pure } from 'recompose'

import CasesDesktop from '../../../components/Pages/Cases/Desktop'

import CaseXIcon from '../../../assets/images/caseX.png'

const tmpCases = [
  {
    id: 1,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 2,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 3,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 4,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 5,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 6,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 7,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 8,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 9,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 10,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 11,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 12,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  }
]

export default compose(
  withProps(() => ({ cases: tmpCases })),
  pure
)(CasesDesktop)
