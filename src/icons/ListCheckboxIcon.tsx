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
const ListCheckboxIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="null" fillRule="evenodd" d="M20 24h24-24Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 24h24" />
      <path fill="null" fillRule="evenodd" d="M20 38h24-24Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 38h24" />
      <path fill="null" fillRule="evenodd" d="M20 10h24-24Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 10h24" />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M4 34h8v8H4zm0-14h8v8H4zM4 6h8v8H4z" />
    </svg>
  );
};

ListCheckboxIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ListCheckboxIcon = withWrapper(ListCheckboxIconComponent);
export default ListCheckboxIcon;
