import axios from "axios"
import { AiOutlineDelete } from "react-icons/ai"
import { Picture } from "../../types"

type DeleteProps = {
  id: Picture["id"]
}

const Delete = ({ id }: DeleteProps) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/pictures/${id}`)
  }
  return (
    <div className="delete-icon" onClick={() => handleDelete()}>
      <AiOutlineDelete />
    </div>
  )
}

export default Delete
