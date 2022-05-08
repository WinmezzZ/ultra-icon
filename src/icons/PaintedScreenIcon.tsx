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
const PaintedScreenIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect width={38} height={28} x={5} y={10} fill="null" stroke="#000" strokeWidth={4} rx={3} />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 24v-7" />
      <rect width={4} height={4} x={15} y={29} fill="#fff" rx={2} transform="rotate(90 15 29)" />
    </svg>
  );
};

PaintedScreenIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PaintedScreenIcon = withWrapper(PaintedScreenIconComponent);
export default PaintedScreenIcon;
