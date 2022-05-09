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
const EjectFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m12.416 3.624 7.066 10.599a.5.5 0 0 1-.416.777H4.934a.5.5 0 0 1-.416-.777l7.066-10.599a.5.5 0 0 1 .832 0zM5 17h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z" />
    </svg>
  );
};

EjectFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const EjectFillIcon = withWrapper(EjectFillIconComponent);
export default EjectFillIcon;
