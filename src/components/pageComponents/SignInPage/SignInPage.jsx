import { SignInLoginInput } from "../../nonPageComponents/SignInForm/SignInLoginInput";
import { SignInPasswordInput } from "../../nonPageComponents/SignInForm/SignInPasswordInput";
import { SignInButton } from "../../nonPageComponents/SignInForm/SignInButton";

import { useDispatch } from "react-redux";
import { setFastSearchDataNotReceived } from "../../../features/search/searchSlice";

function SignInPage() {
  // const dispatch = useDispatch();
  // const fastSearchReset = dispatch(setFastSearchDataNotReceived());
  return (
    <>
      <SignInLoginInput /> <SignInPasswordInput /> <SignInButton />
    </>
  );
}

export { SignInPage };
