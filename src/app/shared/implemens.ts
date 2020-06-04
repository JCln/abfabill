interface IImplements {
    connectToServer(): void | Promise<any>
}
export class Implemens implements IImplements {
    connectToServer = () => { }
}
