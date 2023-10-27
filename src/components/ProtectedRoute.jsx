import { Navigate } from "react-router-dom"


// eslint-disable-next-line no-unused-vars
export default function ProtectedRoute(children, user) {
  if(!user){
    <Navigate to= '/' />
  }
  return (
    children
  )
}