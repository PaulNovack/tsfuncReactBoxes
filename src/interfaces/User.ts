export interface UserData {
  first_name: string
  last_name: string
  token: string | null

}

export const User: UserData = {
  first_name: '',
  last_name: '',
  token: null
}

export default User
