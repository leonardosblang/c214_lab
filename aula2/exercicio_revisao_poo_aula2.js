
class Veiculo {
    constructor(placa, ano) {
        this.placa = placa;
        this.ano = ano;
    }
    getPlaca() {
        return this.placa;
    }
    setPlaca(placa) {
        this.placa = placa;
    }
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }

    exibirDados() {
        console.log(`Placa: ${this.placa} Ano: ${this.ano}`);
    }
}

class Caminhao extends Veiculo {
    constructor(placa, ano, eixos) {
        super(placa, ano);
        this.eixos = eixos;
    }
    getEixos() {
        return this.eixos;
    }
    setEixos(eixos) {
        this.eixos = eixos;
    }
    exibirDados() {
        super.exibirDados();
        console.log(`Eixos: ${this.eixos}`);
    }
}

class Onibus extends Veiculo {
    constructor(placa, ano, assentos) {
        super(placa, ano);
        this.assentos = assentos;
    }
    getAssentos() {
        return this.assentos;
    }
    setAssentos(assentos) {
        this.assentos = assentos;
    }
    exibirDados() {
        super.exibirDados();
        console.log(`Assentos: ${this.assentos}`);
    }
}


let caminhao = new Caminhao('ZZZ-1111', '2002', '4');
caminhao.exibirDados();
let onibus = new Onibus('ATK-5648', '2021', '50');
onibus.exibirDados();
let veiculo = new Veiculo('DEF-1782', '2022');
veiculo.exibirDados();
