import React, { useContext } from "react";
import { useParams } from "react-router";
import { BlogContext } from "../contexts/BlogContext";
import { useNavigate } from "react-router-dom";
import { getDatabase, remove, ref } from "firebase/database";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import Card from "@mui/material/Card";
import "./Detail.css";
import { auth } from "../helpers/firebase";
import { successNote } from "../helpers/toastNotify";
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogList } = useContext(BlogContext);

  const [a] = blogList.filter((blog) => blog.id === id);

  const deleteBlog = (id) => {
    const db = getDatabase();
    // const userBlog = ref(db, "blog");
    remove(ref(db, "blog/" + id));
    successNote("Succesfully Deleted");
    navigate("/");
  };
  return (
    <div className="details">
      <Card className="blogcard">
        <h1>─── DETAILS ───</h1>

        <div className="img">
          <img src={a.url} alt="resim" id="detailsimg" />
        </div>

        <div className="content">
          <CardContent>
            <h3 className="title">{a.title}</h3>
            <p>{a.date}</p>
            <Typography variant="body2" color="text.secondary">
              {a.content}
            </Typography>
          </CardContent>
        </div>

        <div className="mail">
          <IconButton>
            <FaUserCircle />
          </IconButton>
          <p>{a.email}</p>
        </div>

        <div className="likes">
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <AiFillHeart className="like" />
            </IconButton>
            <IconButton aria-label="share">
              <BiComment />
            </IconButton>
          </CardActions>
        </div>
        {auth.currentUser.email === a.email ? (
          <div className="del-up">
            <button onClick={() => deleteBlog(a.id)}>Delete</button>
            <button onClick={() => navigate(`/updateblog/${id}`)}>
              Update
            </button>
          </div>
        ) : null}
      </Card>
    </div>
  );
};

export default Details;
