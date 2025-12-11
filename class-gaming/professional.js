class Hero {
  constructor(nome, idade, tipo, ataque) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque;
  }

  atacar() {
    console.log(`O ${this.tipo} atacou usando ${this.ataque}!`);
  }
}

class Mago extends Hero {
  constructor(nome, idade) {
    super(nome, idade, "mago", "magia");
  }
}

class Guerreiro extends Hero {
  constructor(nome, idade) {
    super(nome, idade, "guerreiro", "espada");
  }
}

class Monge extends Hero {
  constructor(nome, idade) {
    super(nome, idade, "monge", "artes marciais");
  }
}

class Ninja extends Hero {
  constructor(nome, idade) {
    super(nome, idade, "ninja", "shuriken");
  }
}

const heroMago = new Mago("Merlin", 120);
heroMago.atacar();

const heroGuerreiro = new Guerreiro("Tanos", 50);
heroGuerreiro.atacar();

const heroMonge = new Monge("Coen", 60);
heroMonge.atacar();

const heroNinja = new Ninja("Jack-Chan", 70);
heroNinja.atacar();
