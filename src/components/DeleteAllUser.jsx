import React from "react";
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import {  deleteAllUsers } from "../actions/Actions";
const DeleteAllUser = () => {
    const dispatch = useDispatch();
  
    const deleteUsers = () => {
      console.log("hi")
      dispatch( deleteAllUsers())
    }
  
    return  <Wrapper>
    <button className="btn clear-btn" onClick={deleteUsers}>clear users</button>
    </Wrapper>
  }
  
  const Wrapper = styled.section`
    .clear-btn{
      text-transform: capitalize;
      background-color: #db338a;
      margin-top:2rem;
    }
  `
  
  
  export default DeleteAllUser;