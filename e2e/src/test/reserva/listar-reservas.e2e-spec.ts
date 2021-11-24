
import { AppPage } from '../../app.po';
import { ToolBarPage } from '../../page/toolbar/toolbar.po';


describe('Listar reservas',  () => {
    
    let page: AppPage
    let menu: ToolBarPage;
   

    beforeEach(() => {
        page = new AppPage;
        menu = new ToolBarPage;
    
    });

    it('Deberia listar las reservas', async () => {
        await page.navigateTo();
        await menu.clickBotonReserva();
        
        
    })

});