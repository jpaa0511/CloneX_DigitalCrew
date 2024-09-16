import React from "react";
import { Boxtwitter, Avatar, Div, Form, TweetButton, DivIcon } from "./styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PollIcon from "@mui/icons-material/Poll";

export const BoxTwitter = () => {
  return (
    <Boxtwitter>
      <Div>
        <Form>
          <Avatar
            src="https://randomuser.me/api/portraits/women/17.jpg"
            alt="User Avatar"
          />
          <div className="columbus">
            <input type="text" placeholder="¿Qué está pasando?" />
            <input type="text" placeholder="Usuario" />
          </div>
        </Form>
        <TweetButton type="submit">Tweet</TweetButton>
      </Div>
      <Div>
        <DivIcon>
          <AddPhotoAlternateIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
          <PollIcon />
        </DivIcon>
      </Div>
    </Boxtwitter>
  );
};
