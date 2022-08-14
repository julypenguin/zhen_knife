import React, { useState, useEffect } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"

const LoginForm = ({
    profile,
    updateProfile,
    intl,
}) => {
    const [isLogin, setIsLogin] = useState(true) // true:login, false:register
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [registerErrCode, setRegisterErrCode] = useState('')
    const [loginErrCode, setLoginErrCode] = useState('')
    const auth = getAuth();

    const login = () => {
        const email = '123aaa@gmail.com'
        const password = 'asdf1111'

        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateProfile(user)
                // ...
            })
            .catch((error) => {
                console.error(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoginErrCode(errorCode)
            });
    }

    const register = () => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setRegisterErrCode(errorCode)
                // ..
            });
    }

    const onSubmit = e => {
        e.stopPropagation()
        e.preventDefault()
        if (isLogin) {
            login()
        } else {
            register()
        }
    }

    const getIntlMsg = (id, defaultMessage) => intl.formatMessage({ id, defaultMessage })

    const msgintl = {
        member_login: getIntlMsg('vip.member_login', '會員登入'),
        member_register: getIntlMsg('vip.member_register', '會員註冊'),
        forgot_your_password: getIntlMsg('vip.forgot_your_password', '忘記密碼了嗎'),
        reset_password: getIntlMsg('vip.reset_password', '重設密碼'),
        email_address: getIntlMsg('vip.email_address', '電子郵件'),
        password: getIntlMsg('vip.password', '密碼'),
        sign_in: getIntlMsg('vip.sign_in', '登入'),
        not_have_member: getIntlMsg('vip.not_have_member', '尚未擁有會員嗎'),
        is_there_already_account: getIntlMsg('vip.is_there_already_account', '已經有帳號了'),
        register: getIntlMsg('vip.register', '註冊'),
        email_already_in_use: getIntlMsg('vip.email_already_in_use', '電子信箱已被使用'),
        user_not_found: getIntlMsg('vip.user_not_found', '帳號不存在'),
    }

    useEffect(() => {
        setEmail('')
        setPassword('')
    }, [isLogin])

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{!isLogin ? msgintl.register : msgintl.member_login}</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form
                            className="space-y-6"
                            onSubmit={onSubmit}
                        >
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    {msgintl.email_address}
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder={msgintl.email_address}
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <div className='ml-1 text-red-400'>
                                        <span></span>{registerErrCode === 'auth/email-already-in-use' ? msgintl.email_already_in_use : registerErrCode}
                                        <span>{loginErrCode === 'auth/user-not-found' ? msgintl.user_not_found : loginErrCode}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    {msgintl.password}
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder={msgintl.password}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    // type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {msgintl.sign_in}
                                </button>
                            </div>

                            <div className="flex items-center flex-col">
                                {!isLogin ? null : <div className="text-sm mb-2">
                                    <span>{msgintl.forgot_your_password}</span>
                                    <span className='mr-2'>?</span>
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        {msgintl.reset_password}
                                    </a>
                                </div>}

                                <div className="text-sm">
                                    <span>{!isLogin ? msgintl.is_there_already_account : msgintl.not_have_member}</span>
                                    <span className='mr-2'>?</span>
                                    <span
                                        className="font-medium text-indigo-600 cursor-pointer hover:text-indigo-500"
                                        onClick={e => setIsLogin(!isLogin)}
                                    >
                                        {!isLogin ? msgintl.sign_in : msgintl.register}
                                    </span>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default injectIntl(LoginForm);