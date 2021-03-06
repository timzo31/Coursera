'use strict';

$(document).ready(function () {
	// data-toggle buttons removed as soon as the document is loaded in line 1 & 2.
	$('.btnReserv').removeAttr('data-toggle');
	$('#btnLog').removeAttr('data-toggle');

	// show the reservation modal once the "reserve table" button trigerred
	$('.btnReserv').click(function () {
		$('#reservationModal').modal();
	});

	// shows the login modal once the "login" button is clicked.
	$('#btnLog').click(function () {
		$('#loginModal').modal();
	});
});
