import { createContext } from "react";
import { getDatabase, ref, onValue, query } from "firebase/database";

import React from "react";
import { useState, useEffect } from "react";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [blogList, setBlogList] = useState();
  useEffect(() => {
    const db = getDatabase();
    const userBlog = ref(db, "blog");
    onValue(query(userBlog), (snapshot) => {
      const blogs = snapshot.val();
      const blogArray = [];
      for (let id in blogs) {
        blogArray.push({ id, ...blogs[id] });
      }
      setBlogList(blogArray);
    });
  }, []);

  return (
    <BlogContext.Provider value={{ blogList }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
