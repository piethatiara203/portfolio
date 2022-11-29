export interface RequestLogin {
  username: string;
  password: string;
}

export interface ResponseLogin {

  token: string;
  jwtrole: string;
}

export interface ResponseRegister {
  jwtrole: string;
}

