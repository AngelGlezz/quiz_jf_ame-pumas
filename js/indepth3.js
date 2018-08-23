var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;

function countMaxValue(array_elements) {

	var maxValue = 0;
	var maxNum = -1;

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                
                if(cnt > maxValue ){
                	maxValue = cnt;
                	maxNum = current;
                }
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        if(cnt > maxValue ){
           maxNum = current;
        }
    }

    return maxNum;

}

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "¿Cada cuándo te bañas?",
				      "respuestas": [
				        {
				          "respuesta": "Cada que llevan la pipa a la colonia",
				          "tipo": "america"
				        },
				        {
				          "respuesta": "¿Bañarse, eso qué es?",
				          "tipo": "pumas"
				        },
				        {
				          "respuesta": "Diario, no hay pretexto para no hacerlo",
				          "tipo": "neutro"
				        },
				      ]
				    },
				    {
				      "pregunta": "Ves una pluma en un escritorio, ¿qué haces?",
				      "respuestas": [
				        {
				          "respuesta": "Pregunto de quién es, seguro el dueño está preocupado",
				          "tipo": "neutro"
				        },
				        {
				          "respuesta": "Me la llevo, total nadie la va a reclamar",
				          "tipo": "america"
				        },
				        {
				          "respuesta": "La utilizo para poder cuestionar por qué existimos, qué hacemos aquí",
				          "tipo": "pumas"
				        }
				      ]
				    },
				    {
				      "pregunta": "Dos personas se están peleando en la calle. Tú…",
				      "respuestas": [
				      	{
				          "respuesta": "Culpas a la mafia del poder por influir en las personas",
				          "tipo": "pumas"
				        },
				        {
				          "respuesta": "Te metes a la bronca, tu barrio te respalda y haces justicia",
				          "tipo": "america"
				        },
				        {
				          "respuesta": "No te metes y dejas que arreglen sus asuntos",
				          "tipo": "neutro"
				        }
				      ]
				    },
				    {
				      "pregunta": "No hiciste tu parte de la exposición y te acuerdas llegando a la escuela…",
				      "respuestas": [
				      	{
				          "respuesta": "Asumo mi responsabilidad y hablo con los maestros. Seguro entenderán",
				          "tipo": "neutro"
				        },
				        {
				          "respuesta": "Le robo la presentación a alguien más. El que no tranza no avanza.",
				          "tipo": "america"
				        },
				        {
				          "respuesta": "Me aviento algún choro filosófico en plena exposición, las palabras domingueras no fallan",
				          "tipo": "pumas"
				        }
				      ]
				    },
				    {
				      "pregunta": "Vas en el transporte público y te asaltan, ¿qué haces?",
				      "respuestas": [
				        {
				          "respuesta": "Digo que también me llamo El Brayan y me salvo",
				          "tipo": "america"
				        },
				        {
				          "respuesta": "Me quedé sin nada. Lo importante es que hay salud",
				          "tipo": "neutro"
				        },
				        {
				          "respuesta": "Empiezo a decirle de cosas y me rifo un tiro, a ver qué sale",
				          "tipo": "pumas"
				        }
				      ]
				    },
				    {
				      "pregunta": "Tienes una boda y ese día juega tu equipo, tú…",
				      "respuestas": [
				      	{
				          "respuesta": "Me pongo la playera abajo, esa que uso sin lavar porque es la de la suerte",
				          "tipo": "pumas"
				        },
				        {
				          "respuesta": "Llego a comer y después me voy. Qué oso que la boda no sea en el estadio",
				          "tipo": "america"
				        },
				        {
				          "respuesta": "La familia es primero, ni modo si hay juego",
				          "tipo": "neutro"
				        }
				      ]
				    },
				    {
				      "pregunta": "Estás con la chava que te gusta, ¿qué haces?",
				      "respuestas": [
				      	{
				          "respuesta": "Aplico los consejos que me dio mi papá",
				          "tipo": "neutro"
				        },
				        {
				          "respuesta": "Gasto todo mi dinero para impresionarla",
				          "tipo": "america"
				        },
				        {
				          "respuesta": "Me voy por algo sencillo. Ni todo el amor ni todo el dinero",
				          "tipo": "pumas"
				        }
				      ]
				    },
				    {
				      "pregunta": "Tienes $500 en tu cartera, ¿qué haces con ellos?",
				      "respuestas": [
				        {
				          "respuesta": "Analizo en qué puedo invertir y me sea redituable",
				          "tipo": "america"
				        },
				        {
				          "respuesta": "Los guardo, capaz los necesito después",
				          "tipo": "neutro"
				        },
				        {
				          "respuesta": "Los gasto en pura tontería",
				          "tipo": "pumas"
				        }
				      ]
				    },
				    {
				      "pregunta": "Tu crush te escribe en WhatsApp, ¿qué le contestas?",
				      "respuestas": [
				        {
				          "respuesta": "No le pongo nada, qué pena",
				          "tipo": "neutro"
				        },
				        {
				          "respuesta": "La invito al 2x1 del cine",
				          "tipo": "pumas"
				        },
				        {
				          "respuesta": "Adorno la combi para sorprenderla",
				          "tipo": "america"
				        }
				      ]
				    },
				    {
				      "pregunta": "Es noche de sexting con tu novia, ¿qué haces?",
				      "respuestas": [
				        {
				          "respuesta": "Empiezo de menos a más. Le reservo siempre lo mejor para el final",
				          "tipo": "america"
				        },
				        {
				          "respuesta": "¿Sexting? ¿Es una nueva serie?",
				          "tipo": "neutro"
				        },
				        {
				          "respuesta": "La emociono pero al final nada de nada",
				          "tipo": "pumas"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+items.tipo+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000); 
		var respuesta = new Array();
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			$(this).addClass("select");
			respuesta.push(respuesta_num);
			console.log(respuesta);
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
				
				if(respuesta.length == preguntas.length){
					var total = countMaxValue(respuesta);
					window.setTimeout(function(){
						finish_test(total);
					});
				}
			return respuesta;
		});
		
		
		
});

function finish_test(total){	
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	var img = total;

	$(".inner").show();
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho,
		"background-image": "url("+urlIndepth+"images/respuestas/" + img + ".jpg)"
	});

  	var msg="";

  	if (total == "america"){
	  	msg="¡Tu corazón está pintado bicolor! Sólo existe América y ya. Pero no me asaltes, plis. Tengo una familia que alimentar";
  	} else if (total == "neutro"){
	  	msg="Sí, muy cool, no le vas ni a Pumas ni América… ¿¡entonces qué hacías contestando esto!? Sal y consíguete una relación, un free o algo";
  	} else if (total == "pumas"){
	  	msg="¡Por tus venas corre la sangre azul y oro! Puede que no te bañes seguido, pero nunca se había visto tanta fidelidad por un equipo desde que Pablo Barrera festejara besando el escudo de todos sus equipos";
  	}
  	
  	$(".indepth_result_container").html(msg);

	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$("#indepth_twittear").click(function(){
  		var text = "";
		if (total == "america") {
			text = encodeURIComponent("¡Tu corazón está pintado bicolor! Sólo existe América y ya. Pero no me asaltes, plis. Tengo una familia que alimentar");
		} else if (total == "neutro") {
			text = encodeURIComponent("Sí, muy cool, no le vas ni a Pumas ni América… ¿¡entonces qué hacías contestando esto!? Sal y consíguete una relación, un free o algo");
		} else if (total == "pumas") {
			text = encodeURIComponent("¡Por tus venas corre la sangre azul y oro! Puede que no te bañes seguido, pero nunca se había visto tanta fidelidad por un equipo desde que Pablo Barrera festejara besando el escudo de todos sus equipos");
		}
		
		var url = encodeURIComponent("http://juanfutbol.com/indepth/de-quien-eres-aficionado-pumas-o-america");
		window.open("https://twitter.com/share?text="+text+"&hashtags=JFQuiz&url="+url,"","width=500, height=300");
	});

	$("#indepth_facebook").click(function(){
		var url = encodeURIComponent("http://juanfutbol.com/indepth/de-quien-eres-aficionado-pumas-o-america?m="+total);
		window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");
	});
}

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	/*$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});*/
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    /*$("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});*/
});


