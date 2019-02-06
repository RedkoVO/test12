import BGLogo from '../../../../assets/images/registration-bg.png'

export default () => ({
  root: {
    width: '100%',
    minHeight: '680px',
    height: '100%',
    backgroundImage: `url(${BGLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 0
  },
  containerRegistrat: {
    display: 'flex',
    minHeight: 'inherit',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '15px'
  },
  copyright: {
    fontsize: '16px',
    fontWeight: 700,
    marginBottom: '5px',
    marginTop: '35px'
  },
  footerLink: {
    fontSize: '14px',
    fontWeight: 200,
    color: 'inherit',
    textDecoration: 'none',
    padding: '5px'
  }
})
