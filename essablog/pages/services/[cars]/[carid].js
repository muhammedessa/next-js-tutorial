import { useRouter } from 'next/router'

export default function carid() {
    const router = useRouter()
    return(
        <>
        <h1>Car type  :  {router.query.cars} </h1>
        <h1>car number :  {router.query.carid} </h1>


        
        </>
    )
    
}