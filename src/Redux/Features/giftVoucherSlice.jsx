// src/redux/giftVoucherSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: null,
  sender_name: null,
  sender_email: null,
  receiver_name: null,
  receiver_email: null,
  message: "",
  txnid: new Date().getTime().toString(),
};

const giftVoucherSlice = createSlice({
  name: "giftVoucher",
  initialState,
  reducers: {
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setSenderName: (state, action) => {
      state.sender_name = action.payload;
    },
    setSenderEmail: (state, action) => {
      state.sender_email = action.payload;
    },
    setReceiverName: (state, action) => {
      state.receiver_name = action.payload;
    },
    setReceiverEmail: (state, action) => {
      state.receiver_email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setTxnId: (state, action) => {
      state.txnid = action.payload;
    },
  },
});

export const {
  setAmount,
  setSenderName,
  setSenderEmail,
  setReceiverName,
  setReceiverEmail,
  setMessage,
  setTxnId,
} = giftVoucherSlice.actions;

export default giftVoucherSlice.reducer;
