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
const RainyFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m15.86 18-3.153-3.153a1 1 0 0 0-1.414 0L8.18 17.96a8.001 8.001 0 1 1 7.8-11.873A6 6 0 1 1 17 18h-1.139zm-5.628.732L12 16.964l1.768 1.768a2.5 2.5 0 1 1-3.536 0z" />
    </svg>
  );
};

RainyFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RainyFillIcon = withWrapper(RainyFillIconComponent);
export default RainyFillIcon;
