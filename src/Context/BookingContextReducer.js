export default (state,action) => {
    switch (action.type) {
        case 'ADD_TO_BookingSearch':
          return {
            ...state,
            Initialbookingdetails: action.payload,
          };
          case 'ADD_TO_RecentSearch':
            return{
              ...state,
              Addtorecentsearch: action.payload,
            }
        default:
          return state;
      }
}

// export default (state,action) => {
//     switch(action.type){
//         case "ADD_TO_Basic":
//             return {
//               ...state,
//               basic:action.payload,
//             }
            
                
//             default:
//                 return state;
//     }
// }