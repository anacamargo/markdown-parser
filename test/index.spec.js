const chai = require('chai');
const assert = chai.assert;
const library = require('../index');

describe('Find links in Markdown', () => {
  describe('When string exists in Markdown', () => {
    it('Should return single item array for this test string', () => {
      const testString = `[I'm an inline-style link](https://www.google.com)`;
      const links = library.getLinksFromMd(testString);
      assert.lengthOf(links, 1, 'should have found 1 link');
    });

    it('Should return multiple items array for this test string', () => {
      const testString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.[foo](http://foo.com)`;
      const links = library.getLinksFromMd(testString);
      assert.lengthOf(links, 3, 'should have found 3 links');
    });
  });

  describe('When string is empty or there is no links in markdown', () => {
    it('Should return empty array when test string is empty', () => {
      const testString = '';
      const links = library.getLinksFromMd(testString);
      assert.equal(links, '', 'should not have found any link');
    });

    it('Should return an empty array when there is no links on the test string', () => {
      const testString =
        `My Header
        ==============
        My Subheader
        --------------
        * bullet
        * bullet`;
      const links = library.getLinksFromMd(testString);
      assert.isEmpty(links, 'should not have found any link');
    });
  });

  describe('When parameter order is opposite, or the symbols is opposite', () => {
    it('Should return an empty array', () => {
      const testString = `[https://www.google.com](I'm an inline-style link)`;
      const links = library.getLinksFromMd(testString);
      assert.equal(links, '', 'should not have found any link');
    });

    it('Should return an empty array', () => {
      const testString = `(I'm an inline-style link)[https://www.google.com]`;
      const links = library.getLinksFromMd(testString);
      assert.equal(links, '', 'should not have found any link');
    });
  });

  describe('When the string has a relative path', () => {
    it('Should return single item array for this test string', () => {
      const testString = `[Im a relative reference to a repository file](../blob/master/LICENSE)`;
      const links = library.getLinksFromMd(testString);
      assert.lengthOf(links, '1', 'should have found 1 link');
    });
  });

  describe('When string has a title', () => {
    it('Should return only a link in this test string', () => {
      const testString = `[I'm an inline-style link with title](https://www.google.com "Google's Homepage")`;
      const links = library.getLinksFromMd(testString);
      assert.lengthOf(links, '1', 'should have found 1 link');
    });
  });
});