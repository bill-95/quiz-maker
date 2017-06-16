describe('quizForm', function() {
  beforeEach(module('quizForm'));
  describe('QuizFormController', function() {
    beforeEach(function() {
      inject(function())
    });
    it('should create a blank newForm object', inject(function($componentController) {
      var ctrl = $componentController('quizForm');

      expect(ctrl.newForm.name).toBe('');
      expect(ctrl.newForm.class).toBe('');
      expect(ctrl.newForm.questionsList.length).toBe(0);
    }));

    it('should create a blank newForm object', inject(function($componentController) {
      var ctrl = $componentController('quizForm');
      var testQuestion = {
        questionType: "text",
        options: [],
        questionText: "Question 1"
      }
      ctrl.addQuestion(testQuestion)
      expect(ctrl.newForm.questionsList.length).toBe(1);
    }));

  });
});
