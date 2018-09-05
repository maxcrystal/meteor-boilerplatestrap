import { Meteor } from 'meteor/meteor';
import React from 'react';

// import ReactTestUtils from 'react-dom/test-utils';
import { mount } from 'enzyme';
import should from 'should';
import sinon from 'sinon';
import 'should-sinon';

import { TitleBar } from './../../imports/ui/TitleBar';


if (Meteor.isClient) {

  describe('TitleBar', function() {
    it('should set button text to logout', function() {
      const wrapper = mount(<TitleBar title="Title" handleLogout={() => {}} />);
      wrapper.find('button').text().should.eql('Logout');
    });

    it('should use title prop as bs4 brand', function() {
      const title = 'New Title Brand';
      const wrapper = mount(<TitleBar title={title} handleLogout={() => {}} />);
      wrapper.find('NavbarBrand').text().should.eql(title);
    });

    it('should call handleLogout on click', function() {
      const spy = sinon.spy();
      const wrapper = mount(<TitleBar title="Title" handleLogout={spy} />);

      wrapper.find('button').simulate('click');

      spy.should.be.called();
    });

  });
}

