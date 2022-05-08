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
const NintendoSwitchIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M6 18c0-5.657 0-8.485 1.757-10.243C9.515 6 12.343 6 18 6h2v36h-2c-5.657 0-8.485 0-10.243-1.757C6 38.485 6 35.657 6 30V18Zm36 0c0-5.657 0-8.485-1.757-10.243C38.485 6 35.657 6 30 6h-2v36h2c5.657 0 8.485 0 10.243-1.757C42 38.485 42 35.657 42 30V18Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M35 13v2M13 33v2" />
    </svg>
  );
};

NintendoSwitchIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const NintendoSwitchIcon = withWrapper(NintendoSwitchIconComponent);
export default NintendoSwitchIcon;
