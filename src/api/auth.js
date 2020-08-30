import defaultUser from "../utils/default-user";
import { Auth } from "aws-amplify";

export async function signIn(email, password, confirmation) {
  try {
    if (confirmation) {
      const user = await Auth.confirmSignUp(email, confirmation);
    }
    const user = await Auth.signIn(email, password);
    return {
      isOk: true,
      data: { ...defaultUser, email: email },
    };
  } catch (error) {
    console.log("error signing in", error);
    if (error.code === "UserNotConfirmedException") {
      return {
        isOk: false,
        confirmRequired: true,
        message: "User Not Confirmed",
      };
    } else
      return {
        isOk: false,
        message: "Authentication failed",
      };
  }
}

export async function getUser() {
  try {
    // Send request

    return {
      isOk: false,
      data: null,
    };
  } catch {
    return {
      isOk: false,
    };
  }
}

export async function createAccount(email, password) {
  try {
    // Send request
    console.log(email, password);
    const { user } = await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email, // optional
        //phone_number,   // optional - E.164 number convention
        // other custom attributes
      },
    });
    console.log(user);
    return {
      isOk: true,
    };
  } catch (error) {
    console.log("error signing up:", error);

    return {
      isOk: false,
      message: "Failed to create account",
    };
  }
}

export async function changePassword(email, recoveryCode) {
  try {
    // Send request
    console.log(email, recoveryCode);

    return {
      isOk: true,
    };
  } catch {
    return {
      isOk: false,
      message: "Failed to change password",
    };
  }
}

export async function resetPassword(email) {
  try {
    // Send request
    console.log(email);

    return {
      isOk: true,
    };
  } catch {
    return {
      isOk: false,
      message: "Failed to reset password",
    };
  }
}
