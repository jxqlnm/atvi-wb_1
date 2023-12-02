class Telefone {
    private ddd: string;
    private numero: string;

    constructor(ddd: string, numero: string) {
        this.ddd = ddd;
        this.numero = numero;
    }

    get getDdd(): string {
        return this.ddd;
    }

    get getNumero(): string {
        return this.numero;
    }
}

export default Telefone;
