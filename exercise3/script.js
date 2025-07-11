// Create a website with a div tag containing a random joke given an array of jokes.
// Use Math.random and fetch jokes from the internet. Your website should show a random joke on each reload.
// Min. length of your jokes array should be 10.
const jokesCollection = [
  `I told my wife she should embrace her mistakes. She gave me a hug.`,
  `Why don't eggs tell jokes? They might crack up!`,
  `What did the big flower say to the little flower? "Hi, bud!"`,
  `I went to buy some camouflage pants, but  I couldn't find any.`,
  `What did the grape say when it got stepped on? Nothing, it just let out a little wine.`,
  `Why don't skeletons fight each other? They don't have the guts!`,
  `What did one wall say to the other wall?  I'll meet you at the corner!`,
  `Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink.`,
  `I'm writing a book about glue, but  I'm stuck on the first chapter.`,
  `What did one plate whisper to the other plate? Dinner is on me.`,
  `Stop looking for the perfect match; use a lighter.`,
  `If two vegetarians get in an argument, is it still called beef?`,
  `What happened when the blue ship and the red ship collided at sea? Their crews were marooned.`,
  `What's the difference between the bird flu and the swine flu? One requires tweetment and the other an oinkment.`,
  `What do you call a line of men waiting to get haircuts? A barberqueue.`,
  `Why do seagulls fly over the sea? If they flew over the bay, they would be bagels.`,
  `What did the baby corn say to the mama corn? Where's popcorn?`,
  `What do you call two monkeys who share an Amazon Prime account? Prime mates.`,
  `Did you hear about the claustrophobic astronaut? He just wanted a bit more space.`,
  `I hated facial hair but then it grew on me.`,
];
const joke = document.getElementsByTagName("p")[0];
const button = document.getElementById("btn");
button.addEventListener("click", () => {
  let randomNum = Math.round(Math.random() * jokesCollection.length);
  joke.innerHTML = jokesCollection[randomNum];
});