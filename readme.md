NewsPipe yahoo pipe reader
==============

Built with
--------------
Scaffolded out with yeoman angular generator to give base application on which functionality was built. Bootstrap included as part of this.

Decisions
--------------
Made the single call to the yahoo pipe in the service, seems to load reasonably quickly so left it at that. Latest reports are towards the top but added a search to refine results. Basic details display in summary and on click displays a modal with link to external article. 

Most of the logic is built into main controller, although split out modal partially with views for each.

Improvements
--------------
- Add pagination
- Split out the pipe id so easy to add function for user to supply different pipe id
- Fix .ico
- Filters, specifically date
- Writing tests
- Clean out superflous code

To view
--------------
- git clone https://github.com/mhwyatt1/bbtest.git
- npm install
- bower install
- grunt serve
