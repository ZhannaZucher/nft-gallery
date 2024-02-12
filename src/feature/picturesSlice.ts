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
    editPicture: (state, action: PayloadAction<Picture>) => {
      if (state.pictures) {
        state.pictures = state.pictures.map((pic) => {
          if (pic.id === action.payload.id) {
            return {
              ...pic,
              artist: action.payload.artist,
            }
          } else {
            return pic
          }
        })
      }
    },
  },
})

export const { setPictureData, addPicture, editPicture } = picturesSlice.actions
export default picturesSlice.reducer
