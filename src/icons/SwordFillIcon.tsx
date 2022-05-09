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
const SwordFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m7.05 13.406 3.534 3.536-1.413 1.414 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413 1.413-1.414zM3 3l3.546.003 11.817 11.818 1.415-1.414 1.414 1.414-2.474 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.475 2.475-1.414-1.414 1.414-1.415L3.003 6.531 3 3zm14.457 0L21 3.003l.002 3.523-4.053 4.052-3.536-3.535L17.457 3z" />
    </svg>
  );
};

SwordFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SwordFillIcon = withWrapper(SwordFillIconComponent);
export default SwordFillIcon;
