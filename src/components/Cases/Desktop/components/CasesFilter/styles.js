import Searcher from '../../../../../assets/images/svg/searcher.svg'

export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '720px',
    padding: '10px 25px',
    boxSizing: 'border-box',
    borderRadius: '25px',
    backgroundColor: 'rgba(0,0,0,0.08)'
  },
  casesFilterSearch: {
    width: '255px',
    height: '35px',
    padding: '15px 22px',
    color: '#fff',
    boxSizing: 'border-box',
    fontSize: '16px',
    fontWeight: 500,
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(0,0,0,0.13)',
    borderRadius: '18px'
  },
  casesFilterOptions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '50px',
    width: '335px'
  },
  casesFilterType: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  casesFilterItem: {
    fontSize: '11px',
    fontWeight: 500,
    padding: '5px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(0,0,0,0.13)',
    color: '#fff',
    textDecoration: 'none',

    '&:first-child': {
      borderTopLeftRadius: '15px',
      borderBottomLeftRadius: '15px',
      paddingLeft: '15px'
    },
    '&:last-child': {
      borderTopRightRadius: '15px',
      borderBottomRightRadius: '15px',
      paddingRight: '15px'
    }
  },
  casesFilterGameItem: {
    fontSize: '11px',
    fontWeight: 500,
    padding: '5px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(0,0,0,0.13)',
    color: '#fff',
    textDecoration: 'none'
  },
  selectedItem: {
    fontWeight: 700,
    backgroundColor: 'rgba(255,255,255,0.14)'
  },
  casesFilterBtn: {
    position: 'relative',
    width: '42px',
    height: '42px',
    background: `url(${Searcher})`,
    backgroundColor: ' rgba(0,0,0,0.13)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '20px',
    borderRadius: '15px'
  }
})
