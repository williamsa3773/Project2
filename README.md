# Project2 Worksheet

Creating a dictionary app that would allow users to search words at their leisure.

Link to wireframes showing for my application
https://imgur.com/a/CWmSaxn

Api
Dictionary - https://www.dictionaryapi.com/api/v3/references/collegiate/json/word?key=097cb478-2f07-4d94-9e03-739c1ff1d6ab
Thesaurus -https://www.dictionaryapi.com/api/v3/references/thesaurus/json/word?key=a9a12465-41f6-45eb-8960-4783f16d1b54

const words = this.state.wordData.map((d, i) => {
  console.log(d)
  return (
  <div>
    <h1>word: {d.word}</h1>
    <p>fl: {d.noun}</p>
    <ul>def: {d.def.map( (def, ind) => {
      return (
        <li key={ind}>{def}</li>
      )
    })}</ul>
  </div>

MVP
Find: Using merriam webster dictionary api
Render: tested out the rendering of my words, the snippet above is an example of what would be displayed
UI: There was a button for the user to click to gather the info on the word of their choice. there will be more words for each page.

Components and Hierachy is in image Link

Time Matrix: (30hrs)
Separating project into sections

Part 1: (6hrs)
In app make api calls: (1hr 30min)
Creating form and connecting api calls: (1hr 30min)
Creating Nav: (1hr)
Initial CSS: (2hr)

Part 2: (9hrs)
Generate Random Word: (2hrs)
Setting time and generating countdown timer: (2hrs)
Creating Button and generating random word: (3hrs)
Initial css: (2hrs)

Part 3: (11hrs)
Generating button and randomizing a word: (2hrs)
Creating Li for scrambled word (1hr)
Creating Li for picking letter: (2hrs)
Creating lights and conditions (3hrs)
Create data field: (1hr)
Initial css: (2hrs)

Part 4: (4hrs)
Final css: (4hrs)
