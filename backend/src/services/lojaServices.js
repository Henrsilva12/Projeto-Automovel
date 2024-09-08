class LojaService {

    constructor(lojaRepository) {
        this.lojaRepository = lojaRepository;
    }

    async save(lojaData) {
        const newLoja = await this.lojaRepository.save(lojaData);
        return newLoja;
    }

    async update(loja) {
        const updatedLoja = await this.lojaRepository.update(loja);
        return updatedLoja;
    }

    async delete(loja) {
        const deletedLoja = await this.lojaRepository.delete(loja);
        return deletedLoja;
    }

    async findById(id) {
        const loja = await this.lojaRepository.findById(id);
        return loja;
    }

    async findAll() {
        const lojas = await this.lojaRepository.findAll();
        return lojas;
    }

    async findCarros(loja) {
        const carros = await this.lojaRepository.findCarros(loja);
        return carros;
    }
}

module.exports = LojaService;