import { SignInLoginInput } from "../../nonPageComponents/SignInForm/SignInLoginInput";
import { SignInPasswordInput } from "../../nonPageComponents/SignInForm/SignInPasswordInput";
import { SignInButton } from "../../nonPageComponents/SignInForm/SignInButton";

function SignInPage() {
  return (
    <>
      <SignInLoginInput /> <SignInPasswordInput /> <SignInButton />
    </>
  );
}

export { SignInPage };
