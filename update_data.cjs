const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');

const targetStr = `    synopsis: { 
      en: "Paris and Nicole trade their cell phones and credit cards for a month on a farm with the Leding family.", 
      es: "Paris y Nicole cambian sus teléfonos y tarjetas de crédito por un mes en una granja con la familia Leding." 
    },
    description: {
      en: "The season that started it all. Premiering in 2003, Paris and Nicole leave behind their luxurious Beverly Hills lifestyle to experience life in the rural town of Altus, Arkansas. Stripped of their money, cars, and cell phones, they must survive by working minimum-wage jobs, from milking cows at a dairy farm to working the drive-thru at Sonic, creating unforgettable television moments.",
      es: "La temporada que lo empezó todo. Estrenada en 2003, Paris y Nicole dejan atrás su lujoso estilo de vida en Beverly Hills para experimentar la vida en la ciudad rural de Altus, Arkansas. Despojadas de su dinero, autos y teléfonos, deben sobrevivir trabajando en empleos de salario mínimo, desde ordeñar vacas en una granja lechera hasta trabajar en el auto-servicio de Sonic, creando momentos televisivos inolvidables."
    },`;

const replacementStr = `    synopsis: { 
      en: "Wealthy and glamorous socialites Paris Hilton and Nicole Richie leave behind their credit cards and luxury to move in with a rural family in a small Arkansas town for a month. Stripped of their phones and technology, the two wealthy girls must adapt to country life by working low-paying local jobs, leading to a funny and chaotic culture clash.", 
      es: "Las ricas y glamorosas herederas Paris Hilton y Nicole Richie dejan atrás sus tarjetas de crédito y sus lujos para mudarse durante un mes con una familia de campo en un pequeño pueblo de Arkansas. Sin teléfonos ni tecnología, las dos jóvenes de alta sociedad deben adaptarse a la vida rural trabajando en empleos locales mal pagados, lo que genera un choque cultural divertido y caótico." 
    },
    description: {
      en: "The first season of The Simple Life began filming in the spring of 2003 (during the months of April and May), shortly before Paris Hilton's worldwide fame exploded.\\n\\nDuring this season, Paris Hilton and Nicole Richie traveled to Altus, Arkansas, a small town of just a few hundred residents, to live for a month with the Leding family. Upon arrival, the rules were clear: they were stripped of their credit cards, cash, and cell phones, forcing them to live under the strict customs and schedules of their hosts.\\n\\nThe main plot revolves around their attempts—and constant failures—to adapt to rural life and daily responsibilities. Throughout the episodes, the two young women from Beverly Hills must get and keep minimum-wage jobs in the town in order to pay for their expenses. They are seen working on a dairy farm, at a fast-food restaurant (Sonic Drive-In), at a local fair, and even helping a taxidermist. Their complete disconnection from manual labor, coupled with their rebellious attitude, ignorance of household chores, and constant antics, leads to absurd situations and pushes the patience of their employers and the Leding family to the limit, marking the beginning of one of the most iconic eras in reality television.",
      es: "La primera temporada de The Simple Life comenzó a grabarse en la primavera de 2003 (durante los meses de abril y mayo), poco antes de que estallara la fama mundial de Paris Hilton.\\n\\nDurante esta temporada, Paris Hilton y Nicole Richie viajaron a Altus, Arkansas, un pequeño pueblo de apenas unos cientos de habitantes, para vivir durante un mes con la familia Leding. Al llegar, las reglas fueron claras: fueron despojadas de sus tarjetas de crédito, dinero en efectivo y teléfonos celulares, obligándolas a convivir bajo las costumbres y horarios estrictos de sus anfitriones.\\n\\nLa trama principal gira en torno a sus intentos —y constantes fracasos— de adaptarse a la vida rural y a las responsabilidades diarias. A lo largo de los episodios, las dos jóvenes de Beverly Hills deben conseguir y mantener trabajos de salario mínimo en la localidad para poder pagar sus gastos. Se las ve trabajando en una granja lechera, en un restaurante de comida rápida (Sonic Drive-In), en una feria local y hasta ayudando a un taxidermista. Su total desconexión con el trabajo manual, sumado a su actitud rebelde, su ignorancia sobre las tareas domésticas y sus constantes travesuras, provoca situaciones absurdas y lleva al límite la paciencia de sus empleadores y de la familia Leding, marcando el inicio de una de las eras más icónicas de la telerrealidad."
    },`;

if(content.includes(targetStr)) {
  fs.writeFileSync('src/data.ts', content.replace(targetStr, replacementStr));
  console.log('data.ts updated successfully');
} else {
  console.log('Target string not found in data.ts');
}
