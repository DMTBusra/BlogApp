import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react/cjs/react.development";
import { auth } from "../helpers/firebase";
import { Form } from "semantic-ui-react";
// import { AuthContext } from "../contexts/AuthContext";
import "../pages/NewBlog.css";
import { addInfo } from "../helpers/functions";

const NewBlog = () => {
  const date = new Date().toDateString();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewbloginfo({
      ...newbloginfo,
      [name]: value,
      email: auth.currentUser.email,
      date: date,
    });
  };
  const navigate = useNavigate();

  const initialState = { title: "", url: "", content: "", email: "", date: "" };
  const [newbloginfo, setNewbloginfo] = useState(initialState);
  // const { currentUser } = useContext(AuthContext);

  const handleSubmit = () => {
    // console.log(newbloginfo);

    setNewbloginfo({ ...newbloginfo });
    console.log(newbloginfo);
    console.log(auth.currentUser.email);
    addInfo(newbloginfo);
    navigate("/");
  };

  return (
    <div className="form-container">
      <Form className="form" onSubmit={handleSubmit}>
        <h1>NEW BLOG</h1>
        <input placeholder="Title*" onChange={handleChange} name="title" />
        <input placeholder="Img URL*" onChange={handleChange} name="url" />
        <input
          placeholder="Content*"
          onChange={handleChange}
          name="content"
          id="content"
        />
        <button type="submit" id="btn-sbmt">
          Submit
        </button>
      </Form>
    </div>
  );

  // <div className="form-container">
  //   <Form className="form" onSubmit={handleSubmit}>
  //     <div className="form-fields">
  //       <Form.Field className="input">
  //         <input placeholder="Title*" onChange={handleChange} name="title" />
  //       </Form.Field>
  //       <Form.Field className="input">
  //         <input placeholder="Img URL*" onChange={handleChange} name="url" />
  //       </Form.Field>
  //       <Form.Field className="input">
  //         <input
  //           placeholder="Content*"
  //           onChange={handleChange}
  //           name="content"
  //           id="content"
  //         />
  //       </Form.Field>
  //       <Button type="submit">Submit</Button>
  //     </div>
  //   </Form>
  // </div>
};

export default NewBlog;
