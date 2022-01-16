import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "./BlogCard.css";
import { successNote } from "../helpers/toastNotify";

const BlogCard = ({ id, title, url, content, email, date }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const handleClick = () => {
    if (currentUser) {
      navigate(`/details/${id}`);
    } else {
      successNote("Login for details of blog");
      navigate(`/login`);
    }
  };
  return (
    <Card className="blogcard-dash" onClick={handleClick}>
      <CardMedia component="img" height="160" image={url} alt="image" />
      <CardContent className="CardContent">
        <h3 className="title">{title.toUpperCase()}</h3>
        <p id="date">{date}</p>
        <Typography variant="body2" color="text.secondary" id={content}>
          {content.slice(0, 200)}...
          {content.length > 200 ? (
            <button onClick={handleClick} className="btn-more">
              More
            </button>
          ) : null}
        </Typography>
      </CardContent>

      <div className="mail">
        <IconButton>
          <FaUserCircle />
        </IconButton>
        <p>{email}</p>
      </div>
      <CardActions className="fav">
        <IconButton aria-label="add to favorites">
          <AiFillHeart className="like" />
        </IconButton>
        <IconButton aria-label="share">
          <BiComment />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
