
let quotes = [
['Be yourself; everyone else is already taken.', 'Oscar Wilde'],
['Be the change that you wish to see in the world.', 'Mahatma Gandhi'],
['In three words I can sum up everything I\'ve learned about life it goes on.', 'Robert Frost'],
['By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.', 'Robert Frost'],
['A man paints with his brains and not with his hands.', 'Michelangelo'],
['Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.', 'Mark Twain'],
['Great minds discuss ideas; average minds discuss events; small minds discuss people.', 'Eleanor Roosevelt'],
['Those who dare to fail miserably can achieve greatly.', 'John F. Kennedy'],
['Our greatest fear should not be of failure… but of succeeding at things in life that don’t really matter.', 'Francis Chan'],
["Stay Hungry. Stay Foolish.", "Steve Jobs"],
["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
["Argue with idiots, and you become an idiot.", "Paul Graham"],
["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
]

const length = quotes.length;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //number excluding length value which returns undefined, 0-x
	}

let rand = getRandomIntInclusive(0, length)

console.log(length)
console.log(quotes[2])
console.log(rand)
console.log(quotes[rand])

let quote = quotes[rand][0]
let author = quotes[rand][1]
console.log(quote)
console.log(author)

function randomQuote(input) {
	$("#random").button().click(function(){
		quote = quotes[rand][0];
		author = quotes[rand][1];
		randColour = "#" + Math.floor(Math.random()*16777215).toString(16);
	});
}

let randColour = "#" + Math.floor(Math.random()*16777215).toString(16);
console.log(randColour)

function tweet() {
	window.open("https://twitter.com/intent/tweet?text=" + $("#text").text() + '"' + " "  + $("#author").text().slice(2)) //remove " -" from tweet

}

function tumble() {
	window.open("https://www.tumblr.com/widgets/share/tool?posttype=quote?.?&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'" + $("#text").text() + '"' + " "  + $("#author").text().slice(2))

}


$(document).ready(function() {
  $("#text").html('"' + quote);
  $("#author").html('- ' + author)
  $("body").css('background-color', randColour)
  $(".card p").css('color', randColour)
  $(".btn-primary").css('background-color', randColour)
  $(".fa-twitter-square").css('color', randColour)
  $(".fa-tumblr-square").css('color', randColour)


  $("#random").click(function(){
  	rand = getRandomIntInclusive(0, length)
		quote = quotes[rand][0];
		author = quotes[rand][1];
		randColour = "#" + Math.floor(Math.random()*16777215).toString(16);
		$('.card p').fadeOut(0);
		$('.card p').fadeIn(400);
		$("#text").html('"' + quote);
    $("#author").html('- ' + author)
    $("body").css('background-color', randColour)
    $(".card p").css('color', randColour)
    $(".btn-primary").css('background-color', randColour)
    $(".fa-twitter-square").css('color', randColour)
		 	$(".fa-tumblr-square").css('color', randColour)
	});
});






//create array of quoutes and authors
//get length of array
//generate a random whole number to use as index that is less than length
//use that number to select a quoute
//return that quoute

//todo: remember current random number and exclude that from next random get