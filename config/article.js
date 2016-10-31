export default () => ({ // eslint-disable-line

  // link file UUID
  id: '34454f76-8585-11e6-8897-2359a58ac7a5',

  // canonical URL of the published page
  // https://ig.ft.com/sites/future-of-britain get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/future-of-britain/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  // publishedDate: new Date(),

  headline: 'A plan for Britain:',

  // summary === standfirst (Summary is what the content API calls it)
  summary: '',

  // topic: {
  //   name: 'Starter Kit',
  //   url: '/foo',
  // },

  // relatedArticle: {
  //   text: 'Read more »',
  //   url: 'https://en.wikipedia.org/wiki/Politics_and_the_English_Language',
  // },

  mainImage: {
    title: '',
    description: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  // byline: [
  //   { name: 'Author One', url: '/foo/bar' },
  //   { name: 'Author Two' },
  // ],

  // Appears in the HTML <title>
  title: 'A plan for Britain',

  // meta data
  description: '[Meta description]',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  socialHeadline: '[Social headline]',
  socialSummary: '[Social summary]',

  // TWITTER
  // twitterImage: '',
  // twitterCreator: '@individual's_account',
  // tweetText:  '',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
