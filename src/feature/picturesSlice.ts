import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Picture, PicturesData } from "../../types"

type Data = {
  pictures: Picture[]
}

type PicturesDataState = {
  pictures: Data | null
}

const initialState: PicturesDataState = {
  pictures: null,
}

export const picturesSlice = createSlice({
  name: "pictures",
  initialState,
  reducers: {
    setPictureData: (state, action: PayloadAction<PicturesData>) => {
      state.pictures = action.payload
    },
  },
})

export const { setPictureData } = picturesSlice.actions
export default picturesSlice.reducer
