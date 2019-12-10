import axios from "axios";

export default {
  // Gets all users
  getAllUser: function() {
    return axios.get("/api/user/");
  },
  //get specific user
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  createUser: function(id) {
    return axios.post("/api/user/" + id);
  },
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },


  getTweak: function() {
    return axios.get("/api/tweak/");
  },
  
  // Gets the tweak with the given id
  getTweak: function(id) {
    return axios.get("/api/tweak/" + id);
  },
  postTweak: function(id) {
    return axios.post("/api/tweak/" + id);
  },
  deleteTweak: function(id) {
    return axios.delete("/api/tweak/" + id);
  },


  // Deletes the book with the given id
  getAllComments: function() {
    return axios.get("/api/comments/");
  },
  //get specific user
  getComment: function(id) {
    return axios.get("/api/comments/" + id);
  },
  postComment: function(id) {
    return axios.post("/api/comments/" + id);
  },
  deleteUser: function(id) {
    return axios.delete("/api/comments/" + id);
  },



  getProfile: function(id) {
    return axios.get("/api/profile/" + id);
  },
  updateProfile: function(id) {
    return axios.put("/api/profile/" + id);
  },
  createProfile: function(id) {
    return axios.post("/api/profile/");
  },
  deleteProfile: function(id) {
    return axios.delete("/api/user/" + id);
  },
};