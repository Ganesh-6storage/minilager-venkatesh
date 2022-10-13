import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionExampleStyled extends Component {
  
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion styled>
        <Accordion.Title className='d-flex justify-content-between align-items-center' active={activeIndex === 0} index={0}>
          <div className='d-flex justify-content-between align-items-center'>
            <img src="/assets/images/filter.png" alt="" />Filters
          </div>
          <div>
          </div>
        </Accordion.Title>

        <Accordion.Title className='d-flex justify-content-between align-items-center'
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <div className='d-flex justify-content-between align-items-center'>
            <img src="/assets/images/building.png" alt="" />Building
          </div>
          <div>
            <img src="/assets/images/arrow-down.png" alt="" />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
        <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content>

        <Accordion.Title className='d-flex justify-content-between align-items-center'
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <div className='d-flex justify-content-between align-items-center'>
            <img src="/assets/images/unit-type.png" alt="" />Unit Type
          </div>
          <div>
          <img src="/assets/images/arrow-down.png" alt="" />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
        <div>
              <h6 className='fw-600 mb-1'>LARGE</h6>
              <div className='text-success text-right'>
                <a>Select All</a> | <a>Clear All</a>
              </div>
                <ul>
                  <li><input className='mr-1 mb-1' type="checkbox" />Small</li>
                  <li><input className='mr-1 mb-1' type="checkbox" />Medium</li>
                  <li><input className='mr-1 mb-1' type="checkbox" />Large</li>
                </ul>
            </div>
        </Accordion.Content>

        <Accordion.Title className='d-flex justify-content-between align-items-center'
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <div className='d-flex justify-content-between align-items-center'>
            <img src="/assets/images/dimensions.png" alt="" />Dimensions
          </div>
          <div>
          <img src="/assets/images/arrow-down.png" alt="" />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <div>
            <h6 className='fw-600 mb-1'>SMALL</h6>
            <ul>
              <li><input className='mr-1 mb-1' type="checkbox" />10x8x8</li>
              <li><input className='mr-1 mb-1' type="checkbox" />10x9x9</li>
              <li><input className='mr-1 mb-1' type="checkbox" />10x8x8</li>
              <li><input className='mr-1 mb-1' type="checkbox" />10x9x9</li>
              <li><input className='mr-1 mb-1' type="checkbox" />10x8x8</li>
              <li><input className='mr-1 mb-1' type="checkbox" />10x9x9</li>
            </ul>
            <a className='text-success text-right d-block'>MORE</a>
            </div>
            <div>
              <h6 className='fw-600 mt-2 mb-1'>LARGE</h6>
              <ul>
                <li><input className='mr-1 mb-1' type="checkbox" />10x8x8</li>
                <li><input className='mr-1 mb-1' type="checkbox" />10x9x9</li>
                <li><input className='mr-1 mb-1' type="checkbox" />10x8x8</li>
                <li><input className='mr-1 mb-1' type="checkbox" />10x9x9</li>
                <li><input className='mr-1 mb-1' type="checkbox" />10x8x8</li>
                <li><input className='mr-1 mb-1' type="checkbox" />10x9x9</li>
              </ul>
              <a className='text-success text-right d-block'>MORE</a>
            </div>
        </Accordion.Content>

        <Accordion.Title className='d-flex justify-content-between align-items-center'
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <div className='d-flex justify-content-between align-items-center'>
            <img src="/assets/images/price-range.png" alt="" />Price Range
          </div>
          <div>
          <img src="/assets/images/arrow-down.png" alt="" />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </Accordion.Content>

        <Accordion.Title className='d-flex justify-content-between align-items-center'
          active={activeIndex === 5}
          index={5}
          onClick={this.handleClick}
        >
          <div className='d-flex justify-content-between align-items-center'>
            <img src="/assets/images/amenity.png" alt="" />Amenity
          </div>
          <div>
          <img src="/assets/images/arrow-down.png" alt="" />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}