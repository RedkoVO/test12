import DownIcon from '../../../../../assets/images/svg/white-down.svg'

export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '25px',
    padding: '0 30px 0 20px',
    boxSizing: 'border-box'
  },
  sortGenre: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '25px'
  },
  sortGenreName: {
    fontSize: '12px',
    fontWeight: 400,
    color: '#fff',
    marginRight: '5px'
  },
  sortGenreItem: {
    position: 'relative',
    fontSize: '12px',
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none',

    '&:after': {
      content: `""`,
      position: 'absolute',
      top: '4px',
      right: '-12px',
      width: '8px',
      height: '8px',
      backgroundImage: `url(${DownIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '8px'
    }
  },
  sortRating: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '20px'
  },
  sortRatingName: {
    fontSize: '12px',
    fontWeight: 400,
    color: '#fff',
    marginRight: '5px'
  },
  sortRatingItem: {
    position: 'relative',
    fontSize: '12px',
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none',

    '&:after': {
      content: `""`,
      position: 'absolute',
      top: '4px',
      right: '-12px',
      width: '8px',
      height: '8px',
      backgroundImage: `url(${DownIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '8px'
    }
  },
  sortContract: {
    display: 'flex',
    flexDirection: 'row'
  },
  sortContractName: {
    fontSize: '12px',
    fontWeight: 400,
    color: '#fff',
    marginRight: '5px'
  },
  sortContractItem: {
    position: 'relative',
    fontSize: '12px',
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none',

    '&:after': {
      content: `""`,
      position: 'absolute',
      top: '4px',
      right: '-12px',
      width: '8px',
      height: '8px',
      backgroundImage: `url(${DownIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '8px'
    }
  },
  sortSearch: {
    marginRight: '10px'
  },
  sortSearchField: {
    width: '200px',
    height: '40px',
    paddingLeft: '23px',
    boxSizing: 'border-box',
    border: 'none',
    outline: 'none',
    borderRadius: '20px',
    marginLeft: '5px',
    backgroundColor: 'rgba(255,255,255,0.25)',
    color: '#fff',

    '&::placeholder': {
      color: '#fff'
    }
  }
})
