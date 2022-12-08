import * as React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
}

export const ArrowUpIcon = ({ width = 15, height = 15 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.2929 4.29291C14.6834 3.90236 15.3166 3.90236 15.7071 4.29291L23.7072 12.2929C24.0976 12.6834 24.0976 13.3166 23.7072 13.7071C23.3166 14.0976 22.6834 14.0976 22.2928 13.7071L16 7.41422V25C16 25.5522 15.5523 26 15 26C14.4477 26 14 25.5522 14 25V7.41422L7.7071 13.7071C7.31658 14.0976 6.68343 14.0976 6.29291 13.7071C5.90236 13.3166 5.90236 12.6834 6.29291 12.2929L14.2929 4.29291Z"
        fill="currentColor"
      />
    </svg>
  );
};
