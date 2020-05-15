import React, { Component } from "react";

export default class BuyerInfo extends Component {
  constructor(props) {
    super(props);
    this.fullName = this.fullName.bind(this);
    this.cpf = this.cpf.bind(this);
    this.email = this.email.bind(this);
    this.phone = this.phone.bind(this);
    this.cep = this.cep.bind(this);
    this.address = this.address.bind(this);
    this.complement = this.complement.bind(this);
    this.number = this.number.bind(this);
    this.city = this.city.bind(this);
    this.state = this.state.bind(this);
    this.product = this.product.bind(this);
    this.payment = this.payment.bind(this);
  }

  payment() {
    return (
      <div className="form-check form-check-inline">
        <div>
          <h6>Boleto</h6>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              id="materialInline1"
              name=""
            />
            <label className="form-check-label" htmlFor="materialInline1">
              BarCode
            </label>
            <img width="50" height="50" src="" />
          </div>
        </div>
        <div>
          <h6>Cartão de Crédito</h6>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              id="materialInline1"
              name=""
            />
            <label className="form-check-label" htmlFor="materialInline1">
              Visa
            </label>
            <img width="50" height="50" src="" />
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              id="materialInline2"
              name=""
            />
            <label className="form-check-label" htmlFor="materialInline2">
              MasterCard
            </label>
            <img width="50" height="50" src="" />
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              id="materialInline3"
              name=""
            />
            <label className="form-check-label" htmlFor="materialInline3">
              Elo
            </label>
            <img width="50" height="50" src="" />
          </div>
        </div>
      </div>
    );
  }

  product() {
    return (
      // ShoppingCart products
      <div className="form-group">
        <select
          type="number"
          className="form-control"
          id="inputFullName"
          placeholder="Estado"
        >
          <option default value="Estado">
            Estado
          </option>
          <option value="MG">Minas Gerais</option>
        </select>
      </div>
    );
  }

  state() {
    return (
      <div className="form-group">
        <select
          type="number"
          className="form-control"
          id="inputFullName"
          placeholder="Estado"
        >
          <option default value="Estado">
            Estado
          </option>
          <option value="MG">Minas Gerais</option>
          <option value="SP">São Paulo</option>
          <option value="RJ">Rio de Janeiro</option>
        </select>
      </div>
    );
  }

  city() {
    return (
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          id="inputFullName"
          placeholder="Cidade"
        />
      </div>
    );
  }

  number() {
    return (
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          id="inputFullName"
          placeholder="Número"
        />
      </div>
    );
  }

  complement() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="inputFullName"
          placeholder="Complemento"
        />
      </div>
    );
  }

  address() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="inputFullName"
          placeholder="Endereço"
        />
      </div>
    );
  }

  cep() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="inputFullName"
          placeholder="CEP"
        />
      </div>
    );
  }

  phone() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="inputFullName"
          placeholder="Telefone"
        />
      </div>
    );
  }

  email() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="inputFullName"
          placeholder="Email"
        />
      </div>
    );
  }

  cpf() {
    return (
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          id="inputFullName"
          placeholder="CPF"
        />
      </div>
    );
  }

  fullName() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="inputFullName"
          placeholder="Nome Completo"
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <h4>Revise seus Produtos</h4>
            <div className="row">{this.product()}</div>
          </form>
        </div>
        <div>
          <form>
            <h4>Informações do Comprador</h4>
            <div className="row">
              {this.fullName()}
              {this.cpf()}
              {this.email()}
              {this.phone()}
              {this.cep()}
              {this.address()}
              {this.complement()}
              {this.number()}
              {this.city()}
              {this.state()}
            </div>
          </form>
          <div>
            <form>
              <h4>Método de Pagamento</h4>
              <div className="row">{this.payment()}</div>
            </form>
          </div>
          <button type="submit" className="btn btn-primary">
            Comprar
          </button>
        </div>
      </div>
    );
  }
}
