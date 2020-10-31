import jokeData from '../data/jokeData';

const displayNewJoke = () => {
  $('#punchline').html('');

  jokeData.getJoke().then((res) => {
    $('#newJoke').text(res.setup);
    $('#punchline').css('visibility', 'hidden');
    $('#punchline').text(res.punchline);
  });
};

export default { displayNewJoke };
