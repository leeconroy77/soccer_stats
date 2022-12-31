import { useState } from 'react'
import Select from "react-select"
import {ScottishLeagueOne} from './directory/Directory.scottishLeagueOne'
import {croatiaHNL} from './directory/Directory.croatiaHNL'
import {EnglishChampionship} from './directory/Directory.englishChampionship'
import {EnglishLeagueOne} from './directory/Directory.englishLeagueOne'
import {EnglishLeagueTwo} from './directory/Directory.englishLeagueTwo'
import {EnglishPremier} from './directory/Directory.englishPremier'
import {ScottishChampionship} from './directory/Directory.scottishChampionship'
import {ScottishLeagueTwo} from './directory/Directory.scottishLeagueTwo'
import {ScottishPremiership} from './directory/Directory.scottishPremiership'
import {SerieB} from './directory/Directory.serieB'
import {BulgarianParvaLiga} from './directory/Directory.bulgarianParvaLiga'
import {IndianISL} from './directory/Directory.indianISL.js'
import {ChineseSuperLeague} from './directory/Directory.chineseSuperLeague'
import {Turkish1Lig} from './directory/Directory.turkish1Lig'
import {SpanishLaLiga} from './directory/Directory.spanishLaLiga'
import {SpanishLaLiga2} from './directory/Directory.spanishLaLiga2'
import {RomanianLiga1} from './directory/Directory.romanianLiga1'
import {BelgianChallengerProLeague} from './directory/Directory.belgianChallengerProLeague'
import {FrenchLigue1} from './directory/Directory.frenchLigue1'
import {FrenchLigue2} from './directory/Directory.frenchLigue2'
import {TurkishSuperLig} from './directory/Directory.turkishSuperLig'

import styles from './app.module.css'



function App() {
























const leagues = [
  {value: "EnglishPremier", label: "EnglishPremier"}, {value: "EnglishChampionship",label: "EnglishChampionship"}, {value: "EnglishLeagueOne", label: "EnglishLeagueOne"}, {value: "EnglishLeagueTwo", label: "EnglishLeagueTwo"}, {value: "IndianISL", label: "IndianISL"}, {value: "BulgarianParvaLiga", label: "BulgarianParvaLiga"}, {value: "Turkish1Lig", label: "Turkish1Lig"}, {value: "ChineseSuperLeague", label: "ChineseSuperLeague"},{value: "SerieB", label: "SerieB"}
]

const formaton = [
  {value: "4231", label: "4231"}, {value: "442",label: "442"}, {value: "433", label: "433"}, {value: "451", label: "451"},{value: "352", label: "352"},{value: "343", label: "343"},{value: "532", label: "532"},{value: "541", label: "541"},
];

const EnglishPremierTeams = [
  {value: "Arsenal", label: "Arsenal"}, {value: "Aston Villa",label: "Aston Villa"}, {value: "Bournemouth", label: "Bournemouth"}, {value: "Brentford", label: "Brentford"}, {value: "Brighton",label: "Brighton"}, {value: "Chelsea",label: "Chelsea"}, {value: "Crystal Palace",label: "Crystal Palace"}, {value: "Everton",label: "Everton"}, {value: "Fulham",label: "Fulham"}, {value: "Leeds",label: "Leeds"},  {value: "Leicester",label: "Leicester"},{value: "Liverpool",label: "Liverpool"}, {value: "Man City",label: "Man City"}, {value: "Man Utd",label: "Man Utd"}, {value: "Newcastle",label: "Newcastle"}, {value: "Nottm Forest",label: "Nottm Forest"}, {value: "Southampton",label: "Southampton"}, {value: "Tottenham",label: "Tottenham"}, {value: "West Ham",label: "West Ham"}, {value: "Wolves",label: "Wolves"}
]

const EnglishChampionshipTeams = [
  {value: "Accrington", label: "Accrington"}, {value: "Barnsley",label: "Barnsley"}, {value: "Bolton", label: "Bolton"}, {value: "Bristol Rovers", label: "Bristol Rovers"}, {value: "Burton",label: "Burton"}, {value: "Cambridge Utd",label: "Cambridge Utd"}, {value: "Charlton",label: "Charlton"}, {value: "Cheltenham",label: "Cheltenham"}, {value: "Derby",label: "Derby"}, {value: "Exeter",label: "Exeter"},  {value: "Fleetwood",label: "Fleetwood"},{value: "Forest Green",label: "Forest Green"}, {value: "Ipswich",label: "Ipswich"},{value: "Lincoln",label: "Lincoln"},{value: "Morecambe",label: "Morecambe"}, {value: "MK Dons",label: "MK Dons"},{value: "Oxford Utd",label: "Oxford Utd"}, {value: "Peterborough",label: "Peterborough"}, {value: "Plymouth",label: "Plymouth"},{value: "Portsmouth",label: "Portsmouth"},{value: "Port Vale",label: "Port Vale"}, {value: "Sheff Wed",label: "Sheff Wed"}, {value: "Shrewsbury",label: "Shrewsbury"}, {value: "Wycombe",label: "Wycombe"}
] 

const EnglishLeagueOneTeams = [
  {value: "Accrington", label: "Accrington"}, {value: "Barnsley",label: "Barnsley"}, {value: "Bolton", label: "Bolton"}, {value: "Bristol Rovers", label: "Bristol Rovers"}, {value: "Burton",label: "Burton"}, {value: "Cambridge Utd",label: "Cambridge Utd"}, {value: "Charlton",label: "Charlton"}, {value: "Cheltenham",label: "Cheltenham"}, {value: "Derby",label: "Derby"}, {value: "Exeter",label: "Exeter"},  {value: "Fleetwood",label: "Fleetwood"},{value: "Forest Green",label: "Forest Green"}, {value: "Ipswich",label: "Ipswich"},{value: "Lincoln",label: "Lincoln"},{value: "Morecambe",label: "Morecambe"}, {value: "MK Dons",label: "MK Dons"},{value: "Oxford Utd",label: "Oxford Utd"}, {value: "Peterborough",label: "Peterborough"}, {value: "Plymouth",label: "Plymouth"},{value: "Portsmouth",label: "Portsmouth"},{value: "Port Vale",label: "Port Vale"}, {value: "Sheff Wed",label: "Sheff Wed"}, {value: "Shrewsbury",label: "Shrewsbury"}, {value: "Wycombe",label: "Wycombe"}
]
const EnglishLeagueTwoTeams = [
  {value: "AFC Wimbledon", label: "AFC Wimbledon"}, {value: "Barrow",label: "Barrow"}, {value: "Bradford City", label: "Bradford City"}, {value: "Carlisle", label: "Carlisle"}, {value: "Colchester",label: "Colchester"}, {value: "Crawley",label: "Crawley"}, {value: "Crewe",label: "Crewe"}, {value: "Doncaster",label: "Doncaster"}, {value: "Gillingham",label: "Gillingham"}, {value: "Grimsby",label: "Grimsby"}, 
  {value: "Harrogate",label: "Harrogate"}, {value: "Hartlepool",label: "Hartlepool"},{value: "Leyton Orient",label: "Leyton Orient"}, {value: "Mansfield",label: "Mansfield"},{value: "Newport",label: "Newport"}, {value: "Northampton",label: "Northampton"}, {value: "Rochdale",label: "Rochdale"},{value: "Salford",label: "Salford"}, {value: "Stevenage",label: "Stevenage"}, {value: "Stockport",label: "Stockport"},{value: "Sutton",label: "Sutton"},{value: "Swindon",label: "Swindon"}, {value: "Tranmere",label: "Tranmere"}, {value: "Walsall",label: "Walsall"}, {value: "Wycombe",label: "Wycombe"}
]

const IndianISLTeams = [
  {value: "ATK Mohun Bagan", label: "ATK Mohun Bagan"}, {value: "Bengaluru FC",label: "Bengaluru FC"}, {value: "Chennaiyin", label: "Chennaiyin"}, {value: "East Bengal", label: "East Bengal"}, {value: "Goa",label: "Goa"}, {value: "Hyderabad",label: "Hyderabad"}, {value: "Jamshedpur",label: "Jamshedpur"}, {value: "Kerala Blasters",label: "Kerala Blasters"}, {value: "Mumbai City",label: "Mumbai City"}, {value: "North East Utd",label: "North East Utd"}, {value: "Odisha FC",label: "Odisha FC"}
]
const BulgarianParvaLigaTeams = [
  {value: "Arda", label: "Arda"}, {value: "Beroe",label: "Beroe"}, {value: "Botev Plovdiv", label: "Botev Plovdiv"}, {value: "Botev Vratsa", label: "Botev Vratsa"}, {value: "Cherno More",label: "Cherno More"}, {value: "CSKA 1948 Sofia",label: "CSKA 1948 Sofia"}, {value: "CSKA Sofia",label: "CSKA Sofia"}, {value: "Hebar",label: "Hebar"}, {value: "Levski",label: "Levski"}, {value: "Lok. Plovdiv",label: "Lok. Plovdiv"}, {value: "Lok. Sofia",label: "Lok. Sofia"}, {value: "Ludogorets",label: "Ludogorets"}, {value: "Pirin Blagoevgrad",label: "Pirin Blagoevgrad"}, {value: "Septemvri Sofia",label: "Septemvri Sofia"}, {value: "Slavia Sofia",label: "Slavia Sofia"}, {value: "Spartak Varna",label: "Spartak Varna"}, 
]
const Turkish1LigTeams = [
  {value: "Adanaspor", label: "Adanaspor"}, {value: "Altay",label: "Altay"}, {value: "Altinordu", label: "Altinordu"}, {value: "Bandirmaspor", label: "Bandirmaspor"}, {value: "Bodrumspor",label: "Bodrumspor"}, {value: "Boluspor",label: "Boluspor"}, {value: "Denizlispor",label: "Denizlispor"}, {value: "Erzurumspor",label: "Erzurumspor"}, {value: "Eyupspor",label: "Eyupspor"}, {value: "Genclerbirligi",label: "Genclerbirligi"}, {value: "Goztepe",label: "Goztepe"}, {value: "Keciorengucu",label: "Keciorengucu"}, {value: "Manisa FK",label: "Manisa FK"}, {value: "Pendikspor",label: "Pendikspor"}, {value: "Rizespor",label: "Rizespor"}, {value: "Sakaryaspor",label: "Sakaryaspor"}, {value: "Samsunspor",label: "Samsunspor"}, {value: "Tuzlaspor",label: "Tuzlaspor"}, {value: "Yeni Malatyaspor",label: "Yeni Malatyaspor"}, 
]
const ChineseSuperLeagueTeams = [
  {value: "Beijing Guoan", label: "Beijing Guoan"}, {value: "Cangzhou",label: "Cangzhou"}, {value: "Changchun Yatai",label: "Changchun Yatai"},{value: "Chengdu Rongcheng", label: "Chengdu Rongcheng"}, {value: "Dalian Pro", label: "Dalian Pro"}, {value: "Guangzhou City",label: "Guangzhou City"}, {value: "Guangzhou FC",label: "Guangzhou FC"}, {value: "Hebei",label: "Hebei"}, {value: "Henan Songshan Longmen",label: "Henan Songshan Longmen"}, {value: "Meizhou Hakka",label: "Meizhou Hakka"}, {value: "Shandong Taishan",label: "Shandong Taishan"}, {value: "Shanghai Port",label: "Shanghai Port"}, {value: "Shanghai Shenhua",label: "Shanghai Shenhua"}, {value: "Shenzhen",label: "Shenzhen"}, {value: "Tianjin Jinmen Tiger",label: "Tianjin Jinmen Tiger"}, {value: "Wuhan FC",label: "Wuhan FC"}, {value: "Wuhan Three Towns",label: "Wuhan Three Towns"}, {value: "Zhejiang Professional",label: "Zhejiang Professional"}
]
const SerieBTeams = [
  {value: "Ascoli", label: "Ascoli"}, {value: "Bari",label: "Bari"}, {value: "Benevento", label: "Benevento"}, {value: "Brescia", label: "Brescia"}, 
   {value: "Cagliari",label: "Cagliari"}, {value: "Cittadella",label: "Cittadella"}, {value: "Como",label: "Como"}, {value: "Cosenza",label: "Cosenza"}, {value: "Frosinone",label: "Frosinone"}, {value: "Genoa",label: "Genoa"}, {value: "Modena",label: "Modena"},  {value: "Palermo",label: "Palermo"},{value: "Parma",label: "Parma"}, {value: "Perugia",label: "Perugia"}, {value: "Pisa",label: "Pisa"}, {value: "Reggina",label: "Reggina"}, {value: "Spal",label: "Spal"}, {value: "Sudtirol",label: "Sudtirol"}, {value: "Ternana",label: "Ternana"}, {value: "Venezia",label: "Venezia"}
]

const RomanianLiga1Teams = [
  {value: "Botosani", label: "Botosani"}, {value: "CFR Cluj", label: "CFR Cluj"}, {value: "Chindia Targoviste",label: "Chindia Targoviste"}, {value: "Farul Constanta", label: "Farul Constanta"}, {value: "FC Arges", label: "FC Arges"}, 
   {value: "FC Hermannstadt",label: "FC Hermannstadt"}, {value: "FC Rapid Bucuresti",label: "FC Rapid Bucuresti"}, {value: "FC Voluntari",label: "FC Voluntari"}, {value: "FCSB",label: "FCSB"}, {value: "Mioveni",label: "Mioveni"}, {value: "Petrolul",label: "Petrolul"}, {value: "Sepsi Sf. Gheorghe",label: "Sepsi Sf. Gheorghe"},  {value: "U. Cluj",label: "U. Cluj"},{value: "U Craiova 1948",label: "U Craiova 1948"}, {value: "Univ. Craiova",label: "Univ. Craiova"}, {value: "UTA Arad",label: "UTA Arad"}
]

const SpanishLaLiga2Teams = [
  {value: "Alaves", label: "Alaves"}, {value: "Albacete",label: "Albacete"}, {value: "Andorra", label: "Andorra"}, {value: "Burgos CF", label: "Burgos CF"}, {value: "Cartagena",label: "Cartagena"}, {value: "Eibar",label: "Eibar"}, {value: "Gijon",label: "Gijon"}, {value: "Granada",label: "Granada"}, {value: "Huesca",label: "Huesca"}, {value: "Las Palmas",label: "Las Palmas"}, 
  {value: "Leganes",label: "Leganes"}, {value: "Levante",label: "Levante"},{value: "Lugo",label: "Lugo"}, {value: "Malaga",label: "Malaga"},{value: "Mirandes",label: "Mirandes"}, {value: "Ponferradina",label: "Ponferradina"}, {value: "R. Oviedo",label: "R. Oviedo"},{value: "Racing Santander",label: "Racing Santander"}, {value: "Tenerife",label: "Tenerife"}, {value: "Villarreal B",label: "Villarreal B"},{value: "UD Ibiza",label: "UD Ibiza"},{value: "Zaragoza",label: "Zaragoza"}
]
const ScottishPremiershipTeams = [
  {value: "Aberdeen", label: "Aberdeen"}, {value: "Celtic", label: "Celtic"}, {value: "Dundee Utd",label: "Dundee Utd"}, {value: "Hearts", label: "Hearts"}, {value: "Hibernian", label: "Hibernian"}, 
   {value: "Kilmarnock",label: "Kilmarnock"}, {value: "Livingston",label: "Livingston"},{value: "Motherwell",label: "Motherwell"},{value: "Rangers",label: "Rangers"}, {value: "Ross County",label: "Ross County"}, {value: "St. Johnstone",label: "St. Johnstone"}, {value: "St. Mirren",label: "St. Mirren"}
]



const [valueLeague, setValueLeague ] = useState([]);
const [valueHome, setvalueHome ] = useState("");
const [valueAway, setvalueAway ] = useState("");
const [homeFormation, setHomeFormation ] = useState("");
const [awayFormation, setAwayFormation ] = useState("");
// const [homeFormationLeagueAvg, setHomeFormationLeagueAvg ] = useState(0);
// const [awayFormationLeagueAvg, setAwayFormationLeagueAvg ] = useState(0);
const [upDatedLeague, setUpDatedLeague ] = useState([]);
const [upDatedHome, setUpDatedHome ] = useState("");
const [upDatedAway, setUpDatedAway ] = useState("");
// const [totalHomeAvgAgainstAwayDefence, setTotalHomeAvgAgainstAwayDefence ] = useState(0);
// const [totalAwayAvgAgainstHomeDefence, setTotalAwayAvgAgainstHomeDefence ] = useState(0);
const [upDatedHomeFormation, setUpDatedHomeFormation ] = useState(homeFormation);
const [totalAvgHomeGoalsFormationStrategy, setTotalAvgHomeGoalsFormationStrategy ] = useState(0);
const [totalAvgAwayGoalsFormationStrategy, setTotalAvgAwayGoalsFormationStrategy ] = useState(0);
const [upDatedAwayFormation, setUpDatedAwayFormation ] = useState(awayFormation);
const [totalAvgHomeGoals, setTotalAvgHomeGoals ] = useState(0);
const [totalAvgHomeGoalsFormation, setTotalAvgHomeGoalsFormation ] = useState(0);
// const [totalAvgHomeGoalsFormationScored, setTotalAvgHomeGoalsFormationScored ] = useState(0);
// const [totalAvgHomeGoalsFormationConceded, setTotalAvgHomeGoalsFormationConceded ] = useState(0);
const [totalAvgAwayGoals, setTotalAvgAwayGoals ] = useState(0);
const [totalAvgAwayGoalsFormation, setTotalAvgAwayGoalsFormation ] = useState(0);
// const [totalAvgAwayGoalsFormationScored, setTotalAvgAwayGoalsFormationScored ] = useState(0);
// const [totalAvgAwayGoalsFormationConceded, setTotalAvgAwayGoalsFormationConceded ] = useState(0);
const [exactFormationTotalGoalsHome, setExactFormationTotalGoalsHome ] = useState(0);
const [exactFormationTotalGoalsAway, setExactFormationTotalGoalsAway ] = useState(0);
const [totalFormationBttsHome, setTotalFormationBttsHome ] = useState(0);
const [totalFormationBttsAway, setTotalFormationBttsAway ] = useState(0);
const [totalSecondHalfGoalsPercentageHome, setTotalSecondHalfGoalsPercentageHome ] = useState(0);
const [totalSecondHalfGoalsPercentageAway, setTotalSecondHalfGoalsPercentageAway ] = useState(0);
// const [totalFormationFistHalfGoalsHome, setTotalFormationFistHalfGoalsHome ] = useState(0);
// const [totalFormationFistHalfGoalsAway, setTotalFormationFistHalfGoalsAway ] = useState(0);
const [totalFormationSecondHalfGoalsHome, setTotalFormationSecondHalfGoalsHome ] = useState(0);
const [totalFormationSecondHalfGoalsAway, setTotalFormationSecondHalfGoalsAway ] = useState(0);
// const [aveGoalScoredAgainstOppFormationHome, setAveGoalScoredAgainstOppFormationHome ] = useState(0);
// const [aveGoalConcedeAgainstOppFormationHome, setAveGoalConcedeAgainstOppFormationHome ] = useState(0);
// const [aveGoalScoredAgainstOppFormationAway, setAveGoalScoredAgainstOppFormationAway, ] = useState(0);
// const [home442Ave, setHome442Ave,] = useState(0);
// const [away442Ave, setAway442Ave,] = useState(0);
// const [home4231Ave, setHome4231Ave,] = useState(0);
// const [away4231Ave, setAway4231Ave,] = useState(0);
// const [home433Ave, setHome433Ave,] = useState(0);
// const [away433Ave, setAway433Ave,] = useState(0);
// const [home451Ave, setHome451Ave,] = useState(0);
// const [away451Ave, setAway451Ave,] = useState(0);
// const [home343Ave, setHome343Ave,] = useState(0);
// const [away343Ave, setAway343Ave,] = useState(0);
// const [home352Ave, setHome352Ave,] = useState(0);
// const [away352Ave, setAway352Ave,] = useState(0);
// const [home541Ave, setHome541Ave,] = useState(0);
// const [away541Ave, setAway541Ave,] = useState(0);
// const [home532Ave, setHome532Ave,] = useState(0);
// const [away532Ave, setAway532Ave,] = useState(0);
const [totalPoints, setTotalPoints,] = useState(0);
const [totalPointsFormation, setTotalPointsFormation,] = useState(0);


// const handleChangeLeague = (e) => {
//   setValueLeague(e.target.value)  
// }

// const handleChangeHome = (e) => {
//   setvalueHome(e.target.value)  
// }
// const handleChangeAway = (e) => {     
//   setvalueAway(e.target.value)     
// } 
// const handleChangeHomeFormation = (e) => {
//   setHomeFormation(e.target.value)  
// }

// const handleChangeAwayFormation = (e) => {
//   setAwayFormation(e.target.value)  
// }



const handleLeagueChange = (selectedOption) => {
  
 return setValueLeague(selectedOption.value)
 
};


let leagueName = null;
let leagueTeams = null


if (valueLeague === "EnglishPremier") {
  leagueName = EnglishPremier
 
  
  leagueTeams = EnglishPremierTeams

}
if (valueLeague === "EnglishChampionship") {
  leagueName = EnglishChampionship
  // leagueName = EnglishChampionshipTeams

}
if (valueLeague === "EnglishLeagueOne") {
  leagueName = EnglishLeagueOne
  leagueTeams = EnglishLeagueOneTeams

}
if (valueLeague === "EnglishLeagueTwo") {
  leagueName = EnglishLeagueTwo
  leagueTeams = EnglishLeagueTwoTeams

}
if (valueLeague === "IndianISL") {
  leagueName = IndianISL
  leagueTeams = IndianISLTeams
 
}
if (valueLeague === "BulgarianParvaLiga") {
  leagueName = BulgarianParvaLiga
  leagueTeams = BulgarianParvaLigaTeams
  
}
if (valueLeague === "Turkish1Lig") {
  leagueName = Turkish1Lig
  leagueTeams = Turkish1LigTeams
 
}
if (valueLeague === "ChineseSuperLeague") {
  leagueName = ChineseSuperLeague
  leagueTeams = ChineseSuperLeagueTeams
 
}
if (valueLeague === "SerieB") {
  leagueName = SerieB
  leagueTeams = SerieBTeams
 
}

if (valueLeague === "RomanianLiga1") {
  leagueName = RomanianLiga1
  leagueTeams = RomanianLiga1Teams
}

if (valueLeague === "SpanishLaLiga2") {
  leagueName = SpanishLaLiga2
  leagueTeams = SpanishLaLiga2Teams
}
if (valueLeague === "ScottishPremiership") {
  leagueName = ScottishPremiership
  leagueTeams = ScottishPremiershipTeams
}


const handleHomeTeamChange = (selectedOption) => {
  console.log("handleChangeFormation", selectedOption);
 return setvalueHome(selectedOption.value)
}
const handleAwayTeamChange = (selectedOption) => {
  console.log("handleChangeFormation", selectedOption);
 return setvalueAway(selectedOption.value)
}



const handleHomeFormationChange = (selectedOption) => {
  console.log("handleChangeFormation", selectedOption);
 return setHomeFormation(selectedOption.value)
}

const handleAwayFormationChange = (selectedOption) => {
  console.log("handleChangeFormation", selectedOption);
 return setAwayFormation(selectedOption.value)
}








const handleSubmit = (e) => { 
  e.preventDefault();

  setUpDatedLeague(valueLeague)   
  setUpDatedHome(valueHome)   
  setUpDatedAway(valueAway)

 
  let array = EnglishLeagueTwo.reverse();



  
  let homeSecondHalfGoals = [];
  let awaySecondHalfGoals = [];
  let aveSecondHalfHomeGoals = [];
  let aveSecondHalfAwayGoals = [];
  let strategyResults = [];
  let matchSelection = false;
  let matches = []
  let aveHomeGoals = []
  let aveAwayGoals = []
  let last4homeGoals = []
  let last4AwayGoals = []

console.log(array);


for (let i = 56; i < array.length; i++) {
  let homeTeam = array[i].homeTeam;
  let awayTeam = array[i].awayTeam;
  let HomeFormation = array[i].homeFormation;
  let awayFormation = array[i].awayFormation;
  let secondHalfGoals = array[i].secondHalfGoals;
  let firstHalfGoals = array[i].halfTimeGoals;
  let awayHalfTimeGoals = array[i].awayHalfTimeGoals
  let homeHalfTimeGoals = array[i].homeHalfTimeGoals
  let firstGoalTime = array[i].firstGoalTime
  let halfTimeScore = `${homeHalfTimeGoals}-${awayHalfTimeGoals}`
  let totalGoals = array[i].totalGoals
  let totalHomeFormationGoals = []
  let totalAwayFormationGoals = []
  let aveTotalHomeGoals = 0;
  let aveTotalAwayGoals = 0;
  let homeGoalsScoredOvers = []
  let homeGoalsConcededOvers = []
  let awayGoalsScoredOvers = []
  let awayGoalsConcededOvers = []
  let totalHomeGoalsOvers = []
  let aveHomeGoalsOvers = 0
  let totalHomeGoalsConcededOvers = []
  let aveHomeGoalsConcededOvers = 0
  let totalAwayGoalsOvers = []
  let aveAwayGoalsOvers = 0
  let totalAwayGoalsConcededOvers = []
  let aveAwayGoalsConcededOvers = 0
  let homeGoalsScoredFh =[]
  let homeGoalsConcededFh =[]
  let awayGoalsScoredFh =[]
  let awayGoalsConcededFh =[]
  let totalHomeGoalsFh =[]
  let totalHomeGoalsConcededFh =[]
  let totalAwayGoalsFh =[]
  let totalAwayGoalsConcededFh =[]
  let aveHomeGoalsFh = 0
  let aveHomeGoalsConcededFh = 0
  let aveAwayGoalsFh = 0
  let aveAwayGoalsConcededFh = 0
  
  
  console.log(homeTeam);
  console.log(awayTeam);
  console.log(HomeFormation);
  console.log(awayFormation);
  console.log(aveSecondHalfHomeGoals);  
  console.log(aveSecondHalfAwayGoals); 
  console.log(typeof halfTimeScore);
  

  for (let j = 0; j < i; j++) {
    
    if ((array[j].homeTeam === array[i].homeTeam) && (array[j].homeFormation === array[i].homeFormation))  {
      homeSecondHalfGoals.push(array[j].secondHalfGoals )
      console.log(homeSecondHalfGoals);
      
  }
  if ((array[j].awayTeam === array[i].awayTeam) && (array[j].awayFormation === array[i].awayFormation)) {
        awaySecondHalfGoals.push(array[j].secondHalfGoals)    
        console.log(awaySecondHalfGoals);     
      }

  if ((array[j].homeTeam === array[i].homeTeam) && (array[j].homeFormation === HomeFormation)) {
            totalHomeFormationGoals.push(array[j].totalGoals)
            console.log(totalHomeFormationGoals); 
          } 
  if ((array[j].awayTeam === array[i].awayTeam) && (array[j].awayFormation === awayFormation)) {
    totalAwayFormationGoals.push(array[j].totalGoals)
            console.log(totalAwayFormationGoals); 
  }



///////////////////  X Goals 2.5/////////////////////

          
   if ((array[j].homeTeam === array[i].homeTeam) && (array[j].homeFormation === array[i].homeFormation))  {
            homeGoalsScoredOvers.push(array[j].homeGoals )
            console.log(homeGoalsScoredOvers);
            
        }
   if ((array[j].homeTeam === array[i].homeTeam) && (array[j].homeFormation === array[i].homeFormation))  {
          homeGoalsConcededOvers.push(array[j].awayGoals )
          console.log(homeGoalsConcededOvers);
      }

      if ((array[j].awayTeam === array[i].awayTeam) && (array[j].awayFormation === array[i].awayFormation)) {
        awayGoalsScoredOvers.push(array[j].awayGoals)    
        console.log(awayGoalsScoredOvers);     
      }
      if ((array[j].awayTeam === array[i].awayTeam) && (array[j].awayFormation === array[i].awayFormation)) {
        awayGoalsConcededOvers.push(array[j].homeGoals)    
        console.log(awayGoalsConcededOvers);     
      }

      ///////////////  X Goals first half/////////////////////

    
    // if ((array[j].homeTeam === array[i].homeTeam) && (array[j].homeFormation === array[i].homeFormation))  {
    //          homeGoalsScoredFh.push(array[j].homeHalfTimeGoals )
    //          console.log(homeGoalsScoredFh);
             
    //      }
    // if ((array[j].homeTeam === array[i].homeTeam) && (array[j].homeFormation === array[i].homeFormation))  {
    //        homeGoalsConcededFh.push(array[j].awayHalfTimeGoals )
    //        console.log(homeGoalsConcededFh);
    //    }
 
    //    if ((array[j].awayTeam === array[i].awayTeam) && (array[j].awayFormation === array[i].awayFormation)) {
    //      awayGoalsScoredFh.push(array[j].awayHalfTimeGoals)    
    //      console.log(awayGoalsScoredFh);     
    //    }
    //    if ((array[j].awayTeam === array[i].awayTeam) && (array[j].awayFormation === array[i].awayFormation)) {
    //      awayGoalsConcededFh.push(array[j].homeHalfTimeGoals)    
    //      console.log(awayGoalsConcededFh);     
    //    }

      


    }
      homeSecondHalfGoals.reverse()
      console.log(homeSecondHalfGoals);
      homeSecondHalfGoals = homeSecondHalfGoals.filter((x, i) => i < 2)
      aveSecondHalfHomeGoals = homeSecondHalfGoals.reduce((a, b) => a + b, 0) / homeSecondHalfGoals.length
      console.log(`aveSecondHalfHomeGoals  ${aveSecondHalfHomeGoals}`);

      awaySecondHalfGoals.reverse()
        awaySecondHalfGoals = awaySecondHalfGoals.filter((x, i) => i <2)
        aveSecondHalfAwayGoals = awaySecondHalfGoals.reduce((a, b) => a + b, 0) / awaySecondHalfGoals.length 
        console.log(`aveSecondHalfAwayGoals  ${aveSecondHalfAwayGoals}`);

        totalHomeFormationGoals.reverse()
        console.log(`totalHomeFormationGoals ${totalHomeFormationGoals}`);
        totalHomeFormationGoals = totalHomeFormationGoals.filter((x, i) => i < 2)
        aveTotalHomeGoals = totalHomeFormationGoals.reduce((a, b) => a + b, 0) / totalHomeFormationGoals.length
        console.log(`aveTotalHomeGoals ${aveTotalHomeGoals}`);

        totalAwayFormationGoals.reverse()
        console.log(`totalAwayFormationGoals ${totalAwayFormationGoals}`);
        totalAwayFormationGoals = totalAwayFormationGoals.filter((x, i) => i <2)
        aveTotalAwayGoals = totalAwayFormationGoals.reduce((a, b) => a + b, 0) / totalAwayFormationGoals.length
        console.log(`aveTotalAwayGoals ${aveTotalAwayGoals}`);

/////////////////  X Goals 2.5/////////////////////

        homeGoalsScoredOvers.reverse()
        console.log(`totalHomeGoalsScored ${homeGoalsScoredOvers}`);
        totalHomeGoalsOvers = homeGoalsScoredOvers.filter((x, i) => i <2)
        console.log(`totalHomeGoalsScored ${homeGoalsScoredOvers}`);
        aveHomeGoalsOvers = totalHomeGoalsOvers.reduce((a, b) => a + b, 0) / totalHomeGoalsOvers.length
        console.log(`aveTotalHomeGoals ${aveHomeGoalsOvers}`);

        homeGoalsConcededOvers.reverse()
        console.log(`homeGoalsConceded ${homeGoalsConcededOvers}`);
        totalHomeGoalsConcededOvers = homeGoalsConcededOvers.filter((x, i) => i <2)
        aveHomeGoalsConcededOvers = totalHomeGoalsConcededOvers.reduce((a, b) => a + b, 0) / totalHomeGoalsConcededOvers.length
        console.log(`aveHomeGoalsConceded ${aveHomeGoalsConcededOvers}`);

        awayGoalsScoredOvers.reverse()
        console.log(`awayGoalsScored ${awayGoalsScoredOvers}`);
        totalAwayGoalsOvers = awayGoalsScoredOvers.filter((x, i) => i < 2)
        aveAwayGoalsOvers = totalAwayGoalsOvers.reduce((a, b) => a + b, 0) / totalAwayGoalsOvers.length
        console.log(`aveAwayGoals ${aveAwayGoalsOvers}`);

        awayGoalsConcededOvers.reverse()
        console.log(`awayGoalsConceded ${awayGoalsConcededOvers}`);
        totalAwayGoalsConcededOvers = awayGoalsConcededOvers.filter((x, i) => i <2)
        aveAwayGoalsConcededOvers = totalAwayGoalsConcededOvers.reduce((a, b) => a + b, 0) / totalAwayGoalsConcededOvers.length
        console.log(`aveAwayGoalsConceded ${aveAwayGoalsConcededOvers}`);

    /////////////  X Goals 2.5/////////////////////

let homeGoalStrengthOvers = (aveHomeGoalsOvers + aveAwayGoalsConcededOvers) / 2
let awayGoalStrengthOvers = (aveAwayGoalsOvers + aveHomeGoalsConcededOvers) / 2

if (( homeGoalStrengthOvers > 0.75 &&homeGoalStrengthOvers <1.5)  && (awayGoalStrengthOvers  >0.5&& awayGoalStrengthOvers  <2.01) )  {
  matchSelection = true
  if(matchSelection === true && (array[i].totalGoals > 0)) {
    strategyResults.push(1)
    matches.push(  array[i].totalGoals, homeGoalStrengthOvers,awayGoalStrengthOvers)
  }
  if((matchSelection === true) && (array[i].totalGoals < 1)) {
    strategyResults.push(0)
    matches.push( array[i].totalGoals, homeGoalStrengthOvers,awayGoalStrengthOvers)
  }


// ///////////////////////////////////////////////////////////////////////////////////////////////////////

  

///////////////////  X Goals first half/////////////////////

// homeGoalsScoredFh.reverse()
// console.log(`totalHomeGoalsScored ${homeGoalsScoredFh}`);
// totalHomeGoalsFh = homeGoalsScoredFh.filter((x, i) => i < 3)
// aveHomeGoalsFh = totalHomeGoalsFh.reduce((a, b) => a + b, 0) / totalHomeGoalsFh.length
// console.log(`aveTotalHomeGoals ${aveHomeGoalsFh}`);

// homeGoalsConcededFh.reverse()
// console.log(`homeGoalsConceded ${homeGoalsConcededFh}`);
// totalHomeGoalsConcededFh = homeGoalsConcededFh.filter((x, i) => i <3)
// aveHomeGoalsConcededFh = totalHomeGoalsConcededFh.reduce((a, b) => a + b, 0) / totalHomeGoalsConcededFh.length
// console.log(`aveHomeGoalsConceded ${aveHomeGoalsConcededFh}`);

// awayGoalsScoredFh.reverse()
// console.log(`awayGoalsScored ${awayGoalsScoredFh}`);
// totalAwayGoalsFh = awayGoalsScoredFh.filter((x, i) => i < 3)
// aveAwayGoalsFh = totalAwayGoalsFh.reduce((a, b) => a + b, 0) / totalAwayGoalsFh.length
// console.log(`aveAwayGoals ${aveAwayGoalsFh}`);

// awayGoalsConcededFh.reverse()
// console.log(`awayGoalsConceded ${awayGoalsConcededFh}`);
// totalAwayGoalsConcededFh = awayGoalsConcededFh.filter((x, i) => i < 3)
// aveAwayGoalsConcededFh = totalAwayGoalsConcededFh.reduce((a, b) => a + b, 0) / totalAwayGoalsConcededFh.length
// console.log(`aveAwayGoalsConceded ${aveAwayGoalsConcededFh}`);
  
// /////////////////  X Goals first half/////////////////////

// let homeGoalStrengthFh = (aveHomeGoalsFh + aveAwayGoalsConcededFh) / 2
// let awayGoalStrengthFh = (aveAwayGoalsFh + aveHomeGoalsConcededFh) / 2

// console.log(homeGoalStrengthFh);
// console.log(awayGoalStrengthFh);


// if(((homeGoalStrengthFh > -0.5 && homeGoalStrengthFh <11.5) && (  awayGoalStrengthFh > -0.25 && awayGoalStrengthFh < 12.4))) {
// matchSelection = true
// if(matchSelection === true && array[i].halfTimeGoals > 0 ) {
// strategyResults.push(1)
// matches.push(array[i].halfTimeGoals,homeGoalStrengthFh,awayGoalStrengthFh)
// }
// if((matchSelection === true) && array[i].halfTimeGoals < 1) {
// strategyResults.push(0)
// matches.push( array[i].halfTimeGoals,homeGoalStrengthFh,awayGoalStrengthFh)
// }




// ///////////////////////////////////////////////////////////////////////////////////////////////////////












// }





  // if( (aveSecondHalfHomeGoals > 0.49 && aveSecondHalfHomeGoals <3.01) && ( aveSecondHalfAwayGoals > 0.49)&& ( aveSecondHalfAwayGoals <3.01)  && (homeGoalStrengthOvers > 0.7 &&homeGoalStrengthOvers <2.51) && (awayGoalStrengthOvers >0.3 && awayGoalStrengthOvers < 1.8)&& (halfTimeScore === "0-0" || halfTimeScore === "1-0" ||halfTimeScore === "0-1" ) ){
  //   matchSelection = true
  //   if(matchSelection === true && secondHalfGoals > 0 ) {
  //     strategyResults.push(1)
  //     matches.push(array[i].secondHalfGoals,aveSecondHalfHomeGoals,aveSecondHalfAwayGoals)
  //   }
  //   if((matchSelection === true) && (secondHalfGoals < 1)) {
  //     strategyResults.push(0)
  //     matches.push(array[i].secondHalfGoals,aveSecondHalfHomeGoals,aveSecondHalfAwayGoals)
  //   }




    
  }



// let combinedFormation = (aveTotalHomeGoals + aveTotalAwayGoals) / 2

  // if((aveSecondHalfHomeGoals > 1 && aveSecondHalfHomeGoals < 3.01) && ( aveSecondHalfAwayGoals > 0.99 && aveSecondHalfAwayGoals < 2.1)  && (combinedFormation >2.99 && combinedFormation < 4.01)) {
  //   matchSelection = true
  //   if(matchSelection === true && totalGoals > 1 ) {
  //     strategyResults.push(1)
  //     matches.push(array[i].homeTeam, array[i].awayTeam)
  //   }
  //   if((matchSelection === true) && (totalGoals < 2)) {
  //     strategyResults.push(0)
  //     matches.push(array[i].homeTeam, array[i].awayTeam)
  //   }
// }
  }
 
  
  

  



console.log(last4homeGoals);


console.log(strategyResults)
console.log(matches)
let newStrategyResults = strategyResults.reduce((a, b) => a + b, 0)
console.log(newStrategyResults)
console.log(newStrategyResults / strategyResults.length)

let firstHalfTest1 = []
let firstHalfTest2 = []

for (let i = 0; i< matches.length; i += 3) {
  
  if ((matches[i] > 0)) {
    firstHalfTest1.push(matches[i+1] )
    firstHalfTest2.push(matches[i+2] )
}
}


console.log(firstHalfTest1.sort());
console.log(firstHalfTest2.sort());


  // const handleClickHomePoints = (e) => {
  //   setUpDatedLeague(valueLeague) 
  //   setUpDatedHome(valueHome)  
  //   setUpDatedAway(valueAway)
  
  //   const homeGoals= () => {
  //     setUpDatedHome(valueHome) 
  //     let homeGamesLastFive = [];
  //     let homeScoredHome = [];
  //     let homeScoredAway = [];
  //     let homeconcedeHome = [];
  //     let homeconcedeAway = [];

  //     setUpDatedAway(valueAway) 
  //     let awayGamesLastFive = [];
  //     let awayScoredHome = [];
  //     let awayScoredAway = [];
  //     let awayconcedeHome = [];
  //     let awayconcedeAway = [];

  //     let homeTotalGoalsScoredPoints = 0
  //     let awayTotalGoalsScoredPoints = 0
  //     let homeTotalGoalsConcededPoints = 0
  //     let awayTotalGoalsConcededPoints = 0
  //     let homeScoredAwayconceded = 0
  //     let homeconcededAwayScored = 0
  //     let totalPoints = 0

  //     leagueName.reverse()
  //     console.log(valueLeague);
      
  //     leagueName.map((match) =>  {
    
  //       if (match.team === valueHome) {
          
  //        homeGamesLastFive.push(match)
  //        console.log(homeGamesLastFive);
  //        homeGamesLastFive =  homeGamesLastFive.filter((match, i) => i < 5)
  //        console.log(homeGamesLastFive);
  //       }
  //       if (match.team === valueAway) {
          
  //         awayGamesLastFive.push(match)
  //         console.log(awayGamesLastFive);
  //         awayGamesLastFive =  awayGamesLastFive.filter((match, i) => i < 5)
  //         console.log(awayGamesLastFive);
  //        }

  //     })
  //        homeGamesLastFive.map(match => {
  //         if (match.ground === "home") {
  //           homeScoredHome.push(match.home_goals)
  //           homeconcedeHome.push(match.away_goals)
  //         }
  //         if (match.ground === "away") {
  //           homeScoredAway.push(match.away_goals)
  //           homeconcedeAway.push(match.home_goals)
  //         }
  //        })
         
  //        homeScoredHome = homeScoredHome.reduce((a, b) => a + b,0) * 1.5
  //        homeScoredAway = homeScoredAway.reduce((a, b) => a + b,0) * 2
  //        homeconcedeHome = homeconcedeHome.reduce((a, b) => a + b,0) * 1.5
  //        homeconcedeAway = homeconcedeAway.reduce((a, b) => a + b,0) * 1
          
       
  //        awayGamesLastFive.map(match => {
  //         if (match.ground === "home") {
  //           awayScoredHome.push(match.home_goals)
  //           awayconcedeHome.push(match.away_goals)
  //         }
  //         if (match.ground === "away") {
  //           awayScoredAway.push(match.away_goals)
  //           awayconcedeAway.push(match.home_goals)
  //         }
  //        })
         
  //        awayScoredHome = awayScoredHome.reduce((a, b) => a + b, 0) * 1.5
  //        awayScoredAway = awayScoredAway.reduce((a, b) => a + b, 0) * 2
  //        awayconcedeHome = awayconcedeHome.reduce((a, b) => a + b, 0) * 1.5
  //        awayconcedeAway = awayconcedeAway.reduce((a, b) => a + b, 0) * 1

  //        homeTotalGoalsScoredPoints = (homeScoredHome + homeScoredAway) / 5
  //        awayTotalGoalsScoredPoints = (awayScoredHome + awayScoredAway) / 5
  //        homeTotalGoalsConcededPoints = (homeconcedeHome + homeconcedeAway) / 5
  //        awayTotalGoalsConcededPoints = (awayconcedeHome + awayconcedeAway) / 5

  //        homeScoredAwayconceded = (homeTotalGoalsScoredPoints + awayTotalGoalsConcededPoints) / 2
  //        homeconcededAwayScored = (homeTotalGoalsConcededPoints + awayTotalGoalsScoredPoints) / 2

  //        totalPoints = (homeScoredAwayconceded + homeconcededAwayScored) /2
    
  //        setTotalPoints(totalPoints)
  //     }
  //     homeGoals()
    
  
    
  // }
  // handleClickHomePoints()




  // const handleClickHomePointsFormation = (e) => {
  
  //   setUpDatedHome(valueHome)  
  //   setUpDatedAway(valueAway)
  //   setUpDatedHomeFormation(homeFormation)
  //   setUpDatedAwayFormation(awayFormation)
  
  //   const homeGoals= () => {
  //     setUpDatedHome(valueHome) 
  //     let homeGamesLastFiveFormationScored = [];
  //     let homeGamesLastFiveOppFormationScored = [];
  //     let homeScoredHomeFormation = [];
  //     let homeScoredAwayFormation = [];
  //     let homeconcedeHomeFormation = [];
  //     let homeconcedeAwayFormation = [];
  //     let homeScoredHomeFormationTotal = 0;
  //     let homeScoredAwayFormationTotal = 0;
  //     let homeconcedeHomeFormationTotal = 0;
  //     let homeconcedeAwayFormationTotal = 0;

  //     setUpDatedAway(valueAway) 
  //     let awayGamesLastFiveFormationScored = [];
  //     let awayGamesLastFiveOppFormationScored = [];
  //     let awayScoredHomeFormation = [];
  //     let awayScoredAwayFormation = [];
  //     let awayconcedeHomeFormation = [];
  //     let awayconcedeAwayFormation = [];
  //     let awayScoredHomeFormationTotal = 0;
  //     let awayScoredAwayFormationTotal = 0;
  //     let awayconcedeHomeFormationTotal = 0;
  //     let awayconcedeAwayFormationTotal = 0;

  //     let homeTotalGoalsScoredPoints = 0;
  //     let awayTotalGoalsScoredPoints = 0;
  //     let homeTotalGoalsConcededPoints = 0;
  //     let awayTotalGoalsConcededPoints = 0;
  //     let homeScoredAwayconceded = 0;
  //     let homeconcededAwayScored = 0;
  //     let totalPointsFormation = 0;

  //     leagueName.reverse()
  //       console.log(leagueName);
  
  //       let homeDefence = []
  //         homeDefence = homeFormation.split("")
  //         homeDefence = homeDefence[0]
  //         homeDefence = homeDefence * 1
  
  //         let awayDefence = []
  //         awayDefence = awayFormation.split("")
  //         awayDefence = awayDefence[0]
  //         awayDefence = awayDefence * 1
        
  //         leagueName.map((match) =>  {
      
  //         if (match.team === valueHome && match.formation === homeFormation && match.ground === "home") {
            
  //          homeGamesLastFiveFormationScored.push(match)
  //          console.log(homeGamesLastFiveFormationScored);
  //          homeGamesLastFiveFormationScored =  homeGamesLastFiveFormationScored.filter((match, i) => i < 3)
  //          console.log(homeGamesLastFiveFormationScored);
  //         }
  
  //         if (match.team === valueHome && match.opp_def === awayDefence && match.ground === "home") {
            
  //           homeGamesLastFiveOppFormationScored.push(match)
  //           console.log(homeGamesLastFiveOppFormationScored);
  //           homeGamesLastFiveOppFormationScored =  homeGamesLastFiveOppFormationScored.filter((match, i) => i < 3)
  //           console.log(homeGamesLastFiveOppFormationScored);
  //          }
  
  //         if (match.team === valueAway && match.formation === awayFormation && match.ground === "away") {
            
  //           awayGamesLastFiveFormationScored.push(match)
  //           console.log(awayGamesLastFiveFormationScored);
  //           awayGamesLastFiveFormationScored =  awayGamesLastFiveFormationScored.filter((match, i) => i < 3)
  //           console.log(awayGamesLastFiveFormationScored);
  //          }
  
  //          if (match.team === valueAway && match.opp_def === homeDefence && match.ground === "away") {
            
  //           awayGamesLastFiveOppFormationScored.push(match)
  //           console.log(awayGamesLastFiveOppFormationScored);
  //           awayGamesLastFiveOppFormationScored =  awayGamesLastFiveOppFormationScored.filter((match, i) => i < 3)
  //           console.log(awayGamesLastFiveOppFormationScored);
  //          }
  
  //       })
  //       homeGamesLastFiveFormationScored.map(match => {
            
  //             homeScoredHomeFormation.push(match.home_goals)
  //             homeconcedeHomeFormation.push(match.away_goals)
  //           })
          
  //           homeGamesLastFiveOppFormationScored.map(match => {
  //             homeScoredAwayFormation.push(match.home_goals)
  //             homeconcedeAwayFormation.push(match.away_goals)
  //           })
  
  
            
           
           
  //          homeScoredHomeFormationTotal = homeScoredHomeFormation.reduce((a, b) => a + b, 0) * 1.5
  //          homeScoredAwayFormationTotal = homeScoredAwayFormation.reduce((a, b) => a + b, 0) * 2
  //          homeconcedeHomeFormationTotal = homeconcedeHomeFormation.reduce((a, b) => a + b, 0) * 1.5
  //          homeconcedeAwayFormationTotal = homeconcedeAwayFormation.reduce((a, b) => a + b, 0) * 1
  
  //          homeScoredHomeFormationTotal = homeScoredHomeFormationTotal / homeScoredHomeFormation.length
  //          homeScoredAwayFormationTotal = homeScoredAwayFormationTotal / homeScoredAwayFormation.length
  //          homeconcedeHomeFormationTotal = homeconcedeHomeFormationTotal / homeconcedeHomeFormation.length
  //          homeconcedeAwayFormationTotal = homeconcedeAwayFormationTotal / homeconcedeAwayFormation.length
  
           
            
         
  //          awayGamesLastFiveFormationScored.map(match => {
            
  //           awayScoredHomeFormation.push(match.away_goals)
  //           awayconcedeHomeFormation.push(match.home_goals)
  //           })
  //           awayGamesLastFiveOppFormationScored.map(match => {
  //             awayScoredAwayFormation.push(match.away_goals)
  //             awayconcedeAwayFormation.push(match.home_goals)
            
  //          })
           
  //          console.log(homeScoredHomeFormation);
  //          console.log(awayScoredHomeFormation);
           
  
  //          awayScoredHomeFormationTotal = awayScoredHomeFormation.reduce((a, b) => a + b, 0) * 1.5
  //          awayScoredAwayFormationTotal = awayScoredAwayFormation.reduce((a, b) => a + b, 0) * 2 
  //          awayconcedeHomeFormationTotal = awayconcedeHomeFormation.reduce((a, b) => a + b, 0) * 1.5
  //          awayconcedeAwayFormationTotal = awayconcedeAwayFormation.reduce((a, b) => a + b, 0) * 1 
  
  //          console.log(homeScoredHomeFormationTotal);
  //          console.log(awayScoredHomeFormationTotal);
           
  
  //          awayScoredHomeFormationTotal = awayScoredHomeFormationTotal / awayScoredHomeFormation.length
  //          awayScoredAwayFormationTotal = awayScoredAwayFormationTotal / awayScoredAwayFormation.length
  //          awayconcedeHomeFormationTotal = awayconcedeHomeFormationTotal / awayconcedeHomeFormation.length
  //          awayconcedeAwayFormationTotal = awayconcedeAwayFormationTotal / awayconcedeAwayFormation.length
  
  //          console.log(homeScoredHomeFormationTotal);
           
  //          console.log(awayScoredHomeFormationTotal);
  
  //          homeTotalGoalsScoredPoints = (homeScoredHomeFormationTotal + homeScoredAwayFormationTotal)
  //          awayTotalGoalsScoredPoints = (awayScoredHomeFormationTotal + awayScoredAwayFormationTotal) 
  //          homeTotalGoalsConcededPoints = (homeconcedeHomeFormationTotal + homeconcedeAwayFormationTotal)
  //          awayTotalGoalsConcededPoints = (awayconcedeHomeFormationTotal + awayconcedeAwayFormationTotal) 
  
  //          console.log(awayTotalGoalsScoredPoints);
  
  //          homeScoredAwayconceded = (homeTotalGoalsScoredPoints + awayTotalGoalsConcededPoints) / 2
  //          homeconcededAwayScored = (homeTotalGoalsConcededPoints + awayTotalGoalsScoredPoints) / 2
  
  //          totalPointsFormation = (homeScoredAwayconceded + homeconcededAwayScored) /2
      
  //          setTotalPointsFormation(totalPointsFormation)
           
  //       }
  //       homeGoals()
    
  
  
  
    
  // }
  // handleClickHomePointsFormation()















  




















  // const handleClickHomeformationLeagueAve = (e) => {
    
  //   setUpDatedHomeFormation(homeFormation)   
  //   setUpDatedHome(valueHome)  
  
  //   const avgHomeTotalGoalsFormationLeague = () => {
  //     let avgHomeGoalsFormationLeauge = []
  //     setUpDatedHomeFormation(homeFormation)  
  //     setUpDatedHome(valueHome) 
      
  //     ScottishLeagueOne.map(match =>  {
      
  //     if (homeFormation === match.formation && match.ground === "home") {
  //       avgHomeGoalsFormationLeauge.push(match.total_goals)
       
  //       console.log(avgHomeGoalsFormationLeauge);
  //     }})
      
      
      
  //   let homeFormationLeagueAvg = avgHomeGoalsFormationLeauge.reduce((a, b) => a + b, 0) / avgHomeGoalsFormationLeauge.length
      
  //    console.log(homeFormationLeagueAvg);
  //    setHomeFormationLeagueAvg(homeFormationLeagueAvg)
  
  //   }
  //   avgHomeTotalGoalsFormationLeague()
  // }
  
  // handleClickHomeformationLeagueAve()



  // const handleClickAwayformationLeagueAve = (e) => {
    
  //   setUpDatedAwayFormation(awayFormation)   
  //   setUpDatedAway(valueAway)  
  
  //   const avgAwayTotalGoalsFormationLeague = () => {
  //     let avgAwayGoalsFormationLeauge = []
  //     setUpDatedAwayFormation(awayFormation)   
  //     setUpDatedAway(valueAway)
      
  //     ScottishLeagueOne.map(match =>  {
      
  //     if (awayFormation === match.formation && match.ground === "away") {
  //       avgAwayGoalsFormationLeauge.push(match.total_goals)
       
  //       console.log(avgAwayGoalsFormationLeauge);
  //     }})
      
      
     
  //   let awayFormationLeagueAvg = avgAwayGoalsFormationLeauge.reduce((a, b) => a + b, 0) / avgAwayGoalsFormationLeauge.length
      
  //    console.log(awayFormationLeagueAvg);
  //    setAwayFormationLeagueAvg(awayFormationLeagueAvg)
  
  //   }
  //   avgAwayTotalGoalsFormationLeague()
  // }
  
  // handleClickAwayformationLeagueAve()

















  const handleClickHome = (e) => {
    
    setUpDatedHome(valueHome)   
  
    const avgHomeTotalGoals = () => {
      let avgHomeGoals = []
      
      
      
      leagueName.map(match =>  {
      
      if (upDatedHome === match.homeTeam) {
      avgHomeGoals.push(match.totalGoals) 
      
     
      }})
      
      
    let avgHomeGoalsFiltered = avgHomeGoals.filter((el, i) => i < 3)
    console.log(avgHomeGoalsFiltered);
    const totalAvgHomeGoals = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
   
    setTotalAvgHomeGoals(totalAvgHomeGoals)
    
  
    }
    avgHomeTotalGoals()
  }

  handleClickHome()


  const handleClickAway = (e) => {
    
    setUpDatedAway(valueAway)
  
    const avgAwayTotalGoals = () => {
      let avgAwayGoals = []
      
      
      leagueName.map(match =>  {
      
      if (upDatedAway === match.awayTeam) {
      avgAwayGoals.push(match.totalGoals)
      
      
    }})
    
      let avgAwayGoalsFiltered = avgAwayGoals.filter((el, i) => i < 3)
    
    const totalAvgAwayGoals = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
      
     
    return setTotalAvgAwayGoals(totalAvgAwayGoals)
     
      

    
  
    }
    
    avgAwayTotalGoals()

  }
  handleClickAway()

    // const handleClickHomeAgainstAwayDefence = (e) => {
    
    //   setAwayFormation(awayFormation)   
    //   setUpDatedHome(valueHome) 
    
    //   const avgHomeTotalGoalsAgainstOppDefence = () => {
    //     setAwayFormation(awayFormation)   
    //   setUpDatedHome(valueHome) 
    //     let avgHomeGoalsAgainstAwayDefence = []
    //     let awayDefence = []
    //     awayDefence = awayFormation.split("")
    //     awayDefence = awayDefence[0]
    //     awayDefence = awayDefence * 1


    //     console.log(typeof(awayDefence))
        
        
    //     ScottishLeagueOne.map(match =>  {
        
    //     if (upDatedHome === match.team && match.opp_def === awayDefence && match.ground === "home" ) {
    //       avgHomeGoalsAgainstAwayDefence.push(match.total_goals) 
    //     console.log(avgHomeGoalsAgainstAwayDefence);
       
    //     }})
    //     avgHomeGoalsAgainstAwayDefence.reverse()
    //     console.log(avgHomeGoalsAgainstAwayDefence);
    //   let avgHomeGoalsFiltered = avgHomeGoalsAgainstAwayDefence.filter((el, i) => i < 5)
    //   console.log(avgHomeGoalsFiltered);
    //   const totalHomeAvgAgainstAwayDefence = avgHomeGoalsAgainstAwayDefence.reduce((a, b) => a + b, 0) / avgHomeGoalsAgainstAwayDefence.length
      
    //   setTotalHomeAvgAgainstAwayDefence(totalHomeAvgAgainstAwayDefence)
    
    //   }
    //   avgHomeTotalGoalsAgainstOppDefence()
    // }
  
    // handleClickHomeAgainstAwayDefence()


    // const handleClickAwayAgainstHomeDefence = (e) => {
    
    //   setHomeFormation(homeFormation)   
    //   setUpDatedAway(valueAway) 
    
    //   const avgAwayTotalGoalsAgainstOppDefence = () => {
    //     setHomeFormation(homeFormation)   
    //   setUpDatedAway(valueAway)
    //     let avgAwayGoalsAgainstHomeDefence = []
    //     let homeDefence = []
    //     homeDefence = homeFormation.split("")
    //     homeDefence = homeDefence[0]
    //     homeDefence = homeDefence * 1


    //     console.log(typeof(homeDefence))
        
        
    //     ScottishLeagueOne.map(match =>  {
        
    //     if (upDatedAway === match.team && match.opp_def === homeDefence && match.ground === "away" ) {
    //       avgAwayGoalsAgainstHomeDefence.push(match.total_goals) 
    //     console.log(avgAwayGoalsAgainstHomeDefence);
       
    //     }})
    //     avgAwayGoalsAgainstHomeDefence.reverse()
    //     console.log(avgAwayGoalsAgainstHomeDefence);
    //   let avgAwayGoalsFiltered = avgAwayGoalsAgainstHomeDefence.filter((el, i) => i < 5)
    //   console.log(avgAwayGoalsFiltered);
    //   const totalAwayAvgAgainstHomeDefence = avgAwayGoalsAgainstHomeDefence.reduce((a, b) => a + b, 0) / avgAwayGoalsAgainstHomeDefence.length
      
    //   setTotalAwayAvgAgainstHomeDefence(totalAwayAvgAgainstHomeDefence)
    
    //   }
    //   avgAwayTotalGoalsAgainstOppDefence()
    // }
  
    // handleClickAwayAgainstHomeDefence()














  
  const handleClickHomeformation = (e) => {
    
    setUpDatedHomeFormation(homeFormation)   
    setUpDatedHome(valueHome)  
  
    const avgHomeTotalGoalsFormation = (totalAvgHomeGoalsFormation) => {
      let avgHomeGoalsFormation = []
      setUpDatedHomeFormation(homeFormation)  
      setUpDatedHome(valueHome) 
      
      leagueName.map(match =>  {
      
      if (homeFormation === match.homeFormation && valueHome === match.homeTeam) {
        avgHomeGoalsFormation.push(match.totalGoals)
       
        
      }})
      console.log(avgHomeGoalsFormation);
      
      
      let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 4)
    
    totalAvgHomeGoalsFormation = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
      
    
     setTotalAvgHomeGoalsFormation(totalAvgHomeGoalsFormation)
  
    }
    avgHomeTotalGoalsFormation()
  }
  
  handleClickHomeformation()






  

















  // const handleClickHomeformationStrategyAvg = (e) => {
    
  //   setUpDatedHomeFormation(homeFormation)   
  //   setUpDatedHome(valueHome)  
  
  //   const avgHomeTotalGoalsFormationStrategy = () => {
  //     let avgHomeGoalsFormationStrategy = []
  //     setUpDatedHomeFormation(homeFormation)  
  //     setUpDatedHome(valueHome) 
      
  //     leagueName.map(match =>  {
      
  //     if (homeFormation === match.homeFormation && valueHome === match.homeTeam) {
  //       match.totalGoals > 1 ?  avgHomeGoalsFormationStrategy.push(1) : avgHomeGoalsFormationStrategy.push(0)
       
        
  //     }})
     
      
      
  //     let avgHomeGoalsFiltered = avgHomeGoalsFormationStrategy.filter((el, i) => i < 5)
  
  //   let totalAvgHomeGoalsFormationStrategy = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
      

  //    setTotalAvgHomeGoalsFormationStrategy(totalAvgHomeGoalsFormationStrategy)
  
  //   }
  //   avgHomeTotalGoalsFormationStrategy()
  // }
  
  // handleClickHomeformationStrategyAvg()


  // const handleClickAwayformationStrategyAvg = (e) => {
    
  //   setUpDatedAwayFormation(awayFormation)   
  //   setUpDatedAway(valueAway)  
  
  //   const avgAwayTotalGoalsFormationStrategy = () => {
  //     let avgAwayGoalsFormationStrategy = []
  //     setUpDatedAwayFormation(awayFormation)   
  //   setUpDatedAway(valueAway)
      
  //   leagueName.map(match =>  {
      
  //     if (awayFormation === match.awayFormation && valueAway === match.awayTeam ) {
  //       match.totalGoals > 1 ? avgAwayGoalsFormationStrategy.push(1) : avgAwayGoalsFormationStrategy.push(0)
       
        
  //     }})
    
  //     avgAwayGoalsFormationStrategy.reverse()
      
  //     let avgAwayGoalsFiltered = avgAwayGoalsFormationStrategy.filter((el, i) => i < 7)
    
  //   let totalAvgAwayGoalsFormationStrategy = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
      
     
  //    setTotalAvgAwayGoalsFormationStrategy(totalAvgAwayGoalsFormationStrategy)
  
  //   }
  //   avgAwayTotalGoalsFormationStrategy()
  // }
  
  // handleClickAwayformationStrategyAvg()























  // const handleClickHomeformationScored = (e) => {
    
  //   setUpDatedHomeFormation(homeFormation)   
  //   setUpDatedHome(valueHome)  
  
  //   const avgHomeTotalGoalsScoredFormation = (totalAvgHomeGoalsFormationScored) => {
  //     let avgHomeGoalsScoredFormation = []
  //     setUpDatedHomeFormation(homeFormation)  
  //     setUpDatedHome(valueHome) 
      
  //     ScottishLeagueOne.map(match =>  {
      
  //     if (homeFormation === match.formation && match.ground === "home" && valueHome === match.team) {
  //       avgHomeGoalsScoredFormation.push(match.home_goals)
       
  //       console.log(avgHomeGoalsScoredFormation);
     
  //       totalAvgHomeGoalsFormationScored = avgHomeGoalsScoredFormation.reduce((a, b) => a + b, 0) / avgHomeGoalsScoredFormation.length
      
  //    console.log(totalAvgHomeGoalsFormationScored);
  //    setTotalAvgHomeGoalsFormationScored(totalAvgHomeGoalsFormationScored)
  // }})
  //   }
  //   avgHomeTotalGoalsScoredFormation()
  // }
  
  // handleClickHomeformationScored()





  // const handleClickHomeformationConceded = (e) => {
    
  //   setUpDatedHomeFormation(homeFormation)   
  //   setUpDatedHome(valueHome)  
  
  //   const avgHomeTotalGoalsConcededFormation = (totalAvgHomeGoalsFormationConceded) => {
  //     let avgHomeGoalsConcededFormation = []
  //     setUpDatedHomeFormation(homeFormation)  
  //     setUpDatedHome(valueHome) 
      
  //     ScottishLeagueOne.map(match =>  {
      
  //     if (homeFormation === match.formation && match.ground === "home" && valueHome === match.team) {
  //       avgHomeGoalsConcededFormation.push(match.away_goals)
       
  //       console.log(avgHomeGoalsConcededFormation);
     
  //       totalAvgHomeGoalsFormationConceded = avgHomeGoalsConcededFormation.reduce((a, b) => a + b, 0) / avgHomeGoalsConcededFormation.length
      
  //    console.log(totalAvgHomeGoalsFormationConceded);
  //    setTotalAvgHomeGoalsFormationConceded(totalAvgHomeGoalsFormationConceded)
  // }})
  //   }
  //   avgHomeTotalGoalsConcededFormation()
  // }
  
  // handleClickHomeformationConceded()








  // const handleClickAwayformationScored = (e) => {
    
  //   setUpDatedHomeFormation(awayFormation)   
  //   setUpDatedHome(valueAway)  
  
  //   const avgAwayTotalGoalsScoredFormation = (totalAvgAwayGoalsFormationScored) => {
  //     let avgAwayGoalsScoredFormation = []
  //     setUpDatedAwayFormation(awayFormation)  
  //     setUpDatedAway(valueAway) 
      
  //     ScottishLeagueOne.map(match =>  {
      
  //     if (awayFormation === match.formation && match.ground === "away" && valueAway === match.team) {
  //       avgAwayGoalsScoredFormation.push(match.away_goals)
       
  //       console.log(avgAwayGoalsScoredFormation);
     
  //       totalAvgAwayGoalsFormationScored = avgAwayGoalsScoredFormation.reduce((a, b) => a + b, 0) / avgAwayGoalsScoredFormation.length
      
  //    console.log(totalAvgAwayGoalsFormationScored);
  //    setTotalAvgAwayGoalsFormationScored(totalAvgAwayGoalsFormationScored)
  // }})
  //   }
  //   avgAwayTotalGoalsScoredFormation()
  // }
  
  // handleClickAwayformationScored()





  // const handleClickAwayformationConceded = (e) => {
    
  //   setUpDatedAwayFormation(awayFormation)   
  //   setUpDatedAway(valueAway)  
  
  //   const avgAwayTotalGoalsConcededFormation = (totalAvgAwayGoalsFormationConceded) => {
  //     let avgAwayGoalsConcededFormation = []
  //     setUpDatedAwayFormation(awayFormation)   
  //   setUpDatedAway(valueAway)  
      
  //   ScottishLeagueOne.map(match =>  {
      
  //     if (awayFormation === match.formation && match.ground === "away" && valueAway === match.team) {
  //       avgAwayGoalsConcededFormation.push(match.home_goals)
       
  //       console.log(avgAwayGoalsConcededFormation);
     
  //       totalAvgAwayGoalsFormationConceded = avgAwayGoalsConcededFormation.reduce((a, b) => a + b, 0) / avgAwayGoalsConcededFormation.length
      
  //    console.log(totalAvgAwayGoalsFormationConceded);
  //    setTotalAvgAwayGoalsFormationConceded(totalAvgAwayGoalsFormationConceded)
  // }})
  //   }
  //   avgAwayTotalGoalsConcededFormation()
  // }
  
  // handleClickAwayformationConceded()














  
  
    
  

//   const handleClickExactHomeFormation = () => {

//     setUpDatedHome(valueHome) 
//     setUpDatedHomeFormation(homeFormation)  

//   const exactHomeFormationTotalAvgGoals = () => {
//     let avgHomeGoalsFormationExact = []
//     setUpDatedHome(valueHome) 
//     setUpDatedHomeFormation(homeFormation)  
      
//     leagueName.map(match =>  {
    
//     if (valueHome === match.team && homeFormation === match.formation && awayFormation === match.opp_formation && match.ground === "home" ) {
//       avgHomeGoalsFormationExact.push(match.total_goals)
     
//       console.log(avgHomeGoalsFormationExact);
      
   
//   const exactFormationTotalGoalsHome = avgHomeGoalsFormationExact.reduce((a, b) => a + b, 0) / avgHomeGoalsFormationExact.length
    
//    console.log(exactFormationTotalGoalsHome);
//    setExactFormationTotalGoalsHome(exactFormationTotalGoalsHome)
// }})
//   }
//   exactHomeFormationTotalAvgGoals()
//   }
//   handleClickExactHomeFormation()


//   const exactAwayFormationTotalAvgGoals = () => {
//     let avgAwayGoalsFormationExact = []
      
      
//     leagueName.map(match =>  {
    
//     if (valueAway === match.team && awayFormation === match.formation && homeFormation === match.opp_formation && match.ground === "away" ) {
//       avgAwayGoalsFormationExact.push(match.total_goals)
     
      
   
//   const exactFormationTotalGoalsAway = avgAwayGoalsFormationExact.reduce((a, b) => a + b, 0) / avgAwayGoalsFormationExact.length
    
//    console.log(exactFormationTotalGoalsAway);
//    setExactFormationTotalGoalsAway(exactFormationTotalGoalsAway)
// }})
//   }
//   exactAwayFormationTotalAvgGoals()
  
  
  const handleClickAwayFormation = (e) => {
  
    setUpDatedAwayFormation(awayFormation)
    setUpDatedAway(valueAway)
  
    const avgAwayTotalGoalsFormation = () => {
      let avgAwayGoalsFormation = []
  
      
      
      leagueName.map(match =>  {
      
      if (awayFormation === match.awayFormation && valueAway === match.awayTeam) {
      avgAwayGoalsFormation.push(match.totalGoals)
     
    }})
    
    let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 4)
 
    

    const totalAvgAwayGoalsFormation = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
      

    return setTotalAvgAwayGoalsFormation(totalAvgAwayGoalsFormation)
      
  
  
    }
    
    avgAwayTotalGoalsFormation()
    
  }
  handleClickAwayFormation()



  // const handleClickHomeBtts = (e) => {
  
  //   setUpDatedHomeFormation(homeFormation)
  
  //   const exactHomeFormationTotalBtts = () => {
  //     let avgHomeBtts = []
      
      
  //     leagueName.map(match =>  {
    
  //       if (homeFormation === match.homeFormation && awayFormation === match.awayFormation && valueHome === match.homeTeam) {
  //         avgHomeBtts.push(match.btts)
         
          
       
  //     const totalFormationBttsHome = avgHomeBtts.reduce((a, b) => a + b, 0) / avgHomeBtts.length
   
  //      setTotalFormationBttsHome(totalFormationBttsHome)
  //   }})
  //     }
  //     exactHomeFormationTotalBtts()
    
  
    
  // }
  // handleClickHomeBtts()



  // const handleClickAwayBtts = (e) => {
  
  //   setUpDatedAwayFormation(awayFormation)
  
  //   const exactAwayFormationTotalBtts = () => {
  //     let avgAwayBtts = []
      
      
  //     leagueName.map(match =>  {
    
  //       if (awayFormation === match.awayFormation && homeFormation === match.homeFormation && valueAway === match.awayTeam) {
  //         avgAwayBtts.push(match.btts)
         
          
       
  //     const totalFormationBttsAway = avgAwayBtts.reduce((a, b) => a + b, 0) / avgAwayBtts.length
        
     
  //      setTotalFormationBttsAway(totalFormationBttsAway)
  //   }})
  //     }
  //     exactAwayFormationTotalBtts()
    
  
    
  // }
  // handleClickAwayBtts()
  
 







  // const handleClickHomeSecondHalfGoalPercentage = (e) => {
  
  //   setUpDatedHome(valueHome) 
  //   setUpDatedHomeFormation(homeFormation)  
  
  //   const homeFormationSecondHalfGoalPercentage = () => {
  //     let avgHomeSecondHalfGoalPercentage = []
  //     setUpDatedHome(valueHome) 
  //   setUpDatedHomeFormation(homeFormation)  
      
  //   leagueName.map(match =>  {
    
  //       if (homeFormation === match.homeFormation&& valueHome === match.homeTeam ) {
          
  //         match.secondHalfGoals > 0 ?  avgHomeSecondHalfGoalPercentage.push(1) : avgHomeSecondHalfGoalPercentage.push(0) 
  //       }

         
         
  //       })
      
        
     
  //   let avgHomeSecondHalfGoalsPercentageFiltered = avgHomeSecondHalfGoalPercentage.filter((el, i) => i < 5)
    
       
  //     const totalSecondHalfGoalsPercentageHome = avgHomeSecondHalfGoalsPercentageFiltered.reduce((a, b) => a + b, 0) / avgHomeSecondHalfGoalsPercentageFiltered.length
        
    
  //      setTotalSecondHalfGoalsPercentageHome(totalSecondHalfGoalsPercentageHome)
    
  //     }
  //     homeFormationSecondHalfGoalPercentage()
    
  
    
  // }
  // handleClickHomeSecondHalfGoalPercentage()



  // const handleClickAwaySecondHalfGoalPercentage = (e) => {
  
  //   setUpDatedAway(valueAway) 
  //   setUpDatedAwayFormation(awayFormation)  
  
  //   const AwayFormationSecondHalfGoalPercentage = () => {
  //     let avgAwaySecondHalfGoalPercentage = []
  //     setUpDatedAway(valueAway) 
  //   setUpDatedAwayFormation(awayFormation) 
      
  //   leagueName.map(match =>  {
    
  //       if (awayFormation === match.awayFormation && valueAway === match.awayTeam) {
          
  //         match.secondHalfGoals > 0 ?  avgAwaySecondHalfGoalPercentage.push(1) : avgAwaySecondHalfGoalPercentage.push(0) 
  //       }

      
         
  //       })
        
    
  //   let avgAwaySecondHalfGoalsPercentageFiltered = avgAwaySecondHalfGoalPercentage.filter((el, i) => i < 5)
    
       
  //     const totalSecondHalfGoalsPercentageAway = avgAwaySecondHalfGoalsPercentageFiltered.reduce((a, b) => a + b, 0) / avgAwaySecondHalfGoalsPercentageFiltered.length
        
      
  //      setTotalSecondHalfGoalsPercentageAway(totalSecondHalfGoalsPercentageAway)
    
  //     }
  //     AwayFormationSecondHalfGoalPercentage()
    
  
    
  // }
  // handleClickAwaySecondHalfGoalPercentage()



















  // const handleClickfirstHalfGoalsHome = (e) => {
  
  //   setUpDatedHomeFormation(homeFormation)
  
  //   const exactHomeFistHalfGoals = () => {
  //     let avgfirstHalfGoal = []
      
      
  //     ScottishLeagueOne.map(match =>  {
    
  //       if (homeFormation === match.formation && awayFormation === match.opp_formation && match.ground === "home") {
  //         avgfirstHalfGoal.push(match.first_half_goals)
         
          
       
  //     const totalFormationFistHalfGoalsHome = avgfirstHalfGoal.reduce((a, b) => a + b, 0) / avgfirstHalfGoal.length
        
  //      console.log(totalFormationFistHalfGoalsHome);
  //      setTotalFormationFistHalfGoalsHome(totalFormationFistHalfGoalsHome)
  //   }})
  //     }
  //     exactHomeFistHalfGoals()
    
  
    
  // }
  // handleClickfirstHalfGoalsHome()



  // const handleClickfirstHalfGoalsAway = (e) => {
  
  //   setUpDatedAwayFormation(awayFormation)
  //   setUpDatedHomeFormation(homeFormation)
  
  //   const exactAwayFistHalfGoals = () => {
  //     let avgAwayFistHalfGoals  = []
      
      
  //     ScottishLeagueOne.map(match =>  {
    
  //       if (awayFormation === match.formation && homeFormation === match.opp_formation && match.ground === "away") {
  //         avgAwayFistHalfGoals.push(match.first_half_goals)
         
          
       
  //     const totalFormationFistHalfGoalsAway = avgAwayFistHalfGoals.reduce((a, b) => a + b, 0) / avgAwayFistHalfGoals.length
        
  //      console.log(totalFormationFistHalfGoalsAway);
  //      setTotalFormationFistHalfGoalsAway(totalFormationFistHalfGoalsAway)
  //   }})
  //     }
  //     exactAwayFistHalfGoals()
    
  
    
  // }
  // handleClickfirstHalfGoalsAway()













  const handleClickSecondHalfGoalsHome = (e) => {
  
    setUpDatedHomeFormation(homeFormation)
  
    const exactHomeSecondHalfGoals = () => {
      let avgSecondHalfGoal = []
      
      
      leagueName.map(match =>  {
    
        if (homeFormation === match.homeFormation && valueHome === match.homeTeam) {
          avgSecondHalfGoal.push(match.secondHalfGoals)

      
    }})

    
      let avgHomeGoalsFiltered = avgSecondHalfGoal.filter((el, i) => i <4)
   

    const totalFormationSecondHalfGoalsHome = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
      
       setTotalFormationSecondHalfGoalsHome(totalFormationSecondHalfGoalsHome)
    
    


      }
      exactHomeSecondHalfGoals()
    
  
    
  }
  handleClickSecondHalfGoalsHome()



  const handleClickSecondHalfGoalsAway = (e) => {
  
    setUpDatedAwayFormation(awayFormation)
  
    const exactAwaySecondHalfGoals = () => {
      let avgAwaySecondHalfGoals  = []
      
      
      leagueName.map(match =>  {
    
        if (awayFormation === match.awayFormation && valueAway === match.awayTeam) {
          avgAwaySecondHalfGoals.push(match.secondHalfGoals)
         
          
        }})

      
      let avgAwayGoalsFiltered = avgAwaySecondHalfGoals.filter((el, i) => i < 4)
    

      const totalFormationSecondHalfGoalsAway = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
        
    
       setTotalFormationSecondHalfGoalsAway(totalFormationSecondHalfGoalsAway)
    
      }
      exactAwaySecondHalfGoals()
    
  
    
  }
  handleClickSecondHalfGoalsAway()


  // const handleClickAveOppFormationHome = (e) => {
  
  //   setUpDatedHomeFormation(homeFormation)
  
  //   const avgGoalOppFormationHome = () => {
  //     let avgGoalOppFormation = []
      
      
  //     ScottishLeagueOne.map(match =>  {
    
  //       if (valueHome === match.team && awayFormation === match.opp_formation && match.ground === "home") {
  //         avgGoalOppFormation.push(match.home_goals)
         
          
       
  //     const aveGoalScoredAgainstOppFormationHome = avgGoalOppFormation.reduce((a, b) => a + b) / avgGoalOppFormation.length
        
  //      console.log(aveGoalScoredAgainstOppFormationHome);
  //      setAveGoalScoredAgainstOppFormationHome(aveGoalScoredAgainstOppFormationHome, 0)
  //   }})
  //     }
  //     avgGoalOppFormationHome()
    
  
    
  // }
  // handleClickAveOppFormationHome()

  // const handleClickAveConcededOppFormationHome = (e) => {
  
  //   setUpDatedHomeFormation(homeFormation)
  
  //   const avgconcededOppFormationHome = () => {
  //     let avgconcededOppFormation = []
      
      
  //     ScottishLeagueOne.map(match =>  {
    
  //       if (valueHome === match.team && awayFormation === match.opp_formation && match.ground === "home") {
  //         avgconcededOppFormation.push(match.away_goals)
         
          
       
  //     const aveGoalConcedeAgainstOppFormationHome = avgconcededOppFormation.reduce((a, b) => a + b) / avgconcededOppFormation.length
        
  //      console.log(aveGoalConcedeAgainstOppFormationHome);
  //      setAveGoalConcedeAgainstOppFormationHome(aveGoalConcedeAgainstOppFormationHome, 0)
  //   }})
  //     }
  //     avgconcededOppFormationHome()
    
  
    
  // }
  // handleClickAveConcededOppFormationHome()
















  // const handleClickAveOppFormationAway = (e) => {
  
  //   setUpDatedHomeFormation(awayFormation)
  
  //   const avgGoalOppFormationAway = () => {
  //     let avgGoalOppFormation = []
      
      
  //     ScottishLeagueOne.map(match =>  {
    
  //       if (valueAway === match.team && homeFormation === match.opp_formation && match.ground === "away") {
  //         avgGoalOppFormation.push(match.away_goals)
         
          
       
  //     const aveGoalScoredAgainstOppFormationAway= avgGoalOppFormation.reduce((a, b) => a + b) / avgGoalOppFormation.length
        
  //      console.log(aveGoalScoredAgainstOppFormationAway);
  //      setAveGoalScoredAgainstOppFormationAway(aveGoalScoredAgainstOppFormationAway, 0)
  //   }})
  //     }
  //     avgGoalOppFormationAway()
    
  
    
  // }
  // handleClickAveOppFormationAway()

  // const handleClickAveConcededOppFormationAway = (e) => {
  //   setUpDatedHomeFormation(homeFormation)
  //   setUpDatedHomeFormation(awayFormation)
  
  //   const avgconcededOppFormationAway = () => {
  //     let avgconcededOppFormation = []
      
      
  //     ScottishLeagueOne.map(match =>  {
    
  //       if (valueAway=== match.team && homeFormation === match.opp_formation && match.ground === "away") {
  //         avgconcededOppFormation.push(match.home_goals)
         
          
       
  //     const aveGoalScoredAgainstOppFormationAway = avgconcededOppFormation.reduce((a, b) => a + b) / avgconcededOppFormation.length
        
  //      console.log(aveGoalScoredAgainstOppFormationAway);
  //      setAveGoalScoredAgainstOppFormationAway(aveGoalScoredAgainstOppFormationAway, 0)
  //   }})
  //     }
  //     avgconcededOppFormationAway()
    
  
    
  // }
  // handleClickAveConcededOppFormationAway()

}




  return (
    <div>
      <Select options={leagues} onChange={handleLeagueChange} />
      <form action="submit" onClick={handleSubmit}>
        {/* <input type="text" onChange={handleChangeLeague} value={valueLeague}/> */}
        <Select options={leagueTeams} onChange={handleHomeTeamChange} />
        <Select options={leagueTeams} onChange={handleAwayTeamChange} />
        {/* <input type="text" onChange={handleChangeHome} value={valueHome}/>
        <input type="text" onChange={handleChangeAway} value={valueAway} /> */}
        <Select options={formaton} onChange={handleHomeFormationChange} />
        <Select options={formaton} onChange={handleAwayFormationChange} />
        {/* <input type="text" onChange={handleChangeHomeFormation} value={homeFormation} /> */}
        {/* <input type="text" onChange={handleChangeAwayFormation} value={awayFormation} /> */}
      
        <button>submit</button>
      </form>
      <div className={styles.teams}>
        <h2>{upDatedLeague}</h2>
        <h2>{upDatedHome}</h2>
        <h2>{upDatedAway}</h2>
      </div>
      {/* <div className={styles.totalAverage} >
      TOTAL POINTS = {totalPoints}
      </div>
      <div className={styles.totalAverage} >
      TOTAL POINTS FORMATION= {totalPointsFormation}
      </div> */}
      {/* <div className={styles.totalAverage} >
      {totalAvgHomeGoals} Total Average goals {totalAvgAwayGoals}
      </div> */}
      <div className={styles.totalAverageFormation} >
      {totalAvgHomeGoalsFormation} Total Formation goals {totalAvgAwayGoalsFormation}
      </div>
      <div className={styles.totalAverageFormation} >
      {(totalAvgHomeGoalsFormation + totalAvgAwayGoalsFormation)/2} Total Average Formation goals {(totalAvgHomeGoalsFormation + totalAvgAwayGoalsFormation)/2}
      </div>
      {/* <div className={styles.totalAverageFormation} >
      {totalAvgHomeGoalsFormationStrategy} Total percentage of stategy wins {totalAvgAwayGoalsFormationStrategy}
      </div> */}
      {/* <div className={styles.totalAverageFormation} >
      {homeFormationLeagueAvg} Total Formation league Ave {awayFormationLeagueAvg}
      </div> */}
      {/* <div className={styles.totalAverageFormation} >
      {exactFormationTotalGoalsHome} Total Average exact formation goals {exactFormationTotalGoalsAway}
      </div>  */}
       {/* <div className={styles.totalAverageFormation} >
      {totalHomeAvgAgainstAwayDefence} Total Average Against opp Defence {totalAwayAvgAgainstHomeDefence}
      </div> */}
      {/* <div className={styles.totalAverageFormation} >
      {totalAvgHomeGoalsFormationScored} Total Average Formation goals scored {totalAvgAwayGoalsFormationScored}
      </div>
      <div className={styles.totalAverageFormation} >
      {totalAvgHomeGoalsFormationConceded} Total Average Formation goals conceded {totalAvgAwayGoalsFormationConceded}
      </div> */}
      
       {/* <div className={styles.totalAverageFormation} >
      {aveGoalScoredAgainstOppFormationHome} Total Average score against opp formation {aveGoalScoredAgainstOppFormationAway}
      </div>
      <div className={styles.totalAverageFormation} >
      {aveGoalConcedeAgainstOppFormationHome} Total Average conceded against opp formation {aveGoalScoredAgainstOppFormationAway}
      </div> */}
      {/* <div className={styles.totalAverageFormation} >
      {totalFormationBttsHome} Total Average btts {totalFormationBttsAway}
      </div> */}
      {/* <div className={styles.totalAverageFormation} >
      {totalFormationFistHalfGoalsHome} Total Average 1st Half Goals {totalFormationFistHalfGoalsAway}
      </div> */}
      <div className={styles.totalAverageFormation} >
      {totalFormationSecondHalfGoalsHome} Total Average 2nd Half Goals {totalFormationSecondHalfGoalsAway}
      </div>
      {/* <div className={styles.totalAverageFormation} >
      {totalSecondHalfGoalsPercentageHome} Total Average 2nd Half Goals % {totalSecondHalfGoalsPercentageAway}
      </div> */}
      {/* <div className={styles.totalAverageFormation} >
      {home442Ave} 442 {away442Ave}
      </div>
      <div className={styles.totalAverageFormation} >
      {home4231Ave} 4231 {away4231Ave}
      </div>
      <div className={styles.totalAverageFormation} >
      {home433Ave} 433 {away433Ave}
      </div>
      <div className={styles.totalAverageFormation} >
      {home451Ave} 451 {away451Ave}
      </div>
      <div className={styles.totalAverageFormation} >
      {home343Ave} 343 {away343Ave}
      </div>
      <div className={styles.totalAverageFormation} >
      {home352Ave} 352 {away352Ave}
      </div>
      <div className={styles.totalAverageFormation} >
      {home541Ave} 541 {away541Ave}
      </div>
      <div className={styles.totalAverageFormation} >
      {home532Ave} 532 {away532Ave}
      </div> */}
      
        
    </div>
  );
}

export default App;
