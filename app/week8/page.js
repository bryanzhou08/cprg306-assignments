"use client";
import { useUserAuth } from "./_utils/auth-context";
 
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
//await gitHubSignIn();
 
//await firebaseSignOut();
 
//<p>
  //Welcome, {user.displayName} ({user.email})
//</p>;

const handleGitHubSignIn = async () => {
    await gitHubSignIn();
  };

  const handleFirebaseSignOut = async () => {
    await firebaseSignOut();
  };
  export default function page(){
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleFirebaseSignOut}>Logout</button>
          <a href="/shopping-list">Go to Shopping List</a>
        </div>
      ) : (
        <button onClick={handleGitHubSignIn}>Login with GitHub</button>
      )}
    </div>
  );
};

/*import ShoppingList from "./shopping-list/page"
import SignIn from "./sign-in";

export default function Page() {
  const { user } = useUserAuth();

  return (
    //<main>
      <p>
        Welcome, {user.displayName} ({user.email})
      </p>;
    <main className="flex flex-col bg-gray-900">

      <div>
        <SignIn />
      </div>
      <div>
        {
          user && (
            <ShoppingList />
          )
        }
      </div>
    </main>
        )
}*/
