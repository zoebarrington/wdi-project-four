/* global describe,it */
import React from 'react';
import axios from 'axios';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import ArtworkShow from '../../src/components/artworks/ArtworkShow';
// import { getBasket } from '../../../src/lib/basket';


const userIds = [
  '5c0a5555c333a575f6c5d0aa'
];

const artworkData = [
  {
    createdBy: userIds[0],
    name: 'Ladies in Blue',
    price: 300,
    artist: 'Camilla Down',
    yearPainted: 2017,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: './assets/blueladies.jpg',
    medium: 'Watercolour',
    locationOfArtist: 'London, United Kingdom',
    location: { lat: 43.6666944, lng: -79.3155959 },
    comments: [{
      title: 'Love this!',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }];

// Since there is no router, there is no this.props.match.params.id!
// Here, we're just going to invent a match object, and pass it to props
// when we render the component
const match = {
  params: {
    id: 1234
  }
};

sinon.stub(axios, 'get')
  .returns(Promise.resolve({ data: artworkData }));

// Create a mocha test suite, a collection of test cases:
describe('ArtworkShow', () => {
  it('should show the artwork name and image', done => {
    const component = mount(<ArtworkShow match={match}/>);
    // Just fake the fact that we have a artwork on this.state:
    component.setState({ artwork: artworkData });
    // NOTE: We can console.log the HTML our browser has produced from the component!
    // console.log(component.html());
    // We can now write our assertions. These must all be true
    // for the test case to pass.
    expect(component.find('img').props().src).to.eq(artworkData.image);
    expect(component.find('h1').text()).to.eq(artworkData.name);
    done();
  });

  it('should show an input with quantity 0 by default', done => {
    const component = shallow(<ArtworkShow match={match}/>);
    component.setState({ artwork: artworkData });
    expect(component.find('.field label').text()).to.eq('Quantity');
    expect(component.find('.field input').length).to.eq(1);
    expect(component.find('.field input').props().value).to.eq(0);
    done();
  });

  it('should redirect to the /basket page after "Add to basket" click', done => {
    // There's no router, which means no this.props.history! We'll have to simulate
    // it by handing in an empty object to props.history and testing that.
    const history = [];
    // Note the history prop:
    const component = shallow(<ArtworkShow match={match} history={history}/>);
    component.setState({ artwork: artworkData });
    const button = component
      .findWhere(x => x.text() === 'Add to basket')
      .find('button');
    button.simulate('click');
    expect(history[0]).to.eq('/basket');
    done();
  });

  // it('should add the correct item to localStorage on add to basket', done => {
  //   const component = shallow(<ArtworkShow match={match} history={[]}/>);
  //   component.setState({ artwork: artworkData, quantity: 3 });
  //   expect(component.find('input').props().value).to.eq(3);
  //   // Click the button (it's actually the only one on the page!)
  //   component.find('button').simulate('click');
  //   expect(getBasket().length).to.eq(1);
  //   expect(getBasket()[0].quantity).to.eq(3);
  //   expect(getBasket()[0].name).to.eq(artworkData.name);
  //   done();
  // });

  // Because this last test case actually waits for componentDidMount and
  // the axios request to run, it's a bit more complicated. We need
  // `async() => {}` instead of `done => {}`, which allows us to `await` the
  // componentDidMount method. All the other test cases just put the test data
  // directly onto this.state.
  it('should show the name and image after componentDidMount', async () => {
    // Shallow render the artwork show component. Notice the match prop.
    const component = mount(<ArtworkShow match={match}/>);
    // Now we have to wait for componentDidMount to run...
    await component.instance().componentDidMount();
    // ...and for the subsequent render to run after this.setState:
    component.update();
    // Now the component has all the data.
    // We can console.log the HTML our browser has produced from the component!
    // console.log(component.html());
    // We can now write our assertions:
    expect(component.state().artwork).to.be.an('object');
    expect(component.state().artwork.name).to.eq(artworkData.name);
    expect(component.find('img').props().src).to.eq(artworkData.image);
    expect(component.find('h1').text()).to.eq(artworkData.name);
  });


});
