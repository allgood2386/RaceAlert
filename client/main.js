import angular from 'angular';
import angularMeteor from 'angular-meteor';
import raceList from '../imports/components/raceList/raceList';
import '../imports/startup/accounts-config.js';

 
angular.module('race-list', [
  angularMeteor,
  raceList.name,
  'accounts.ui'
]);