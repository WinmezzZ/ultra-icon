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
const DeleteOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="m15 12 1.2-7h15.6l1.2 7" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M6 12h36" />
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m37 12-2 31H13l-2-31h26Z"
        clipRule="evenodd"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M19 35h10" />
    </svg>
  );
};

DeleteOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DeleteOneIcon = withWrapper(DeleteOneIconComponent);
export default DeleteOneIcon;
