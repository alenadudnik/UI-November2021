describe('Auth', function () {
    it('Successful log in', async function () {
        await browser.url('/user/login');
        await expect($('[class*="login-form-button"]'))
            .toBeDisplayed();
        await $('[qa-id="email"]')
            .setValue('7182001562alena@gmail.com');
        await $('[qa-id="password"]')
            .setValue('Kompot123');
        await expect($('[class*="login-form-button"]'))
            .toBeEnabled();
        await $('[class*="login-form-button"]')
            .click();
        await expect($('img[alt="avatarIcon"]'))
            .toBeDisplayed();
    });
});