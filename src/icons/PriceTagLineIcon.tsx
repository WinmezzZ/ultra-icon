/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const PriceTagLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m3 7 8.445-5.63a1 1 0 0 1 1.11 0L21 7v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7zm2 1.07V20h14V8.07l-7-4.666L5 8.07zM12 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </svg>
  );
};

PriceTagLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PriceTagLineIcon = withWrapper(PriceTagLineIconComponent);
export default PriceTagLineIcon;
