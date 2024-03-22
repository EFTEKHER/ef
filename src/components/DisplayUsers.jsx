import React from 'react'
import styled from 'styled-components'
import {  useSelector,useDispatch } from 'react-redux'
import { FaTrash } from 'react-icons/fa';
import { removeUser } from '../store/UserSlice';
const DisplayUsers = () => {
    const data= useSelector((state)=>{
        return state.users
    })
    console.log(data);
    const dispatch = useDispatch();
  const deleteUser=(user)=>{
dispatch(removeUser(user));
  }  
  return (
    <Wrapper>
  {
        data.map((user,id)=>{
            return <li key={id} >{user}
            <button className='btn btn-deleted' onClick={()=>deleteUser(id)}> <FaTrash className="delete-icon"/> </button>
            </li>
        })
    }
  
    </Wrapper>
  )
}
const Wrapper = styled.section`
  li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    &:first-child{
      border-top: 1px solid #eee;
    }
  }
  
  .btn-delete{
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`

export default DisplayUsers


/**   {
        data.map((user,id)=>{
            return <li key={id} >{user}
            <button className='btn btn-deleted' onClick={()=>deleteUser(user)}> <FaTrash className="delete-icon"/> </button>
            </li>
        })
    }
    */