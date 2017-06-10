/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
import * as homePage from './pages/home.page'
import * as impressPage from './pages/impress.page'

fixture`Impress`.page`http://localhost:3000/impress`

test('Directly opening the impress page works', async t => {
  await t
    .expect(impressPage.header.exists)
    .ok()
    .expect(impressPage.ustId.exists)
    .ok()
})

test('Link in Header works', async t => {
  await t.click(homePage.homeLink).expect(homePage.developer.count).eql(2)
})
