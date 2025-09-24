import React, { useState } from "react";
import "./Formulario_Venda.css"

function FormularioVenda() {
    const [formData, setFormData] = useState({
        nome_cliente: "",
        produto: "",
        categoria: "",
        valor_unitario: "",
        quantidade: "",
        data_venda: "",
        canal_venda: "",
        observacoes: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/dados", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        alert(result.mensagem);

        setFormData({
            nome_cliente: "",
            produto: "",
            categoria: "",
            valor_unitario: "",
            quantidade: "",
            data_venda: "",
            canal_venda: "",
            observacoes: ""
        });

    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="form-title">Sistema de Coleta de Dados <br />Vendas</h1>
            <input
                name="nome_cliente"
                value={formData.nome_cliente}
                onChange={handleChange}
                placeholder="Nome do Cliente"
            />
            <input
                name="produto"
                value={formData.produto}
                onChange={handleChange}
                placeholder="Produto"
            />
            <input
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                placeholder="Categoria"
            />
            <input
                name="valor_unitario"
                type="number"
                step="0.01"
                value={formData.valor_unitario}
                onChange={handleChange}
                placeholder="Valor Unitário"
            />
            <input
                name="quantidade"
                type="number"
                value={formData.quantidade}
                onChange={handleChange}
                placeholder="Quantidade"
            />
            <input
                name="data_venda"
                type="date"
                value={formData.data_venda}
                onChange={handleChange}
            />
            <input
                name="canal_venda"
                value={formData.canal_venda}
                onChange={handleChange}
                placeholder="Canal da Venda"
            />
            <textarea
                name="observacoes"
                value={formData.observacoes}
                onChange={handleChange}
                placeholder="Observações"
            />
            <button type="submit">Enviar</button>
        </form>

    );
}

export default FormularioVenda;