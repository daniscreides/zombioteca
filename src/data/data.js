// src/data/data.js

// =========================
// IMPORTS – FILMES
// =========================
import filme01 from "../assets/imagens/filme01.jpg";
import filme02 from "../assets/imagens/filme02.jpg";
import filme03 from "../assets/imagens/filme03.jpg";
import filme04 from "../assets/imagens/filme04.jpg";
import filme05 from "../assets/imagens/filme05.jpg";
import filme06 from "../assets/imagens/filme06.jpg";
import filme07 from "../assets/imagens/filme07.jpg";
import filme08 from "../assets/imagens/filme08.jpg";
import filme09 from "../assets/imagens/filme09.jpg";
import filme10 from "../assets/imagens/filme10.jpg";
import filme11 from "../assets/imagens/filme11.jpg";
import filme12 from "../assets/imagens/filme12.jpg";
import filme13 from "../assets/imagens/filme13.jpg";
import filme14 from "../assets/imagens/filme14.jpg";
import filme15 from "../assets/imagens/filme15.jpg";
import filme16 from "../assets/imagens/filme16.jpg";
import filme17 from "../assets/imagens/filme17.jpg";
import evil1 from "../assets/imagens/evil1.jpg";
import filme18 from "../assets/imagens/filme18.jpg";
import filme19 from "../assets/imagens/filme19.jpg";
import filme2004 from "../assets/imagens/filme2004.jpg";
import filme20 from "../assets/imagens/filme20.jpg";
import filme21 from "../assets/imagens/filme21.jpg";
import filme22 from "../assets/imagens/filme22.jpg";
import deadsnow from "../assets/imagens/deadsnow.jpg";
import zombieland from "../assets/imagens/zombieland.jpg";
import filme24 from "../assets/imagens/filme24.jpg";
import filme26 from "../assets/imagens/filme26.jpg";
import filme27 from "../assets/imagens/filme27.jpg";
import filme28 from "../assets/imagens/filme28.jpg";
import filme29 from "../assets/imagens/filme29.jpg";
import filme30 from "../assets/imagens/filme30.jpg";
import filme35 from "../assets/imagens/filme35.jpg";
import filme31 from "../assets/imagens/filme31.jpg";
import filme32 from "../assets/imagens/filme32.jpg";
import filme33 from "../assets/imagens/filme33.jpg";
import filme34 from "../assets/imagens/filme34.jpg";
import zom100 from "../assets/imagens/zom100.jpg";

// =========================
// IMPORTS – SÉRIES
// =========================
import walkingdead from "../assets/imagens/TheWalkingDead.jpg";
import deathvalley from "../assets/imagens/deathvalley.jpg";
import intheflesh from "../assets/imagens/intheflesh.jpg";
import znation from "../assets/imagens/znation.jpg";
import fear from "../assets/imagens/fear.jpg";
import izombie from "../assets/imagens/izombie.jpg";
import ash from "../assets/imagens/ash.jpg";
import santaclarita from "../assets/imagens/santaclarita.jpg";
import kingdom from "../assets/imagens/kingdom.jpg";
import blacksummer from "../assets/imagens/blacksummer.jpg";
import allofusaredead from "../assets/imagens/allofusaredead.jpg";
import thelastofus from "../assets/imagens/thelastofus.jpg";
import twddc from "../assets/imagens/twddc.jpg";
import daryl from "../assets/imagens/daryl.jpg";

// =========================
// IMPORTS – ANIMAÇÕES
// =========================
import degeneration from "../assets/imagens/degeneration.jpg";
import deadspace from "../assets/imagens/deadspace.jpg";
import highschool from "../assets/imagens/highschool.jpg";
import paranorman from "../assets/imagens/paranorman.jpg";
import darkestdawn from "../assets/imagens/darkestdawn.jpg";
import seulstation from "../assets/imagens/seulstation.jpg";

// =========================
// FILMES
// =========================
export const filmes = [
  { id: 1, titulo: "White Zombie", ano: 1932, pais: "EUA", diretor: "Victor Halperin", sinopse: "Primeiro filme de zumbis do cinema, ambientado no Haiti, introduzindo o conceito de mortos-vivos controlados por magia.", imagem: filme01 },
  { id: 2, titulo: "I Walked with a Zombie", ano: 1943, pais: "EUA", diretor: "Jacques Tourneur", sinopse: "Uma enfermeira é enviada a uma ilha do Caribe para cuidar de uma mulher que parece estar em estado de zumbificação por influência do Vodu.", imagem: filme02 },
  { id: 3, titulo: "The Plague of the Zombies", ano: 1966, pais: "Reino Unido", diretor: "John Gilling", sinopse: "Um vilarejo britânico é atacado por zumbis controlados por vodu, em uma produção clássica da Hammer Films.", imagem: filme03 },
  { id: 4, titulo: "Night of the Living Dead", ano: 1968, pais: "EUA", diretor: "George A. Romero", sinopse: "Um grupo de pessoas se refugia em uma casa isolada enquanto mortos-vivos começam atacar.", imagem: filme04 },
  { id: 5, titulo: "Non si deve profanare il sonno dei morti", ano: 1974, pais: "Itália/Espanha", diretor: "Jorge Grau", sinopse: "Horror ecológico em que mortos-vivos são ressuscitados por uma tecnologia agrícola experimental.", imagem: filme05 },
  { id: 6, titulo: "Les Raisins de la Mort", ano: 1978, pais: "França", diretor: "Jean Rollin", sinopse: "Zumbis surgem após contaminação de vinhedos, misturando crítica ambiental e horror poético.", imagem: filme06 },
  { id: 7, titulo: "Zombi 2", ano: 1979, pais: "Itália", diretor: "Lucio Fulci", sinopse: "Clássico do horror italiano que mostra um surto de zumbis em uma ilha tropical, famoso por seu gore extremo.", imagem: filme07 },
  { id: 8, titulo: "Virus – L'inferno dei morti viventi", ano: 1980, pais: "Itália", diretor: "Bruno Mattei", sinopse: "Um vazamento químico em um laboratório libera um vírus que transforma pessoas em zumbis.", imagem: filme08 },
  { id: 9, titulo: "Zombi Holocaust", ano: 1980, pais: "Itália", diretor: "Marino Girolami", sinopse: "Mistura bizarra de horror canibal e zumbis, um clássico cult do cinema exploitation italiano.", imagem: filme09 },
  { id: 10, titulo: "Night of the Comet", ano: 1984, pais: "EUA", diretor: "Thom Eberhardt", sinopse: "Duas adolescentes sobrevivem à passagem de um cometa que transforma a população em mortos-vivos.", imagem: filme10 },
  { id: 11, titulo: "Re-Animator", ano: 1985, pais: "EUA", diretor: "Stuart Gordon", sinopse: "Estudante de medicina desenvolve um soro que traz os mortos de volta à vida, com consequências grotescas.", imagem: filme11 },
  { id: 12, titulo: "The Return of the Living Dead", ano: 1985, pais: "EUA", diretor: "Dan O’Bannon", sinopse: "Mistura de comédia e horror que introduz os zumbis falantes que gritam por cérebros.", imagem: filme12 },
  { id: 13, titulo: "Day of the Dead", ano: 1985, pais: "EUA", diretor: "George A. Romero", sinopse: "Cientistas e militares entram em colapso em um bunker subterrâneo cercado por hordas de mortos-vivos.", imagem: filme13 },
  { id: 14, titulo: "Flesheater", ano: 1988, pais: "EUA", diretor: "Bill Hinzman", sinopse: "Grupo de jovens em uma fazenda luta pela sobrevivência contra mortos-vivos famintos.", imagem: filme14 },
  { id: 15, titulo: "Braindead / Dead Alive", ano: 1992, pais: "Nova Zelândia", diretor: "Peter Jackson", sinopse: "Jovem tenta esconder a mãe infectada por uma mordida de macaco-zumbi; humor negro e gore insano.", imagem: filme15 },
  { id: 16, titulo: "Ed and His Dead Mother", ano: 1993, pais: "EUA", diretor: "Jonathan Wacks", sinopse: "Jovem compra um serviço de ressuscitação para trazer sua mãe de volta à vida, com resultados desastrosos.", imagem: filme16 },
  { id: 17, titulo: "Dellamorte Dellamore", ano: 1994, pais: "Itália", diretor: "Michele Soavi", sinopse: "Coveiro enfrenta mortos-vivos que insistem em sair de suas tumbas, em uma trama surreal e filosófica.", imagem: filme17 },
  { id: 18, titulo: "Resident Evil", ano: 2002, pais: "EUA", diretor: "Paul W.S. Anderson", sinopse: "Zumbis rápidos e infectados pelo T-vírus em um laboratório subterrâneo; adaptação do jogo.", imagem: evil1 },
  { id: 19, titulo: "28 Days Later", ano: 2002, pais: "Reino Unido", diretor: "Danny Boyle", sinopse: "Uma praga transforma a humanidade em criaturas violentas sedentas de sangue.", imagem: filme18 },
  { id: 20, titulo: "House of the Dead", ano: 2003, pais: "EUA", diretor: "Uwe Boll", sinopse: "Baseado no jogo de arcade; zumbis infectam ilha com terror e ação.", imagem: filme19 },
  { id: 21, titulo: "Dawn of the Dead", ano: 2004, pais: "EUA", diretor: "Zack Snyder", sinopse: "Remake do clássico; sobreviventes se refugiam em shopping durante apocalipse zumbi.", imagem: filme2004 },
  { id: 22, titulo: "Shaun of the Dead", ano: 2004, pais: "Reino Unido", diretor: "Edgar Wright", sinopse: "Comédia que mistura humor britânico e horror zumbi.", imagem: filme20 },
  { id: 23, titulo: "Land of the Dead", ano: 2005, pais: "EUA", diretor: "George A. Romero", sinopse: "Humanidade vive em cidade fortificada enquanto zumbis evoluem.", imagem: filme21 },
  { id: 24, titulo: "Planet Terror", ano: 2007, pais: "EUA", diretor: "Robert Rodriguez", sinopse: "Arma biológica causa infestação zumbi em cidade do Texas.", imagem: filme22 },
  { id: 25, titulo: "Dead Snow", ano: 2009, pais: "Noruega", diretor: "Tommy Wirkola", sinopse: "Estudantes enfrentam zumbis nazistas em montanhas nevadas.", imagem: deadsnow },
  { id: 26, titulo: "Zombieland", ano: 2010, pais: "EUA", diretor: "Ruben Fleischer", sinopse: "Comédia de ação em mundo pós-apocalíptico.", imagem: zombieland },
  { id: 27, titulo: "World War Z", ano: 2013, pais: "EUA", diretor: "Marc Forster", sinopse: "Ex-agente da ONU tenta deter pandemia global de zumbis.", imagem: filme24 },
  { id: 28, titulo: "Maggie", ano: 2015, pais: "EUA", diretor: "Henry Hobson", sinopse: "Pai cuida da filha durante lenta transformação em zumbi.", imagem: filme26 },
  { id: 29, titulo: "Train to Busan", ano: 2016, pais: "Coreia do Sul", diretor: "Yeon Sang-ho", sinopse: "Apocalipse zumbi dentro de um trem em alta velocidade.", imagem: filme27 },
  { id: 30, titulo: "The Girl with All the Gifts", ano: 2016, pais: "Reino Unido", diretor: "Colm McCarthy", sinopse: "Humanidade enfrenta infecção fúngica com dilemas éticos.", imagem: filme28 },
  { id: 31, titulo: "Overlord", ano: 2018, pais: "EUA", diretor: "Julius Avery", sinopse: "Soldados enfrentam experiências nazistas envolvendo mortos-vivos.", imagem: filme29 },
  { id: 32, titulo: "Cargo", ano: 2018, pais: "Austrália", diretor: "Ben Howling, Yolanda Ramke", sinopse: "Pai tenta proteger filha após ser infectado.", imagem: filme30 },
  { id: 33, titulo: "Day of the Dead: Bloodline", ano: 2018, pais: "EUA", diretor: "Hèctor Hernández Vicens", sinopse: "Remake moderno do clássico de Romero.", imagem: filme35 },
  { id: 34, titulo: "The Dead Don’t Die", ano: 2019, pais: "EUA", diretor: "Jim Jarmusch", sinopse: "Comédia meta sobre zumbis e sociedade.", imagem: filme31 },
  { id: 35, titulo: "Alive", ano: 2020, pais: "Coreia do Sul", diretor: "Cho Il-hyung", sinopse: "Jovem tenta sobreviver isolado em prédio durante surto.", imagem: filme32 },
  { id: 36, titulo: "Army of the Dead", ano: 2021, pais: "EUA", diretor: "Zack Snyder", sinopse: "Grupo planeja assalto em Las Vegas infestada.", imagem: filme33 },
  { id: 37, titulo: "Resident Evil: Welcome to Raccoon City", ano: 2022, pais: "Canadá/EUA", diretor: "Johannes Roberts", sinopse: "Reboot da franquia com foco em horror clássico.", imagem: filme34 },
  { id: 38, titulo: "Zom 100", ano: 2023, pais: "Japão", diretor: "Yûsuke Ishida", sinopse: "Homem cria lista de 100 coisas antes de virar zumbi.", imagem: zom100 }
];

// =========================
// SÉRIES
// =========================
export const series = [
  { id: 1, titulo: "The Walking Dead", ano: "2010–2022", pais: "EUA", temporadas: 11, sinopse: "Xerife lidera sobreviventes em mundo dominado por zumbis.", imagem: walkingdead },
  { id: 2, titulo: "Death Valley", ano: "2011", pais: "EUA", temporadas: 1, sinopse: "Polícia patrulha cidade infestada por criaturas.", imagem: deathvalley },
  { id: 3, titulo: "In the Flesh", ano: "2013–2014", pais: "Reino Unido", temporadas: 2, sinopse: "Zumbis reabilitados tentam retornar à sociedade.", imagem: intheflesh },
  { id: 4, titulo: "Z Nation", ano: "2014–2018", pais: "EUA", temporadas: 5, sinopse: "Grupo leva sobrevivente imune pelo país.", imagem: znation },
  { id: 5, titulo: "Fear the Walking Dead", ano: "2015–2023", pais: "EUA", temporadas: 8, sinopse: "Mostra o início do apocalipse em outra cidade.", imagem: fear },
  { id: 6, titulo: "iZombie", ano: "2015–2019", pais: "EUA", temporadas: 5, sinopse: "Zumbi ajuda a resolver crimes com memórias das vítimas.", imagem: izombie },
  { id: 7, titulo: "Ash vs Evil Dead", ano: "2015–2018", pais: "EUA", temporadas: 3, sinopse: "Horror e comédia com mortos-vivos e demônios.", imagem: ash },
  { id: 8, titulo: "Santa Clarita Diet", ano: "2017–2019", pais: "EUA", temporadas: 3, sinopse: "Família lida com esposa transformada em zumbi.", imagem: santaclarita },
  { id: 9, titulo: "Kingdom", ano: "2019–2020", pais: "Coreia do Sul", temporadas: 2, sinopse: "Príncipe enfrenta praga zumbi na era Joseon.", imagem: kingdom },
  { id: 10, titulo: "Black Summer", ano: "2019–2021", pais: "EUA", temporadas: 2, sinopse: "Sobrevivência brutal nos primeiros dias do surto.", imagem: blacksummer },
  { id: 11, titulo: "All of Us Are Dead", ano: "2022", pais: "Coreia do Sul", temporadas: 1, sinopse: "Estudantes presos em escola infestada.", imagem: allofusaredead },
  { id: 12, titulo: "The Last of Us", ano: "2023–", pais: "EUA", temporadas: 2, sinopse: "Jornada emocional em mundo devastado por fungos.", imagem: thelastofus },
  { id: 13, titulo: "The Walking Dead: Dead City", ano: "2023–", pais: "EUA", temporadas: 1, sinopse: "Maggie e Negan enfrentam Manhattan isolada.", imagem: twddc },
  { id: 14, titulo: "The Walking Dead: Daryl Dixon", ano: "2023–", pais: "EUA / França", temporadas: 1, sinopse: "Daryl acorda na França cercado por novos perigos.", imagem: daryl }
];

// =========================
// ANIMAÇÕES
// =========================
export const animacoes = [
  { id: 1, titulo: "Resident Evil: Degeneration", ano: 2008, pais: "Japão", diretor: "Makoto Kamiya", sinopse: "Leon e Claire enfrentam novo surto do vírus T.", imagem: degeneration },
  { id: 2, titulo: "Dead Space: Downfall", ano: 2008, pais: "EUA", diretor: "Chuck Patton", sinopse: "Tripulação enfrenta necromorfos no espaço.", imagem: deadspace },
  { id: 3, titulo: "Highschool of the Dead", ano: 2010, pais: "Japão", diretor: "Tetsurō Araki", sinopse: "Estudantes tentam sobreviver ao apocalipse.", imagem: highschool },
  { id: 4, titulo: "ParaNorman", ano: 2012, pais: "EUA", diretor: "Sam Fell, Chris Butler", sinopse: "Garoto que fala com mortos salva sua cidade.", imagem: paranorman },
  { id: 5, titulo: "Night of the Living Dead: Darkest Dawn", ano: 2015, pais: "EUA", diretor: "Krisztian Majdik", sinopse: "Versão animada do clássico de Romero.", imagem: darkestdawn },
  { id: 6, titulo: "Seoul Station", ano: 2016, pais: "Coreia do Sul", diretor: "Yeon Sang-ho", sinopse: "Caos zumbi começa em estação de trem.", imagem: seulstation }
];