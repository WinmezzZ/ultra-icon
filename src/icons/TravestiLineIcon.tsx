/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const TravestiLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M8.95 8.537A7.5 7.5 0 1 1 7.537 9.95L4.662 7.075 2.186 9.55.772 8.136l6.364-6.364L8.55 3.186 6.075 5.661l2.876 2.876zM13.5 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z" />
    </svg>
  );
};

TravestiLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TravestiLineIcon = withWrapper(TravestiLineIconComponent);
export default TravestiLineIcon;
