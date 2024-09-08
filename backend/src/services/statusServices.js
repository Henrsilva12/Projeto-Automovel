class StatusServices {

    constructor( statusRepository) {
        this.statusRepository = statusRepository;
    }

    async save(statusData) {
        const newStatus = await this.statusRepository.save(statusData);
        return newStatus;
    }

    async update(status) {
        const updatedStatus = await this.statusRepository.update(status);
        return updatedStatus;
    }

    async delete(status) {
        const deletedStatus = await this.statusRepository.delete(status);
        return deletedStatus;
    }

    async findById(id) {
        const status = await this.statusRepository.findById(id);
        return status;
    }

    async findAll() {
        const status = await this.statusRepository.findAll();
        return status;
    }
}

module.exports = StatusServices;