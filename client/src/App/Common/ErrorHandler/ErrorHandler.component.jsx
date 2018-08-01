import React from 'react';
import PropTypes from 'prop-types';
import { DEV_ORIGIN } from 'Constants/app/app.constants';
import './ErrorHandler.styles.scss';

class ErrorHandler extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { hasError: false, info: '', error: '' };
  }

  componentDidCatch(error, info) {
    const serialiazedError = JSON.stringify(
      error,
      Object.getOwnPropertyNames(error),
    );
    const parsedError = JSON.parse(serialiazedError);
    this.setState({ hasError: true, info, error: parsedError });
    // console.error(error);// eslint-disable-line
    // console.info(info); // eslint-disable-line
  }

  render() {
    const { hasError, info, error } = this.state;
    const { children } = this.props;
    const { origin } = window.location;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <section className="errorhandler errorhandler__wrapper">
          <img
            className="errorhandler__image"
            alt="err"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/497px-Error.svg.png"
          />
          <h1>
              Some Error Occured
          </h1>
          {origin === DEV_ORIGIN && (
            <div className="errorhandler__stacktrace">
              <section className="errorhandler__errortrace">
                <p>
                  Exception Trace
                </p>
                <pre>
                  {error.stack}
                </pre>
              </section>
              <br />
              <section className="errorhandler__infotrace">
                <p>
                  Exception Details
                </p>
                <pre>
                  {info.componentStack}
                </pre>
              </section>
            </div>
          )}
        </section>
      );
    }
    return (
      <section className="e-h error-checked">
        {children}
      </section>
    );
  }
}

export default ErrorHandler;
