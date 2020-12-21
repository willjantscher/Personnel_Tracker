import axios from "axios";

const MEMBER_API_BASE_URL = "http://localhost:8080/members";

class MemberService {
  getMembers() {
    return axios.get(MEMBER_API_BASE_URL);
  }
}

export default new MemberService();