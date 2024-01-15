const ClienteModel = require("../model/Cliente");

class ClienteController {
    async create(req, res) {
        try {
            const { nome, contato, historicoInteracoes } = req.body;

            const cliente = await ClienteModel.create({
                nome: nome,
                contato: contato,
            });
            res.status(201).json({
                message: "Cliente cadastrado com sucesso",
                cliente,
            });
        } catch (error) {
            console.error("Erro ao obter clientes:", error);
            res.status(500).send("Erro interno do servidor");
        }
    }

    async getAll(req, res) {
        try {
            const clientes = await ClienteModel.findAll();
            res.status(200).json(clientes);
        } catch (error) {
            console.error("Erro ao obter clientes:", error);
            res.status(500).send("Erro interno do servidor");
        }
    }

    async getById(req, res) {
        const clienteId = req.params.id;

        try {
            const cliente = await Cliente.findByPk(clienteId);

            if (!cliente) {
                res.status(404).send("Cliente não encontrado");
                return;
            }

            res.json(cliente);
        } catch (error) {
            console.error("Erro ao obter cliente por ID:", error);
            res.status(500).send("Erro interno do servidor");
        }
    }

    async update(req, res) {
        const clienteId = req.params.id;
        const { nome, email } = req.body;

        try {
            const cliente = await Cliente.findByPk(clienteId);

            if (!cliente) {
                res.status(404).send("Cliente não encontrado");
                return;
            }

            await cliente.update({ nome, email });
            res.json(cliente);
        } catch (error) {
            console.error("Erro ao atualizar cliente por ID:", error);
            res.status(500).send("Erro interno do servidor");
        }
    }

    async delete(req, res) {
        const clienteId = req.params.id;

        try {
            const cliente = await Cliente.findByPk(clienteId);

            if (!cliente) {
                res.status(404).send("Cliente não encontrado");
                return;
            }

            await cliente.destroy();
            res.status(204).send();
        } catch (error) {
            console.error("Erro ao excluir cliente por ID:", error);
            res.status(500).send("Erro interno do servidor");
        }
    }
}

module.exports = new ClienteController();
