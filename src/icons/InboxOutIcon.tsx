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
const InboxOutIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 30 9 6h30l5 24" />
        <path
          fill="null"
          fillRule="nonzero"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M4 30h10.91l1.817 6h14.546l1.818-6H44v13H4z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m18 20 6-6 6 6m-6 6V14" />
      </g>
    </svg>
  );
};

InboxOutIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const InboxOutIcon = withWrapper(InboxOutIconComponent);
export default InboxOutIcon;
