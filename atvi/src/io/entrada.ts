import promptSync from "prompt-sync";

export default class Entrada {
    public receberNumero(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(mensagem);
        let numero = new Number(valor);
        return numero.valueOf();
    }

    public receberData(mensagem: string): string {
        let prompt = promptSync();
        let exe = true;

        while (exe) {
            let valor = prompt(mensagem);
            let data = valor.replace(/[^0-9]/g, '');

            if (valor == "") {
                console.log("Esse campo é obrigatório");
                exe = true;
            } else if (valor.replace(/[^0-9]/g, '').length < 8) {
                console.log("Esse campo nao pode ser menor que 8 digitos! E deve conter apenas números");
                exe = true;
            } else if (valor.replace(/[^0-9]/g, '').length > 8) {
                console.log("Esse campo nao pode ser maior que 8 digitos");
                exe = true;
            } else if (Number(data.slice(0, 2)) > 31) {
                console.log("O dia nao pode ser superior a 31");
                exe = true;
            } else if (Number(data.slice(2, 4)) > 12) {
                console.log("O mes nao pode ser superior a 12");
                exe = true;
            } else if (Number(data.slice(2, 4)) == 2 && Number(data.slice(0, 2)) > 29) {
                console.log("O dia nao pode ser superior a 29 em fevereiro");
                exe = true;
            } else {
                exe = false;
                return data.slice(0, 2) + "/" + data.slice(2, 4) + "/" + data.slice(4, 8);
            }
        }

        return "";
    }

    public receberCpf(mensagem: string): string {
        let prompt = promptSync();
        let exe = true;

        while (exe) {
            let valor = prompt(mensagem);

            if (valor == "") {
                console.log("Esse campo é obrigatório");
                exe = true;
            } else if (valor.replace(/[^0-9]/g, '').length < 11) {
                console.log("Esse campo nao pode ser menor que 11 digitos! E deve conter apenas números");
                exe = true;
            } else if (valor.replace(/[^0-9]/g, '').length > 11) {
                console.log("Esse campo nao pode ser maior que 11 digitos");
                exe = true;
            } else {
                exe = false;
                return valor.replace(/[^0-9]/g, '');
            }
        }

        return "";
    }

    public receberTexto(mensagem: string): string {
        let prompt = promptSync();
        let exe = true;

        while (exe) {
            let texto = prompt(mensagem);
            let resto = texto.slice(1, texto.length);

            if (texto == "") {
                console.log("Esse campo é obrigatório");
                exe = true;
            } else if (texto.length < 3) {
                console.log("Esse campo nao pode ser menor que tres digitos");
                exe = true;
            } else {
                exe = false;
                return texto[0].toUpperCase() + resto.toLowerCase();
            }
        }

        return "Erro";
    }

    public receberGenero(mensagem: string): string {
        let prompt = promptSync();
        let exe = true;

        while (exe) {
            let texto = prompt(mensagem);

            if (texto == "") {
                console.log("Esse campo é obrigatório");
                exe = true;
            } else if (texto[0].toUpperCase() == 'M') {
                exe = false;
                return 'Masculino';
            } else if (texto[0].toUpperCase() == 'F') {
                exe = false;
                return 'Feminino';
            } else {
                console.log("Esse campo nao pode receber genero diferente de Masculino e Feminino no exato momento");
                exe = true;
            }
        }

        return "Erro";
    }
}
