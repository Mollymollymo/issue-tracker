const LoginPage = () => {
  const CLIENT_ID = "c3c17e5a1f1107857a99";
  const handleLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=http://localhost:3000/`;
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <button
        className="bg-black text-white w-64 h-12 rounded-xl"
        onClick={handleLogin}
      >
        Sign in with GitHub
      </button>
    </div>
  );
};

export default LoginPage;
