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

const PangleIcon = (p: SVGComponentProps) => {
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
        <path
          fill="#000"
          d="m38.45 23.017-5.256-3.007a.168.168 0 0 0-.253.151v7.48c0 .14.076.254.19.33l5.257 3.007a.168.168 0 0 0 .252-.152v-7.48a.393.393 0 0 0-.19-.329Zm-7.34-4.142-5.256-3.008a.168.168 0 0 0-.252.152v11.638c0 .101.075.177.177.177h5.357a.173.173 0 0 0 .177-.177v-8.454a.418.418 0 0 0-.202-.328ZM18.678 30.942l5.257-3.007a.377.377 0 0 0 .19-.329V15.172c0-.126-.14-.214-.253-.151l-5.257 3.007a.377.377 0 0 0-.19.329V30.79c0 .139.14.215.253.151Zm21.427-6.674v3.411c0 .102.076.177.177.177h5.965c.176 0 .24-.24.088-.316l-5.964-3.411c-.127-.076-.266.012-.266.139Zm-23.412-5.14L2.085 27.505c-.151.089-.088.316.089.316H16.78a.173.173 0 0 0 .177-.177V19.28c-.013-.139-.152-.215-.265-.151Z"
        />
      </svg>
    </span>
  );
};

PangleIcon.propTypes = {
  size: PropTypes.number,
};
export default PangleIcon;
