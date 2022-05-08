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
const YoutobeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M44 32.768V15.232c0-1.325-.87-2.49-2.155-2.812C38.369 11.548 31.185 10 24 10c-7.184 0-14.369 1.548-17.845 2.42C4.87 12.743 4 13.907 4 15.232v17.536c0 1.325.87 2.49 2.155 2.812C9.631 36.452 16.815 38 24 38c7.184 0 14.369-1.548 17.845-2.42C43.13 35.257 44 34.093 44 32.768Z"
      />
      <path
        fill="null"
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M22.573 29.899a1 1 0 0 1-1.573-.82V18.921a1 1 0 0 1 1.573-.82l7.257 5.08a1 1 0 0 1 0 1.638l-7.256 5.08Z"
      />
    </svg>
  );
};

YoutobeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const YoutobeIcon = withWrapper(YoutobeIconComponent);
export default YoutobeIcon;
