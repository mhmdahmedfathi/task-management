import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "../button";
import { auth, logout, signInWithGoogle } from "../../../firebaseConfig";
const Login: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="flex flex-row items-center justify-center p-1">
      {user ? (
        <div className="flex flex-row items-baseline gap-10 ">
          <p className="text-lg font-medium">Welcome, {user.displayName}!</p>
          <Button onClick={logout} variant="destructive" className="mt-4">
            Logout
          </Button>
        </div>
      ) : (
        <Button onClick={signInWithGoogle} className="mt-4">
          Sign in with Google
        </Button>
      )}
    </div>
  );
}

export default Login;
