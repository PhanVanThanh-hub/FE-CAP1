import moment from "moment-timezone";

export const DATE_FORMAT = "YYYY-MM-DD";
export const LONG_DATE_FORMAT = "DD MMM YYYY";
export const LONG_MONTH_FORMAT = "MMMM DD, YYYY";
export const SHORT_DATE_TIME_FORMAT = "DD MMM - LT";
export const CALENDAR_DATE_FORMAT = "YYYY-MM-DD";
export const TIME_FORMAT = "LT";
export const LONG_MONTH_NAME_FORMAT = "DD MMM YYYY";

const MIL_TO_SEC = 0.001;
const MIL_TO_MIN = 0.001 / 60;
const MIL_TO_HOURS = 0.001 / 3600;
const MIL_TO_DAY = 0.001 / 3600 / 24;
const MIL_TO_WEEK = MIL_TO_DAY / 7;
const MIL_TO_MONTH = MIL_TO_WEEK / 4;
const MIL_TO_YEAR = MIL_TO_MONTH / 12;

export function formatDate(value: moment.MomentInput) {
  if (!value) {
    return "";
  }
  return moment(value).format(DATE_FORMAT);
}

export function formatTime(value: moment.MomentInput) {
  if (!value) {
    return "";
  }
  return moment(value).format(TIME_FORMAT);
}

export function formatShortDateTime(value: moment.MomentInput) {
  if (!value) {
    return "";
  }
  return moment(value).format(LONG_MONTH_FORMAT);
}

export const timeAgo = (value: moment.MomentInput) => {
  if (!value) {
    return "";
  }
  const today = moment.now();
  const valueMoment = moment(value);
  const create_at = valueMoment.toDate().getTime();
  const timeAgo = today - create_at;
  if (Math.floor(timeAgo * MIL_TO_SEC) < 60) {
    return `${Math.floor(timeAgo * MIL_TO_SEC)} sec `;
  }
  if (Math.floor(timeAgo * MIL_TO_MIN) < 60) {
    return `${Math.floor(timeAgo * MIL_TO_MIN)} min `;
  }
  if (Math.floor(timeAgo * MIL_TO_HOURS) < 24) {
    return `${Math.floor(timeAgo * MIL_TO_HOURS)} hours `;
  }
  if (Math.floor(timeAgo * MIL_TO_DAY) < 7) {
    return `${Math.floor(timeAgo * MIL_TO_DAY)} days `;
  }
  if (Math.floor(timeAgo * MIL_TO_WEEK) <= 4) {
    return `${Math.floor(timeAgo * MIL_TO_WEEK)} weeks `;
  }
  if (Math.floor(timeAgo * MIL_TO_MONTH) <= 12) {
    return `${Math.floor(timeAgo * MIL_TO_MONTH)} months `;
  }
  if (Math.floor(timeAgo * MIL_TO_YEAR) < 4) {
    return `${formatDate(create_at)}`;
  }

  return;
};
