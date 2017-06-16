function Quiz() {
  var quizProps = {
    name: '',
    class: '',
    questionsList: []
  };

  return {
    setName: function(value) {
      quizProps.name = value;
    },
    setClass: function(value) {
      quizProps.class = value;
    },
    getName: function() {
      return quizProps.name;
    },
    getClass: function() {
      return quizProps.class;
    },
    getProps: function() {
      return quizProps;
    },
    addQuestion: function(value) {
      quizProps.questionsList.push(value);
    }
  }
}

angular.module('core.quiz').factory('Quiz', Quiz);
