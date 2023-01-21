export default function Login() {
    return (
        <div className="h-screen w-screen bg-gray-200 flex flex-col items-center p-8">
            <span>
                <h1 className="text-5xl font-extrabold text-blue-600">
                    facebook
                </h1>
            </span>

            <h2 className="text-2xl font-extrabold">
                Recent Logins
            </h2>

            <div className="p-4 bg-white m-6 rounded-lg flex flex-col">
                <div className="py-2">
                    <input type="text" placeholder="Email address or phone number" className="w-96 h-10 rounded-md border-2 border-gray-300 p-2" />
                </div>
                <div className="py-2">
                    <input type="password" placeholder="Password" className="w-96 h-10 rounded-md border-2 border-gray-300 p-2" />
                </div>

                <div className="py-2">
                    <button className="bg-blue-600 text-white w-96 h-10 rounded-md border-2 border-gray-300 p-2" >
                        <h3 className='font-bold'>Log In</h3>
                    </button>
                </div>

                <div className="py-2 text-center">
                    <a href="#" className="text-blue-600">Forgotten password?</a>
                </div>

                <div className="py-2">
                </div>
                <span class="w-full h-0.5 bg-gray-300"></span>

                <div className="py-2">
                </div>

                <div className="py-2">
                    <button className="bg-white text-blue-600 w-96 h-10 rounded-md border-2 border-gray-300 p-2" >
                        <h3 className='font-bold'>Create New Account</h3>
                    </button>

                </div>

            </div>
        </div >
    )
}