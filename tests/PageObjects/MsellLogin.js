class LoginPage
{

constructor(page)
{
    this.page = page;
    this.agent = page.locator('.agent');
    this.agentMobile = page.locator('input#AGENT_CODE_OR_MOBILE');
    this.update = page.locator('#update');
    this.otp = page.locator('.inptfld.codeotp');
    this.authenticate = page.locator('#authenticate');
}

async URL()
{
    this.page.goto('https://uat-accounts.bharti-axalife.com/authenticationendpoint/custom-agent-code.jsp?client_id=o7f7wVtyNOzdVbHw0Uuf4veZ4d8a&commonAuthCallerPath=%2Foauth2%2Fauthorize&forceAuth=false&passiveAuth=false&redirect_uri=https%3A%2F%2Fmsell-uat.bhartiaxa.com%2FMSell%2FProduct.aspx&response_type=code&scope=openid&tenantDomain=carbon.super&sessionDataKey=3f35e1e4-c797-451b-b63a-f9846a473fc3&relyingParty=o7f7wVtyNOzdVbHw0Uuf4veZ4d8a&type=oidc&sp=MSELL&isSaaSApp=false&authenticators=CustomAuthenticator');
}

async ValidLogin()
{
    await this.page.waitForLoadState("networkidle")
    await this.agent.click();
    await this.agentMobile.fill('174163');
    await this.update.click();
    await this.page.waitForLoadState('networkidle');
    await this.otp.fill('123456');
    await this.authenticate.click();
}


}

module.exports = {LoginPage};