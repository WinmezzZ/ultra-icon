/**
 * These code auto generated by UltraIcon
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const defaultProps = {
  size: 24,
};

const MarketIcon = (p: SVGComponentProps) => {
  const { size, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="#000"
          fillRule="evenodd"
          d="m24 3 .349.003C35.726 3.189 45 12.468 45 24.074l-.003.35C44.81 35.837 35.42 45 24 45l-.349-.003C12.274 44.811 3 35.532 3 24.074 3 12.349 12.464 3 24 3Zm14.38 22.387-17.313 4.337c-.164.04-.328.06-.49.06l-.188-.009a2.013 2.013 0 0 1-1.16-.512l-1.688 5.878-.023.13c-.21 1.517 1.56 2.757 3.399 1.82L36.9 27.996l.191-.115c1.111-.7 1.538-1.623 1.288-2.495Zm-20.4-12.609c-1.21-.927-3.159-.015-3.266 2.042l-.116 18.389c-.009 1.44.591 2.354 1.52 2.585l4.901-17.16.055-.165a2.004 2.004 0 0 1 1.263-1.196l-4.246-4.403-.111-.092Zm3.082-1.498c-1.163-.612-2.175-.52-2.805.132L30.67 24.236c.484.5.656 1.19.52 1.823l5.935-1.477.135-.05c1.408-.584 1.592-2.728-.135-3.849l-15.867-9.295-.195-.108Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

MarketIcon.propTypes = {
  size: PropTypes.number,
};
export default MarketIcon;