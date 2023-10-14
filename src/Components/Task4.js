import React, { Component } from "react";
import axios from "axios";

class Task4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        console.log(response.data.users);
        this.setState({
          posts: response.data.users,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="bg-dark text-white text-start border rounded mb-4">
        <div className="row mb-3 border-bottom fw-bold">
          <div className="col-1 me-3">Sno.</div>
          <div className="col-2 me-3">Profile Pic</div>
          <div className="col-3 me-3">First Name</div>
          <div className="col-4 me-3">First Name</div>
          <div className="col-5 me-3">Gender</div>
          <div className="col-6 me-3">Email</div>
          <div className="col-7 me-3">Username</div>
          <div className="col-8 me-3">Domain</div>
          <div className="col-9 me-3">IP</div>
          <div className="col-10 me-3">University</div>
        </div>
        {posts.length
          ? posts.map((post) => (
              <div className="row border-right-white border-left-white">
                <div className="col-1 me-3">{post.id}</div>
                <div className="col-2 me-3">
                  <img src={post.image} alt="" width={30} height={30} />
                </div>
                <div className="col-3 me-3 ">{post.firstName}</div>
                <div className="col-4 me-3  ">{post.lastName}</div>
                <div className="col-5 me-3  ">{post.gender}</div>
                <div className="col-6 me-3  ">{post.email}</div>
                <div className="col-7 me-3  ">{post.username}</div>
                <div className="col-8 me-3  ">{post.domain}</div>
                <div className="col-9 me-3  ">{post.ip}</div>
                <div className="col-10 me-3  ">{post.university}</div>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default Task4;
