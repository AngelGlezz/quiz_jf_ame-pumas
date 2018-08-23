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
				      "pregunta": "1",
				      "respuestas": [
				        {
				          "respuesta": "Solo en casa",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Una buena comida",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Con cervezas y amigos",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "En el cine",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "En el estadio",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "A veces no los veo",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "2",
				      "respuestas": [
				        {
				          "respuesta": "Lo sigo por redes sociales",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Le aviso a todos los invitados como van, lo veo en mi cel",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Llego tarde, ¿¡cómo se le ocurre!?",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Finjo ser despistado, se me olvidó que era hoy",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Invento un pretexto para no herirlo y no voy",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Ni modo después sabré como quedamos",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "3",
				      "respuestas": [
				        {
				          "respuesta": "Me pongo la playera al otro día aún así",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Apago la tele antes de que acabe el partido",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Nada que unas cervezas no puedan arreglar",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Lloro toda la noche",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Me hago el que no lo vi",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "No voy a trabajar o a la escuela el lunes",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "4",
				      "respuestas": [
				        {
				          "respuesta": "Me quedo a ver a mi equipo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Salgo a buscar suerte en el amor",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Nos vamos de fiesta",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "FIFA y otros videojuegos",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Cine con mi novia",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Puro futbol, aunque no sea mi club",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "5",
				      "respuestas": [
				        {
				          "respuesta": "Se lo dedico a mi novia",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "A lo Cantona",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Le agradezco al de la asistencia",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Miro hacia el cielo",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Se lo canto al contrario",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Abrazo con todo el equipo",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "6",
				      "respuestas": [
				        {
				          "respuesta": "Me la paso llorando",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Hay otros peces en el agua",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Salgo de fiesta",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Veo todos los partidos que pueda",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Me distraigo con el FIFA",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Me pongo a leer",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "7",
				      "respuestas": [
				        {
				          "respuesta": "Es mi vida",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Pura dedicación",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Pretexto para divertime",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Es mi afición",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "¡Que nadie se meta con él!",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Me da igual",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "8",
				      "respuestas": [
				        {
				          "respuesta": "Que nací",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Soy villamelón",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Que lo vi campeón",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Yo futbol de Europa",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "No sé ni por qué le voy",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "No le voy a nadie",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "9",
				      "respuestas": [
				        {
				          "respuesta": "No me la creo y hasta lloro",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Obvio, somos los mejores",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Olvido el entorno y festejo como loco",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Festejo con los míos",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Les festejo a todos en la cara",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Los felicito por su buen desempeño",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "10",
				      "respuestas": [
				        {
				          "respuesta": "Acepto la derrota",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Culpo al árbitro",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Publico algo a favor de mi equipo",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Reconozco al rival",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Insulto a todos",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "No las abro",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "11",
				      "respuestas": [
				        {
				          "respuesta": "Nada más el de mi equipo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Los que no interfieran con mis planes",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Yo pura fiesta",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Los que me deje mi novia",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Todos los que pueda",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "A veces ninguno",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "12",
				      "respuestas": [
				        {
				          "respuesta": "Casual aunque quiera usar la de mi club",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Una camiseta fresona, papá",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Medio urbano",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Me quedo en pijama",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Los colores de mi equipo",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Traje conservador",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "13",
				      "respuestas": [
				        {
				          "respuesta": "Prendo las notificaciones en el celular",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Ya sé que vamos a ganar, da igual",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "¿Una cena sin fut? ¿Qué es eso?",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Convenzo a todos de prender la tele",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Hago acto de presencia y me subo fingiendo dolor de estómago",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Siempre hay tiempo para disfrutar a la familia",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "14",
				      "respuestas": [
				        {
				          "respuesta": "Derrota segura",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "¿Quién?, vamos a ganar",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Aunque sea un empate le sacamos",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Será difícil pero no imposible",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Mejor ni veo el partido",
				          "tipo": "false"
				        }
				        ,
				        {
				          "respuesta": "Lo importante es divertirse",
				          "tipo": "false"
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
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
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
					console.log(total);
					window.setTimeout(function(){
						console.log("time");
						console.log(total);
						finish_test(total);
					});
				}
			return respuesta;
		});
		
		
		
});

function finish_test(total){

	console.log("time2");
	console.log(total);
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	var img = total;
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho,
		"background-image": "url("+urlIndepth+"images/respuestas/" + img + ".jpg)"
	});

	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
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
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});
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
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


