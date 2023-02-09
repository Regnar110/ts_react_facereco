export interface RegisterState {
    registerName: string
    registerEmail: string,
    registerPassword: string,
}

export interface RegisterProps {
    onRouteChange(route:string):void,
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
