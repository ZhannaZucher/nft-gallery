import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Picture, PicturesData } from "../../types"

type PicturesDataState = {
  pictures: PicturesData | null
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
    addPicture: (state, action: PayloadAction<Picture>) => {
      state.pictures?.push(action.payload)
    },
  },
})

export const { setPictureData, addPicture } = picturesSlice.actions
export default picturesSlice.reducer
