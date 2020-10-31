import displayJoke from './displayNewJoke';
import displayPunchline from './displayPunchline';

const jokeView = () => {
  $('#app').html('');
  $('#app').html(`<div class="card" style="width: 150%;">
  <div class="card-body">
    <h5 class="card-title">Joke Generator</h5>
    <p class="card-text" id="newJoke"></p>
    <p class="card-text" id="punchline"></p>
    <a id="newJokebtn" href="#" class="btn btn-warning">New Joke</a>
    <a id="punchlineBtn" href="#" class="btn btn-info">Punchline</a>
  </div>
</div>`);

  $('#newJokebtn').on('click', () => {
    displayJoke.displayNewJoke();
  });

  $('#punchlineBtn').on('click', () => {
    displayPunchline.displayPunchline();
  });
};

export default { jokeView };
