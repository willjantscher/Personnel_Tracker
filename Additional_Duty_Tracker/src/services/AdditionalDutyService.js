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
    return axios.post(ADDITIONAL_DUTY_API_BASE_URL, duty, {     headers: {         'Content-Type': 'application/json'     } })
  }

  updateDuty(dutyId, duty) {
    return axios.put(ADDITIONAL_DUTY_API_BASE_URL + "/" + dutyId, duty);
  }

  deleteDuty(dutyId) {
    return axios.delete(ADDITIONAL_DUTY_API_BASE_URL + "/" + dutyId);
  }
}

export default new AdditionalDutyService();
