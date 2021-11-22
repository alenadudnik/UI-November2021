import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', function () {
    beforeEach(async function () {
        await LoginPage.open();
    });

    it('Successful log in', async function () {
        await expect(LoginPage.buttonSubmit)
            .toBeDisplayed();
        await LoginPage.login('7182001562alena@gmail.com', 'Kompot123')
        await expect(ProfilePage.iconUser)
            .toBeDisplayed();
    });
});