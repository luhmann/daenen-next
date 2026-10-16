/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
import * as homePage from './pages/home.page'
import * as impressPage from './pages/impress.page'

fixture`Homepage`.page`http://localhost:3000`

test('Header, Main and Footer are present', async t => {
  await t
    .expect(homePage.header.exists)
    .ok()
    .expect(homePage.content.exists)
    .ok()
    .expect(homePage.footer.exists)
    .ok()
})

test('Contains two developer elements', async t => {
  await t.expect(homePage.developer.count).eql(2)
})

test('Contains 8 project items (standard in collapsed state)', async t => {
  await t.expect(homePage.projectItem.count).eql(8)
})

test('Expanding and collapsing project lists works', async t => {
  await t
    .click(homePage.moreButton.nth(0))
    .expect(homePage.projectItem.count)
    .gt(8, 'Page still contains only 8 projects - tried to expand jfd')
    .expect(homePage.moreButton.nth(0).innerText)
    .eql('Fewer Projects')
    .click(homePage.moreButton.nth(1))
    .expect(homePage.projectItem.count)
    .gt(8, 'Page still contains only 8 projects - tried to expand henning')
    .expect(homePage.moreButton.nth(1).innerText)
    .eql('Fewer Projects')
    .click(homePage.moreButton.nth(0))
    .click(homePage.moreButton.nth(1))
    .expect(homePage.projectItem.count)
    .eql(8)
    .expect(homePage.moreButton.nth(0).innerText)
    .eql('More Projects')
    .expect(homePage.moreButton.nth(1).innerText)
    .eql('More Projects')
})

test('Link to Impress-page works', async t => {
  await t
    .click(homePage.impressLink)
    .expect(impressPage.header.exists)
    .ok()
    .expect(impressPage.ustId.exists)
    .ok()
})
