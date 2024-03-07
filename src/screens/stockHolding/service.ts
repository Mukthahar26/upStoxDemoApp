import {fetchGetRequest} from '../../fetchApicalls/axiosInstance';
import endPoints from '../../fetchApicalls/endpoints';
import {UserHoldingType} from '../../globalData/globalProps';

export const fetchStockHoldings = async () => {
  try {
    const result: {userHolding: UserHoldingType[]} = await fetchGetRequest(
      endPoints.STOCKHOLDINGS,
    );
    if (result.userHolding) {
      return result.userHolding.map(item => {
        const {avgPrice, ltp, quantity} = item;
        const currentValue = ltp * quantity;
        const investmentValue = avgPrice * quantity;
        const profitLossValue = currentValue - investmentValue;
        const data = {
          ...item,
          currentValue,
          investmentValue,
          profitLossValue,
        };
        return data;
      });
    }
    return result.userHolding;
  } catch (e: any) {
    return {error: true, data: e};
  }
};
