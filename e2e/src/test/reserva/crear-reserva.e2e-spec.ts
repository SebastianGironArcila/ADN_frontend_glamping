
import { CrearReserva } from '../../page/reserva/crear-reserva.po';
import { AppPage } from '../../app.po';
import { ToolBarPage } from '../../page/toolbar/toolbar.po';



describe('Crear reserva',  () => {
    
    let page: AppPage
    let menu: ToolBarPage;
    let crearReserva: CrearReserva;
    // const RESERVA_CREADA = "Reserva creada correctamente";
   

    beforeEach(() => {
        page = new AppPage;
        menu = new ToolBarPage;
        crearReserva = new CrearReserva();
    
    });

    it('Deberia crear la reserva', async () => {
        await page.navigateTo();
        await menu.clickBotonReserva();
        await menu.clickBotonCrearReserva();
        await crearReserva.clickInputNombre();
        await crearReserva.clickInputCedula();
        await crearReserva.clickInputGlamping();
        await crearReserva.clickOpcionIdGlamping();
       // await crearReserva.clickInputFechaEntrada();
        //await crearReserva.clickInputFechaSalida();
        await crearReserva.clickInputCantPersonas();
        await crearReserva.clickInputTelefono();
        await crearReserva.clickBotonGuardarReserva();

        // const alerta = await crearReserva.getTextoSwal();
        // await expect(alerta).toEqual(RESERVA_CREADA);

        
    })

});