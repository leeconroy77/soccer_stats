import { useState } from 'react'
import {EnglishLeagueOne} from './directory/Directory.englishLeagueOne'

import styles from './app.module.css'



function App() {
const [valueHome, setvalueHome ] = useState("");
const [valueAway, setvalueAway ] = useState("");
const [homeFormation, setHomeFormation ] = useState("");
const [awayFormation, setAwayFormation ] = useState("");
const [upDatedHome, setUpDatedHome ] = useState("");
const [upDatedHomeFormation, setUpDatedHomeFormation ] = useState(homeFormation);
const [upDatedAway, setUpDatedAway ] = useState("");
const [upDatedAwayFormation, setUpDatedAwayFormation ] = useState(awayFormation);
const [totalAvgHomeGoals, setTotalAvgHomeGoals ] = useState(0);
const [totalAvgHomeGoalsFormation, setTotalAvgHomeGoalsFormation ] = useState(0);
const [totalAvgHomeGoalsFormationScored, setTotalAvgHomeGoalsFormationScored ] = useState(0);
const [totalAvgHomeGoalsFormationConceded, setTotalAvgHomeGoalsFormationConceded ] = useState(0);
const [totalAvgAwayGoals, setTotalAvgAwayGoals ] = useState(0);
const [totalAvgAwayGoalsFormation, setTotalAvgAwayGoalsFormation ] = useState(0);
const [totalAvgAwayGoalsFormationScored, setTotalAvgAwayGoalsFormationScored ] = useState(0);
const [totalAvgAwayGoalsFormationConceded, setTotalAvgAwayGoalsFormationConceded ] = useState(0);
const [exactFormationTotalGoalsHome, setExactFormationTotalGoalsHome ] = useState(0);
const [exactFormationTotalGoalsAway, setExactFormationTotalGoalsAway ] = useState(0);
const [totalFormationBttsHome, setTotalFormationBttsHome ] = useState(0);
const [totalFormationBttsAway, setTotalFormationBttsAway ] = useState(0);
const [totalFormationFistHalfGoalsHome, setTotalFormationFistHalfGoalsHome ] = useState(0);
const [totalFormationFistHalfGoalsAway, setTotalFormationFistHalfGoalsAway ] = useState(0);
const [totalFormationSecondHalfGoalsHome, setTotalFormationSecondHalfGoalsHome ] = useState(0);
const [totalFormationSecondHalfGoalsAway, setTotalFormationSecondHalfGoalsAway ] = useState(0);
const [aveGoalScoredAgainstOppFormationHome, setAveGoalScoredAgainstOppFormationHome ] = useState(0);
const [aveGoalConcedeAgainstOppFormationHome, setAveGoalConcedeAgainstOppFormationHome ] = useState(0);
const [aveGoalScoredAgainstOppFormationAway, setAveGoalScoredAgainstOppFormationAway, ] = useState(0);
const [aveGoalConcedeAgainstOppFormationAway, setAveGoalConcedeAgainstOppFormationAway,] = useState(0);




const handleChangeHome = (e) => {
  setvalueHome(e.target.value)  
}
const handleChangeAway = (e) => {     
  setvalueAway(e.target.value)     
} 
const handleChangeHomeFormation = (e) => {
  setHomeFormation(e.target.value)  
}

const handleChangeAwayFormation = (e) => {
  setAwayFormation(e.target.value)  
}

const handleSubmit = (e) => { 
  e.preventDefault();
  setUpDatedHome(valueHome)  
  setUpDatedAway(valueAway)

  const handleClickHome = (e) => {
    
    setUpDatedHome(valueHome)   
  
    const avgHomeTotalGoals = () => {
      let avgHomeGoals = []
      
      
      EnglishLeagueOne.map(match =>  {
      
      if (upDatedHome === match.team && match.ground === "home") {
      avgHomeGoals.push(match.total_goals) 
      console.log(avgHomeGoals);
     
      }})
      avgHomeGoals.reverse()
      console.log(avgHomeGoals);
    let avgHomeGoalsFiltered = avgHomeGoals.filter((el, i) => i < 5)
    console.log(avgHomeGoalsFiltered);
    const totalAvgHomeGoals = avgHomeGoals.reduce((a, b) => a + b) / avgHomeGoals.length
    
    setTotalAvgHomeGoals(totalAvgHomeGoals)
  
    }
    avgHomeTotalGoals()
  }

  handleClickHome()
  
  const handleClickHomeformation = (e) => {
    
    setUpDatedHomeFormation(homeFormation)   
    setUpDatedHome(valueHome)  
  
    const avgHomeTotalGoalsFormation = (totalAvgHomeGoalsFormation) => {
      let avgHomeGoalsFormation = []
      setUpDatedHomeFormation(homeFormation)  
      setUpDatedHome(valueHome) 
      
      EnglishLeagueOne.map(match =>  {
      
      if (homeFormation === match.formation && match.ground === "home" && valueHome === match.team) {
        avgHomeGoalsFormation.push(match.total_goals)
       
        console.log(avgHomeGoalsFormation);
      }})
      avgHomeGoalsFormation.reverse()
      
      let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 5)
    console.log(avgHomeGoalsFiltered);
    totalAvgHomeGoalsFormation = avgHomeGoalsFormation.reduce((a, b) => a + b) / avgHomeGoalsFormation.length
      
     console.log(totalAvgHomeGoalsFormation);
     setTotalAvgHomeGoalsFormation(totalAvgHomeGoalsFormation)
  
    }
    avgHomeTotalGoalsFormation()
  }
  
  handleClickHomeformation()





  const handleClickHomeformationScored = (e) => {
    
    setUpDatedHomeFormation(homeFormation)   
    setUpDatedHome(valueHome)  
  
    const avgHomeTotalGoalsScoredFormation = (totalAvgHomeGoalsFormationScored) => {
      let avgHomeGoalsScoredFormation = []
      setUpDatedHomeFormation(homeFormation)  
      setUpDatedHome(valueHome) 
      
      EnglishLeagueOne.map(match =>  {
      
      if (homeFormation === match.formation && match.ground === "home" && valueHome === match.team) {
        avgHomeGoalsScoredFormation.push(match.home_goals)
       
        console.log(avgHomeGoalsScoredFormation);
     
        totalAvgHomeGoalsFormationScored = avgHomeGoalsScoredFormation.reduce((a, b) => a + b) / avgHomeGoalsScoredFormation.length
      
     console.log(totalAvgHomeGoalsFormationScored);
     setTotalAvgHomeGoalsFormationScored(totalAvgHomeGoalsFormationScored)
  }})
    }
    avgHomeTotalGoalsScoredFormation()
  }
  
  handleClickHomeformationScored()





  const handleClickHomeformationConceded = (e) => {
    
    setUpDatedHomeFormation(homeFormation)   
    setUpDatedHome(valueHome)  
  
    const avgHomeTotalGoalsConcededFormation = (totalAvgHomeGoalsFormationConceded) => {
      let avgHomeGoalsConcededFormation = []
      setUpDatedHomeFormation(homeFormation)  
      setUpDatedHome(valueHome) 
      
      EnglishLeagueOne.map(match =>  {
      
      if (homeFormation === match.formation && match.ground === "home" && valueHome === match.team) {
        avgHomeGoalsConcededFormation.push(match.away_goals)
       
        console.log(avgHomeGoalsConcededFormation);
     
        totalAvgHomeGoalsFormationConceded = avgHomeGoalsConcededFormation.reduce((a, b) => a + b) / avgHomeGoalsConcededFormation.length
      
     console.log(totalAvgHomeGoalsFormationConceded);
     setTotalAvgHomeGoalsFormationConceded(totalAvgHomeGoalsFormationConceded)
  }})
    }
    avgHomeTotalGoalsConcededFormation()
  }
  
  handleClickHomeformationConceded()








  const handleClickAwayformationScored = (e) => {
    
    setUpDatedHomeFormation(awayFormation)   
    setUpDatedHome(valueAway)  
  
    const avgAwayTotalGoalsScoredFormation = (totalAvgAwayGoalsFormationScored) => {
      let avgAwayGoalsScoredFormation = []
      setUpDatedAwayFormation(awayFormation)  
      setUpDatedAway(valueAway) 
      
      EnglishLeagueOne.map(match =>  {
      
      if (awayFormation === match.formation && match.ground === "away" && valueAway === match.team) {
        avgAwayGoalsScoredFormation.push(match.away_goals)
       
        console.log(avgAwayGoalsScoredFormation);
     
        totalAvgAwayGoalsFormationScored = avgAwayGoalsScoredFormation.reduce((a, b) => a + b) / avgAwayGoalsScoredFormation.length
      
     console.log(totalAvgAwayGoalsFormationScored);
     setTotalAvgAwayGoalsFormationScored(totalAvgAwayGoalsFormationScored)
  }})
    }
    avgAwayTotalGoalsScoredFormation()
  }
  
  handleClickAwayformationScored()





  const handleClickAwayformationConceded = (e) => {
    
    setUpDatedAwayFormation(awayFormation)   
    setUpDatedAway(valueAway)  
  
    const avgAwayTotalGoalsConcededFormation = (totalAvgAwayGoalsFormationConceded) => {
      let avgAwayGoalsConcededFormation = []
      setUpDatedAwayFormation(awayFormation)   
    setUpDatedAway(valueAway)  
      
    EnglishLeagueOne.map(match =>  {
      
      if (awayFormation === match.formation && match.ground === "away" && valueAway === match.team) {
        avgAwayGoalsConcededFormation.push(match.home_goals)
       
        console.log(avgAwayGoalsConcededFormation);
     
        totalAvgAwayGoalsFormationConceded = avgAwayGoalsConcededFormation.reduce((a, b) => a + b) / avgAwayGoalsConcededFormation.length
      
     console.log(totalAvgAwayGoalsFormationConceded);
     setTotalAvgAwayGoalsFormationConceded(totalAvgAwayGoalsFormationConceded)
  }})
    }
    avgAwayTotalGoalsConcededFormation()
  }
  
  handleClickAwayformationConceded()














  
  const handleClickAway = (e) => {
    
    setUpDatedAway(valueAway)
  
    const avgAwayTotalGoals = () => {
      let avgAwayGoals = []
      
      
      EnglishLeagueOne.map(match =>  {
      
      if (upDatedAway === match.team && match.ground === "away") {
      avgAwayGoals.push(match.total_goals)
      console.log(avgAwayGoals);
      
    }})
    avgAwayGoals.reverse()
      let avgAwayGoalsFiltered = avgAwayGoals.filter((el, i) => i < 5)
    console.log(avgAwayGoalsFiltered);
    const totalAvgAwayGoals = avgAwayGoals.reduce((a, b) => a + b) / avgAwayGoals.length
      
     console.log(totalAvgAwayGoals);
    return setTotalAvgAwayGoals(totalAvgAwayGoals)
     
      

    
  
    }
    
    avgAwayTotalGoals()
    
  }
  handleClickAway()

  const handleClickExactHomeFormation = () => {

    setUpDatedHome(valueHome) 
    setUpDatedHomeFormation(homeFormation)  

  const exactHomeFormationTotalAvgGoals = () => {
    let avgHomeGoalsFormationExact = []
    setUpDatedHome(valueHome) 
    setUpDatedHomeFormation(homeFormation)  
      
    EnglishLeagueOne.map(match =>  {
    
    if (valueHome === match.team && homeFormation === match.formation && awayFormation === match.opp_formation && match.ground === "home" ) {
      avgHomeGoalsFormationExact.push(match.total_goals)
     
      console.log(avgHomeGoalsFormationExact);
      
   
  const exactFormationTotalGoalsHome = avgHomeGoalsFormationExact.reduce((a, b) => a + b) / avgHomeGoalsFormationExact.length
    
   console.log(exactFormationTotalGoalsHome);
   setExactFormationTotalGoalsHome(exactFormationTotalGoalsHome)
}})
  }
  exactHomeFormationTotalAvgGoals()
  }
  handleClickExactHomeFormation()


  const exactAwayFormationTotalAvgGoals = () => {
    let avgAwayGoalsFormationExact = []
      
      
    EnglishLeagueOne.map(match =>  {
    
    if (valueAway === match.team && awayFormation === match.formation && homeFormation === match.opp_formation && match.ground === "away" ) {
      avgAwayGoalsFormationExact.push(match.total_goals)
     
      
   
  const exactFormationTotalGoalsAway = avgAwayGoalsFormationExact.reduce((a, b) => a + b) / avgAwayGoalsFormationExact.length
    
   console.log(exactFormationTotalGoalsAway);
   setExactFormationTotalGoalsAway(exactFormationTotalGoalsAway)
}})
  }
  exactAwayFormationTotalAvgGoals()
  
  
  const handleClickAwayFormation = (e) => {
  
    setUpDatedAwayFormation(awayFormation)
    setUpDatedAway(valueAway)
  
    const avgAwayTotalGoalsFormation = () => {
      let avgAwayGoalsFormation = []
      console.log(awayFormation);
      
      
      EnglishLeagueOne.map(match =>  {
      
      if (awayFormation === match.formation && match.ground === "away" && valueAway === match.team) {
      avgAwayGoalsFormation.push(match.total_goals)
     console.log(avgAwayGoalsFormation);
    }})
    avgAwayGoalsFormation.reverse()
    let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 5)
    console.log(avgAwayGoalsFiltered);
    

    const totalAvgAwayGoalsFormation = avgAwayGoalsFormation.reduce((a, b) => a + b) / avgAwayGoalsFormation.length
      
    console.log(totalAvgAwayGoalsFormation);
    return setTotalAvgAwayGoalsFormation(totalAvgAwayGoalsFormation)
      
  
  
    }
    
    avgAwayTotalGoalsFormation()
    
  }
  handleClickAwayFormation()



  const handleClickHomeBtts = (e) => {
  
    setUpDatedHomeFormation(homeFormation)
  
    const exactHomeFormationTotalBtts = () => {
      let avgHomeBtts = []
      
      
      EnglishLeagueOne.map(match =>  {
    
        if (homeFormation === match.formation && awayFormation === match.opp_formation && match.ground === "home") {
          avgHomeBtts.push(match.btts)
         
          
       
      const totalFormationBttsHome = avgHomeBtts.reduce((a, b) => a + b) / avgHomeBtts.length
        
       console.log(totalFormationBttsHome);
       setTotalFormationBttsHome(totalFormationBttsHome)
    }})
      }
      exactHomeFormationTotalBtts()
    
  
    
  }
  handleClickHomeBtts()



  const handleClickAwayBtts = (e) => {
  
    setUpDatedAwayFormation(awayFormation)
  
    const exactAwayFormationTotalBtts = () => {
      let avgAwayBtts = []
      
      
      EnglishLeagueOne.map(match =>  {
    
        if (awayFormation === match.formation && homeFormation === match.opp_formation && match.ground === "away") {
          avgAwayBtts.push(match.btts)
         
          
       
      const totalFormationBttsAway = avgAwayBtts.reduce((a, b) => a + b) / avgAwayBtts.length
        
       console.log(totalFormationBttsAway);
       setTotalFormationBttsAway(totalFormationBttsAway)
    }})
      }
      exactAwayFormationTotalBtts()
    
  
    
  }
  handleClickAwayBtts()
  
 











  const handleClickfirstHalfGoalsHome = (e) => {
  
    setUpDatedHomeFormation(homeFormation)
  
    const exactHomeFistHalfGoals = () => {
      let avgfirstHalfGoal = []
      
      
      EnglishLeagueOne.map(match =>  {
    
        if (homeFormation === match.formation && awayFormation === match.opp_formation && match.ground === "home") {
          avgfirstHalfGoal.push(match.first_half_goals)
         
          
       
      const totalFormationFistHalfGoalsHome = avgfirstHalfGoal.reduce((a, b) => a + b) / avgfirstHalfGoal.length
        
       console.log(totalFormationFistHalfGoalsHome);
       setTotalFormationFistHalfGoalsHome(totalFormationFistHalfGoalsHome)
    }})
      }
      exactHomeFistHalfGoals()
    
  
    
  }
  handleClickfirstHalfGoalsHome()



  const handleClickfirstHalfGoalsAway = (e) => {
  
    setUpDatedAwayFormation(awayFormation)
    setUpDatedHomeFormation(homeFormation)
  
    const exactAwayFistHalfGoals = () => {
      let avgAwayFistHalfGoals  = []
      
      
      EnglishLeagueOne.map(match =>  {
    
        if (awayFormation === match.formation && homeFormation === match.opp_formation && match.ground === "away") {
          avgAwayFistHalfGoals.push(match.first_half_goals)
         
          
       
      const totalFormationFistHalfGoalsAway = avgAwayFistHalfGoals.reduce((a, b) => a + b) / avgAwayFistHalfGoals.length
        
       console.log(totalFormationFistHalfGoalsAway);
       setTotalFormationFistHalfGoalsAway(totalFormationFistHalfGoalsAway)
    }})
      }
      exactAwayFistHalfGoals()
    
  
    
  }
  handleClickfirstHalfGoalsAway()













  const handleClickSecondHalfGoalsHome = (e) => {
  
    setUpDatedHomeFormation(homeFormation)
  
    const exactHomeSecondHalfGoals = () => {
      let avgSecondHalfGoal = []
      
      
      EnglishLeagueOne.map(match =>  {
    
        if (homeFormation === match.formation && awayFormation === match.opp_formation && match.ground === "home") {
          avgSecondHalfGoal.push(match.second_half_goals)
         
          
       
      const totalFormationSecondHalfGoalsHome = avgSecondHalfGoal.reduce((a, b) => a + b) / avgSecondHalfGoal.length
        
       console.log(totalFormationSecondHalfGoalsHome);
       setTotalFormationSecondHalfGoalsHome(totalFormationSecondHalfGoalsHome)
    }})
      }
      exactHomeSecondHalfGoals()
    
  
    
  }
  handleClickSecondHalfGoalsHome()



  const handleClickSecondHalfGoalsAway = (e) => {
  
    setUpDatedAwayFormation(awayFormation)
  
    const exactAwaySecondHalfGoals = () => {
      let avgAwaySecondHalfGoals  = []
      
      
      EnglishLeagueOne.map(match =>  {
    
        if (awayFormation === match.formation && homeFormation === match.opp_formation && match.ground === "away") {
          avgAwaySecondHalfGoals.push(match.second_half_goals)
         
          
       
      const totalFormationSecondHalfGoalsAway = avgAwaySecondHalfGoals.reduce((a, b) => a + b) / avgAwaySecondHalfGoals.length
        
       console.log(totalFormationSecondHalfGoalsAway);
       setTotalFormationSecondHalfGoalsAway(totalFormationSecondHalfGoalsAway)
    }})
      }
      exactAwaySecondHalfGoals()
    
  
    
  }
  handleClickSecondHalfGoalsAway()


  const handleClickAveOppFormationHome = (e) => {
  
    setUpDatedHomeFormation(homeFormation)
  
    const avgGoalOppFormationHome = () => {
      let avgGoalOppFormation = []
      
      
      EnglishLeagueOne.map(match =>  {
    
        if (valueHome === match.team && awayFormation === match.opp_formation && match.ground === "home") {
          avgGoalOppFormation.push(match.home_goals)
         
          
       
      const aveGoalScoredAgainstOppFormationHome = avgGoalOppFormation.reduce((a, b) => a + b) / avgGoalOppFormation.length
        
       console.log(aveGoalScoredAgainstOppFormationHome);
       setAveGoalScoredAgainstOppFormationHome(aveGoalScoredAgainstOppFormationHome)
    }})
      }
      avgGoalOppFormationHome()
    
  
    
  }
  handleClickAveOppFormationHome()

  const handleClickAveConcededOppFormationHome = (e) => {
  
    setUpDatedHomeFormation(homeFormation)
  
    const avgconcededOppFormationHome = () => {
      let avgconcededOppFormation = []
      
      
      EnglishLeagueOne.map(match =>  {
    
        if (valueHome === match.team && awayFormation === match.opp_formation && match.ground === "home") {
          avgconcededOppFormation.push(match.away_goals)
         
          
       
      const aveGoalConcedeAgainstOppFormationHome = avgconcededOppFormation.reduce((a, b) => a + b) / avgconcededOppFormation.length
        
       console.log(aveGoalConcedeAgainstOppFormationHome);
       setAveGoalConcedeAgainstOppFormationHome(aveGoalConcedeAgainstOppFormationHome)
    }})
      }
      avgconcededOppFormationHome()
    
  
    
  }
  handleClickAveConcededOppFormationHome()
















  const handleClickAveOppFormationAway = (e) => {
  
    setUpDatedHomeFormation(awayFormation)
  
    const avgGoalOppFormationAway = () => {
      let avgGoalOppFormation = []
      
      
      EnglishLeagueOne.map(match =>  {
    
        if (valueAway === match.team && homeFormation === match.opp_formation && match.ground === "away") {
          avgGoalOppFormation.push(match.away_goals)
         
          
       
      const aveGoalScoredAgainstOppFormationAway= avgGoalOppFormation.reduce((a, b) => a + b) / avgGoalOppFormation.length
        
       console.log(aveGoalScoredAgainstOppFormationAway);
       setAveGoalScoredAgainstOppFormationAway(aveGoalScoredAgainstOppFormationAway)
    }})
      }
      avgGoalOppFormationAway()
    
  
    
  }
  handleClickAveOppFormationAway()

  const handleClickAveConcededOppFormationAway = (e) => {
    setUpDatedHomeFormation(homeFormation)
    setUpDatedHomeFormation(awayFormation)
  
    const avgconcededOppFormationAway = () => {
      let avgconcededOppFormation = []
      
      
      EnglishLeagueOne.map(match =>  {
    
        if (valueAway=== match.team && homeFormation === match.opp_formation && match.ground === "away") {
          avgconcededOppFormation.push(match.home_goals)
         
          
       
      const aveGoalConcedeAgainstOppFormationAway = avgconcededOppFormation.reduce((a, b) => a + b) / avgconcededOppFormation.length
        
       console.log(aveGoalConcedeAgainstOppFormationAway);
       setAveGoalConcedeAgainstOppFormationAway(aveGoalConcedeAgainstOppFormationAway)
    }})
      }
      avgconcededOppFormationAway()
    
  
    
  }
  handleClickAveConcededOppFormationAway()

}




  return (
    <div>
      <form action="submit" onClick={handleSubmit}>
        <input type="text" onChange={handleChangeHome} value={valueHome}/>
        <input type="text" onChange={handleChangeAway} value={valueAway} />
        <input type="text" onChange={handleChangeHomeFormation} value={homeFormation} />
        <input type="text" onChange={handleChangeAwayFormation} value={awayFormation} />
      
        <button>submit</button>
      </form>
      <div className={styles.teams}>
        <h2>{upDatedHome}</h2>
        <h2>{upDatedAway}</h2>
      </div>
      <div className={styles.totalAverage} >
      {totalAvgHomeGoals} Total Average goals {totalAvgAwayGoals}
      </div>
      <div className={styles.totalAverageFormation} >
      {totalAvgHomeGoalsFormation} Total Average Formation goals {totalAvgAwayGoalsFormation}
      </div>
      <div className={styles.totalAverageFormation} >
      {totalAvgHomeGoalsFormationScored} Total Average Formation goals scored {totalAvgAwayGoalsFormationScored}
      </div>
      <div className={styles.totalAverageFormation} >
      {totalAvgHomeGoalsFormationConceded} Total Average Formation goals conceded {totalAvgAwayGoalsFormationConceded}
      </div>
      <div className={styles.totalAverageFormation} >
      {exactFormationTotalGoalsHome} Total Average exact formation goals {exactFormationTotalGoalsAway}
      </div>
      <div className={styles.totalAverageFormation} >
      {aveGoalScoredAgainstOppFormationHome} Total Average score against opp formation {aveGoalScoredAgainstOppFormationAway}
      </div>
      <div className={styles.totalAverageFormation} >
      {aveGoalConcedeAgainstOppFormationHome} Total Average conceded against opp formation {aveGoalConcedeAgainstOppFormationAway}
      </div>
      <div className={styles.totalAverageFormation} >
      {totalFormationBttsHome} Total Average btts {totalFormationBttsAway}
      </div>
      <div className={styles.totalAverageFormation} >
      {totalFormationFistHalfGoalsHome} Total Average 1st Half Goals {totalFormationFistHalfGoalsAway}
      </div>
      <div className={styles.totalAverageFormation} >
      {totalFormationSecondHalfGoalsHome} Total Average 2nd Half Goals {totalFormationSecondHalfGoalsAway}
      </div>
        
    </div>
  );
}

export default App;
