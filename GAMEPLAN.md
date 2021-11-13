# Roadmap for Project

- [x] Build structure within just the `App.vue` file
- [x] Break into components
  - [x] Style the components
  - [x] Build testing files for each component
- [ ] Create functionality (outside of default state)
  - [ ] Inegrate API via vuex
    - fetch api GET string: `https://api.shrtco.de/v2/shorten?url=${input url value}`
  - [ ] Build component to display and persist previous results
    - [ ] On submit to generate a url, automatically copy to clipboard on completion (will need a toast component here to alert user)
    - [ ] Allow for the copy button to copy the shortened url to the clipboard
    - [ ] Have the list persist via local storage
  - [ ] Create testing for functionality in the related components
