const today = new Date();

const Month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formattedDate = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일`;

export const formattedDateEn = ` ${
  Month[today.getMonth()]
} ${today.getDate()}, ${today.getFullYear()}`;

export const formattedDateMonth = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월`;
