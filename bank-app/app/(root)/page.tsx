import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
  const loggedIn = {
    firstName: 'Taylor',
    lastName: 'Whyte',
    email: 'taylorwhyte@test.com'
  }

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            subtext='Access and manage your account and transaction efficiently.' type='greeting'
            title='Welcome'
            user={loggedIn.firstName || 'Guest'}
          />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250} />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar
        user={loggedIn}
        transaction={[]}
        banks={[{
          currentBalance: 125.21
        }, {
          currentBalance: 525.21
        }]}
      />
    </section>
  );
}

export default Home;
