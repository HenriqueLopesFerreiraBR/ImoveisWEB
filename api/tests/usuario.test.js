const request = require("supertest");
const app = require("../index"); // Seu arquivo principal, que exporta o app do Express.
const Usuario = require("../src/model/User"); // Importe seu modelo de usuário.

describe("Testes de Usuário", () => {
    beforeAll(async () => {
        // Antes de todos os testes, sincronize o modelo do banco de dados.
        await Usuario.sync({ force: true });
    });

    it("Deve criar um novo usuário", async () => {
        const res = await request(app)
            .post("http://localhost:3005/api/usuario/")
            .send({
                nome: "Teste",
                email: "teste@example.com",
                senha: "senha123",
            });

        expect(res.status).toBe(201);
        expect(res.body).toEqual(
            expect.objectContaining({
                nome: "Teste",
                email: "teste@example.com",
            })
        );
    });

    it("Deve obter todos os usuários", async () => {
        const res = await request(app).get("/api/usuario/");

        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
        // Adicione mais asserções conforme necessário.
    });

    // Adicione mais testes conforme necessário para as outras rotas (GET por ID, PUT, DELETE, etc.).
});
