angular.module('formMaker').controller('FormController', function($scope) {
  this.newForm = {
    name: '',
    author: '',
    dateCreated: new Date(),
    questionsList: [],
  };
  this.questionProps = {
    options: []
  };
  this.addQuestion = function(questionProps) {
    this.newForm.questionsList.push(angular.copy(questionProps));
    this.questionProps = {options: []};
  }

  this.optionItem = '';
  this.addOption = function(value) {
    this.questionProps.options.push(value);
    this.optionItem = null;
  }
});
