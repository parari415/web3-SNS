import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Rranking_Daily from '../compornents/Ranking_Daily';
import RankingWeekly from '../compornents/Ranking_Weekly';
import Ranking_Monthly from '../compornents/Ranking_Monthly';
import 'react-tabs/style/react-tabs.css';
import '../styles/App.css'

function Ranking() {
  return (
    <>
    <div className='timeline'>
      <Tabs>
        <TabList>
          <Tab>デイリー</Tab>
          <Tab>ウィークリー</Tab>
          <Tab>マンスリー</Tab>
        </TabList>

        <TabPanel>
          <Rranking_Daily/>
        </TabPanel>
        <TabPanel>
          <RankingWeekly/>
        </TabPanel>
        <TabPanel>
          <Ranking_Monthly/>
        </TabPanel>
      </Tabs>
    </div>
    </>
  )
}

export default Ranking
