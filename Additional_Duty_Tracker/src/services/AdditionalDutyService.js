import axios from "axios";

const ADDITIONAL_DUTY_API_BASE_URL = "http://localhost:8080/duties";

class AdditionalDutyService {
  getDuties() {
    return axios.get(ADDITIONAL_DUTY_API_BASE_URL);
  }

  getDutiesDetails() {
    return axios.get(ADDITIONAL_DUTY_API_BASE_URL + "/details");
  }

  getDutyById(dutyId) {
    return axios.get(ADDITIONAL_DUTY_API_BASE_URL + "/" + dutyId);
  }

  getUnassignedDuties() {
    return axios.get(ADDITIONAL_DUTY_API_BASE_URL + "/unassigned");
  }

  createDuty(duty) {
    return axios.post(ADDITIONAL_DUTY_API_BASE_URL);
  }

  updateDuty(duty, dutyId) {
    return axios.put(ADDITIONAL_DUTY_API_BASE_URL + "/" + dutyId);
  }

  deleteDuty(dutyId) {
    return axios.delete(ADDITIONAL_DUTY_API_BASE_URL + "/" + dutyId);
  }
}

export default new AdditionalDutyService();
