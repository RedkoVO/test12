import CancelІSelected from '../../../../../../assets/images/svg/cancelІSelected.svg'

export default () => ({
  root: {
    width: '240px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingLeft: '30px',
    paddingRight: '20px',
    boxSizing: 'border-box'
  },
  paymentSelectedTitle: {
    fontSize: '12px',
    fontWeight: 500,
    alignSelf: 'flex-start',
    marginBottom: '7px'
  },
  paymentSelectedItem: {
    display: 'flex',
    width: '160px',
    paddingLeft: '5px',
    marginBottom: '2px',
    fontSize: '10px',
    fontWeight: 500,
    height: '11px',
    backgroundColor: 'rgba(0,0,0,0.13)',
    borderRadius: '5px'
  },
  selectedPrice: {
    fontSize: '10px',
    fontWeight: 500
  },
  selectedClose: {
    width: '8px',
    height: '8px',
    marginTop: '1px',
    marginLeft: '5px',
    background: `url(${CancelІSelected})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain'
  },
})
