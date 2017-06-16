function QuizFormController() {
  this.newForm = {
    name: '',
    class: '',
    dateCreated: new Date(),
    questionsList: [],
  };
  this.questionProps = {
    questionType: 'text',
    options: []
  };
  this.addQuestion = function(questionProps) {
    this.newForm.questionsList.push(angular.copy(questionProps));
    this.questionProps = {
      questionType: 'text',
      options: []
    };
  }

  this.optionItem = '';
  this.addOption = function(value) {
    this.questionProps.options.push(value);
    this.optionItem = null;
  }

  this.removeOption = function(index) {
    this.questionProps.options.splice(index, 1);
  }
}


angular.module('quizForm', []).
  component('quizForm', {
    templateUrl: 'quiz-form/quiz-form.template.html',
    controller: QuizFormController,
  });
