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

const MergeCellsIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M20 14V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9m8 0v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H29a1 1 0 0 0-1 1v9m0 10h16M5 24h15"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m32.748 28.818-1.59-1.59-3.182-3.183 3.181-3.182 1.591-1.59m-17.373 9.545 1.591-1.59 3.182-3.183-3.182-3.182-1.591-1.59"
        />
      </svg>
    </span>
  );
};

MergeCellsIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MergeCellsIcon;
