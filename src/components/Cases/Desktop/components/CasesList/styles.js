import Casestar from '../../../../../assets/images/svg/Casestar.svg'

export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '800px',
    marginTop: '25px'
  },
  casesListItem: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '170px',
    height: '200px',
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderRadius: '15px',
    justifyContent: 'space-around',
    boxSizing: 'border-box',
    padding: '10px 0',
    marginBottom: '25px'
  },
  casesListItemImg: {
    width: '150px',
    height: '125px',

    '& img': {
      maxWidth: '100%'
    }
  },
  casesListItemName: {
    fontSize: '13px',
    marginBottom: '5px',

    '& span': {
      fontWeight: 500
    }
  },
  casesListItemPrise: {
    fontSize: '10px',
    padding: '5px 15px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    backgroundColor: 'rgba(0,0,0,0.13)',

    '& span': {
      fontWeight: 500
    }
  },
  casesListItemGame: {
    fontSize: '9px',

    '& span': {
      fontWeight: 500
    }
  },
  casesListItemMarker: {
    position: 'absolute',
    width: '13px',
    height: '13px',
    background: `url(${Casestar})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    right: '10px',
    bottom: '10px'
  }
})
