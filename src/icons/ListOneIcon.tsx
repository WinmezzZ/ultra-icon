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
const ListOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M18 6h16v6H18V6Zm0 15h20v6H18v-6Zm0 15h26v6H18v-6Z"
      />
      <circle cx={8} cy={9} r={2} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={8} cy={24} r={2} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={8} cy={39} r={2} fill="null" stroke="#000" strokeWidth={4} />
    </svg>
  );
};

ListOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ListOneIcon = withWrapper(ListOneIconComponent);
export default ListOneIcon;
