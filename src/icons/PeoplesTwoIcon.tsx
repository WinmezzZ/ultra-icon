/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const defaultProps = {
  size: 24,
};

const PeoplesTwoIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M12 7.255A6.992 6.992 0 0 0 9 13a6.996 6.996 0 0 0 3.392 6M36 7.255A6.992 6.992 0 0 1 39 13a6.992 6.992 0 0 1-3 5.745"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M12 40v2h24v-2c0-3.727 0-5.591-.609-7.062a8 8 0 0 0-4.33-4.329C29.591 28 27.727 28 24 28s-5.591 0-7.061.609a8 8 0 0 0-4.33 4.33C12 34.408 12 36.273 12 40Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M44 42v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496M4 42v-1.2c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496"
        />
      </svg>
    </span>
  );
};

PeoplesTwoIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PeoplesTwoIcon;
