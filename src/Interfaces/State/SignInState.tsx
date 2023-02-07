export interface SignInState {
    signInEmail:string,
    signInPassword:string
} 

export interface SignInProps {
    onRouteChange(route:string): void
    loadUser(
        user: {
            id:string,
            name:string,
            email:string,
            entries:number,
            joined: Date | ""
          }
    ):void
}

export interface SignInRequestBody {
    email: string,
    password: string
}