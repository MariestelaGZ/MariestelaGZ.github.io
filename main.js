let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Sitios web, apps y UX con magia.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
