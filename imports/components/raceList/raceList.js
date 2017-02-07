import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Races } from '../../api/races.js';

import template from './raceList.html';
 
class RaceListCtrl {
  constructor($scope) {
    $scope.viewModel(this);
 
    this.helpers({
      races() {
        return Races.find({}, {
          sort: {
            createdAt: -1
          }
        });
      }
    })
  }

  addRace(newRace) {
    console.log(newRace);
      Races.insert({
        raceName: newRace.raceName,
        raceDatetime: newRace.raceDatetime
      });
  
      // Clear form
      this.newRace = '';
  }

  removeRace(race) {
    Races.remove(race._id);
  }
}
 
export default angular.module('raceList', [
  angularMeteor,
])
  .component('raceList', {
    templateUrl: 'imports/components/raceList/raceList.html',
    controller: ['$scope', RaceListCtrl]
  });