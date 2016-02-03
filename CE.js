var RANK = 0, SUIT = 1, IMAGE = 2;
var THREE = 1, JACK = 9, QUEEN = 10, KING = 11,ACE = 12, TWO = 13;
var DIAMOND = 0, CLUB = 1, HEART = 2, SPADE = 3;
//	RankArray = ["","","","","","","","","","",""]
function genDeck()
{
	var deck = new Array();
	//"4;0;4-0.png" delimiter
	for(x = THREE; x <= TWO;x++)
	{
		for(i = DIAMOND; i <= SPADE; i++)
		{
			cardStr = x + ";" + i + ";" + x + "-" + i;
			deck.push(cardStr);
		}
	}
	return deck;
}
function getImageThing(cardStr, dataIndex)
{
	arrayStr = cardStr.split(";");
	return arrayStr[dataIndex];
}
function shuttleIt(deck)
{
	var newDeck = new Array();
	while(deck.length > 0)
	{
		random = parseInt(Math.random()*deck.length);
		removedCardo = removeCardo(deck, random)
		newDeck.push(removedCardo);
	}
	return newDeck;
}
function removeCardo(deck, idx)
{
	var removed = deck.splice(idx, 1);
	return removed[0];
}
function dealCardo(deck)
{
	return removeCardo(deck, 0)
}
function insertCardo(deck, card, idx)
{
	if(!idx)
	{
		idx = 0;
	}
	deck.splice(idx, 0, card);
}












