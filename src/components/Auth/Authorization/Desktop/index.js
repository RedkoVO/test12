import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import { Field, Form } from 'redux-form'
import Dropzone from 'react-dropzone'
import cn from 'classnames'

import InputField from '../../../App/components/Form/InputField'

import styles from './styles'

const Authorization = ({
  classes,
  onSubmit,
  handleFileDropzone,
  isDisabledButton
}) => (
  <div className={classes.root}>
    <div className={classes.containerRegistrat}>
      <div className={classes.containerRegistratStep1}>
        <Form className={classes.registrStep1} onSubmit={onSubmit}>
          <h1 className={classes.step1Title}>Login</h1>
          <label htmlFor="key" className={classes.step1Label}>
            Enter secret key from email
          </label>
          <Field
            id="key"
            name="key"
            type="text"
            className={classes.field}
            component={InputField}
            placeholder="Secret key"
          />

          <Dropzone onDrop={handleFileDropzone} accept="text/*">
            {({
              getRootProps,
              getInputProps,
              isDragActive,
              isDragAccept,
              isDragReject
            }) => {
              return (
                <div
                  {...getRootProps()}
                  className={cn(
                    classes.dropzone,
                    { [classes.dropAccept]: isDragAccept },
                    { [classes.dropReject]: isDragReject }
                  )}
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop files here...</p>
                  ) : (
                    <p>Try dropping .txt files here, or click to this area.</p>
                  )}

                  {isDragReject && (
                    <p>Unsupported file type...</p>
                  )}
                </div>
              )
            }}
          </Dropzone>

          <div>
            <Link to={'/registration'} className={classes.step1BtnBack}>
              Registration
            </Link>
            <button
              type="submit"
              className={cn(classes.step1BtnsRegister, {
                disabled: isDisabledButton
              })}
            >
              Login!
            </button>
          </div>
        </Form>
      </div>

      <div className={classes.footer}>
        <span className={classes.copyright}>
          Vault. All Rights Reserved 2018
        </span>
        <div>
          <a href="/" className={classes.footerLink}>
            Privacy Policy
          </a>
          <a href="/" className={classes.footerLink}>
            Terms and conditions
          </a>
        </div>
      </div>
    </div>
  </div>
)

Authorization.propTypes = {
  classNamees: PropTypes.object,
  onSubmit: PropTypes.func,
  handleFileDropzone: PropTypes.func,
  isDisabledButton: PropTypes.bool,
  test_name: PropTypes.string
}

export default withStyles(styles)(Authorization)
