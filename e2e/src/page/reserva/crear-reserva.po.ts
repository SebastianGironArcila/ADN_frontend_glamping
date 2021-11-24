import { by, element,  ElementFinder} from 'protractor';

export class CrearReserva {

    private inputNombre = element(by.id("nombre"));
    private inputCedula = element(by.id("cedula"));
    private inputGlamping = element(by.id("idGlamping"));
    private inputFechaEntrada = element(by.id("fechaEntrada"));
    private inputFechaSalida = element(by.id("fechaSalida"));
    private inputCantPersonas = element(by.id("cantPersonas"));
    private inputTelefono = element(by.id("telefono"));
    private botonCrearReserva = element(by.id('crearOrden'));
    private botonGuardarReserva = element(by.id('guardarOrden'));
    private seleccionGlamping = element.all(by.id('opcionesGlamping'));
    private swal = element(by.className('swal-title'));

    async clickInputNombre(){
        await this.inputNombre.click();
    }
    async clickInputCedula(){
        await this.inputCedula.click();
    }
    async clickInputGlamping(){
        await this.inputGlamping.click();
    }

    async clickOpcionIdGlamping(){
        await this.getOpcionIdGlamping().click();
    }
    
    getOpcionIdGlamping(){
        return this.seleccionGlamping.first();
    }

    async clickInputFechaEntrada(){
        await this.inputFechaEntrada.click();
    }
    async clickInputFechaSalida(){
        await this.inputFechaSalida.click();

    }
    async clickInputCantPersonas(){
        await this.inputCantPersonas.click();

    }
    
    async clickInputTelefono(){
        await this.inputTelefono.click();

    }

    async clickBotonCrearReserva(){
        await this.botonCrearReserva.click();
    }

    async clickBotonGuardarReserva(){
        await this.botonGuardarReserva.click();
    }

    async getTextoSwal(): Promise<string> {
        return await this.swal.getText();
    }

    getToast(): ElementFinder{
        return this.swal;
    }


    
}
