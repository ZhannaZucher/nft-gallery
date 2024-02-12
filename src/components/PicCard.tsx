import { FaRegEdit } from "react-icons/fa"
import { Picture } from "../../types"
import Delete from "./Delete"
import { useRef, useState } from "react"
import axios from "axios"
import { useAppDispatch } from "../app/selectors"
import { editPicture } from "../feature/picturesSlice"

type PicCardProps = {
  pic: Picture
}

const PicCard = ({ pic }: PicCardProps) => {
  const [edit, setEdit] = useState(false)
  const artistInput = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const handleEdit = () => {
    if (artistInput.current) {
      const data = {
        artist: artistInput.current.value,
        year: pic.year,
        photo: pic.photo,
        id: pic.id,
      }

      axios.put(`http://localhost:3000/pictures/${pic.id}`, data).then(() => {
        dispatch(editPicture(data))
      })

      setEdit(!edit)
    }
  }

  return (
    <div className="pic-card">
      <img src={pic.photo} alt={"photo de " + pic.artist} />
      <div className="infos">
        <div className="title">
          {edit ? (
            <div>
              <input
                type="text"
                autoFocus
                defaultValue={pic.artist}
                ref={artistInput}
              />
              <button onClick={handleEdit}>Valider</button>
            </div>
          ) : (
            <h4>
              {artistInput.current ? artistInput.current.value : pic.artist}
            </h4>
          )}
          <p>{pic.year}</p>
        </div>
        <div className="btn-container">
          <div className="edit-icon" onClick={() => setEdit(!edit)}>
            <FaRegEdit />
          </div>
          <Delete id={pic.id} />
        </div>
      </div>
    </div>
  )
}

export default PicCard
