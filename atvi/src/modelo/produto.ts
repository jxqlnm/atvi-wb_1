class Produto {
    private nome: string;
    private preco: number;
    private consumo: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
        this.consumo = 0;
    }

    getNome(): string {
        return this.nome;
    }

    getPreco(): number {
        return this.preco;
    }

    addConsumo(): void {
        this.consumo += 1;
    }
}

export default Produto;
