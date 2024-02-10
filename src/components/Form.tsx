import axios from "axios"
import { useRef } from "react"

const Form = () => {
  const inputArt = useRef<HTMLInputElement>(null)
  const inputYear = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      artist: inputArt.current?.value,
      year: inputYear.current?.value,
      photo: `https://picsum.photos/400/${Math.round(
        Math.random() * 200 + 300
      )}`,
    }

    axios.post("http://localhost:3000/pictures", data).then(() => {
      formRef.current?.reset()
    })
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
