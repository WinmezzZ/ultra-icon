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
const PaperShipIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m4 24 8.571 18L24 29 4 24Zm40 0-8.571 18L24 29l20-5ZM13 42h22L24 29 13 42Z"
      />
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M12 26 24 4l12 22" />
    </svg>
  );
};

PaperShipIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PaperShipIcon = withWrapper(PaperShipIconComponent);
export default PaperShipIcon;
