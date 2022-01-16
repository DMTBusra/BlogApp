import React from "react";
import { BlogContext } from "../contexts/BlogContext";
import { Form } from "semantic-ui-react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { auth } from "../helpers/firebase";

import { useParams } from "react-router";
import { updateInfo } from "../helpers/functions";
import { AuthContext } from "../contexts/AuthContext";
// import { updateInfo } from "../helpers/functions";

const UpdateBlog = () => {
  const { blogList } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const [updateBlogInfo, setUpdateBlogInfo] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(blogList);
  const [blogupdate] = blogList?.filter((blog) => blog.id === id);
  console.log(blogupdate);
  const date = new Date().toDateString();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdateBlogInfo({
      ...blogupdate,
      [name]: value,
      email: currentUser.email,
      date: date,
      id: id,
    });
  };
  const handleClick = () => {
    updateInfo(updateBlogInfo);
    navigate("/");
  };
  return (
    <div className="form-container">
      <Form className="form" onClick={handleClick}>
        <h1>─── UPDATE ───</h1>
        <input
          placeholder="Title*"
          onChange={handleChange}
          name="title"
          defaultValue={blogupdate.title}
        />
        <input
          placeholder="Img URL*"
          onChange={handleChange}
          name="url"
          defaultValue={blogupdate.url}
        />
        <input
          placeholder="Content*"
          onChange={handleChange}
          name="content"
          id="content"
          defaultValue={blogupdate.content}
        />
        <button type="submit" id="btn-sbmt">
          Update
        </button>
      </Form>
    </div>
  );
};

export default UpdateBlog;
