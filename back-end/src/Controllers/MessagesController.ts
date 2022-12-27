import Messages from "../Models/Messages";

class MessagesController {
  addMessage(name: string, email: string, phone: string, message: string) {
    return new Promise((resolve, reject) => {
      let newMessage = new Messages({
        name,
        email,
        phone,
        message,
      });
      newMessage.save((err: any) => {
        if (err) {
          reject({ message: "Error", error: err });
        } else {
          resolve({ success: true, data: newMessage });
        }
      });
    });
  }
}

export default MessagesController;
