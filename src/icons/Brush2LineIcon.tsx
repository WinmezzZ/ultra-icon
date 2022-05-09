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
const Brush2LineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m16.536 15.95 2.12-2.122-3.181-3.182 3.535-3.535-2.12-2.121-3.536 3.535-3.182-3.182L8.05 7.464l8.486 8.486zm-1.415 1.414L6.636 8.879l-2.828 2.828 8.485 8.485 2.828-2.828zM13.354 5.697l2.828-2.829a1 1 0 0 1 1.414 0l3.536 3.536a1 1 0 0 1 0 1.414l-2.829 2.828 2.475 2.475a1 1 0 0 1 0 1.415L13 22.314a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l7.778-7.778a1 1 0 0 1 1.415 0l2.475 2.475z" />
    </svg>
  );
};

Brush2LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Brush2LineIcon = withWrapper(Brush2LineIconComponent);
export default Brush2LineIcon;