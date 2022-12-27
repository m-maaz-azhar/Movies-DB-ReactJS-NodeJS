import User from "../Models/User";

class UserController {
  Login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      User.find(
        { username: username, password: password },
        (err: any, user: string[]) => {
          if (err || user.length === 0) {
            reject({ message: "email or password doesn't match!", error: err });
          } else {
            resolve({ success: true });
          }
        }
      );
    });
  }

  Register(
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string
  ) {
    return new Promise((resolve, reject) => {
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
              reject({ message: "Error", error: err });
            } else {
              resolve({ success: true });
            }
          });
        } else {
          reject({ message: "Username already exists!", success: false });
        }
      });
    });
  }
}

export default UserController;
