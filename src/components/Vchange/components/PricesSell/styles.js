export default () => ({
  root: {
    padding: '100px 0',
    width: '340px'
  },
  title: {
    paddingBottom: '20px',
    textAlign: 'center',
    fontSize: '33px',
    fontFamily: 'ubBold',

    '& span': {
      color: '#6283ff'
    }
  },
  wrTable: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: ' 0 7px',

    '& th': {
      textAlign: 'left'
    },
    '& tr': {
      height: '26px',
      fontSize: '14px',
      fontFamily: 'ubMedium'
    },
    '& th:first-child': {
      paddingLeft: '15px'
    }
  },
  wrItem: {
    '& td': {
      backgroundColor: '#f8f8f8'
    },

    '& td:first-child': {
      paddingLeft: '15px',
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px'
    },
    '& td:last-child': {
      borderTopRightRadius: '10px',
      borderBottomRightRadius: '10px'
    }
  }
})
