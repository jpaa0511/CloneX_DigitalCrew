import styled from "styled-components";

export const Container = styled.div`
  flex: 0.5;
  max-width: 600px;
  border-right: 1px solid #e6ecf0;
  overflow-y: scroll;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  z-index: 100;
  border-bottom: 1px solid #e6ecf0;
  padding: 15px 20px;

  h2 {
    font-size: 20px;
    font-weight: 800;
    color: #14171a;
  }
`;

/*BoxTwitter */
export const Boxtwitter = styled.div`
  padding: 5px 15px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border-radius: fill;
`;

export const Div = styled.div`
  display: flex;
  width: 100%;
  > .columbus {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 16px;
    > input {
      margin-left: 10px;
      margin-top: 10px;
      width: 100%;
      border: none;
      outline: 0;
      font-size: 19px;
      line-height: 25px;
      color: #0f1419;
    }
  }
`;

export const DivIcon = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: colum;
`;

export const TweetButton = styled.button`
  background-color: var(--twittercolor);
  border: none;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 50px;
  align-self: flex-end;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #1a91da;
  }
`;
