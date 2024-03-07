import {UserHoldingType} from '../globalData/globalProps';

export const isArray = (arr: any) => Array.isArray(arr);

type currentProp = {
  ltp: number;
  quantity: number;
  [key: string]: any;
};
export const getCurrentTotal = (list: currentProp[]) =>
  isArray(list) ? list.reduce((p, c) => c.ltp * c.quantity + p, 0) : 0;

type investmentProp = {
  quantity: number;
  [key: string]: any;
};
export const getInvestmentTotal = (list: investmentProp[]) =>
  isArray(list) ? list.reduce((p, c) => c.avgPrice * c.quantity + p, 0) : 0;

type profitLosssProp = {
  close: number;
  ltp: number;
  [key: string]: any;
};

export const getProfitlLossTotal = (list: UserHoldingType[]) =>
  getCurrentTotal(list) - getInvestmentTotal(list);

export const getTodaysProfitlLoss = (list: profitLosssProp[]) =>
  isArray(list)
    ? list.reduce((p, c) => (c.close - c.quantity) * c.ltp + p, 0)
    : 0;

export const getFloatingValues = (
  value: number | undefined,
  precision: number = 2,
) => (value ? value.toFixed(precision) : 0);
