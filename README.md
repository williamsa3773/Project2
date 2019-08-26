# Project Overview
## Project Description

Creating a dictionary app that would allow users to search words at their leisure.

https://github.com/williamsa3773/Project2

## Wireframes

Link to wireframes showing for my application and Hierarchy
https://imgur.com/a/CWmSaxn

## API

Dictionary - https://www.dictionaryapi.com/api/v3/references/collegiate/json/word?key=097cb478-2f07-4d94-9e03-739c1ff1d6ab
Thesaurus -https://www.dictionaryapi.com/api/v3/references/thesaurus/json/word?key=a9a12465-41f6-45eb-8960-4783f16d1b54

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api: Using merriam webster dictionary api
- Render data on page: tested out the rendering of my words, the snippet above is an example of what would be displayed
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

- Allow user to interact with the page: There was a button for the user to click to gather the info on the word of their choice. there will be more words for each page.

## React Component Hierarchy
## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.
Second picture int the link.
https://imgur.com/a/CWmSaxn

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Part1 | H | |  |  |
| In app making api call | H | 1.5hrs | 0hrs | 0hrs |
| Creating form and connecting api call| M | 1.5hrs | 0hrs | 0hrs |
| creating nav | L | 1hr | 0hrs | 0hrs |
| Initial CSS | L | 2hrs | 0hrs | 0hrs |
| Part2 | H | |  |  |
| Generate Random Word | H | 2hr | 0hrs | 0hrs |
| Setting time and generating countdown timer | H | 2hr | 0hrs | 0hrs |
| Creating random word and generating data | H | 2hr | 0hrs | 0hrs |
| 2nd Initial Css | L | 2hr | 0hrs | 0hrs |
| Part3 | H | |  |  |
| Generating button and randomizing a word | H | 2hr | 0hrs | 0hrs |
| Creating Li for scrambled words | L | 1hr | 0hrs | 0hrs |
| Creating Li fo picking letters | L | 2hr | 0hrs | 0hrs |
| Creating lights and conditions | H | 3hr | 0hrs | 0hrs |
| Generating data field | L | 1hr | 0hrs | 0hrs |
| 3rd class | L | 2hr | 0hrs | 0hrs |
| Part4 | H | |  |  |
| Final css | H| 4hr | 0hrs | 0hrs |
Total: 30hrs


## Additional Libraries
react-router-dom, axios

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code.


## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object# Project2 Worksheet
