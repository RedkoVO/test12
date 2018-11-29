import CheckedIcon from '../../../../assets/images/svg/checked.svg'

export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '520px',
    padding: '25px',
    backgroundColor: 'rgba(0,0,0,0.08)',
    borderRadius: '15px',
    marginTop: '25px',
    boxSizing: 'border-box'
  },
  tradeSkinsTitle: {
    fontSize: '17px',
    textAlign: 'center',
    flexBasis: '100%',
    marginBottom: '25px'
  },
  tradeSkinsItemWrap: {
    width: '100%',
    height: '420px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  tradeSkinsItem: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.08)',
    borderRadius: '15px',
    width: '100px',
    height: '125px',
    padding: '5px',
    boxSizing: 'border-box',
    marginBottom: '10px'
  },
  skinSelected: {
    position: 'relative',
    width: '100px',
    height: '125px',
    borderRadius: '15px',

    '&:after': {
      position: 'absolute',
      content: `''`,
      width: '100%',
      height: '100%',
      background: `url(${CheckedIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center 5%',
      backgroundSize: '50px',
      zIndex: 100
    }
  },
  skinsItemImg: {
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    width: '85px',

    '& img': {
      maxWidth: '100%',
      maxHeight: '100%'
    }
  },
  skinsItemName: {
    fontSize: '10px',
    textAlign: 'center',
    marginTop: '7px'
  },
  skinsItemPrice: {
    fontSize: '14px',
    fontWeight: 500,
    textAlign: 'center',
    margin: '2px 0'
  },
  skinsItemSale: {
    fontSize: '10px',
    textAlign: 'center',
    fontWeight: 700,
    position: 'relative',

    '&:after': {
      position: 'absolute',
      content: `''`,
      width: '125%',
      height: '1px',
      backgroundColor: '#fff',
      left: '-12.5%',
      top: '50%'
    }
  },
  pageNavi: {
    minWidth: '100px',
    height: '30px',
    margin: '10px',
    marginBottom: '10px',
    padding: '0px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    listStyleType: 'none',

    '& li': {
      margin: '0 1px',

      '&:last-child div': {
        marginRight: '0px'
      },

      '& div': {
        display: 'block',
        width: '100%',
        height: '100%',
        padding: '5px 7px',
        boxSizing: 'border-box',
        fontSize: '11px',
        fontWeight: 700,
        textDecoration: 'none',
        background: '#fff',
        transition: 'background 200ms linear',
        backgroundColor: 'rgba(0,0,0,0.18)',
        color: '#fff',

        '&.current': {
          background: 'rgba(255,255,255,0.18)',
          color: '#fff'
        },
        '&.disable': {
          background: 'rgba(255,255,255,0.18)',
          color: '#fff'
        },
        '&:hover': {
          background: 'rgba(255,255,255,0.18)',
          color: '#fff'
        }
      }
    }
  },
  previos: {
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px'
  },
  next: {
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px'
  }
})
