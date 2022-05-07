/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const defaultProps = {
  size: 24,
};

const BeachUmbrellaIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M14.34 21.412 24 24l9.66 2.588 9.659 2.588c2.338-8.725-1.472-17.65-8.773-22.176a20 20 0 0 0-5.37-2.319 19.97 19.97 0 0 0-6.676-.63c-8.237.62-15.56 6.341-17.818 14.773l9.659 2.588Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M29.176 4.681s-5.64 3.665-8.866 7.977-4.037 9.271-4.037 9.271M29.176 4.681s3.053 5.995 3.69 11.342c.639 5.347-1.139 10.047-1.139 10.047"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m4.682 18.824 9.659 2.588L24 24l9.66 2.588 9.659 2.588M4 44h40M24 24l-5.5 20m4-39.95a19.97 19.97 0 0 1 6.676.631A20 20 0 0 1 34.546 7"
        />
      </svg>
    </span>
  );
};

BeachUmbrellaIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BeachUmbrellaIcon;
