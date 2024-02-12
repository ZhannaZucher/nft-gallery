import { useEffect } from "react"
import Form from "./components/Form"
import axios from "axios"
import PicCard from "./components/PicCard"
import { selectPictures, useAppDispatch, useAppSelector } from "./app/selectors"
import { setPictureData } from "./feature/picturesSlice"

function App() {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectPictures)

  useEffect(() => {
    axios
      .get("http://localhost:3000/pictures")
      .then((res) => dispatch(setPictureData(res.data)))
  }, [dispatch])

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form />
      <div className="cards-container">
        {data?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  )
}

export default App
