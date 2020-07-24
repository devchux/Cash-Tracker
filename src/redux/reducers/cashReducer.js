let initialState = {
  credits: [
    { id: 1, transaction: "Sold Rice", amount: 200 },
    { id: 2, transaction: "Sold beans", amount: 400 },
  ],
  debits: [
    { id: 1, transaction: "Rice", amount: 2000 },
    { id: 2, transaction: "Beans", amount: 4000 },
  ],
};

export default function cashReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CREDIT":
      return {
        ...state,
        credits: [...state.credits, { ...action.item }],
      }
    case "ADD_DEBIT":
      return {
        ...state,
        debits: [...state.debits, { ...action.item }]
      };
    default:
      return state;
  }
}
