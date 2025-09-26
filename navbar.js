document.addEventListener('DOMContentLoaded', function() {
  const pageMap = {
    HomePage: 'HomePage.html',
    MealPlans: 'MenuPage.html',
    DietPlans: 'ActivitiesPage.html',
    Calculator: 'BMI.html',
    ProfilePage: 'ProfilePage.html'
  };

  document.querySelectorAll('nav a[data-page]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      if (pageMap[page]) {
        window.location.href = pageMap[page];
      }
    });
  });
});