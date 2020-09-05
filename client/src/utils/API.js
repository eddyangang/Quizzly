import axios from 'axios';

export default {
    // Gets all rooms
    getRooms: function() {
      return axios.get("/api/rooms")
    },

    quizletScrap: function(url) {
        return axios.post("/api/quizletScrap", { url })
    }
  };
