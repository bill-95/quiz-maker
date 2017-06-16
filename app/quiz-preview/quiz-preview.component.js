function QuizPreviewController(Quiz) {

}

angular.module('quizPreview').component('quizPreview', {
    templateUrl: 'quiz-preview/quiz-preview.template.html',
    controller: ['Quiz', QuizPreviewController]
  });
