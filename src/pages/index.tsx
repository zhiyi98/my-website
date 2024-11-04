import Link from '@docusaurus/Link';
import React from 'react';

export default function Home(): React.ReactElement {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-space-y-8 "
         style={{
           backgroundImage: "url('https://www.ruanyifeng.com/images_pub/pub_156.jpg')",
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}    >
      <div className="tw-flex tw-flex-col tw-w-3/4 lg:tw-w-1/4">
        <div className="tw-border-amber-700">
          <Link className="" to="/docs/daily">
            <div className="tw-text-center tw-text-white">日报</div>
          </Link>
        </div>

        <div className="tw-border-amber-700">
          <Link className="" to="/docs/weekly">
            <div className="tw-text-center tw-text-white">周报</div>
          </Link>
        </div>

        <div className="tw-border-amber-700">
          <Link className="" to="/docs/blog">
            <div className="tw-text-center tw-text-white">博客</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
   