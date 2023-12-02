class Servico {
    private nome: string;
    private preco: number;
    private consumo: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
        this.consumo = 0;
    }

    getNomeS(): string {
        return this.nome;
    }

    getPrecos(): number {
        return this.preco;
    }

    addConsumo(): void {
        this.consumo += 1;
    }
}

export default Servico;
