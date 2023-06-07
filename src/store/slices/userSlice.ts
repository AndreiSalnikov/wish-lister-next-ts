import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  name: null,
  _id: null,
  reminder: false,
  about: 'Здесь могло бы быть описание вашего профиля.',
  avatar: 'https://img.freepik.com/premium-vector/cute-business-llama-icon-illustration-alpaca-mascot-cartoon-character-animal-icon-concept-isolated_138676-989.jpg?w=2000',
  reservedGifts: [],
  createdAt: '',
  __v: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      // @ts-ignore
      state._id = action.payload._id;
      state.reminder = action.payload.reminder;
      state.about = action.payload.about;
      state.avatar = action.payload.avatar;
      state.reservedGifts = action.payload.reservedGifts;
      state.createdAt = action.payload.createdAt;
      state.__v = action.payload.__v;
    },
    removeUser(state) {
      state.email = null;
      state.name = null;
      // @ts-ignore
      state._id = null;
      state.reminder = false;
      state.about = 'Здесь могло бы быть описание вашего профиля.';
      state.avatar = '';
      state.reservedGifts = [];
      state.createdAt = '';
      state.__v = 0;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
