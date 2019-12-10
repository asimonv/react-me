import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Image from "./Image";
import Quote from "./Quote";

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: 400px) {
    display: block;
  }
`;

const PaintingImage = styled.img`
  width: ${props => props.size || 100}px;
  height: ${props => props.size || 100}px;
  object-fit: cover;
  padding: 5px;
`;

const Timer = styled.h1`
  text-align: center;
`;

const ComponentId23 = props => {
  const diff = Math.round((new Date() - new Date(2019, 10, 18)) / 1000);
  const [seconds, setSeconds] = useState(diff);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <>
      <Timer>
        <a href="https://www.bloomberg.com/news/articles/2019-10-30/dozens-blinded-by-chile-police-in-violent-crackdown-on-protests">
          {seconds}
        </a>
      </Timer>
      <h1>
        Viviendo dentro de un <i>sueño real</i>.
      </h1>
      <Grid>
        <PaintingImage
          size={150}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Andr%C3%A9_Breton.JPG/220px-Andr%C3%A9_Breton.JPG"
        />
        <PaintingImage
          size={150}
          src="https://www.biography.com/.image/t_share/MTIwNjA4NjMzNTM4MDUzNjQ0/salvador-dali-40389-2-402.jpg"
        />
        <PaintingImage
          size={150}
          src="http://www.renemagritte.org/images/rene-magritte-photo.jpg"
        />
        <PaintingImage
          size={150}
          src="https://images.firstpost.com/optimize/RvPwulPNDbKx73zaODIYfDwlbfI=/images.firstpost.com/wp-content/uploads/reuters/11-2019/12/2019-11-11T122225Z_1_LYNXMPEFAA11O_RTROPTP_2_CHILE-PROTESTS.jpg"
        />
        <PaintingImage
          size={150}
          src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Portrait_of_Joan_Miro%2C_Barcelona_1935_June_13.jpg"
        />
      </Grid>
      <p>
        Al principio de su carrera, André Breton y Phillipe Soupault comenzaron
        a experimentar con la escritura automática. Se encerrarían en una
        habitación oscura, tratarían de simular un estado mental semiconsciente
        y onírico, y escribirían las palabras, imágenes y oraciones que
        surgieran. Lo que Breton encontró invaluable sobre este acto creativo no
        fue el producto final en sí, sino más bien, el procedimiento como un
        medio para liberar el potencial de uno. Y así, la esencia del
        surrealismo se convirtió en la falta de arte: la supremacía del método
        sobre el producto; la negligencia, incluso el rechazo de cualquier
        criterio estético; y la incorporación del arte a la esfera de la vida
        cotidiana. Lo cual considero que está en concordancia con la crisis que
        se está viviendo, puesto que uno de nuestros propósitos y misión debe
        estar en la liberación de nuestro potencial y de privilegiar el método
        sobre el producto y de la aceptación del verdadero significado.
      </p>
      <p>
        Considero además, que estamos en un estado de creatividad y extrañeza
        máxima, que proviene de lo más profundo de nuestro ser colectivo.
      </p>
      <h1>Ernst</h1>
      <p>
        En París, en 1935 el trabajo de Max Ernst comenzó a cambiar (así como lo
        estamos haciendo nosotros también.{" "}
        <a href="https://www.goodreads.com/book/show/1630729.The_Book_of_Love">
          El tiempo vuelve{" "}
        </a>
        ). Con las pinturas al óleo <i>The Elephant Celebes</i> y{" "}
        <i>Oedipus Rex</i>, Ernst puede explorar más a fondo los temas de sus
        collages: maquinaria extraña, animales imaginarios, objetos en
        equilibrio inestable, un cuerpo femenino sin cabeza, pero con un nuevo
        giro. De hecho, sus pinturas al óleo se basan libremente en el concepto
        del collage, ya que traen realidades dispares a una nueva unidad.
      </p>
      <p>
        Realmente siento que Ernst nos pinta con casi 100 años de anticipación.
        El elefante "guanaco", la mujer (hombre) sin mucha idea del futuro,
        desnuda, inestabilidad y de nuevo, rareza máxima.
      </p>
      <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/The_Elephant_Celebes.jpg/600px-The_Elephant_Celebes.jpg" />
      <Quote title="The Elephant Celebes (1921) - Max Ernst" />
      <Image src="https://elcastillodekafka.files.wordpress.com/2012/10/max-ernst-edipo-rey-1921.jpg?w=530" />
      <Quote title="Oedipus Rex (1922) - Max Ernst" />
      <p>
        En <i>Two Children Are Threatened by a Nightingale</i>, Ernst incluso
        incluyó algunos objetos reales sujetos al lienzo: un timbre y una
        pequeña puerta. Ernst organiza objetos para componer un mundo de sueños
        que sea autosuficiente y válido y que se preste a interpretaciones
        freudianas en sus encuentros accidentales.
      </p>
      <Image src="https://www.moma.org/learn/moma_learning/_assets/www.moma.org/wp/moma_learning/wp-content/uploads/2012/07/Ernst.-Two-Children-Are-Threatened-by-a-Night1-326x395.jpg" />
      <Quote title="Two Children Are Threatened by a Nightingale (1924) - Max Ernst" />
      <p>
        Ernst definió sus creaciones como "la explotación de la reunión casual
        de dos realidades remotas en un avión inadecuado para ellos". Los
        objetos retratados son irreales, pero la precisión con la que están
        pintados les da la apariencia de realidad. En el mundo artificial de
        estas pinturas, las cosas que no existen en otros lugares se vuelven
        reales. En <i>Woman, Old Man, and Flower</i> y{" "}
        <i>The Robing of the Bride</i>, las figuras son inventos fantásticos que
        han sufrido una metamorfosis ante nuestros propios ojos.
      </p>
      <p>Es la realidad irreal en la que estamos sumergidos diariamente.</p>
      <Image src="https://uploads2.wikiart.org/images/max-ernst/woman-old-man-and-flower-femme.jpg!Large.jpg" />
      <Quote title="Woman, Old Man, and Flower (1923) - Max Ernst" />
      <Image
        src="        https://i0.wp.com/www.guggenheim.org/wp-content/uploads/1940/01/76.2553.78_ph_web-1.jpg?w=870&zoom=2
"
      />
      <Quote title="Attirement of the Bride  (1940) - Max Ernst" />
      <p>
        ¿Estamos dentro de un sueño o estamos despiertos? La realidad se ha
        tornado difusa en estos casi <b>dos meses</b>.
      </p>
      <h1>Magritte</h1>
      <Image src="https://media.giphy.com/media/l1J3HwGnlt58hgCgU/giphy.gif" />
      <Grid>
        <PaintingImage
          size={200}
          src="https://www.sartle.com/media/artwork/the-telescope-rene-magritte.jpg"
        />
        <PaintingImage
          size={200}
          src="http://www.gamba.cl/wp-content/uploads/2016/06/encapuchados-amor.jpg"
        />
        <PaintingImage
          size={200}
          src="https://images-na.ssl-images-amazon.com/images/I/71L00RRgaQL._UX679_.jpg"
        />
        <PaintingImage
          size={200}
          src="http://www.mattesonart.com/Data/Sites/1/magritte/Evening%20Falls%20Le%20Soir%20qui%20tombe,%201964.jpg"
        />
      </Grid>
      <p>
        René Magritte, quien demostró que el realismo preciso podía ser tan
        surrealista como el automatismo puro. De hecho, todo lo que Magritte
        pintó fue un acto deliberado de desorientación visual. Tomando los
        objetos más comunes, los metamorfoseó prestando atención minuciosa a los
        detalles naturalistas y luego colocándolos fuera de su contexto normal.
      </p>
      <Image src="https://publicdelivery.org/wp-content/uploads/2019/08/Rene-Magritte-The-Treachery-of-Images-This-is-Not-a-Pipe-1929.jpg" />
      <Quote title="The Treachery of Images (1929) - René Magritte" />
      <p>
        En otras palabras, Magritte quería hacer extraño lo familiar (¿no te
        parece esto conocido?, ¿te has sentido así en el último tiempo?) al
        explorar los siguientes principios: ampliación de un detalle, la
        asociación de complementos, la animación de lo inanimado, la apertura
        misteriosa, las transformaciones materiales y las sorpresas anatómicas.
        En cada uno de estos juegos de palabras visuales, el resultado es una
        sacudida mental que a menudo se convierte en una broma visual.
      </p>
      <p>Al explicar su propio trabajo:</p>
      <Quote
        content="Hago un punto
      (en la medida de lo posible) de pintar solo cuadros que evoquen el
      misterio de toda existencia con la precisión y el encanto esenciales
      para la vida del pensamiento. Parece claro que precisa y las
      encantadoras evocaciones de ese misterio se obtienen mejor con imágenes
      de objetos cotidianos combinados o transformados de tal manera que se
      borre su acuerdo con nuestras ideas preconcebidas, simples o
      sofisticadas"
        title="René Magritte"
      />
      <h1>Dalí</h1>
      <iframe
        title="Dalí"
        height="315"
        src="https://www.youtube.com/embed/S4zXDBNuaMk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>
        El aporte de Dalí al surrealismo fue que trajo consigo la teoría que es
        la base de sus pinturas, su método{" "}
        <a href="http://library.humboldt.edu/about/art/artists/daliPCTM.html">
          paranoico-crítico
        </a>
        , también basado en el ilusionismo. Con este método, Dalí creó una
        realidad visionaria a partir de elementos de visiones, sueños, recuerdos
        y distorsiones psicológicas / patológicas. Y así, Dalí deriva su
        definición de pintura: "fotografía (a mano y en color) de la
        irracionalidad concreta y del mundo imaginario en general".
      </p>
      <p>
        En el ámbito visual, el método crítico paranoico se manifiesta
        principalmente en la capacidad de ver diferentes objetos "en" ciertas
        cosas de manera alucinante. Por ejemplo, en <i>The Bust of Voltaire</i>,
        si se mira el busto por segunda vez, se puede ver que la imagen se
        transforma en varias mujeres que entran por un umbral. En otras
        palabras, a través de la doble imagen, Dalí estaba luchando por la
        identidad visual entre dos objetos dispares al igual que Ernst y
        Magritte lo habían hecho a su manera. Aquí entra nuevamente el concepto
        de traslape de realidades y fuga de consciencia de nuestra actualidad.
        En donde a veces es difícil saber si estamos bien, mal, mejor o peor.
      </p>
      <Image src="https://i.pinimg.com/originals/d7/bb/99/d7bb991a0bf1ebff7764aff0ce3f7844.jpg" />
      <Quote title="Disappearing Bust of Voltaire (1940) - Salvador Dalí" />
      <p>
        En su trabajo, Dalí había sido influenciado por varias fuerzas
        diferentes. Uno de sus propios demonios era el miedo a la impotencia,
        como se expresa en <i>The Persistence of Memory</i> con sus relojes
        derretidos y figuras flácidas.
      </p>
      <p>
        No es tan difícil hacer el ejercicio de adentrarnos en la pintura.
        ¿Realmente ha existido el tiempo durante la crisis? Dalí tenía sus
        demonios y nosotros también.
      </p>
      <Image src="https://cdn.culturagenial.com/es/imagenes/dali-la-persistencia-de-la-memoria-cke.jpg" />
      <Quote title="The Persistence of Memory (1931) - Salvador Dalí" />
      <p>
        En Accommodation of Desire, toma una imagen común, un león, y establece
        una cadena de metamorfosis que ocurre ante nuestros ojos como si
        estuviéramos viendo una película.
      </p>
      <p>¿Fuimos, somos, volveremos a ser leones? O las hormigas...</p>
      <Image src="https://live.staticflickr.com/3248/3287150934_b9621d94e7_z.jpg" />
      <Quote title="The Accommodations of Desire (1929) - Salvador Dalí" />
      <p>
        En{" "}
        <i>
          Gala and the Angelus of Millet Immediately Preceding the Arrival of
          the Conic Anamorphoses
        </i>
        , inmediatamente antes de la llegada de la anamorfosis cónica, usa el{" "}
        <i>Angelus</i> de Millet como punto de partida. En esta pintura, Gala,
        la esposa de Dalí, se sienta sonriendo ampliamente frente a un hombre.
        Sobre la puerta abierta hay una huella del Ángelus de Millet, mientras
        que alrededor de la puerta abierta emerge una monstruosa figura que
        lleva una langosta por un sombrero. Por supuesto, no hay una explicación
        obvia para la escena, pero es, sin embargo, una pesadilla.
      </p>
      <p>
        A veces me pasa que me duermo, despierto, vuelve el tiempo y la
        anamorfosis retorna a destruir el <i>huevo</i> del <i>Angelus</i>{" "}
      </p>
      <Image src="https://www.salvador-dali.org/media/upload/cataleg_pintura/MITJA/0323.jpg" />
      <Quote title="Gala and the Angelus of Millet Immediately Preceding the Arrival of the Conic Anamorphoses (1933) - Salvador Dalí" />
      <h1>Miró</h1>
      <p>
        Por "otro" lado tenemos a ​​Joan Miró, quien no podría haber sido más
        diferente de su compatriota Dalí. Mientras que el arte de Dalí era
        ilusionista, el método de Miró era automatista. Miró se rebeló contra
        toda la tradición de la pintura, abandonando todos los principios de
        composición, organización espacial y definición tridimensional. De
        hecho, las obras de Miró son una protesta alegre e ingeniosa contra toda
        pretensión en el arte en su mínimo de elementos significativos y su
        esbozo.
      </p>
      <p>
        Además, mientras que el arte de Dalí pretendía ilustrar los sueños, Miró
        estaba recreando la experiencia del sueño. En sus propias palabras: "No
        empiezo con la idea de que pintaré cierta cosa. Comienzo a pintar y
        mientras pinto la imagen comienza a surtir efecto, se revela. En el acto
        de pintar, una forma comienza a significar mujer o pájaro ... la primera
        etapa es libre, inconsciente".
      </p>
      <Image src="https://uploads2.wikiart.org/images/joan-miro/the-tilled-field-1924.jpg" />
      <Quote title="The Tiled Field (1923-1924) - Joan Miró" />
      <Image src="https://uploads5.wikiart.org/images/joan-miro/the-hunter-1924.jpg" />
      <Quote title="The Hunter (Catalan Landscape) (1923-1924) - Joan Miró" />
      <Image src="https://artsdot.com/ADC/Art.nsf/O/5ZKCVA/$File/Joan+Miro+-+Woman+in+Front+of+the+Sun+.JPG" />
      <Quote title="Woman in Front of the Sun (1950) - Joan Miró" />
      <p>
        ¿A qué quiero ir con Miró? A que a veces uno ve lo que está pasando
        desde la tele y uno piensa como Dalí, pero lo que está pasando en la
        calle puede ser Miró. Es el contraste de la idea contra la experiencia
        personal del <i>sueño</i>, como también una invitación a salir, vivir y
        sentir lo que está pasando (o lo que no).
      </p>
      <Image
        src={`${process.env.PUBLIC_URL}/images/line.png`}
        labelledby="a division curve"
        alt="a division curve"
      />
      <h1>Coda</h1>
      <Image src={`${process.env.PUBLIC_URL}/images/matapacos.jpeg`} />
    </>
  );
};

export default ComponentId23;
