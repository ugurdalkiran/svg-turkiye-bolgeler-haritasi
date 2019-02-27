$(function(){

	$(".haritaGenel path").hover(function(){

		$(".bolge-isimleri").html("<div>" + $(this).parent().data("bolgeadi") + "</div>");

		$(this).on("mousemove", function(event){

			let ned = $('.haritaGenel').offset();

			$(".bolge-isimleri").css("top", (event.pageY - ned.top + 14));
			$(".bolge-isimleri").css("left", (event.pageX - ned.left + 14));

		});

	},function(){ $(".bolge-isimleri").html(""); });

	$(".haritaGenel path").on("click", function(event){

		let bolgeadi = $(this).parent().data("bolgeadi");
		console.log(bolgeadi);
		
	});

	let bolgelerJSON = {"Akdeniz B\u00f6lgesi":"Adana, Antalya, Burdur, Hatay, Isparta, Kahramanmara\u015f, Mersin, Osmaniye","Do\u011fu Anadolu B\u00f6lgesi":"A\u011fr\u0131, Ardahan, Bing\u00f6l, Bitlis, Elaz\u0131\u011f, Erzincan, Erzurum, Hakkari, I\u011fd\u0131r, Kars, Malatya, Mu\u015f, Tunceli, Van","Ege B\u00f6lgesi":"Afyonkarahisar, Ayd\u0131n, Denizli, \u0130zmir, K\u00fctahya, Manisa, Mu\u011fla, U\u015fak","G\u00fcneydo\u011fu Anadolu B\u00f6lgesi":"Ad\u0131yaman, Batman, Diyarbak\u0131r, Gaziantep, Mardin, Siirt, \u015eanl\u0131urfa, \u015e\u0131rnak, Kilis","\u0130\u00e7 Anadolu B\u00f6lgesi":"Aksaray, Ankara, \u00c7ank\u0131r\u0131, Eski\u015fehir, Karaman, Kayseri, K\u0131r\u0131kkale, K\u0131r\u015fehir, Konya, Nev\u015fehir, Ni\u011fde, Sivas, Yozgat","Marmara B\u00f6lgesi":"Bal\u0131kesir, Bilecik, Bursa, \u00c7anakkale, Edirne, \u0130stanbul, K\u0131rklareli, Kocaeli, Sakarya, Tekirda\u011f, Yalova","Karadeniz B\u00f6lgesi":"Amasya, Artvin, Bart\u0131n, Bayburt, Bolu, \u00c7orum, D\u00fczce, Giresun, G\u00fcm\u00fc\u015fhane, Karab\u00fck, Kastamonu, Ordu, Rize, Samsun, Sinop, Tokat, Trabzon, Zonguldak"};

});