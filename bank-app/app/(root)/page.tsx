import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
  const loggedIn = { firstName: 'Samfrexz' }
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
      </div>
    </section>
  );
}

export default Home;
