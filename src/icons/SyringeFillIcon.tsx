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
const SyringeFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m21.678 7.98-1.415 1.413-2.12-2.12-2.122 2.12 3.535 3.536-1.414 1.414-.707-.707L11.071 20H5.414l-2.121 2.121-1.414-1.414L4 18.586v-5.657l6.364-6.364-.707-.707 1.414-1.414 3.536 3.535 2.12-2.121-2.12-2.121 1.414-1.415 5.657 5.657zM9.657 14.342l-2.829-2.828-1.414 1.414 2.829 2.828 1.414-1.414zm2.828-2.828L9.657 8.686l-1.414 1.415 2.828 2.828 1.414-1.414z" />
    </svg>
  );
};

SyringeFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SyringeFillIcon = withWrapper(SyringeFillIconComponent);
export default SyringeFillIcon;
