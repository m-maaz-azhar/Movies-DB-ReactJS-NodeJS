import User from "../Models/User";

class UserController {
  constructor() {}
  Login(username: string, password: string) {
    User.find(
      { username: username, password: password },
      (err: any, user: string[]) => {
        if (err || user.length === 0) {
          return {
            message: "email or password doesn't match!",
            error: err,
            success: false,
          };
        } else {
          return { success: true };
        }
      }
    );
  }

  Register(
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string
  ) {
    User.find({ username: username }, (err: any, user: string[]) => {
      if (err || user.length === 0) {
        let newUser = new User({
          username: username,
          password: password,
          email: email,
          profile: "",
          firstName: firstName,
          lastName: lastName,
        });
        newUser.save((err: any) => {
          if (err) {
            return { message: "Error", error: err };
          } else {
            return { success: true };
          }
        });
      } else {
        return { message: "Username already exists!", success: false };
      }
    });
  }
}

export default UserController;
