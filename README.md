# **Project 4: Art Xchange**

## Overview
Art Xchange is an E-commerce platform that connects buyers and sellers of affordable art.

## Project Brief

Your app must:
- Use Mongo, Express and Node to build an API and a React front-end app that consumes it
- Create an API using at least 2 related models, one of which should be a user
- Be  complete product
- Implement thoughtful user stories/wireframes
- Be deployed online so it's publicly accessible
- Have automated tests for at lest one RESTful resource on the back-end, and at least one classical and functional component on the front-end
- A link to your hosted working app in the URL section of your Github repo
- A readme.md file
- Layout and style your front-end with clean and well-formatted CSS

**[Heroku](https://artxchange.herokuapp.com/)**

**[Github Repository](https://github.com/zoebarrington/wdi-project-four)**

## Home Page  
![Homepage](screenshots/home-page.png)

## Index Page  
![Index](screenshots/index-page.png)

## Create Page  
![Create](screenshots/create-page.png)

## Show Page
![Show](screenshots/show.png)

## Profile Page  
![Profile](screenshots/profile.png)

## Messaging
![Messages](screenshots/messenger.png)





## Technologies Used
- HTML 5
- SCSS
- JavaScript(ECMAScript 6)
- axios: v0.18.0
- react: v16.4.2
- react-router-dom: v4.3.1
- Node.js
- MongoDB
- bcypt: v3.0.0
- bluebird: v3.5.1
- body-parser: v1.18.3
- express: v4.16.3
- jsonwebtoken: v8.3.0
- mongoose: v5.2.10
- mongoose-unique-validator: v2.0.1
- morgan: v1.9.0
- request-promise: v4.2.2
- chai: v4.1.2
- mocha: v5.2.0
- GitHub
- Github
- Heroku  
- Trello
- Photoshop
- Google Fonts  
- Fontawesome

## APIs Used
- Exchange Rate API

## Wireframes

### Home Page  
![Home-Wireframe](screenshots/home-wireframe.png)

### Show Page  
![Show-Wireframe](screenshots/show-wireframe.png)

### Index Page
![Index-Wireframe](screenshots/index-wireframe.png)

### Create Page  
![Create](screenshots/create.png)

## Featured Piece of Code no.1

## Featured Piece of Code no.2
```javascript
<div className="basket-section">
  <div>
    <form onSubmit={calculateTotal}>
      <select id="select" name="currency" onChange={handleChange}>
        {currency && Object.keys(currency.rates).map( options =>
          <option value={options} key={options}>{options}</option>)}
      </select>
    </form>
  </div>

  <p id="price">{selectedCurrency === 'GBP' ? '£' : `${selectedCurrency} `}{totalPrice}</p>
  <button className="basket-button" onClick={handleClick}>Add to basket</button>
</div>
</div>
```

## Challenges Faced

## Wins

- My greatest win in this project was managed to get the external exchange rate API to work. It took a lot of conceptual planning, and I felt it was my greatest achievement within the project.

- I am proud of all the functionality that I have produced, as well as the styling.
