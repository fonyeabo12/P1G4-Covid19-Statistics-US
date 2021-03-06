/** @format */

const queryURL1 =
	"https://api.covid19api.com/total/country/united-states/status/confirmed";

function ajaxCB(response) {
	
	var cases = $("<p>").css({"text-align": "center", "color": "red"}).text(response[response.length - 1].Cases);

	$("#totalCases").append(cases);
}

$.ajax({
	url: queryURL1,
	method: "GET",
}).then(ajaxCB);

const queryURL2 = "https://energ.ee/covid19-us-api/states.json";

$("#search").on("click", function (event) {
	event.preventDefault();
	$.ajax({
		url: queryURL2,
		method: "GET",
	}).then((data) => {

		const state = $("#input").val();
		const stateData = data[state];
		const currentDate = stateData[stateData.length - 1].date;
		const cases = stateData[stateData.length - 1].confirmed;
		const death = stateData[stateData.length - 1].deaths;

		$("#stateName").empty();
		$("#date").empty();
		$("#stateCases").empty();
		$("#stateDeaths").empty();

		$("#input").val("");

		$("#stateName").append("State: " + state);
		$("#date").append("Current Date: " + currentDate);
		$("#stateCases").append("Total Cases: " + cases);
		$("#stateDeaths").append("Total Deaths: " + death);
	});
});
