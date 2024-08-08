import { formatAmountToNaira } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const BankCard: React.FC<CreditCardProps> = (props) => {

  const { account, userName, showBalance } = props;

  return (
    <div className='flex flex-col'>
      <Link href='/' className='bank-card'>
        <div className="bank-card_content">
          <div>
            <h1 className='text-16 font-semibold text-white'>
              {userName}
            </h1>
            <p className='font-ibm-plex-serif font-black text-white'>
              {formatAmountToNaira(account.currentBalance || 0)}
            </p>
          </div>
          <article className="flex flex-col">
            <div className="flex justify-between">
              <h1 className='text-12 font-semibold text-white'>
                {userName}
              </h1>
              <h2 className='text-12 font-semibold text-white'>
                &#9679;	&#9679; / 	&#9679;	&#9679;
              </h2>
            </div>
            <p className='text-14 font-semibold tracking-[1.1px] text-white'>
              &#9679;&#9679;&#9679;&#9679; &nbsp; &#9679;&#9679;&#9679;&#9679; &nbsp; 	&#9679;&#9679;&#9679;&#9679; <span className='text-16'>{'1234'}</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image src='/icons/Paypass.svg'
            width={20}
            height={24}
            alt='paypass icon'
          />
          <Image
            src='/icons/mastercard.svg'
            width={45} height={32}
            alt='mastercard icon'
            className='ml-5'
          />
        </div>
        <Image
          src='/icons/lines.svg'
          width={316}
          height={190}
          className='absolute top-0 left-0' alt='lines'
        />
      </Link>
      {/* COPY */}
    </div>
  );
}

export default BankCard;
