function QuizFormController($window) {
  // create a new form for creating the quiz
  this.newForm = {
    name: '',
    class: '',
    questionsList: []
  };
  // create a question template
  this.questionProps = {
    questionType: 'textShort',
    options: []
  };
  // let users add questions
  this.addQuestion = function(questionProps) {
    this.newForm.questionsList.push(questionProps);
    this.questionProps = {
      questionType: 'textShort',
      options: []
    };
  }
  // let users add options for MC and CB questions
  this.optionItem = '';
  this.addOption = function(value) {
    this.questionProps.options.push(value);
    this.optionItem = null;
  }
  // let users remove options for MC and CB questions
  this.removeOption = function(index) {
    this.questionProps.options.splice(index, 1);
  }
  // let users save their quiz
  this.printQuiz = function() {
    $window.print();
  };
}

// component for quiz form
angular.module('quizForm').
  component('quizForm', {
    templateUrl: 'quiz-form/quiz-form.template.html',
    controller: ['$window', QuizFormController],
  });
