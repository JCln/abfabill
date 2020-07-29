interface IImplements {
    connectToServer(): void | Promise<any>
}
export abstract class Implemens implements IImplements {
    abstract connectToServer = () => { }
    abstract classWrapper = () => { }
}
