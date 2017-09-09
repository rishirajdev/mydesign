import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('search',{path: '/'});
  this.route('landing-page',{path: '/login'});
  this.route('search-result');
  this.route('profile-page');
  this.route('company-page');
});

export default Router;
