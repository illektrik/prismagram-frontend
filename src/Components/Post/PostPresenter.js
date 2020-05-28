import React from "react";
import styled from "styled-components";
import TextareaAutosize from 'react-autosize-textarea';

import FatText from "../FatText";
import Avatar from "../Avatar";
import {HeartEmpty, HeartFull, Message} from "../Icons";

const Post = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  //height: 1000px;
  max-width: 600px;
  margin-bottom: 25px;
  user-select: none;
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center; 
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div`
  position: relative;
  padding-top: 100%;
  display: flex;
  height: 750px;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${props => props.showing ? 1 : 0};
  transition: opacity 0.5s linear;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 15px;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const TimeStamp = styled.span`
  font-weight: 300;
  text-transform: uppercase ;
  color: ${props => props.theme.lightgray};
  opacity: 0.5;
  display: block;
  font-size: 12px ;
  margin: 10px 0;
  padding-bottom: 10px;
  border-bottom: ${props => props.theme.lightgray} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus{
    outline: none;
  }
`;

const Comments = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;
export default ({user: {userName, avatar}, location, files, isLiked, likeCount, comments, newComment, currentItem, toggleLike, onKeyPress, createdTime}) => {
  console.log(comments);
  return (
    <Post>
      <Header>
        <Avatar size="sm" url={avatar}/>
        <UserColumn>
          <FatText text={userName}/>
          <Location>{location}</Location>
        </UserColumn>
      </Header>
      <Files>
        {files && files.map((file, index) => <File key={file.id} id={file.id} src={file.url} showing={index === currentItem}/>)}
      </Files>
      <Meta>
        <Buttons>
          <Button onClick={toggleLike}>{isLiked ? <HeartFull/> : <HeartEmpty/> }</Button>
          <Button><Message/></Button>
        </Buttons>
        <FatText text={likeCount === 1 ? '1 like' : `${likeCount} likes`}/>
          {comments &&
            <Comments>
              {comments.map(comment => <Comment key={comment.id}><FatText text={comment.user.userName}/>{comment.text}</Comment>)}
            </Comments>
          }
        <TimeStamp>{createdTime}</TimeStamp>
        <Textarea
          placeholder={"Add a comment..."}
          value={newComment.value}
          onChange={newComment.onChange}
          onKeyPress={onKeyPress}
        />
      </Meta>
    </Post>
  )
}
