import axios, { Axios } from "axios";

interface RequestPaymentReferenceParams {
  name: string,
  email: string,
  numberOfTickets: number,
  amount: number,
}

interface GetPaymentResultParams {
  reference: number;
}

class APIRaffle {
  private axiosInstance: Axios;

  constructor() {
    this.axiosInstance = axios.create({
      //baseURL: `${import.meta.env.VITE_CALTEN_API}/api`,
      baseURL: `https://calten-raffle-back.vercel.app/api`,
    });
  }

  async requestPaymentReference(payload: RequestPaymentReferenceParams) {
    try {
      // Validate if all query params are present, if not throw an error
      const { data } = await this.axiosInstance.post("/postPaymentReference", {
        amount: payload.amount,
        name: payload.name,
        email: payload.email,
        numberOfTickets: payload.numberOfTickets,
        headers: {
          'Access-Control-Allow-Origin': true,
        },
      });
      console.log("FUNNNKJH")
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getPaymentResult(payload: GetPaymentResultParams) {
    try {
      // Validate that commerceCertification from query params is not null
      const { data } = await this.axiosInstance.get(`/getPaymentResult?reference=${payload.reference}`);
      return data;
    } catch (error) {
      console.error(error)
      throw error;
    }
  }
}

const apiRaffle = new APIRaffle();

export default apiRaffle;
