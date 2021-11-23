import { by, element } from 'protractor';

export class ReservaPage {
    private linkCrearReserva = element(by.id('linkCrearReserva'));
    private linkListarReservas = element(by.id('linkListarReservas'));
    private listaReservas = element.all(by.css('ul.reservas li'));

    async clickBotonCrearReservas() {
        await this.linkCrearReserva.click();
    }

    async clickBotonListarReservas() {
        await this.linkListarReservas.click();
    }

    async contarReservas() {
        return this.listaReservas.count();
    }
}
