import axios from "axios";

const ADDITIONAL_DUTY_API_BASE_URL = "http://localhost:8080/duties";

class AdditionalDutyService {
  getDuties() {
    return axios.get(ADDITIONAL_DUTY_API_BASE_URL);
  }

  getDutyById(dutyId) {
    return axios.get(ADDITIONAL_DUTY_API_BASE_URL + "/" + dutyId);
  }

  // createDuty(duty) {
  //   return axios.post(ADDITIONAL_DUTY_API_BASE_URL, duty);
  // }

  // updateDuty(duty, dutyId) {
  //   return axios.put(ADDITIONAL_DUTY_API_BASE_URL + "/" + dutyId, duty);
  // }

  deleteDuty(dutyId) {
    return axios.delete(ADDITIONAL_DUTY_API_BASE_URL + "/" + dutyId);
  }
}

export default new AdditionalDutyService();
