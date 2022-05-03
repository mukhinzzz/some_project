import { SignUpLoginInput } from "../../nonPageComponents/SignUpForm/SignUpLoginInput";
import { SignUpPasswordInput } from "../../nonPageComponents/SignUpForm/SignUpPasswordInput";
import { SignUpButton } from "../../nonPageComponents/SignUpForm/SignUpButton";

import { useDispatch } from "react-redux";
import { setFastSearchDataNotReceived } from "../../../features/search/searchSlice";

function SignUpPage() {
  // const dispatch = useDispatch();
  // const fastSearchReset = dispatch(setFastSearchDataNotReceived());
  return (
    <div>
      <SignUpLoginInput /> <SignUpPasswordInput /> <SignUpButton />
    </div>
  );
}

export { SignUpPage };
