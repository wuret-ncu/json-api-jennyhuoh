import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../store';
import { CHECK_PASSWORD,
         CHECK_USERNAME, 
         SET_FLAG,
        LOAD_LISTITEMS } from '../utils/constants';

export default function Login() {
    const { state: { users: { usersDetail }, flag, userName, password }, dispatch } = useContext(StoreContext);
    // {flag} 0:資料不完整, 1:帳號錯誤, 2:密碼錯誤, 3:正確
    
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
        let i = usersDetail.findIndex(user => user.name === userName);
        if((userName === '') || (password === '')) {
            dispatch({
                type: SET_FLAG,
                payload: 0
            })
        }if((i === -1) && (userName !== '')) {
            dispatch({
                type: SET_FLAG,
                payload: 1
            })
        }else if((i !== -1) && (usersDetail[i].password !== password)) {
            dispatch({
                type: SET_FLAG,
                payload: 2
            })
        }else if((userName !== '') || (password !== '')) {
            dispatch({
                type: SET_FLAG,
                payload: 3
            })
        }
    }, [password])
    useEffect(() => {
        let i = usersDetail.findIndex(user => user.name === userName);
        if((userName === '') || (password === '')) {
            dispatch({
                type: SET_FLAG,
                payload: 0
            })
        }if((i === -1) && (userName !== '')) {
            dispatch({
                type: SET_FLAG,
                payload: 1
            })
        }else if((i !== -1) && (usersDetail[i].password !== password)) {
            dispatch({
                type: SET_FLAG,
                payload: 2
            })
        }else if((userName !== '') || (password !== '')) {
            dispatch({
                type: SET_FLAG,
                payload: 3
            })
        }
    }, [userName])
    const onClickSignin = () => {
        if(flag === 0) {
            alert('資料不完整');
        }else if(flag === 1) {
            alert('帳號錯誤');
        }else if(flag === 2) {
            alert('密碼錯誤');
        }
    }
    const onChangeUserName = (value) => {
        dispatch({
            type: CHECK_USERNAME,
            payload: value
        })
    }
    const onChangePassword = (value) => {
        dispatch({
            type: CHECK_PASSWORD,
            payload: value
        })
    }
    return(
        <div className="container">
            <div className="card">
                <div className="card-title">Sign in</div>
                <input type="text" placeholder="User name" onChange={(e) => onChangeUserName(e.target.value)} />
                <input type="text" placeholder="Password" className="login-input2" onChange={(e) => onChangePassword(e.target.value)}/>
                <div className="login-rememberBox">
                    <div className="login-remember">
                        <span className="remember">
                            <input type="checkbox"/>
                            <label className="remember-text">Remember me</label>
                        </span>
                    </div>
                    <div className="forgot-text">Forgot password?</div>
                </div>
                {
                    (flag === 3) ? <Link to="/TodoList" className="card-btn">Sign in</Link> : <button className="card-btn" onClick={onClickSignin}>Sign in</button>
                    
                }
                {/* {console.log(flag === 3)} */}
                <div className="login-create"><Link to="/Register">Create an account</Link></div>
            </div>
        </div>
    );
}