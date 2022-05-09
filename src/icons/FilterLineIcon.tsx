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
const FilterLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M21 4v2h-1l-5 7.5V22H9v-8.5L4 6H3V4h18zM6.404 6 11 12.894V20h2v-7.106L17.596 6H6.404z" />
    </svg>
  );
};

FilterLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FilterLineIcon = withWrapper(FilterLineIconComponent);
export default FilterLineIcon;
