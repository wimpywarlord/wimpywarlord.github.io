export function decodeEmail(email: string) {
  return atob(email)
}

export function decodePhoneNumber(phone: string) {
  return atob(phone)
}
