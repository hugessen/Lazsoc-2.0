#Lazaridis Students' Society App v2.0

Yeah baby!! Total code refactor using Ionic 2 and AngularJS 2. Coding in Angular 2 is so freaking awesome!

If you get 

    Error: spawn EACCES

run:

    ionic hooks add

##Notes
* Clubs need to only supply a banner if it is unique
* App sometimes crashes on newsfeed, because event returns before its club, causing it to return a 404 on the banner
* Modals and modal navigation for launch protocol?

##To Do:
- [ ] Images for discount program
- [ ] Add to Calendar doesn't execute on my phone; fix
- [ ] Implement API for interests
- [ ] Social links in clubpage (confirm they work)
- [ ] Special Characters
- [x] Save Preferences separately from Club and Interest objects
- [x] Implement Interests in custom feed
- [ ] ConnectivityMonitor to see if user is online
- [x] Fix Personal Information page
- [x] List dividers to distinguish days in newsfeed
- [ ] RRule for recurring events
- [x] Implement new API
- [x] Gold leaf logo for header bar
- [ ] Notify when exported event has changed
- [x] This Week, Next Week, Upcoming filters
- [x] Popover to edit filters
- [ ] Override CSS to optimize look-and-feel

###Cloud
- [ ] Deploy
- [ ] Push Notifications
- [ ] Analytics
