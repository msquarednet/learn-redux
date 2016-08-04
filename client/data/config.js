import Raven from 'raven-js';

const sentry_key = '7ab417acc7f34ddbb467deaa625b25d1';
const sentry_app = '89545';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}

