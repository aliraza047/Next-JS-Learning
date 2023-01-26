import {Data} from "@/data"

export default function handler(req, res) {
  const { postId } = req.query
  if (req.method === 'GET') {
    const comment = Data.find(comment => comment.id === parseInt(postId))
    res.status(200).json(comment)
  } else if (req.method === 'DELETE') {
    const deletedComment = Data.find(
      comment => comment.id === parseInt(postId)
    )
    const index = Data.findIndex(
      comment => comment.id === parseInt(postId)
    )
    Data.splice(index, 1)
    res.status(200).json(deletedComment)
  }
}