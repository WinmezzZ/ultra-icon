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
const PullRequestsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g stroke="#000" strokeWidth={4} transform="translate(7 4)">
          <circle cx={30} cy={36} r={4} fill="null" fillRule="nonzero" />
          <circle cx={4} cy={4} r={4} fill="null" fillRule="nonzero" />
          <circle cx={4} cy={36} r={4} fill="null" fillRule="nonzero" />
          <path strokeLinecap="round" d="M4 8v24M17 6h9a4 4 0 0 1 4 4v22" />
          <path strokeLinecap="round" d="m23 12-6-6 6-6" />
        </g>
      </g>
    </svg>
  );
};

PullRequestsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PullRequestsIcon = withWrapper(PullRequestsIconComponent);
export default PullRequestsIcon;
