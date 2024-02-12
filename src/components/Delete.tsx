import axios from "axios"
import { AiOutlineDelete } from "react-icons/ai"
import { Picture } from "../../types"
import { useAppDispatch } from "../app/selectors"
import { deletePicture } from "../feature/picturesSlice"

type DeleteProps = {
  id: Picture["id"]
}

const Delete = ({ id }: DeleteProps) => {
  const dispatch = useAppDispatch()
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/pictures/${id}`).then(() => {
      id && dispatch(deletePicture(id))
    })
  }
  return (
    <div className="delete-icon" onClick={() => handleDelete()}>
      <AiOutlineDelete />
    </div>
  )
}

export default Delete
