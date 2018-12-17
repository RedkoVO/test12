export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0,0,0,0.13)',
    borderRadius: '20px',
    marginTop: '30px',
    width: '800px',
    padding: '30px 35px',
    boxSizing: 'border-box'
  },
  casesRelatedTilte: {
    flexBasis: '100%',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 500,
    marginBottom: '15px'
  },
  casesRelatedItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100px',
    minHeight: '100px',
    backgroundColor: 'rgba(0,0,0,0.13)',
    borderRadius: '15px',
    marginBottom: '10px',
    padding: '5px',
    boxSizing: 'border-box',
    marginRight: 0
  },
  casesRelatedItemImg: {
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
  casesRelatedItemName: {
    fontSize: '10px',
    textAlign: 'center',

    '& span': {
      fontWeight: 700
    }
  }
})
