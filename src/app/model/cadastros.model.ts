declare module namespace {

  export interface Cadastro {
      id: number;
      email: string;
      password: string;
  }

  export interface RootObject {
      cadastros: Cadastro[];
  }

}
