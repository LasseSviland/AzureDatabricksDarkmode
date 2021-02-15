const updateDarkMode = () => {
  classList = document.getElementsByTagName("body")[0].classList;
  if (!classList.contains("dark-mode")) {
    classList.add("dark-mode");
  }
  classList.remove("light-mode");
};
updateDarkMode();
setTimeout(updateDarkMode, 10);
setTimeout(updateDarkMode, 20);
setTimeout(updateDarkMode, 50);
setTimeout(updateDarkMode, 100);
setTimeout(updateDarkMode, 500);
setTimeout(updateDarkMode, 1000);
setTimeout(updateDarkMode, 5000);
