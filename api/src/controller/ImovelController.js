const ImovelModel = require("../model/Imovel");

class ImovelController {
    async create(req, res) {
        try {
            const { endereco, tipo, preco, status } = req.body;

            const imovel = await ImovelModel.create({
                endereco: endereco,
                tipo: tipo,
                preco: preco,
                status: status,
            });

            res.status(201).json({
                message: "Imovel cadastrado com sucesso",
                imovel,
            });
        } catch (error) {
            console.error("Erro ao obter imovels:", error);
            res.status(500).send("Erro interno do servidor");
        }
    };

    async getAll(req, res) {
        try {
            const imoveis = await ImovelModel.findAll();
            res.status(200).json(imoveis);
        } catch (error) {
            console.error("Erro ao obter imovels:", error);
            res.status(500).send("Erro interno do servidor");
        }
    };

    async getById(req,res){
        const imovelId = req.params.id

        try {
            const imovel = await ImovelModel.findByPk(imovelId)

            if(!imovel){
                return res.status(404).json("imovel não encontrado")
            }

            res.status(200).json(imovel);
        } catch (error) {
            console.error("Erro ao obter imovel por ID:", error);
            res.status(500).send("Erro interno do servidor");
        }
    };

    async update(req, res) {
        const imovelId = req.params.id;
        const { endereco, tipo, preco, status } = req.body;

        try {
            const imovel = await ImovelModel.findByPk(imovelId);

            if (!imovel) {
                res.status(404).send("imovel não encontrado");
                return;
            }

            await imovel.update({ endereco:endereco, tipo:tipo, preco:preco, status:imovel });
            res.json(imovel);
        } catch (error) {
            console.error("Erro ao atualizar imovel por ID:", error);
            res.status(500).send("Erro interno do servidor");
        }
    };

    async delete(req, res) {
        const imovelId = req.params.id;

        try {
            const imovel = await ImovelModel.findByPk(imovelId);

            if (!imovel) {
                res.status(404).send("imovel não encontrado");
                return;
            }

            await imovel.destroy();
            res.status(204).send();
        } catch (error) {
            console.error("Erro ao excluir imovel por ID:", error);
            res.status(500).send("Erro interno do servidor");
        }
    }

}

module.exports = new ImovelController();
