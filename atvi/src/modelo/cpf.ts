class CPF {
    private valor: string;
    private dataEmissao: Date;

    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor;
        this.dataEmissao = dataEmissao;
    }

    get getValor(): string {
        return this.valor;
    }

    get getDataEmissao(): Date {
        return this.dataEmissao;
    }
}

export default CPF;