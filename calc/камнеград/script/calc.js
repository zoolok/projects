function calc() {
	var PriceStone=+$("div.MaterialPrice").text();
	var PriceModel=+$("div.ModelPrice").text();
	var Size=+$("div.SizePrice").text();
	var Coef=+$("div.CoefPrice").text();
	var Podst=+($("div#podst").width()/400);
	var Portret=+$("div.PortretPrice").text();
	var QuantPortret=+$("div.QuantPortret").text();
	var Signs=+$("div.SignsPrice").text();
	var NameSigns=$("#NameLoad").text();
	var NameSigns=NameSigns.replace(/ /g,'');
	var NameSigns=NameSigns.length;
	var DateSigns=$("#DateLoad").text();
	var DateSigns=DateSigns.replace(/ /g,'');
	var DateSigns=DateSigns.length;
	var EpitSigns=$("#EpitLoad").text();
	var EpitSigns=EpitSigns.replace(/ /g,'');
	var EpitSigns=EpitSigns.length;
	var flow=+$("div.Flow").text();
	var summ=(PriceStone*Size)+(PriceModel*Coef)+((Podst*0.2*0.15)*PriceStone)+(Portret*QuantPortret)+(Signs*(NameSigns+DateSigns+EpitSigns))+(flow*PriceStone);
	var summ=accounting.formatNumber(summ, 0, " ", ",");
	$("span.calcSumm").text(summ);
};

var PriceStone=+$("div.MaterialPrice").text();
var PriceModel=+$("div.ModelPrice").text();
var Size=+$("div.SizePrice").text();
var Coef=+$("div.CoefPrice").text();
var Podst=+($("div#podst").width()/400)*0.2*0.15;
var Portret=+$("div.PortretPrice").text();
var QuantPortret=+$("div.QuantPortret").text();
var Signs=+$("div.SignsPrice").text();
var NameSigns=$("#NameLoad").text();
var NameSigns=NameSigns.replace(/ /g,'');
var NameSigns=NameSigns.length;
var DateSigns=$("#DateLoad").text();
var DateSigns=DateSigns.replace(/ /g,'');
var DateSigns=DateSigns.length;
var EpitSigns=$("#EpitLoad").text();
var EpitSigns=EpitSigns.replace(/ /g,'');
var EpitSigns=EpitSigns.length;
var summ=(PriceStone*Size)+(PriceModel*Coef)+(Podst*PriceStone)+(Portret*QuantPortret)+(Signs*(NameSigns+DateSigns+EpitSigns));
var summ=accounting.formatNumber(summ, 0, " ", ",");
$("span.calcSumm").text(summ);
