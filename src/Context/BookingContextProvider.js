import React, { createContext, useReducer } from 'react';
import PropertyReducer from './BookingContextReducer';

const initialState = {
  Initialbookingdetails: [],
  Addtorecentsearch:[],
  Addtoinsights:[],
  Addtosettings:[],
  Addtobookingdetails:[],
  Addtopayments:[],
};

export const BookingContext = createContext(initialState);

export const BookingProvider = (props) => {
  const [state, dispatch] = useReducer(PropertyReducer, initialState);
  const addtobookingsearch = (values) => {
    dispatch({ type: "ADD_TO_BookingSearch", payload: values });
  };
  const addtorecentsearch = (values) => {
    dispatch({ type: "ADD_TO_RECENTSEARCH", payload: values });
  };
  const addtoinsights=(values)=>{
    dispatch({type:"ADD_TO_Insights",payload:values})
  }
  const addtosettings=(values)=>{
    dispatch({type:"ADD_TO_Settings",payload:values})
  }
  const addtobookingdetails=(values)=>
  {
    dispatch({type:"ADD_TO_Bookingdetails",payload:values})
  }
   
  const addtopayments=(values)=>{
    dispatch({type:"ADD_TO_Payments",payload:values})
  }

  return (
    <BookingContext.Provider
      value={{
        Initialbookingdetails:state.Initialbookingdetails, 
        addtobookingsearch,
        Addtorecentsearch:state.Addtorecentsearch,
        addtorecentsearch,
        Addtoinsights:state.ADD_TO_BookingContext,
        addtoinsights,
        Addtosettings:state.addtosettings,
        addtosettings,
      }}
    >
      {props.children}
    </BookingContext.Provider>
  );
};
