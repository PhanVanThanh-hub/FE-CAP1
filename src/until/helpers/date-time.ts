import moment from 'moment-timezone';

export const DATE_FORMAT = 'YYYY-MM-DD';
export const LONG_DATE_FORMAT = 'DD MMM YYYY';
export const LONG_MONTH_FORMAT = 'MMMM DD, YYYY';
export const SHORT_DATE_TIME_FORMAT = 'DD MMM - LT';
export const CALENDAR_DATE_FORMAT = 'YYYY-MM-DD';
export const TIME_FORMAT = 'LT';
export const LONG_MONTH_NAME_FORMAT = 'DD MMM YYYY';

export function formatDate(value: moment.MomentInput) {
  if (!value) {
    return '';
  }
  return moment(value).format(DATE_FORMAT);
}

export function formatTime(value: moment.MomentInput) {
  if (!value) {
    return '';
  }
  return moment(value).format(TIME_FORMAT);
}

export function formatShortDateTime(value: moment.MomentInput) {
  if (!value) {
    return '';
  }
  return moment(value).format(SHORT_DATE_TIME_FORMAT);
}
