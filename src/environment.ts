export interface Environment {
  baseUrl: string
}

const prod: Environment = {
  baseUrl: "https://funcapp-uhi4syj7bfcb6.azurewebsites.net",
}

export const environment: Environment = prod
