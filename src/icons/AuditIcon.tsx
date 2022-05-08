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
const AuditIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m8 36 .004-7.957c.001-.552.449-1 1-1h10.003c.921 0 .916-.818.916-2.764 0-1.946-4.901-3.585-4.901-10.426S20.1 5 24.32 5s8.816 2.012 8.816 8.853c0 6.841-4.876 7.929-4.876 10.426s0 2.764.781 2.764h9.96a1 1 0 0 1 1 1V36H8Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M8 42h32" />
    </svg>
  );
};

AuditIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AuditIcon = withWrapper(AuditIconComponent);
export default AuditIcon;
