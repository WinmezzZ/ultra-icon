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
const AirplayIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M12 35.014H4V8.013a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v27h-8"
      />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M24 32 14 42h20L24 32Z" />
    </svg>
  );
};

AirplayIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AirplayIcon = withWrapper(AirplayIconComponent);
export default AirplayIcon;
