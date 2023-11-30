import React, { useContext } from 'react'
import "./css/adminmain.css"
import { Link } from 'react-router-dom'
import { newContext } from '../../App'

function AdminMain() {

  const {adminlogin} = useContext(newContext);





  return (
    <div style={{marginTop:"70px",backgroundColor :"lightblue",paddingBottom:"20px",height:"100vh"}} className='admin-main'>
      {adminlogin?
      <div className='container ad-main-div'>
        <div className='row ad-main-row'>
          <div className='col-6 ad-col-main'>
            <Link to={"/users"}><div className='ad-user-div'></div></Link><br/>
            <p><strong>Users</strong></p>
          </div>
          <div className='col-6 ad-col-main'>
            <Link to={"/products"}><div className='ad-items-div'></div></Link><br/>
            <p><strong>Products</strong></p>
          </div>
        </div>
      </div>:<h1 style={{color:"red",textAlign:"center"}}>Access Denied !</h1>}
    </div>
  )
}

export default AdminMain