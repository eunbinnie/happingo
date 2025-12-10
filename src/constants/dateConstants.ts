export const TODAY = new Date();
export const TODAY_YEAR = TODAY.getFullYear();
export const TODAY_MONTH = TODAY.getMonth() + 1;
export const TODAY_MONTH_2DIGIT = String(TODAY_MONTH).padStart(2, '0'); // 월 01, 02, 03 형식으로 표시
