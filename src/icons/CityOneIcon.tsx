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
const CityOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 42h40" />
      <rect
        width={12}
        height={20}
        x={8}
        y={22}
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
      />
      <rect
        width={20}
        height={38}
        x={20}
        y={4}
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M28 32.008h4m-20 0h4m12-9h4m-4-9h4"
      />
    </svg>
  );
};

CityOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CityOneIcon = withWrapper(CityOneIconComponent);
export default CityOneIcon;
