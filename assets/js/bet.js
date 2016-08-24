function addBet(gameId, homeTeam, awayTeam, price,bet)
{
	var totalPrice = $('#calc').val();
	if($('#selection-' + gameId).length)
	{
		var prevPrice = $('#price-' + gameId).html();
		totalPrice = totalPrice / prevPrice;
		// change the total price
		$('#selection-' + gameId).remove();
	}

	totalPrice = totalPrice * price;
	$('#calc').val(totalPrice);
	$('#winChance').html((totalPrice).toFixed(2));

	$('#winPrice').html((totalPrice * $('#betAmount').val()).toFixed(2));
	$("#selections").append('<li class="selection" id="selection-'+ gameId +'">' +
                        '<span class="remove">X</span>'+
                            '<div class="event-description">' +
                            '<span>'+ homeTeam +'-'+ awayTeam +'</span>' +
                        '</div>' +
                        '<div class="outcome-description" id="price-'+gameId+'">'+ price +'</div>' +
                            '<div class="stake-and-winnings-holder">' +
                            '<div class="potential-winnings">' +
                            	'<span class="formatted_price">'+bet+'</span>' +
                        '</div>' +
                        '</div>' +
                        '<div class="clear"></div>' +
                            '</li>');
}

function betChange()
{
	var totalPrice = $('#winChance').html();
	$('#winChance').html(totalPrice);
	$('#winPrice').html(Math.round(totalPrice * $('#betAmount').val()));
}
