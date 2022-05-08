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
const RankingListIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M42 8H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M24 17v14m8-7v7m-16-9v9" />
    </svg>
  );
};

RankingListIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RankingListIcon = withWrapper(RankingListIconComponent);
export default RankingListIcon;
