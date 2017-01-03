import R from 'ramda';

export const isAlive = R.filter(R.whereEq({ is_alive: true }));

export const isCurrent = R.filter(R.whereEq({ is_current: true }));

export const isBill = R.filter(R.whereEq({ bill_resolution_type: 'bill' }));


export const sponsor = R.map(R.prop('sponsor'));

export const isRepublican = R.filter(R.filter(R.whereEq({ party: 'Republican' })));
export const isDemocrat = R.filter(R.whereEq({ party: 'Democrat' }));

export const sortByCurrentStatusDate = R.sortBy(R.prop('current_status_date'));

export const isCurrentAndBill = R.compose(isCurrent, isBill, sortByCurrentStatusDate);

export const isRepublicanCurrentBill = R.compose(isCurrentAndBill, isRepublican, sponsor);