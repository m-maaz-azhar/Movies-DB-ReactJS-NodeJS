import Messages from "../Models/Messages";

class MessagesController {
  constructor() {}
  addMessage(name: string, email: string, phone: string, message: string) {
    let newMessage = new Messages({
      name,
      email,
      phone,
      message,
    });
    newMessage.save((err: any) => {
      if (err) {
        return { message: "Error", error: err };
      } else {
        return { success: true, data: newMessage };
      }
    });
  }
}

export default MessagesController;
