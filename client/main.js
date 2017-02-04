import angular from 'angular';
import angularMeteor from 'angular-meteor';
import raceList from '../imports/components/raceList/raceList';

 
angular.module('race-list', [
  angularMeteor,
  raceList.name
]);