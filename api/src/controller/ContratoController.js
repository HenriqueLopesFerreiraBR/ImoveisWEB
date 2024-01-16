const ContratoModel = require("../model/Contrato");

class ContratoController {
    async getAll(req, res) {
        try {
            const contratos = await ContratoModel.findAll();
            res.json(contratos);
        } catch (error) {
            console.error("Erro ao obter contratos:", error);
            res.status(500).send("Erro interno do servidor");
        }
    }

    async create(req, res) {
        const { tipoContrato, dataInicio, dataFim, idCliente, idImovel } =
            req.body;

        try {
            const novoContrato = await ContratoModel.create({
                tipoContrato,
                dataInicio,
                dataFim,
                idCliente,
                idImovel,
            });

            res.status(201).json(novoContrato);
        } catch (error) {
            console.error("Erro ao criar contrato:", error);
            res.status(500).send("Erro interno do servidor");
        }
    }

    // Método para obter um contrato por ID
    async getById(req, res) {
        const contratoId = req.params.id;

        try {
            const contrato = await ContratoModel.findByPk(contratoId);

            if (!contrato) {
                res.status(404).send("Contrato não encontrado");
                return;
            }

            res.json(contrato);
        } catch (error) {
            console.error("Erro ao obter contrato por ID:", error);
            res.status(500).send("Erro interno do servidor");
        }
    }

    async update(req, res) {
        const contratoId = req.params.id;
        const { tipoContrato, dataInicio, dataFim, idCliente, idImovel } =
            req.body;

        try {
            const contrato = await ContratoModel.findByPk(contratoId);

            if (!contrato) {
                res.status(404).send("Contrato não encontrado");
                return;
            }

            await contrato.update({
                tipoContrato,
                dataInicio,
                dataFim,
                idCliente,
                idImovel,
            });

            res.json(contrato);
        } catch (error) {
            console.error("Erro ao atualizar contrato por ID:", error);
            res.status(500).send("Erro interno do servidor");
        }
    }

    async delete(req, res) {
        const contratoId = req.params.id;

        try {
            const contrato = await ContratoModel.findByPk(contratoId);

            if (!contrato) {
                res.status(404).send("Contrato não encontrado");
                return;
            }

            await contrato.destroy();
            res.status(204).send();
        } catch (error) {
            console.error("Erro ao excluir contrato por ID:", error);
            res.status(500).send("Erro interno do servidor");
        }
    }
}

module.exports = new ContratoController();
