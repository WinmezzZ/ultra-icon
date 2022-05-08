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
const TrophyIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g stroke="#000" strokeWidth={4}>
          <path
            fill="null"
            fillRule="nonzero"
            d="M24 30c6.627 0 12-5.53 12-12.353V4H12v13.647C12 24.47 17.373 30 24 30Z"
          />
          <path strokeLinecap="round" d="M12 21V11H4c0 6.667 4 10 8 10Zm24 0V11h8c0 6.667-4 10-8 10ZM24 32v4" />
          <path fill="null" fillRule="nonzero" d="m15 42 3.69-6h10.353L33 42z" />
        </g>
      </g>
    </svg>
  );
};

TrophyIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TrophyIcon = withWrapper(TrophyIconComponent);
export default TrophyIcon;
