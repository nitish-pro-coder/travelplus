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
          case 'ADD_TO_Bookingcontext':
            return{
              ...state,
              Addtobookingcontext:action.payload
            }
          case 'ADD_TO_Insights':
            return{
              ...state,
              Addtoinsights:action.payload
            }
          case 'ADD_TO_Settings':
            return {
              ...state,
              Addtosettings:action.payload
            } 
          case 'ADD_TO_Payments':
            return {
              ...state,
              Addtopayments:action.payload
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