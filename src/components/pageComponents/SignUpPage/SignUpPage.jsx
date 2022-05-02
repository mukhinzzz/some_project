import { SignUpLoginInput } from "../../nonPageComponents/SignUpForm/SignUpLoginInput";
import { SignUpPasswordInput } from "../../nonPageComponents/SignUpForm/SignUpPasswordInput";
import { SignUpButton } from "../../nonPageComponents/SignUpForm/SignUpButton";

function SignUpPage() {
  return (
    <div>
      <SignUpLoginInput /> <SignUpPasswordInput /> <SignUpButton />
    </div>
  );
}

export { SignUpPage };
