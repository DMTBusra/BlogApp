import { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";

import { Card } from "semantic-ui-react";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  const { blogList } = useContext(BlogContext);

  console.log(blogList);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>─── Dashboard ───</h1>
      <Card.Group
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {blogList?.map((blog, index) => (
          <BlogCard
            title={blog.title}
            url={blog.url}
            content={blog.content}
            id={blog.id}
            email={blog.email}
            key={index}
            date={blog.date}
          />
        ))}
      </Card.Group>
      <ToastContainer />
    </div>

    // <div>
    //   <Container>
    //     <Row>
    //       {blogList?.map((blog, index) => {
    //         return (
    //           <Col xs={12} md={6} lg={4}>
    //             <BlogCard
    //               title={blog.title}
    //               url={blog.url}
    //               content={blog.content}
    //               id={blog.id}
    //             />
    //           </Col>
    //         );
    //       })}
    //     </Row>
    //   </Container>
    // </div>

    // <div>
    //   {blogList?.map((blog, index) => (
    //     <div key={index}>
    //       <BlogCard
    //         title={blog.title}
    //         url={blog.url}
    //         content={blog.content}
    //         id={blog.id}
    //       />
    //     </div>
    //   ))}
    // </div>
  );
};

export default Dashboard;
