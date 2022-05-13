const {Builder, By, Key, util} = require("selenium-webdriver");
async function test(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.bancoestado.cl/imagenes/_personas/home/default.asp");
    await driver.findElement(By.name("q")).sendKeys("paranormal",Key.RETURN);
}
test();