// import firebase from "./firebase";
import { getDatabase, ref, push, set, update } from "firebase/database";
import { successNote } from "./toastNotify";

// import { useEffect } from "react";
// import { useState } from "react/cjs/react.development";

export const addInfo = (newbloginfo) => {
  const db = getDatabase();
  const userBlog = ref(db, "blog");
  const newUserBlog = push(userBlog);
  set(newUserBlog, {
    title: newbloginfo.title,
    url: newbloginfo.url,
    content: newbloginfo.content,
    email: newbloginfo.email,
    date: newbloginfo.date,
  });
  successNote("Added Succesfully");
};

export const updateInfo = (updateBlogInfo) => {
  const db = getDatabase();
  const postData = {
    title: updateBlogInfo.title,
    content: updateBlogInfo.content,
    url: updateBlogInfo.url,
    email: updateBlogInfo.email,
    id: updateBlogInfo.id,
    date: updateBlogInfo.date,
  };
  // const newBlogKey = push(child(ref(db), "blog/")).key;
  const updates = {};
  updates["blog/" + postData.id] = postData;
  successNote("Updated Succesfully");
  return update(ref(db), updates);
};

// export const useFetch = () => {
//   const [isLoading, setİsLoading] = useState();
//   useEffect(() => {
//     setİsLoading(true);
//   }, []);
// };
// export const useFetch = () => {
//   const [blogList, setBlogList] = useState();
//   useEffect(() => {
//     const db = getDatabase();
//     const userBlog = ref(db, "blog");
//     onValue(query(userBlog), (snapshot) => {
//       const blogs = snapshot.val();
//       const blogArray = [];
//       for (let id in blogs) {
//         blogArray.push({ id, ...blogs[id] });
//       }
//       setBlogList(blogArray);
//     });
//   }, []);
//   return { blogList };
// };
