$(function() {
	$("#NewPhoto").change(function() {
		$("#PhotoForm").ajaxForm({
			target: '#PhotoLoad'
		}).submit();
	});
});

function closeContact() {
	$('div#ContactPopUp').css({"display":"none"});
	$('div#ContactPopUp div.ContactLoad').html("");
};

function material() {
	var name=$('input[name=material]:checked').val();
	$("#material").load("material.php", {material: name});
	document.getElementById('material').style.display='block';
};

function newContact() {
	var Mail=$('input[name=NewEmailAction]').val();
	var textNo='Проверьте правильность ввода эл.почты. На него прийдет сообщение с промо-кодом на скидку!';
	var textYes='На эл. почту '+Mail+' было отправлено сообщение с промо-кодом на скидку. Для того, чтобы его активировать, укажите ваш промо-код при оформлении заказа на сайте.';
	var textYesEmail='На эл. почту '+Mail+' промо-код уже отправляли!';
	if (!~Mail.indexOf("@")){
		$('div#actMessage').css({"display":"block"});
		$('div.message').text(textNo);
	} else {
		$.ajax({
			url:'../script/sale.php',
			type:'POST',
			dataType: 'json',
			data: {email: Mail, treat: 'add'},
			success: function(a) {
				var rezult=+jQuery.parseJSON(a);
				if (rezult==0) {
					$('div#actMessage').css({"display":"block"});
					$('div.message').text(textYesEmail);
				} else if (rezult==1) {
					$('div#actMessage').css({"display":"block"});
					$('div.message').text(textYes);
				};}
			});
	};
	var Name='Запрос на скидку';
	$.ajax({
		url:'../script/activ.php',
		type:'POST',
		data: {name: Name},
		success: function() {}
	});
};

function NameMaterial(a) {
	var nameMaterial=$('input[name=material]:checked').val();
	var name=$('input[name=SelectMaterial]:checked').val();
	$.ajax({
		url:'../script/imgPaint.php',
		type:'POST',
		data: {id: a},
		success: function(c) {var img=jQuery.parseJSON(c); document.getElementById('memorial').style.background='url('+img+')'; document.getElementById('podst').style.background='url('+img+')';}
	});
	$.ajax({
		url:'../script/calc.php',
		type:'POST',
		data: {id: a, table: 'products'},
		success: function(c) {var price=jQuery.parseJSON(c); $("div.MaterialPrice").text(price); calc();}
	});
	if (nameMaterial=='granit') {
		document.getElementById('NameGraniteSelect').innerHTML='"'+name+'"';
		document.getElementById('NameMramorSelect').innerHTML='';
		document.getElementById('material').innerHTML='';
		document.getElementById('material').style.display='none';
	} else if (nameMaterial=='mramor') {
		document.getElementById('NameMramorSelect').innerHTML='"'+name+'"';
		document.getElementById('NameGraniteSelect').innerHTML='';
		document.getElementById('material').innerHTML='';
		document.getElementById('material').style.display='none';
	};
};

function Rasp() {
	var name=$('input[name=rasp]:checked').val();
	var size=$('select#SizeStone').val();
	$("#TypeFigure").load("model.php", {model: name});
	$("#size").load("size.php", {rasp: name, size: size});
	document.getElementById('TypeFigure').style.display='block';
};

function model() {
	var name=$('input[name=rasp]:checked').val();
	$("#TypeFigure").load("model.php", {model: name});
	document.getElementById('TypeFigure').style.display='block';
};

function NameFigure(a) {
	var name=$('input[name=SelectFigure]:checked').val();
	$.ajax({
		url:'../script/imgPaint.php',
		type:'POST',
		data: {id: a},
		success: function(c) {var img=jQuery.parseJSON(c); document.getElementById('FigureFon').innerHTML='<img src="'+img+'">';}
	});
	$.ajax({
		url:'../script/calc.php',
		type:'POST',
		data: {id: a, table: 'products'},
		success: function(c) {var price=jQuery.parseJSON(c); $("div.ModelPrice").text(price); calc();}
	});
	document.getElementById('NameFigureSelect').innerHTML=name+'&nbsp;&nbsp;<span onclick="document.getElementById(\'TypeFigure\').style.display=\'block\';" style="display: inline-block; color: #880000; text-decoration: underline; cursor: pointer;">Изменить</span>';
	document.getElementById('TypeFigure').style.display='none';
};

function divPortret() {
	$("#TypePortait").load("portret.php");
	document.getElementById('TypePortait').style.display='block';
	document.getElementById('photo').style.display='block';
};

function NamePortrait(a) {
	var name=$('input[name=SelectPortrait]:checked').val();
	$("#TypePortait").load("TypePortret.php", {id: a, name: name});
};

function TypePortrait(a, b) {
	var name=$('input[name=SelectPortrait]:checked').val();
	if(a=='8') {
		$("div#imgLoad img").css("border", "none");
		$("div#imgLoad img").css({"filter":"grayscale(100%)", "border":"none", "border-radius":"0"});
		$("div#imgLoad").css({"width":"120px","height":"160px"});
	} else if (a=='9') {
		$("div#imgLoad img").css({"filter":"grayscale(100%)", "border":"none", "border-radius":"0", "border":"3px inset #ababab"});
		$("div#imgLoad").css({"width":"120px","height":"160px"});
	} else if (a=='10') {
		if (~name.indexOf("17")) {
			$("div#imgLoad").css({"width":"68px","height":"88px"});
		} else if (~name.indexOf("21")) {
			$("div#imgLoad").css({"width":"84px","height":"108px"});
		} else if (~name.indexOf("20")) {
			$("div#imgLoad").css({"width":"80px","height":"120px"});
		};
		if (~name.indexOf("Овал")) {
			$("div#imgLoad img").css({"border":"none","border-radius":"50%"});
			if (~name.indexOf("цв")) {
				$("div#imgLoad img").css({"filter":"none"});
			} else {
				$("div#imgLoad img").css({"filter":"grayscale(100%)"});
			};
		} else {
			$("div#imgLoad img").css({"border":"none","border-radius":"10px"});
			if (~name.indexOf("цв")) {
				$("div#imgLoad img").css({"filter":"none"});
			} else {
				$("div#imgLoad img").css({"filter":"grayscale(100%)"});
			};
		};
	};
	$.ajax({
		url:'../script/calc.php',
		type:'POST',
		data: {id: b, table: 'products'},
		success: function(c) {var price=jQuery.parseJSON(c); $("div.PortretPrice").text(price); calc();}
	});
	document.getElementById('NamePortraitSelect').innerHTML=': '+name;
	document.getElementById('TypePortait').style.display='none';
	document.getElementById('imgLoad').style.display='block';
};

function CheckedPortraitNone(){
	$('input[name=SelectPortrait]').prop('checked', false);
	document.getElementById('TypePortait').style.display='none';
	document.getElementById('TypePortait').innerHTML='';
	document.getElementById('NamePortraitSelect').innerHTML='';
	document.getElementById('photo').style.display='none';
	document.getElementById('imgLoad').style.display='none';
	$("div.PortretPrice").text(0);
	calc();
};

function SizeStoneFunc() {
	var size=$("#SizeStone").val();
	$.ajax({
		url:'../script/Size.php',
		type:'POST',
		dataType: 'json',
		data: {id: size},
		success: function(data) {
			var width=$.parseJSON(data.Whidth); 
			var height=$.parseJSON(data.Height);
			var width=width*4; 
			var height=height*4;
			document.getElementById('memorial').style.width=width+"px";
			document.getElementById('memorial').style.height=height+"px";
			document.getElementById('podst').style.width=width+40+"px";
		}
	});
	$.ajax({
		url:'../script/calc.php',
		type:'POST',
		dataType: 'json',
		data: {id: size, table: 'size'},
		success: function(data) {
			var coef=jQuery.parseJSON(data.a); 
			var a=+jQuery.parseJSON(data.b); 
			var b=+jQuery.parseJSON(data.c); 
			var c=+jQuery.parseJSON(data.d); 
			var size=(a*b*c);
			$("div.SizePrice").text(size); 
			$("div.CoefPrice").text(coef); 
			calc();}
		});
};

function FlowSize() {
	$("#Flow").load("flow.php");
	document.getElementById('Flow').style.display='block';
};

function FlowSelect(a) {
	$.ajax({
		url:'../script/calc.php',
		type:'POST',
		dataType: 'json',
		data: {id: a, table: 'size'},
		success: function(data) {
			var a=+jQuery.parseJSON(data.b); 
			var b=+jQuery.parseJSON(data.c);
			var c=+jQuery.parseJSON(data.d);
			var d=+($("div#podst").width()/400)
			var size=((a*b*c)*2)+(d*b*c);
			$("span#FlowName").text(": "+(a*100)+"*"+(b*100)+"*"+(c*100)); 
			$("div.Flow").text(size); 
			calc();}
		});
	document.getElementById('Flow').style.display='none';
	document.getElementById('Flow').innerHTML='';
};

function FlowSizeNone() {
	document.getElementById('Flow').style.display='none';
	$("div.Flow").text(0);
	$("span#FlowName").text(""); 
	calc();
};

function fontName() {
	var name=$("#FontStyleName").val();
	if (name=='timesbd'){
		document.getElementById('FontStyleName').style.fontSize='27px';
		document.getElementById('NameLoadSpan').style.fontSize='27px';
		document.getElementById('NameLoad').style.fontSize='22px';
	} else if (name=='timesbi'){
		document.getElementById('FontStyleName').style.fontSize='26px';
		document.getElementById('NameLoadSpan').style.fontSize='26px';
		document.getElementById('NameLoad').style.fontSize='21px';
	} else if (name=='cyrillicold'){
		document.getElementById('FontStyleName').style.fontSize='28px';
		document.getElementById('NameLoadSpan').style.fontSize='28px';
		document.getElementById('NameLoad').style.fontSize='23px';
	} else if (name=='arialbd'){
		document.getElementById('FontStyleName').style.fontSize='24px';
		document.getElementById('NameLoadSpan').style.fontSize='24px';
		document.getElementById('NameLoad').style.fontSize='19px';
	} else if (name=='Academy'){
		document.getElementById('FontStyleName').style.fontSize='30px';
		document.getElementById('NameLoadSpan').style.fontSize='30px';
		document.getElementById('NameLoad').style.fontSize='25px';
	} else if (name=='anastasia'){
		document.getElementById('FontStyleName').style.fontSize='30px';
		document.getElementById('NameLoadSpan').style.fontSize='30px';
		document.getElementById('NameLoad').style.fontSize='25px';
	} else if (name=='asessor'){
		document.getElementById('FontStyleName').style.fontSize='30px';
		document.getElementById('NameLoadSpan').style.fontSize='30px';
		document.getElementById('NameLoad').style.fontSize='25px';
	} else if (name=='carolina'){
		document.getElementById('FontStyleName').style.fontSize='31px';
		document.getElementById('NameLoadSpan').style.fontSize='31px';
		document.getElementById('NameLoad').style.fontSize='26px';
	};
	document.getElementById('FontStyleName').style.fontFamily=name;
	document.getElementById('NameLoad').style.fontFamily=name;
};

function fontDate() {
	var name=$("#FontStyleDate").val();
	if (name=='timesbd'){
		document.getElementById('FontStyleDate').style.fontSize='27px';
		document.getElementById('DateLoad').style.fontSize='27px';
	} else if (name=='timesbi'){
		document.getElementById('FontStyleDate').style.fontSize='27px';
		document.getElementById('DateLoad').style.fontSize='27px';
	} else if (name=='cyrillicold'){
		document.getElementById('FontStyleDate').style.fontSize='28px';
		document.getElementById('DateLoad').style.fontSize='28px';
	} else if (name=='arialbd'){
		document.getElementById('FontStyleDate').style.fontSize='24px';
		document.getElementById('DateLoad').style.fontSize='24px';
	} else if (name=='Academy'){
		document.getElementById('FontStyleDate').style.fontSize='29px';
		document.getElementById('DateLoad').style.fontSize='29px';
	} else if (name=='anastasia'){
		document.getElementById('FontStyleDate').style.fontSize='33px';
		document.getElementById('DateLoad').style.fontSize='33px';
	} else if (name=='asessor'){
		document.getElementById('FontStyleDate').style.fontSize='30px';
		document.getElementById('DateLoad').style.fontSize='30px';
	} else if (name=='carolina'){
		document.getElementById('FontStyleDate').style.fontSize='32px';
		document.getElementById('DateLoad').style.fontSize='32px';
	};
	document.getElementById('FontStyleDate').style.fontFamily=name;
	document.getElementById('DateLoad').style.fontFamily=name;
};

function fontEpit() {
	var name=$("#FontStyleEpit").val();
	if (name=='timesbd'){
		document.getElementById('FontStyleEpit').style.fontSize='27px';
		document.getElementById('EpitLoad').style.fontSize='19px';
	} else if (name=='timesbi'){
		document.getElementById('FontStyleEpit').style.fontSize='26px';
		document.getElementById('EpitLoad').style.fontSize='18px';
	} else if (name=='cyrillicold'){
		document.getElementById('FontStyleEpit').style.fontSize='28px';
		document.getElementById('EpitLoad').style.fontSize='20px';
	} else if (name=='arialbd'){
		document.getElementById('FontStyleEpit').style.fontSize='24px';
		document.getElementById('EpitLoad').style.fontSize='16px';
	} else if (name=='Academy'){
		document.getElementById('FontStyleEpit').style.fontSize='30px';
		document.getElementById('EpitLoad').style.fontSize='22px';
	} else if (name=='anastasia'){
		document.getElementById('FontStyleEpit').style.fontSize='30px';
		document.getElementById('EpitLoad').style.fontSize='22px';
	} else if (name=='asessor'){
		document.getElementById('FontStyleEpit').style.fontSize='30px';
		document.getElementById('EpitLoad').style.fontSize='22px';
	} else if (name=='carolina'){
		document.getElementById('FontStyleEpit').style.fontSize='31px';
		document.getElementById('EpitLoad').style.fontSize='23px';
	};
	document.getElementById('FontStyleEpit').style.fontFamily=name;
	document.getElementById('EpitLoad').style.fontFamily=name;
};

function NameLoadFonts() {
	var name=$("#NameDeceased").val();
	var name=name.replace(/^(.+?\s)/, '<span id="NameLoadSpan">$1</span><br>');
	document.getElementById('NameLoad').innerHTML=name;
	calc();
};

function DateLoadFonts(){
	var name=$("#DateDeceased").val();
	var name=name.replace('-',' ');
	var name=name.replace(/^(.+?\s)/,'$1<br>');
	document.getElementById('DateLoad').innerHTML=name;
	calc();
};

function EpitLoadFonts(){
	var name=$("#EpitDeceased").val();
	document.getElementById('EpitLoad').innerHTML=name;
	calc();
};

function StatusOrder() {
	var order=$('input[name=NameOrderSearch]').val();
	$("#ContentStatusOrderLoad").load("../script/SOrder.php", {order: order});
	document.getElementById('StatusOrder').style.display='block';
};

function NewOrder() {
	var Granite=$("#NameGraniteSelect").text(); 
	var Mramor=$("#NameMramorSelect").text(); 
	if (Granite.length>0) {
		Granite=Granite.replace(/"/g, "");
		$("div#ActOrder span.stone").text(Granite);
	} else if (Mramor.length>0) {
		Mramor=Mramor.replace(/"/g, "");
		$("div#ActOrder span.stone").text(Mramor);
	}; 

	var NameModel=$("#NameFigureSelect").text(),
	NameModel=NameModel.replace(/(\d)\s\s(\W*)/g, '$1');
	$("div#ActOrder span.model").text(NameModel);

	var Size = document.getElementById("SizeStone"),
	Size=Size.options[Size.selectedIndex].text;
	$("div#ActOrder span.size").text(Size);

	var imgPortret=$("#PhotoLoad").html();
	if (imgPortret.length==0) {
		var imgPortret="Фото не выбрано!";
	};

	var portret=$("#NamePortraitSelect").text();
	if (portret.length>0) {
		var portret=portret.replace(": ", "");
		$("div#ActOrder span.portret").html(portret+"<br>"+imgPortret);
	} else {
		$("div#ActOrder span.portret").text("Нет");
	};

	var name=$("input[name=NameDeceased]").val();
	if (name.length>0) {
		$("div#ActOrder span.name").text(name);
	} else {
		$("div#ActOrder span.name").text('Вы не указали данные!');
	};

	var date=$("input[name=DateDeceased]").val();
	if (date.length>0) {
		$("div#ActOrder span.date").text(date);
	} else {
		$("div#ActOrder span.date").text('Вы не указали даты!');
	};

	var epit=$("input[name=EpitDeceased]").val();
	if (epit.length>0) {
		$("div#ActOrder span.epit").text(epit);
	} else {
		$("div#ActOrder span.epit").text('Вы не написали эпитафий!');
	};

	var flow=$("span#FlowName").text();
	if (flow.length>0) {
		var flow=flow.replace(": ", "");
		$("div#ActOrder span.flow").text(flow);
	} else {
		$("div#ActOrder span.flow").text("Нет");
	};
	var sale=+$("span.sale").text()/100;
	var summ=$("span.calcSumm").text(),
	summ=summ.replace(" ", ""),
	summ=+summ*(1-sale),
	summ=accounting.formatNumber(summ, 0, " ", ",");
	$("div#ActOrder span.summ").text(summ);
	document.getElementById('ActOrder').style.display='block';
	var TreatName='Оформление заказа';
	$.ajax({
		url:'../script/activ.php',
		type:'POST',
		data: {name: TreatName},
		success: function() {}
	});
};

function ActSale() {
	kod=$("div.coupon input[name=SaleCoupon]").val();
	$.ajax({
		url:'../script/sale.php',
		type:'POST',
		dataType: 'json',
		data: {kod: kod, treat: 'action'},
		success: function(data) {
			var a=jQuery.parseJSON(data.a); 
			var b=+jQuery.parseJSON(data.b);
			if (b==0) {
				var c="Ваша скидка активирована!"
			} else if (b==1) {
				var c="Не верный промо-код!"
			} else if (b==2) {
				var c="Вы уже воспользовались скидкой!"
			};
			$("div.coupon span.RezultSale").text(c); 
			$("span.sale").text(a);
			NewOrder();}
		});
};

function AddOrder() {
	var stone=$("div#ActOrder span.stone").text();
	var model=$("div#ActOrder span.model").text();
	var size=$("div#ActOrder span.size").text();
	var portret=$("#NamePortraitSelect").text();
	portret=portret.replace(": ", "");
	var imgPortret=$("#PhotoLoad").html();
	var name=$("input[name=NameDeceased]").val();
	var nameFont=$("#FontStyleName").val();
	var date=$("input[name=DateDeceased]").val();
	var dateFont=$("#FontStyleDate").val();
	var epit=$("input[name=EpitDeceased]").val();
	var epitFont=$("#FontStyleEpit").val();
	var flow=$("div#ActOrder span.flow").text();
	var PromoRezult=+$("span.sale").text();
	if (PromoRezult>0) {
		var promo=$("div.coupon input[name=SaleCoupon]").val();
	} else {
		var promo=0;
	};
	var summ=$("div#ActOrder span.summ").text(),
	summ=summ.replace(" ", "");
	var EmailZakaz=$("input[name=EmailOrder]").val();
	var nameZakaz=$("input[name=nameZakaz]").val();
	var phoneZakaz=$("input[name=phoneZakaz]").val();
	if (nameZakaz.length<3) {
		alert('Вы не указали как к Вам обращаться!');
	} else {
		if (!~EmailZakaz.indexOf("@")) {
			alert('Проверьте правильность ввода e-mail');
		} else {
			if (phoneZakaz.length<11) {
				alert('Введите номер телефона в формате: 89534153277');
			} else {
				$.ajax({
					url:'../script/neworder.php',
					type:'POST',
					data: {stone: stone, model: model, size: size, portret: portret, imgPortret: imgPortret, name: name, nameFont: nameFont, date: date, dateFont: dateFont, epit: epit, epitFont: epitFont, flow: flow, promo: promo, summ: summ, nameZakaz: nameZakaz, phoneZakaz: phoneZakaz, EmailZakaz: EmailZakaz},
					success: function() {
						var text='Ваш заказ был отправлен на обработку!<br>В ближайшее время с Вами свяжется наш менеджер для уточнения информации по указанному номеру телефона.<br><center><input type="button" value="Ок" onclick="document.getElementById(\'ActOrder\').style.display=\'none\';location.reload();"></center>';
						$("div#ActOrder input[type='button']").css('display', 'none');
						$("div#ActOrder div.close").css('display', 'none');
						$("div#ActOrder div.order").html(text);
					}
				});
			};
		};
	};
};

	function contact(a) {
		$("div.ContactLoad").load("script/contact.php", {id: a});
		document.getElementById('ContactPopUp').style.display='block';
	};

	function AddComment() {
		var NameComment=$("input[name=NameComment]").val();
		var EmailComment=$("input[name=EmailComment]").val();
		var CityComment=$("input[name=CityComment]").val();
		var TextComment=$("textarea[name=TextComment]").val();
		if (NameComment.length<3) {
			alert('Вы не указали как к Вам обращаться!');
		} else {
			if (!~EmailComment.indexOf("@")||!~EmailComment.indexOf(".ru")) {
				alert('Вы не правильно указали Ваш E-Mail адрес!');
			} else {
				if (TextComment.length<10) {
					alert('Вы слишком мало написали! Напишите еще что-нибудь!');
				} else {
					$.ajax({
						url:'../script/newcomment.php',
						type:'POST',
						data: {NameComment: NameComment, EmailComment: EmailComment, CityComment: CityComment, TextComment: TextComment},
						success: function() {
							$("span.NameCommentLoad").text(NameComment);
							var TextComment=$("textarea[name=TextComment]").val('');
							document.getElementById('CommentPopUp').style.display='none';
							document.getElementById('CommentPopUpAdd').style.display='block';	
						}
					});
				};
			};
		};
	};