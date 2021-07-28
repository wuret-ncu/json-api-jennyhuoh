import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { StoreContext } from '../store';
import { ADD_USER,
         LOAD_LISTITEMS } from '../utils/constants';

export default function Register() {
    const { state: { users: { usersDetail } }, dispatch } = useContext(StoreContext);
    const [newName, setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [registerFlag, setRegisterFlag] = useState(0); //0:資料不完整, 1:帳號已存在, 2:可新增
    
    // useEffect(() => {
    //     async function fetchData() {
    //         let res = await fetch("http://localhost:3001/json")
    //         let data = await res.json()
    //         dispatch({
    //             type: LOAD_LISTITEMS,
    //             payload: data
    //         })
    //     }
    //     fetchData();
    // }, [])
    useEffect(() => {
        let i = usersDetail.findIndex(user => user.name === newName);
        if((i === -1) && (newName !== '') && (newPassword !== '')) {
            setRegisterFlag(2);
        }if(i !== -1) {
            setRegisterFlag(1);
        }
        console.log(registerFlag)
    }, [newPassword])
    useEffect(() => {
        let i = usersDetail.findIndex(user => user.name === newName);
        console.log(i)
        if((i === -1) && (newName !== '') && (newPassword !== '')) {
            setRegisterFlag(2);
        }if(i !== -1) {
            setRegisterFlag(1);
        }
        console.log(registerFlag)
    }, [newName])

    const onClickSusSignup = () => {
        dispatch({
            type: ADD_USER,
            payload: {name:newName, password:newPassword,id:nanoid()}
        })
    }
    const onClickErrSignup = () => {
        if(registerFlag === 0) {
            alert('資料不完整');
        }else if(registerFlag === 1) {
            alert('帳號已存在');
        }
    }
    return(
        <div className="container">
            <div className="card card-register">
                <div className="card-title">Sign up</div>
                <input type="text" placeholder="User name" onChange={(e) => setNewName(e.target.value)} />
                <input type="text" placeholder="Password" onChange={(e) => setNewPassword(e.target.value)} />
                {
                    (registerFlag === 2) ? <Link to="/TodoList" onClick={onClickSusSignup} className="card-btn" >Sign up</Link> : <button className="card-btn" onClick={onClickErrSignup}>Sign up</button>
                }
                <div className="register-back"><Link to="/">back</Link></div>
            </div>
            
        </div>
    );
}