import GoogleLogin from 'react-google-login';
import {Navigate} from "react-router-dom";
import React, {useState} from 'react'

const LoginPages = () =>{
	
	const clientId = '41680498150-pgq3ljv7n2l8pl7lq2nohmsa8e0kc3ov.apps.googleusercontent.com';
	
	const [loginData, setLoginData] = useState(
		localStorage.getItem('loginData')
			? JSON.parse(localStorage.getItem('loginData')) : null
	);
	
	function parseJwt (token) {
		var base64Url = token.split('.')[1];
		var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
		
		return JSON.parse(jsonPayload);
	};
	
	const handleLogin= (googleData) => {
		console.log('Login Success, user:');
		const data = parseJwt(googleData.tokenId)
		data.token = googleData.tokenId
		setLoginData(data);
		localStorage.setItem('loginData', JSON.stringify(data));
	}
	
	const handleLogout = () =>{
		localStorage.removeItem('loginData');
		setLoginData(null);
	}
	
	return (
		<div>
			<GoogleLogin
				clientId={clientId}
				buttonText="Login"
				onSuccess={handleLogin}
				onFailure={handleLogout}
				cookiePolicy={'single_host_origin'}
				style={{marginTop: '100px'}}
				isSignedIn={true}
			/>
		</div>
	);
}

export default LoginPages;