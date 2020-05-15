import React, { Component } from 'react';
import brazilStates from '../services/data';

export default class BuyerInfo extends Component {
  constructor(props) {
    super(props);
    this.inputFullName = this.inputFullName.bind(this);
    this.inputCPF = this.inputCPF.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputPhoneNumber = this.inputPhoneNumber.bind(this);
    this.inputCEP = this.inputCEP.bind(this);
    this.inputAddress = this.inputAddress.bind(this);
    this.inputComplement = this.inputComplement.bind(this);
    this.inputAddressNumber = this.inputAddressNumber.bind(this);
    this.inputCity = this.inputCity.bind(this);
    this.inputBrazilStates = this.inputBrazilStates.bind(this);
  }

  inputBrazilStates() {
    return (
      <div className="form-group">
        <select className="form-control" id="inputBrazilStates" placeholder="Estado">
          {brazilStates.map(({ initials }) => (
            <option key={initials} value={initials}>
              {initials}
            </option>
          ))}
        </select>
      </div>
    );
  }

  inputCity() {
    return (
      <div className="form-group">
        <input type="text" className="form-control" id="inputCity" placeholder="Cidade" />
      </div>
    );
  }

  inputAddressNumber() {
    return (
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          id="inputAddressNumber"
          placeholder="Número"
        />
      </div>
    );
  }

  inputComplement() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="inputComplement"
          placeholder="Complemento"
        />
      </div>
    );
  }

  inputAddress() {
    return (
      <div className="form-group">
        <input
          data-testid="checkout-address"
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Endereço"
        />
      </div>
    );
  }

  inputCEP() {
    return (
      <div className="form-group">
        <input
          data-testid="checkout-cep"
          type="text"
          className="form-control"
          id="inputCEP"
          placeholder="CEP"
        />
      </div>
    );
  }

  inputPhoneNumber() {
    return (
      <div className="form-group">
        <input
          data-testid="checkout-phone"
          type="text"
          className="form-control"
          id="inputPhoneNumber"
          placeholder="Telefone"
        />
      </div>
    );
  }

  inputEmail() {
    return (
      <div className="form-group">
        <input
          data-testid="checkout-email"
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="Email"
        />
      </div>
    );
  }

  inputCPF() {
    return (
      <div className="form-group">
        <input
          data-testid="checkout-cpf"
          type="text"
          className="form-control"
          id="inputCPF"
          placeholder="CPF"
        />
      </div>
    );
  }

  inputFullName() {
    return (
      <div className="form-group">
        <input
          data-testid="checkout-fullname"
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
      <form>
        <h4>Informações do Comprador</h4>
        <div className="row">
          {this.inputFullName()}
          {this.inputCPF()}
          {this.inputEmail()}
          {this.inputPhoneNumber()}
          {this.inputCEP()}
          {this.inputAddress()}
          {this.inputComplement()}
          {this.inputAddressNumber()}
          {this.inputCity()}
          {this.inputBrazilStates()}
        </div>
      </form>
    );
  }
}
