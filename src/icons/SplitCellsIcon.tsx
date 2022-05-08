/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const SplitCellsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M4 14V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v38a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9m40 0v9a1 1 0 0 1-1 1H29a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9M28 24l16 .013m-40 0L20 24"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m39.227 28.778 1.592-1.591L44 24.005l-3.181-3.182-1.592-1.591M8.755 28.786l-1.59-1.59-3.183-3.183 3.182-3.182 1.591-1.59"
      />
    </svg>
  );
};

SplitCellsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SplitCellsIcon = withWrapper(SplitCellsIconComponent);
export default SplitCellsIcon;
