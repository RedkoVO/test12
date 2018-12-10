import BackArrow from '../../../../../assets/images/svg/Backarrow.svg'
import CaseStar from '../../../../../assets/images/svg/Casestar.svg'

export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '800px',
    marginTop: '25px',
    minHeight: '600px',
    borderRadius: '20px',
    backgroundColor: 'rgba(0,0,0,0.13)'
  },
  caseOpenTop: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '200px',
    padding: '30px 35px',
    paddingBottom: 0,
    boxSizing: 'border-box',
    justifyContent: 'center'
  },
  caseOpenBackBtn: {
    position: 'absolute',
    alignSelf: 'flex-start',
    width: '22px',
    height: '22px',
    background: `url(${BackArrow})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    top: '30px',
    left: '35px'
  },
  caseOpenTopImg: {
    width: '250px',
    height: '170px',

    '& img': {
      maxWidth: '100%'
    }
  },
  caseOpenTopDescr: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '160px',
    paddingTop: '15px',
    boxSizing: 'border-box'
  },
  caseOpenTopMarker: {
    position: 'absolute',
    width: '15px',
    height: '15px',
    background: `url(${CaseStar})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    right: '0px',
    top: 0
  },
  caseOpenTopName: {
    fontSize: '15px',

    '&:span': {
      fontWeight: 500
    }
  },
  caseOpenTopPrice: {
    fontSize: '12px',
    marginTop: '8px',
    marginBottom: '5px',
    padding: '5px 15px',
    borderRadius: '15px',
    backgroundColor: 'rgba(0,0,0,0.13)',

    '&:span': {
      fontWeight: 500
    }
  },
  caseOpenTopGame: {
    fontSize: '11px',

    '&:span': {
      fontWeight: 500
    }
  },
  caseOpenContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    padding: '30px 25px 30px 35px',
    boxSizing: 'border-box'
  },
  caseOpenTitle: {
    flexBasis: '100%',
    textAlign: 'center',
    fontSize: '17px',
    fontWeight: 500,
    marginBottom: '25px'
  },
  caseOpenItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100px',
    minHeight: '100px',
    backgroundColor: 'rgba(0,0,0,0.13)',
    borderRadius: '15px',
    marginRight: '10px',
    marginBottom: '10px',
    padding: '5px',
    boxSizing: 'border-box'
  },
  caseOpenItemImg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95px',
    height: '55px',
    marginBottom: '10px',

    '& img': {
      maxWidth: '100%',
      maxHeight: '100%'
    }
  },
  caseOpenItemName: {
    fontSize: '10px',
    textAlign: 'center',

    '&span': {
      fontWeight: 700
    }
  }
})
