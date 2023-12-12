import { BASE_URL } from "../config";

const getConversations = async (user) => {
  try {
    const res = await fetch(BASE_URL + "api/messages", {
      headers: {
        "x-access-token": user.token,
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const getMessages = async (user, conversationId) => {
  try {
    const res = await fetch(BASE_URL + "api/messages/" + conversationId, {
      headers: {
        "x-access-token": user.token,
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const sendMessage = async (user, message, recipientId) => {
  try {
    const res = await fetch(BASE_URL + "api/messages/" + recipientId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(message),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export { getConversations, getMessages, sendMessage };