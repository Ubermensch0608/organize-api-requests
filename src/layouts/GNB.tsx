import useUserAuth from "src/hooks/useUserAuth";

const GNB = () => {
  const { isLoggedIn, onLogin, onLogout } = useUserAuth();

  return (
    <header className="header">
      <nav>
        {isLoggedIn ? (
          <button className="authBtn" type="button" onClick={onLogout}>
            로그아웃
          </button>
        ) : (
          <button className="authBtn" type="button" onClick={onLogin}>
            로그인
          </button>
        )}
      </nav>
    </header>
  );
};
export default GNB;
