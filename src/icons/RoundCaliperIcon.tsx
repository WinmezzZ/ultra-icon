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
const RoundCaliperIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <circle cx={24} cy={24} r={20} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle
        cx={24}
        cy={24}
        r={4}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M44 24a20 20 0 0 1-9.283 16.887l-4.287-6.755A12 12 0 0 0 36 24h8ZM13.423 40.974a20 20 0 0 1-9.422-16.809l8-.066a12 12 0 0 0 5.653 10.086l-4.23 6.79Zm1.019-34.542a20 20 0 0 1 19.27.084l-3.885 6.994a12 12 0 0 0-11.562-.051l-3.823-7.027Z"
      />
    </svg>
  );
};

RoundCaliperIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RoundCaliperIcon = withWrapper(RoundCaliperIconComponent);
export default RoundCaliperIcon;
