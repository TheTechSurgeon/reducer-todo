export const initialState = !JSON.parse(localStorage.getItem('cart'))
  ? []
  : JSON.parse(localStorage.getItem('cart'));



export function reducer(state = initialState, action) {
  // Action === dispatch
  switch (
    action.type 
  ) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          todo: action.payload,
          completed: false,
          id: Date.now()
        }
      ];

    case 'TOGGLE_COMPLETED':
      return state.map(item => {
        if (action.payload === item.id) {
          item.completed = !item.completed;
        }
        return item;
      });

    case 'CLEAR_COMPLETED':
      // console.log(state)
      return state.filter(item => item.completed === false);

    default:
      return state;
  }
}
