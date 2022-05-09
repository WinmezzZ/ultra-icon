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
const CapsuleFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M19.778 4.222a6 6 0 0 1 0 8.485l-2.122 2.12-4.949 4.951a6 6 0 0 1-8.485-8.485l7.07-7.071a6.001 6.001 0 0 1 8.486 0zm-4.95 10.606L9.172 9.172l-3.536 3.535a4 4 0 0 0 5.657 5.657l3.535-3.536z" />
    </svg>
  );
};

CapsuleFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CapsuleFillIcon = withWrapper(CapsuleFillIconComponent);
export default CapsuleFillIcon;
