export interface User {
    username: string;
    password: string;
    role : string;
    purchases?: Purchase[];
  }
  export interface Purchase {
    title:    string;
    author:   string;
    quantity: number;
}