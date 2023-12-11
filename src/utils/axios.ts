import api, { AxiosInstance } from "axios"

export const axios: AxiosInstance = api.create({
  baseURL: "http://localhost:3000/api/",
})
