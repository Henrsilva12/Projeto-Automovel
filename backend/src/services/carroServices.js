class CarroServices {

    constructor(carroRepository) {
        this.carroRepository = carroRepository;
    }

    async save(carroData) {
        const newCarro = await this.carroRepository.save(carroData);
        return newCarro;
    }

    async update(carro) {
        const updatedCarro = await this.carroRepository.update(carro);
        return updatedCarro;
    }

    async delete(carro) {
        const deletedCarro = await this.carroRepository.delete(carro);
        return deletedCarro;
    }

    async findById(id) {
        const carro = await this.carroRepository.findById(id);
        return carro;
    }

    async findAll() {
        const carros = await this.carroRepository.findAll();
        return carros;
    }

    async findByModelo(modelo) {
        const carro = await this.carroRepository.findByModelo(modelo);
        return carro;
    }

    async findByLoja(loja) {
        const carros = await this.carroRepository.findByLoja(loja);
        return carros;
    }

    async findByAno(ano) {
        const carros = await this.carroRepository.findByAno(ano);
        return carros;
    }

    async findByPlaca(placa) {
        const carro = await this.carroRepository.findByPlaca(placa);
        return carro;
    }
}

module.exports = CarroServices;