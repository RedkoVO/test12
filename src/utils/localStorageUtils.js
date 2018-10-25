
export const clearStorageForlogout = () => {
  localStorage.removeItem("address")
  localStorage.removeItem("publicKey")
  localStorage.removeItem("representative")
  localStorage.removeItem("secretKey")
  localStorage.removeItem("lastBlock")
}