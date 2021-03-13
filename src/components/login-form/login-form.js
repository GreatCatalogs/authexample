import React, { useState, useRef, useCallback, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  EmailRule,
} from "devextreme-react/form";
import LoadIndicator from "devextreme-react/load-indicator";
import notify from "devextreme/ui/notify";
import { useAuth } from "../../contexts/auth";
import { Auth, Hub } from "aws-amplify";
import "./login-form.scss";

export default function () {
  const history = useHistory();
  const { signIn, socialSignIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const formData = useRef({});

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log("event", event, data);
      // switch (event) {
      //   case "signIn":
      //     this.setState({ user: data });
      //     break;
      //   case "signOut":
      //     this.setState({ user: null });
      //     break;
      //   case "customOAuthState":
      //     this.setState({ customState: data });
      // }
    });

    Auth.currentAuthenticatedUser()
      .then((user) => { 
        const result = socialSignIn(user.attributes.email);
        if (!result.isOk) {
          setLoading(false);
          notify(result.message, "error", 2000);
        }
      }).catch(() => console.log("Not signed in"));
  }, []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password, confirmation } = formData.current;
      setLoading(true);

      const result = await signIn(email, password, confirmation);
      if (result.confirmRequired) {
        setLoading(false);
        setConfirm(true);
        notify(result.message, "error", 2000);
      } else if (!result.isOk) {
        setLoading(false);
        notify(result.message, "error", 2000);
      }
    },
    [signIn]
  );

  const onCreateAccountClick = useCallback(() => {
    history.push("/create-account");
  }, [history]);

  return (
    <form className={"login-form"} onSubmit={onSubmit}>
      <Form formData={formData.current} disabled={loading}>
        <Item
          dataField={"email"}
          editorType={"dxTextBox"}
          editorOptions={emailEditorOptions}
        >
          <RequiredRule message="Email is required" />
          <EmailRule message="Email is invalid" />
          <Label visible={false} />
        </Item>
        <Item
          dataField={"password"}
          editorType={"dxTextBox"}
          editorOptions={passwordEditorOptions}
        >
          <RequiredRule message="Password is required" />
          <Label visible={false} />
        </Item>
        {confirm && (
          <Item
            dataField={"confirmation"}
            editorType={"dxTextBox"}
            editorOptions={confirmationEditorOptions}
          >
            <RequiredRule message="Enter Confirmation Code" />
            <Label visible={false} />
          </Item>
        )}
        <Item
          dataField={"rememberMe"}
          editorType={"dxCheckBox"}
          editorOptions={rememberMeEditorOptions}
        >
          <Label visible={false} />
        </Item>
        <ButtonItem>
          <ButtonOptions
            width={"100%"}
            type={"default"}
            useSubmitBehavior={true}
          >
            <span className="dx-button-text">
              {loading ? (
                <LoadIndicator width={"24px"} height={"24px"} visible={true} />
              ) : (
                "Sign In"
              )}
            </span>
          </ButtonOptions>
        </ButtonItem>
        <Item>
          <div className={"link"}>
            <Link to={"/reset-password"}>Forgot password?</Link>
          </div>
        </Item>
        <ButtonItem>
          <ButtonOptions
            text={"Create an account"}
            width={"100%"}
            onClick={onCreateAccountClick}
          />
        </ButtonItem>
        <ButtonItem>
          <ButtonOptions
            text={"Google SignIn"}
            width={"100%"}
            onClick={() => Auth.federatedSignIn({ provider: "Google" })}
          />
        </ButtonItem>
        <ButtonItem>
          <ButtonOptions
            text={"FaceBook SignIn"}
            width={"100%"}
            onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}
          />
        </ButtonItem>
      </Form>
    </form>
  );

}

const emailEditorOptions = {
  stylingMode: "filled",
  placeholder: "Email",
  mode: "email",
};
const passwordEditorOptions = {
  stylingMode: "filled",
  placeholder: "Password",
  mode: "password",
};
const confirmationEditorOptions = {
  stylingMode: "filled",
  placeholder: "Confirmation Code",
  mode: "password",
};
const rememberMeEditorOptions = {
  text: "Remember me",
  elementAttr: { class: "form-text" },
};
