import axios from "axios"
import { useRef } from "react"
import { useAppDispatch } from "../app/selectors"
import { addPicture } from "../feature/picturesSlice"

type FormProps = {
  getPictures: () => void
}

const Form = ({ getPictures }: FormProps) => {
  const inputArt = useRef<HTMLInputElement>(null)
  const inputYear = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputArt.current && inputYear.current) {
      const data = {
        artist: inputArt.current?.value,
        year: inputYear.current?.value,
        photo: `https://picsum.photos/400/${Math.round(
          Math.random() * 200 + 300
        )}`,
      }

      axios
        .post("http://localhost:3000/pictures", data)
        .then(() => {
          dispatch(addPicture(data))
          formRef.current?.reset()
        })
        .then(() => {
          dispatch(getPictures)
        })
    }
  }

  return (
    <div className="form-container">
      <div className="form">
        <h3>Enregistrer une nouvelle photo</h3>
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
          <input type="text" placeholder="Artiste" ref={inputArt} />
          <input type="text" placeholder="Année" ref={inputYear} />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  )
}

export default Form
