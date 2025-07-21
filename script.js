const mensajes = [
  { "mensaje": " Hola Hinmer. Feliz cumpleaños, este es el primer día de muchos mensajes que Josue quiere compartir contigo; continuamos mañana, un abrazo." },
  { "mensaje": " ¿Sabías que hoy Josue pensó en ti al despertar? Sí, como casi todos los días." },
  { "mensaje": " Han pasado algunos años, pero mi cariño está intacto como si fuera ayer." },
  { "mensaje": " ¿Sabías que el club preferido de Josue es el Barcelona?" },
  { "mensaje": " Tu voz aún vive en sus recuerdos. Y lo guías más de lo que imaginas." },
  { "mensaje": " Has sido un ejemplo de superación para él." },
  { "mensaje": " ¿Recuerdas cuando lo llevaste a la montaña rusa? Un secreto: jamás se volvió a montar. Dice que no es lo mismo sin ti." },
  { "mensaje": " Hay distancia física, pero emocionalmente estás en casa: en su corazón." },
  { "mensaje": " Siempre lo inspiras. Este bot es la forma que creó para abrazarte con código." },
  { "mensaje": " Su color favorito es el rojo." },
  { "mensaje": " Sus 2 jugadores preferidos de la actualidad son: Pedri y Cubarsí." },
  { "mensaje": " Hoy comienza agosto, una razón más para recordarte que tu hijo te ama." },
  { "mensaje": " Aunque no estén cerca, agosto le recuerda que siempre fuiste su guía y héroe." },
  { "mensaje": "¿Sabías que agosto tiene 31 oportunidades? Hoy tu hijo te dice que te quiere." },
  { "mensaje": " Si pudiera, pondría una taza de chocolate caliente frente a ti. Pero por ahora, te deja este mensaje fresco." },
  { "mensaje": " Sabías que su comida favorita es la pizza, pero también ama el pasticho." },
  { "mensaje": " Su amor por el fútbol proviene de ti." },
  { "mensaje": " Con tu ejemplo le enseñaste a ser valiente." },
  { "mensaje": " De todos los mensajes que ha enviado, este es el más sincero: tu hijo te extraña." },
  { "mensaje": " Eres el mejor guía de vida. Él se alegra de que seas su papá." },
  { "mensaje": " Su mayor deseo es hacerte sentir orgulloso." },
  { "mensaje": " De niño pensaba que sabías todo. Hoy ve que sabes aún más de lo que imaginó." },
  { "mensaje": " Quisiera construir un puente con estos mensajes. Para que puedan darse un abrazo real." },
  { "mensaje": " Estos días los consagró a ti." },
  { "mensaje": " Hay días soleados y días nublados. Este mensaje es un rayito constante." },
  { "mensaje": " Dejó este mensaje como quien deja flores donde alguien importante pasó: porque eres importante para él." },
  { "mensaje": " Tal vez él no sea perfecto, pero hace todo con esfuerzo: como tú le enseñaste." },
  { "mensaje": " Si algún día dudas que te quiere, recuerda: hay alguien que escribe para ti todos los días." },
  { "mensaje": " Este bot es la forma que él tiene de estar cerca, aunque no puedan tocarse el hombro aún." },
  { "mensaje": " ¿Recuerdas cuando pescaron? Ese día fue especial para él." },
  { "mensaje": " Eres el mejor jugador de fútbol. Josue siempre te admiró por eso." },
  { "mensaje": " No hay algoritmo que mida lo que inspiras. Pero este pequeño script lo intenta." },
  { "mensaje": " Agosto sigue. Y él sigue con esto: con fe, con cariño, con constancia… por ti." },
  { "mensaje": " Algunos padres enseñan con palabras. Tú le enseñaste con tu ejemplo." },
  { "mensaje": " Hoy el mensaje no tiene grandes palabras. Solo un mensaje simple: tu hijo te quiere y piensa en ti." },
  { "mensaje": " Él agradece cada día por tener un padre como tú." },
  { "mensaje": " Tal vez no leas todos los días, pero cada uno fue escrito como si lo hicieras. Por cierto, ¡feliz cumpleaños a Milán!" },
  { "mensaje": " Hiciste un buen trabajo con tu primer hijo, y sabemos que harás un buen trabajo con todos." },
  { "mensaje": " Día 240 del año. Y ni un solo día te ha olvidado." },
  { "mensaje": " Hoy el mensaje lo escribe su corazón. Y dice lo mismo desde hace años: te ama." },
  { "mensaje": " llegaste hasta aquí, es porque algo de él aún vive contigo. Gracias por seguir leyendo." },
  { "mensaje": " Cerramos el mes. Pero su cariño no se reinicia. Sigue mañana." },
  { "mensaje": " Septiembre arranca, y con él, un nuevo ciclo de mensajes que solo buscan acercarte más a él." },
  { "mensaje": " ¿Recuerdas algún septiembre especial? Para él, este lo será por lo que está construyendo para ti." },
  { "mensaje": " No hacen falta fechas exactas para recordarte. Tu hijo te lleva todos los días en su corazón." },
  { "mensaje": " Este mensaje es breve, pero sincero: siguen lejos, pero están unidos." },
  { "mensaje": " Te manda un abrazo a la distancia." },
  { "mensaje": " A veces los bytes pueden transmitir más amor del que uno imagina. Aquí va uno de esos días. Tu hijo te ama." },
  { "mensaje": " Él sueña con el día en el que pueda preparar una comida para los dos." },
  { "mensaje": " Aunque hayan pasado años, en su mente aún suenan conversaciones que tuvieron. Siguen vivas." },
  { "mensaje": " ¿Sabías que no le gustan las películas de terror? Prefiere las de comedia." },
  { "mensaje": " Una de sus metas al crear este código era devolverte un poco de lo mucho que le has dado." },
  { "mensaje": " Cuando Josue tenía dudas al programar esto, se decía: 'Hazlo como si lo vieras sonreír.' Y seguía." },
  { "mensaje": " Hoy se detuvo solo para pensar en ti. Este es el resultado." },
  { "mensaje": " Tu influencia sigue apareciendo en sus decisiones. A veces en silencio, pero firme." },
  { "mensaje": " En septiembre muchas cosas cambian. Pero su cariño por ti permanece igual, año tras año." },
  { "mensaje": " Ya vamos por la mitad del mes y aún se emociona escribiendo para ti." },
  { "mensaje": " Este día no tiene una anécdota especial. Pero tal vez lo haga este mensaje." },
  { "mensaje": " Gracias por cada paso invisible que diste para que él pudiera escribir esto." },
  { "mensaje": " Hay días que duelen. Este proyecto los suaviza. Tú los alivias con tu recuerdo." },
  { "mensaje": " ¿Sabías que tu hijo a veces escucha canciones de Rojo porque le dijeron que tú las escuchabas? Dice que se siente cerca de ti cuando lo hace." },
  { "mensaje": " Si estás leyendo esto, tu hijo está feliz. Y si no lo estás... igual lo escribió para ti." },
  { "mensaje": " Escribió este mensaje pensando: si solo tuviera un minuto hoy contigo, ¿qué diría?" },
  { "mensaje": " Lo bueno de este sistema es que cada día dice poco... pero construye mucho." },
  { "mensaje": " A él le encantan los climas fríos. Si fuera por él, siempre estaría con chaqueta o suéter." },
  { "mensaje": " A veces no quiere hablar. Pero sí escribirte. Así nace este espacio diario." },
  { "mensaje": " Él agradece por tus valiosos consejos." },
  { "mensaje": " No necesitas contestar. Solo abrir esto de vez en cuando ya es una conversación." },
  { "mensaje": " Cada vez que actualiza este sistema, siente que también renueva su vínculo contigo." },
  { "mensaje": " El mes se va... pero la intención de estos mensajes permanece." },
  { "mensaje": " Hoy no hay grandes frases. Solo esta: Él está orgulloso de ser tu hijo." },
  { "mensaje": " ¿Sabías que septiembre es el mes de la constancia? Y aquí sigue, mensaje tras mensaje, demostrando que te ama." },
  { "mensaje": " En octubre, Josue sigue hablándole a su papá como si cada día fuera una conversación pendiente." },
  { "mensaje": " Él no olvida. Ni siquiera en los días de lluvia. Octubre le recuerda su constancia." },
  { "mensaje": " Desde la distancia, Josue sigue escribiendo como quien deja fragmentos de afecto en el calendario." },
  { "mensaje": " Él sabe que su papá no necesita grandes cosas, solo saber que no ha sido olvidado." },
  { "mensaje": " ¿Sabías que a Josue le encanta el mocachino?" },
  { "mensaje": " Él sonríe al imaginar a su papá abriendo este mensaje al despertar." },
  { "mensaje": " No importa si es lunes o domingo. Él sigue dejando una huella diaria para que su papá la encuentre." },
  { "mensaje": " Hoy Josue recuerda una charla antigua. No importa el tema. Solo que estaba él." },
  { "mensaje": " Aunque la distancia duela, programar esto se volvió una forma de aliviarla." },
  { "mensaje": " Nadie le pidió que hiciera esta app. Pero algo en él necesitaba crear un puente invisible." },
  { "mensaje": " A veces se pregunta si su papá lo leerá. Aun así, no deja de escribir." },
  { "mensaje": " Este mensaje es otra prueba de que Josue no dejó de pensar en ti ni un solo día." },
  { "mensaje": " En octubre las hojas caen, pero su amor permanece intacto." },
  { "mensaje": " Josue pensó en lo mucho que le gustaría compartir un desayuno contigo." },
  { "mensaje": " Tal vez su padre no lo sepa, pero hizo esto con mucho amor." },
  { "mensaje": " Cada mensaje que entrego es una forma para él de decir 'aquí sigo, contigo'." },
  { "mensaje": " Hoy no hubo palabras nuevas. Pero su presencia está en este mensaje: constante." },
  { "mensaje": " ¿Sabías que le encanta todo lo que tenga que ver con superhéroes, tanto de DC como de Marvel?" },
  { "mensaje": " ¿Sabías que sus superhéroes preferidos son Spider-Man y Flash?" },
  { "mensaje": " Hoy Josue no escribió por obligación. Lo hizo con la emoción intacta del primer día." },
  { "mensaje": " A lo largo de este octubre, su único propósito ha sido estar presente a su modo." },
  { "mensaje": " Él piensa que quizás un día su papá lea todos los mensajes de un tirón... y entienda lo mucho que lo ama." },
  { "mensaje": " Cada palabra es parte de un diario que no necesita respuestas. Solo presencia compartida." },
  { "mensaje": " Hoy el mensaje no busca emocionar, solo estar. Como lo haría un hijo al lado del padre." },
  { "mensaje": " Tu hijo sueña con jugar un partido de fútbol contigo." },
  { "mensaje": " Él sabe que los días pasan rápido, pero los vínculos bien escritos permanecen." },
  { "mensaje": " Aunque muchos no entiendan por qué lo hace, él lo hace por la única razón que importa: amor." },
  { "mensaje": " Este mensaje tal vez pase desapercibido. Pero él sabe que cada uno cuenta." },
  { "mensaje": " Josue miró el cielo hoy. Y se dijo: 'Si él también lo ve, estamos un poco más cerca.'" },
  { "mensaje": " Faltan solo 2 meses para cerrar el año. Pero para él, cada día sigue siendo único contigo." },
  { "mensaje": " Octubre termina, pero lo que Josue construye continúa: como los lazos que no mueren nunca." },
  { "mensaje": " En noviembre, Josue no baja el ritmo. Cada día es una oportunidad más para recordarte lo mucho que te ama." },
  { "mensaje": " Él sabe que la constancia también es amor. Por eso vuelve hoy, como siempre, con un mensaje nuevo." },
  { "mensaje": " ¿Sabías que uno de los sueños más grandes de Josue desde pequeño es tener una granja?" },
  { "mensaje": " Josue piensa que si su papá abre esta app hoy, tal vez sonrían al mismo tiempo sin saberlo." },
  { "mensaje": " ¿Sabías que a Josue le gustan los Power Rangers?" },
  { "mensaje": " Aunque las rutinas lo absorban, él siempre saca un momento para dejar esta huella diaria." },
  { "mensaje": " Hay amor en las pequeñas cosas. Como en escribir un mensaje sabiendo que tal vez sea leído." },
  { "mensaje": " Para él tú eres un ejemplo de superación." },
  { "mensaje": " Este no es un mensaje perfecto. Pero es auténtico. Como todo lo que él aprendió de su padre." },
  { "mensaje": " A veces Josue imagina que este mensaje llega justo cuando su papá lo necesita. Y lo espera." },
  { "mensaje": " ¿Sabías que su fruta favorita es la manzana roja?" },
  { "mensaje": " Hoy no hay fechas importantes. Solo un hijo escribiéndole a su padre. Y eso basta." },
  { "mensaje": " El tiempo pasa, pero lo que se cultiva con amor perdura. Este proyecto lo confirma." },
  { "mensaje": " Si alguien preguntara por qué lo hace, él respondería: 'Porque mi papá me importa. Mucho.'" },
  { "mensaje": " En noviembre se caen hojas, pero él siembra palabras. Su propio jardín de memorias." },
  { "mensaje": " Quizás un día ya no escriba más. Pero este año no será. Hoy sigue. Y mañana también." },
  { "mensaje": " La programación también puede ser poesía. Este mensaje es su estrofa de hoy." },
  { "mensaje": " Josue piensa en su padre con respeto, con cariño y con mucha gratitud." },
  { "mensaje": " No necesita grandes celebraciones. Solo este gesto íntimo, constante y sincero." },
  { "mensaje": " Él encontró en este espacio una forma de estar, incluso cuando no puede estar físicamente." },
  { "mensaje": " Hoy dejó un mensaje más. No por rutina, sino por cariño genuino que no se agota." },
  { "mensaje": " No importa cuántos hayan pasado. La emoción de hablarle sigue intacta." },
  { "mensaje": " Este mensaje también dice lo que no se dice. Está hecho de silencios llenos." },
  { "mensaje": " A lo lejos, tú construyes con píxeles para crear mejores gráficos." },
  { "mensaje": ". Hoy, como todos los días, Josue piensa: 'Ojalá esto le llegue. Y le haga bien.'" },
  { "mensaje": " Es posible que tú no leas esto hoy. Pero igual lo escribe. Porque el amor no espera aprobación." },
  { "mensaje": " Noviembre avanza. Y él sigue, porque no hay 'ya basta' cuando se trata de querer." },
  { "mensaje": " ¿Sabías que a Josue le encanta observar el mar?" },
  { "mensaje": " Cada palabra aquí escrita está dedicada a una sola persona. Y eso lo hace eterno." },
  { "mensaje": " Noviembre termina, pero su compromiso continúa. Mañana habrá otro mensaje. Otro abrazo digital." },  
  { "mensaje": " Diciembre comienza, y con él, los últimos latidos de este ritual silencioso que Josue construyó para su papá." },
  { "mensaje": " Él no sabe si estos mensajes llegaron como imaginaba, pero sabe que cada uno partió del corazón." },
  { "mensaje": " Hoy no hay palabras nuevas, solo la gratitud antigua: gracias por lo que fuiste, lo que eres y lo que permanece." },
  { "mensaje": " Cada día de este proyecto fue una forma de honrar lo vivido, lo sentido y lo querido." },
  { "mensaje": " Josue pensó que construir este sistema era un acto técnico. Descubrió que era un acto de amor." },
  { "mensaje": " El año se apaga lentamente… pero lo que él siente sigue ardiendo incluso más que en la niñez." },
  { "mensaje": " No todos los días fueron fáciles, pero cada uno fue genuino. Y eso lo hace real." },
  { "mensaje": " Josue aprendió a hablar de ti sin decir tu nombre. Y entendió que amar también es escribir en silencio." },
  { "mensaje": " Este mensaje es simple: no para sorprender, sino para acompañar." },
  { "mensaje": " Él jamás midió la distancia en kilómetros, sino en abrazos que le faltaron darte." },
  { "mensaje": " El conteo sigue, pero la intención no cambia: recordarte es resistir el olvido." },
  { "mensaje": " En la última curva del año, Josue sonríe sabiendo que este canal invisible entre ustedes sigue vivo." } 
  { "mensaje": " ¿Sabías que cuando Josue juega fútbol puede patear con los dos pies?" },
  { "mensaje": " Nada de lo escrito fue al azar. Cada palabra fue elegida como quien arma una carta que tal vez no llegará." },
  { "mensaje": " Si estás leyendo esto, él sabe que valió la pena. Si no, también lo sabe." },
  { "mensaje": " Este mensaje no espera respuesta. Solo comprensión silenciosa." },
  { "mensaje": " A veces sintió que hablarte era una forma de hablarse también a sí mismo." },
  { "mensaje": " Si algún día alguien encuentra este archivo, entenderá que no es una app, sino una historia encapsulada." },
  { "mensaje": " Él creó 165 momentos para reencontrarse contigo. Este es uno de ellos." },
  { "mensaje": " El año se despide. Él no. Porque los vínculos verdaderos no se vencen con el calendario." },
  { "mensaje": " A ti no te dedicó solo una aplicación: te ofreció su constancia, su tiempo, su emoción." },
  { "mensaje": " ¿Sabías que, a pesar de existir múltiples variedades de postres, él siempre preferirá un helado?" },
  { "mensaje": " Le gustaría decirte en persona todo esto. Pero por ahora, se lo entrega a la página que abriste." },
  { "mensaje": " Si estas palabras fueron leídas con atención, entonces su misión está cumplida. Feliz Nochebuena." },
  { "mensaje": " Él sabe que se equivocó en muchas cosas… pero en esto puso lo mejor de sí. Feliz Navidad." },
  { "mensaje": "1 En estas fechas todos se acercan, pero él decidió hacerlo cada día." },
  { "mensaje": " Este es un regalo sin moño. Pero con intención pura." },
  { "mensaje": " Diciembre 28. Faltan tres mensajes. Pero no hay final real. Solo un nuevo silencio con significado." },
  { "mensaje": " Él te escribe como quien enciende una vela antes de dormir. No para ver… sino para no olvidar." },
  { "mensaje": " Penúltimo mensaje. Josue mira todo lo que hizo y se dice: valió cada línea." },
  { "mensaje": " Último día. No dice adiós. Solo: 'Gracias por estar ahí, incluso cuando no estabas.' Feliz fin de año." }
];

function verificarClave() {
  const clave = document.getElementById("clave").value.trim();
  if (clave === "Hinmer0721" || clave === "Josue") {
    alert("✅ Clave reconocida");
  } else {
    document.getElementById("error").textContent = "❌ Clave incorrecta.";

  if (claveIngresada === claveUsuario || claveIngresada === claveModerador) {
    document.getElementById("login").style.display = "none";
    document.getElementById("mensaje").style.display = "block";
    localStorage.setItem("eco_mod", claveIngresada === claveModerador ? "1" : "0");
    mostrarMensaje();
  } else {
    document.getElementById("error").textContent = "❌ Clave incorrecta.";
  }
}

function mostrarMensaje() {
  const hoy = new Date().toISOString().split("T")[0];
  const ultimoDia = localStorage.getItem("eco_fecha");
  let indice = parseInt(localStorage.getItem("eco_indice") || "0");

  if (hoy !== ultimoDia) {
    indice++;
    if (indice >= mensajes.length) indice = mensajes.length - 1;
    localStorage.setItem("eco_fecha", hoy);
    localStorage.setItem("eco_indice", indice);
  }

  const mensajeActual = mensajes[indice] || { mensaje: "🎁 Has recibido todos los mensajes." };
  document.getElementById("texto").textContent = mensajeActual.mensaje;
  document.getElementById("numerodia").textContent = `Mensaje ${indice + 1} de ${mensajes.length}`;
  mostrarComentarioGuardado(indice);

  if (localStorage.getItem("eco_mod") === "1") {
    document.getElementById("botonBorrar").style.display = "inline-block";
  }
}

function hablar() {
  const mensaje = document.getElementById("texto").textContent;
  const voz = new SpeechSynthesisUtterance(mensaje);
  voz.lang = "es-VE";

  const esperar = setInterval(() => {
    const voces = speechSynthesis.getVoices();
    if (voces.length > 0) {
      clearInterval(esperar);
      const preferida = voces.find(v => v.lang.startsWith("es"));
      if (preferida) voz.voice = preferida;
      speechSynthesis.speak(voz);
    }
  }, 100);
}

function guardarComentario() {
  const indice = localStorage.getItem("eco_indice");
  const comentario = document.getElementById("comentario").value.trim();
  if (!comentario || !indice) return;

  localStorage.setItem("eco_comentario_" + indice, comentario);
  document.getElementById("comentarioGuardado").textContent = "✅ Comentario guardado.";
  document.getElementById("botonBorrar").style.display = "inline-block";
}

function mostrarComentarioGuardado(indice) {
  const guardado = localStorage.getItem("eco_comentario_" + indice);
  if (guardado) {
    document.getElementById("comentario").value = guardado;
    document.getElementById("comentarioGuardado").textContent = "📝 Comentario recuperado.";
    document.getElementById("botonBorrar").style.display = "inline-block";
  } else {
    document.getElementById("comentarioGuardado").textContent = "";
    document.getElementById("botonBorrar").style.display = "none";
  }
}

function borrarComentarioPrivado() {
  const indice = localStorage.getItem("eco_indice");
  if (!indice) return;

  localStorage.removeItem("eco_comentario_" + indice);
  document.getElementById("comentario").value = "";
  document.getElementById("comentarioGuardado").textContent = "🧽 Comentario borrado.";
  document.getElementById("botonBorrar").style.display = "none";
}
