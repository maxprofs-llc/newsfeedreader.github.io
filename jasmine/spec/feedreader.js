/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('should have defined URL and not be empty', function() {
          allFeeds.forEach(function(feed) {
            let feedURL = feed.url;
            expect(feedURL).toBeDefined();
            expect(feedURL.length).not.toBe(0);
          });
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */


        it('should have defined name and not be empty', function() {
          allFeeds.forEach(function(feed) {
             let feedTitle = feed.name
            expect(feedTitle).toBeDefined();
            expect(feedTitle.length).not.toBe(0);
          });
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });

    describe('The menu', function() {
    /* TODO: Write a new test suite named "The menu" */

      /* Used jQuery for this as it provides more concise, readable code
       * with the option of either using the 'hasClass()' or 'is()' to
       * to determine Boolean values of the 'menu-hidden' feature. I chose
       * 'hasClass' because it is directly references the 'menu-hidden' class
       * used in both the 'index.html' and 'style.css' files.
       * src https://api.jquery.com/hasclass/
       * src https://api.jquery.com/is/#is-selector
       */
      it('has the menu hidden', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
      });

      it('should toggle visibility on or off with click', function() {
        $('a.menu-icon-link').trigger('click'); // to show menu when clicked
        expect($('body').hasClass('menu-hidden')).toBe(false);
        $('a.menu-icon-link').trigger('click'); // to hide menu again when clicked
        expect($('body').hasClass('menu-hidden')).toBe(true);
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
      });
    });

    describe('Initial Entries', function() {
      /* TODO: Write a new test suite named "Initial Entries" */

      beforeEach(function(done) {
        loadFeed(0, done);
      });

      it('has at least one entry', function() {
        expect($('.feed .entry').length).toBeGreaterThan(0);
      });
          /* TODO: Write a test that ensures when the loadFeed
           * function is called and completes its work, there is at least
           * a single .entry element within the .feed container.
           * Remember, loadFeed() is asynchronous so this test will require
           * the use of Jasmine's beforeEach and asynchronous done() function.
           */

    });

    describe('New Feed Selection', function() {
      /* TODO: Write a new test suite named "New Feed Selection" */

      let oldTestFeed;

      beforeEach(function(done) {
        loadFeed(0, function() {
          oldTestFeed = $('.feed').html();
          loadFeed(1, done);
        });
      });

      it('is different from previous feed', function() {
        expect($('.feed').html()).not.toBe(oldTestFeed);
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
      });
    });

}());
