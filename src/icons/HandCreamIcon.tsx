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
const HandCreamIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle cx={24} cy={24} r={20} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19 17c-2.731 1.137-2.488 4.578-2 6h14c3.902-5.687-4.216-11.849-4.216-9.479 0 2.37-4.37 2.057-7.784 3.479Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 23h22v8H13z" />
    </svg>
  );
};

HandCreamIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HandCreamIcon = withWrapper(HandCreamIconComponent);
export default HandCreamIcon;
