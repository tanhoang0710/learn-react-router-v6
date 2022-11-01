import { useParams } from 'react-router-dom'

export default function StaffItem() {
  const { id } = useParams()
  console.log('🚀 ~ file: StaffItem.tsx ~ line 5 ~ StaffItem ~ params', id)
  return <div>StaffItem {id}</div>
}
